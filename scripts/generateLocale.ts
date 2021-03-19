import fs from 'fs'
import fetch from 'node-fetch'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { HOMEPAGE_QUERY } from '../gql/queries/homepages'
import { Homepage, Header, Menu, Language } from '../gql/generated/types'
import { MENU_QUERY } from '../gql/queries/menus'
import { HEADER_QUERY } from '../gql/queries/headers'
import { LANGUAGE_QUERY } from '../gql/queries/languages'

type Resources = {
	homepage: Homepage[]
	menu: Menu[]
	header: Header[]
}

const removeUnnecessaryProperties = (
	object: Homepage | Header | Menu | undefined
) => ({
	...object,
	id: undefined,
	__typename: undefined,
})

const toResource = (
	{ homepage, menu, header }: Resources,
	language: string
) => {
	const translatedHomepage = removeUnnecessaryProperties(
		homepage.find((homepage) => homepage?.language === language)
	)

	const translatedMenu = removeUnnecessaryProperties(
		menu.find((menu) => menu?.language === language)
	)

	const translatedHeader = removeUnnecessaryProperties(
		header.find((header) => header?.language === language)
	)

	return {
		translation: {
			homepage: translatedHomepage,
			menu: translatedMenu,
			header: translatedHeader,
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
	const menus = await apolloClient.query({ query: MENU_QUERY })
	const headers = await apolloClient.query({ query: HEADER_QUERY })
	const languages = await apolloClient.query({ query: LANGUAGE_QUERY })

	const resources = languages?.data?.languages.map((language: Language) => ({
		language: language.languageCode,
		resource: toResource(
			{
				homepage: homepages?.data?.homepages || [],
				menu: menus?.data?.menus || [],
				header: headers?.data?.headers || [],
			},
			language.languageCode!
		),
	}))

	fs.writeFileSync(
		'locale/generated/languages.json',
		JSON.stringify(languages?.data?.languages || [], null, 2)
	)

	resources.map(({ language, resource }: any) =>
		fs.writeFileSync(
			`locale/generated/resources/${language}.json`,
			JSON.stringify(resource, null, 2)
		)
	)
}

main()
	.then(() => console.log('Translations generated successful'))
	.catch(console.error)
