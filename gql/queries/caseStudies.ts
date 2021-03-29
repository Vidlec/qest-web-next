import { gql } from 'apollo-boost'

export const CASE_STUDIES_QUERY = gql`
	query CaseStudies {
		caseStudies {
			id
			title
			language
			subtitle
			about
			projectId
			system
			created_at
			updated_at
			published_at
			client
			mainImage {
				url
			}
			content {
				... on ComponentContentImage {
					id
					widthPercent
					__typename
					image {
						url
					}
				}
				... on ComponentContentInfoColumn {
					id
					widthPercent
					__typename
					title
					description
					number
					infoColumnImage {
						url
					}
				}
				... on ComponentContentRichText {
					id
					title
					__typename
					desciption
					desciptionLevel2
					desciptionLevel3
					subtitle
					widthPercent
					richTextImage {
						url
					}
				}
				... on ComponentContentTechnologies {
					id
					technologies
					__typename
					description
				}
			}
		}
	}
`
