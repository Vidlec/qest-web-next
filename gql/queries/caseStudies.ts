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
      mainImage {
        url
        previewUrl
      }
			content {
				... on ComponentContentImage {
					id
					widthPercent
					__typename
				}
				... on ComponentContentInfoColumn {
					id
					widthPercent
					__typename
				}
				... on ComponentContentRichText {
					id
					title
					__typename
				}
				... on ComponentContentTechnologies {
					id
					technologies
					__typename
				}
			}
		}
	}
`
