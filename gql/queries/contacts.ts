import { gql } from 'apollo-boost'

export const CONTACT_QUERY = gql`
	query {
		contacts {
			id
			language
			title
			address
			taxIdentificationNumbers
			taxIdentificationDescription
			email
			phoneNumber
			formSubmit
			FormName
			FormEmail
			FormText
			formNameWarning
			formEmailWarning
			formInvalidEmailWarning
		}
	}
`
