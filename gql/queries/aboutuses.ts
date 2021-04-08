import { gql } from 'apollo-boost'

export const ABOUT_QUERY = gql`
	query {
		aboutuses {
			id
			language
			id
			created_at
			updated_at
			language
			heroDescription
			heroLogo {
				url
				alternativeText
			}
			heroHeadlineTop
			heroHeadlineBottom
			heroArrowTitle
			weAreHeadline
			weAreDescription
			weAreArrowTitle
			skillsHeadline
			skillsDescription
			technologiesDescription
			technologiesImage {
				url
				alternativeText
			}
			valuesHeadline
			teamHeadline
			hqHeadline
			hqDescription
			careerHeadline
			careerDescription
			careerCTATitle
			careerCTAImage {
				url
				alternativeText
			}
			blogHeadline
			published_at
			weAreImageCarousel {
				id
				url
				alternativeText
			}
			skills {
				id
				title
				description
				titleColorHash
			}
			brandValues {
				id
				headline
				backgroundNumber
				image {
					url
					alternativeText
				}
				description
			}
			hqImageGrid {
				url
				alternativeText
			}
		}
	}
`
