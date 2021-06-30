export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type AboutUs = {
  __typename?: 'AboutUs';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  language?: Maybe<Scalars['String']>;
  heroDescription?: Maybe<Scalars['String']>;
  heroLogo?: Maybe<UploadFile>;
  heroHeadlineTop?: Maybe<Scalars['String']>;
  heroHeadlineBottom?: Maybe<Scalars['String']>;
  heroArrowTitle?: Maybe<Scalars['String']>;
  weAreHeadline?: Maybe<Scalars['String']>;
  weAreDescription?: Maybe<Scalars['String']>;
  weAreArrowTitle?: Maybe<Scalars['String']>;
  skillsHeadline?: Maybe<Scalars['String']>;
  skillsDescription?: Maybe<Scalars['String']>;
  technologiesDescription?: Maybe<Scalars['String']>;
  technologiesImage?: Maybe<UploadFile>;
  valuesHeadline?: Maybe<Scalars['String']>;
  teamHeadline?: Maybe<Scalars['String']>;
  hqHeadline?: Maybe<Scalars['String']>;
  careerHeadline?: Maybe<Scalars['String']>;
  careerCTATitle?: Maybe<Scalars['String']>;
  careerCTAImage?: Maybe<UploadFile>;
  blogHeadline?: Maybe<Scalars['String']>;
  hqDescription?: Maybe<Scalars['String']>;
  careerDescription?: Maybe<Scalars['String']>;
  hqWeAreHereDescription?: Maybe<Scalars['String']>;
  hqWeAreHereImage?: Maybe<UploadFile>;
  hqCTATitle?: Maybe<Scalars['String']>;
  blogReadMore?: Maybe<Scalars['String']>;
  arrow?: Maybe<UploadFile>;
  published_at?: Maybe<Scalars['DateTime']>;
  weAreImageCarousel?: Maybe<Array<Maybe<UploadFile>>>;
  skills?: Maybe<Array<Maybe<Skill>>>;
  brandValues?: Maybe<Array<Maybe<BrandValue>>>;
  hqImageGrid?: Maybe<Array<Maybe<UploadFile>>>;
  teams?: Maybe<Array<Maybe<Team>>>;
};


export type AboutUsWeAreImageCarouselArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type AboutUsSkillsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type AboutUsBrandValuesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type AboutUsHqImageGridArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type AboutUsTeamsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type AboutUsConnection = {
  __typename?: 'AboutUsConnection';
  values?: Maybe<Array<Maybe<AboutUs>>>;
  groupBy?: Maybe<AboutUsGroupBy>;
  aggregate?: Maybe<AboutUsAggregator>;
};

export type AboutUsAggregator = {
  __typename?: 'AboutUsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AboutUsGroupBy = {
  __typename?: 'AboutUsGroupBy';
  id?: Maybe<Array<Maybe<AboutUsConnectionId>>>;
  created_at?: Maybe<Array<Maybe<AboutUsConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<AboutUsConnectionUpdated_At>>>;
  language?: Maybe<Array<Maybe<AboutUsConnectionLanguage>>>;
  heroDescription?: Maybe<Array<Maybe<AboutUsConnectionHeroDescription>>>;
  heroLogo?: Maybe<Array<Maybe<AboutUsConnectionHeroLogo>>>;
  heroHeadlineTop?: Maybe<Array<Maybe<AboutUsConnectionHeroHeadlineTop>>>;
  heroHeadlineBottom?: Maybe<Array<Maybe<AboutUsConnectionHeroHeadlineBottom>>>;
  heroArrowTitle?: Maybe<Array<Maybe<AboutUsConnectionHeroArrowTitle>>>;
  weAreHeadline?: Maybe<Array<Maybe<AboutUsConnectionWeAreHeadline>>>;
  weAreDescription?: Maybe<Array<Maybe<AboutUsConnectionWeAreDescription>>>;
  weAreArrowTitle?: Maybe<Array<Maybe<AboutUsConnectionWeAreArrowTitle>>>;
  skillsHeadline?: Maybe<Array<Maybe<AboutUsConnectionSkillsHeadline>>>;
  skillsDescription?: Maybe<Array<Maybe<AboutUsConnectionSkillsDescription>>>;
  technologiesDescription?: Maybe<Array<Maybe<AboutUsConnectionTechnologiesDescription>>>;
  technologiesImage?: Maybe<Array<Maybe<AboutUsConnectionTechnologiesImage>>>;
  valuesHeadline?: Maybe<Array<Maybe<AboutUsConnectionValuesHeadline>>>;
  teamHeadline?: Maybe<Array<Maybe<AboutUsConnectionTeamHeadline>>>;
  hqHeadline?: Maybe<Array<Maybe<AboutUsConnectionHqHeadline>>>;
  careerHeadline?: Maybe<Array<Maybe<AboutUsConnectionCareerHeadline>>>;
  careerCTATitle?: Maybe<Array<Maybe<AboutUsConnectionCareerCtaTitle>>>;
  careerCTAImage?: Maybe<Array<Maybe<AboutUsConnectionCareerCtaImage>>>;
  blogHeadline?: Maybe<Array<Maybe<AboutUsConnectionBlogHeadline>>>;
  hqDescription?: Maybe<Array<Maybe<AboutUsConnectionHqDescription>>>;
  careerDescription?: Maybe<Array<Maybe<AboutUsConnectionCareerDescription>>>;
  hqWeAreHereDescription?: Maybe<Array<Maybe<AboutUsConnectionHqWeAreHereDescription>>>;
  hqWeAreHereImage?: Maybe<Array<Maybe<AboutUsConnectionHqWeAreHereImage>>>;
  hqCTATitle?: Maybe<Array<Maybe<AboutUsConnectionHqCtaTitle>>>;
  blogReadMore?: Maybe<Array<Maybe<AboutUsConnectionBlogReadMore>>>;
  arrow?: Maybe<Array<Maybe<AboutUsConnectionArrow>>>;
  published_at?: Maybe<Array<Maybe<AboutUsConnectionPublished_At>>>;
};

export type AboutUsConnectionId = {
  __typename?: 'AboutUsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionCreated_At = {
  __typename?: 'AboutUsConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionUpdated_At = {
  __typename?: 'AboutUsConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionLanguage = {
  __typename?: 'AboutUsConnectionLanguage';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionHeroDescription = {
  __typename?: 'AboutUsConnectionHeroDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionHeroLogo = {
  __typename?: 'AboutUsConnectionHeroLogo';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionHeroHeadlineTop = {
  __typename?: 'AboutUsConnectionHeroHeadlineTop';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionHeroHeadlineBottom = {
  __typename?: 'AboutUsConnectionHeroHeadlineBottom';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionHeroArrowTitle = {
  __typename?: 'AboutUsConnectionHeroArrowTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionWeAreHeadline = {
  __typename?: 'AboutUsConnectionWeAreHeadline';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionWeAreDescription = {
  __typename?: 'AboutUsConnectionWeAreDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionWeAreArrowTitle = {
  __typename?: 'AboutUsConnectionWeAreArrowTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionSkillsHeadline = {
  __typename?: 'AboutUsConnectionSkillsHeadline';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionSkillsDescription = {
  __typename?: 'AboutUsConnectionSkillsDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionTechnologiesDescription = {
  __typename?: 'AboutUsConnectionTechnologiesDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionTechnologiesImage = {
  __typename?: 'AboutUsConnectionTechnologiesImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionValuesHeadline = {
  __typename?: 'AboutUsConnectionValuesHeadline';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionTeamHeadline = {
  __typename?: 'AboutUsConnectionTeamHeadline';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionHqHeadline = {
  __typename?: 'AboutUsConnectionHqHeadline';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionCareerHeadline = {
  __typename?: 'AboutUsConnectionCareerHeadline';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionCareerCtaTitle = {
  __typename?: 'AboutUsConnectionCareerCTATitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionCareerCtaImage = {
  __typename?: 'AboutUsConnectionCareerCTAImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionBlogHeadline = {
  __typename?: 'AboutUsConnectionBlogHeadline';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionHqDescription = {
  __typename?: 'AboutUsConnectionHqDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionCareerDescription = {
  __typename?: 'AboutUsConnectionCareerDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionHqWeAreHereDescription = {
  __typename?: 'AboutUsConnectionHqWeAreHereDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionHqWeAreHereImage = {
  __typename?: 'AboutUsConnectionHqWeAreHereImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionHqCtaTitle = {
  __typename?: 'AboutUsConnectionHqCTATitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionBlogReadMore = {
  __typename?: 'AboutUsConnectionBlogReadMore';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionArrow = {
  __typename?: 'AboutUsConnectionArrow';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionPublished_At = {
  __typename?: 'AboutUsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<AboutUsConnection>;
};

export type AboutUsInput = {
  language?: Maybe<Scalars['String']>;
  heroDescription?: Maybe<Scalars['String']>;
  heroLogo?: Maybe<Scalars['ID']>;
  heroHeadlineTop?: Maybe<Scalars['String']>;
  heroHeadlineBottom?: Maybe<Scalars['String']>;
  heroArrowTitle?: Maybe<Scalars['String']>;
  weAreHeadline?: Maybe<Scalars['String']>;
  weAreDescription?: Maybe<Scalars['String']>;
  weAreImageCarousel?: Maybe<Array<Maybe<Scalars['ID']>>>;
  weAreArrowTitle?: Maybe<Scalars['String']>;
  skillsHeadline?: Maybe<Scalars['String']>;
  skills?: Maybe<Array<Maybe<Scalars['ID']>>>;
  skillsDescription?: Maybe<Scalars['String']>;
  technologiesDescription?: Maybe<Scalars['String']>;
  technologiesImage?: Maybe<Scalars['ID']>;
  valuesHeadline?: Maybe<Scalars['String']>;
  brandValues?: Maybe<Array<Maybe<Scalars['ID']>>>;
  teamHeadline?: Maybe<Scalars['String']>;
  hqHeadline?: Maybe<Scalars['String']>;
  hqImageGrid?: Maybe<Array<Maybe<Scalars['ID']>>>;
  careerHeadline?: Maybe<Scalars['String']>;
  careerCTATitle?: Maybe<Scalars['String']>;
  careerCTAImage?: Maybe<Scalars['ID']>;
  blogHeadline?: Maybe<Scalars['String']>;
  hqDescription?: Maybe<Scalars['String']>;
  careerDescription?: Maybe<Scalars['String']>;
  hqWeAreHereDescription?: Maybe<Scalars['String']>;
  hqWeAreHereImage?: Maybe<Scalars['ID']>;
  hqCTATitle?: Maybe<Scalars['String']>;
  blogReadMore?: Maybe<Scalars['String']>;
  arrow?: Maybe<Scalars['ID']>;
  teams?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditAboutUsInput = {
  language?: Maybe<Scalars['String']>;
  heroDescription?: Maybe<Scalars['String']>;
  heroLogo?: Maybe<Scalars['ID']>;
  heroHeadlineTop?: Maybe<Scalars['String']>;
  heroHeadlineBottom?: Maybe<Scalars['String']>;
  heroArrowTitle?: Maybe<Scalars['String']>;
  weAreHeadline?: Maybe<Scalars['String']>;
  weAreDescription?: Maybe<Scalars['String']>;
  weAreImageCarousel?: Maybe<Array<Maybe<Scalars['ID']>>>;
  weAreArrowTitle?: Maybe<Scalars['String']>;
  skillsHeadline?: Maybe<Scalars['String']>;
  skills?: Maybe<Array<Maybe<Scalars['ID']>>>;
  skillsDescription?: Maybe<Scalars['String']>;
  technologiesDescription?: Maybe<Scalars['String']>;
  technologiesImage?: Maybe<Scalars['ID']>;
  valuesHeadline?: Maybe<Scalars['String']>;
  brandValues?: Maybe<Array<Maybe<Scalars['ID']>>>;
  teamHeadline?: Maybe<Scalars['String']>;
  hqHeadline?: Maybe<Scalars['String']>;
  hqImageGrid?: Maybe<Array<Maybe<Scalars['ID']>>>;
  careerHeadline?: Maybe<Scalars['String']>;
  careerCTATitle?: Maybe<Scalars['String']>;
  careerCTAImage?: Maybe<Scalars['ID']>;
  blogHeadline?: Maybe<Scalars['String']>;
  hqDescription?: Maybe<Scalars['String']>;
  careerDescription?: Maybe<Scalars['String']>;
  hqWeAreHereDescription?: Maybe<Scalars['String']>;
  hqWeAreHereImage?: Maybe<Scalars['ID']>;
  hqCTATitle?: Maybe<Scalars['String']>;
  blogReadMore?: Maybe<Scalars['String']>;
  arrow?: Maybe<Scalars['ID']>;
  teams?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateAboutUsInput = {
  data?: Maybe<AboutUsInput>;
};

export type CreateAboutUsPayload = {
  __typename?: 'createAboutUsPayload';
  aboutUs?: Maybe<AboutUs>;
};

export type UpdateAboutUsInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditAboutUsInput>;
};

export type UpdateAboutUsPayload = {
  __typename?: 'updateAboutUsPayload';
  aboutUs?: Maybe<AboutUs>;
};

export type DeleteAboutUsInput = {
  where?: Maybe<InputId>;
};

export type DeleteAboutUsPayload = {
  __typename?: 'deleteAboutUsPayload';
  aboutUs?: Maybe<AboutUs>;
};

export type AboutWeAreImageCarousel = {
  __typename?: 'AboutWeAreImageCarousel';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  published_at?: Maybe<Scalars['DateTime']>;
  weAreImageCarousel?: Maybe<Array<Maybe<UploadFile>>>;
};


export type AboutWeAreImageCarouselWeAreImageCarouselArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type AboutWeAreImageCarouselInput = {
  weAreImageCarousel?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditAboutWeAreImageCarouselInput = {
  weAreImageCarousel?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateAboutWeAreImageCarouselInput = {
  data?: Maybe<EditAboutWeAreImageCarouselInput>;
};

export type UpdateAboutWeAreImageCarouselPayload = {
  __typename?: 'updateAboutWeAreImageCarouselPayload';
  aboutWeAreImageCarousel?: Maybe<AboutWeAreImageCarousel>;
};

export type DeleteAboutWeAreImageCarouselPayload = {
  __typename?: 'deleteAboutWeAreImageCarouselPayload';
  aboutWeAreImageCarousel?: Maybe<AboutWeAreImageCarousel>;
};

export type BrandValue = {
  __typename?: 'BrandValue';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  headline?: Maybe<Scalars['String']>;
  backgroundNumber?: Maybe<Scalars['Int']>;
  image?: Maybe<UploadFile>;
  description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type BrandValueConnection = {
  __typename?: 'BrandValueConnection';
  values?: Maybe<Array<Maybe<BrandValue>>>;
  groupBy?: Maybe<BrandValueGroupBy>;
  aggregate?: Maybe<BrandValueAggregator>;
};

export type BrandValueAggregator = {
  __typename?: 'BrandValueAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<BrandValueAggregatorSum>;
  avg?: Maybe<BrandValueAggregatorAvg>;
  min?: Maybe<BrandValueAggregatorMin>;
  max?: Maybe<BrandValueAggregatorMax>;
};

export type BrandValueAggregatorSum = {
  __typename?: 'BrandValueAggregatorSum';
  backgroundNumber?: Maybe<Scalars['Float']>;
};

export type BrandValueAggregatorAvg = {
  __typename?: 'BrandValueAggregatorAvg';
  backgroundNumber?: Maybe<Scalars['Float']>;
};

export type BrandValueAggregatorMin = {
  __typename?: 'BrandValueAggregatorMin';
  backgroundNumber?: Maybe<Scalars['Float']>;
};

export type BrandValueAggregatorMax = {
  __typename?: 'BrandValueAggregatorMax';
  backgroundNumber?: Maybe<Scalars['Float']>;
};

export type BrandValueGroupBy = {
  __typename?: 'BrandValueGroupBy';
  id?: Maybe<Array<Maybe<BrandValueConnectionId>>>;
  created_at?: Maybe<Array<Maybe<BrandValueConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<BrandValueConnectionUpdated_At>>>;
  headline?: Maybe<Array<Maybe<BrandValueConnectionHeadline>>>;
  backgroundNumber?: Maybe<Array<Maybe<BrandValueConnectionBackgroundNumber>>>;
  image?: Maybe<Array<Maybe<BrandValueConnectionImage>>>;
  description?: Maybe<Array<Maybe<BrandValueConnectionDescription>>>;
  published_at?: Maybe<Array<Maybe<BrandValueConnectionPublished_At>>>;
};

export type BrandValueConnectionId = {
  __typename?: 'BrandValueConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BrandValueConnection>;
};

export type BrandValueConnectionCreated_At = {
  __typename?: 'BrandValueConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BrandValueConnection>;
};

export type BrandValueConnectionUpdated_At = {
  __typename?: 'BrandValueConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BrandValueConnection>;
};

export type BrandValueConnectionHeadline = {
  __typename?: 'BrandValueConnectionHeadline';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BrandValueConnection>;
};

export type BrandValueConnectionBackgroundNumber = {
  __typename?: 'BrandValueConnectionBackgroundNumber';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<BrandValueConnection>;
};

export type BrandValueConnectionImage = {
  __typename?: 'BrandValueConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<BrandValueConnection>;
};

export type BrandValueConnectionDescription = {
  __typename?: 'BrandValueConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<BrandValueConnection>;
};

export type BrandValueConnectionPublished_At = {
  __typename?: 'BrandValueConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<BrandValueConnection>;
};

export type BrandValueInput = {
  headline?: Maybe<Scalars['String']>;
  backgroundNumber?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditBrandValueInput = {
  headline?: Maybe<Scalars['String']>;
  backgroundNumber?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateBrandValueInput = {
  data?: Maybe<BrandValueInput>;
};

export type CreateBrandValuePayload = {
  __typename?: 'createBrandValuePayload';
  brandValue?: Maybe<BrandValue>;
};

export type UpdateBrandValueInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditBrandValueInput>;
};

export type UpdateBrandValuePayload = {
  __typename?: 'updateBrandValuePayload';
  brandValue?: Maybe<BrandValue>;
};

export type DeleteBrandValueInput = {
  where?: Maybe<InputId>;
};

export type DeleteBrandValuePayload = {
  __typename?: 'deleteBrandValuePayload';
  brandValue?: Maybe<BrandValue>;
};

export type CareerOfferings = {
  __typename?: 'CareerOfferings';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  language?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  careerTechnologiesTitle: Scalars['String'];
  careerTechnologiesContent?: Maybe<Scalars['String']>;
  careerExpectedSkillsTitle: Scalars['String'];
  careerExpectedSkillsContent?: Maybe<Scalars['String']>;
  careerOfferTitle: Scalars['String'];
  careerOfferContent?: Maybe<Scalars['String']>;
  endTitle: Scalars['String'];
  endContent?: Maybe<Scalars['String']>;
  endCTA: Scalars['String'];
  slug: Scalars['String'];
  color?: Maybe<Scalars['String']>;
  perex?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type CareerOfferingsConnection = {
  __typename?: 'CareerOfferingsConnection';
  values?: Maybe<Array<Maybe<CareerOfferings>>>;
  groupBy?: Maybe<CareerOfferingsGroupBy>;
  aggregate?: Maybe<CareerOfferingsAggregator>;
};

export type CareerOfferingsAggregator = {
  __typename?: 'CareerOfferingsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CareerOfferingsGroupBy = {
  __typename?: 'CareerOfferingsGroupBy';
  id?: Maybe<Array<Maybe<CareerOfferingsConnectionId>>>;
  created_at?: Maybe<Array<Maybe<CareerOfferingsConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<CareerOfferingsConnectionUpdated_At>>>;
  language?: Maybe<Array<Maybe<CareerOfferingsConnectionLanguage>>>;
  title?: Maybe<Array<Maybe<CareerOfferingsConnectionTitle>>>;
  description?: Maybe<Array<Maybe<CareerOfferingsConnectionDescription>>>;
  careerTechnologiesTitle?: Maybe<Array<Maybe<CareerOfferingsConnectionCareerTechnologiesTitle>>>;
  careerTechnologiesContent?: Maybe<Array<Maybe<CareerOfferingsConnectionCareerTechnologiesContent>>>;
  careerExpectedSkillsTitle?: Maybe<Array<Maybe<CareerOfferingsConnectionCareerExpectedSkillsTitle>>>;
  careerExpectedSkillsContent?: Maybe<Array<Maybe<CareerOfferingsConnectionCareerExpectedSkillsContent>>>;
  careerOfferTitle?: Maybe<Array<Maybe<CareerOfferingsConnectionCareerOfferTitle>>>;
  careerOfferContent?: Maybe<Array<Maybe<CareerOfferingsConnectionCareerOfferContent>>>;
  endTitle?: Maybe<Array<Maybe<CareerOfferingsConnectionEndTitle>>>;
  endContent?: Maybe<Array<Maybe<CareerOfferingsConnectionEndContent>>>;
  endCTA?: Maybe<Array<Maybe<CareerOfferingsConnectionEndCta>>>;
  slug?: Maybe<Array<Maybe<CareerOfferingsConnectionSlug>>>;
  color?: Maybe<Array<Maybe<CareerOfferingsConnectionColor>>>;
  perex?: Maybe<Array<Maybe<CareerOfferingsConnectionPerex>>>;
  published_at?: Maybe<Array<Maybe<CareerOfferingsConnectionPublished_At>>>;
};

export type CareerOfferingsConnectionId = {
  __typename?: 'CareerOfferingsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionCreated_At = {
  __typename?: 'CareerOfferingsConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionUpdated_At = {
  __typename?: 'CareerOfferingsConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionLanguage = {
  __typename?: 'CareerOfferingsConnectionLanguage';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionTitle = {
  __typename?: 'CareerOfferingsConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionDescription = {
  __typename?: 'CareerOfferingsConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionCareerTechnologiesTitle = {
  __typename?: 'CareerOfferingsConnectionCareerTechnologiesTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionCareerTechnologiesContent = {
  __typename?: 'CareerOfferingsConnectionCareerTechnologiesContent';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionCareerExpectedSkillsTitle = {
  __typename?: 'CareerOfferingsConnectionCareerExpectedSkillsTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionCareerExpectedSkillsContent = {
  __typename?: 'CareerOfferingsConnectionCareerExpectedSkillsContent';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionCareerOfferTitle = {
  __typename?: 'CareerOfferingsConnectionCareerOfferTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionCareerOfferContent = {
  __typename?: 'CareerOfferingsConnectionCareerOfferContent';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionEndTitle = {
  __typename?: 'CareerOfferingsConnectionEndTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionEndContent = {
  __typename?: 'CareerOfferingsConnectionEndContent';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionEndCta = {
  __typename?: 'CareerOfferingsConnectionEndCTA';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionSlug = {
  __typename?: 'CareerOfferingsConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionColor = {
  __typename?: 'CareerOfferingsConnectionColor';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionPerex = {
  __typename?: 'CareerOfferingsConnectionPerex';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionPublished_At = {
  __typename?: 'CareerOfferingsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingInput = {
  language?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  careerTechnologiesTitle?: Maybe<Scalars['String']>;
  careerTechnologiesContent?: Maybe<Scalars['String']>;
  careerExpectedSkillsTitle?: Maybe<Scalars['String']>;
  careerExpectedSkillsContent?: Maybe<Scalars['String']>;
  careerOfferTitle?: Maybe<Scalars['String']>;
  careerOfferContent?: Maybe<Scalars['String']>;
  endTitle?: Maybe<Scalars['String']>;
  endContent?: Maybe<Scalars['String']>;
  endCTA?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  color?: Maybe<Scalars['String']>;
  perex?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditCareerOfferingInput = {
  language?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  careerTechnologiesTitle?: Maybe<Scalars['String']>;
  careerTechnologiesContent?: Maybe<Scalars['String']>;
  careerExpectedSkillsTitle?: Maybe<Scalars['String']>;
  careerExpectedSkillsContent?: Maybe<Scalars['String']>;
  careerOfferTitle?: Maybe<Scalars['String']>;
  careerOfferContent?: Maybe<Scalars['String']>;
  endTitle?: Maybe<Scalars['String']>;
  endContent?: Maybe<Scalars['String']>;
  endCTA?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  perex?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateCareerOfferingInput = {
  data?: Maybe<CareerOfferingInput>;
};

export type CreateCareerOfferingPayload = {
  __typename?: 'createCareerOfferingPayload';
  careerOffering?: Maybe<CareerOfferings>;
};

export type UpdateCareerOfferingInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCareerOfferingInput>;
};

export type UpdateCareerOfferingPayload = {
  __typename?: 'updateCareerOfferingPayload';
  careerOffering?: Maybe<CareerOfferings>;
};

export type DeleteCareerOfferingInput = {
  where?: Maybe<InputId>;
};

export type DeleteCareerOfferingPayload = {
  __typename?: 'deleteCareerOfferingPayload';
  careerOffering?: Maybe<CareerOfferings>;
};

export type Career = {
  __typename?: 'Career';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  description: Scalars['String'];
  technologies?: Maybe<ComponentContentTechnologies>;
  careerWho?: Maybe<Scalars['String']>;
  somethingElseHeading?: Maybe<Scalars['String']>;
  somethingElseDescription?: Maybe<Scalars['String']>;
  somethingElseContact?: Maybe<Scalars['String']>;
  careerWhy?: Maybe<Scalars['String']>;
  careerWhatHeading?: Maybe<Scalars['String']>;
  info?: Maybe<Array<Maybe<ComponentContentPictureList>>>;
  careerWhyLook?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  careerPositions?: Maybe<Array<Maybe<CareerOfferings>>>;
  localizations?: Maybe<Array<Maybe<Career>>>;
};


export type CareerCareerPositionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type CareerLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CareerInput = {
  title: Scalars['String'];
  description: Scalars['String'];
  technologies?: Maybe<ComponentContentTechnologyInput>;
  careerWho?: Maybe<Scalars['String']>;
  careerPositions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  somethingElseHeading?: Maybe<Scalars['String']>;
  somethingElseDescription?: Maybe<Scalars['String']>;
  somethingElseContact?: Maybe<Scalars['String']>;
  careerWhy?: Maybe<Scalars['String']>;
  careerWhatHeading?: Maybe<Scalars['String']>;
  info?: Maybe<Array<Maybe<ComponentContentPictureListInput>>>;
  careerWhyLook?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditCareerInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  technologies?: Maybe<EditComponentContentTechnologyInput>;
  careerWho?: Maybe<Scalars['String']>;
  careerPositions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  somethingElseHeading?: Maybe<Scalars['String']>;
  somethingElseDescription?: Maybe<Scalars['String']>;
  somethingElseContact?: Maybe<Scalars['String']>;
  careerWhy?: Maybe<Scalars['String']>;
  careerWhatHeading?: Maybe<Scalars['String']>;
  info?: Maybe<Array<Maybe<EditComponentContentPictureListInput>>>;
  careerWhyLook?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateCareerInput = {
  data?: Maybe<EditCareerInput>;
};

export type UpdateCareerPayload = {
  __typename?: 'updateCareerPayload';
  career?: Maybe<Career>;
};

export type DeleteCareerPayload = {
  __typename?: 'deleteCareerPayload';
  career?: Maybe<Career>;
};

export type CaseStudyMeta = {
  __typename?: 'CaseStudyMeta';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  industry?: Maybe<Scalars['String']>;
  client?: Maybe<Scalars['String']>;
  system?: Maybe<Scalars['String']>;
  technologies?: Maybe<Scalars['String']>;
  previousProject?: Maybe<Scalars['String']>;
  nextProject?: Maybe<Scalars['String']>;
  footerText?: Maybe<Scalars['String']>;
  writeUs?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type CaseStudyMetaConnection = {
  __typename?: 'CaseStudyMetaConnection';
  values?: Maybe<Array<Maybe<CaseStudyMeta>>>;
  groupBy?: Maybe<CaseStudyMetaGroupBy>;
  aggregate?: Maybe<CaseStudyMetaAggregator>;
};

export type CaseStudyMetaAggregator = {
  __typename?: 'CaseStudyMetaAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CaseStudyMetaGroupBy = {
  __typename?: 'CaseStudyMetaGroupBy';
  id?: Maybe<Array<Maybe<CaseStudyMetaConnectionId>>>;
  created_at?: Maybe<Array<Maybe<CaseStudyMetaConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<CaseStudyMetaConnectionUpdated_At>>>;
  industry?: Maybe<Array<Maybe<CaseStudyMetaConnectionIndustry>>>;
  client?: Maybe<Array<Maybe<CaseStudyMetaConnectionClient>>>;
  system?: Maybe<Array<Maybe<CaseStudyMetaConnectionSystem>>>;
  technologies?: Maybe<Array<Maybe<CaseStudyMetaConnectionTechnologies>>>;
  previousProject?: Maybe<Array<Maybe<CaseStudyMetaConnectionPreviousProject>>>;
  nextProject?: Maybe<Array<Maybe<CaseStudyMetaConnectionNextProject>>>;
  footerText?: Maybe<Array<Maybe<CaseStudyMetaConnectionFooterText>>>;
  writeUs?: Maybe<Array<Maybe<CaseStudyMetaConnectionWriteUs>>>;
  language?: Maybe<Array<Maybe<CaseStudyMetaConnectionLanguage>>>;
  published_at?: Maybe<Array<Maybe<CaseStudyMetaConnectionPublished_At>>>;
};

export type CaseStudyMetaConnectionId = {
  __typename?: 'CaseStudyMetaConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CaseStudyMetaConnection>;
};

export type CaseStudyMetaConnectionCreated_At = {
  __typename?: 'CaseStudyMetaConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CaseStudyMetaConnection>;
};

export type CaseStudyMetaConnectionUpdated_At = {
  __typename?: 'CaseStudyMetaConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CaseStudyMetaConnection>;
};

export type CaseStudyMetaConnectionIndustry = {
  __typename?: 'CaseStudyMetaConnectionIndustry';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CaseStudyMetaConnection>;
};

export type CaseStudyMetaConnectionClient = {
  __typename?: 'CaseStudyMetaConnectionClient';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CaseStudyMetaConnection>;
};

export type CaseStudyMetaConnectionSystem = {
  __typename?: 'CaseStudyMetaConnectionSystem';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CaseStudyMetaConnection>;
};

export type CaseStudyMetaConnectionTechnologies = {
  __typename?: 'CaseStudyMetaConnectionTechnologies';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CaseStudyMetaConnection>;
};

export type CaseStudyMetaConnectionPreviousProject = {
  __typename?: 'CaseStudyMetaConnectionPreviousProject';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CaseStudyMetaConnection>;
};

export type CaseStudyMetaConnectionNextProject = {
  __typename?: 'CaseStudyMetaConnectionNextProject';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CaseStudyMetaConnection>;
};

export type CaseStudyMetaConnectionFooterText = {
  __typename?: 'CaseStudyMetaConnectionFooterText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CaseStudyMetaConnection>;
};

export type CaseStudyMetaConnectionWriteUs = {
  __typename?: 'CaseStudyMetaConnectionWriteUs';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CaseStudyMetaConnection>;
};

export type CaseStudyMetaConnectionLanguage = {
  __typename?: 'CaseStudyMetaConnectionLanguage';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CaseStudyMetaConnection>;
};

export type CaseStudyMetaConnectionPublished_At = {
  __typename?: 'CaseStudyMetaConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CaseStudyMetaConnection>;
};

export type CaseStudyMetaInput = {
  industry?: Maybe<Scalars['String']>;
  client?: Maybe<Scalars['String']>;
  system?: Maybe<Scalars['String']>;
  technologies?: Maybe<Scalars['String']>;
  previousProject?: Maybe<Scalars['String']>;
  nextProject?: Maybe<Scalars['String']>;
  footerText?: Maybe<Scalars['String']>;
  writeUs?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditCaseStudyMetaInput = {
  industry?: Maybe<Scalars['String']>;
  client?: Maybe<Scalars['String']>;
  system?: Maybe<Scalars['String']>;
  technologies?: Maybe<Scalars['String']>;
  previousProject?: Maybe<Scalars['String']>;
  nextProject?: Maybe<Scalars['String']>;
  footerText?: Maybe<Scalars['String']>;
  writeUs?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateCaseStudyMetaInput = {
  data?: Maybe<CaseStudyMetaInput>;
};

export type CreateCaseStudyMetaPayload = {
  __typename?: 'createCaseStudyMetaPayload';
  caseStudyMeta?: Maybe<CaseStudyMeta>;
};

export type UpdateCaseStudyMetaInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCaseStudyMetaInput>;
};

export type UpdateCaseStudyMetaPayload = {
  __typename?: 'updateCaseStudyMetaPayload';
  caseStudyMeta?: Maybe<CaseStudyMeta>;
};

export type DeleteCaseStudyMetaInput = {
  where?: Maybe<InputId>;
};

export type DeleteCaseStudyMetaPayload = {
  __typename?: 'deleteCaseStudyMetaPayload';
  caseStudyMeta?: Maybe<CaseStudyMeta>;
};

export type CaseStudy = {
  __typename?: 'CaseStudy';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
<<<<<<< HEAD
  image?: Maybe<UploadFile>;
  title: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  slug: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
=======
  language?: Maybe<Scalars['String']>;
  image?: Maybe<UploadFile>;
  title?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
>>>>>>> feat(update) types
  published_at?: Maybe<Scalars['DateTime']>;
  localizations?: Maybe<Array<Maybe<CaseStudy>>>;
};


export type CaseStudyLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CaseStudyConnection = {
  __typename?: 'CaseStudyConnection';
  values?: Maybe<Array<Maybe<CaseStudy>>>;
  groupBy?: Maybe<CaseStudyGroupBy>;
  aggregate?: Maybe<CaseStudyAggregator>;
};

export type CaseStudyAggregator = {
  __typename?: 'CaseStudyAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<CaseStudyAggregatorSum>;
  avg?: Maybe<CaseStudyAggregatorAvg>;
  min?: Maybe<CaseStudyAggregatorMin>;
  max?: Maybe<CaseStudyAggregatorMax>;
};

export type CaseStudyAggregatorSum = {
  __typename?: 'CaseStudyAggregatorSum';
  height?: Maybe<Scalars['Float']>;
};

export type CaseStudyAggregatorAvg = {
  __typename?: 'CaseStudyAggregatorAvg';
  height?: Maybe<Scalars['Float']>;
};

export type CaseStudyAggregatorMin = {
  __typename?: 'CaseStudyAggregatorMin';
  height?: Maybe<Scalars['Float']>;
};

export type CaseStudyAggregatorMax = {
  __typename?: 'CaseStudyAggregatorMax';
  height?: Maybe<Scalars['Float']>;
};

export type CaseStudyGroupBy = {
  __typename?: 'CaseStudyGroupBy';
  id?: Maybe<Array<Maybe<CaseStudyConnectionId>>>;
  created_at?: Maybe<Array<Maybe<CaseStudyConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<CaseStudyConnectionUpdated_At>>>;
<<<<<<< HEAD
  image?: Maybe<Array<Maybe<CaseStudyConnectionImage>>>;
  title?: Maybe<Array<Maybe<CaseStudyConnectionTitle>>>;
  height?: Maybe<Array<Maybe<CaseStudyConnectionHeight>>>;
  slug?: Maybe<Array<Maybe<CaseStudyConnectionSlug>>>;
  locale?: Maybe<Array<Maybe<CaseStudyConnectionLocale>>>;
=======
  language?: Maybe<Array<Maybe<CaseStudyConnectionLanguage>>>;
  image?: Maybe<Array<Maybe<CaseStudyConnectionImage>>>;
  title?: Maybe<Array<Maybe<CaseStudyConnectionTitle>>>;
  height?: Maybe<Array<Maybe<CaseStudyConnectionHeight>>>;
>>>>>>> feat(update) types
  published_at?: Maybe<Array<Maybe<CaseStudyConnectionPublished_At>>>;
};

export type CaseStudyConnectionId = {
  __typename?: 'CaseStudyConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CaseStudyConnection>;
};

export type CaseStudyConnectionCreated_At = {
  __typename?: 'CaseStudyConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CaseStudyConnection>;
};

export type CaseStudyConnectionUpdated_At = {
  __typename?: 'CaseStudyConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CaseStudyConnection>;
};

<<<<<<< HEAD
export type CaseStudyConnectionImage = {
  __typename?: 'CaseStudyConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CaseStudyConnection>;
};

export type CaseStudyConnectionTitle = {
  __typename?: 'CaseStudyConnectionTitle';
=======
export type CaseStudyConnectionLanguage = {
  __typename?: 'CaseStudyConnectionLanguage';
>>>>>>> feat(update) types
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CaseStudyConnection>;
};

<<<<<<< HEAD
export type CaseStudyConnectionHeight = {
  __typename?: 'CaseStudyConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<CaseStudyConnection>;
};

export type CaseStudyConnectionSlug = {
  __typename?: 'CaseStudyConnectionSlug';
=======
export type CaseStudyConnectionImage = {
  __typename?: 'CaseStudyConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CaseStudyConnection>;
};

export type CaseStudyConnectionTitle = {
  __typename?: 'CaseStudyConnectionTitle';
>>>>>>> feat(update) types
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CaseStudyConnection>;
};

<<<<<<< HEAD
export type CaseStudyConnectionLocale = {
  __typename?: 'CaseStudyConnectionLocale';
  key?: Maybe<Scalars['String']>;
=======
export type CaseStudyConnectionHeight = {
  __typename?: 'CaseStudyConnectionHeight';
  key?: Maybe<Scalars['Int']>;
>>>>>>> feat(update) types
  connection?: Maybe<CaseStudyConnection>;
};

export type CaseStudyConnectionPublished_At = {
  __typename?: 'CaseStudyConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CaseStudyConnection>;
};

export type CaseStudyInput = {
<<<<<<< HEAD
  image?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  slug: Scalars['String'];
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
=======
  language?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
>>>>>>> feat(update) types
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditCaseStudyInput = {
<<<<<<< HEAD
  image?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
=======
  language?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
>>>>>>> feat(update) types
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateCaseStudyInput = {
  data?: Maybe<CaseStudyInput>;
};

export type CreateCaseStudyPayload = {
  __typename?: 'createCaseStudyPayload';
  caseStudy?: Maybe<CaseStudy>;
};

export type UpdateCaseStudyInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCaseStudyInput>;
};

export type UpdateCaseStudyPayload = {
  __typename?: 'updateCaseStudyPayload';
  caseStudy?: Maybe<CaseStudy>;
};

export type DeleteCaseStudyInput = {
  where?: Maybe<InputId>;
};

export type DeleteCaseStudyPayload = {
  __typename?: 'deleteCaseStudyPayload';
  caseStudy?: Maybe<CaseStudy>;
};

export type Contact = {
  __typename?: 'Contact';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  language?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  taxIdentificationNumbers?: Maybe<Scalars['String']>;
  taxIdentificationDescription?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  FormName?: Maybe<Scalars['String']>;
  FormText?: Maybe<Scalars['String']>;
  FormEmail?: Maybe<Scalars['String']>;
  formNameWarning?: Maybe<Scalars['String']>;
  formEmailWarning?: Maybe<Scalars['String']>;
  formSubmit?: Maybe<Scalars['String']>;
  formInvalidEmailWarning?: Maybe<Scalars['String']>;
  formTextLabel?: Maybe<Scalars['String']>;
  formNameLabel?: Maybe<Scalars['String']>;
  formEmailLabel?: Maybe<Scalars['String']>;
  footerImg?: Maybe<UploadFile>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type ContactConnection = {
  __typename?: 'ContactConnection';
  values?: Maybe<Array<Maybe<Contact>>>;
  groupBy?: Maybe<ContactGroupBy>;
  aggregate?: Maybe<ContactAggregator>;
};

export type ContactAggregator = {
  __typename?: 'ContactAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ContactGroupBy = {
  __typename?: 'ContactGroupBy';
  id?: Maybe<Array<Maybe<ContactConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ContactConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ContactConnectionUpdated_At>>>;
  language?: Maybe<Array<Maybe<ContactConnectionLanguage>>>;
  title?: Maybe<Array<Maybe<ContactConnectionTitle>>>;
  address?: Maybe<Array<Maybe<ContactConnectionAddress>>>;
  taxIdentificationNumbers?: Maybe<Array<Maybe<ContactConnectionTaxIdentificationNumbers>>>;
  taxIdentificationDescription?: Maybe<Array<Maybe<ContactConnectionTaxIdentificationDescription>>>;
  email?: Maybe<Array<Maybe<ContactConnectionEmail>>>;
  phoneNumber?: Maybe<Array<Maybe<ContactConnectionPhoneNumber>>>;
  FormName?: Maybe<Array<Maybe<ContactConnectionFormName>>>;
  FormText?: Maybe<Array<Maybe<ContactConnectionFormText>>>;
  FormEmail?: Maybe<Array<Maybe<ContactConnectionFormEmail>>>;
  formNameWarning?: Maybe<Array<Maybe<ContactConnectionFormNameWarning>>>;
  formEmailWarning?: Maybe<Array<Maybe<ContactConnectionFormEmailWarning>>>;
  formSubmit?: Maybe<Array<Maybe<ContactConnectionFormSubmit>>>;
  formInvalidEmailWarning?: Maybe<Array<Maybe<ContactConnectionFormInvalidEmailWarning>>>;
  formTextLabel?: Maybe<Array<Maybe<ContactConnectionFormTextLabel>>>;
  formNameLabel?: Maybe<Array<Maybe<ContactConnectionFormNameLabel>>>;
  formEmailLabel?: Maybe<Array<Maybe<ContactConnectionFormEmailLabel>>>;
  footerImg?: Maybe<Array<Maybe<ContactConnectionFooterImg>>>;
  published_at?: Maybe<Array<Maybe<ContactConnectionPublished_At>>>;
};

export type ContactConnectionId = {
  __typename?: 'ContactConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ContactConnection>;
};

export type ContactConnectionCreated_At = {
  __typename?: 'ContactConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ContactConnection>;
};

export type ContactConnectionUpdated_At = {
  __typename?: 'ContactConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ContactConnection>;
};

export type ContactConnectionLanguage = {
  __typename?: 'ContactConnectionLanguage';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ContactConnection>;
};

export type ContactConnectionTitle = {
  __typename?: 'ContactConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ContactConnection>;
};

export type ContactConnectionAddress = {
  __typename?: 'ContactConnectionAddress';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ContactConnection>;
};

export type ContactConnectionTaxIdentificationNumbers = {
  __typename?: 'ContactConnectionTaxIdentificationNumbers';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ContactConnection>;
};

export type ContactConnectionTaxIdentificationDescription = {
  __typename?: 'ContactConnectionTaxIdentificationDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ContactConnection>;
};

export type ContactConnectionEmail = {
  __typename?: 'ContactConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ContactConnection>;
};

export type ContactConnectionPhoneNumber = {
  __typename?: 'ContactConnectionPhoneNumber';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ContactConnection>;
};

export type ContactConnectionFormName = {
  __typename?: 'ContactConnectionFormName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ContactConnection>;
};

export type ContactConnectionFormText = {
  __typename?: 'ContactConnectionFormText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ContactConnection>;
};

export type ContactConnectionFormEmail = {
  __typename?: 'ContactConnectionFormEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ContactConnection>;
};

export type ContactConnectionFormNameWarning = {
  __typename?: 'ContactConnectionFormNameWarning';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ContactConnection>;
};

export type ContactConnectionFormEmailWarning = {
  __typename?: 'ContactConnectionFormEmailWarning';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ContactConnection>;
};

export type ContactConnectionFormSubmit = {
  __typename?: 'ContactConnectionFormSubmit';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ContactConnection>;
};

export type ContactConnectionFormInvalidEmailWarning = {
  __typename?: 'ContactConnectionFormInvalidEmailWarning';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ContactConnection>;
};

export type ContactConnectionFormTextLabel = {
  __typename?: 'ContactConnectionFormTextLabel';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ContactConnection>;
};

export type ContactConnectionFormNameLabel = {
  __typename?: 'ContactConnectionFormNameLabel';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ContactConnection>;
};

export type ContactConnectionFormEmailLabel = {
  __typename?: 'ContactConnectionFormEmailLabel';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ContactConnection>;
};

export type ContactConnectionFooterImg = {
  __typename?: 'ContactConnectionFooterImg';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ContactConnection>;
};

export type ContactConnectionPublished_At = {
  __typename?: 'ContactConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ContactConnection>;
};

export type ContactInput = {
  language?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  taxIdentificationNumbers?: Maybe<Scalars['String']>;
  taxIdentificationDescription?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  FormName?: Maybe<Scalars['String']>;
  FormText?: Maybe<Scalars['String']>;
  FormEmail?: Maybe<Scalars['String']>;
  formNameWarning?: Maybe<Scalars['String']>;
  formEmailWarning?: Maybe<Scalars['String']>;
  formSubmit?: Maybe<Scalars['String']>;
  formInvalidEmailWarning?: Maybe<Scalars['String']>;
  formTextLabel?: Maybe<Scalars['String']>;
  formNameLabel?: Maybe<Scalars['String']>;
  formEmailLabel?: Maybe<Scalars['String']>;
  footerImg?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditContactInput = {
  language?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  taxIdentificationNumbers?: Maybe<Scalars['String']>;
  taxIdentificationDescription?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  FormName?: Maybe<Scalars['String']>;
  FormText?: Maybe<Scalars['String']>;
  FormEmail?: Maybe<Scalars['String']>;
  formNameWarning?: Maybe<Scalars['String']>;
  formEmailWarning?: Maybe<Scalars['String']>;
  formSubmit?: Maybe<Scalars['String']>;
  formInvalidEmailWarning?: Maybe<Scalars['String']>;
  formTextLabel?: Maybe<Scalars['String']>;
  formNameLabel?: Maybe<Scalars['String']>;
  formEmailLabel?: Maybe<Scalars['String']>;
  footerImg?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateContactInput = {
  data?: Maybe<ContactInput>;
};

export type CreateContactPayload = {
  __typename?: 'createContactPayload';
  contact?: Maybe<Contact>;
};

export type UpdateContactInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditContactInput>;
};

export type UpdateContactPayload = {
  __typename?: 'updateContactPayload';
  contact?: Maybe<Contact>;
};

export type DeleteContactInput = {
  where?: Maybe<InputId>;
};

export type DeleteContactPayload = {
  __typename?: 'deleteContactPayload';
  contact?: Maybe<Contact>;
};

export type Footer = {
  __typename?: 'Footer';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  social?: Maybe<ComponentContentSocial>;
  contact?: Maybe<ComponentContentContact>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  localizations?: Maybe<Array<Maybe<Footer>>>;
};


export type FooterLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type FooterInput = {
  title: Scalars['String'];
  social: ComponentContentSocialInput;
  contact: ComponentContentContactInput;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFooterInput = {
  title?: Maybe<Scalars['String']>;
  social?: Maybe<EditComponentContentSocialInput>;
  contact?: Maybe<EditComponentContentContactInput>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateFooterInput = {
  data?: Maybe<EditFooterInput>;
};

export type UpdateFooterPayload = {
  __typename?: 'updateFooterPayload';
  footer?: Maybe<Footer>;
};

export type DeleteFooterPayload = {
  __typename?: 'deleteFooterPayload';
  footer?: Maybe<Footer>;
};

export type Header = {
  __typename?: 'Header';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  logo?: Maybe<UploadFile>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type HeaderConnection = {
  __typename?: 'HeaderConnection';
  values?: Maybe<Array<Maybe<Header>>>;
  groupBy?: Maybe<HeaderGroupBy>;
  aggregate?: Maybe<HeaderAggregator>;
};

export type HeaderAggregator = {
  __typename?: 'HeaderAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type HeaderGroupBy = {
  __typename?: 'HeaderGroupBy';
  id?: Maybe<Array<Maybe<HeaderConnectionId>>>;
  created_at?: Maybe<Array<Maybe<HeaderConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<HeaderConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<HeaderConnectionTitle>>>;
  description?: Maybe<Array<Maybe<HeaderConnectionDescription>>>;
  language?: Maybe<Array<Maybe<HeaderConnectionLanguage>>>;
  logo?: Maybe<Array<Maybe<HeaderConnectionLogo>>>;
  published_at?: Maybe<Array<Maybe<HeaderConnectionPublished_At>>>;
};

export type HeaderConnectionId = {
  __typename?: 'HeaderConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<HeaderConnection>;
};

export type HeaderConnectionCreated_At = {
  __typename?: 'HeaderConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<HeaderConnection>;
};

export type HeaderConnectionUpdated_At = {
  __typename?: 'HeaderConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<HeaderConnection>;
};

export type HeaderConnectionTitle = {
  __typename?: 'HeaderConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<HeaderConnection>;
};

export type HeaderConnectionDescription = {
  __typename?: 'HeaderConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<HeaderConnection>;
};

export type HeaderConnectionLanguage = {
  __typename?: 'HeaderConnectionLanguage';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<HeaderConnection>;
};

export type HeaderConnectionLogo = {
  __typename?: 'HeaderConnectionLogo';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<HeaderConnection>;
};

export type HeaderConnectionPublished_At = {
  __typename?: 'HeaderConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<HeaderConnection>;
};

export type HeaderInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditHeaderInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateHeaderInput = {
  data?: Maybe<HeaderInput>;
};

export type CreateHeaderPayload = {
  __typename?: 'createHeaderPayload';
  header?: Maybe<Header>;
};

export type UpdateHeaderInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditHeaderInput>;
};

export type UpdateHeaderPayload = {
  __typename?: 'updateHeaderPayload';
  header?: Maybe<Header>;
};

export type DeleteHeaderInput = {
  where?: Maybe<InputId>;
};

export type DeleteHeaderPayload = {
  __typename?: 'deleteHeaderPayload';
  header?: Maybe<Header>;
};

export type HomepageNew = {
  __typename?: 'HomepageNew';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  topLeftLink?: Maybe<ComponentNavigationInternalLink>;
  topRightLink?: Maybe<ComponentNavigationInternalLink>;
  bottomLeftLink?: Maybe<ComponentNavigationInternalLink>;
  bottomRightLink?: Maybe<ComponentNavigationInternalLink>;
  logo?: Maybe<UploadFile>;
  clickToStopText: Scalars['String'];
  aboveLineText: Scalars['String'];
  belowLineText: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  localizations?: Maybe<Array<Maybe<HomepageNew>>>;
};


export type HomepageNewLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type HomepageNewInput = {
  topLeftLink: ComponentNavigationInternalLinkInput;
  topRightLink: ComponentNavigationInternalLinkInput;
  bottomLeftLink: ComponentNavigationInternalLinkInput;
  bottomRightLink: ComponentNavigationInternalLinkInput;
  logo?: Maybe<Scalars['ID']>;
  clickToStopText: Scalars['String'];
  aboveLineText: Scalars['String'];
  belowLineText: Scalars['String'];
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditHomepageNewInput = {
  topLeftLink?: Maybe<EditComponentNavigationInternalLinkInput>;
  topRightLink?: Maybe<EditComponentNavigationInternalLinkInput>;
  bottomLeftLink?: Maybe<EditComponentNavigationInternalLinkInput>;
  bottomRightLink?: Maybe<EditComponentNavigationInternalLinkInput>;
  logo?: Maybe<Scalars['ID']>;
  clickToStopText?: Maybe<Scalars['String']>;
  aboveLineText?: Maybe<Scalars['String']>;
  belowLineText?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateHomepageNewInput = {
  data?: Maybe<EditHomepageNewInput>;
};

export type UpdateHomepageNewPayload = {
  __typename?: 'updateHomepageNewPayload';
  homepageNew?: Maybe<HomepageNew>;
};

export type DeleteHomepageNewPayload = {
  __typename?: 'deleteHomepageNewPayload';
  homepageNew?: Maybe<HomepageNew>;
};

export type Homepage = {
  __typename?: 'Homepage';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  language: Scalars['String'];
  clickToStop: Scalars['String'];
  descriptionAboveLine: Scalars['String'];
  descriptionBellowLine: Scalars['String'];
  logo?: Maybe<UploadFile>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type HomepageConnection = {
  __typename?: 'HomepageConnection';
  values?: Maybe<Array<Maybe<Homepage>>>;
  groupBy?: Maybe<HomepageGroupBy>;
  aggregate?: Maybe<HomepageAggregator>;
};

export type HomepageAggregator = {
  __typename?: 'HomepageAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type HomepageGroupBy = {
  __typename?: 'HomepageGroupBy';
  id?: Maybe<Array<Maybe<HomepageConnectionId>>>;
  created_at?: Maybe<Array<Maybe<HomepageConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<HomepageConnectionUpdated_At>>>;
  language?: Maybe<Array<Maybe<HomepageConnectionLanguage>>>;
  clickToStop?: Maybe<Array<Maybe<HomepageConnectionClickToStop>>>;
  descriptionAboveLine?: Maybe<Array<Maybe<HomepageConnectionDescriptionAboveLine>>>;
  descriptionBellowLine?: Maybe<Array<Maybe<HomepageConnectionDescriptionBellowLine>>>;
  logo?: Maybe<Array<Maybe<HomepageConnectionLogo>>>;
  published_at?: Maybe<Array<Maybe<HomepageConnectionPublished_At>>>;
};

export type HomepageConnectionId = {
  __typename?: 'HomepageConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<HomepageConnection>;
};

export type HomepageConnectionCreated_At = {
  __typename?: 'HomepageConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<HomepageConnection>;
};

export type HomepageConnectionUpdated_At = {
  __typename?: 'HomepageConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<HomepageConnection>;
};

export type HomepageConnectionLanguage = {
  __typename?: 'HomepageConnectionLanguage';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<HomepageConnection>;
};

export type HomepageConnectionClickToStop = {
  __typename?: 'HomepageConnectionClickToStop';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<HomepageConnection>;
};

export type HomepageConnectionDescriptionAboveLine = {
  __typename?: 'HomepageConnectionDescriptionAboveLine';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<HomepageConnection>;
};

export type HomepageConnectionDescriptionBellowLine = {
  __typename?: 'HomepageConnectionDescriptionBellowLine';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<HomepageConnection>;
};

export type HomepageConnectionLogo = {
  __typename?: 'HomepageConnectionLogo';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<HomepageConnection>;
};

export type HomepageConnectionPublished_At = {
  __typename?: 'HomepageConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<HomepageConnection>;
};

export type HomepageInput = {
  language: Scalars['String'];
  clickToStop: Scalars['String'];
  descriptionAboveLine: Scalars['String'];
  descriptionBellowLine: Scalars['String'];
  logo?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditHomepageInput = {
  language?: Maybe<Scalars['String']>;
  clickToStop?: Maybe<Scalars['String']>;
  descriptionAboveLine?: Maybe<Scalars['String']>;
  descriptionBellowLine?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateHomepageInput = {
  data?: Maybe<HomepageInput>;
};

export type CreateHomepagePayload = {
  __typename?: 'createHomepagePayload';
  homepage?: Maybe<Homepage>;
};

export type UpdateHomepageInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditHomepageInput>;
};

export type UpdateHomepagePayload = {
  __typename?: 'updateHomepagePayload';
  homepage?: Maybe<Homepage>;
};

export type DeleteHomepageInput = {
  where?: Maybe<InputId>;
};

export type DeleteHomepagePayload = {
  __typename?: 'deleteHomepagePayload';
  homepage?: Maybe<Homepage>;
};

export type HqGallery = {
  __typename?: 'HqGallery';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  galleryCollection?: Maybe<Array<Maybe<ComponentContentGalleryImage>>>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type HqGalleryConnection = {
  __typename?: 'HqGalleryConnection';
  values?: Maybe<Array<Maybe<HqGallery>>>;
  groupBy?: Maybe<HqGalleryGroupBy>;
  aggregate?: Maybe<HqGalleryAggregator>;
};

export type HqGalleryAggregator = {
  __typename?: 'HqGalleryAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type HqGalleryGroupBy = {
  __typename?: 'HqGalleryGroupBy';
  id?: Maybe<Array<Maybe<HqGalleryConnectionId>>>;
  created_at?: Maybe<Array<Maybe<HqGalleryConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<HqGalleryConnectionUpdated_At>>>;
  published_at?: Maybe<Array<Maybe<HqGalleryConnectionPublished_At>>>;
};

export type HqGalleryConnectionId = {
  __typename?: 'HqGalleryConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<HqGalleryConnection>;
};

export type HqGalleryConnectionCreated_At = {
  __typename?: 'HqGalleryConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<HqGalleryConnection>;
};

export type HqGalleryConnectionUpdated_At = {
  __typename?: 'HqGalleryConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<HqGalleryConnection>;
};

export type HqGalleryConnectionPublished_At = {
  __typename?: 'HqGalleryConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<HqGalleryConnection>;
};

export type HqGalleryInput = {
  galleryCollection?: Maybe<Array<Maybe<ComponentContentGalleryImageInput>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditHqGalleryInput = {
  galleryCollection?: Maybe<Array<Maybe<EditComponentContentGalleryImageInput>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateHqGalleryInput = {
  data?: Maybe<HqGalleryInput>;
};

export type CreateHqGalleryPayload = {
  __typename?: 'createHqGalleryPayload';
  hqGallery?: Maybe<HqGallery>;
};

export type UpdateHqGalleryInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditHqGalleryInput>;
};

export type UpdateHqGalleryPayload = {
  __typename?: 'updateHqGalleryPayload';
  hqGallery?: Maybe<HqGallery>;
};

export type DeleteHqGalleryInput = {
  where?: Maybe<InputId>;
};

export type DeleteHqGalleryPayload = {
  __typename?: 'deleteHqGalleryPayload';
  hqGallery?: Maybe<HqGallery>;
};

export type Job = {
  __typename?: 'Job';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  careerTechnologiesTitle: Scalars['String'];
  careerTechnologiesContent: Scalars['String'];
  careerExpectedSkills: Scalars['String'];
  careerExpectedSkillsContent: Scalars['String'];
  careerOfferTitle: Scalars['String'];
  careerOfferContent?: Maybe<Scalars['String']>;
  endTitle: Scalars['String'];
  endContent?: Maybe<Scalars['String']>;
  endCTA: Scalars['String'];
  language?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type JobConnection = {
  __typename?: 'JobConnection';
  values?: Maybe<Array<Maybe<Job>>>;
  groupBy?: Maybe<JobGroupBy>;
  aggregate?: Maybe<JobAggregator>;
};

export type JobAggregator = {
  __typename?: 'JobAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type JobGroupBy = {
  __typename?: 'JobGroupBy';
  id?: Maybe<Array<Maybe<JobConnectionId>>>;
  created_at?: Maybe<Array<Maybe<JobConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<JobConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<JobConnectionTitle>>>;
  description?: Maybe<Array<Maybe<JobConnectionDescription>>>;
  careerTechnologiesTitle?: Maybe<Array<Maybe<JobConnectionCareerTechnologiesTitle>>>;
  careerTechnologiesContent?: Maybe<Array<Maybe<JobConnectionCareerTechnologiesContent>>>;
  careerExpectedSkills?: Maybe<Array<Maybe<JobConnectionCareerExpectedSkills>>>;
  careerExpectedSkillsContent?: Maybe<Array<Maybe<JobConnectionCareerExpectedSkillsContent>>>;
  careerOfferTitle?: Maybe<Array<Maybe<JobConnectionCareerOfferTitle>>>;
  careerOfferContent?: Maybe<Array<Maybe<JobConnectionCareerOfferContent>>>;
  endTitle?: Maybe<Array<Maybe<JobConnectionEndTitle>>>;
  endContent?: Maybe<Array<Maybe<JobConnectionEndContent>>>;
  endCTA?: Maybe<Array<Maybe<JobConnectionEndCta>>>;
  language?: Maybe<Array<Maybe<JobConnectionLanguage>>>;
  slug?: Maybe<Array<Maybe<JobConnectionSlug>>>;
  published_at?: Maybe<Array<Maybe<JobConnectionPublished_At>>>;
};

export type JobConnectionId = {
  __typename?: 'JobConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<JobConnection>;
};

export type JobConnectionCreated_At = {
  __typename?: 'JobConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<JobConnection>;
};

export type JobConnectionUpdated_At = {
  __typename?: 'JobConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<JobConnection>;
};

export type JobConnectionTitle = {
  __typename?: 'JobConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<JobConnection>;
};

export type JobConnectionDescription = {
  __typename?: 'JobConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<JobConnection>;
};

export type JobConnectionCareerTechnologiesTitle = {
  __typename?: 'JobConnectionCareerTechnologiesTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<JobConnection>;
};

export type JobConnectionCareerTechnologiesContent = {
  __typename?: 'JobConnectionCareerTechnologiesContent';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<JobConnection>;
};

export type JobConnectionCareerExpectedSkills = {
  __typename?: 'JobConnectionCareerExpectedSkills';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<JobConnection>;
};

export type JobConnectionCareerExpectedSkillsContent = {
  __typename?: 'JobConnectionCareerExpectedSkillsContent';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<JobConnection>;
};

export type JobConnectionCareerOfferTitle = {
  __typename?: 'JobConnectionCareerOfferTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<JobConnection>;
};

export type JobConnectionCareerOfferContent = {
  __typename?: 'JobConnectionCareerOfferContent';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<JobConnection>;
};

export type JobConnectionEndTitle = {
  __typename?: 'JobConnectionEndTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<JobConnection>;
};

export type JobConnectionEndContent = {
  __typename?: 'JobConnectionEndContent';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<JobConnection>;
};

export type JobConnectionEndCta = {
  __typename?: 'JobConnectionEndCTA';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<JobConnection>;
};

export type JobConnectionLanguage = {
  __typename?: 'JobConnectionLanguage';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<JobConnection>;
};

export type JobConnectionSlug = {
  __typename?: 'JobConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<JobConnection>;
};

export type JobConnectionPublished_At = {
  __typename?: 'JobConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<JobConnection>;
};

export type JobInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  careerTechnologiesTitle?: Maybe<Scalars['String']>;
  careerTechnologiesContent: Scalars['String'];
  careerExpectedSkills?: Maybe<Scalars['String']>;
  careerExpectedSkillsContent: Scalars['String'];
  careerOfferTitle?: Maybe<Scalars['String']>;
  careerOfferContent?: Maybe<Scalars['String']>;
  endTitle?: Maybe<Scalars['String']>;
  endContent?: Maybe<Scalars['String']>;
  endCTA?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditJobInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  careerTechnologiesTitle?: Maybe<Scalars['String']>;
  careerTechnologiesContent?: Maybe<Scalars['String']>;
  careerExpectedSkills?: Maybe<Scalars['String']>;
  careerExpectedSkillsContent?: Maybe<Scalars['String']>;
  careerOfferTitle?: Maybe<Scalars['String']>;
  careerOfferContent?: Maybe<Scalars['String']>;
  endTitle?: Maybe<Scalars['String']>;
  endContent?: Maybe<Scalars['String']>;
  endCTA?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateJobInput = {
  data?: Maybe<JobInput>;
};

export type CreateJobPayload = {
  __typename?: 'createJobPayload';
  job?: Maybe<Job>;
};

export type UpdateJobInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditJobInput>;
};

export type UpdateJobPayload = {
  __typename?: 'updateJobPayload';
  job?: Maybe<Job>;
};

export type DeleteJobInput = {
  where?: Maybe<InputId>;
};

export type DeleteJobPayload = {
  __typename?: 'deleteJobPayload';
  job?: Maybe<Job>;
};

export type Language = {
  __typename?: 'Language';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  languageCode?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type LanguageConnection = {
  __typename?: 'LanguageConnection';
  values?: Maybe<Array<Maybe<Language>>>;
  groupBy?: Maybe<LanguageGroupBy>;
  aggregate?: Maybe<LanguageAggregator>;
};

export type LanguageAggregator = {
  __typename?: 'LanguageAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type LanguageGroupBy = {
  __typename?: 'LanguageGroupBy';
  id?: Maybe<Array<Maybe<LanguageConnectionId>>>;
  created_at?: Maybe<Array<Maybe<LanguageConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<LanguageConnectionUpdated_At>>>;
  languageCode?: Maybe<Array<Maybe<LanguageConnectionLanguageCode>>>;
  displayName?: Maybe<Array<Maybe<LanguageConnectionDisplayName>>>;
  published_at?: Maybe<Array<Maybe<LanguageConnectionPublished_At>>>;
};

export type LanguageConnectionId = {
  __typename?: 'LanguageConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<LanguageConnection>;
};

export type LanguageConnectionCreated_At = {
  __typename?: 'LanguageConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<LanguageConnection>;
};

export type LanguageConnectionUpdated_At = {
  __typename?: 'LanguageConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<LanguageConnection>;
};

export type LanguageConnectionLanguageCode = {
  __typename?: 'LanguageConnectionLanguageCode';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<LanguageConnection>;
};

export type LanguageConnectionDisplayName = {
  __typename?: 'LanguageConnectionDisplayName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<LanguageConnection>;
};

export type LanguageConnectionPublished_At = {
  __typename?: 'LanguageConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<LanguageConnection>;
};

export type LanguageInput = {
  languageCode?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditLanguageInput = {
  languageCode?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateLanguageInput = {
  data?: Maybe<LanguageInput>;
};

export type CreateLanguagePayload = {
  __typename?: 'createLanguagePayload';
  language?: Maybe<Language>;
};

export type UpdateLanguageInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditLanguageInput>;
};

export type UpdateLanguagePayload = {
  __typename?: 'updateLanguagePayload';
  language?: Maybe<Language>;
};

export type DeleteLanguageInput = {
  where?: Maybe<InputId>;
};

export type DeleteLanguagePayload = {
  __typename?: 'deleteLanguagePayload';
  language?: Maybe<Language>;
};

export type Menu = {
  __typename?: 'Menu';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  menu?: Maybe<Scalars['String']>;
  homePage?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  aboutUs?: Maybe<Scalars['String']>;
  career?: Maybe<Scalars['String']>;
  contact?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type MenuConnection = {
  __typename?: 'MenuConnection';
  values?: Maybe<Array<Maybe<Menu>>>;
  groupBy?: Maybe<MenuGroupBy>;
  aggregate?: Maybe<MenuAggregator>;
};

export type MenuAggregator = {
  __typename?: 'MenuAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type MenuGroupBy = {
  __typename?: 'MenuGroupBy';
  id?: Maybe<Array<Maybe<MenuConnectionId>>>;
  created_at?: Maybe<Array<Maybe<MenuConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<MenuConnectionUpdated_At>>>;
  menu?: Maybe<Array<Maybe<MenuConnectionMenu>>>;
  homePage?: Maybe<Array<Maybe<MenuConnectionHomePage>>>;
  reference?: Maybe<Array<Maybe<MenuConnectionReference>>>;
  aboutUs?: Maybe<Array<Maybe<MenuConnectionAboutUs>>>;
  career?: Maybe<Array<Maybe<MenuConnectionCareer>>>;
  contact?: Maybe<Array<Maybe<MenuConnectionContact>>>;
  language?: Maybe<Array<Maybe<MenuConnectionLanguage>>>;
  published_at?: Maybe<Array<Maybe<MenuConnectionPublished_At>>>;
};

export type MenuConnectionId = {
  __typename?: 'MenuConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MenuConnection>;
};

export type MenuConnectionCreated_At = {
  __typename?: 'MenuConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MenuConnection>;
};

export type MenuConnectionUpdated_At = {
  __typename?: 'MenuConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MenuConnection>;
};

export type MenuConnectionMenu = {
  __typename?: 'MenuConnectionMenu';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MenuConnection>;
};

export type MenuConnectionHomePage = {
  __typename?: 'MenuConnectionHomePage';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MenuConnection>;
};

export type MenuConnectionReference = {
  __typename?: 'MenuConnectionReference';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MenuConnection>;
};

export type MenuConnectionAboutUs = {
  __typename?: 'MenuConnectionAboutUs';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MenuConnection>;
};

export type MenuConnectionCareer = {
  __typename?: 'MenuConnectionCareer';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MenuConnection>;
};

export type MenuConnectionContact = {
  __typename?: 'MenuConnectionContact';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MenuConnection>;
};

export type MenuConnectionLanguage = {
  __typename?: 'MenuConnectionLanguage';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MenuConnection>;
};

export type MenuConnectionPublished_At = {
  __typename?: 'MenuConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MenuConnection>;
};

export type MenuInput = {
  menu?: Maybe<Scalars['String']>;
  homePage?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  aboutUs?: Maybe<Scalars['String']>;
  career?: Maybe<Scalars['String']>;
  contact?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditMenuInput = {
  menu?: Maybe<Scalars['String']>;
  homePage?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  aboutUs?: Maybe<Scalars['String']>;
  career?: Maybe<Scalars['String']>;
  contact?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateMenuInput = {
  data?: Maybe<MenuInput>;
};

export type CreateMenuPayload = {
  __typename?: 'createMenuPayload';
  menu?: Maybe<Menu>;
};

export type UpdateMenuInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditMenuInput>;
};

export type UpdateMenuPayload = {
  __typename?: 'updateMenuPayload';
  menu?: Maybe<Menu>;
};

export type DeleteMenuInput = {
  where?: Maybe<InputId>;
};

export type DeleteMenuPayload = {
  __typename?: 'deleteMenuPayload';
  menu?: Maybe<Menu>;
};

export type Page404 = {
  __typename?: 'Page404';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  image?: Maybe<UploadFile>;
  heading?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  bgText?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type Page404Connection = {
  __typename?: 'Page404Connection';
  values?: Maybe<Array<Maybe<Page404>>>;
  groupBy?: Maybe<Page404GroupBy>;
  aggregate?: Maybe<Page404Aggregator>;
};

export type Page404Aggregator = {
  __typename?: 'Page404Aggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Page404GroupBy = {
  __typename?: 'Page404GroupBy';
  id?: Maybe<Array<Maybe<Page404ConnectionId>>>;
  created_at?: Maybe<Array<Maybe<Page404ConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<Page404ConnectionUpdated_At>>>;
  image?: Maybe<Array<Maybe<Page404ConnectionImage>>>;
  heading?: Maybe<Array<Maybe<Page404ConnectionHeading>>>;
  description?: Maybe<Array<Maybe<Page404ConnectionDescription>>>;
  link?: Maybe<Array<Maybe<Page404ConnectionLink>>>;
  language?: Maybe<Array<Maybe<Page404ConnectionLanguage>>>;
  bgText?: Maybe<Array<Maybe<Page404ConnectionBgText>>>;
  published_at?: Maybe<Array<Maybe<Page404ConnectionPublished_At>>>;
};

export type Page404ConnectionId = {
  __typename?: 'Page404ConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<Page404Connection>;
};

export type Page404ConnectionCreated_At = {
  __typename?: 'Page404ConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<Page404Connection>;
};

export type Page404ConnectionUpdated_At = {
  __typename?: 'Page404ConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<Page404Connection>;
};

export type Page404ConnectionImage = {
  __typename?: 'Page404ConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<Page404Connection>;
};

export type Page404ConnectionHeading = {
  __typename?: 'Page404ConnectionHeading';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Page404Connection>;
};

export type Page404ConnectionDescription = {
  __typename?: 'Page404ConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Page404Connection>;
};

export type Page404ConnectionLink = {
  __typename?: 'Page404ConnectionLink';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Page404Connection>;
};

export type Page404ConnectionLanguage = {
  __typename?: 'Page404ConnectionLanguage';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Page404Connection>;
};

export type Page404ConnectionBgText = {
  __typename?: 'Page404ConnectionBgText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Page404Connection>;
};

export type Page404ConnectionPublished_At = {
  __typename?: 'Page404ConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<Page404Connection>;
};

export type Page404Input = {
  image?: Maybe<Scalars['ID']>;
  heading?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  bgText?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPage404Input = {
  image?: Maybe<Scalars['ID']>;
  heading?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  bgText?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreatePage404Input = {
  data?: Maybe<Page404Input>;
};

export type CreatePage404Payload = {
  __typename?: 'createPage404Payload';
  page404?: Maybe<Page404>;
};

export type UpdatePage404Input = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPage404Input>;
};

export type UpdatePage404Payload = {
  __typename?: 'updatePage404Payload';
  page404?: Maybe<Page404>;
};

export type DeletePage404Input = {
  where?: Maybe<InputId>;
};

export type DeletePage404Payload = {
  __typename?: 'deletePage404Payload';
  page404?: Maybe<Page404>;
};

export type Products = {
  __typename?: 'Products';
<<<<<<< HEAD
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  slug: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  localizations?: Maybe<Array<Maybe<Products>>>;
};


export type ProductsLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ProductsConnection = {
  __typename?: 'ProductsConnection';
  values?: Maybe<Array<Maybe<Products>>>;
  groupBy?: Maybe<ProductsGroupBy>;
  aggregate?: Maybe<ProductsAggregator>;
};

export type ProductsAggregator = {
  __typename?: 'ProductsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProductsGroupBy = {
  __typename?: 'ProductsGroupBy';
  id?: Maybe<Array<Maybe<ProductsConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ProductsConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ProductsConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<ProductsConnectionName>>>;
  slug?: Maybe<Array<Maybe<ProductsConnectionSlug>>>;
  locale?: Maybe<Array<Maybe<ProductsConnectionLocale>>>;
  published_at?: Maybe<Array<Maybe<ProductsConnectionPublished_At>>>;
};

export type ProductsConnectionId = {
  __typename?: 'ProductsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionCreated_At = {
  __typename?: 'ProductsConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionUpdated_At = {
  __typename?: 'ProductsConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionName = {
  __typename?: 'ProductsConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionSlug = {
  __typename?: 'ProductsConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionLocale = {
  __typename?: 'ProductsConnectionLocale';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionPublished_At = {
  __typename?: 'ProductsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductInput = {
  name: Scalars['String'];
  slug: Scalars['String'];
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditProductInput = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateProductInput = {
  data?: Maybe<ProductInput>;
};

export type CreateProductPayload = {
  __typename?: 'createProductPayload';
  product?: Maybe<Products>;
};

export type UpdateProductInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditProductInput>;
};

export type UpdateProductPayload = {
  __typename?: 'updateProductPayload';
  product?: Maybe<Products>;
};

export type DeleteProductInput = {
  where?: Maybe<InputId>;
};

export type DeleteProductPayload = {
  __typename?: 'deleteProductPayload';
  product?: Maybe<Products>;
};

export type Skill = {
  __typename?: 'Skill';
=======
>>>>>>> rebase(Reference Page)
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  slug: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  localizations?: Maybe<Array<Maybe<Products>>>;
};


export type ProductsLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ProductsConnection = {
  __typename?: 'ProductsConnection';
  values?: Maybe<Array<Maybe<Products>>>;
  groupBy?: Maybe<ProductsGroupBy>;
  aggregate?: Maybe<ProductsAggregator>;
};

export type ProductsAggregator = {
  __typename?: 'ProductsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProductsGroupBy = {
  __typename?: 'ProductsGroupBy';
  id?: Maybe<Array<Maybe<ProductsConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ProductsConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ProductsConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<ProductsConnectionName>>>;
  slug?: Maybe<Array<Maybe<ProductsConnectionSlug>>>;
  locale?: Maybe<Array<Maybe<ProductsConnectionLocale>>>;
  published_at?: Maybe<Array<Maybe<ProductsConnectionPublished_At>>>;
};

export type ProductsConnectionId = {
  __typename?: 'ProductsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionCreated_At = {
  __typename?: 'ProductsConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionUpdated_At = {
  __typename?: 'ProductsConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionName = {
  __typename?: 'ProductsConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionSlug = {
  __typename?: 'ProductsConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionLocale = {
  __typename?: 'ProductsConnectionLocale';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionPublished_At = {
  __typename?: 'ProductsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProductsConnection>;
};

export type ProductInput = {
  name: Scalars['String'];
  slug: Scalars['String'];
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditProductInput = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<Maybe<Scalars['ID']>>>;
  locale?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateProductInput = {
  data?: Maybe<ProductInput>;
};

export type CreateProductPayload = {
  __typename?: 'createProductPayload';
  product?: Maybe<Products>;
};

export type UpdateProductInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditProductInput>;
};

export type UpdateProductPayload = {
  __typename?: 'updateProductPayload';
  product?: Maybe<Products>;
};

export type DeleteProductInput = {
  where?: Maybe<InputId>;
};

export type DeleteProductPayload = {
  __typename?: 'deleteProductPayload';
  product?: Maybe<Products>;
};

export type Skill = {
  __typename?: 'Skill';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  titleColorHash?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type SkillConnection = {
  __typename?: 'SkillConnection';
  values?: Maybe<Array<Maybe<Skill>>>;
  groupBy?: Maybe<SkillGroupBy>;
  aggregate?: Maybe<SkillAggregator>;
};

export type SkillAggregator = {
  __typename?: 'SkillAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SkillGroupBy = {
  __typename?: 'SkillGroupBy';
  id?: Maybe<Array<Maybe<SkillConnectionId>>>;
  created_at?: Maybe<Array<Maybe<SkillConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<SkillConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<SkillConnectionTitle>>>;
  description?: Maybe<Array<Maybe<SkillConnectionDescription>>>;
  titleColorHash?: Maybe<Array<Maybe<SkillConnectionTitleColorHash>>>;
  published_at?: Maybe<Array<Maybe<SkillConnectionPublished_At>>>;
};

export type SkillConnectionId = {
  __typename?: 'SkillConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SkillConnection>;
};

export type SkillConnectionCreated_At = {
  __typename?: 'SkillConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SkillConnection>;
};

export type SkillConnectionUpdated_At = {
  __typename?: 'SkillConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SkillConnection>;
};

export type SkillConnectionTitle = {
  __typename?: 'SkillConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SkillConnection>;
};

export type SkillConnectionDescription = {
  __typename?: 'SkillConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SkillConnection>;
};

export type SkillConnectionTitleColorHash = {
  __typename?: 'SkillConnectionTitleColorHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SkillConnection>;
};

export type SkillConnectionPublished_At = {
  __typename?: 'SkillConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SkillConnection>;
};

export type SkillInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  titleColorHash?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditSkillInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  titleColorHash?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateSkillInput = {
  data?: Maybe<SkillInput>;
};

export type CreateSkillPayload = {
  __typename?: 'createSkillPayload';
  skill?: Maybe<Skill>;
};

export type UpdateSkillInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditSkillInput>;
};

export type UpdateSkillPayload = {
  __typename?: 'updateSkillPayload';
  skill?: Maybe<Skill>;
};

export type DeleteSkillInput = {
  where?: Maybe<InputId>;
};

export type DeleteSkillPayload = {
  __typename?: 'deleteSkillPayload';
  skill?: Maybe<Skill>;
};

export type SocialNetwork = {
  __typename?: 'SocialNetwork';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type SocialNetworkConnection = {
  __typename?: 'SocialNetworkConnection';
  values?: Maybe<Array<Maybe<SocialNetwork>>>;
  groupBy?: Maybe<SocialNetworkGroupBy>;
  aggregate?: Maybe<SocialNetworkAggregator>;
};

export type SocialNetworkAggregator = {
  __typename?: 'SocialNetworkAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SocialNetworkGroupBy = {
  __typename?: 'SocialNetworkGroupBy';
  id?: Maybe<Array<Maybe<SocialNetworkConnectionId>>>;
  created_at?: Maybe<Array<Maybe<SocialNetworkConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<SocialNetworkConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<SocialNetworkConnectionName>>>;
  url?: Maybe<Array<Maybe<SocialNetworkConnectionUrl>>>;
  published_at?: Maybe<Array<Maybe<SocialNetworkConnectionPublished_At>>>;
};

export type SocialNetworkConnectionId = {
  __typename?: 'SocialNetworkConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<SocialNetworkConnection>;
};

export type SocialNetworkConnectionCreated_At = {
  __typename?: 'SocialNetworkConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SocialNetworkConnection>;
};

export type SocialNetworkConnectionUpdated_At = {
  __typename?: 'SocialNetworkConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SocialNetworkConnection>;
};

export type SocialNetworkConnectionName = {
  __typename?: 'SocialNetworkConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SocialNetworkConnection>;
};

export type SocialNetworkConnectionUrl = {
  __typename?: 'SocialNetworkConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<SocialNetworkConnection>;
};

export type SocialNetworkConnectionPublished_At = {
  __typename?: 'SocialNetworkConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<SocialNetworkConnection>;
};

export type SocialNetworkInput = {
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditSocialNetworkInput = {
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateSocialNetworkInput = {
  data?: Maybe<SocialNetworkInput>;
};

export type CreateSocialNetworkPayload = {
  __typename?: 'createSocialNetworkPayload';
  socialNetwork?: Maybe<SocialNetwork>;
};

export type UpdateSocialNetworkInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditSocialNetworkInput>;
};

export type UpdateSocialNetworkPayload = {
  __typename?: 'updateSocialNetworkPayload';
  socialNetwork?: Maybe<SocialNetwork>;
};

export type DeleteSocialNetworkInput = {
  where?: Maybe<InputId>;
};

export type DeleteSocialNetworkPayload = {
  __typename?: 'deleteSocialNetworkPayload';
  socialNetwork?: Maybe<SocialNetwork>;
};

export type Team = {
  __typename?: 'Team';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  position: Scalars['String'];
  video?: Maybe<UploadFile>;
<<<<<<< HEAD
  sort: Scalars['Int'];
  published_at?: Maybe<Scalars['DateTime']>;
};

export type TeamConnection = {
  __typename?: 'TeamConnection';
  values?: Maybe<Array<Maybe<Team>>>;
  groupBy?: Maybe<TeamGroupBy>;
  aggregate?: Maybe<TeamAggregator>;
};

export type TeamAggregator = {
  __typename?: 'TeamAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<TeamAggregatorSum>;
  avg?: Maybe<TeamAggregatorAvg>;
  min?: Maybe<TeamAggregatorMin>;
  max?: Maybe<TeamAggregatorMax>;
};

export type TeamAggregatorSum = {
  __typename?: 'TeamAggregatorSum';
  sort?: Maybe<Scalars['Float']>;
};

export type TeamAggregatorAvg = {
  __typename?: 'TeamAggregatorAvg';
  sort?: Maybe<Scalars['Float']>;
};

export type TeamAggregatorMin = {
  __typename?: 'TeamAggregatorMin';
  sort?: Maybe<Scalars['Float']>;
};

export type TeamAggregatorMax = {
  __typename?: 'TeamAggregatorMax';
  sort?: Maybe<Scalars['Float']>;
};

export type TeamGroupBy = {
  __typename?: 'TeamGroupBy';
  id?: Maybe<Array<Maybe<TeamConnectionId>>>;
  created_at?: Maybe<Array<Maybe<TeamConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<TeamConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<TeamConnectionName>>>;
  position?: Maybe<Array<Maybe<TeamConnectionPosition>>>;
  video?: Maybe<Array<Maybe<TeamConnectionVideo>>>;
  sort?: Maybe<Array<Maybe<TeamConnectionSort>>>;
  published_at?: Maybe<Array<Maybe<TeamConnectionPublished_At>>>;
};

export type TeamConnectionId = {
  __typename?: 'TeamConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TeamConnection>;
};

export type TeamConnectionCreated_At = {
  __typename?: 'TeamConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TeamConnection>;
};

export type TeamConnectionUpdated_At = {
  __typename?: 'TeamConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TeamConnection>;
};

export type TeamConnectionName = {
  __typename?: 'TeamConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TeamConnection>;
};

export type TeamConnectionPosition = {
  __typename?: 'TeamConnectionPosition';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TeamConnection>;
};

export type TeamConnectionVideo = {
  __typename?: 'TeamConnectionVideo';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TeamConnection>;
};

export type TeamConnectionSort = {
  __typename?: 'TeamConnectionSort';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<TeamConnection>;
};

export type TeamConnectionPublished_At = {
  __typename?: 'TeamConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TeamConnection>;
};

export type TeamInput = {
  name: Scalars['String'];
  position: Scalars['String'];
  video?: Maybe<Scalars['ID']>;
  sort: Scalars['Int'];
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditTeamInput = {
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  video?: Maybe<Scalars['ID']>;
  sort?: Maybe<Scalars['Int']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateTeamInput = {
  data?: Maybe<TeamInput>;
};

export type CreateTeamPayload = {
  __typename?: 'createTeamPayload';
  team?: Maybe<Team>;
};

export type UpdateTeamInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditTeamInput>;
};

export type UpdateTeamPayload = {
  __typename?: 'updateTeamPayload';
  team?: Maybe<Team>;
};

export type DeleteTeamInput = {
  where?: Maybe<InputId>;
};

export type DeleteTeamPayload = {
  __typename?: 'deleteTeamPayload';
  team?: Maybe<Team>;
};

export type Team = {
  __typename?: 'Team';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  position: Scalars['String'];
  image?: Maybe<UploadFile>;
=======
>>>>>>> feat(update) types
  published_at?: Maybe<Scalars['DateTime']>;
};

export type TeamConnection = {
  __typename?: 'TeamConnection';
  values?: Maybe<Array<Maybe<Team>>>;
  groupBy?: Maybe<TeamGroupBy>;
  aggregate?: Maybe<TeamAggregator>;
};

export type TeamAggregator = {
  __typename?: 'TeamAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TeamGroupBy = {
  __typename?: 'TeamGroupBy';
  id?: Maybe<Array<Maybe<TeamConnectionId>>>;
  created_at?: Maybe<Array<Maybe<TeamConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<TeamConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<TeamConnectionName>>>;
  position?: Maybe<Array<Maybe<TeamConnectionPosition>>>;
  video?: Maybe<Array<Maybe<TeamConnectionVideo>>>;
  published_at?: Maybe<Array<Maybe<TeamConnectionPublished_At>>>;
};

export type TeamConnectionId = {
  __typename?: 'TeamConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TeamConnection>;
};

export type TeamConnectionCreated_At = {
  __typename?: 'TeamConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TeamConnection>;
};

export type TeamConnectionUpdated_At = {
  __typename?: 'TeamConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TeamConnection>;
};

export type TeamConnectionName = {
  __typename?: 'TeamConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TeamConnection>;
};

export type TeamConnectionPosition = {
  __typename?: 'TeamConnectionPosition';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TeamConnection>;
};

export type TeamConnectionVideo = {
  __typename?: 'TeamConnectionVideo';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TeamConnection>;
};

export type TeamConnectionPublished_At = {
  __typename?: 'TeamConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TeamConnection>;
};

export type TeamInput = {
  name: Scalars['String'];
  position: Scalars['String'];
  video?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditTeamInput = {
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  video?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateTeamInput = {
  data?: Maybe<TeamInput>;
};

export type CreateTeamPayload = {
  __typename?: 'createTeamPayload';
  team?: Maybe<Team>;
};

export type UpdateTeamInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditTeamInput>;
};

export type UpdateTeamPayload = {
  __typename?: 'updateTeamPayload';
  team?: Maybe<Team>;
};

export type DeleteTeamInput = {
  where?: Maybe<InputId>;
};

export type DeleteTeamPayload = {
  __typename?: 'deleteTeamPayload';
  team?: Maybe<Team>;
};

export type TechList = {
  __typename?: 'TechList';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
};

export type TechListConnection = {
  __typename?: 'TechListConnection';
  values?: Maybe<Array<Maybe<TechList>>>;
  groupBy?: Maybe<TechListGroupBy>;
  aggregate?: Maybe<TechListAggregator>;
};

export type TechListAggregator = {
  __typename?: 'TechListAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TechListGroupBy = {
  __typename?: 'TechListGroupBy';
  id?: Maybe<Array<Maybe<TechListConnectionId>>>;
  created_at?: Maybe<Array<Maybe<TechListConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<TechListConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<TechListConnectionName>>>;
  published_at?: Maybe<Array<Maybe<TechListConnectionPublished_At>>>;
};

export type TechListConnectionId = {
  __typename?: 'TechListConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<TechListConnection>;
};

export type TechListConnectionCreated_At = {
  __typename?: 'TechListConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TechListConnection>;
};

export type TechListConnectionUpdated_At = {
  __typename?: 'TechListConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TechListConnection>;
};

export type TechListConnectionName = {
  __typename?: 'TechListConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<TechListConnection>;
};

export type TechListConnectionPublished_At = {
  __typename?: 'TechListConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<TechListConnection>;
};

export type TechListInput = {
  name: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditTechListInput = {
  name?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateTechListInput = {
  data?: Maybe<TechListInput>;
};

export type CreateTechListPayload = {
  __typename?: 'createTechListPayload';
  techList?: Maybe<TechList>;
};

export type UpdateTechListInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditTechListInput>;
};

export type UpdateTechListPayload = {
  __typename?: 'updateTechListPayload';
  techList?: Maybe<TechList>;
};

export type DeleteTechListInput = {
  where?: Maybe<InputId>;
};

export type DeleteTechListPayload = {
  __typename?: 'deleteTechListPayload';
  techList?: Maybe<TechList>;
};

export type Webhook = {
  __typename?: 'Webhook';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type WebhookConnection = {
  __typename?: 'WebhookConnection';
  values?: Maybe<Array<Maybe<Webhook>>>;
  groupBy?: Maybe<WebhookGroupBy>;
  aggregate?: Maybe<WebhookAggregator>;
};

export type WebhookAggregator = {
  __typename?: 'WebhookAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type WebhookGroupBy = {
  __typename?: 'WebhookGroupBy';
  id?: Maybe<Array<Maybe<WebhookConnectionId>>>;
  created_at?: Maybe<Array<Maybe<WebhookConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<WebhookConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<WebhookConnectionName>>>;
  published_at?: Maybe<Array<Maybe<WebhookConnectionPublished_At>>>;
};

export type WebhookConnectionId = {
  __typename?: 'WebhookConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<WebhookConnection>;
};

export type WebhookConnectionCreated_At = {
  __typename?: 'WebhookConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<WebhookConnection>;
};

export type WebhookConnectionUpdated_At = {
  __typename?: 'WebhookConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<WebhookConnection>;
};

export type WebhookConnectionName = {
  __typename?: 'WebhookConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<WebhookConnection>;
};

export type WebhookConnectionPublished_At = {
  __typename?: 'WebhookConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<WebhookConnection>;
};

export type WebhookInput = {
  name?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditWebhookInput = {
  name?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateWebhookInput = {
  data?: Maybe<WebhookInput>;
};

export type CreateWebhookPayload = {
  __typename?: 'createWebhookPayload';
  webhook?: Maybe<Webhook>;
};

export type UpdateWebhookInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditWebhookInput>;
};

export type UpdateWebhookPayload = {
  __typename?: 'updateWebhookPayload';
  webhook?: Maybe<Webhook>;
};

export type DeleteWebhookInput = {
  where?: Maybe<InputId>;
};

export type DeleteWebhookPayload = {
  __typename?: 'deleteWebhookPayload';
  webhook?: Maybe<Webhook>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type LocaleInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditLocaleInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

<<<<<<< HEAD
<<<<<<< HEAD
export type ComponentContentContact = {
  __typename?: 'ComponentContentContact';
  id: Scalars['ID'];
  address: Scalars['String'];
  phoneNumber: Scalars['String'];
  email: Scalars['String'];
  ico: Scalars['String'];
  dic: Scalars['String'];
  legal: Scalars['String'];
};

export type ComponentContentContactInput = {
  address: Scalars['String'];
  phoneNumber: Scalars['String'];
  email: Scalars['String'];
  ico: Scalars['String'];
  dic: Scalars['String'];
  legal: Scalars['String'];
};

export type EditComponentContentContactInput = {
  id?: Maybe<Scalars['ID']>;
  address?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  ico?: Maybe<Scalars['String']>;
  dic?: Maybe<Scalars['String']>;
  legal?: Maybe<Scalars['String']>;
};

export type ComponentContentGalleryImage = {
  __typename?: 'ComponentContentGalleryImage';
  id: Scalars['ID'];
  rows: Scalars['Int'];
  spacing: Scalars['Int'];
  images?: Maybe<UploadFile>;
};

export type ComponentContentGalleryImageInput = {
  rows: Scalars['Int'];
  spacing: Scalars['Int'];
  images?: Maybe<Scalars['ID']>;
};

export type EditComponentContentGalleryImageInput = {
  id?: Maybe<Scalars['ID']>;
  rows?: Maybe<Scalars['Int']>;
  spacing?: Maybe<Scalars['Int']>;
  images?: Maybe<Scalars['ID']>;
=======
export type ComponentContentCareerPosition = {
  __typename?: 'ComponentContentCareerPosition';
=======
export type ComponentContentContact = {
  __typename?: 'ComponentContentContact';
>>>>>>> rebase(Reference Page)
  id: Scalars['ID'];
  address: Scalars['String'];
  phoneNumber: Scalars['String'];
  email: Scalars['String'];
  ico: Scalars['String'];
  dic: Scalars['String'];
  legal: Scalars['String'];
};

export type ComponentContentContactInput = {
  address: Scalars['String'];
  phoneNumber: Scalars['String'];
  email: Scalars['String'];
  ico: Scalars['String'];
  dic: Scalars['String'];
  legal: Scalars['String'];
};

export type EditComponentContentContactInput = {
  id?: Maybe<Scalars['ID']>;
<<<<<<< HEAD
  careerPositionHeading?: Maybe<Scalars['String']>;
  careerPositionDescription?: Maybe<Scalars['String']>;
  careerPositionColor?: Maybe<Scalars['String']>;
>>>>>>> feat(reference) conect project list with strapi
=======
  address?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  ico?: Maybe<Scalars['String']>;
  dic?: Maybe<Scalars['String']>;
  legal?: Maybe<Scalars['String']>;
};

export type ComponentContentGalleryImage = {
  __typename?: 'ComponentContentGalleryImage';
  id: Scalars['ID'];
  rows: Scalars['Int'];
  spacing: Scalars['Int'];
  images?: Maybe<UploadFile>;
};

export type ComponentContentGalleryImageInput = {
  rows: Scalars['Int'];
  spacing: Scalars['Int'];
  images?: Maybe<Scalars['ID']>;
};

export type EditComponentContentGalleryImageInput = {
  id?: Maybe<Scalars['ID']>;
  rows?: Maybe<Scalars['Int']>;
  spacing?: Maybe<Scalars['Int']>;
  images?: Maybe<Scalars['ID']>;
>>>>>>> rebase(Reference Page)
};

export type ComponentContentImage = {
  __typename?: 'ComponentContentImage';
  id: Scalars['ID'];
  widthPercent?: Maybe<Scalars['Float']>;
  image?: Maybe<Array<Maybe<UploadFile>>>;
};


export type ComponentContentImageImageArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentContentImageInput = {
  image?: Maybe<Array<Maybe<Scalars['ID']>>>;
  widthPercent?: Maybe<Scalars['Float']>;
};

export type EditComponentContentImageInput = {
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Array<Maybe<Scalars['ID']>>>;
  widthPercent?: Maybe<Scalars['Float']>;
};

export type ComponentContentInfoColumn = {
  __typename?: 'ComponentContentInfoColumn';
  id: Scalars['ID'];
  number?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  widthPercent?: Maybe<Scalars['Float']>;
  image?: Maybe<Array<Maybe<UploadFile>>>;
};


export type ComponentContentInfoColumnImageArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentContentInfoColumnInput = {
  number?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Array<Maybe<Scalars['ID']>>>;
  widthPercent?: Maybe<Scalars['Float']>;
};

export type EditComponentContentInfoColumnInput = {
  id?: Maybe<Scalars['ID']>;
  number?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Array<Maybe<Scalars['ID']>>>;
  widthPercent?: Maybe<Scalars['Float']>;
};

export type ComponentContentPictureList = {
  __typename?: 'ComponentContentPictureList';
  id: Scalars['ID'];
  header?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<UploadFile>;
};

export type ComponentContentPictureListInput = {
  header?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
};

export type EditComponentContentPictureListInput = {
  id?: Maybe<Scalars['ID']>;
  header?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
};

export type ComponentContentRichText = {
  __typename?: 'ComponentContentRichText';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  desciption?: Maybe<Scalars['String']>;
  desciptionLevel2?: Maybe<Scalars['String']>;
  desciptionLevel3?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  widthPercent?: Maybe<Scalars['Float']>;
  image?: Maybe<Array<Maybe<UploadFile>>>;
};


export type ComponentContentRichTextImageArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentContentRichTextInput = {
  title?: Maybe<Scalars['String']>;
  desciption?: Maybe<Scalars['String']>;
  desciptionLevel2?: Maybe<Scalars['String']>;
  desciptionLevel3?: Maybe<Scalars['String']>;
  image?: Maybe<Array<Maybe<Scalars['ID']>>>;
  subtitle?: Maybe<Scalars['String']>;
  widthPercent?: Maybe<Scalars['Float']>;
};

export type EditComponentContentRichTextInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  desciption?: Maybe<Scalars['String']>;
  desciptionLevel2?: Maybe<Scalars['String']>;
  desciptionLevel3?: Maybe<Scalars['String']>;
  image?: Maybe<Array<Maybe<Scalars['ID']>>>;
  subtitle?: Maybe<Scalars['String']>;
  widthPercent?: Maybe<Scalars['Float']>;
};

export type ComponentContentSocial = {
  __typename?: 'ComponentContentSocial';
  id: Scalars['ID'];
  facebook: Scalars['String'];
  linkedIn: Scalars['String'];
  instagram: Scalars['String'];
  twitter: Scalars['String'];
};

export type ComponentContentSocialInput = {
  facebook: Scalars['String'];
  linkedIn: Scalars['String'];
  instagram: Scalars['String'];
  twitter: Scalars['String'];
};

export type EditComponentContentSocialInput = {
  id?: Maybe<Scalars['ID']>;
  facebook?: Maybe<Scalars['String']>;
  linkedIn?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};

export type ComponentContentTechnologies = {
  __typename?: 'ComponentContentTechnologies';
  id: Scalars['ID'];
  technologies?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
<<<<<<< HEAD
  floatImage?: Maybe<UploadFile>;
  floatImageOnMiddle?: Maybe<Scalars['Boolean']>;
=======
>>>>>>> rebase(Reference Page)
  images?: Maybe<Array<Maybe<UploadFile>>>;
};


export type ComponentContentTechnologiesImagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentContentTechnologyInput = {
  technologies?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
<<<<<<< HEAD
  floatImage?: Maybe<Scalars['ID']>;
  floatImageOnMiddle?: Maybe<Scalars['Boolean']>;
=======
>>>>>>> rebase(Reference Page)
};

export type EditComponentContentTechnologyInput = {
  id?: Maybe<Scalars['ID']>;
  technologies?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Scalars['ID']>>>;
<<<<<<< HEAD
  floatImage?: Maybe<Scalars['ID']>;
  floatImageOnMiddle?: Maybe<Scalars['Boolean']>;
=======
>>>>>>> rebase(Reference Page)
};

export type ComponentNavigationInternalLink = {
  __typename?: 'ComponentNavigationInternalLink';
  id: Scalars['ID'];
  label: Scalars['String'];
  path: Scalars['String'];
};

export type ComponentNavigationInternalLinkInput = {
  label: Scalars['String'];
  path?: Maybe<Scalars['String']>;
};

export type EditComponentNavigationInternalLinkInput = {
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

<<<<<<< HEAD
<<<<<<< HEAD
export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | AboutUs | AboutUsConnection | AboutUsAggregator | AboutUsGroupBy | AboutUsConnectionId | AboutUsConnectionCreated_At | AboutUsConnectionUpdated_At | AboutUsConnectionLanguage | AboutUsConnectionHeroDescription | AboutUsConnectionHeroLogo | AboutUsConnectionHeroHeadlineTop | AboutUsConnectionHeroHeadlineBottom | AboutUsConnectionHeroArrowTitle | AboutUsConnectionWeAreHeadline | AboutUsConnectionWeAreDescription | AboutUsConnectionWeAreArrowTitle | AboutUsConnectionSkillsHeadline | AboutUsConnectionSkillsDescription | AboutUsConnectionTechnologiesDescription | AboutUsConnectionTechnologiesImage | AboutUsConnectionValuesHeadline | AboutUsConnectionTeamHeadline | AboutUsConnectionHqHeadline | AboutUsConnectionCareerHeadline | AboutUsConnectionCareerCtaTitle | AboutUsConnectionCareerCtaImage | AboutUsConnectionBlogHeadline | AboutUsConnectionHqDescription | AboutUsConnectionCareerDescription | AboutUsConnectionHqWeAreHereDescription | AboutUsConnectionHqWeAreHereImage | AboutUsConnectionHqCtaTitle | AboutUsConnectionBlogReadMore | AboutUsConnectionArrow | AboutUsConnectionPublished_At | CreateAboutUsPayload | UpdateAboutUsPayload | DeleteAboutUsPayload | AboutWeAreImageCarousel | UpdateAboutWeAreImageCarouselPayload | DeleteAboutWeAreImageCarouselPayload | BrandValue | BrandValueConnection | BrandValueAggregator | BrandValueAggregatorSum | BrandValueAggregatorAvg | BrandValueAggregatorMin | BrandValueAggregatorMax | BrandValueGroupBy | BrandValueConnectionId | BrandValueConnectionCreated_At | BrandValueConnectionUpdated_At | BrandValueConnectionHeadline | BrandValueConnectionBackgroundNumber | BrandValueConnectionImage | BrandValueConnectionDescription | BrandValueConnectionPublished_At | CreateBrandValuePayload | UpdateBrandValuePayload | DeleteBrandValuePayload | CareerOfferings | CareerOfferingsConnection | CareerOfferingsAggregator | CareerOfferingsGroupBy | CareerOfferingsConnectionId | CareerOfferingsConnectionCreated_At | CareerOfferingsConnectionUpdated_At | CareerOfferingsConnectionLanguage | CareerOfferingsConnectionTitle | CareerOfferingsConnectionDescription | CareerOfferingsConnectionCareerTechnologiesTitle | CareerOfferingsConnectionCareerTechnologiesContent | CareerOfferingsConnectionCareerExpectedSkillsTitle | CareerOfferingsConnectionCareerExpectedSkillsContent | CareerOfferingsConnectionCareerOfferTitle | CareerOfferingsConnectionCareerOfferContent | CareerOfferingsConnectionEndTitle | CareerOfferingsConnectionEndContent | CareerOfferingsConnectionEndCta | CareerOfferingsConnectionSlug | CareerOfferingsConnectionColor | CareerOfferingsConnectionPerex | CareerOfferingsConnectionPublished_At | CreateCareerOfferingPayload | UpdateCareerOfferingPayload | DeleteCareerOfferingPayload | Career | UpdateCareerPayload | DeleteCareerPayload | CaseStudyMeta | CaseStudyMetaConnection | CaseStudyMetaAggregator | CaseStudyMetaGroupBy | CaseStudyMetaConnectionId | CaseStudyMetaConnectionCreated_At | CaseStudyMetaConnectionUpdated_At | CaseStudyMetaConnectionIndustry | CaseStudyMetaConnectionClient | CaseStudyMetaConnectionSystem | CaseStudyMetaConnectionTechnologies | CaseStudyMetaConnectionPreviousProject | CaseStudyMetaConnectionNextProject | CaseStudyMetaConnectionFooterText | CaseStudyMetaConnectionWriteUs | CaseStudyMetaConnectionLanguage | CaseStudyMetaConnectionPublished_At | CreateCaseStudyMetaPayload | UpdateCaseStudyMetaPayload | DeleteCaseStudyMetaPayload | CaseStudy | CaseStudyConnection | CaseStudyAggregator | CaseStudyAggregatorSum | CaseStudyAggregatorAvg | CaseStudyAggregatorMin | CaseStudyAggregatorMax | CaseStudyGroupBy | CaseStudyConnectionId | CaseStudyConnectionCreated_At | CaseStudyConnectionUpdated_At | CaseStudyConnectionImage | CaseStudyConnectionTitle | CaseStudyConnectionHeight | CaseStudyConnectionSlug | CaseStudyConnectionLocale | CaseStudyConnectionPublished_At | CreateCaseStudyPayload | UpdateCaseStudyPayload | DeleteCaseStudyPayload | Contact | ContactConnection | ContactAggregator | ContactGroupBy | ContactConnectionId | ContactConnectionCreated_At | ContactConnectionUpdated_At | ContactConnectionLanguage | ContactConnectionTitle | ContactConnectionAddress | ContactConnectionTaxIdentificationNumbers | ContactConnectionTaxIdentificationDescription | ContactConnectionEmail | ContactConnectionPhoneNumber | ContactConnectionFormName | ContactConnectionFormText | ContactConnectionFormEmail | ContactConnectionFormNameWarning | ContactConnectionFormEmailWarning | ContactConnectionFormSubmit | ContactConnectionFormInvalidEmailWarning | ContactConnectionFormTextLabel | ContactConnectionFormNameLabel | ContactConnectionFormEmailLabel | ContactConnectionFooterImg | ContactConnectionPublished_At | CreateContactPayload | UpdateContactPayload | DeleteContactPayload | Footer | UpdateFooterPayload | DeleteFooterPayload | Header | HeaderConnection | HeaderAggregator | HeaderGroupBy | HeaderConnectionId | HeaderConnectionCreated_At | HeaderConnectionUpdated_At | HeaderConnectionTitle | HeaderConnectionDescription | HeaderConnectionLanguage | HeaderConnectionLogo | HeaderConnectionPublished_At | CreateHeaderPayload | UpdateHeaderPayload | DeleteHeaderPayload | HomepageNew | UpdateHomepageNewPayload | DeleteHomepageNewPayload | Homepage | HomepageConnection | HomepageAggregator | HomepageGroupBy | HomepageConnectionId | HomepageConnectionCreated_At | HomepageConnectionUpdated_At | HomepageConnectionLanguage | HomepageConnectionClickToStop | HomepageConnectionDescriptionAboveLine | HomepageConnectionDescriptionBellowLine | HomepageConnectionLogo | HomepageConnectionPublished_At | CreateHomepagePayload | UpdateHomepagePayload | DeleteHomepagePayload | HqGallery | HqGalleryConnection | HqGalleryAggregator | HqGalleryGroupBy | HqGalleryConnectionId | HqGalleryConnectionCreated_At | HqGalleryConnectionUpdated_At | HqGalleryConnectionPublished_At | CreateHqGalleryPayload | UpdateHqGalleryPayload | DeleteHqGalleryPayload | Job | JobConnection | JobAggregator | JobGroupBy | JobConnectionId | JobConnectionCreated_At | JobConnectionUpdated_At | JobConnectionTitle | JobConnectionDescription | JobConnectionCareerTechnologiesTitle | JobConnectionCareerTechnologiesContent | JobConnectionCareerExpectedSkills | JobConnectionCareerExpectedSkillsContent | JobConnectionCareerOfferTitle | JobConnectionCareerOfferContent | JobConnectionEndTitle | JobConnectionEndContent | JobConnectionEndCta | JobConnectionLanguage | JobConnectionSlug | JobConnectionPublished_At | CreateJobPayload | UpdateJobPayload | DeleteJobPayload | Language | LanguageConnection | LanguageAggregator | LanguageGroupBy | LanguageConnectionId | LanguageConnectionCreated_At | LanguageConnectionUpdated_At | LanguageConnectionLanguageCode | LanguageConnectionDisplayName | LanguageConnectionPublished_At | CreateLanguagePayload | UpdateLanguagePayload | DeleteLanguagePayload | Menu | MenuConnection | MenuAggregator | MenuGroupBy | MenuConnectionId | MenuConnectionCreated_At | MenuConnectionUpdated_At | MenuConnectionMenu | MenuConnectionHomePage | MenuConnectionReference | MenuConnectionAboutUs | MenuConnectionCareer | MenuConnectionContact | MenuConnectionLanguage | MenuConnectionPublished_At | CreateMenuPayload | UpdateMenuPayload | DeleteMenuPayload | Page404 | Page404Connection | Page404Aggregator | Page404GroupBy | Page404ConnectionId | Page404ConnectionCreated_At | Page404ConnectionUpdated_At | Page404ConnectionImage | Page404ConnectionHeading | Page404ConnectionDescription | Page404ConnectionLink | Page404ConnectionLanguage | Page404ConnectionBgText | Page404ConnectionPublished_At | CreatePage404Payload | UpdatePage404Payload | DeletePage404Payload | Products | ProductsConnection | ProductsAggregator | ProductsGroupBy | ProductsConnectionId | ProductsConnectionCreated_At | ProductsConnectionUpdated_At | ProductsConnectionName | ProductsConnectionSlug | ProductsConnectionLocale | ProductsConnectionPublished_At | CreateProductPayload | UpdateProductPayload | DeleteProductPayload | Skill | SkillConnection | SkillAggregator | SkillGroupBy | SkillConnectionId | SkillConnectionCreated_At | SkillConnectionUpdated_At | SkillConnectionTitle | SkillConnectionDescription | SkillConnectionTitleColorHash | SkillConnectionPublished_At | CreateSkillPayload | UpdateSkillPayload | DeleteSkillPayload | SocialNetwork | SocialNetworkConnection | SocialNetworkAggregator | SocialNetworkGroupBy | SocialNetworkConnectionId | SocialNetworkConnectionCreated_At | SocialNetworkConnectionUpdated_At | SocialNetworkConnectionName | SocialNetworkConnectionUrl | SocialNetworkConnectionPublished_At | CreateSocialNetworkPayload | UpdateSocialNetworkPayload | DeleteSocialNetworkPayload | Team | TeamConnection | TeamAggregator | TeamAggregatorSum | TeamAggregatorAvg | TeamAggregatorMin | TeamAggregatorMax | TeamGroupBy | TeamConnectionId | TeamConnectionCreated_At | TeamConnectionUpdated_At | TeamConnectionName | TeamConnectionPosition | TeamConnectionVideo | TeamConnectionSort | TeamConnectionPublished_At | CreateTeamPayload | UpdateTeamPayload | DeleteTeamPayload | TechList | TechListConnection | TechListAggregator | TechListGroupBy | TechListConnectionId | TechListConnectionCreated_At | TechListConnectionUpdated_At | TechListConnectionName | TechListConnectionPublished_At | CreateTechListPayload | UpdateTechListPayload | DeleteTechListPayload | Webhook | WebhookConnection | WebhookAggregator | WebhookGroupBy | WebhookConnectionId | WebhookConnectionCreated_At | WebhookConnectionUpdated_At | WebhookConnectionName | WebhookConnectionPublished_At | CreateWebhookPayload | UpdateWebhookPayload | DeleteWebhookPayload | I18NLocale | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentContentContact | ComponentContentGalleryImage | ComponentContentImage | ComponentContentInfoColumn | ComponentContentPictureList | ComponentContentRichText | ComponentContentSocial | ComponentContentTechnologies | ComponentNavigationInternalLink;
=======
export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | AboutUs | AboutUsConnection | AboutUsAggregator | AboutUsGroupBy | AboutUsConnectionId | AboutUsConnectionCreated_At | AboutUsConnectionUpdated_At | AboutUsConnectionLanguage | AboutUsConnectionHeroDescription | AboutUsConnectionHeroLogo | AboutUsConnectionHeroHeadlineTop | AboutUsConnectionHeroHeadlineBottom | AboutUsConnectionHeroArrowTitle | AboutUsConnectionWeAreHeadline | AboutUsConnectionWeAreDescription | AboutUsConnectionWeAreArrowTitle | AboutUsConnectionSkillsHeadline | AboutUsConnectionSkillsDescription | AboutUsConnectionTechnologiesDescription | AboutUsConnectionTechnologiesImage | AboutUsConnectionValuesHeadline | AboutUsConnectionTeamHeadline | AboutUsConnectionHqHeadline | AboutUsConnectionCareerHeadline | AboutUsConnectionCareerCtaTitle | AboutUsConnectionCareerCtaImage | AboutUsConnectionBlogHeadline | AboutUsConnectionHqDescription | AboutUsConnectionCareerDescription | AboutUsConnectionHqWeAreHereDescription | AboutUsConnectionHqWeAreHereImage | AboutUsConnectionHqCtaTitle | AboutUsConnectionBlogReadMore | AboutUsConnectionArrow | AboutUsConnectionPublished_At | CreateAboutUsPayload | UpdateAboutUsPayload | DeleteAboutUsPayload | AboutWeAreImageCarousel | UpdateAboutWeAreImageCarouselPayload | DeleteAboutWeAreImageCarouselPayload | BrandValue | BrandValueConnection | BrandValueAggregator | BrandValueAggregatorSum | BrandValueAggregatorAvg | BrandValueAggregatorMin | BrandValueAggregatorMax | BrandValueGroupBy | BrandValueConnectionId | BrandValueConnectionCreated_At | BrandValueConnectionUpdated_At | BrandValueConnectionHeadline | BrandValueConnectionBackgroundNumber | BrandValueConnectionImage | BrandValueConnectionDescription | BrandValueConnectionPublished_At | CreateBrandValuePayload | UpdateBrandValuePayload | DeleteBrandValuePayload | CareerOfferings | CareerOfferingsConnection | CareerOfferingsAggregator | CareerOfferingsGroupBy | CareerOfferingsConnectionId | CareerOfferingsConnectionCreated_At | CareerOfferingsConnectionUpdated_At | CareerOfferingsConnectionLanguage | CareerOfferingsConnectionTitle | CareerOfferingsConnectionDescription | CareerOfferingsConnectionCareerTechnologiesTitle | CareerOfferingsConnectionCareerTechnologiesContent | CareerOfferingsConnectionCareerExpectedSkillsTitle | CareerOfferingsConnectionCareerExpectedSkillsContent | CareerOfferingsConnectionCareerOfferTitle | CareerOfferingsConnectionCareerOfferContent | CareerOfferingsConnectionEndTitle | CareerOfferingsConnectionEndContent | CareerOfferingsConnectionEndCta | CareerOfferingsConnectionSlug | CareerOfferingsConnectionColor | CareerOfferingsConnectionPerex | CareerOfferingsConnectionPublished_At | CreateCareerOfferingPayload | UpdateCareerOfferingPayload | DeleteCareerOfferingPayload | Career | UpdateCareerPayload | DeleteCareerPayload | CaseStudyMeta | CaseStudyMetaConnection | CaseStudyMetaAggregator | CaseStudyMetaGroupBy | CaseStudyMetaConnectionId | CaseStudyMetaConnectionCreated_At | CaseStudyMetaConnectionUpdated_At | CaseStudyMetaConnectionIndustry | CaseStudyMetaConnectionClient | CaseStudyMetaConnectionSystem | CaseStudyMetaConnectionTechnologies | CaseStudyMetaConnectionPreviousProject | CaseStudyMetaConnectionNextProject | CaseStudyMetaConnectionFooterText | CaseStudyMetaConnectionWriteUs | CaseStudyMetaConnectionLanguage | CaseStudyMetaConnectionPublished_At | CreateCaseStudyMetaPayload | UpdateCaseStudyMetaPayload | DeleteCaseStudyMetaPayload | CaseStudy | CaseStudyConnection | CaseStudyAggregator | CaseStudyGroupBy | CaseStudyConnectionId | CaseStudyConnectionCreated_At | CaseStudyConnectionUpdated_At | CaseStudyConnectionTitle | CaseStudyConnectionSubtitle | CaseStudyConnectionAbout | CaseStudyConnectionIndustry | CaseStudyConnectionClient | CaseStudyConnectionSystem | CaseStudyConnectionMainImage | CaseStudyConnectionLanguage | CaseStudyConnectionProjectId | CaseStudyConnectionPublished_At | CreateCaseStudyPayload | UpdateCaseStudyPayload | DeleteCaseStudyPayload | Contact | ContactConnection | ContactAggregator | ContactGroupBy | ContactConnectionId | ContactConnectionCreated_At | ContactConnectionUpdated_At | ContactConnectionLanguage | ContactConnectionTitle | ContactConnectionAddress | ContactConnectionTaxIdentificationNumbers | ContactConnectionTaxIdentificationDescription | ContactConnectionEmail | ContactConnectionPhoneNumber | ContactConnectionFormName | ContactConnectionFormText | ContactConnectionFormEmail | ContactConnectionFormNameWarning | ContactConnectionFormEmailWarning | ContactConnectionFormSubmit | ContactConnectionFormInvalidEmailWarning | ContactConnectionFormTextLabel | ContactConnectionFormNameLabel | ContactConnectionFormEmailLabel | ContactConnectionFooterImg | ContactConnectionPublished_At | CreateContactPayload | UpdateContactPayload | DeleteContactPayload | Footer | UpdateFooterPayload | DeleteFooterPayload | Header | HeaderConnection | HeaderAggregator | HeaderGroupBy | HeaderConnectionId | HeaderConnectionCreated_At | HeaderConnectionUpdated_At | HeaderConnectionTitle | HeaderConnectionDescription | HeaderConnectionLanguage | HeaderConnectionLogo | HeaderConnectionPublished_At | CreateHeaderPayload | UpdateHeaderPayload | DeleteHeaderPayload | HomepageNew | UpdateHomepageNewPayload | DeleteHomepageNewPayload | Homepage | HomepageConnection | HomepageAggregator | HomepageGroupBy | HomepageConnectionId | HomepageConnectionCreated_At | HomepageConnectionUpdated_At | HomepageConnectionLanguage | HomepageConnectionClickToStop | HomepageConnectionDescriptionAboveLine | HomepageConnectionDescriptionBellowLine | HomepageConnectionLogo | HomepageConnectionPublished_At | CreateHomepagePayload | UpdateHomepagePayload | DeleteHomepagePayload | HqGallery | HqGalleryConnection | HqGalleryAggregator | HqGalleryGroupBy | HqGalleryConnectionId | HqGalleryConnectionCreated_At | HqGalleryConnectionUpdated_At | HqGalleryConnectionPublished_At | CreateHqGalleryPayload | UpdateHqGalleryPayload | DeleteHqGalleryPayload | Job | JobConnection | JobAggregator | JobGroupBy | JobConnectionId | JobConnectionCreated_At | JobConnectionUpdated_At | JobConnectionTitle | JobConnectionDescription | JobConnectionCareerTechnologiesTitle | JobConnectionCareerTechnologiesContent | JobConnectionCareerExpectedSkills | JobConnectionCareerExpectedSkillsContent | JobConnectionCareerOfferTitle | JobConnectionCareerOfferContent | JobConnectionEndTitle | JobConnectionEndContent | JobConnectionEndCta | JobConnectionLanguage | JobConnectionSlug | JobConnectionPublished_At | CreateJobPayload | UpdateJobPayload | DeleteJobPayload | Language | LanguageConnection | LanguageAggregator | LanguageGroupBy | LanguageConnectionId | LanguageConnectionCreated_At | LanguageConnectionUpdated_At | LanguageConnectionLanguageCode | LanguageConnectionDisplayName | LanguageConnectionPublished_At | CreateLanguagePayload | UpdateLanguagePayload | DeleteLanguagePayload | Menu | MenuConnection | MenuAggregator | MenuGroupBy | MenuConnectionId | MenuConnectionCreated_At | MenuConnectionUpdated_At | MenuConnectionMenu | MenuConnectionHomePage | MenuConnectionReference | MenuConnectionAboutUs | MenuConnectionCareer | MenuConnectionContact | MenuConnectionLanguage | MenuConnectionPublished_At | CreateMenuPayload | UpdateMenuPayload | DeleteMenuPayload | Page404 | Page404Connection | Page404Aggregator | Page404GroupBy | Page404ConnectionId | Page404ConnectionCreated_At | Page404ConnectionUpdated_At | Page404ConnectionImage | Page404ConnectionHeading | Page404ConnectionDescription | Page404ConnectionLink | Page404ConnectionLanguage | Page404ConnectionBgText | Page404ConnectionPublished_At | CreatePage404Payload | UpdatePage404Payload | DeletePage404Payload | Products | ProductsConnection | ProductsAggregator | ProductsGroupBy | ProductsConnectionId | ProductsConnectionCreated_At | ProductsConnectionUpdated_At | ProductsConnectionName | ProductsConnectionSlug | ProductsConnectionLocale | ProductsConnectionPublished_At | CreateProductPayload | UpdateProductPayload | DeleteProductPayload | Skill | SkillConnection | SkillAggregator | SkillGroupBy | SkillConnectionId | SkillConnectionCreated_At | SkillConnectionUpdated_At | SkillConnectionTitle | SkillConnectionDescription | SkillConnectionTitleColorHash | SkillConnectionPublished_At | CreateSkillPayload | UpdateSkillPayload | DeleteSkillPayload | SocialNetwork | SocialNetworkConnection | SocialNetworkAggregator | SocialNetworkGroupBy | SocialNetworkConnectionId | SocialNetworkConnectionCreated_At | SocialNetworkConnectionUpdated_At | SocialNetworkConnectionName | SocialNetworkConnectionUrl | SocialNetworkConnectionPublished_At | CreateSocialNetworkPayload | UpdateSocialNetworkPayload | DeleteSocialNetworkPayload | Team | TeamConnection | TeamAggregator | TeamGroupBy | TeamConnectionId | TeamConnectionCreated_At | TeamConnectionUpdated_At | TeamConnectionName | TeamConnectionPosition | TeamConnectionImage | TeamConnectionPublished_At | CreateTeamPayload | UpdateTeamPayload | DeleteTeamPayload | TechList | TechListConnection | TechListAggregator | TechListGroupBy | TechListConnectionId | TechListConnectionCreated_At | TechListConnectionUpdated_At | TechListConnectionName | TechListConnectionPublished_At | CreateTechListPayload | UpdateTechListPayload | DeleteTechListPayload | Webhook | WebhookConnection | WebhookAggregator | WebhookGroupBy | WebhookConnectionId | WebhookConnectionCreated_At | WebhookConnectionUpdated_At | WebhookConnectionName | WebhookConnectionPublished_At | CreateWebhookPayload | UpdateWebhookPayload | DeleteWebhookPayload | I18NLocale | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentContentContact | ComponentContentGalleryImage | ComponentContentImage | ComponentContentInfoColumn | ComponentContentPictureList | ComponentContentRichText | ComponentContentSocial | ComponentContentTechnologies | ComponentNavigationInternalLink;
>>>>>>> rebase(Reference Page)
=======
export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | AboutUs | AboutUsConnection | AboutUsAggregator | AboutUsGroupBy | AboutUsConnectionId | AboutUsConnectionCreated_At | AboutUsConnectionUpdated_At | AboutUsConnectionLanguage | AboutUsConnectionHeroDescription | AboutUsConnectionHeroLogo | AboutUsConnectionHeroHeadlineTop | AboutUsConnectionHeroHeadlineBottom | AboutUsConnectionHeroArrowTitle | AboutUsConnectionWeAreHeadline | AboutUsConnectionWeAreDescription | AboutUsConnectionWeAreArrowTitle | AboutUsConnectionSkillsHeadline | AboutUsConnectionSkillsDescription | AboutUsConnectionTechnologiesDescription | AboutUsConnectionTechnologiesImage | AboutUsConnectionValuesHeadline | AboutUsConnectionTeamHeadline | AboutUsConnectionHqHeadline | AboutUsConnectionCareerHeadline | AboutUsConnectionCareerCtaTitle | AboutUsConnectionCareerCtaImage | AboutUsConnectionBlogHeadline | AboutUsConnectionHqDescription | AboutUsConnectionCareerDescription | AboutUsConnectionHqWeAreHereDescription | AboutUsConnectionHqWeAreHereImage | AboutUsConnectionHqCtaTitle | AboutUsConnectionBlogReadMore | AboutUsConnectionArrow | AboutUsConnectionPublished_At | CreateAboutUsPayload | UpdateAboutUsPayload | DeleteAboutUsPayload | AboutWeAreImageCarousel | UpdateAboutWeAreImageCarouselPayload | DeleteAboutWeAreImageCarouselPayload | BrandValue | BrandValueConnection | BrandValueAggregator | BrandValueAggregatorSum | BrandValueAggregatorAvg | BrandValueAggregatorMin | BrandValueAggregatorMax | BrandValueGroupBy | BrandValueConnectionId | BrandValueConnectionCreated_At | BrandValueConnectionUpdated_At | BrandValueConnectionHeadline | BrandValueConnectionBackgroundNumber | BrandValueConnectionImage | BrandValueConnectionDescription | BrandValueConnectionPublished_At | CreateBrandValuePayload | UpdateBrandValuePayload | DeleteBrandValuePayload | CareerOfferings | CareerOfferingsConnection | CareerOfferingsAggregator | CareerOfferingsGroupBy | CareerOfferingsConnectionId | CareerOfferingsConnectionCreated_At | CareerOfferingsConnectionUpdated_At | CareerOfferingsConnectionLanguage | CareerOfferingsConnectionTitle | CareerOfferingsConnectionDescription | CareerOfferingsConnectionCareerTechnologiesTitle | CareerOfferingsConnectionCareerTechnologiesContent | CareerOfferingsConnectionCareerExpectedSkillsTitle | CareerOfferingsConnectionCareerExpectedSkillsContent | CareerOfferingsConnectionCareerOfferTitle | CareerOfferingsConnectionCareerOfferContent | CareerOfferingsConnectionEndTitle | CareerOfferingsConnectionEndContent | CareerOfferingsConnectionEndCta | CareerOfferingsConnectionSlug | CareerOfferingsConnectionColor | CareerOfferingsConnectionPerex | CareerOfferingsConnectionPublished_At | CreateCareerOfferingPayload | UpdateCareerOfferingPayload | DeleteCareerOfferingPayload | Career | UpdateCareerPayload | DeleteCareerPayload | CaseStudyMeta | CaseStudyMetaConnection | CaseStudyMetaAggregator | CaseStudyMetaGroupBy | CaseStudyMetaConnectionId | CaseStudyMetaConnectionCreated_At | CaseStudyMetaConnectionUpdated_At | CaseStudyMetaConnectionIndustry | CaseStudyMetaConnectionClient | CaseStudyMetaConnectionSystem | CaseStudyMetaConnectionTechnologies | CaseStudyMetaConnectionPreviousProject | CaseStudyMetaConnectionNextProject | CaseStudyMetaConnectionFooterText | CaseStudyMetaConnectionWriteUs | CaseStudyMetaConnectionLanguage | CaseStudyMetaConnectionPublished_At | CreateCaseStudyMetaPayload | UpdateCaseStudyMetaPayload | DeleteCaseStudyMetaPayload | CaseStudy | CaseStudyConnection | CaseStudyAggregator | CaseStudyAggregatorSum | CaseStudyAggregatorAvg | CaseStudyAggregatorMin | CaseStudyAggregatorMax | CaseStudyGroupBy | CaseStudyConnectionId | CaseStudyConnectionCreated_At | CaseStudyConnectionUpdated_At | CaseStudyConnectionLanguage | CaseStudyConnectionImage | CaseStudyConnectionTitle | CaseStudyConnectionHeight | CaseStudyConnectionPublished_At | CreateCaseStudyPayload | UpdateCaseStudyPayload | DeleteCaseStudyPayload | Contact | ContactConnection | ContactAggregator | ContactGroupBy | ContactConnectionId | ContactConnectionCreated_At | ContactConnectionUpdated_At | ContactConnectionLanguage | ContactConnectionTitle | ContactConnectionAddress | ContactConnectionTaxIdentificationNumbers | ContactConnectionTaxIdentificationDescription | ContactConnectionEmail | ContactConnectionPhoneNumber | ContactConnectionFormName | ContactConnectionFormText | ContactConnectionFormEmail | ContactConnectionFormNameWarning | ContactConnectionFormEmailWarning | ContactConnectionFormSubmit | ContactConnectionFormInvalidEmailWarning | ContactConnectionFormTextLabel | ContactConnectionFormNameLabel | ContactConnectionFormEmailLabel | ContactConnectionFooterImg | ContactConnectionPublished_At | CreateContactPayload | UpdateContactPayload | DeleteContactPayload | Footer | UpdateFooterPayload | DeleteFooterPayload | Header | HeaderConnection | HeaderAggregator | HeaderGroupBy | HeaderConnectionId | HeaderConnectionCreated_At | HeaderConnectionUpdated_At | HeaderConnectionTitle | HeaderConnectionDescription | HeaderConnectionLanguage | HeaderConnectionLogo | HeaderConnectionPublished_At | CreateHeaderPayload | UpdateHeaderPayload | DeleteHeaderPayload | HomepageNew | UpdateHomepageNewPayload | DeleteHomepageNewPayload | Homepage | HomepageConnection | HomepageAggregator | HomepageGroupBy | HomepageConnectionId | HomepageConnectionCreated_At | HomepageConnectionUpdated_At | HomepageConnectionLanguage | HomepageConnectionClickToStop | HomepageConnectionDescriptionAboveLine | HomepageConnectionDescriptionBellowLine | HomepageConnectionLogo | HomepageConnectionPublished_At | CreateHomepagePayload | UpdateHomepagePayload | DeleteHomepagePayload | HqGallery | HqGalleryConnection | HqGalleryAggregator | HqGalleryGroupBy | HqGalleryConnectionId | HqGalleryConnectionCreated_At | HqGalleryConnectionUpdated_At | HqGalleryConnectionPublished_At | CreateHqGalleryPayload | UpdateHqGalleryPayload | DeleteHqGalleryPayload | Job | JobConnection | JobAggregator | JobGroupBy | JobConnectionId | JobConnectionCreated_At | JobConnectionUpdated_At | JobConnectionTitle | JobConnectionDescription | JobConnectionCareerTechnologiesTitle | JobConnectionCareerTechnologiesContent | JobConnectionCareerExpectedSkills | JobConnectionCareerExpectedSkillsContent | JobConnectionCareerOfferTitle | JobConnectionCareerOfferContent | JobConnectionEndTitle | JobConnectionEndContent | JobConnectionEndCta | JobConnectionLanguage | JobConnectionSlug | JobConnectionPublished_At | CreateJobPayload | UpdateJobPayload | DeleteJobPayload | Language | LanguageConnection | LanguageAggregator | LanguageGroupBy | LanguageConnectionId | LanguageConnectionCreated_At | LanguageConnectionUpdated_At | LanguageConnectionLanguageCode | LanguageConnectionDisplayName | LanguageConnectionPublished_At | CreateLanguagePayload | UpdateLanguagePayload | DeleteLanguagePayload | Menu | MenuConnection | MenuAggregator | MenuGroupBy | MenuConnectionId | MenuConnectionCreated_At | MenuConnectionUpdated_At | MenuConnectionMenu | MenuConnectionHomePage | MenuConnectionReference | MenuConnectionAboutUs | MenuConnectionCareer | MenuConnectionContact | MenuConnectionLanguage | MenuConnectionPublished_At | CreateMenuPayload | UpdateMenuPayload | DeleteMenuPayload | Page404 | Page404Connection | Page404Aggregator | Page404GroupBy | Page404ConnectionId | Page404ConnectionCreated_At | Page404ConnectionUpdated_At | Page404ConnectionImage | Page404ConnectionHeading | Page404ConnectionDescription | Page404ConnectionLink | Page404ConnectionLanguage | Page404ConnectionBgText | Page404ConnectionPublished_At | CreatePage404Payload | UpdatePage404Payload | DeletePage404Payload | Products | ProductsConnection | ProductsAggregator | ProductsGroupBy | ProductsConnectionId | ProductsConnectionCreated_At | ProductsConnectionUpdated_At | ProductsConnectionName | ProductsConnectionSlug | ProductsConnectionLocale | ProductsConnectionPublished_At | CreateProductPayload | UpdateProductPayload | DeleteProductPayload | Skill | SkillConnection | SkillAggregator | SkillGroupBy | SkillConnectionId | SkillConnectionCreated_At | SkillConnectionUpdated_At | SkillConnectionTitle | SkillConnectionDescription | SkillConnectionTitleColorHash | SkillConnectionPublished_At | CreateSkillPayload | UpdateSkillPayload | DeleteSkillPayload | SocialNetwork | SocialNetworkConnection | SocialNetworkAggregator | SocialNetworkGroupBy | SocialNetworkConnectionId | SocialNetworkConnectionCreated_At | SocialNetworkConnectionUpdated_At | SocialNetworkConnectionName | SocialNetworkConnectionUrl | SocialNetworkConnectionPublished_At | CreateSocialNetworkPayload | UpdateSocialNetworkPayload | DeleteSocialNetworkPayload | Team | TeamConnection | TeamAggregator | TeamGroupBy | TeamConnectionId | TeamConnectionCreated_At | TeamConnectionUpdated_At | TeamConnectionName | TeamConnectionPosition | TeamConnectionVideo | TeamConnectionPublished_At | CreateTeamPayload | UpdateTeamPayload | DeleteTeamPayload | TechList | TechListConnection | TechListAggregator | TechListGroupBy | TechListConnectionId | TechListConnectionCreated_At | TechListConnectionUpdated_At | TechListConnectionName | TechListConnectionPublished_At | CreateTechListPayload | UpdateTechListPayload | DeleteTechListPayload | Webhook | WebhookConnection | WebhookAggregator | WebhookGroupBy | WebhookConnectionId | WebhookConnectionCreated_At | WebhookConnectionUpdated_At | WebhookConnectionName | WebhookConnectionPublished_At | CreateWebhookPayload | UpdateWebhookPayload | DeleteWebhookPayload | I18NLocale | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentContentContact | ComponentContentGalleryImage | ComponentContentImage | ComponentContentInfoColumn | ComponentContentPictureList | ComponentContentRichText | ComponentContentSocial | ComponentContentTechnologies | ComponentNavigationInternalLink;
>>>>>>> feat(update) types

export type InputId = {
  id: Scalars['ID'];
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  aboutUs?: Maybe<AboutUs>;
  aboutuses?: Maybe<Array<Maybe<AboutUs>>>;
  aboutusesConnection?: Maybe<AboutUsConnection>;
  aboutWeAreImageCarousel?: Maybe<AboutWeAreImageCarousel>;
  brandValue?: Maybe<BrandValue>;
  brandValues?: Maybe<Array<Maybe<BrandValue>>>;
  brandValuesConnection?: Maybe<BrandValueConnection>;
  careerOffering?: Maybe<CareerOfferings>;
  careerOfferings?: Maybe<Array<Maybe<CareerOfferings>>>;
  careerOfferingsConnection?: Maybe<CareerOfferingsConnection>;
  career?: Maybe<Career>;
  caseStudyMeta?: Maybe<CaseStudyMeta>;
  caseStudyMetas?: Maybe<Array<Maybe<CaseStudyMeta>>>;
  caseStudyMetasConnection?: Maybe<CaseStudyMetaConnection>;
  caseStudy?: Maybe<CaseStudy>;
  caseStudies?: Maybe<Array<Maybe<CaseStudy>>>;
  caseStudiesConnection?: Maybe<CaseStudyConnection>;
  contact?: Maybe<Contact>;
  contacts?: Maybe<Array<Maybe<Contact>>>;
  contactsConnection?: Maybe<ContactConnection>;
  footer?: Maybe<Footer>;
  header?: Maybe<Header>;
  headers?: Maybe<Array<Maybe<Header>>>;
  headersConnection?: Maybe<HeaderConnection>;
  homepageNew?: Maybe<HomepageNew>;
  homepage?: Maybe<Homepage>;
  homepages?: Maybe<Array<Maybe<Homepage>>>;
  homepagesConnection?: Maybe<HomepageConnection>;
  hqGallery?: Maybe<HqGallery>;
  hqGalleries?: Maybe<Array<Maybe<HqGallery>>>;
  hqGalleriesConnection?: Maybe<HqGalleryConnection>;
  job?: Maybe<Job>;
  jobs?: Maybe<Array<Maybe<Job>>>;
  jobsConnection?: Maybe<JobConnection>;
  language?: Maybe<Language>;
  languages?: Maybe<Array<Maybe<Language>>>;
  languagesConnection?: Maybe<LanguageConnection>;
  menu?: Maybe<Menu>;
  menus?: Maybe<Array<Maybe<Menu>>>;
  menusConnection?: Maybe<MenuConnection>;
  page404?: Maybe<Page404>;
  page404s?: Maybe<Array<Maybe<Page404>>>;
  page404sConnection?: Maybe<Page404Connection>;
  product?: Maybe<Products>;
  products?: Maybe<Array<Maybe<Products>>>;
  productsConnection?: Maybe<ProductsConnection>;
  skill?: Maybe<Skill>;
  skills?: Maybe<Array<Maybe<Skill>>>;
  skillsConnection?: Maybe<SkillConnection>;
  socialNetwork?: Maybe<SocialNetwork>;
  socialNetworks?: Maybe<Array<Maybe<SocialNetwork>>>;
  socialNetworksConnection?: Maybe<SocialNetworkConnection>;
  team?: Maybe<Team>;
  teams?: Maybe<Array<Maybe<Team>>>;
  teamsConnection?: Maybe<TeamConnection>;
  techList?: Maybe<TechList>;
  techLists?: Maybe<Array<Maybe<TechList>>>;
  techListsConnection?: Maybe<TechListConnection>;
  webhook?: Maybe<Webhook>;
  webhooks?: Maybe<Array<Maybe<Webhook>>>;
  webhooksConnection?: Maybe<WebhookConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryAboutUsArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryAboutusesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryAboutusesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryAboutWeAreImageCarouselArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryBrandValueArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryBrandValuesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryBrandValuesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryCareerOfferingArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryCareerOfferingsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryCareerOfferingsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryCareerArgs = {
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryCaseStudyMetaArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryCaseStudyMetasArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryCaseStudyMetasConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryCaseStudyArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryCaseStudiesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryCaseStudiesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryContactArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryContactsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryContactsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFooterArgs = {
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryHeaderArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryHeadersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryHeadersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryHomepageNewArgs = {
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryHomepageArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryHomepagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryHomepagesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryHqGalleryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryHqGalleriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryHqGalleriesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryJobArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryJobsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryJobsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryLanguageArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryLanguagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryLanguagesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryMenuArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryMenusArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryMenusConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryPage404Args = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryPage404sArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryPage404sConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryProductsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['String']>;
};


export type QueryProductsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  locale?: Maybe<Scalars['String']>;
};


export type QuerySkillArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QuerySkillsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QuerySkillsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QuerySocialNetworkArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QuerySocialNetworksArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QuerySocialNetworksConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryTeamArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryTeamsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryTeamsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryTechListArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryTechListsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryTechListsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryWebhookArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryWebhooksArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryWebhooksConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAboutUs?: Maybe<CreateAboutUsPayload>;
  updateAboutUs?: Maybe<UpdateAboutUsPayload>;
  deleteAboutUs?: Maybe<DeleteAboutUsPayload>;
  updateAboutWeAreImageCarousel?: Maybe<UpdateAboutWeAreImageCarouselPayload>;
  deleteAboutWeAreImageCarousel?: Maybe<DeleteAboutWeAreImageCarouselPayload>;
  createBrandValue?: Maybe<CreateBrandValuePayload>;
  updateBrandValue?: Maybe<UpdateBrandValuePayload>;
  deleteBrandValue?: Maybe<DeleteBrandValuePayload>;
  createCareerOffering?: Maybe<CreateCareerOfferingPayload>;
  updateCareerOffering?: Maybe<UpdateCareerOfferingPayload>;
  deleteCareerOffering?: Maybe<DeleteCareerOfferingPayload>;
  updateCareer?: Maybe<UpdateCareerPayload>;
  deleteCareer?: Maybe<DeleteCareerPayload>;
  createCaseStudyMeta?: Maybe<CreateCaseStudyMetaPayload>;
  updateCaseStudyMeta?: Maybe<UpdateCaseStudyMetaPayload>;
  deleteCaseStudyMeta?: Maybe<DeleteCaseStudyMetaPayload>;
  createCaseStudy?: Maybe<CreateCaseStudyPayload>;
  updateCaseStudy?: Maybe<UpdateCaseStudyPayload>;
  deleteCaseStudy?: Maybe<DeleteCaseStudyPayload>;
  createContact?: Maybe<CreateContactPayload>;
  updateContact?: Maybe<UpdateContactPayload>;
  deleteContact?: Maybe<DeleteContactPayload>;
  updateFooter?: Maybe<UpdateFooterPayload>;
  deleteFooter?: Maybe<DeleteFooterPayload>;
  createHeader?: Maybe<CreateHeaderPayload>;
  updateHeader?: Maybe<UpdateHeaderPayload>;
  deleteHeader?: Maybe<DeleteHeaderPayload>;
  updateHomepageNew?: Maybe<UpdateHomepageNewPayload>;
  deleteHomepageNew?: Maybe<DeleteHomepageNewPayload>;
  createHomepage?: Maybe<CreateHomepagePayload>;
  updateHomepage?: Maybe<UpdateHomepagePayload>;
  deleteHomepage?: Maybe<DeleteHomepagePayload>;
  createHqGallery?: Maybe<CreateHqGalleryPayload>;
  updateHqGallery?: Maybe<UpdateHqGalleryPayload>;
  deleteHqGallery?: Maybe<DeleteHqGalleryPayload>;
  createJob?: Maybe<CreateJobPayload>;
  updateJob?: Maybe<UpdateJobPayload>;
  deleteJob?: Maybe<DeleteJobPayload>;
  createLanguage?: Maybe<CreateLanguagePayload>;
  updateLanguage?: Maybe<UpdateLanguagePayload>;
  deleteLanguage?: Maybe<DeleteLanguagePayload>;
  createMenu?: Maybe<CreateMenuPayload>;
  updateMenu?: Maybe<UpdateMenuPayload>;
  deleteMenu?: Maybe<DeleteMenuPayload>;
  createPage404?: Maybe<CreatePage404Payload>;
  updatePage404?: Maybe<UpdatePage404Payload>;
  deletePage404?: Maybe<DeletePage404Payload>;
  createProduct?: Maybe<CreateProductPayload>;
  updateProduct?: Maybe<UpdateProductPayload>;
  deleteProduct?: Maybe<DeleteProductPayload>;
  createSkill?: Maybe<CreateSkillPayload>;
  updateSkill?: Maybe<UpdateSkillPayload>;
  deleteSkill?: Maybe<DeleteSkillPayload>;
  createSocialNetwork?: Maybe<CreateSocialNetworkPayload>;
  updateSocialNetwork?: Maybe<UpdateSocialNetworkPayload>;
  deleteSocialNetwork?: Maybe<DeleteSocialNetworkPayload>;
  createTeam?: Maybe<CreateTeamPayload>;
  updateTeam?: Maybe<UpdateTeamPayload>;
  deleteTeam?: Maybe<DeleteTeamPayload>;
  createTechList?: Maybe<CreateTechListPayload>;
  updateTechList?: Maybe<UpdateTechListPayload>;
  deleteTechList?: Maybe<DeleteTechListPayload>;
  createWebhook?: Maybe<CreateWebhookPayload>;
  updateWebhook?: Maybe<UpdateWebhookPayload>;
  deleteWebhook?: Maybe<DeleteWebhookPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  createCareerLocalization: Career;
<<<<<<< HEAD
  createCaseStudyLocalization: CaseStudy;
=======
>>>>>>> rebase(Reference Page)
  createFooterLocalization: Footer;
  createHomepageNewLocalization: HomepageNew;
  createProductLocalization: Products;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateAboutUsArgs = {
  input?: Maybe<CreateAboutUsInput>;
};


export type MutationUpdateAboutUsArgs = {
  input?: Maybe<UpdateAboutUsInput>;
};


export type MutationDeleteAboutUsArgs = {
  input?: Maybe<DeleteAboutUsInput>;
};


export type MutationUpdateAboutWeAreImageCarouselArgs = {
  input?: Maybe<UpdateAboutWeAreImageCarouselInput>;
};


export type MutationCreateBrandValueArgs = {
  input?: Maybe<CreateBrandValueInput>;
};


export type MutationUpdateBrandValueArgs = {
  input?: Maybe<UpdateBrandValueInput>;
};


export type MutationDeleteBrandValueArgs = {
  input?: Maybe<DeleteBrandValueInput>;
};


export type MutationCreateCareerOfferingArgs = {
  input?: Maybe<CreateCareerOfferingInput>;
};


export type MutationUpdateCareerOfferingArgs = {
  input?: Maybe<UpdateCareerOfferingInput>;
};


export type MutationDeleteCareerOfferingArgs = {
  input?: Maybe<DeleteCareerOfferingInput>;
};


export type MutationUpdateCareerArgs = {
  input?: Maybe<UpdateCareerInput>;
  locale?: Maybe<Scalars['String']>;
};


export type MutationDeleteCareerArgs = {
  locale?: Maybe<Scalars['String']>;
};


export type MutationCreateCaseStudyMetaArgs = {
  input?: Maybe<CreateCaseStudyMetaInput>;
};


export type MutationUpdateCaseStudyMetaArgs = {
  input?: Maybe<UpdateCaseStudyMetaInput>;
};


export type MutationDeleteCaseStudyMetaArgs = {
  input?: Maybe<DeleteCaseStudyMetaInput>;
};


export type MutationCreateCaseStudyArgs = {
  input?: Maybe<CreateCaseStudyInput>;
};


export type MutationUpdateCaseStudyArgs = {
  input?: Maybe<UpdateCaseStudyInput>;
};


export type MutationDeleteCaseStudyArgs = {
  input?: Maybe<DeleteCaseStudyInput>;
};


export type MutationCreateContactArgs = {
  input?: Maybe<CreateContactInput>;
};


export type MutationUpdateContactArgs = {
  input?: Maybe<UpdateContactInput>;
};


export type MutationDeleteContactArgs = {
  input?: Maybe<DeleteContactInput>;
};


export type MutationUpdateFooterArgs = {
  input?: Maybe<UpdateFooterInput>;
  locale?: Maybe<Scalars['String']>;
};


export type MutationDeleteFooterArgs = {
  locale?: Maybe<Scalars['String']>;
};


export type MutationCreateHeaderArgs = {
  input?: Maybe<CreateHeaderInput>;
};


export type MutationUpdateHeaderArgs = {
  input?: Maybe<UpdateHeaderInput>;
};


export type MutationDeleteHeaderArgs = {
  input?: Maybe<DeleteHeaderInput>;
};


export type MutationUpdateHomepageNewArgs = {
  input?: Maybe<UpdateHomepageNewInput>;
  locale?: Maybe<Scalars['String']>;
};


export type MutationDeleteHomepageNewArgs = {
  locale?: Maybe<Scalars['String']>;
};


export type MutationCreateHomepageArgs = {
  input?: Maybe<CreateHomepageInput>;
};


export type MutationUpdateHomepageArgs = {
  input?: Maybe<UpdateHomepageInput>;
};


export type MutationDeleteHomepageArgs = {
  input?: Maybe<DeleteHomepageInput>;
};


export type MutationCreateHqGalleryArgs = {
  input?: Maybe<CreateHqGalleryInput>;
};


export type MutationUpdateHqGalleryArgs = {
  input?: Maybe<UpdateHqGalleryInput>;
};


export type MutationDeleteHqGalleryArgs = {
  input?: Maybe<DeleteHqGalleryInput>;
};


export type MutationCreateJobArgs = {
  input?: Maybe<CreateJobInput>;
};


export type MutationUpdateJobArgs = {
  input?: Maybe<UpdateJobInput>;
};


export type MutationDeleteJobArgs = {
  input?: Maybe<DeleteJobInput>;
};


export type MutationCreateLanguageArgs = {
  input?: Maybe<CreateLanguageInput>;
};


export type MutationUpdateLanguageArgs = {
  input?: Maybe<UpdateLanguageInput>;
};


export type MutationDeleteLanguageArgs = {
  input?: Maybe<DeleteLanguageInput>;
};


export type MutationCreateMenuArgs = {
  input?: Maybe<CreateMenuInput>;
};


export type MutationUpdateMenuArgs = {
  input?: Maybe<UpdateMenuInput>;
};


export type MutationDeleteMenuArgs = {
  input?: Maybe<DeleteMenuInput>;
};


export type MutationCreatePage404Args = {
  input?: Maybe<CreatePage404Input>;
};


export type MutationUpdatePage404Args = {
  input?: Maybe<UpdatePage404Input>;
};


export type MutationDeletePage404Args = {
  input?: Maybe<DeletePage404Input>;
};


export type MutationCreateProductArgs = {
  input?: Maybe<CreateProductInput>;
};


export type MutationUpdateProductArgs = {
  input?: Maybe<UpdateProductInput>;
};


export type MutationDeleteProductArgs = {
  input?: Maybe<DeleteProductInput>;
};


export type MutationCreateSkillArgs = {
  input?: Maybe<CreateSkillInput>;
};


export type MutationUpdateSkillArgs = {
  input?: Maybe<UpdateSkillInput>;
};


export type MutationDeleteSkillArgs = {
  input?: Maybe<DeleteSkillInput>;
};


export type MutationCreateSocialNetworkArgs = {
  input?: Maybe<CreateSocialNetworkInput>;
};


export type MutationUpdateSocialNetworkArgs = {
  input?: Maybe<UpdateSocialNetworkInput>;
};


export type MutationDeleteSocialNetworkArgs = {
  input?: Maybe<DeleteSocialNetworkInput>;
};


export type MutationCreateTeamArgs = {
  input?: Maybe<CreateTeamInput>;
};


export type MutationUpdateTeamArgs = {
  input?: Maybe<UpdateTeamInput>;
};


export type MutationDeleteTeamArgs = {
  input?: Maybe<DeleteTeamInput>;
};


export type MutationCreateTechListArgs = {
  input?: Maybe<CreateTechListInput>;
};


export type MutationUpdateTechListArgs = {
  input?: Maybe<UpdateTechListInput>;
};


export type MutationDeleteTechListArgs = {
  input?: Maybe<DeleteTechListInput>;
};


export type MutationCreateWebhookArgs = {
  input?: Maybe<CreateWebhookInput>;
};


export type MutationUpdateWebhookArgs = {
  input?: Maybe<UpdateWebhookInput>;
};


export type MutationDeleteWebhookArgs = {
  input?: Maybe<DeleteWebhookInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationCreateCareerLocalizationArgs = {
  input: UpdateCareerInput;
};


<<<<<<< HEAD
export type MutationCreateCaseStudyLocalizationArgs = {
  input: UpdateCaseStudyInput;
};


=======
>>>>>>> rebase(Reference Page)
export type MutationCreateFooterLocalizationArgs = {
  input: UpdateFooterInput;
};


export type MutationCreateHomepageNewLocalizationArgs = {
  input: UpdateHomepageNewInput;
};


export type MutationCreateProductLocalizationArgs = {
  input: UpdateProductInput;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  info?: Maybe<FileInfoInput>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};







export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = (
  { __typename?: 'Query' }
  & { aboutuses?: Maybe<Array<Maybe<(
    { __typename?: 'AboutUs' }
    & Pick<AboutUs, 'id' | 'language' | 'created_at' | 'updated_at' | 'heroDescription' | 'heroHeadlineTop' | 'heroHeadlineBottom' | 'heroArrowTitle' | 'weAreHeadline' | 'weAreDescription' | 'weAreArrowTitle' | 'skillsHeadline' | 'skillsDescription' | 'technologiesDescription' | 'valuesHeadline' | 'teamHeadline' | 'hqHeadline' | 'hqDescription' | 'careerHeadline' | 'careerDescription' | 'careerCTATitle' | 'blogHeadline' | 'blogReadMore' | 'published_at' | 'hqCTATitle' | 'hqWeAreHereDescription'>
    & { heroLogo?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url' | 'alternativeText'>
    )>, technologiesImage?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url' | 'alternativeText'>
    )>, teams?: Maybe<Array<Maybe<(
      { __typename?: 'Team' }
      & Pick<Team, 'name' | 'position'>
      & { video?: Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<UploadFile, 'url' | 'alternativeText'>
      )> }
    )>>>, careerCTAImage?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url' | 'alternativeText'>
    )>, weAreImageCarousel?: Maybe<Array<Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'id' | 'url' | 'alternativeText'>
    )>>>, skills?: Maybe<Array<Maybe<(
      { __typename?: 'Skill' }
      & Pick<Skill, 'id' | 'title' | 'description' | 'titleColorHash'>
    )>>>, brandValues?: Maybe<Array<Maybe<(
      { __typename?: 'BrandValue' }
      & Pick<BrandValue, 'id' | 'headline' | 'backgroundNumber' | 'description'>
      & { image?: Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<UploadFile, 'url' | 'alternativeText'>
      )> }
    )>>>, hqImageGrid?: Maybe<Array<Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'id' | 'url' | 'alternativeText'>
    )>>>, hqWeAreHereImage?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'id' | 'url' | 'alternativeText'>
    )>, arrow?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url' | 'alternativeText'>
    )> }
  )>>> }
);

export type CareerQueryVariables = Exact<{ [key: string]: never; }>;


export type CareerQuery = (
  { __typename?: 'Query' }
  & { career?: Maybe<(
    { __typename?: 'Career' }
    & Pick<Career, 'id' | 'created_at' | 'updated_at' | 'title' | 'description' | 'careerWho' | 'somethingElseHeading' | 'somethingElseDescription' | 'somethingElseContact' | 'careerWhy' | 'careerWhyLook' | 'careerWhatHeading'>
    & { technologies?: Maybe<(
      { __typename?: 'ComponentContentTechnologies' }
      & Pick<ComponentContentTechnologies, 'id' | 'technologies' | 'description'>
      & { images?: Maybe<Array<Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<UploadFile, 'id' | 'url' | 'alternativeText'>
      )>>> }
    )>, careerPositions?: Maybe<Array<Maybe<(
      { __typename?: 'CareerOfferings' }
      & Pick<CareerOfferings, 'id' | 'title' | 'color' | 'perex' | 'slug'>
    )>>>, info?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentContentPictureList' }
      & Pick<ComponentContentPictureList, 'id' | 'header' | 'color' | 'description'>
      & { image?: Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<UploadFile, 'url' | 'alternativeText'>
      )> }
    )>>> }
  )> }
);

export type CareerOfferQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type CareerOfferQuery = (
  { __typename?: 'Query' }
  & { careerOfferings?: Maybe<Array<Maybe<(
    { __typename?: 'CareerOfferings' }
    & Pick<CareerOfferings, 'id' | 'language' | 'title' | 'slug' | 'description' | 'careerTechnologiesTitle' | 'careerTechnologiesContent' | 'careerExpectedSkillsTitle' | 'careerExpectedSkillsContent' | 'careerOfferTitle' | 'careerOfferContent' | 'endTitle' | 'endContent' | 'endCTA'>
  )>>> }
);

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_2_Query = (
  { __typename?: 'Query' }
  & { careerOfferings?: Maybe<Array<Maybe<(
    { __typename?: 'CareerOfferings' }
    & Pick<CareerOfferings, 'id' | 'language' | 'title' | 'slug' | 'perex' | 'color'>
  )>>> }
);

export type Unnamed_3_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_3_Query = (
  { __typename?: 'Query' }
  & { caseStudies?: Maybe<Array<Maybe<(
    { __typename?: 'CaseStudy' }
    & Pick<CaseStudy, 'id' | 'language' | 'title' | 'height'>
    & { image?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url' | 'alternativeText'>
    )> }
  )>>> }
);

export type Unnamed_4_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_4_Query = (
  { __typename?: 'Query' }
  & { contacts?: Maybe<Array<Maybe<(
    { __typename?: 'Contact' }
    & Pick<Contact, 'id' | 'language' | 'title' | 'address' | 'taxIdentificationNumbers' | 'taxIdentificationDescription' | 'email' | 'phoneNumber' | 'formSubmit' | 'formTextLabel' | 'formNameLabel' | 'formEmailLabel' | 'formNameWarning' | 'formEmailWarning' | 'formInvalidEmailWarning'>
    & { footerImg?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url' | 'alternativeText'>
    )> }
  )>>> }
);

export type Unnamed_5_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_5_Query = (
  { __typename?: 'Query' }
  & { headers?: Maybe<Array<Maybe<(
    { __typename?: 'Header' }
    & Pick<Header, 'id' | 'language' | 'title' | 'description'>
    & { logo?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url'>
    )> }
  )>>> }
);

export type Unnamed_6_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_6_Query = (
  { __typename?: 'Query' }
  & { homepages?: Maybe<Array<Maybe<(
    { __typename?: 'Homepage' }
    & Pick<Homepage, 'id' | 'language' | 'clickToStop' | 'descriptionAboveLine' | 'descriptionBellowLine'>
    & { logo?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url'>
    )> }
  )>>> }
);

<<<<<<< HEAD
export type HqGalleriesQueryVariables = Exact<{ [key: string]: never; }>;


export type HqGalleriesQuery = (
  { __typename?: 'Query' }
  & { hqGalleries?: Maybe<Array<Maybe<(
    { __typename?: 'HqGallery' }
    & { galleryCollection?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentContentGalleryImage' }
      & Pick<ComponentContentGalleryImage, 'spacing' | 'rows'>
      & { images?: Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<UploadFile, 'url' | 'alternativeText' | 'id'>
      )> }
    )>>> }
  )>>> }
);

export type Unnamed_6_QueryVariables = Exact<{ [key: string]: never; }>;
=======
export type Unnamed_7_QueryVariables = Exact<{ [key: string]: never; }>;
>>>>>>> feat(update) types


export type Unnamed_7_Query = (
  { __typename?: 'Query' }
  & { languages?: Maybe<Array<Maybe<(
    { __typename?: 'Language' }
    & Pick<Language, 'id' | 'languageCode' | 'displayName'>
  )>>> }
);

export type Unnamed_8_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_8_Query = (
  { __typename?: 'Query' }
  & { menus?: Maybe<Array<Maybe<(
    { __typename?: 'Menu' }
    & Pick<Menu, 'id' | 'aboutUs' | 'career' | 'contact' | 'homePage' | 'language' | 'menu' | 'reference'>
  )>>> }
);

export type Unnamed_9_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_9_Query = (
  { __typename?: 'Query' }
  & { page404s?: Maybe<Array<Maybe<(
    { __typename?: 'Page404' }
    & Pick<Page404, 'id' | 'language' | 'heading' | 'description' | 'link' | 'bgText'>
    & { image?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url' | 'alternativeText'>
    )> }
  )>>> }
);

export type Unnamed_10_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_10_Query = (
  { __typename?: 'Query' }
  & { socialNetworks?: Maybe<Array<Maybe<(
    { __typename?: 'SocialNetwork' }
    & Pick<SocialNetwork, 'id' | 'name' | 'url'>
  )>>> }
);
