import fs from 'fs'
import fetch from 'node-fetch'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HOMEPAGE_QUERY } from '../gql/queries/homepages'
import { Homepage } from '../gql/generated/types'
import { Language } from '../locale'

type Resources = {
	homepage: Homepage[]
}

const removeUnnecessaryProperties = (object) => ({
	...object,
	id: undefined,
	__typename: undefined,
})

const toResource = ({ homepage }: Resources, language: Language) => {
	const translatedHomepage = removeUnnecessaryProperties(
		homepage.find((homepage) => homepage?.language === language)
	)

	return {
		translation: {
			homepage: translatedHomepage,
		},
	}
}

const main = async () => {
	const apolloClient = new ApolloClient({
		link: createHttpLink({
			uri: process.env.CMS_GRAPHQL_URL,
			fetch: fetch as never,
		}),
		cache: new InMemoryCache(),
	})

	const homepages = await apolloClient.query({ query: HOMEPAGE_QUERY })

	const resources = [homepages?.data?.homepages].map((language) => ({
		language,
		resource: toResource(
			{ homepage: homepages?.data?.homepages || [] },
			language
		),
	}))

	resources.map(({ language, resource }) =>
		fs.writeFileSync(
			`locale/generated/resources/${language}.json`,
			JSON.stringify(resource, null, 2)
		)
	)
}

main()
	.then(() => console.log('Translations generated successful'))
	.catch(console.error)
