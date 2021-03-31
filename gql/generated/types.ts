export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string
	String: string
	Boolean: boolean
	Int: number
	Float: number
	/** Input type for dynamic zone content of CaseStudy */
	CaseStudyContentDynamicZoneInput: any
	/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
	JSON: any
	/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
	DateTime: any
	/** A time string with format: HH:mm:ss.SSS */
	Time: any
	/** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
	Date: any
	/** The `Long` scalar type represents 52-bit integers */
	Long: any
	/** The `Upload` scalar type represents a file upload. */
	Upload: any
}

export type FileInfoInput = {
	name?: Maybe<Scalars['String']>
	alternativeText?: Maybe<Scalars['String']>
	caption?: Maybe<Scalars['String']>
}

export type UsersPermissionsMe = {
	__typename?: 'UsersPermissionsMe'
	id: Scalars['ID']
	username: Scalars['String']
	email: Scalars['String']
	confirmed?: Maybe<Scalars['Boolean']>
	blocked?: Maybe<Scalars['Boolean']>
	role?: Maybe<UsersPermissionsMeRole>
}

export type UsersPermissionsMeRole = {
	__typename?: 'UsersPermissionsMeRole'
	id: Scalars['ID']
	name: Scalars['String']
	description?: Maybe<Scalars['String']>
	type?: Maybe<Scalars['String']>
}

export type UsersPermissionsRegisterInput = {
	username: Scalars['String']
	email: Scalars['String']
	password: Scalars['String']
}

export type UsersPermissionsLoginInput = {
	identifier: Scalars['String']
	password: Scalars['String']
	provider?: Maybe<Scalars['String']>
}

export type UsersPermissionsLoginPayload = {
	__typename?: 'UsersPermissionsLoginPayload'
	jwt?: Maybe<Scalars['String']>
	user: UsersPermissionsMe
}

export type UserPermissionsPasswordPayload = {
	__typename?: 'UserPermissionsPasswordPayload'
	ok: Scalars['Boolean']
}

export type CaseStudyMeta = {
	__typename?: 'CaseStudyMeta'
	id: Scalars['ID']
	created_at: Scalars['DateTime']
	updated_at: Scalars['DateTime']
	industry?: Maybe<Scalars['String']>
	client?: Maybe<Scalars['String']>
	system?: Maybe<Scalars['String']>
	technologies?: Maybe<Scalars['String']>
	previousProject?: Maybe<Scalars['String']>
	nextProject?: Maybe<Scalars['String']>
	footerText?: Maybe<Scalars['String']>
	writeUs?: Maybe<Scalars['String']>
	language?: Maybe<Scalars['String']>
	published_at?: Maybe<Scalars['DateTime']>
}

export type CaseStudyMetaConnection = {
	__typename?: 'CaseStudyMetaConnection'
	values?: Maybe<Array<Maybe<CaseStudyMeta>>>
	groupBy?: Maybe<CaseStudyMetaGroupBy>
	aggregate?: Maybe<CaseStudyMetaAggregator>
}

export type CaseStudyMetaAggregator = {
	__typename?: 'CaseStudyMetaAggregator'
	count?: Maybe<Scalars['Int']>
	totalCount?: Maybe<Scalars['Int']>
}

export type CaseStudyMetaGroupBy = {
	__typename?: 'CaseStudyMetaGroupBy'
	id?: Maybe<Array<Maybe<CaseStudyMetaConnectionId>>>
	created_at?: Maybe<Array<Maybe<CaseStudyMetaConnectionCreated_At>>>
	updated_at?: Maybe<Array<Maybe<CaseStudyMetaConnectionUpdated_At>>>
	industry?: Maybe<Array<Maybe<CaseStudyMetaConnectionIndustry>>>
	client?: Maybe<Array<Maybe<CaseStudyMetaConnectionClient>>>
	system?: Maybe<Array<Maybe<CaseStudyMetaConnectionSystem>>>
	technologies?: Maybe<Array<Maybe<CaseStudyMetaConnectionTechnologies>>>
	previousProject?: Maybe<
		Array<Maybe<CaseStudyMetaConnectionPreviousProject>>
	>
	nextProject?: Maybe<Array<Maybe<CaseStudyMetaConnectionNextProject>>>
	footerText?: Maybe<Array<Maybe<CaseStudyMetaConnectionFooterText>>>
	writeUs?: Maybe<Array<Maybe<CaseStudyMetaConnectionWriteUs>>>
	language?: Maybe<Array<Maybe<CaseStudyMetaConnectionLanguage>>>
	published_at?: Maybe<Array<Maybe<CaseStudyMetaConnectionPublished_At>>>
}

export type CaseStudyMetaConnectionId = {
	__typename?: 'CaseStudyMetaConnectionId'
	key?: Maybe<Scalars['ID']>
	connection?: Maybe<CaseStudyMetaConnection>
}

export type CaseStudyMetaConnectionCreated_At = {
	__typename?: 'CaseStudyMetaConnectionCreated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<CaseStudyMetaConnection>
}

export type CaseStudyMetaConnectionUpdated_At = {
	__typename?: 'CaseStudyMetaConnectionUpdated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<CaseStudyMetaConnection>
}

export type CaseStudyMetaConnectionIndustry = {
	__typename?: 'CaseStudyMetaConnectionIndustry'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<CaseStudyMetaConnection>
}

export type CaseStudyMetaConnectionClient = {
	__typename?: 'CaseStudyMetaConnectionClient'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<CaseStudyMetaConnection>
}

export type CaseStudyMetaConnectionSystem = {
	__typename?: 'CaseStudyMetaConnectionSystem'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<CaseStudyMetaConnection>
}

export type CaseStudyMetaConnectionTechnologies = {
	__typename?: 'CaseStudyMetaConnectionTechnologies'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<CaseStudyMetaConnection>
}

export type CaseStudyMetaConnectionPreviousProject = {
	__typename?: 'CaseStudyMetaConnectionPreviousProject'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<CaseStudyMetaConnection>
}

export type CaseStudyMetaConnectionNextProject = {
	__typename?: 'CaseStudyMetaConnectionNextProject'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<CaseStudyMetaConnection>
}

export type CaseStudyMetaConnectionFooterText = {
	__typename?: 'CaseStudyMetaConnectionFooterText'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<CaseStudyMetaConnection>
}

export type CaseStudyMetaConnectionWriteUs = {
	__typename?: 'CaseStudyMetaConnectionWriteUs'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<CaseStudyMetaConnection>
}

export type CaseStudyMetaConnectionLanguage = {
	__typename?: 'CaseStudyMetaConnectionLanguage'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<CaseStudyMetaConnection>
}

export type CaseStudyMetaConnectionPublished_At = {
	__typename?: 'CaseStudyMetaConnectionPublished_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<CaseStudyMetaConnection>
}

export type CaseStudyMetaInput = {
	industry?: Maybe<Scalars['String']>
	client?: Maybe<Scalars['String']>
	system?: Maybe<Scalars['String']>
	technologies?: Maybe<Scalars['String']>
	previousProject?: Maybe<Scalars['String']>
	nextProject?: Maybe<Scalars['String']>
	footerText?: Maybe<Scalars['String']>
	writeUs?: Maybe<Scalars['String']>
	language?: Maybe<Scalars['String']>
	published_at?: Maybe<Scalars['DateTime']>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type EditCaseStudyMetaInput = {
	industry?: Maybe<Scalars['String']>
	client?: Maybe<Scalars['String']>
	system?: Maybe<Scalars['String']>
	technologies?: Maybe<Scalars['String']>
	previousProject?: Maybe<Scalars['String']>
	nextProject?: Maybe<Scalars['String']>
	footerText?: Maybe<Scalars['String']>
	writeUs?: Maybe<Scalars['String']>
	language?: Maybe<Scalars['String']>
	published_at?: Maybe<Scalars['DateTime']>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type CreateCaseStudyMetaInput = {
	data?: Maybe<CaseStudyMetaInput>
}

export type CreateCaseStudyMetaPayload = {
	__typename?: 'createCaseStudyMetaPayload'
	caseStudyMeta?: Maybe<CaseStudyMeta>
}

export type UpdateCaseStudyMetaInput = {
	where?: Maybe<InputId>
	data?: Maybe<EditCaseStudyMetaInput>
}

export type UpdateCaseStudyMetaPayload = {
	__typename?: 'updateCaseStudyMetaPayload'
	caseStudyMeta?: Maybe<CaseStudyMeta>
}

export type DeleteCaseStudyMetaInput = {
	where?: Maybe<InputId>
}

export type DeleteCaseStudyMetaPayload = {
	__typename?: 'deleteCaseStudyMetaPayload'
	caseStudyMeta?: Maybe<CaseStudyMeta>
}

export type CaseStudyContentDynamicZone =
	| ComponentContentImage
	| ComponentContentInfoColumn
	| ComponentContentRichText
	| ComponentContentTechnologies

export type CaseStudy = {
	__typename?: 'CaseStudy'
	id: Scalars['ID']
	created_at: Scalars['DateTime']
	updated_at: Scalars['DateTime']
	title: Scalars['String']
	subtitle?: Maybe<Scalars['String']>
	about?: Maybe<Scalars['String']>
	industry?: Maybe<Scalars['String']>
	client?: Maybe<Scalars['String']>
	system?: Maybe<Scalars['String']>
	mainImage?: Maybe<UploadFile>
	content?: Maybe<Array<Maybe<CaseStudyContentDynamicZone>>>
	language: Scalars['String']
	projectId: Scalars['String']
	published_at?: Maybe<Scalars['DateTime']>
}

export type CaseStudyConnection = {
	__typename?: 'CaseStudyConnection'
	values?: Maybe<Array<Maybe<CaseStudy>>>
	groupBy?: Maybe<CaseStudyGroupBy>
	aggregate?: Maybe<CaseStudyAggregator>
}

export type CaseStudyAggregator = {
	__typename?: 'CaseStudyAggregator'
	count?: Maybe<Scalars['Int']>
	totalCount?: Maybe<Scalars['Int']>
}

export type CaseStudyGroupBy = {
	__typename?: 'CaseStudyGroupBy'
	id?: Maybe<Array<Maybe<CaseStudyConnectionId>>>
	created_at?: Maybe<Array<Maybe<CaseStudyConnectionCreated_At>>>
	updated_at?: Maybe<Array<Maybe<CaseStudyConnectionUpdated_At>>>
	title?: Maybe<Array<Maybe<CaseStudyConnectionTitle>>>
	subtitle?: Maybe<Array<Maybe<CaseStudyConnectionSubtitle>>>
	about?: Maybe<Array<Maybe<CaseStudyConnectionAbout>>>
	industry?: Maybe<Array<Maybe<CaseStudyConnectionIndustry>>>
	client?: Maybe<Array<Maybe<CaseStudyConnectionClient>>>
	system?: Maybe<Array<Maybe<CaseStudyConnectionSystem>>>
	mainImage?: Maybe<Array<Maybe<CaseStudyConnectionMainImage>>>
	language?: Maybe<Array<Maybe<CaseStudyConnectionLanguage>>>
	projectId?: Maybe<Array<Maybe<CaseStudyConnectionProjectId>>>
	published_at?: Maybe<Array<Maybe<CaseStudyConnectionPublished_At>>>
}

export type CaseStudyConnectionId = {
	__typename?: 'CaseStudyConnectionId'
	key?: Maybe<Scalars['ID']>
	connection?: Maybe<CaseStudyConnection>
}

export type CaseStudyConnectionCreated_At = {
	__typename?: 'CaseStudyConnectionCreated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<CaseStudyConnection>
}

export type CaseStudyConnectionUpdated_At = {
	__typename?: 'CaseStudyConnectionUpdated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<CaseStudyConnection>
}

export type CaseStudyConnectionTitle = {
	__typename?: 'CaseStudyConnectionTitle'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<CaseStudyConnection>
}

export type CaseStudyConnectionSubtitle = {
	__typename?: 'CaseStudyConnectionSubtitle'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<CaseStudyConnection>
}

export type CaseStudyConnectionAbout = {
	__typename?: 'CaseStudyConnectionAbout'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<CaseStudyConnection>
}

export type CaseStudyConnectionIndustry = {
	__typename?: 'CaseStudyConnectionIndustry'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<CaseStudyConnection>
}

export type CaseStudyConnectionClient = {
	__typename?: 'CaseStudyConnectionClient'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<CaseStudyConnection>
}

export type CaseStudyConnectionSystem = {
	__typename?: 'CaseStudyConnectionSystem'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<CaseStudyConnection>
}

export type CaseStudyConnectionMainImage = {
	__typename?: 'CaseStudyConnectionMainImage'
	key?: Maybe<Scalars['ID']>
	connection?: Maybe<CaseStudyConnection>
}

export type CaseStudyConnectionLanguage = {
	__typename?: 'CaseStudyConnectionLanguage'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<CaseStudyConnection>
}

export type CaseStudyConnectionProjectId = {
	__typename?: 'CaseStudyConnectionProjectId'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<CaseStudyConnection>
}

export type CaseStudyConnectionPublished_At = {
	__typename?: 'CaseStudyConnectionPublished_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<CaseStudyConnection>
}

export type CaseStudyInput = {
	title: Scalars['String']
	subtitle?: Maybe<Scalars['String']>
	about?: Maybe<Scalars['String']>
	industry?: Maybe<Scalars['String']>
	client?: Maybe<Scalars['String']>
	system?: Maybe<Scalars['String']>
	mainImage?: Maybe<Scalars['ID']>
	content?: Maybe<Array<Scalars['CaseStudyContentDynamicZoneInput']>>
	language: Scalars['String']
	projectId: Scalars['String']
	published_at?: Maybe<Scalars['DateTime']>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type EditCaseStudyInput = {
	title?: Maybe<Scalars['String']>
	subtitle?: Maybe<Scalars['String']>
	about?: Maybe<Scalars['String']>
	industry?: Maybe<Scalars['String']>
	client?: Maybe<Scalars['String']>
	system?: Maybe<Scalars['String']>
	mainImage?: Maybe<Scalars['ID']>
	content?: Maybe<Array<Scalars['CaseStudyContentDynamicZoneInput']>>
	language?: Maybe<Scalars['String']>
	projectId?: Maybe<Scalars['String']>
	published_at?: Maybe<Scalars['DateTime']>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type CreateCaseStudyInput = {
	data?: Maybe<CaseStudyInput>
}

export type CreateCaseStudyPayload = {
	__typename?: 'createCaseStudyPayload'
	caseStudy?: Maybe<CaseStudy>
}

export type UpdateCaseStudyInput = {
	where?: Maybe<InputId>
	data?: Maybe<EditCaseStudyInput>
}

export type UpdateCaseStudyPayload = {
	__typename?: 'updateCaseStudyPayload'
	caseStudy?: Maybe<CaseStudy>
}

export type DeleteCaseStudyInput = {
	where?: Maybe<InputId>
}

export type DeleteCaseStudyPayload = {
	__typename?: 'deleteCaseStudyPayload'
	caseStudy?: Maybe<CaseStudy>
}

export type Contact = {
	__typename?: 'Contact'
	id: Scalars['ID']
	created_at: Scalars['DateTime']
	updated_at: Scalars['DateTime']
	language?: Maybe<Scalars['String']>
	title?: Maybe<Scalars['String']>
	address?: Maybe<Scalars['String']>
	taxIdentificationNumbers?: Maybe<Scalars['String']>
	taxIdentificationDescription?: Maybe<Scalars['String']>
	email?: Maybe<Scalars['String']>
	phoneNumber?: Maybe<Scalars['String']>
	published_at?: Maybe<Scalars['DateTime']>
}

export type ContactConnection = {
	__typename?: 'ContactConnection'
	values?: Maybe<Array<Maybe<Contact>>>
	groupBy?: Maybe<ContactGroupBy>
	aggregate?: Maybe<ContactAggregator>
}

export type ContactAggregator = {
	__typename?: 'ContactAggregator'
	count?: Maybe<Scalars['Int']>
	totalCount?: Maybe<Scalars['Int']>
}

export type ContactGroupBy = {
	__typename?: 'ContactGroupBy'
	id?: Maybe<Array<Maybe<ContactConnectionId>>>
	created_at?: Maybe<Array<Maybe<ContactConnectionCreated_At>>>
	updated_at?: Maybe<Array<Maybe<ContactConnectionUpdated_At>>>
	language?: Maybe<Array<Maybe<ContactConnectionLanguage>>>
	title?: Maybe<Array<Maybe<ContactConnectionTitle>>>
	address?: Maybe<Array<Maybe<ContactConnectionAddress>>>
	taxIdentificationNumbers?: Maybe<
		Array<Maybe<ContactConnectionTaxIdentificationNumbers>>
	>
	taxIdentificationDescription?: Maybe<
		Array<Maybe<ContactConnectionTaxIdentificationDescription>>
	>
	email?: Maybe<Array<Maybe<ContactConnectionEmail>>>
	phoneNumber?: Maybe<Array<Maybe<ContactConnectionPhoneNumber>>>
	published_at?: Maybe<Array<Maybe<ContactConnectionPublished_At>>>
}

export type ContactConnectionId = {
	__typename?: 'ContactConnectionId'
	key?: Maybe<Scalars['ID']>
	connection?: Maybe<ContactConnection>
}

export type ContactConnectionCreated_At = {
	__typename?: 'ContactConnectionCreated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<ContactConnection>
}

export type ContactConnectionUpdated_At = {
	__typename?: 'ContactConnectionUpdated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<ContactConnection>
}

export type ContactConnectionLanguage = {
	__typename?: 'ContactConnectionLanguage'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<ContactConnection>
}

export type ContactConnectionTitle = {
	__typename?: 'ContactConnectionTitle'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<ContactConnection>
}

export type ContactConnectionAddress = {
	__typename?: 'ContactConnectionAddress'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<ContactConnection>
}

export type ContactConnectionTaxIdentificationNumbers = {
	__typename?: 'ContactConnectionTaxIdentificationNumbers'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<ContactConnection>
}

export type ContactConnectionTaxIdentificationDescription = {
	__typename?: 'ContactConnectionTaxIdentificationDescription'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<ContactConnection>
}

export type ContactConnectionEmail = {
	__typename?: 'ContactConnectionEmail'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<ContactConnection>
}

export type ContactConnectionPhoneNumber = {
	__typename?: 'ContactConnectionPhoneNumber'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<ContactConnection>
}

export type ContactConnectionPublished_At = {
	__typename?: 'ContactConnectionPublished_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<ContactConnection>
}

export type ContactInput = {
	language?: Maybe<Scalars['String']>
	title?: Maybe<Scalars['String']>
	address?: Maybe<Scalars['String']>
	taxIdentificationNumbers?: Maybe<Scalars['String']>
	taxIdentificationDescription?: Maybe<Scalars['String']>
	email?: Maybe<Scalars['String']>
	phoneNumber?: Maybe<Scalars['String']>
	published_at?: Maybe<Scalars['DateTime']>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type EditContactInput = {
	language?: Maybe<Scalars['String']>
	title?: Maybe<Scalars['String']>
	address?: Maybe<Scalars['String']>
	taxIdentificationNumbers?: Maybe<Scalars['String']>
	taxIdentificationDescription?: Maybe<Scalars['String']>
	email?: Maybe<Scalars['String']>
	phoneNumber?: Maybe<Scalars['String']>
	published_at?: Maybe<Scalars['DateTime']>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type CreateContactInput = {
	data?: Maybe<ContactInput>
}

export type CreateContactPayload = {
	__typename?: 'createContactPayload'
	contact?: Maybe<Contact>
}

export type UpdateContactInput = {
	where?: Maybe<InputId>
	data?: Maybe<EditContactInput>
}

export type UpdateContactPayload = {
	__typename?: 'updateContactPayload'
	contact?: Maybe<Contact>
}

export type DeleteContactInput = {
	where?: Maybe<InputId>
}

export type DeleteContactPayload = {
	__typename?: 'deleteContactPayload'
	contact?: Maybe<Contact>
}

export type Header = {
	__typename?: 'Header'
	id: Scalars['ID']
	created_at: Scalars['DateTime']
	updated_at: Scalars['DateTime']
	title?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
	language?: Maybe<Scalars['String']>
	logo?: Maybe<UploadFile>
	published_at?: Maybe<Scalars['DateTime']>
}

export type HeaderConnection = {
	__typename?: 'HeaderConnection'
	values?: Maybe<Array<Maybe<Header>>>
	groupBy?: Maybe<HeaderGroupBy>
	aggregate?: Maybe<HeaderAggregator>
}

export type HeaderAggregator = {
	__typename?: 'HeaderAggregator'
	count?: Maybe<Scalars['Int']>
	totalCount?: Maybe<Scalars['Int']>
}

export type HeaderGroupBy = {
	__typename?: 'HeaderGroupBy'
	id?: Maybe<Array<Maybe<HeaderConnectionId>>>
	created_at?: Maybe<Array<Maybe<HeaderConnectionCreated_At>>>
	updated_at?: Maybe<Array<Maybe<HeaderConnectionUpdated_At>>>
	title?: Maybe<Array<Maybe<HeaderConnectionTitle>>>
	description?: Maybe<Array<Maybe<HeaderConnectionDescription>>>
	language?: Maybe<Array<Maybe<HeaderConnectionLanguage>>>
	logo?: Maybe<Array<Maybe<HeaderConnectionLogo>>>
	published_at?: Maybe<Array<Maybe<HeaderConnectionPublished_At>>>
}

export type HeaderConnectionId = {
	__typename?: 'HeaderConnectionId'
	key?: Maybe<Scalars['ID']>
	connection?: Maybe<HeaderConnection>
}

export type HeaderConnectionCreated_At = {
	__typename?: 'HeaderConnectionCreated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<HeaderConnection>
}

export type HeaderConnectionUpdated_At = {
	__typename?: 'HeaderConnectionUpdated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<HeaderConnection>
}

export type HeaderConnectionTitle = {
	__typename?: 'HeaderConnectionTitle'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<HeaderConnection>
}

export type HeaderConnectionDescription = {
	__typename?: 'HeaderConnectionDescription'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<HeaderConnection>
}

export type HeaderConnectionLanguage = {
	__typename?: 'HeaderConnectionLanguage'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<HeaderConnection>
}

export type HeaderConnectionLogo = {
	__typename?: 'HeaderConnectionLogo'
	key?: Maybe<Scalars['ID']>
	connection?: Maybe<HeaderConnection>
}

export type HeaderConnectionPublished_At = {
	__typename?: 'HeaderConnectionPublished_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<HeaderConnection>
}

export type HeaderInput = {
	title?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
	language?: Maybe<Scalars['String']>
	logo?: Maybe<Scalars['ID']>
	published_at?: Maybe<Scalars['DateTime']>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type EditHeaderInput = {
	title?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
	language?: Maybe<Scalars['String']>
	logo?: Maybe<Scalars['ID']>
	published_at?: Maybe<Scalars['DateTime']>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type CreateHeaderInput = {
	data?: Maybe<HeaderInput>
}

export type CreateHeaderPayload = {
	__typename?: 'createHeaderPayload'
	header?: Maybe<Header>
}

export type UpdateHeaderInput = {
	where?: Maybe<InputId>
	data?: Maybe<EditHeaderInput>
}

export type UpdateHeaderPayload = {
	__typename?: 'updateHeaderPayload'
	header?: Maybe<Header>
}

export type DeleteHeaderInput = {
	where?: Maybe<InputId>
}

export type DeleteHeaderPayload = {
	__typename?: 'deleteHeaderPayload'
	header?: Maybe<Header>
}

export type Homepage = {
	__typename?: 'Homepage'
	id: Scalars['ID']
	created_at: Scalars['DateTime']
	updated_at: Scalars['DateTime']
	language?: Maybe<Scalars['String']>
	clickToStop?: Maybe<Scalars['String']>
	descriptionAboveLine?: Maybe<Scalars['String']>
	descriptionBellowLine?: Maybe<Scalars['String']>
	logo?: Maybe<UploadFile>
	published_at?: Maybe<Scalars['DateTime']>
}

export type HomepageConnection = {
	__typename?: 'HomepageConnection'
	values?: Maybe<Array<Maybe<Homepage>>>
	groupBy?: Maybe<HomepageGroupBy>
	aggregate?: Maybe<HomepageAggregator>
}

export type HomepageAggregator = {
	__typename?: 'HomepageAggregator'
	count?: Maybe<Scalars['Int']>
	totalCount?: Maybe<Scalars['Int']>
}

export type HomepageGroupBy = {
	__typename?: 'HomepageGroupBy'
	id?: Maybe<Array<Maybe<HomepageConnectionId>>>
	created_at?: Maybe<Array<Maybe<HomepageConnectionCreated_At>>>
	updated_at?: Maybe<Array<Maybe<HomepageConnectionUpdated_At>>>
	language?: Maybe<Array<Maybe<HomepageConnectionLanguage>>>
	clickToStop?: Maybe<Array<Maybe<HomepageConnectionClickToStop>>>
	descriptionAboveLine?: Maybe<
		Array<Maybe<HomepageConnectionDescriptionAboveLine>>
	>
	descriptionBellowLine?: Maybe<
		Array<Maybe<HomepageConnectionDescriptionBellowLine>>
	>
	logo?: Maybe<Array<Maybe<HomepageConnectionLogo>>>
	published_at?: Maybe<Array<Maybe<HomepageConnectionPublished_At>>>
}

export type HomepageConnectionId = {
	__typename?: 'HomepageConnectionId'
	key?: Maybe<Scalars['ID']>
	connection?: Maybe<HomepageConnection>
}

export type HomepageConnectionCreated_At = {
	__typename?: 'HomepageConnectionCreated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<HomepageConnection>
}

export type HomepageConnectionUpdated_At = {
	__typename?: 'HomepageConnectionUpdated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<HomepageConnection>
}

export type HomepageConnectionLanguage = {
	__typename?: 'HomepageConnectionLanguage'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<HomepageConnection>
}

export type HomepageConnectionClickToStop = {
	__typename?: 'HomepageConnectionClickToStop'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<HomepageConnection>
}

export type HomepageConnectionDescriptionAboveLine = {
	__typename?: 'HomepageConnectionDescriptionAboveLine'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<HomepageConnection>
}

export type HomepageConnectionDescriptionBellowLine = {
	__typename?: 'HomepageConnectionDescriptionBellowLine'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<HomepageConnection>
}

export type HomepageConnectionLogo = {
	__typename?: 'HomepageConnectionLogo'
	key?: Maybe<Scalars['ID']>
	connection?: Maybe<HomepageConnection>
}

export type HomepageConnectionPublished_At = {
	__typename?: 'HomepageConnectionPublished_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<HomepageConnection>
}

export type HomepageInput = {
	language?: Maybe<Scalars['String']>
	clickToStop?: Maybe<Scalars['String']>
	descriptionAboveLine?: Maybe<Scalars['String']>
	descriptionBellowLine?: Maybe<Scalars['String']>
	logo?: Maybe<Scalars['ID']>
	published_at?: Maybe<Scalars['DateTime']>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type EditHomepageInput = {
	language?: Maybe<Scalars['String']>
	clickToStop?: Maybe<Scalars['String']>
	descriptionAboveLine?: Maybe<Scalars['String']>
	descriptionBellowLine?: Maybe<Scalars['String']>
	logo?: Maybe<Scalars['ID']>
	published_at?: Maybe<Scalars['DateTime']>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type CreateHomepageInput = {
	data?: Maybe<HomepageInput>
}

export type CreateHomepagePayload = {
	__typename?: 'createHomepagePayload'
	homepage?: Maybe<Homepage>
}

export type UpdateHomepageInput = {
	where?: Maybe<InputId>
	data?: Maybe<EditHomepageInput>
}

export type UpdateHomepagePayload = {
	__typename?: 'updateHomepagePayload'
	homepage?: Maybe<Homepage>
}

export type DeleteHomepageInput = {
	where?: Maybe<InputId>
}

export type DeleteHomepagePayload = {
	__typename?: 'deleteHomepagePayload'
	homepage?: Maybe<Homepage>
}

export type Language = {
	__typename?: 'Language'
	id: Scalars['ID']
	created_at: Scalars['DateTime']
	updated_at: Scalars['DateTime']
	languageCode?: Maybe<Scalars['String']>
	displayName?: Maybe<Scalars['String']>
	published_at?: Maybe<Scalars['DateTime']>
}

export type LanguageConnection = {
	__typename?: 'LanguageConnection'
	values?: Maybe<Array<Maybe<Language>>>
	groupBy?: Maybe<LanguageGroupBy>
	aggregate?: Maybe<LanguageAggregator>
}

export type LanguageAggregator = {
	__typename?: 'LanguageAggregator'
	count?: Maybe<Scalars['Int']>
	totalCount?: Maybe<Scalars['Int']>
}

export type LanguageGroupBy = {
	__typename?: 'LanguageGroupBy'
	id?: Maybe<Array<Maybe<LanguageConnectionId>>>
	created_at?: Maybe<Array<Maybe<LanguageConnectionCreated_At>>>
	updated_at?: Maybe<Array<Maybe<LanguageConnectionUpdated_At>>>
	languageCode?: Maybe<Array<Maybe<LanguageConnectionLanguageCode>>>
	displayName?: Maybe<Array<Maybe<LanguageConnectionDisplayName>>>
	published_at?: Maybe<Array<Maybe<LanguageConnectionPublished_At>>>
}

export type LanguageConnectionId = {
	__typename?: 'LanguageConnectionId'
	key?: Maybe<Scalars['ID']>
	connection?: Maybe<LanguageConnection>
}

export type LanguageConnectionCreated_At = {
	__typename?: 'LanguageConnectionCreated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<LanguageConnection>
}

export type LanguageConnectionUpdated_At = {
	__typename?: 'LanguageConnectionUpdated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<LanguageConnection>
}

export type LanguageConnectionLanguageCode = {
	__typename?: 'LanguageConnectionLanguageCode'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<LanguageConnection>
}

export type LanguageConnectionDisplayName = {
	__typename?: 'LanguageConnectionDisplayName'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<LanguageConnection>
}

export type LanguageConnectionPublished_At = {
	__typename?: 'LanguageConnectionPublished_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<LanguageConnection>
}

export type LanguageInput = {
	languageCode?: Maybe<Scalars['String']>
	displayName?: Maybe<Scalars['String']>
	published_at?: Maybe<Scalars['DateTime']>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type EditLanguageInput = {
	languageCode?: Maybe<Scalars['String']>
	displayName?: Maybe<Scalars['String']>
	published_at?: Maybe<Scalars['DateTime']>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type CreateLanguageInput = {
	data?: Maybe<LanguageInput>
}

export type CreateLanguagePayload = {
	__typename?: 'createLanguagePayload'
	language?: Maybe<Language>
}

export type UpdateLanguageInput = {
	where?: Maybe<InputId>
	data?: Maybe<EditLanguageInput>
}

export type UpdateLanguagePayload = {
	__typename?: 'updateLanguagePayload'
	language?: Maybe<Language>
}

export type DeleteLanguageInput = {
	where?: Maybe<InputId>
}

export type DeleteLanguagePayload = {
	__typename?: 'deleteLanguagePayload'
	language?: Maybe<Language>
}

export type Menu = {
	__typename?: 'Menu'
	id: Scalars['ID']
	created_at: Scalars['DateTime']
	updated_at: Scalars['DateTime']
	menu?: Maybe<Scalars['String']>
	homePage?: Maybe<Scalars['String']>
	reference?: Maybe<Scalars['String']>
	aboutUs?: Maybe<Scalars['String']>
	career?: Maybe<Scalars['String']>
	contact?: Maybe<Scalars['String']>
	language?: Maybe<Scalars['String']>
	published_at?: Maybe<Scalars['DateTime']>
}

export type MenuConnection = {
	__typename?: 'MenuConnection'
	values?: Maybe<Array<Maybe<Menu>>>
	groupBy?: Maybe<MenuGroupBy>
	aggregate?: Maybe<MenuAggregator>
}

export type MenuAggregator = {
	__typename?: 'MenuAggregator'
	count?: Maybe<Scalars['Int']>
	totalCount?: Maybe<Scalars['Int']>
}

export type MenuGroupBy = {
	__typename?: 'MenuGroupBy'
	id?: Maybe<Array<Maybe<MenuConnectionId>>>
	created_at?: Maybe<Array<Maybe<MenuConnectionCreated_At>>>
	updated_at?: Maybe<Array<Maybe<MenuConnectionUpdated_At>>>
	menu?: Maybe<Array<Maybe<MenuConnectionMenu>>>
	homePage?: Maybe<Array<Maybe<MenuConnectionHomePage>>>
	reference?: Maybe<Array<Maybe<MenuConnectionReference>>>
	aboutUs?: Maybe<Array<Maybe<MenuConnectionAboutUs>>>
	career?: Maybe<Array<Maybe<MenuConnectionCareer>>>
	contact?: Maybe<Array<Maybe<MenuConnectionContact>>>
	language?: Maybe<Array<Maybe<MenuConnectionLanguage>>>
	published_at?: Maybe<Array<Maybe<MenuConnectionPublished_At>>>
}

export type MenuConnectionId = {
	__typename?: 'MenuConnectionId'
	key?: Maybe<Scalars['ID']>
	connection?: Maybe<MenuConnection>
}

export type MenuConnectionCreated_At = {
	__typename?: 'MenuConnectionCreated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<MenuConnection>
}

export type MenuConnectionUpdated_At = {
	__typename?: 'MenuConnectionUpdated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<MenuConnection>
}

export type MenuConnectionMenu = {
	__typename?: 'MenuConnectionMenu'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<MenuConnection>
}

export type MenuConnectionHomePage = {
	__typename?: 'MenuConnectionHomePage'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<MenuConnection>
}

export type MenuConnectionReference = {
	__typename?: 'MenuConnectionReference'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<MenuConnection>
}

export type MenuConnectionAboutUs = {
	__typename?: 'MenuConnectionAboutUs'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<MenuConnection>
}

export type MenuConnectionCareer = {
	__typename?: 'MenuConnectionCareer'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<MenuConnection>
}

export type MenuConnectionContact = {
	__typename?: 'MenuConnectionContact'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<MenuConnection>
}

export type MenuConnectionLanguage = {
	__typename?: 'MenuConnectionLanguage'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<MenuConnection>
}

export type MenuConnectionPublished_At = {
	__typename?: 'MenuConnectionPublished_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<MenuConnection>
}

export type MenuInput = {
	menu?: Maybe<Scalars['String']>
	homePage?: Maybe<Scalars['String']>
	reference?: Maybe<Scalars['String']>
	aboutUs?: Maybe<Scalars['String']>
	career?: Maybe<Scalars['String']>
	contact?: Maybe<Scalars['String']>
	language?: Maybe<Scalars['String']>
	published_at?: Maybe<Scalars['DateTime']>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type EditMenuInput = {
	menu?: Maybe<Scalars['String']>
	homePage?: Maybe<Scalars['String']>
	reference?: Maybe<Scalars['String']>
	aboutUs?: Maybe<Scalars['String']>
	career?: Maybe<Scalars['String']>
	contact?: Maybe<Scalars['String']>
	language?: Maybe<Scalars['String']>
	published_at?: Maybe<Scalars['DateTime']>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type CreateMenuInput = {
	data?: Maybe<MenuInput>
}

export type CreateMenuPayload = {
	__typename?: 'createMenuPayload'
	menu?: Maybe<Menu>
}

export type UpdateMenuInput = {
	where?: Maybe<InputId>
	data?: Maybe<EditMenuInput>
}

export type UpdateMenuPayload = {
	__typename?: 'updateMenuPayload'
	menu?: Maybe<Menu>
}

export type DeleteMenuInput = {
	where?: Maybe<InputId>
}

export type DeleteMenuPayload = {
	__typename?: 'deleteMenuPayload'
	menu?: Maybe<Menu>
}

export type SocialNetwork = {
	__typename?: 'SocialNetwork'
	id: Scalars['ID']
	created_at: Scalars['DateTime']
	updated_at: Scalars['DateTime']
	name?: Maybe<Scalars['String']>
	url?: Maybe<Scalars['String']>
	published_at?: Maybe<Scalars['DateTime']>
}

export type SocialNetworkConnection = {
	__typename?: 'SocialNetworkConnection'
	values?: Maybe<Array<Maybe<SocialNetwork>>>
	groupBy?: Maybe<SocialNetworkGroupBy>
	aggregate?: Maybe<SocialNetworkAggregator>
}

export type SocialNetworkAggregator = {
	__typename?: 'SocialNetworkAggregator'
	count?: Maybe<Scalars['Int']>
	totalCount?: Maybe<Scalars['Int']>
}

export type SocialNetworkGroupBy = {
	__typename?: 'SocialNetworkGroupBy'
	id?: Maybe<Array<Maybe<SocialNetworkConnectionId>>>
	created_at?: Maybe<Array<Maybe<SocialNetworkConnectionCreated_At>>>
	updated_at?: Maybe<Array<Maybe<SocialNetworkConnectionUpdated_At>>>
	name?: Maybe<Array<Maybe<SocialNetworkConnectionName>>>
	url?: Maybe<Array<Maybe<SocialNetworkConnectionUrl>>>
	published_at?: Maybe<Array<Maybe<SocialNetworkConnectionPublished_At>>>
}

export type SocialNetworkConnectionId = {
	__typename?: 'SocialNetworkConnectionId'
	key?: Maybe<Scalars['ID']>
	connection?: Maybe<SocialNetworkConnection>
}

export type SocialNetworkConnectionCreated_At = {
	__typename?: 'SocialNetworkConnectionCreated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<SocialNetworkConnection>
}

export type SocialNetworkConnectionUpdated_At = {
	__typename?: 'SocialNetworkConnectionUpdated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<SocialNetworkConnection>
}

export type SocialNetworkConnectionName = {
	__typename?: 'SocialNetworkConnectionName'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<SocialNetworkConnection>
}

export type SocialNetworkConnectionUrl = {
	__typename?: 'SocialNetworkConnectionUrl'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<SocialNetworkConnection>
}

export type SocialNetworkConnectionPublished_At = {
	__typename?: 'SocialNetworkConnectionPublished_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<SocialNetworkConnection>
}

export type SocialNetworkInput = {
	name?: Maybe<Scalars['String']>
	url?: Maybe<Scalars['String']>
	published_at?: Maybe<Scalars['DateTime']>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type EditSocialNetworkInput = {
	name?: Maybe<Scalars['String']>
	url?: Maybe<Scalars['String']>
	published_at?: Maybe<Scalars['DateTime']>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type CreateSocialNetworkInput = {
	data?: Maybe<SocialNetworkInput>
}

export type CreateSocialNetworkPayload = {
	__typename?: 'createSocialNetworkPayload'
	socialNetwork?: Maybe<SocialNetwork>
}

export type UpdateSocialNetworkInput = {
	where?: Maybe<InputId>
	data?: Maybe<EditSocialNetworkInput>
}

export type UpdateSocialNetworkPayload = {
	__typename?: 'updateSocialNetworkPayload'
	socialNetwork?: Maybe<SocialNetwork>
}

export type DeleteSocialNetworkInput = {
	where?: Maybe<InputId>
}

export type DeleteSocialNetworkPayload = {
	__typename?: 'deleteSocialNetworkPayload'
	socialNetwork?: Maybe<SocialNetwork>
}

export type TechList = {
	__typename?: 'TechList'
	id: Scalars['ID']
	created_at: Scalars['DateTime']
	updated_at: Scalars['DateTime']
	name: Scalars['String']
	published_at?: Maybe<Scalars['DateTime']>
}

export type TechListConnection = {
	__typename?: 'TechListConnection'
	values?: Maybe<Array<Maybe<TechList>>>
	groupBy?: Maybe<TechListGroupBy>
	aggregate?: Maybe<TechListAggregator>
}

export type TechListAggregator = {
	__typename?: 'TechListAggregator'
	count?: Maybe<Scalars['Int']>
	totalCount?: Maybe<Scalars['Int']>
}

export type TechListGroupBy = {
	__typename?: 'TechListGroupBy'
	id?: Maybe<Array<Maybe<TechListConnectionId>>>
	created_at?: Maybe<Array<Maybe<TechListConnectionCreated_At>>>
	updated_at?: Maybe<Array<Maybe<TechListConnectionUpdated_At>>>
	name?: Maybe<Array<Maybe<TechListConnectionName>>>
	published_at?: Maybe<Array<Maybe<TechListConnectionPublished_At>>>
}

export type TechListConnectionId = {
	__typename?: 'TechListConnectionId'
	key?: Maybe<Scalars['ID']>
	connection?: Maybe<TechListConnection>
}

export type TechListConnectionCreated_At = {
	__typename?: 'TechListConnectionCreated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<TechListConnection>
}

export type TechListConnectionUpdated_At = {
	__typename?: 'TechListConnectionUpdated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<TechListConnection>
}

export type TechListConnectionName = {
	__typename?: 'TechListConnectionName'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<TechListConnection>
}

export type TechListConnectionPublished_At = {
	__typename?: 'TechListConnectionPublished_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<TechListConnection>
}

export type TechListInput = {
	name: Scalars['String']
	published_at?: Maybe<Scalars['DateTime']>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type EditTechListInput = {
	name?: Maybe<Scalars['String']>
	published_at?: Maybe<Scalars['DateTime']>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type CreateTechListInput = {
	data?: Maybe<TechListInput>
}

export type CreateTechListPayload = {
	__typename?: 'createTechListPayload'
	techList?: Maybe<TechList>
}

export type UpdateTechListInput = {
	where?: Maybe<InputId>
	data?: Maybe<EditTechListInput>
}

export type UpdateTechListPayload = {
	__typename?: 'updateTechListPayload'
	techList?: Maybe<TechList>
}

export type DeleteTechListInput = {
	where?: Maybe<InputId>
}

export type DeleteTechListPayload = {
	__typename?: 'deleteTechListPayload'
	techList?: Maybe<TechList>
}

export type Webhook = {
	__typename?: 'Webhook'
	id: Scalars['ID']
	created_at: Scalars['DateTime']
	updated_at: Scalars['DateTime']
	name?: Maybe<Scalars['String']>
	published_at?: Maybe<Scalars['DateTime']>
}

export type WebhookConnection = {
	__typename?: 'WebhookConnection'
	values?: Maybe<Array<Maybe<Webhook>>>
	groupBy?: Maybe<WebhookGroupBy>
	aggregate?: Maybe<WebhookAggregator>
}

export type WebhookAggregator = {
	__typename?: 'WebhookAggregator'
	count?: Maybe<Scalars['Int']>
	totalCount?: Maybe<Scalars['Int']>
}

export type WebhookGroupBy = {
	__typename?: 'WebhookGroupBy'
	id?: Maybe<Array<Maybe<WebhookConnectionId>>>
	created_at?: Maybe<Array<Maybe<WebhookConnectionCreated_At>>>
	updated_at?: Maybe<Array<Maybe<WebhookConnectionUpdated_At>>>
	name?: Maybe<Array<Maybe<WebhookConnectionName>>>
	published_at?: Maybe<Array<Maybe<WebhookConnectionPublished_At>>>
}

export type WebhookConnectionId = {
	__typename?: 'WebhookConnectionId'
	key?: Maybe<Scalars['ID']>
	connection?: Maybe<WebhookConnection>
}

export type WebhookConnectionCreated_At = {
	__typename?: 'WebhookConnectionCreated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<WebhookConnection>
}

export type WebhookConnectionUpdated_At = {
	__typename?: 'WebhookConnectionUpdated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<WebhookConnection>
}

export type WebhookConnectionName = {
	__typename?: 'WebhookConnectionName'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<WebhookConnection>
}

export type WebhookConnectionPublished_At = {
	__typename?: 'WebhookConnectionPublished_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<WebhookConnection>
}

export type WebhookInput = {
	name?: Maybe<Scalars['String']>
	published_at?: Maybe<Scalars['DateTime']>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type EditWebhookInput = {
	name?: Maybe<Scalars['String']>
	published_at?: Maybe<Scalars['DateTime']>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type CreateWebhookInput = {
	data?: Maybe<WebhookInput>
}

export type CreateWebhookPayload = {
	__typename?: 'createWebhookPayload'
	webhook?: Maybe<Webhook>
}

export type UpdateWebhookInput = {
	where?: Maybe<InputId>
	data?: Maybe<EditWebhookInput>
}

export type UpdateWebhookPayload = {
	__typename?: 'updateWebhookPayload'
	webhook?: Maybe<Webhook>
}

export type DeleteWebhookInput = {
	where?: Maybe<InputId>
}

export type DeleteWebhookPayload = {
	__typename?: 'deleteWebhookPayload'
	webhook?: Maybe<Webhook>
}

export type UploadFile = {
	__typename?: 'UploadFile'
	id: Scalars['ID']
	created_at: Scalars['DateTime']
	updated_at: Scalars['DateTime']
	name: Scalars['String']
	alternativeText?: Maybe<Scalars['String']>
	caption?: Maybe<Scalars['String']>
	width?: Maybe<Scalars['Int']>
	height?: Maybe<Scalars['Int']>
	formats?: Maybe<Scalars['JSON']>
	hash: Scalars['String']
	ext?: Maybe<Scalars['String']>
	mime: Scalars['String']
	size: Scalars['Float']
	url: Scalars['String']
	previewUrl?: Maybe<Scalars['String']>
	provider: Scalars['String']
	provider_metadata?: Maybe<Scalars['JSON']>
	related?: Maybe<Array<Maybe<Morph>>>
}

export type UploadFileRelatedArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type UploadFileConnection = {
	__typename?: 'UploadFileConnection'
	values?: Maybe<Array<Maybe<UploadFile>>>
	groupBy?: Maybe<UploadFileGroupBy>
	aggregate?: Maybe<UploadFileAggregator>
}

export type UploadFileAggregator = {
	__typename?: 'UploadFileAggregator'
	count?: Maybe<Scalars['Int']>
	totalCount?: Maybe<Scalars['Int']>
	sum?: Maybe<UploadFileAggregatorSum>
	avg?: Maybe<UploadFileAggregatorAvg>
	min?: Maybe<UploadFileAggregatorMin>
	max?: Maybe<UploadFileAggregatorMax>
}

export type UploadFileAggregatorSum = {
	__typename?: 'UploadFileAggregatorSum'
	width?: Maybe<Scalars['Float']>
	height?: Maybe<Scalars['Float']>
	size?: Maybe<Scalars['Float']>
}

export type UploadFileAggregatorAvg = {
	__typename?: 'UploadFileAggregatorAvg'
	width?: Maybe<Scalars['Float']>
	height?: Maybe<Scalars['Float']>
	size?: Maybe<Scalars['Float']>
}

export type UploadFileAggregatorMin = {
	__typename?: 'UploadFileAggregatorMin'
	width?: Maybe<Scalars['Float']>
	height?: Maybe<Scalars['Float']>
	size?: Maybe<Scalars['Float']>
}

export type UploadFileAggregatorMax = {
	__typename?: 'UploadFileAggregatorMax'
	width?: Maybe<Scalars['Float']>
	height?: Maybe<Scalars['Float']>
	size?: Maybe<Scalars['Float']>
}

export type UploadFileGroupBy = {
	__typename?: 'UploadFileGroupBy'
	id?: Maybe<Array<Maybe<UploadFileConnectionId>>>
	created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>
	updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>
	name?: Maybe<Array<Maybe<UploadFileConnectionName>>>
	alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>
	caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>
	width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>
	height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>
	formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>
	hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>
	ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>
	mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>
	size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>
	url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>
	previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>
	provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>
	provider_metadata?: Maybe<
		Array<Maybe<UploadFileConnectionProvider_Metadata>>
	>
}

export type UploadFileConnectionId = {
	__typename?: 'UploadFileConnectionId'
	key?: Maybe<Scalars['ID']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionCreated_At = {
	__typename?: 'UploadFileConnectionCreated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionUpdated_At = {
	__typename?: 'UploadFileConnectionUpdated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionName = {
	__typename?: 'UploadFileConnectionName'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionAlternativeText = {
	__typename?: 'UploadFileConnectionAlternativeText'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionCaption = {
	__typename?: 'UploadFileConnectionCaption'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionWidth = {
	__typename?: 'UploadFileConnectionWidth'
	key?: Maybe<Scalars['Int']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionHeight = {
	__typename?: 'UploadFileConnectionHeight'
	key?: Maybe<Scalars['Int']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionFormats = {
	__typename?: 'UploadFileConnectionFormats'
	key?: Maybe<Scalars['JSON']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionHash = {
	__typename?: 'UploadFileConnectionHash'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionExt = {
	__typename?: 'UploadFileConnectionExt'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionMime = {
	__typename?: 'UploadFileConnectionMime'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionSize = {
	__typename?: 'UploadFileConnectionSize'
	key?: Maybe<Scalars['Float']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionUrl = {
	__typename?: 'UploadFileConnectionUrl'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionPreviewUrl = {
	__typename?: 'UploadFileConnectionPreviewUrl'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionProvider = {
	__typename?: 'UploadFileConnectionProvider'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<UploadFileConnection>
}

export type UploadFileConnectionProvider_Metadata = {
	__typename?: 'UploadFileConnectionProvider_metadata'
	key?: Maybe<Scalars['JSON']>
	connection?: Maybe<UploadFileConnection>
}

export type FileInput = {
	name: Scalars['String']
	alternativeText?: Maybe<Scalars['String']>
	caption?: Maybe<Scalars['String']>
	width?: Maybe<Scalars['Int']>
	height?: Maybe<Scalars['Int']>
	formats?: Maybe<Scalars['JSON']>
	hash: Scalars['String']
	ext?: Maybe<Scalars['String']>
	mime: Scalars['String']
	size: Scalars['Float']
	url: Scalars['String']
	previewUrl?: Maybe<Scalars['String']>
	provider: Scalars['String']
	provider_metadata?: Maybe<Scalars['JSON']>
	related?: Maybe<Array<Maybe<Scalars['ID']>>>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type EditFileInput = {
	name?: Maybe<Scalars['String']>
	alternativeText?: Maybe<Scalars['String']>
	caption?: Maybe<Scalars['String']>
	width?: Maybe<Scalars['Int']>
	height?: Maybe<Scalars['Int']>
	formats?: Maybe<Scalars['JSON']>
	hash?: Maybe<Scalars['String']>
	ext?: Maybe<Scalars['String']>
	mime?: Maybe<Scalars['String']>
	size?: Maybe<Scalars['Float']>
	url?: Maybe<Scalars['String']>
	previewUrl?: Maybe<Scalars['String']>
	provider?: Maybe<Scalars['String']>
	provider_metadata?: Maybe<Scalars['JSON']>
	related?: Maybe<Array<Maybe<Scalars['ID']>>>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type DeleteFileInput = {
	where?: Maybe<InputId>
}

export type DeleteFilePayload = {
	__typename?: 'deleteFilePayload'
	file?: Maybe<UploadFile>
}

export type UsersPermissionsPermission = {
	__typename?: 'UsersPermissionsPermission'
	id: Scalars['ID']
	type: Scalars['String']
	controller: Scalars['String']
	action: Scalars['String']
	enabled: Scalars['Boolean']
	policy?: Maybe<Scalars['String']>
	role?: Maybe<UsersPermissionsRole>
}

export type UsersPermissionsRole = {
	__typename?: 'UsersPermissionsRole'
	id: Scalars['ID']
	name: Scalars['String']
	description?: Maybe<Scalars['String']>
	type?: Maybe<Scalars['String']>
	permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>
	users?: Maybe<Array<Maybe<UsersPermissionsUser>>>
}

export type UsersPermissionsRolePermissionsArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type UsersPermissionsRoleUsersArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type UsersPermissionsRoleConnection = {
	__typename?: 'UsersPermissionsRoleConnection'
	values?: Maybe<Array<Maybe<UsersPermissionsRole>>>
	groupBy?: Maybe<UsersPermissionsRoleGroupBy>
	aggregate?: Maybe<UsersPermissionsRoleAggregator>
}

export type UsersPermissionsRoleAggregator = {
	__typename?: 'UsersPermissionsRoleAggregator'
	count?: Maybe<Scalars['Int']>
	totalCount?: Maybe<Scalars['Int']>
}

export type UsersPermissionsRoleGroupBy = {
	__typename?: 'UsersPermissionsRoleGroupBy'
	id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>
	name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>
	description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>
	type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>
}

export type UsersPermissionsRoleConnectionId = {
	__typename?: 'UsersPermissionsRoleConnectionId'
	key?: Maybe<Scalars['ID']>
	connection?: Maybe<UsersPermissionsRoleConnection>
}

export type UsersPermissionsRoleConnectionName = {
	__typename?: 'UsersPermissionsRoleConnectionName'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<UsersPermissionsRoleConnection>
}

export type UsersPermissionsRoleConnectionDescription = {
	__typename?: 'UsersPermissionsRoleConnectionDescription'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<UsersPermissionsRoleConnection>
}

export type UsersPermissionsRoleConnectionType = {
	__typename?: 'UsersPermissionsRoleConnectionType'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<UsersPermissionsRoleConnection>
}

export type RoleInput = {
	name: Scalars['String']
	description?: Maybe<Scalars['String']>
	type?: Maybe<Scalars['String']>
	permissions?: Maybe<Array<Maybe<Scalars['ID']>>>
	users?: Maybe<Array<Maybe<Scalars['ID']>>>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type EditRoleInput = {
	name?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
	type?: Maybe<Scalars['String']>
	permissions?: Maybe<Array<Maybe<Scalars['ID']>>>
	users?: Maybe<Array<Maybe<Scalars['ID']>>>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type CreateRoleInput = {
	data?: Maybe<RoleInput>
}

export type CreateRolePayload = {
	__typename?: 'createRolePayload'
	role?: Maybe<UsersPermissionsRole>
}

export type UpdateRoleInput = {
	where?: Maybe<InputId>
	data?: Maybe<EditRoleInput>
}

export type UpdateRolePayload = {
	__typename?: 'updateRolePayload'
	role?: Maybe<UsersPermissionsRole>
}

export type DeleteRoleInput = {
	where?: Maybe<InputId>
}

export type DeleteRolePayload = {
	__typename?: 'deleteRolePayload'
	role?: Maybe<UsersPermissionsRole>
}

export type UsersPermissionsUser = {
	__typename?: 'UsersPermissionsUser'
	id: Scalars['ID']
	created_at: Scalars['DateTime']
	updated_at: Scalars['DateTime']
	username: Scalars['String']
	email: Scalars['String']
	provider?: Maybe<Scalars['String']>
	confirmed?: Maybe<Scalars['Boolean']>
	blocked?: Maybe<Scalars['Boolean']>
	role?: Maybe<UsersPermissionsRole>
}

export type UsersPermissionsUserConnection = {
	__typename?: 'UsersPermissionsUserConnection'
	values?: Maybe<Array<Maybe<UsersPermissionsUser>>>
	groupBy?: Maybe<UsersPermissionsUserGroupBy>
	aggregate?: Maybe<UsersPermissionsUserAggregator>
}

export type UsersPermissionsUserAggregator = {
	__typename?: 'UsersPermissionsUserAggregator'
	count?: Maybe<Scalars['Int']>
	totalCount?: Maybe<Scalars['Int']>
}

export type UsersPermissionsUserGroupBy = {
	__typename?: 'UsersPermissionsUserGroupBy'
	id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>
	created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>
	updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>
	username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>
	email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>
	provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>
	confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>
	blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>
	role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>
}

export type UsersPermissionsUserConnectionId = {
	__typename?: 'UsersPermissionsUserConnectionId'
	key?: Maybe<Scalars['ID']>
	connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionCreated_At = {
	__typename?: 'UsersPermissionsUserConnectionCreated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionUpdated_At = {
	__typename?: 'UsersPermissionsUserConnectionUpdated_at'
	key?: Maybe<Scalars['DateTime']>
	connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionUsername = {
	__typename?: 'UsersPermissionsUserConnectionUsername'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionEmail = {
	__typename?: 'UsersPermissionsUserConnectionEmail'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionProvider = {
	__typename?: 'UsersPermissionsUserConnectionProvider'
	key?: Maybe<Scalars['String']>
	connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionConfirmed = {
	__typename?: 'UsersPermissionsUserConnectionConfirmed'
	key?: Maybe<Scalars['Boolean']>
	connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionBlocked = {
	__typename?: 'UsersPermissionsUserConnectionBlocked'
	key?: Maybe<Scalars['Boolean']>
	connection?: Maybe<UsersPermissionsUserConnection>
}

export type UsersPermissionsUserConnectionRole = {
	__typename?: 'UsersPermissionsUserConnectionRole'
	key?: Maybe<Scalars['ID']>
	connection?: Maybe<UsersPermissionsUserConnection>
}

export type UserInput = {
	username: Scalars['String']
	email: Scalars['String']
	provider?: Maybe<Scalars['String']>
	password?: Maybe<Scalars['String']>
	resetPasswordToken?: Maybe<Scalars['String']>
	confirmationToken?: Maybe<Scalars['String']>
	confirmed?: Maybe<Scalars['Boolean']>
	blocked?: Maybe<Scalars['Boolean']>
	role?: Maybe<Scalars['ID']>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type EditUserInput = {
	username?: Maybe<Scalars['String']>
	email?: Maybe<Scalars['String']>
	provider?: Maybe<Scalars['String']>
	password?: Maybe<Scalars['String']>
	resetPasswordToken?: Maybe<Scalars['String']>
	confirmationToken?: Maybe<Scalars['String']>
	confirmed?: Maybe<Scalars['Boolean']>
	blocked?: Maybe<Scalars['Boolean']>
	role?: Maybe<Scalars['ID']>
	created_by?: Maybe<Scalars['ID']>
	updated_by?: Maybe<Scalars['ID']>
}

export type CreateUserInput = {
	data?: Maybe<UserInput>
}

export type CreateUserPayload = {
	__typename?: 'createUserPayload'
	user?: Maybe<UsersPermissionsUser>
}

export type UpdateUserInput = {
	where?: Maybe<InputId>
	data?: Maybe<EditUserInput>
}

export type UpdateUserPayload = {
	__typename?: 'updateUserPayload'
	user?: Maybe<UsersPermissionsUser>
}

export type DeleteUserInput = {
	where?: Maybe<InputId>
}

export type DeleteUserPayload = {
	__typename?: 'deleteUserPayload'
	user?: Maybe<UsersPermissionsUser>
}

export type ComponentContentImage = {
	__typename?: 'ComponentContentImage'
	id: Scalars['ID']
	image?: Maybe<UploadFile>
	widthPercent?: Maybe<Scalars['Float']>
}

export type ComponentContentImageInput = {
	image?: Maybe<Scalars['ID']>
	widthPercent?: Maybe<Scalars['Float']>
}

export type EditComponentContentImageInput = {
	id?: Maybe<Scalars['ID']>
	image?: Maybe<Scalars['ID']>
	widthPercent?: Maybe<Scalars['Float']>
}

export type ComponentContentInfoColumn = {
	__typename?: 'ComponentContentInfoColumn'
	id: Scalars['ID']
	number?: Maybe<Scalars['String']>
	title?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
	infoColumnImage?: Maybe<UploadFile>
	widthPercent?: Maybe<Scalars['Float']>
}

export type ComponentContentInfoColumnInput = {
	number?: Maybe<Scalars['String']>
	title?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
	infoColumnImage?: Maybe<Scalars['ID']>
	widthPercent?: Maybe<Scalars['Float']>
}

export type EditComponentContentInfoColumnInput = {
	id?: Maybe<Scalars['ID']>
	number?: Maybe<Scalars['String']>
	title?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
	infoColumnImage?: Maybe<Scalars['ID']>
	widthPercent?: Maybe<Scalars['Float']>
}

export type ComponentContentRichText = {
	__typename?: 'ComponentContentRichText'
	id: Scalars['ID']
	title?: Maybe<Scalars['String']>
	desciption?: Maybe<Scalars['String']>
	desciptionLevel2?: Maybe<Scalars['String']>
	desciptionLevel3?: Maybe<Scalars['String']>
	richTextImage?: Maybe<UploadFile>
	subtitle?: Maybe<Scalars['String']>
	widthPercent?: Maybe<Scalars['Float']>
}

export type ComponentContentRichTextInput = {
	title?: Maybe<Scalars['String']>
	desciption?: Maybe<Scalars['String']>
	desciptionLevel2?: Maybe<Scalars['String']>
	desciptionLevel3?: Maybe<Scalars['String']>
	richTextImage?: Maybe<Scalars['ID']>
	subtitle?: Maybe<Scalars['String']>
	widthPercent?: Maybe<Scalars['Float']>
}

export type EditComponentContentRichTextInput = {
	id?: Maybe<Scalars['ID']>
	title?: Maybe<Scalars['String']>
	desciption?: Maybe<Scalars['String']>
	desciptionLevel2?: Maybe<Scalars['String']>
	desciptionLevel3?: Maybe<Scalars['String']>
	richTextImage?: Maybe<Scalars['ID']>
	subtitle?: Maybe<Scalars['String']>
	widthPercent?: Maybe<Scalars['Float']>
}

export type ComponentContentTechnologies = {
	__typename?: 'ComponentContentTechnologies'
	id: Scalars['ID']
	technologies?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
}

export type ComponentContentTechnologyInput = {
	technologies?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
}

export type EditComponentContentTechnologyInput = {
	id?: Maybe<Scalars['ID']>
	technologies?: Maybe<Scalars['String']>
	description?: Maybe<Scalars['String']>
}

export type Morph =
	| UsersPermissionsMe
	| UsersPermissionsMeRole
	| UsersPermissionsLoginPayload
	| UserPermissionsPasswordPayload
	| CaseStudyMeta
	| CaseStudyMetaConnection
	| CaseStudyMetaAggregator
	| CaseStudyMetaGroupBy
	| CaseStudyMetaConnectionId
	| CaseStudyMetaConnectionCreated_At
	| CaseStudyMetaConnectionUpdated_At
	| CaseStudyMetaConnectionIndustry
	| CaseStudyMetaConnectionClient
	| CaseStudyMetaConnectionSystem
	| CaseStudyMetaConnectionTechnologies
	| CaseStudyMetaConnectionPreviousProject
	| CaseStudyMetaConnectionNextProject
	| CaseStudyMetaConnectionFooterText
	| CaseStudyMetaConnectionWriteUs
	| CaseStudyMetaConnectionLanguage
	| CaseStudyMetaConnectionPublished_At
	| CreateCaseStudyMetaPayload
	| UpdateCaseStudyMetaPayload
	| DeleteCaseStudyMetaPayload
	| CaseStudy
	| CaseStudyConnection
	| CaseStudyAggregator
	| CaseStudyGroupBy
	| CaseStudyConnectionId
	| CaseStudyConnectionCreated_At
	| CaseStudyConnectionUpdated_At
	| CaseStudyConnectionTitle
	| CaseStudyConnectionSubtitle
	| CaseStudyConnectionAbout
	| CaseStudyConnectionIndustry
	| CaseStudyConnectionClient
	| CaseStudyConnectionSystem
	| CaseStudyConnectionMainImage
	| CaseStudyConnectionLanguage
	| CaseStudyConnectionProjectId
	| CaseStudyConnectionPublished_At
	| CreateCaseStudyPayload
	| UpdateCaseStudyPayload
	| DeleteCaseStudyPayload
	| Contact
	| ContactConnection
	| ContactAggregator
	| ContactGroupBy
	| ContactConnectionId
	| ContactConnectionCreated_At
	| ContactConnectionUpdated_At
	| ContactConnectionLanguage
	| ContactConnectionTitle
	| ContactConnectionAddress
	| ContactConnectionTaxIdentificationNumbers
	| ContactConnectionTaxIdentificationDescription
	| ContactConnectionEmail
	| ContactConnectionPhoneNumber
	| ContactConnectionPublished_At
	| CreateContactPayload
	| UpdateContactPayload
	| DeleteContactPayload
	| Header
	| HeaderConnection
	| HeaderAggregator
	| HeaderGroupBy
	| HeaderConnectionId
	| HeaderConnectionCreated_At
	| HeaderConnectionUpdated_At
	| HeaderConnectionTitle
	| HeaderConnectionDescription
	| HeaderConnectionLanguage
	| HeaderConnectionLogo
	| HeaderConnectionPublished_At
	| CreateHeaderPayload
	| UpdateHeaderPayload
	| DeleteHeaderPayload
	| Homepage
	| HomepageConnection
	| HomepageAggregator
	| HomepageGroupBy
	| HomepageConnectionId
	| HomepageConnectionCreated_At
	| HomepageConnectionUpdated_At
	| HomepageConnectionLanguage
	| HomepageConnectionClickToStop
	| HomepageConnectionDescriptionAboveLine
	| HomepageConnectionDescriptionBellowLine
	| HomepageConnectionLogo
	| HomepageConnectionPublished_At
	| CreateHomepagePayload
	| UpdateHomepagePayload
	| DeleteHomepagePayload
	| Language
	| LanguageConnection
	| LanguageAggregator
	| LanguageGroupBy
	| LanguageConnectionId
	| LanguageConnectionCreated_At
	| LanguageConnectionUpdated_At
	| LanguageConnectionLanguageCode
	| LanguageConnectionDisplayName
	| LanguageConnectionPublished_At
	| CreateLanguagePayload
	| UpdateLanguagePayload
	| DeleteLanguagePayload
	| Menu
	| MenuConnection
	| MenuAggregator
	| MenuGroupBy
	| MenuConnectionId
	| MenuConnectionCreated_At
	| MenuConnectionUpdated_At
	| MenuConnectionMenu
	| MenuConnectionHomePage
	| MenuConnectionReference
	| MenuConnectionAboutUs
	| MenuConnectionCareer
	| MenuConnectionContact
	| MenuConnectionLanguage
	| MenuConnectionPublished_At
	| CreateMenuPayload
	| UpdateMenuPayload
	| DeleteMenuPayload
	| SocialNetwork
	| SocialNetworkConnection
	| SocialNetworkAggregator
	| SocialNetworkGroupBy
	| SocialNetworkConnectionId
	| SocialNetworkConnectionCreated_At
	| SocialNetworkConnectionUpdated_At
	| SocialNetworkConnectionName
	| SocialNetworkConnectionUrl
	| SocialNetworkConnectionPublished_At
	| CreateSocialNetworkPayload
	| UpdateSocialNetworkPayload
	| DeleteSocialNetworkPayload
	| TechList
	| TechListConnection
	| TechListAggregator
	| TechListGroupBy
	| TechListConnectionId
	| TechListConnectionCreated_At
	| TechListConnectionUpdated_At
	| TechListConnectionName
	| TechListConnectionPublished_At
	| CreateTechListPayload
	| UpdateTechListPayload
	| DeleteTechListPayload
	| Webhook
	| WebhookConnection
	| WebhookAggregator
	| WebhookGroupBy
	| WebhookConnectionId
	| WebhookConnectionCreated_At
	| WebhookConnectionUpdated_At
	| WebhookConnectionName
	| WebhookConnectionPublished_At
	| CreateWebhookPayload
	| UpdateWebhookPayload
	| DeleteWebhookPayload
	| UploadFile
	| UploadFileConnection
	| UploadFileAggregator
	| UploadFileAggregatorSum
	| UploadFileAggregatorAvg
	| UploadFileAggregatorMin
	| UploadFileAggregatorMax
	| UploadFileGroupBy
	| UploadFileConnectionId
	| UploadFileConnectionCreated_At
	| UploadFileConnectionUpdated_At
	| UploadFileConnectionName
	| UploadFileConnectionAlternativeText
	| UploadFileConnectionCaption
	| UploadFileConnectionWidth
	| UploadFileConnectionHeight
	| UploadFileConnectionFormats
	| UploadFileConnectionHash
	| UploadFileConnectionExt
	| UploadFileConnectionMime
	| UploadFileConnectionSize
	| UploadFileConnectionUrl
	| UploadFileConnectionPreviewUrl
	| UploadFileConnectionProvider
	| UploadFileConnectionProvider_Metadata
	| DeleteFilePayload
	| UsersPermissionsPermission
	| UsersPermissionsRole
	| UsersPermissionsRoleConnection
	| UsersPermissionsRoleAggregator
	| UsersPermissionsRoleGroupBy
	| UsersPermissionsRoleConnectionId
	| UsersPermissionsRoleConnectionName
	| UsersPermissionsRoleConnectionDescription
	| UsersPermissionsRoleConnectionType
	| CreateRolePayload
	| UpdateRolePayload
	| DeleteRolePayload
	| UsersPermissionsUser
	| UsersPermissionsUserConnection
	| UsersPermissionsUserAggregator
	| UsersPermissionsUserGroupBy
	| UsersPermissionsUserConnectionId
	| UsersPermissionsUserConnectionCreated_At
	| UsersPermissionsUserConnectionUpdated_At
	| UsersPermissionsUserConnectionUsername
	| UsersPermissionsUserConnectionEmail
	| UsersPermissionsUserConnectionProvider
	| UsersPermissionsUserConnectionConfirmed
	| UsersPermissionsUserConnectionBlocked
	| UsersPermissionsUserConnectionRole
	| CreateUserPayload
	| UpdateUserPayload
	| DeleteUserPayload
	| ComponentContentImage
	| ComponentContentInfoColumn
	| ComponentContentRichText
	| ComponentContentTechnologies

export type InputId = {
	id: Scalars['ID']
}

export enum PublicationState {
	Live = 'LIVE',
	Preview = 'PREVIEW',
}

export type AdminUser = {
	__typename?: 'AdminUser'
	id: Scalars['ID']
	username?: Maybe<Scalars['String']>
	firstname: Scalars['String']
	lastname: Scalars['String']
}

export type Query = {
	__typename?: 'Query'
	caseStudyMeta?: Maybe<CaseStudyMeta>
	caseStudyMetas?: Maybe<Array<Maybe<CaseStudyMeta>>>
	caseStudyMetasConnection?: Maybe<CaseStudyMetaConnection>
	caseStudy?: Maybe<CaseStudy>
	caseStudies?: Maybe<Array<Maybe<CaseStudy>>>
	caseStudiesConnection?: Maybe<CaseStudyConnection>
	contact?: Maybe<Contact>
	contacts?: Maybe<Array<Maybe<Contact>>>
	contactsConnection?: Maybe<ContactConnection>
	header?: Maybe<Header>
	headers?: Maybe<Array<Maybe<Header>>>
	headersConnection?: Maybe<HeaderConnection>
	homepage?: Maybe<Homepage>
	homepages?: Maybe<Array<Maybe<Homepage>>>
	homepagesConnection?: Maybe<HomepageConnection>
	language?: Maybe<Language>
	languages?: Maybe<Array<Maybe<Language>>>
	languagesConnection?: Maybe<LanguageConnection>
	menu?: Maybe<Menu>
	menus?: Maybe<Array<Maybe<Menu>>>
	menusConnection?: Maybe<MenuConnection>
	socialNetwork?: Maybe<SocialNetwork>
	socialNetworks?: Maybe<Array<Maybe<SocialNetwork>>>
	socialNetworksConnection?: Maybe<SocialNetworkConnection>
	techList?: Maybe<TechList>
	techLists?: Maybe<Array<Maybe<TechList>>>
	techListsConnection?: Maybe<TechListConnection>
	webhook?: Maybe<Webhook>
	webhooks?: Maybe<Array<Maybe<Webhook>>>
	webhooksConnection?: Maybe<WebhookConnection>
	files?: Maybe<Array<Maybe<UploadFile>>>
	filesConnection?: Maybe<UploadFileConnection>
	role?: Maybe<UsersPermissionsRole>
	/** Retrieve all the existing roles. You can't apply filters on this query. */
	roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>
	rolesConnection?: Maybe<UsersPermissionsRoleConnection>
	user?: Maybe<UsersPermissionsUser>
	users?: Maybe<Array<Maybe<UsersPermissionsUser>>>
	usersConnection?: Maybe<UsersPermissionsUserConnection>
	me?: Maybe<UsersPermissionsMe>
}

export type QueryCaseStudyMetaArgs = {
	id: Scalars['ID']
	publicationState?: Maybe<PublicationState>
}

export type QueryCaseStudyMetasArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
	publicationState?: Maybe<PublicationState>
}

export type QueryCaseStudyMetasConnectionArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type QueryCaseStudyArgs = {
	id: Scalars['ID']
	publicationState?: Maybe<PublicationState>
}

export type QueryCaseStudiesArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
	publicationState?: Maybe<PublicationState>
}

export type QueryCaseStudiesConnectionArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type QueryContactArgs = {
	id: Scalars['ID']
	publicationState?: Maybe<PublicationState>
}

export type QueryContactsArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
	publicationState?: Maybe<PublicationState>
}

export type QueryContactsConnectionArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type QueryHeaderArgs = {
	id: Scalars['ID']
	publicationState?: Maybe<PublicationState>
}

export type QueryHeadersArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
	publicationState?: Maybe<PublicationState>
}

export type QueryHeadersConnectionArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type QueryHomepageArgs = {
	id: Scalars['ID']
	publicationState?: Maybe<PublicationState>
}

export type QueryHomepagesArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
	publicationState?: Maybe<PublicationState>
}

export type QueryHomepagesConnectionArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type QueryLanguageArgs = {
	id: Scalars['ID']
	publicationState?: Maybe<PublicationState>
}

export type QueryLanguagesArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
	publicationState?: Maybe<PublicationState>
}

export type QueryLanguagesConnectionArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type QueryMenuArgs = {
	id: Scalars['ID']
	publicationState?: Maybe<PublicationState>
}

export type QueryMenusArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
	publicationState?: Maybe<PublicationState>
}

export type QueryMenusConnectionArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type QuerySocialNetworkArgs = {
	id: Scalars['ID']
	publicationState?: Maybe<PublicationState>
}

export type QuerySocialNetworksArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
	publicationState?: Maybe<PublicationState>
}

export type QuerySocialNetworksConnectionArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type QueryTechListArgs = {
	id: Scalars['ID']
	publicationState?: Maybe<PublicationState>
}

export type QueryTechListsArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
	publicationState?: Maybe<PublicationState>
}

export type QueryTechListsConnectionArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type QueryWebhookArgs = {
	id: Scalars['ID']
	publicationState?: Maybe<PublicationState>
}

export type QueryWebhooksArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
	publicationState?: Maybe<PublicationState>
}

export type QueryWebhooksConnectionArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type QueryFilesArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
	publicationState?: Maybe<PublicationState>
}

export type QueryFilesConnectionArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type QueryRoleArgs = {
	id: Scalars['ID']
	publicationState?: Maybe<PublicationState>
}

export type QueryRolesArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
	publicationState?: Maybe<PublicationState>
}

export type QueryRolesConnectionArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type QueryUserArgs = {
	id: Scalars['ID']
	publicationState?: Maybe<PublicationState>
}

export type QueryUsersArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
	publicationState?: Maybe<PublicationState>
}

export type QueryUsersConnectionArgs = {
	sort?: Maybe<Scalars['String']>
	limit?: Maybe<Scalars['Int']>
	start?: Maybe<Scalars['Int']>
	where?: Maybe<Scalars['JSON']>
}

export type Mutation = {
	__typename?: 'Mutation'
	createCaseStudyMeta?: Maybe<CreateCaseStudyMetaPayload>
	updateCaseStudyMeta?: Maybe<UpdateCaseStudyMetaPayload>
	deleteCaseStudyMeta?: Maybe<DeleteCaseStudyMetaPayload>
	createCaseStudy?: Maybe<CreateCaseStudyPayload>
	updateCaseStudy?: Maybe<UpdateCaseStudyPayload>
	deleteCaseStudy?: Maybe<DeleteCaseStudyPayload>
	createContact?: Maybe<CreateContactPayload>
	updateContact?: Maybe<UpdateContactPayload>
	deleteContact?: Maybe<DeleteContactPayload>
	createHeader?: Maybe<CreateHeaderPayload>
	updateHeader?: Maybe<UpdateHeaderPayload>
	deleteHeader?: Maybe<DeleteHeaderPayload>
	createHomepage?: Maybe<CreateHomepagePayload>
	updateHomepage?: Maybe<UpdateHomepagePayload>
	deleteHomepage?: Maybe<DeleteHomepagePayload>
	createLanguage?: Maybe<CreateLanguagePayload>
	updateLanguage?: Maybe<UpdateLanguagePayload>
	deleteLanguage?: Maybe<DeleteLanguagePayload>
	createMenu?: Maybe<CreateMenuPayload>
	updateMenu?: Maybe<UpdateMenuPayload>
	deleteMenu?: Maybe<DeleteMenuPayload>
	createSocialNetwork?: Maybe<CreateSocialNetworkPayload>
	updateSocialNetwork?: Maybe<UpdateSocialNetworkPayload>
	deleteSocialNetwork?: Maybe<DeleteSocialNetworkPayload>
	createTechList?: Maybe<CreateTechListPayload>
	updateTechList?: Maybe<UpdateTechListPayload>
	deleteTechList?: Maybe<DeleteTechListPayload>
	createWebhook?: Maybe<CreateWebhookPayload>
	updateWebhook?: Maybe<UpdateWebhookPayload>
	deleteWebhook?: Maybe<DeleteWebhookPayload>
	/** Delete one file */
	deleteFile?: Maybe<DeleteFilePayload>
	/** Create a new role */
	createRole?: Maybe<CreateRolePayload>
	/** Update an existing role */
	updateRole?: Maybe<UpdateRolePayload>
	/** Delete an existing role */
	deleteRole?: Maybe<DeleteRolePayload>
	/** Create a new user */
	createUser?: Maybe<CreateUserPayload>
	/** Update an existing user */
	updateUser?: Maybe<UpdateUserPayload>
	/** Delete an existing user */
	deleteUser?: Maybe<DeleteUserPayload>
	upload: UploadFile
	multipleUpload: Array<Maybe<UploadFile>>
	updateFileInfo: UploadFile
	login: UsersPermissionsLoginPayload
	register: UsersPermissionsLoginPayload
	forgotPassword?: Maybe<UserPermissionsPasswordPayload>
	resetPassword?: Maybe<UsersPermissionsLoginPayload>
	emailConfirmation?: Maybe<UsersPermissionsLoginPayload>
}

export type MutationCreateCaseStudyMetaArgs = {
	input?: Maybe<CreateCaseStudyMetaInput>
}

export type MutationUpdateCaseStudyMetaArgs = {
	input?: Maybe<UpdateCaseStudyMetaInput>
}

export type MutationDeleteCaseStudyMetaArgs = {
	input?: Maybe<DeleteCaseStudyMetaInput>
}

export type MutationCreateCaseStudyArgs = {
	input?: Maybe<CreateCaseStudyInput>
}

export type MutationUpdateCaseStudyArgs = {
	input?: Maybe<UpdateCaseStudyInput>
}

export type MutationDeleteCaseStudyArgs = {
	input?: Maybe<DeleteCaseStudyInput>
}

export type MutationCreateContactArgs = {
	input?: Maybe<CreateContactInput>
}

export type MutationUpdateContactArgs = {
	input?: Maybe<UpdateContactInput>
}

export type MutationDeleteContactArgs = {
	input?: Maybe<DeleteContactInput>
}

export type MutationCreateHeaderArgs = {
	input?: Maybe<CreateHeaderInput>
}

export type MutationUpdateHeaderArgs = {
	input?: Maybe<UpdateHeaderInput>
}

export type MutationDeleteHeaderArgs = {
	input?: Maybe<DeleteHeaderInput>
}

export type MutationCreateHomepageArgs = {
	input?: Maybe<CreateHomepageInput>
}

export type MutationUpdateHomepageArgs = {
	input?: Maybe<UpdateHomepageInput>
}

export type MutationDeleteHomepageArgs = {
	input?: Maybe<DeleteHomepageInput>
}

export type MutationCreateLanguageArgs = {
	input?: Maybe<CreateLanguageInput>
}

export type MutationUpdateLanguageArgs = {
	input?: Maybe<UpdateLanguageInput>
}

export type MutationDeleteLanguageArgs = {
	input?: Maybe<DeleteLanguageInput>
}

export type MutationCreateMenuArgs = {
	input?: Maybe<CreateMenuInput>
}

export type MutationUpdateMenuArgs = {
	input?: Maybe<UpdateMenuInput>
}

export type MutationDeleteMenuArgs = {
	input?: Maybe<DeleteMenuInput>
}

export type MutationCreateSocialNetworkArgs = {
	input?: Maybe<CreateSocialNetworkInput>
}

export type MutationUpdateSocialNetworkArgs = {
	input?: Maybe<UpdateSocialNetworkInput>
}

export type MutationDeleteSocialNetworkArgs = {
	input?: Maybe<DeleteSocialNetworkInput>
}

export type MutationCreateTechListArgs = {
	input?: Maybe<CreateTechListInput>
}

export type MutationUpdateTechListArgs = {
	input?: Maybe<UpdateTechListInput>
}

export type MutationDeleteTechListArgs = {
	input?: Maybe<DeleteTechListInput>
}

export type MutationCreateWebhookArgs = {
	input?: Maybe<CreateWebhookInput>
}

export type MutationUpdateWebhookArgs = {
	input?: Maybe<UpdateWebhookInput>
}

export type MutationDeleteWebhookArgs = {
	input?: Maybe<DeleteWebhookInput>
}

export type MutationDeleteFileArgs = {
	input?: Maybe<DeleteFileInput>
}

export type MutationCreateRoleArgs = {
	input?: Maybe<CreateRoleInput>
}

export type MutationUpdateRoleArgs = {
	input?: Maybe<UpdateRoleInput>
}

export type MutationDeleteRoleArgs = {
	input?: Maybe<DeleteRoleInput>
}

export type MutationCreateUserArgs = {
	input?: Maybe<CreateUserInput>
}

export type MutationUpdateUserArgs = {
	input?: Maybe<UpdateUserInput>
}

export type MutationDeleteUserArgs = {
	input?: Maybe<DeleteUserInput>
}

export type MutationUploadArgs = {
	refId?: Maybe<Scalars['ID']>
	ref?: Maybe<Scalars['String']>
	field?: Maybe<Scalars['String']>
	source?: Maybe<Scalars['String']>
	info?: Maybe<FileInfoInput>
	file: Scalars['Upload']
}

export type MutationMultipleUploadArgs = {
	refId?: Maybe<Scalars['ID']>
	ref?: Maybe<Scalars['String']>
	field?: Maybe<Scalars['String']>
	source?: Maybe<Scalars['String']>
	files: Array<Maybe<Scalars['Upload']>>
}

export type MutationUpdateFileInfoArgs = {
	id: Scalars['ID']
	info: FileInfoInput
}

export type MutationLoginArgs = {
	input: UsersPermissionsLoginInput
}

export type MutationRegisterArgs = {
	input: UsersPermissionsRegisterInput
}

export type MutationForgotPasswordArgs = {
	email: Scalars['String']
}

export type MutationResetPasswordArgs = {
	password: Scalars['String']
	passwordConfirmation: Scalars['String']
	code: Scalars['String']
}

export type MutationEmailConfirmationArgs = {
	confirmation: Scalars['String']
}

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never }>

export type Unnamed_1_Query = { __typename?: 'Query' } & {
	contacts?: Maybe<
		Array<
			Maybe<
				{ __typename?: 'Contact' } & Pick<
					Contact,
					| 'id'
					| 'language'
					| 'title'
					| 'address'
					| 'taxIdentificationNumbers'
					| 'taxIdentificationDescription'
					| 'email'
					| 'phoneNumber'
				>
			>
		>
	>
}

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never }>

export type Unnamed_2_Query = { __typename?: 'Query' } & {
	headers?: Maybe<
		Array<
			Maybe<
				{ __typename?: 'Header' } & Pick<
					Header,
					'id' | 'language' | 'title' | 'description'
				>
			>
		>
	>
}

export type Unnamed_3_QueryVariables = Exact<{ [key: string]: never }>

export type Unnamed_3_Query = { __typename?: 'Query' } & {
	homepages?: Maybe<
		Array<
			Maybe<
				{ __typename?: 'Homepage' } & Pick<
					Homepage,
					| 'id'
					| 'language'
					| 'clickToStop'
					| 'descriptionAboveLine'
					| 'descriptionBellowLine'
				> & {
						logo?: Maybe<
							{ __typename?: 'UploadFile' } & Pick<
								UploadFile,
								'url'
							>
						>
					}
			>
		>
	>
}

export type Unnamed_4_QueryVariables = Exact<{ [key: string]: never }>

export type Unnamed_4_Query = { __typename?: 'Query' } & {
	languages?: Maybe<
		Array<
			Maybe<
				{ __typename?: 'Language' } & Pick<
					Language,
					'id' | 'languageCode' | 'displayName'
				>
			>
		>
	>
}

export type Unnamed_5_QueryVariables = Exact<{ [key: string]: never }>

export type Unnamed_5_Query = { __typename?: 'Query' } & {
	menus?: Maybe<
		Array<
			Maybe<
				{ __typename?: 'Menu' } & Pick<
					Menu,
					| 'id'
					| 'aboutUs'
					| 'career'
					| 'contact'
					| 'homePage'
					| 'language'
					| 'menu'
					| 'reference'
				>
			>
		>
	>
}

export type Unnamed_6_QueryVariables = Exact<{ [key: string]: never }>

export type Unnamed_6_Query = { __typename?: 'Query' } & {
	socialNetworks?: Maybe<
		Array<
			Maybe<
				{ __typename?: 'SocialNetwork' } & Pick<
					SocialNetwork,
					'id' | 'name' | 'url'
				>
			>
		>
	>
}
