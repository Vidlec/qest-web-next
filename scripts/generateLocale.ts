import fs from 'fs'
import fetch from 'node-fetch'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import { HOMEPAGE_QUERY } from '../gql/queries/homepages'
import {
	Contact,
	Homepage,
	Header,
	Menu,
	Language,
	SocialNetwork,
	AboutUs,
} from '../gql/generated/types'
import { MENU_QUERY } from '../gql/queries/menus'
import { HEADER_QUERY } from '../gql/queries/headers'
import { LANGUAGE_QUERY } from '../gql/queries/languages'
import { CONTACT_QUERY } from '../gql/queries/contacts'
import { SOCIAL_NETWORK_QUERY } from '../gql/queries/socialNetworks'
import { ABOUT_QUERY } from '../gql/queries/aboutuses'

type Resources = {
	homepage: Homepage[]
	menu: Menu[]
	header: Header[]
	contact: Contact[]
	about: AboutUs[]
}

const apolloClient = new ApolloClient({
	link: createHttpLink({
		uri: process.env.CMS_GRAPHQL_URL,
		fetch: fetch as never,
	}),
	cache: new InMemoryCache(),
})

const toResource = (
	{ homepage, menu, header, contact, about }: Resources,
	language: string
) => {
	const translatedHomepage = homepage.find(
		(homepage) => homepage?.language === language
	)

	const translatedMenu = menu.find((menu) => menu?.language === language)

	const translatedHeader = header.find(
		(header) => header?.language === language
	)

	const translatedContact = contact.find(
		(contact) => contact?.language === language
	)
	const translatedAbout = about.find((about) => about?.language === language)

	return {
		translation: {
			homepage: translatedHomepage,
			menu: translatedMenu,
			header: translatedHeader,
			contact: translatedContact,
			about: translatedAbout,
		},
	}
}

const main = async () => {
	const [
		homepages,
		menus,
		headers,
		languages,
		contacts,
		socialNetworks,
		about,
	] = await Promise.all(
		[
			HOMEPAGE_QUERY,
			MENU_QUERY,
			HEADER_QUERY,
			LANGUAGE_QUERY,
			CONTACT_QUERY,
			SOCIAL_NETWORK_QUERY,
			ABOUT_QUERY,
		].map(async (query) => apolloClient.query({ query }))
	)

	const translatedResources = languages?.data?.languages.map(
		(language: Language) => {
			const translatedTexts = toResource(
				{
					homepage: homepages.data.homepages,
					menu: menus.data.menus,
					header: headers.data.headers,
					contact: contacts.data.contacts,
					about: about.data.aboutuses,
				},
				language.languageCode!
			)

			return {
				language: language.languageCode,
				resource: {
					...translatedTexts,
					translation: {
						...translatedTexts.translation,
						socialNetworkUrls: socialNetworks.data.socialNetworks.reduce(
							(
								socialNetworks: Record<string, SocialNetwork>,
								socialNetwork: SocialNetwork
							) => ({
								...socialNetworks,
								[socialNetwork.name!]: { ...socialNetwork },
							}),
							{}
						),
					},
				},
			}
		}
	)

	fs.writeFileSync(
		'locale/generated/languages.json',
		JSON.stringify(languages?.data?.languages || [], null, 2)
	)

	translatedResources.map(({ language, resource }: any) =>
		fs.writeFileSync(
			`locale/generated/resources/${language}.json`,
			JSON.stringify(resource, null, 2)
		)
	)
}

main()
	.then(() => console.log('Translations generated successful'))
	.catch(console.error)
