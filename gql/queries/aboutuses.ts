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
			teams {
				name
				position
				video {
					url
					alternativeText
				}
			}
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
			blogReadMore
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
				id
				url
				alternativeText
			}
			hqWeAreHereImage {
				id
				url
				alternativeText
			}
			hqCTATitle
			hqWeAreHereDescription
			arrow {
				url
				alternativeText
			}
		}
	}
`
