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
	Page404,
	SocialNetwork,
	AboutUs,
	CareerOfferings
} from '../gql/generated/types'
import { MENU_QUERY } from '../gql/queries/menus'
import { HEADER_QUERY } from '../gql/queries/headers'
import { LANGUAGE_QUERY } from '../gql/queries/languages'
import { CONTACT_QUERY } from '../gql/queries/contacts'
import { PAGE404_QUERY } from '../gql/queries/page404s'
import { SOCIAL_NETWORK_QUERY } from '../gql/queries/socialNetworks'
import { ABOUT_QUERY } from '../gql/queries/aboutuses'
import { CAREER_OFFERINGS_QUERY } from '../gql/queries/careerOfferings'

type Resources = {
	homepage: Homepage[]
	menu: Menu[]
	header: Header[]
	contact: Contact[]
	page404s: Page404[]
	about: AboutUs[]
	careerOffering: CareerOfferings[]
}

const apolloClient = new ApolloClient({
	link: createHttpLink({
		uri: process.env.CMS_GRAPHQL_URL,
		fetch: fetch as never,
	}),
	cache: new InMemoryCache(),
})

const toResource = (
	{ homepage, menu, header, contact, page404s, about, careerOffering }: Resources,
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

	const translatedPage404 = page404s.find(
		(page404) => page404?.language === language
	)

	const translatedAbout = about.find((about) => about?.language === language)

	const translatedCareerOffering = careerOffering.filter(
		(item) => item?.language === language
	)

	return {
		translation: {
			homepage: translatedHomepage,
			menu: translatedMenu,
			header: translatedHeader,
			contact: translatedContact,
			page404s: translatedPage404,
			about: translatedAbout,
			careerOffering: translatedCareerOffering,
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
		page404s,
		socialNetworks,
		about,
		jobs,
	] = await Promise.all(
		[
			HOMEPAGE_QUERY,
			MENU_QUERY,
			HEADER_QUERY,
			LANGUAGE_QUERY,
			CONTACT_QUERY,
			PAGE404_QUERY,
			SOCIAL_NETWORK_QUERY,
			ABOUT_QUERY,
			CAREER_OFFERINGS_QUERY,
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
					page404s: page404s.data.page404s,
					about: about.data.aboutuses,
					careerOffering: jobs.data.careerOfferings,
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
	.catch((error) => {console.error(JSON.stringify(error, null, 2))})
