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
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** Input type for dynamic zone content of DynamicTest */
  DynamicTestContentDynamicZoneInput: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type About = {
  readonly __typename?: 'About';
  readonly id: Scalars['ID'];
  readonly created_at: Scalars['DateTime'];
  readonly updated_at: Scalars['DateTime'];
  readonly brandValues?: Maybe<ReadonlyArray<Maybe<ComponentAboutUsBrandValue>>>;
  readonly locale?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly hqGalleries?: Maybe<ReadonlyArray<Maybe<HqGallery>>>;
  readonly imageCarousel?: Maybe<ReadonlyArray<Maybe<UploadFile>>>;
  readonly skills?: Maybe<ReadonlyArray<Maybe<Skill>>>;
  readonly teams?: Maybe<ReadonlyArray<Maybe<Team>>>;
  readonly localizations?: Maybe<ReadonlyArray<Maybe<About>>>;
};


export type AboutHqGalleriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type AboutImageCarouselArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type AboutSkillsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type AboutTeamsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type AboutLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type AboutInput = {
  readonly brandValues?: Maybe<ReadonlyArray<Maybe<ComponentAboutUsBrandValueInput>>>;
  readonly hqGalleries?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly imageCarousel?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly skills?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly teams?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly localizations?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly locale?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type AboutUs = {
  readonly __typename?: 'AboutUs';
  readonly id: Scalars['ID'];
  readonly created_at: Scalars['DateTime'];
  readonly updated_at: Scalars['DateTime'];
  readonly language?: Maybe<Scalars['String']>;
  readonly heroDescription?: Maybe<Scalars['String']>;
  readonly heroLogo?: Maybe<UploadFile>;
  readonly heroHeadlineTop?: Maybe<Scalars['String']>;
  readonly heroHeadlineBottom?: Maybe<Scalars['String']>;
  readonly heroArrowTitle?: Maybe<Scalars['String']>;
  readonly weAreHeadline?: Maybe<Scalars['String']>;
  readonly weAreDescription?: Maybe<Scalars['String']>;
  readonly weAreArrowTitle?: Maybe<Scalars['String']>;
  readonly skillsHeadline?: Maybe<Scalars['String']>;
  readonly skillsDescription?: Maybe<Scalars['String']>;
  readonly technologiesDescription?: Maybe<Scalars['String']>;
  readonly technologiesImage?: Maybe<UploadFile>;
  readonly valuesHeadline?: Maybe<Scalars['String']>;
  readonly teamHeadline?: Maybe<Scalars['String']>;
  readonly hqHeadline?: Maybe<Scalars['String']>;
  readonly careerHeadline?: Maybe<Scalars['String']>;
  readonly careerCTATitle?: Maybe<Scalars['String']>;
  readonly careerCTAImage?: Maybe<UploadFile>;
  readonly blogHeadline?: Maybe<Scalars['String']>;
  readonly hqDescription?: Maybe<Scalars['String']>;
  readonly careerDescription?: Maybe<Scalars['String']>;
  readonly hqWeAreHereDescription?: Maybe<Scalars['String']>;
  readonly hqWeAreHereImage?: Maybe<UploadFile>;
  readonly hqCTATitle?: Maybe<Scalars['String']>;
  readonly blogReadMore?: Maybe<Scalars['String']>;
  readonly arrow?: Maybe<UploadFile>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly weAreImageCarousel?: Maybe<ReadonlyArray<Maybe<UploadFile>>>;
  readonly skills?: Maybe<ReadonlyArray<Maybe<Skill>>>;
  readonly brandValues?: Maybe<ReadonlyArray<Maybe<BrandValue>>>;
  readonly hqImageGrid?: Maybe<ReadonlyArray<Maybe<UploadFile>>>;
  readonly teams?: Maybe<ReadonlyArray<Maybe<Team>>>;
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

export type AboutUsAggregator = {
  readonly __typename?: 'AboutUsAggregator';
  readonly count?: Maybe<Scalars['Int']>;
  readonly totalCount?: Maybe<Scalars['Int']>;
};

export type AboutUsConnection = {
  readonly __typename?: 'AboutUsConnection';
  readonly values?: Maybe<ReadonlyArray<Maybe<AboutUs>>>;
  readonly groupBy?: Maybe<AboutUsGroupBy>;
  readonly aggregate?: Maybe<AboutUsAggregator>;
};

export type AboutUsConnectionArrow = {
  readonly __typename?: 'AboutUsConnectionArrow';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionBlogHeadline = {
  readonly __typename?: 'AboutUsConnectionBlogHeadline';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionBlogReadMore = {
  readonly __typename?: 'AboutUsConnectionBlogReadMore';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionCareerCtaImage = {
  readonly __typename?: 'AboutUsConnectionCareerCTAImage';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionCareerCtaTitle = {
  readonly __typename?: 'AboutUsConnectionCareerCTATitle';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionCareerDescription = {
  readonly __typename?: 'AboutUsConnectionCareerDescription';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionCareerHeadline = {
  readonly __typename?: 'AboutUsConnectionCareerHeadline';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionCreated_At = {
  readonly __typename?: 'AboutUsConnectionCreated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionHeroArrowTitle = {
  readonly __typename?: 'AboutUsConnectionHeroArrowTitle';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionHeroDescription = {
  readonly __typename?: 'AboutUsConnectionHeroDescription';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionHeroHeadlineBottom = {
  readonly __typename?: 'AboutUsConnectionHeroHeadlineBottom';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionHeroHeadlineTop = {
  readonly __typename?: 'AboutUsConnectionHeroHeadlineTop';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionHeroLogo = {
  readonly __typename?: 'AboutUsConnectionHeroLogo';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionHqCtaTitle = {
  readonly __typename?: 'AboutUsConnectionHqCTATitle';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionHqDescription = {
  readonly __typename?: 'AboutUsConnectionHqDescription';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionHqHeadline = {
  readonly __typename?: 'AboutUsConnectionHqHeadline';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionHqWeAreHereDescription = {
  readonly __typename?: 'AboutUsConnectionHqWeAreHereDescription';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionHqWeAreHereImage = {
  readonly __typename?: 'AboutUsConnectionHqWeAreHereImage';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionId = {
  readonly __typename?: 'AboutUsConnectionId';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionLanguage = {
  readonly __typename?: 'AboutUsConnectionLanguage';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionPublished_At = {
  readonly __typename?: 'AboutUsConnectionPublished_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionSkillsDescription = {
  readonly __typename?: 'AboutUsConnectionSkillsDescription';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionSkillsHeadline = {
  readonly __typename?: 'AboutUsConnectionSkillsHeadline';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionTeamHeadline = {
  readonly __typename?: 'AboutUsConnectionTeamHeadline';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionTechnologiesDescription = {
  readonly __typename?: 'AboutUsConnectionTechnologiesDescription';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionTechnologiesImage = {
  readonly __typename?: 'AboutUsConnectionTechnologiesImage';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionUpdated_At = {
  readonly __typename?: 'AboutUsConnectionUpdated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionValuesHeadline = {
  readonly __typename?: 'AboutUsConnectionValuesHeadline';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionWeAreArrowTitle = {
  readonly __typename?: 'AboutUsConnectionWeAreArrowTitle';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionWeAreDescription = {
  readonly __typename?: 'AboutUsConnectionWeAreDescription';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<AboutUsConnection>;
};

export type AboutUsConnectionWeAreHeadline = {
  readonly __typename?: 'AboutUsConnectionWeAreHeadline';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<AboutUsConnection>;
};

export type AboutUsGroupBy = {
  readonly __typename?: 'AboutUsGroupBy';
  readonly id?: Maybe<ReadonlyArray<Maybe<AboutUsConnectionId>>>;
  readonly created_at?: Maybe<ReadonlyArray<Maybe<AboutUsConnectionCreated_At>>>;
  readonly updated_at?: Maybe<ReadonlyArray<Maybe<AboutUsConnectionUpdated_At>>>;
  readonly language?: Maybe<ReadonlyArray<Maybe<AboutUsConnectionLanguage>>>;
  readonly heroDescription?: Maybe<ReadonlyArray<Maybe<AboutUsConnectionHeroDescription>>>;
  readonly heroLogo?: Maybe<ReadonlyArray<Maybe<AboutUsConnectionHeroLogo>>>;
  readonly heroHeadlineTop?: Maybe<ReadonlyArray<Maybe<AboutUsConnectionHeroHeadlineTop>>>;
  readonly heroHeadlineBottom?: Maybe<ReadonlyArray<Maybe<AboutUsConnectionHeroHeadlineBottom>>>;
  readonly heroArrowTitle?: Maybe<ReadonlyArray<Maybe<AboutUsConnectionHeroArrowTitle>>>;
  readonly weAreHeadline?: Maybe<ReadonlyArray<Maybe<AboutUsConnectionWeAreHeadline>>>;
  readonly weAreDescription?: Maybe<ReadonlyArray<Maybe<AboutUsConnectionWeAreDescription>>>;
  readonly weAreArrowTitle?: Maybe<ReadonlyArray<Maybe<AboutUsConnectionWeAreArrowTitle>>>;
  readonly skillsHeadline?: Maybe<ReadonlyArray<Maybe<AboutUsConnectionSkillsHeadline>>>;
  readonly skillsDescription?: Maybe<ReadonlyArray<Maybe<AboutUsConnectionSkillsDescription>>>;
  readonly technologiesDescription?: Maybe<ReadonlyArray<Maybe<AboutUsConnectionTechnologiesDescription>>>;
  readonly technologiesImage?: Maybe<ReadonlyArray<Maybe<AboutUsConnectionTechnologiesImage>>>;
  readonly valuesHeadline?: Maybe<ReadonlyArray<Maybe<AboutUsConnectionValuesHeadline>>>;
  readonly teamHeadline?: Maybe<ReadonlyArray<Maybe<AboutUsConnectionTeamHeadline>>>;
  readonly hqHeadline?: Maybe<ReadonlyArray<Maybe<AboutUsConnectionHqHeadline>>>;
  readonly careerHeadline?: Maybe<ReadonlyArray<Maybe<AboutUsConnectionCareerHeadline>>>;
  readonly careerCTATitle?: Maybe<ReadonlyArray<Maybe<AboutUsConnectionCareerCtaTitle>>>;
  readonly careerCTAImage?: Maybe<ReadonlyArray<Maybe<AboutUsConnectionCareerCtaImage>>>;
  readonly blogHeadline?: Maybe<ReadonlyArray<Maybe<AboutUsConnectionBlogHeadline>>>;
  readonly hqDescription?: Maybe<ReadonlyArray<Maybe<AboutUsConnectionHqDescription>>>;
  readonly careerDescription?: Maybe<ReadonlyArray<Maybe<AboutUsConnectionCareerDescription>>>;
  readonly hqWeAreHereDescription?: Maybe<ReadonlyArray<Maybe<AboutUsConnectionHqWeAreHereDescription>>>;
  readonly hqWeAreHereImage?: Maybe<ReadonlyArray<Maybe<AboutUsConnectionHqWeAreHereImage>>>;
  readonly hqCTATitle?: Maybe<ReadonlyArray<Maybe<AboutUsConnectionHqCtaTitle>>>;
  readonly blogReadMore?: Maybe<ReadonlyArray<Maybe<AboutUsConnectionBlogReadMore>>>;
  readonly arrow?: Maybe<ReadonlyArray<Maybe<AboutUsConnectionArrow>>>;
  readonly published_at?: Maybe<ReadonlyArray<Maybe<AboutUsConnectionPublished_At>>>;
};

export type AboutUsInput = {
  readonly language?: Maybe<Scalars['String']>;
  readonly heroDescription?: Maybe<Scalars['String']>;
  readonly heroLogo?: Maybe<Scalars['ID']>;
  readonly heroHeadlineTop?: Maybe<Scalars['String']>;
  readonly heroHeadlineBottom?: Maybe<Scalars['String']>;
  readonly heroArrowTitle?: Maybe<Scalars['String']>;
  readonly weAreHeadline?: Maybe<Scalars['String']>;
  readonly weAreDescription?: Maybe<Scalars['String']>;
  readonly weAreImageCarousel?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly weAreArrowTitle?: Maybe<Scalars['String']>;
  readonly skillsHeadline?: Maybe<Scalars['String']>;
  readonly skills?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly skillsDescription?: Maybe<Scalars['String']>;
  readonly technologiesDescription?: Maybe<Scalars['String']>;
  readonly technologiesImage?: Maybe<Scalars['ID']>;
  readonly valuesHeadline?: Maybe<Scalars['String']>;
  readonly brandValues?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly teamHeadline?: Maybe<Scalars['String']>;
  readonly hqHeadline?: Maybe<Scalars['String']>;
  readonly hqImageGrid?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly careerHeadline?: Maybe<Scalars['String']>;
  readonly careerCTATitle?: Maybe<Scalars['String']>;
  readonly careerCTAImage?: Maybe<Scalars['ID']>;
  readonly blogHeadline?: Maybe<Scalars['String']>;
  readonly hqDescription?: Maybe<Scalars['String']>;
  readonly careerDescription?: Maybe<Scalars['String']>;
  readonly hqWeAreHereDescription?: Maybe<Scalars['String']>;
  readonly hqWeAreHereImage?: Maybe<Scalars['ID']>;
  readonly hqCTATitle?: Maybe<Scalars['String']>;
  readonly blogReadMore?: Maybe<Scalars['String']>;
  readonly arrow?: Maybe<Scalars['ID']>;
  readonly teams?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type AboutWeAreImageCarousel = {
  readonly __typename?: 'AboutWeAreImageCarousel';
  readonly id: Scalars['ID'];
  readonly created_at: Scalars['DateTime'];
  readonly updated_at: Scalars['DateTime'];
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly images?: Maybe<ReadonlyArray<Maybe<UploadFile>>>;
};


export type AboutWeAreImageCarouselImagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type AboutWeAreImageCarouselInput = {
  readonly images?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type AdminUser = {
  readonly __typename?: 'AdminUser';
  readonly id: Scalars['ID'];
  readonly username?: Maybe<Scalars['String']>;
  readonly firstname: Scalars['String'];
  readonly lastname: Scalars['String'];
};

export type BrandValue = {
  readonly __typename?: 'BrandValue';
  readonly id: Scalars['ID'];
  readonly created_at: Scalars['DateTime'];
  readonly updated_at: Scalars['DateTime'];
  readonly headline?: Maybe<Scalars['String']>;
  readonly backgroundNumber?: Maybe<Scalars['Int']>;
  readonly image?: Maybe<UploadFile>;
  readonly description?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
};

export type BrandValueAggregator = {
  readonly __typename?: 'BrandValueAggregator';
  readonly count?: Maybe<Scalars['Int']>;
  readonly totalCount?: Maybe<Scalars['Int']>;
  readonly sum?: Maybe<BrandValueAggregatorSum>;
  readonly avg?: Maybe<BrandValueAggregatorAvg>;
  readonly min?: Maybe<BrandValueAggregatorMin>;
  readonly max?: Maybe<BrandValueAggregatorMax>;
};

export type BrandValueAggregatorAvg = {
  readonly __typename?: 'BrandValueAggregatorAvg';
  readonly backgroundNumber?: Maybe<Scalars['Float']>;
};

export type BrandValueAggregatorMax = {
  readonly __typename?: 'BrandValueAggregatorMax';
  readonly backgroundNumber?: Maybe<Scalars['Float']>;
};

export type BrandValueAggregatorMin = {
  readonly __typename?: 'BrandValueAggregatorMin';
  readonly backgroundNumber?: Maybe<Scalars['Float']>;
};

export type BrandValueAggregatorSum = {
  readonly __typename?: 'BrandValueAggregatorSum';
  readonly backgroundNumber?: Maybe<Scalars['Float']>;
};

export type BrandValueConnection = {
  readonly __typename?: 'BrandValueConnection';
  readonly values?: Maybe<ReadonlyArray<Maybe<BrandValue>>>;
  readonly groupBy?: Maybe<BrandValueGroupBy>;
  readonly aggregate?: Maybe<BrandValueAggregator>;
};

export type BrandValueConnectionBackgroundNumber = {
  readonly __typename?: 'BrandValueConnectionBackgroundNumber';
  readonly key?: Maybe<Scalars['Int']>;
  readonly connection?: Maybe<BrandValueConnection>;
};

export type BrandValueConnectionCreated_At = {
  readonly __typename?: 'BrandValueConnectionCreated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<BrandValueConnection>;
};

export type BrandValueConnectionDescription = {
  readonly __typename?: 'BrandValueConnectionDescription';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<BrandValueConnection>;
};

export type BrandValueConnectionHeadline = {
  readonly __typename?: 'BrandValueConnectionHeadline';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<BrandValueConnection>;
};

export type BrandValueConnectionId = {
  readonly __typename?: 'BrandValueConnectionId';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<BrandValueConnection>;
};

export type BrandValueConnectionImage = {
  readonly __typename?: 'BrandValueConnectionImage';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<BrandValueConnection>;
};

export type BrandValueConnectionPublished_At = {
  readonly __typename?: 'BrandValueConnectionPublished_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<BrandValueConnection>;
};

export type BrandValueConnectionUpdated_At = {
  readonly __typename?: 'BrandValueConnectionUpdated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<BrandValueConnection>;
};

export type BrandValueGroupBy = {
  readonly __typename?: 'BrandValueGroupBy';
  readonly id?: Maybe<ReadonlyArray<Maybe<BrandValueConnectionId>>>;
  readonly created_at?: Maybe<ReadonlyArray<Maybe<BrandValueConnectionCreated_At>>>;
  readonly updated_at?: Maybe<ReadonlyArray<Maybe<BrandValueConnectionUpdated_At>>>;
  readonly headline?: Maybe<ReadonlyArray<Maybe<BrandValueConnectionHeadline>>>;
  readonly backgroundNumber?: Maybe<ReadonlyArray<Maybe<BrandValueConnectionBackgroundNumber>>>;
  readonly image?: Maybe<ReadonlyArray<Maybe<BrandValueConnectionImage>>>;
  readonly description?: Maybe<ReadonlyArray<Maybe<BrandValueConnectionDescription>>>;
  readonly published_at?: Maybe<ReadonlyArray<Maybe<BrandValueConnectionPublished_At>>>;
};

export type BrandValueInput = {
  readonly headline?: Maybe<Scalars['String']>;
  readonly backgroundNumber?: Maybe<Scalars['Int']>;
  readonly image?: Maybe<Scalars['ID']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type Career = {
  readonly __typename?: 'Career';
  readonly id: Scalars['ID'];
  readonly created_at: Scalars['DateTime'];
  readonly updated_at: Scalars['DateTime'];
  readonly locale?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly careerPositions?: Maybe<ReadonlyArray<Maybe<CareerOfferings>>>;
  readonly technologies?: Maybe<ReadonlyArray<Maybe<UploadFile>>>;
  readonly localizations?: Maybe<ReadonlyArray<Maybe<Career>>>;
};


export type CareerCareerPositionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type CareerTechnologiesArgs = {
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
  readonly careerPositions?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly technologies?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly localizations?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly locale?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type CareerOfferingInput = {
  readonly language?: Maybe<Scalars['String']>;
  readonly title: Scalars['String'];
  readonly description?: Maybe<Scalars['String']>;
  readonly careerTechnologiesTitle?: Maybe<Scalars['String']>;
  readonly careerTechnologiesContent?: Maybe<Scalars['String']>;
  readonly careerExpectedSkillsTitle?: Maybe<Scalars['String']>;
  readonly careerExpectedSkillsContent?: Maybe<Scalars['String']>;
  readonly careerOfferTitle?: Maybe<Scalars['String']>;
  readonly careerOfferContent?: Maybe<Scalars['String']>;
  readonly endTitle?: Maybe<Scalars['String']>;
  readonly endContent?: Maybe<Scalars['String']>;
  readonly endCTA?: Maybe<Scalars['String']>;
  readonly slug: Scalars['String'];
  readonly color?: Maybe<Scalars['String']>;
  readonly perex?: Maybe<Scalars['String']>;
  readonly localizations?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly locale?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type CareerOfferings = {
  readonly __typename?: 'CareerOfferings';
  readonly id: Scalars['ID'];
  readonly created_at: Scalars['DateTime'];
  readonly updated_at: Scalars['DateTime'];
  readonly language?: Maybe<Scalars['String']>;
  readonly title: Scalars['String'];
  readonly description?: Maybe<Scalars['String']>;
  readonly careerTechnologiesTitle: Scalars['String'];
  readonly careerTechnologiesContent?: Maybe<Scalars['String']>;
  readonly careerExpectedSkillsTitle: Scalars['String'];
  readonly careerExpectedSkillsContent?: Maybe<Scalars['String']>;
  readonly careerOfferTitle: Scalars['String'];
  readonly careerOfferContent?: Maybe<Scalars['String']>;
  readonly endTitle: Scalars['String'];
  readonly endContent?: Maybe<Scalars['String']>;
  readonly endCTA: Scalars['String'];
  readonly slug: Scalars['String'];
  readonly color?: Maybe<Scalars['String']>;
  readonly perex?: Maybe<Scalars['String']>;
  readonly locale?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly localizations?: Maybe<ReadonlyArray<Maybe<CareerOfferings>>>;
};


export type CareerOfferingsLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CareerOfferingsAggregator = {
  readonly __typename?: 'CareerOfferingsAggregator';
  readonly count?: Maybe<Scalars['Int']>;
  readonly totalCount?: Maybe<Scalars['Int']>;
};

export type CareerOfferingsConnection = {
  readonly __typename?: 'CareerOfferingsConnection';
  readonly values?: Maybe<ReadonlyArray<Maybe<CareerOfferings>>>;
  readonly groupBy?: Maybe<CareerOfferingsGroupBy>;
  readonly aggregate?: Maybe<CareerOfferingsAggregator>;
};

export type CareerOfferingsConnectionCareerExpectedSkillsContent = {
  readonly __typename?: 'CareerOfferingsConnectionCareerExpectedSkillsContent';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionCareerExpectedSkillsTitle = {
  readonly __typename?: 'CareerOfferingsConnectionCareerExpectedSkillsTitle';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionCareerOfferContent = {
  readonly __typename?: 'CareerOfferingsConnectionCareerOfferContent';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionCareerOfferTitle = {
  readonly __typename?: 'CareerOfferingsConnectionCareerOfferTitle';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionCareerTechnologiesContent = {
  readonly __typename?: 'CareerOfferingsConnectionCareerTechnologiesContent';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionCareerTechnologiesTitle = {
  readonly __typename?: 'CareerOfferingsConnectionCareerTechnologiesTitle';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionColor = {
  readonly __typename?: 'CareerOfferingsConnectionColor';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionCreated_At = {
  readonly __typename?: 'CareerOfferingsConnectionCreated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionDescription = {
  readonly __typename?: 'CareerOfferingsConnectionDescription';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionEndCta = {
  readonly __typename?: 'CareerOfferingsConnectionEndCTA';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionEndContent = {
  readonly __typename?: 'CareerOfferingsConnectionEndContent';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionEndTitle = {
  readonly __typename?: 'CareerOfferingsConnectionEndTitle';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionId = {
  readonly __typename?: 'CareerOfferingsConnectionId';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionLanguage = {
  readonly __typename?: 'CareerOfferingsConnectionLanguage';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionLocale = {
  readonly __typename?: 'CareerOfferingsConnectionLocale';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionPerex = {
  readonly __typename?: 'CareerOfferingsConnectionPerex';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionPublished_At = {
  readonly __typename?: 'CareerOfferingsConnectionPublished_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionSlug = {
  readonly __typename?: 'CareerOfferingsConnectionSlug';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionTitle = {
  readonly __typename?: 'CareerOfferingsConnectionTitle';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsConnectionUpdated_At = {
  readonly __typename?: 'CareerOfferingsConnectionUpdated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<CareerOfferingsConnection>;
};

export type CareerOfferingsGroupBy = {
  readonly __typename?: 'CareerOfferingsGroupBy';
  readonly id?: Maybe<ReadonlyArray<Maybe<CareerOfferingsConnectionId>>>;
  readonly created_at?: Maybe<ReadonlyArray<Maybe<CareerOfferingsConnectionCreated_At>>>;
  readonly updated_at?: Maybe<ReadonlyArray<Maybe<CareerOfferingsConnectionUpdated_At>>>;
  readonly language?: Maybe<ReadonlyArray<Maybe<CareerOfferingsConnectionLanguage>>>;
  readonly title?: Maybe<ReadonlyArray<Maybe<CareerOfferingsConnectionTitle>>>;
  readonly description?: Maybe<ReadonlyArray<Maybe<CareerOfferingsConnectionDescription>>>;
  readonly careerTechnologiesTitle?: Maybe<ReadonlyArray<Maybe<CareerOfferingsConnectionCareerTechnologiesTitle>>>;
  readonly careerTechnologiesContent?: Maybe<ReadonlyArray<Maybe<CareerOfferingsConnectionCareerTechnologiesContent>>>;
  readonly careerExpectedSkillsTitle?: Maybe<ReadonlyArray<Maybe<CareerOfferingsConnectionCareerExpectedSkillsTitle>>>;
  readonly careerExpectedSkillsContent?: Maybe<ReadonlyArray<Maybe<CareerOfferingsConnectionCareerExpectedSkillsContent>>>;
  readonly careerOfferTitle?: Maybe<ReadonlyArray<Maybe<CareerOfferingsConnectionCareerOfferTitle>>>;
  readonly careerOfferContent?: Maybe<ReadonlyArray<Maybe<CareerOfferingsConnectionCareerOfferContent>>>;
  readonly endTitle?: Maybe<ReadonlyArray<Maybe<CareerOfferingsConnectionEndTitle>>>;
  readonly endContent?: Maybe<ReadonlyArray<Maybe<CareerOfferingsConnectionEndContent>>>;
  readonly endCTA?: Maybe<ReadonlyArray<Maybe<CareerOfferingsConnectionEndCta>>>;
  readonly slug?: Maybe<ReadonlyArray<Maybe<CareerOfferingsConnectionSlug>>>;
  readonly color?: Maybe<ReadonlyArray<Maybe<CareerOfferingsConnectionColor>>>;
  readonly perex?: Maybe<ReadonlyArray<Maybe<CareerOfferingsConnectionPerex>>>;
  readonly locale?: Maybe<ReadonlyArray<Maybe<CareerOfferingsConnectionLocale>>>;
  readonly published_at?: Maybe<ReadonlyArray<Maybe<CareerOfferingsConnectionPublished_At>>>;
};

export type CaseStudy = {
  readonly __typename?: 'CaseStudy';
  readonly id: Scalars['ID'];
  readonly created_at: Scalars['DateTime'];
  readonly updated_at: Scalars['DateTime'];
  readonly image?: Maybe<UploadFile>;
  readonly title: Scalars['String'];
  readonly height?: Maybe<Scalars['Int']>;
  readonly slug: Scalars['String'];
  readonly technologies?: Maybe<ComponentContentTechnoologiesTest>;
  readonly case_study?: Maybe<CaseStudy>;
  readonly locale?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly localizations?: Maybe<ReadonlyArray<Maybe<CaseStudy>>>;
};


export type CaseStudyLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type CaseStudyAggregator = {
  readonly __typename?: 'CaseStudyAggregator';
  readonly count?: Maybe<Scalars['Int']>;
  readonly totalCount?: Maybe<Scalars['Int']>;
  readonly sum?: Maybe<CaseStudyAggregatorSum>;
  readonly avg?: Maybe<CaseStudyAggregatorAvg>;
  readonly min?: Maybe<CaseStudyAggregatorMin>;
  readonly max?: Maybe<CaseStudyAggregatorMax>;
};

export type CaseStudyAggregatorAvg = {
  readonly __typename?: 'CaseStudyAggregatorAvg';
  readonly height?: Maybe<Scalars['Float']>;
};

export type CaseStudyAggregatorMax = {
  readonly __typename?: 'CaseStudyAggregatorMax';
  readonly height?: Maybe<Scalars['Float']>;
};

export type CaseStudyAggregatorMin = {
  readonly __typename?: 'CaseStudyAggregatorMin';
  readonly height?: Maybe<Scalars['Float']>;
};

export type CaseStudyAggregatorSum = {
  readonly __typename?: 'CaseStudyAggregatorSum';
  readonly height?: Maybe<Scalars['Float']>;
};

export type CaseStudyConnection = {
  readonly __typename?: 'CaseStudyConnection';
  readonly values?: Maybe<ReadonlyArray<Maybe<CaseStudy>>>;
  readonly groupBy?: Maybe<CaseStudyGroupBy>;
  readonly aggregate?: Maybe<CaseStudyAggregator>;
};

export type CaseStudyConnectionCase_Study = {
  readonly __typename?: 'CaseStudyConnectionCase_study';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<CaseStudyConnection>;
};

export type CaseStudyConnectionCreated_At = {
  readonly __typename?: 'CaseStudyConnectionCreated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<CaseStudyConnection>;
};

export type CaseStudyConnectionHeight = {
  readonly __typename?: 'CaseStudyConnectionHeight';
  readonly key?: Maybe<Scalars['Int']>;
  readonly connection?: Maybe<CaseStudyConnection>;
};

export type CaseStudyConnectionId = {
  readonly __typename?: 'CaseStudyConnectionId';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<CaseStudyConnection>;
};

export type CaseStudyConnectionImage = {
  readonly __typename?: 'CaseStudyConnectionImage';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<CaseStudyConnection>;
};

export type CaseStudyConnectionLocale = {
  readonly __typename?: 'CaseStudyConnectionLocale';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<CaseStudyConnection>;
};

export type CaseStudyConnectionPublished_At = {
  readonly __typename?: 'CaseStudyConnectionPublished_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<CaseStudyConnection>;
};

export type CaseStudyConnectionSlug = {
  readonly __typename?: 'CaseStudyConnectionSlug';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<CaseStudyConnection>;
};

export type CaseStudyConnectionTechnologies = {
  readonly __typename?: 'CaseStudyConnectionTechnologies';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<CaseStudyConnection>;
};

export type CaseStudyConnectionTitle = {
  readonly __typename?: 'CaseStudyConnectionTitle';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<CaseStudyConnection>;
};

export type CaseStudyConnectionUpdated_At = {
  readonly __typename?: 'CaseStudyConnectionUpdated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<CaseStudyConnection>;
};

export type CaseStudyGroupBy = {
  readonly __typename?: 'CaseStudyGroupBy';
  readonly id?: Maybe<ReadonlyArray<Maybe<CaseStudyConnectionId>>>;
  readonly created_at?: Maybe<ReadonlyArray<Maybe<CaseStudyConnectionCreated_At>>>;
  readonly updated_at?: Maybe<ReadonlyArray<Maybe<CaseStudyConnectionUpdated_At>>>;
  readonly image?: Maybe<ReadonlyArray<Maybe<CaseStudyConnectionImage>>>;
  readonly title?: Maybe<ReadonlyArray<Maybe<CaseStudyConnectionTitle>>>;
  readonly height?: Maybe<ReadonlyArray<Maybe<CaseStudyConnectionHeight>>>;
  readonly slug?: Maybe<ReadonlyArray<Maybe<CaseStudyConnectionSlug>>>;
  readonly technologies?: Maybe<ReadonlyArray<Maybe<CaseStudyConnectionTechnologies>>>;
  readonly case_study?: Maybe<ReadonlyArray<Maybe<CaseStudyConnectionCase_Study>>>;
  readonly locale?: Maybe<ReadonlyArray<Maybe<CaseStudyConnectionLocale>>>;
  readonly published_at?: Maybe<ReadonlyArray<Maybe<CaseStudyConnectionPublished_At>>>;
};

export type CaseStudyInput = {
  readonly image?: Maybe<Scalars['ID']>;
  readonly title: Scalars['String'];
  readonly height?: Maybe<Scalars['Int']>;
  readonly slug: Scalars['String'];
  readonly technologies: ComponentContentTechnoologiesTestInput;
  readonly case_study?: Maybe<Scalars['ID']>;
  readonly localizations?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly locale?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type CaseStudyMeta = {
  readonly __typename?: 'CaseStudyMeta';
  readonly id: Scalars['ID'];
  readonly created_at: Scalars['DateTime'];
  readonly updated_at: Scalars['DateTime'];
  readonly industry?: Maybe<Scalars['String']>;
  readonly client?: Maybe<Scalars['String']>;
  readonly system?: Maybe<Scalars['String']>;
  readonly technologies?: Maybe<Scalars['String']>;
  readonly previousProject?: Maybe<Scalars['String']>;
  readonly nextProject?: Maybe<Scalars['String']>;
  readonly footerText?: Maybe<Scalars['String']>;
  readonly writeUs?: Maybe<Scalars['String']>;
  readonly language?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
};

export type CaseStudyMetaAggregator = {
  readonly __typename?: 'CaseStudyMetaAggregator';
  readonly count?: Maybe<Scalars['Int']>;
  readonly totalCount?: Maybe<Scalars['Int']>;
};

export type CaseStudyMetaConnection = {
  readonly __typename?: 'CaseStudyMetaConnection';
  readonly values?: Maybe<ReadonlyArray<Maybe<CaseStudyMeta>>>;
  readonly groupBy?: Maybe<CaseStudyMetaGroupBy>;
  readonly aggregate?: Maybe<CaseStudyMetaAggregator>;
};

export type CaseStudyMetaConnectionClient = {
  readonly __typename?: 'CaseStudyMetaConnectionClient';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<CaseStudyMetaConnection>;
};

export type CaseStudyMetaConnectionCreated_At = {
  readonly __typename?: 'CaseStudyMetaConnectionCreated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<CaseStudyMetaConnection>;
};

export type CaseStudyMetaConnectionFooterText = {
  readonly __typename?: 'CaseStudyMetaConnectionFooterText';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<CaseStudyMetaConnection>;
};

export type CaseStudyMetaConnectionId = {
  readonly __typename?: 'CaseStudyMetaConnectionId';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<CaseStudyMetaConnection>;
};

export type CaseStudyMetaConnectionIndustry = {
  readonly __typename?: 'CaseStudyMetaConnectionIndustry';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<CaseStudyMetaConnection>;
};

export type CaseStudyMetaConnectionLanguage = {
  readonly __typename?: 'CaseStudyMetaConnectionLanguage';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<CaseStudyMetaConnection>;
};

export type CaseStudyMetaConnectionNextProject = {
  readonly __typename?: 'CaseStudyMetaConnectionNextProject';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<CaseStudyMetaConnection>;
};

export type CaseStudyMetaConnectionPreviousProject = {
  readonly __typename?: 'CaseStudyMetaConnectionPreviousProject';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<CaseStudyMetaConnection>;
};

export type CaseStudyMetaConnectionPublished_At = {
  readonly __typename?: 'CaseStudyMetaConnectionPublished_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<CaseStudyMetaConnection>;
};

export type CaseStudyMetaConnectionSystem = {
  readonly __typename?: 'CaseStudyMetaConnectionSystem';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<CaseStudyMetaConnection>;
};

export type CaseStudyMetaConnectionTechnologies = {
  readonly __typename?: 'CaseStudyMetaConnectionTechnologies';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<CaseStudyMetaConnection>;
};

export type CaseStudyMetaConnectionUpdated_At = {
  readonly __typename?: 'CaseStudyMetaConnectionUpdated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<CaseStudyMetaConnection>;
};

export type CaseStudyMetaConnectionWriteUs = {
  readonly __typename?: 'CaseStudyMetaConnectionWriteUs';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<CaseStudyMetaConnection>;
};

export type CaseStudyMetaGroupBy = {
  readonly __typename?: 'CaseStudyMetaGroupBy';
  readonly id?: Maybe<ReadonlyArray<Maybe<CaseStudyMetaConnectionId>>>;
  readonly created_at?: Maybe<ReadonlyArray<Maybe<CaseStudyMetaConnectionCreated_At>>>;
  readonly updated_at?: Maybe<ReadonlyArray<Maybe<CaseStudyMetaConnectionUpdated_At>>>;
  readonly industry?: Maybe<ReadonlyArray<Maybe<CaseStudyMetaConnectionIndustry>>>;
  readonly client?: Maybe<ReadonlyArray<Maybe<CaseStudyMetaConnectionClient>>>;
  readonly system?: Maybe<ReadonlyArray<Maybe<CaseStudyMetaConnectionSystem>>>;
  readonly technologies?: Maybe<ReadonlyArray<Maybe<CaseStudyMetaConnectionTechnologies>>>;
  readonly previousProject?: Maybe<ReadonlyArray<Maybe<CaseStudyMetaConnectionPreviousProject>>>;
  readonly nextProject?: Maybe<ReadonlyArray<Maybe<CaseStudyMetaConnectionNextProject>>>;
  readonly footerText?: Maybe<ReadonlyArray<Maybe<CaseStudyMetaConnectionFooterText>>>;
  readonly writeUs?: Maybe<ReadonlyArray<Maybe<CaseStudyMetaConnectionWriteUs>>>;
  readonly language?: Maybe<ReadonlyArray<Maybe<CaseStudyMetaConnectionLanguage>>>;
  readonly published_at?: Maybe<ReadonlyArray<Maybe<CaseStudyMetaConnectionPublished_At>>>;
};

export type CaseStudyMetaInput = {
  readonly industry?: Maybe<Scalars['String']>;
  readonly client?: Maybe<Scalars['String']>;
  readonly system?: Maybe<Scalars['String']>;
  readonly technologies?: Maybe<Scalars['String']>;
  readonly previousProject?: Maybe<Scalars['String']>;
  readonly nextProject?: Maybe<Scalars['String']>;
  readonly footerText?: Maybe<Scalars['String']>;
  readonly writeUs?: Maybe<Scalars['String']>;
  readonly language?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type ComponentAboutUsBrandValue = {
  readonly __typename?: 'ComponentAboutUsBrandValue';
  readonly id: Scalars['ID'];
  readonly headline: Scalars['String'];
  readonly backgroundNumber: Scalars['Int'];
  readonly image?: Maybe<UploadFile>;
  readonly description: Scalars['String'];
};

export type ComponentAboutUsBrandValueInput = {
  readonly headline: Scalars['String'];
  readonly backgroundNumber: Scalars['Int'];
  readonly image?: Maybe<Scalars['ID']>;
  readonly description: Scalars['String'];
};

export type ComponentCaseStudySpecificationInput = {
  readonly area: Scalars['String'];
  readonly client: Scalars['String'];
  readonly system: Scalars['String'];
};

export type ComponentCaseStudySpecifications = {
  readonly __typename?: 'ComponentCaseStudySpecifications';
  readonly id: Scalars['ID'];
  readonly area: Scalars['String'];
  readonly client: Scalars['String'];
  readonly system: Scalars['String'];
};

export type ComponentCaseStudyTechnologiesBox = {
  readonly __typename?: 'ComponentCaseStudyTechnologiesBox';
  readonly id: Scalars['ID'];
  readonly description?: Maybe<Scalars['String']>;
  readonly technologies?: Maybe<ReadonlyArray<Maybe<ComponentContentTechnologiesList>>>;
};

export type ComponentCaseStudyTechnologiesBoxInput = {
  readonly description?: Maybe<Scalars['String']>;
  readonly technologies?: Maybe<ReadonlyArray<ComponentContentTechnologiesListInput>>;
};

export type ComponentContentCarousel = {
  readonly __typename?: 'ComponentContentCarousel';
  readonly id: Scalars['ID'];
  readonly images?: Maybe<ReadonlyArray<Maybe<UploadFile>>>;
};


export type ComponentContentCarouselImagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentContentCarouselInput = {
  readonly images?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
};

export type ComponentContentContact = {
  readonly __typename?: 'ComponentContentContact';
  readonly id: Scalars['ID'];
  readonly address: Scalars['String'];
  readonly phoneNumber: Scalars['String'];
  readonly email: Scalars['String'];
  readonly ico: Scalars['String'];
  readonly dic: Scalars['String'];
  readonly legal: Scalars['String'];
};

export type ComponentContentContactInput = {
  readonly address: Scalars['String'];
  readonly phoneNumber: Scalars['String'];
  readonly email: Scalars['String'];
  readonly ico: Scalars['String'];
  readonly dic: Scalars['String'];
  readonly legal: Scalars['String'];
};

export type ComponentContentGalleryImage = {
  readonly __typename?: 'ComponentContentGalleryImage';
  readonly id: Scalars['ID'];
  readonly rows: Scalars['Int'];
  readonly spacing: Scalars['Int'];
  readonly images?: Maybe<UploadFile>;
};

export type ComponentContentGalleryImageInput = {
  readonly rows: Scalars['Int'];
  readonly spacing: Scalars['Int'];
  readonly images?: Maybe<Scalars['ID']>;
};

export type ComponentContentImage = {
  readonly __typename?: 'ComponentContentImage';
  readonly id: Scalars['ID'];
  readonly widthPercent?: Maybe<Scalars['Float']>;
  readonly image?: Maybe<ReadonlyArray<Maybe<UploadFile>>>;
};


export type ComponentContentImageImageArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentContentImageInput = {
  readonly image?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly widthPercent?: Maybe<Scalars['Float']>;
};

export type ComponentContentInfoColumn = {
  readonly __typename?: 'ComponentContentInfoColumn';
  readonly id: Scalars['ID'];
  readonly number?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly widthPercent?: Maybe<Scalars['Float']>;
  readonly image?: Maybe<ReadonlyArray<Maybe<UploadFile>>>;
};


export type ComponentContentInfoColumnImageArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentContentInfoColumnInput = {
  readonly number?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly image?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly widthPercent?: Maybe<Scalars['Float']>;
};

export type ComponentContentPictureList = {
  readonly __typename?: 'ComponentContentPictureList';
  readonly id: Scalars['ID'];
  readonly header?: Maybe<Scalars['String']>;
  readonly color?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly image?: Maybe<UploadFile>;
};

export type ComponentContentPictureListInput = {
  readonly header?: Maybe<Scalars['String']>;
  readonly color?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly image?: Maybe<Scalars['ID']>;
};

export type ComponentContentRichText = {
  readonly __typename?: 'ComponentContentRichText';
  readonly id: Scalars['ID'];
  readonly title?: Maybe<Scalars['String']>;
  readonly desciption?: Maybe<Scalars['String']>;
  readonly desciptionLevel2?: Maybe<Scalars['String']>;
  readonly desciptionLevel3?: Maybe<Scalars['String']>;
  readonly subtitle?: Maybe<Scalars['String']>;
  readonly widthPercent?: Maybe<Scalars['Float']>;
  readonly image?: Maybe<ReadonlyArray<Maybe<UploadFile>>>;
};


export type ComponentContentRichTextImageArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentContentRichTextInput = {
  readonly title?: Maybe<Scalars['String']>;
  readonly desciption?: Maybe<Scalars['String']>;
  readonly desciptionLevel2?: Maybe<Scalars['String']>;
  readonly desciptionLevel3?: Maybe<Scalars['String']>;
  readonly image?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly subtitle?: Maybe<Scalars['String']>;
  readonly widthPercent?: Maybe<Scalars['Float']>;
};

export type ComponentContentScreenshot = {
  readonly __typename?: 'ComponentContentScreenshot';
  readonly id: Scalars['ID'];
  readonly media?: Maybe<UploadFile>;
};

export type ComponentContentScreenshotInput = {
  readonly media?: Maybe<Scalars['ID']>;
};

export type ComponentContentSection = {
  readonly __typename?: 'ComponentContentSection';
  readonly id: Scalars['ID'];
  readonly heading: Scalars['String'];
  readonly number?: Maybe<Scalars['Int']>;
  readonly text: Scalars['String'];
};

export type ComponentContentSectionInput = {
  readonly heading: Scalars['String'];
  readonly number?: Maybe<Scalars['Int']>;
  readonly text: Scalars['String'];
};

export type ComponentContentSocial = {
  readonly __typename?: 'ComponentContentSocial';
  readonly id: Scalars['ID'];
  readonly facebook: Scalars['String'];
  readonly linkedIn: Scalars['String'];
  readonly instagram: Scalars['String'];
  readonly twitter: Scalars['String'];
};

export type ComponentContentSocialInput = {
  readonly facebook: Scalars['String'];
  readonly linkedIn: Scalars['String'];
  readonly instagram: Scalars['String'];
  readonly twitter: Scalars['String'];
};

export type ComponentContentSubSection = {
  readonly __typename?: 'ComponentContentSubSection';
  readonly id: Scalars['ID'];
  readonly header: Scalars['String'];
  readonly text: Scalars['String'];
};

export type ComponentContentSubSectionInput = {
  readonly header: Scalars['String'];
  readonly text: Scalars['String'];
};

export type ComponentContentTechnologies = {
  readonly __typename?: 'ComponentContentTechnologies';
  readonly id: Scalars['ID'];
  readonly technologies?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly floatImage?: Maybe<UploadFile>;
  readonly floatImageOnMiddle?: Maybe<Scalars['Boolean']>;
  readonly images?: Maybe<ReadonlyArray<Maybe<UploadFile>>>;
};


export type ComponentContentTechnologiesImagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentContentTechnologiesList = {
  readonly __typename?: 'ComponentContentTechnologiesList';
  readonly id: Scalars['ID'];
  readonly label?: Maybe<Scalars['String']>;
  readonly technologies?: Maybe<ReadonlyArray<Maybe<TechList>>>;
};


export type ComponentContentTechnologiesListTechnologiesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentContentTechnologiesListInput = {
  readonly label?: Maybe<Scalars['String']>;
  readonly technologies?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
};

export type ComponentContentTechnologyInput = {
  readonly technologies?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly images?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly floatImage?: Maybe<Scalars['ID']>;
  readonly floatImageOnMiddle?: Maybe<Scalars['Boolean']>;
};

export type ComponentContentTechnoologiesTest = {
  readonly __typename?: 'ComponentContentTechnoologiesTest';
  readonly id: Scalars['ID'];
  readonly title: Scalars['String'];
  readonly description?: Maybe<Scalars['String']>;
  readonly tech_lists?: Maybe<ReadonlyArray<Maybe<TechList>>>;
};


export type ComponentContentTechnoologiesTestTech_ListsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentContentTechnoologiesTestInput = {
  readonly title: Scalars['String'];
  readonly description?: Maybe<Scalars['String']>;
  readonly tech_lists?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
};

export type ComponentNavigationInternalLink = {
  readonly __typename?: 'ComponentNavigationInternalLink';
  readonly id: Scalars['ID'];
  readonly label: Scalars['String'];
  readonly path: Scalars['String'];
};

export type ComponentNavigationInternalLinkInput = {
  readonly label: Scalars['String'];
  readonly path?: Maybe<Scalars['String']>;
};

export type Contact = {
  readonly __typename?: 'Contact';
  readonly id: Scalars['ID'];
  readonly created_at: Scalars['DateTime'];
  readonly updated_at: Scalars['DateTime'];
  readonly language?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly address?: Maybe<Scalars['String']>;
  readonly taxIdentificationNumbers?: Maybe<Scalars['String']>;
  readonly taxIdentificationDescription?: Maybe<Scalars['String']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly phoneNumber?: Maybe<Scalars['String']>;
  readonly FormName?: Maybe<Scalars['String']>;
  readonly FormText?: Maybe<Scalars['String']>;
  readonly FormEmail?: Maybe<Scalars['String']>;
  readonly formNameWarning?: Maybe<Scalars['String']>;
  readonly formEmailWarning?: Maybe<Scalars['String']>;
  readonly formSubmit?: Maybe<Scalars['String']>;
  readonly formInvalidEmailWarning?: Maybe<Scalars['String']>;
  readonly formTextLabel?: Maybe<Scalars['String']>;
  readonly formNameLabel?: Maybe<Scalars['String']>;
  readonly formEmailLabel?: Maybe<Scalars['String']>;
  readonly footerImg?: Maybe<UploadFile>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
};

export type ContactAggregator = {
  readonly __typename?: 'ContactAggregator';
  readonly count?: Maybe<Scalars['Int']>;
  readonly totalCount?: Maybe<Scalars['Int']>;
};

export type ContactConnection = {
  readonly __typename?: 'ContactConnection';
  readonly values?: Maybe<ReadonlyArray<Maybe<Contact>>>;
  readonly groupBy?: Maybe<ContactGroupBy>;
  readonly aggregate?: Maybe<ContactAggregator>;
};

export type ContactConnectionAddress = {
  readonly __typename?: 'ContactConnectionAddress';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<ContactConnection>;
};

export type ContactConnectionCreated_At = {
  readonly __typename?: 'ContactConnectionCreated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<ContactConnection>;
};

export type ContactConnectionEmail = {
  readonly __typename?: 'ContactConnectionEmail';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<ContactConnection>;
};

export type ContactConnectionFooterImg = {
  readonly __typename?: 'ContactConnectionFooterImg';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<ContactConnection>;
};

export type ContactConnectionFormEmail = {
  readonly __typename?: 'ContactConnectionFormEmail';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<ContactConnection>;
};

export type ContactConnectionFormEmailLabel = {
  readonly __typename?: 'ContactConnectionFormEmailLabel';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<ContactConnection>;
};

export type ContactConnectionFormEmailWarning = {
  readonly __typename?: 'ContactConnectionFormEmailWarning';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<ContactConnection>;
};

export type ContactConnectionFormInvalidEmailWarning = {
  readonly __typename?: 'ContactConnectionFormInvalidEmailWarning';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<ContactConnection>;
};

export type ContactConnectionFormName = {
  readonly __typename?: 'ContactConnectionFormName';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<ContactConnection>;
};

export type ContactConnectionFormNameLabel = {
  readonly __typename?: 'ContactConnectionFormNameLabel';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<ContactConnection>;
};

export type ContactConnectionFormNameWarning = {
  readonly __typename?: 'ContactConnectionFormNameWarning';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<ContactConnection>;
};

export type ContactConnectionFormSubmit = {
  readonly __typename?: 'ContactConnectionFormSubmit';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<ContactConnection>;
};

export type ContactConnectionFormText = {
  readonly __typename?: 'ContactConnectionFormText';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<ContactConnection>;
};

export type ContactConnectionFormTextLabel = {
  readonly __typename?: 'ContactConnectionFormTextLabel';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<ContactConnection>;
};

export type ContactConnectionId = {
  readonly __typename?: 'ContactConnectionId';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<ContactConnection>;
};

export type ContactConnectionLanguage = {
  readonly __typename?: 'ContactConnectionLanguage';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<ContactConnection>;
};

export type ContactConnectionPhoneNumber = {
  readonly __typename?: 'ContactConnectionPhoneNumber';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<ContactConnection>;
};

export type ContactConnectionPublished_At = {
  readonly __typename?: 'ContactConnectionPublished_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<ContactConnection>;
};

export type ContactConnectionTaxIdentificationDescription = {
  readonly __typename?: 'ContactConnectionTaxIdentificationDescription';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<ContactConnection>;
};

export type ContactConnectionTaxIdentificationNumbers = {
  readonly __typename?: 'ContactConnectionTaxIdentificationNumbers';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<ContactConnection>;
};

export type ContactConnectionTitle = {
  readonly __typename?: 'ContactConnectionTitle';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<ContactConnection>;
};

export type ContactConnectionUpdated_At = {
  readonly __typename?: 'ContactConnectionUpdated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<ContactConnection>;
};

export type ContactGroupBy = {
  readonly __typename?: 'ContactGroupBy';
  readonly id?: Maybe<ReadonlyArray<Maybe<ContactConnectionId>>>;
  readonly created_at?: Maybe<ReadonlyArray<Maybe<ContactConnectionCreated_At>>>;
  readonly updated_at?: Maybe<ReadonlyArray<Maybe<ContactConnectionUpdated_At>>>;
  readonly language?: Maybe<ReadonlyArray<Maybe<ContactConnectionLanguage>>>;
  readonly title?: Maybe<ReadonlyArray<Maybe<ContactConnectionTitle>>>;
  readonly address?: Maybe<ReadonlyArray<Maybe<ContactConnectionAddress>>>;
  readonly taxIdentificationNumbers?: Maybe<ReadonlyArray<Maybe<ContactConnectionTaxIdentificationNumbers>>>;
  readonly taxIdentificationDescription?: Maybe<ReadonlyArray<Maybe<ContactConnectionTaxIdentificationDescription>>>;
  readonly email?: Maybe<ReadonlyArray<Maybe<ContactConnectionEmail>>>;
  readonly phoneNumber?: Maybe<ReadonlyArray<Maybe<ContactConnectionPhoneNumber>>>;
  readonly FormName?: Maybe<ReadonlyArray<Maybe<ContactConnectionFormName>>>;
  readonly FormText?: Maybe<ReadonlyArray<Maybe<ContactConnectionFormText>>>;
  readonly FormEmail?: Maybe<ReadonlyArray<Maybe<ContactConnectionFormEmail>>>;
  readonly formNameWarning?: Maybe<ReadonlyArray<Maybe<ContactConnectionFormNameWarning>>>;
  readonly formEmailWarning?: Maybe<ReadonlyArray<Maybe<ContactConnectionFormEmailWarning>>>;
  readonly formSubmit?: Maybe<ReadonlyArray<Maybe<ContactConnectionFormSubmit>>>;
  readonly formInvalidEmailWarning?: Maybe<ReadonlyArray<Maybe<ContactConnectionFormInvalidEmailWarning>>>;
  readonly formTextLabel?: Maybe<ReadonlyArray<Maybe<ContactConnectionFormTextLabel>>>;
  readonly formNameLabel?: Maybe<ReadonlyArray<Maybe<ContactConnectionFormNameLabel>>>;
  readonly formEmailLabel?: Maybe<ReadonlyArray<Maybe<ContactConnectionFormEmailLabel>>>;
  readonly footerImg?: Maybe<ReadonlyArray<Maybe<ContactConnectionFooterImg>>>;
  readonly published_at?: Maybe<ReadonlyArray<Maybe<ContactConnectionPublished_At>>>;
};

export type ContactInput = {
  readonly language?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly address?: Maybe<Scalars['String']>;
  readonly taxIdentificationNumbers?: Maybe<Scalars['String']>;
  readonly taxIdentificationDescription?: Maybe<Scalars['String']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly phoneNumber?: Maybe<Scalars['String']>;
  readonly FormName?: Maybe<Scalars['String']>;
  readonly FormText?: Maybe<Scalars['String']>;
  readonly FormEmail?: Maybe<Scalars['String']>;
  readonly formNameWarning?: Maybe<Scalars['String']>;
  readonly formEmailWarning?: Maybe<Scalars['String']>;
  readonly formSubmit?: Maybe<Scalars['String']>;
  readonly formInvalidEmailWarning?: Maybe<Scalars['String']>;
  readonly formTextLabel?: Maybe<Scalars['String']>;
  readonly formNameLabel?: Maybe<Scalars['String']>;
  readonly formEmailLabel?: Maybe<Scalars['String']>;
  readonly footerImg?: Maybe<Scalars['ID']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};



export type DynamicTest = {
  readonly __typename?: 'DynamicTest';
  readonly id: Scalars['ID'];
  readonly created_at: Scalars['DateTime'];
  readonly updated_at: Scalars['DateTime'];
  readonly Title: Scalars['String'];
  readonly slug: Scalars['String'];
  readonly description: Scalars['String'];
  readonly logo?: Maybe<UploadFile>;
  readonly content: ReadonlyArray<Maybe<DynamicTestContentDynamicZone>>;
  readonly locale?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly localizations?: Maybe<ReadonlyArray<Maybe<DynamicTest>>>;
};


export type DynamicTestLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type DynamicTestContentDynamicZone = ComponentContentSection | ComponentContentSubSection | ComponentContentCarousel | ComponentContentScreenshot | ComponentCaseStudyTechnologiesBox | ComponentCaseStudySpecifications;


export type DynamicTestInput = {
  readonly Title: Scalars['String'];
  readonly slug: Scalars['String'];
  readonly description: Scalars['String'];
  readonly logo?: Maybe<Scalars['ID']>;
  readonly content: ReadonlyArray<Scalars['DynamicTestContentDynamicZoneInput']>;
  readonly localizations?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly locale?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type FileInfoInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly alternativeText?: Maybe<Scalars['String']>;
  readonly caption?: Maybe<Scalars['String']>;
};

export type FileInput = {
  readonly name: Scalars['String'];
  readonly alternativeText?: Maybe<Scalars['String']>;
  readonly caption?: Maybe<Scalars['String']>;
  readonly width?: Maybe<Scalars['Int']>;
  readonly height?: Maybe<Scalars['Int']>;
  readonly formats?: Maybe<Scalars['JSON']>;
  readonly hash: Scalars['String'];
  readonly ext?: Maybe<Scalars['String']>;
  readonly mime: Scalars['String'];
  readonly size: Scalars['Float'];
  readonly url: Scalars['String'];
  readonly previewUrl?: Maybe<Scalars['String']>;
  readonly provider: Scalars['String'];
  readonly provider_metadata?: Maybe<Scalars['JSON']>;
  readonly related?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type Footer = {
  readonly __typename?: 'Footer';
  readonly id: Scalars['ID'];
  readonly created_at: Scalars['DateTime'];
  readonly updated_at: Scalars['DateTime'];
  readonly title: Scalars['String'];
  readonly social?: Maybe<ComponentContentSocial>;
  readonly contact?: Maybe<ComponentContentContact>;
  readonly locale?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly localizations?: Maybe<ReadonlyArray<Maybe<Footer>>>;
};


export type FooterLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type FooterInput = {
  readonly title: Scalars['String'];
  readonly social: ComponentContentSocialInput;
  readonly contact: ComponentContentContactInput;
  readonly localizations?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly locale?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type Header = {
  readonly __typename?: 'Header';
  readonly id: Scalars['ID'];
  readonly created_at: Scalars['DateTime'];
  readonly updated_at: Scalars['DateTime'];
  readonly title?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly language?: Maybe<Scalars['String']>;
  readonly logo?: Maybe<UploadFile>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
};

export type HeaderAggregator = {
  readonly __typename?: 'HeaderAggregator';
  readonly count?: Maybe<Scalars['Int']>;
  readonly totalCount?: Maybe<Scalars['Int']>;
};

export type HeaderConnection = {
  readonly __typename?: 'HeaderConnection';
  readonly values?: Maybe<ReadonlyArray<Maybe<Header>>>;
  readonly groupBy?: Maybe<HeaderGroupBy>;
  readonly aggregate?: Maybe<HeaderAggregator>;
};

export type HeaderConnectionCreated_At = {
  readonly __typename?: 'HeaderConnectionCreated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<HeaderConnection>;
};

export type HeaderConnectionDescription = {
  readonly __typename?: 'HeaderConnectionDescription';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<HeaderConnection>;
};

export type HeaderConnectionId = {
  readonly __typename?: 'HeaderConnectionId';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<HeaderConnection>;
};

export type HeaderConnectionLanguage = {
  readonly __typename?: 'HeaderConnectionLanguage';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<HeaderConnection>;
};

export type HeaderConnectionLogo = {
  readonly __typename?: 'HeaderConnectionLogo';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<HeaderConnection>;
};

export type HeaderConnectionPublished_At = {
  readonly __typename?: 'HeaderConnectionPublished_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<HeaderConnection>;
};

export type HeaderConnectionTitle = {
  readonly __typename?: 'HeaderConnectionTitle';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<HeaderConnection>;
};

export type HeaderConnectionUpdated_At = {
  readonly __typename?: 'HeaderConnectionUpdated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<HeaderConnection>;
};

export type HeaderGroupBy = {
  readonly __typename?: 'HeaderGroupBy';
  readonly id?: Maybe<ReadonlyArray<Maybe<HeaderConnectionId>>>;
  readonly created_at?: Maybe<ReadonlyArray<Maybe<HeaderConnectionCreated_At>>>;
  readonly updated_at?: Maybe<ReadonlyArray<Maybe<HeaderConnectionUpdated_At>>>;
  readonly title?: Maybe<ReadonlyArray<Maybe<HeaderConnectionTitle>>>;
  readonly description?: Maybe<ReadonlyArray<Maybe<HeaderConnectionDescription>>>;
  readonly language?: Maybe<ReadonlyArray<Maybe<HeaderConnectionLanguage>>>;
  readonly logo?: Maybe<ReadonlyArray<Maybe<HeaderConnectionLogo>>>;
  readonly published_at?: Maybe<ReadonlyArray<Maybe<HeaderConnectionPublished_At>>>;
};

export type HeaderInput = {
  readonly title?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly language?: Maybe<Scalars['String']>;
  readonly logo?: Maybe<Scalars['ID']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type Homepage = {
  readonly __typename?: 'Homepage';
  readonly id: Scalars['ID'];
  readonly created_at: Scalars['DateTime'];
  readonly updated_at: Scalars['DateTime'];
  readonly language: Scalars['String'];
  readonly clickToStop: Scalars['String'];
  readonly descriptionAboveLine: Scalars['String'];
  readonly descriptionBellowLine: Scalars['String'];
  readonly logo?: Maybe<UploadFile>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
};

export type HomepageAggregator = {
  readonly __typename?: 'HomepageAggregator';
  readonly count?: Maybe<Scalars['Int']>;
  readonly totalCount?: Maybe<Scalars['Int']>;
};

export type HomepageConnection = {
  readonly __typename?: 'HomepageConnection';
  readonly values?: Maybe<ReadonlyArray<Maybe<Homepage>>>;
  readonly groupBy?: Maybe<HomepageGroupBy>;
  readonly aggregate?: Maybe<HomepageAggregator>;
};

export type HomepageConnectionClickToStop = {
  readonly __typename?: 'HomepageConnectionClickToStop';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<HomepageConnection>;
};

export type HomepageConnectionCreated_At = {
  readonly __typename?: 'HomepageConnectionCreated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<HomepageConnection>;
};

export type HomepageConnectionDescriptionAboveLine = {
  readonly __typename?: 'HomepageConnectionDescriptionAboveLine';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<HomepageConnection>;
};

export type HomepageConnectionDescriptionBellowLine = {
  readonly __typename?: 'HomepageConnectionDescriptionBellowLine';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<HomepageConnection>;
};

export type HomepageConnectionId = {
  readonly __typename?: 'HomepageConnectionId';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<HomepageConnection>;
};

export type HomepageConnectionLanguage = {
  readonly __typename?: 'HomepageConnectionLanguage';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<HomepageConnection>;
};

export type HomepageConnectionLogo = {
  readonly __typename?: 'HomepageConnectionLogo';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<HomepageConnection>;
};

export type HomepageConnectionPublished_At = {
  readonly __typename?: 'HomepageConnectionPublished_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<HomepageConnection>;
};

export type HomepageConnectionUpdated_At = {
  readonly __typename?: 'HomepageConnectionUpdated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<HomepageConnection>;
};

export type HomepageGroupBy = {
  readonly __typename?: 'HomepageGroupBy';
  readonly id?: Maybe<ReadonlyArray<Maybe<HomepageConnectionId>>>;
  readonly created_at?: Maybe<ReadonlyArray<Maybe<HomepageConnectionCreated_At>>>;
  readonly updated_at?: Maybe<ReadonlyArray<Maybe<HomepageConnectionUpdated_At>>>;
  readonly language?: Maybe<ReadonlyArray<Maybe<HomepageConnectionLanguage>>>;
  readonly clickToStop?: Maybe<ReadonlyArray<Maybe<HomepageConnectionClickToStop>>>;
  readonly descriptionAboveLine?: Maybe<ReadonlyArray<Maybe<HomepageConnectionDescriptionAboveLine>>>;
  readonly descriptionBellowLine?: Maybe<ReadonlyArray<Maybe<HomepageConnectionDescriptionBellowLine>>>;
  readonly logo?: Maybe<ReadonlyArray<Maybe<HomepageConnectionLogo>>>;
  readonly published_at?: Maybe<ReadonlyArray<Maybe<HomepageConnectionPublished_At>>>;
};

export type HomepageInput = {
  readonly language: Scalars['String'];
  readonly clickToStop: Scalars['String'];
  readonly descriptionAboveLine: Scalars['String'];
  readonly descriptionBellowLine: Scalars['String'];
  readonly logo?: Maybe<Scalars['ID']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type HomepageNew = {
  readonly __typename?: 'HomepageNew';
  readonly id: Scalars['ID'];
  readonly created_at: Scalars['DateTime'];
  readonly updated_at: Scalars['DateTime'];
  readonly topLeftLink?: Maybe<ComponentNavigationInternalLink>;
  readonly topRightLink?: Maybe<ComponentNavigationInternalLink>;
  readonly bottomLeftLink?: Maybe<ComponentNavigationInternalLink>;
  readonly bottomRightLink?: Maybe<ComponentNavigationInternalLink>;
  readonly logo?: Maybe<UploadFile>;
  readonly clickToStopText: Scalars['String'];
  readonly aboveLineText: Scalars['String'];
  readonly belowLineText: Scalars['String'];
  readonly locale?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly localizations?: Maybe<ReadonlyArray<Maybe<HomepageNew>>>;
};


export type HomepageNewLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type HomepageNewInput = {
  readonly topLeftLink: ComponentNavigationInternalLinkInput;
  readonly topRightLink: ComponentNavigationInternalLinkInput;
  readonly bottomLeftLink: ComponentNavigationInternalLinkInput;
  readonly bottomRightLink: ComponentNavigationInternalLinkInput;
  readonly logo?: Maybe<Scalars['ID']>;
  readonly clickToStopText: Scalars['String'];
  readonly aboveLineText: Scalars['String'];
  readonly belowLineText: Scalars['String'];
  readonly localizations?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly locale?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type HqGallery = {
  readonly __typename?: 'HqGallery';
  readonly id: Scalars['ID'];
  readonly created_at: Scalars['DateTime'];
  readonly updated_at: Scalars['DateTime'];
  readonly galleryCollection?: Maybe<ReadonlyArray<Maybe<ComponentContentGalleryImage>>>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
};

export type HqGalleryAggregator = {
  readonly __typename?: 'HqGalleryAggregator';
  readonly count?: Maybe<Scalars['Int']>;
  readonly totalCount?: Maybe<Scalars['Int']>;
};

export type HqGalleryConnection = {
  readonly __typename?: 'HqGalleryConnection';
  readonly values?: Maybe<ReadonlyArray<Maybe<HqGallery>>>;
  readonly groupBy?: Maybe<HqGalleryGroupBy>;
  readonly aggregate?: Maybe<HqGalleryAggregator>;
};

export type HqGalleryConnectionCreated_At = {
  readonly __typename?: 'HqGalleryConnectionCreated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<HqGalleryConnection>;
};

export type HqGalleryConnectionId = {
  readonly __typename?: 'HqGalleryConnectionId';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<HqGalleryConnection>;
};

export type HqGalleryConnectionPublished_At = {
  readonly __typename?: 'HqGalleryConnectionPublished_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<HqGalleryConnection>;
};

export type HqGalleryConnectionUpdated_At = {
  readonly __typename?: 'HqGalleryConnectionUpdated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<HqGalleryConnection>;
};

export type HqGalleryGroupBy = {
  readonly __typename?: 'HqGalleryGroupBy';
  readonly id?: Maybe<ReadonlyArray<Maybe<HqGalleryConnectionId>>>;
  readonly created_at?: Maybe<ReadonlyArray<Maybe<HqGalleryConnectionCreated_At>>>;
  readonly updated_at?: Maybe<ReadonlyArray<Maybe<HqGalleryConnectionUpdated_At>>>;
  readonly published_at?: Maybe<ReadonlyArray<Maybe<HqGalleryConnectionPublished_At>>>;
};

export type HqGalleryInput = {
  readonly galleryCollection?: Maybe<ReadonlyArray<ComponentContentGalleryImageInput>>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type I18NLocale = {
  readonly __typename?: 'I18NLocale';
  readonly id: Scalars['ID'];
  readonly created_at: Scalars['DateTime'];
  readonly updated_at: Scalars['DateTime'];
  readonly name?: Maybe<Scalars['String']>;
  readonly code?: Maybe<Scalars['String']>;
};

export type InputId = {
  readonly id: Scalars['ID'];
};


export type Job = {
  readonly __typename?: 'Job';
  readonly id: Scalars['ID'];
  readonly created_at: Scalars['DateTime'];
  readonly updated_at: Scalars['DateTime'];
  readonly title?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly careerTechnologiesTitle: Scalars['String'];
  readonly careerTechnologiesContent: Scalars['String'];
  readonly careerExpectedSkills: Scalars['String'];
  readonly careerExpectedSkillsContent: Scalars['String'];
  readonly careerOfferTitle: Scalars['String'];
  readonly careerOfferContent?: Maybe<Scalars['String']>;
  readonly endTitle: Scalars['String'];
  readonly endContent?: Maybe<Scalars['String']>;
  readonly endCTA: Scalars['String'];
  readonly language?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
};

export type JobAggregator = {
  readonly __typename?: 'JobAggregator';
  readonly count?: Maybe<Scalars['Int']>;
  readonly totalCount?: Maybe<Scalars['Int']>;
};

export type JobConnection = {
  readonly __typename?: 'JobConnection';
  readonly values?: Maybe<ReadonlyArray<Maybe<Job>>>;
  readonly groupBy?: Maybe<JobGroupBy>;
  readonly aggregate?: Maybe<JobAggregator>;
};

export type JobConnectionCareerExpectedSkills = {
  readonly __typename?: 'JobConnectionCareerExpectedSkills';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<JobConnection>;
};

export type JobConnectionCareerExpectedSkillsContent = {
  readonly __typename?: 'JobConnectionCareerExpectedSkillsContent';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<JobConnection>;
};

export type JobConnectionCareerOfferContent = {
  readonly __typename?: 'JobConnectionCareerOfferContent';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<JobConnection>;
};

export type JobConnectionCareerOfferTitle = {
  readonly __typename?: 'JobConnectionCareerOfferTitle';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<JobConnection>;
};

export type JobConnectionCareerTechnologiesContent = {
  readonly __typename?: 'JobConnectionCareerTechnologiesContent';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<JobConnection>;
};

export type JobConnectionCareerTechnologiesTitle = {
  readonly __typename?: 'JobConnectionCareerTechnologiesTitle';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<JobConnection>;
};

export type JobConnectionCreated_At = {
  readonly __typename?: 'JobConnectionCreated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<JobConnection>;
};

export type JobConnectionDescription = {
  readonly __typename?: 'JobConnectionDescription';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<JobConnection>;
};

export type JobConnectionEndCta = {
  readonly __typename?: 'JobConnectionEndCTA';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<JobConnection>;
};

export type JobConnectionEndContent = {
  readonly __typename?: 'JobConnectionEndContent';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<JobConnection>;
};

export type JobConnectionEndTitle = {
  readonly __typename?: 'JobConnectionEndTitle';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<JobConnection>;
};

export type JobConnectionId = {
  readonly __typename?: 'JobConnectionId';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<JobConnection>;
};

export type JobConnectionLanguage = {
  readonly __typename?: 'JobConnectionLanguage';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<JobConnection>;
};

export type JobConnectionPublished_At = {
  readonly __typename?: 'JobConnectionPublished_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<JobConnection>;
};

export type JobConnectionSlug = {
  readonly __typename?: 'JobConnectionSlug';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<JobConnection>;
};

export type JobConnectionTitle = {
  readonly __typename?: 'JobConnectionTitle';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<JobConnection>;
};

export type JobConnectionUpdated_At = {
  readonly __typename?: 'JobConnectionUpdated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<JobConnection>;
};

export type JobGroupBy = {
  readonly __typename?: 'JobGroupBy';
  readonly id?: Maybe<ReadonlyArray<Maybe<JobConnectionId>>>;
  readonly created_at?: Maybe<ReadonlyArray<Maybe<JobConnectionCreated_At>>>;
  readonly updated_at?: Maybe<ReadonlyArray<Maybe<JobConnectionUpdated_At>>>;
  readonly title?: Maybe<ReadonlyArray<Maybe<JobConnectionTitle>>>;
  readonly description?: Maybe<ReadonlyArray<Maybe<JobConnectionDescription>>>;
  readonly careerTechnologiesTitle?: Maybe<ReadonlyArray<Maybe<JobConnectionCareerTechnologiesTitle>>>;
  readonly careerTechnologiesContent?: Maybe<ReadonlyArray<Maybe<JobConnectionCareerTechnologiesContent>>>;
  readonly careerExpectedSkills?: Maybe<ReadonlyArray<Maybe<JobConnectionCareerExpectedSkills>>>;
  readonly careerExpectedSkillsContent?: Maybe<ReadonlyArray<Maybe<JobConnectionCareerExpectedSkillsContent>>>;
  readonly careerOfferTitle?: Maybe<ReadonlyArray<Maybe<JobConnectionCareerOfferTitle>>>;
  readonly careerOfferContent?: Maybe<ReadonlyArray<Maybe<JobConnectionCareerOfferContent>>>;
  readonly endTitle?: Maybe<ReadonlyArray<Maybe<JobConnectionEndTitle>>>;
  readonly endContent?: Maybe<ReadonlyArray<Maybe<JobConnectionEndContent>>>;
  readonly endCTA?: Maybe<ReadonlyArray<Maybe<JobConnectionEndCta>>>;
  readonly language?: Maybe<ReadonlyArray<Maybe<JobConnectionLanguage>>>;
  readonly slug?: Maybe<ReadonlyArray<Maybe<JobConnectionSlug>>>;
  readonly published_at?: Maybe<ReadonlyArray<Maybe<JobConnectionPublished_At>>>;
};

export type JobInput = {
  readonly title?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly careerTechnologiesTitle?: Maybe<Scalars['String']>;
  readonly careerTechnologiesContent: Scalars['String'];
  readonly careerExpectedSkills?: Maybe<Scalars['String']>;
  readonly careerExpectedSkillsContent: Scalars['String'];
  readonly careerOfferTitle?: Maybe<Scalars['String']>;
  readonly careerOfferContent?: Maybe<Scalars['String']>;
  readonly endTitle?: Maybe<Scalars['String']>;
  readonly endContent?: Maybe<Scalars['String']>;
  readonly endCTA?: Maybe<Scalars['String']>;
  readonly language?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type Language = {
  readonly __typename?: 'Language';
  readonly id: Scalars['ID'];
  readonly created_at: Scalars['DateTime'];
  readonly updated_at: Scalars['DateTime'];
  readonly languageCode?: Maybe<Scalars['String']>;
  readonly displayName?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
};

export type LanguageAggregator = {
  readonly __typename?: 'LanguageAggregator';
  readonly count?: Maybe<Scalars['Int']>;
  readonly totalCount?: Maybe<Scalars['Int']>;
};

export type LanguageConnection = {
  readonly __typename?: 'LanguageConnection';
  readonly values?: Maybe<ReadonlyArray<Maybe<Language>>>;
  readonly groupBy?: Maybe<LanguageGroupBy>;
  readonly aggregate?: Maybe<LanguageAggregator>;
};

export type LanguageConnectionCreated_At = {
  readonly __typename?: 'LanguageConnectionCreated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<LanguageConnection>;
};

export type LanguageConnectionDisplayName = {
  readonly __typename?: 'LanguageConnectionDisplayName';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<LanguageConnection>;
};

export type LanguageConnectionId = {
  readonly __typename?: 'LanguageConnectionId';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<LanguageConnection>;
};

export type LanguageConnectionLanguageCode = {
  readonly __typename?: 'LanguageConnectionLanguageCode';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<LanguageConnection>;
};

export type LanguageConnectionPublished_At = {
  readonly __typename?: 'LanguageConnectionPublished_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<LanguageConnection>;
};

export type LanguageConnectionUpdated_At = {
  readonly __typename?: 'LanguageConnectionUpdated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<LanguageConnection>;
};

export type LanguageGroupBy = {
  readonly __typename?: 'LanguageGroupBy';
  readonly id?: Maybe<ReadonlyArray<Maybe<LanguageConnectionId>>>;
  readonly created_at?: Maybe<ReadonlyArray<Maybe<LanguageConnectionCreated_At>>>;
  readonly updated_at?: Maybe<ReadonlyArray<Maybe<LanguageConnectionUpdated_At>>>;
  readonly languageCode?: Maybe<ReadonlyArray<Maybe<LanguageConnectionLanguageCode>>>;
  readonly displayName?: Maybe<ReadonlyArray<Maybe<LanguageConnectionDisplayName>>>;
  readonly published_at?: Maybe<ReadonlyArray<Maybe<LanguageConnectionPublished_At>>>;
};

export type LanguageInput = {
  readonly languageCode?: Maybe<Scalars['String']>;
  readonly displayName?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type LocaleInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly code?: Maybe<Scalars['String']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};


export type Menu = {
  readonly __typename?: 'Menu';
  readonly id: Scalars['ID'];
  readonly created_at: Scalars['DateTime'];
  readonly updated_at: Scalars['DateTime'];
  readonly menu?: Maybe<Scalars['String']>;
  readonly homePage?: Maybe<Scalars['String']>;
  readonly reference?: Maybe<Scalars['String']>;
  readonly aboutUs?: Maybe<Scalars['String']>;
  readonly career?: Maybe<Scalars['String']>;
  readonly contact?: Maybe<Scalars['String']>;
  readonly language?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
};

export type MenuAggregator = {
  readonly __typename?: 'MenuAggregator';
  readonly count?: Maybe<Scalars['Int']>;
  readonly totalCount?: Maybe<Scalars['Int']>;
};

export type MenuConnection = {
  readonly __typename?: 'MenuConnection';
  readonly values?: Maybe<ReadonlyArray<Maybe<Menu>>>;
  readonly groupBy?: Maybe<MenuGroupBy>;
  readonly aggregate?: Maybe<MenuAggregator>;
};

export type MenuConnectionAboutUs = {
  readonly __typename?: 'MenuConnectionAboutUs';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<MenuConnection>;
};

export type MenuConnectionCareer = {
  readonly __typename?: 'MenuConnectionCareer';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<MenuConnection>;
};

export type MenuConnectionContact = {
  readonly __typename?: 'MenuConnectionContact';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<MenuConnection>;
};

export type MenuConnectionCreated_At = {
  readonly __typename?: 'MenuConnectionCreated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<MenuConnection>;
};

export type MenuConnectionHomePage = {
  readonly __typename?: 'MenuConnectionHomePage';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<MenuConnection>;
};

export type MenuConnectionId = {
  readonly __typename?: 'MenuConnectionId';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<MenuConnection>;
};

export type MenuConnectionLanguage = {
  readonly __typename?: 'MenuConnectionLanguage';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<MenuConnection>;
};

export type MenuConnectionMenu = {
  readonly __typename?: 'MenuConnectionMenu';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<MenuConnection>;
};

export type MenuConnectionPublished_At = {
  readonly __typename?: 'MenuConnectionPublished_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<MenuConnection>;
};

export type MenuConnectionReference = {
  readonly __typename?: 'MenuConnectionReference';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<MenuConnection>;
};

export type MenuConnectionUpdated_At = {
  readonly __typename?: 'MenuConnectionUpdated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<MenuConnection>;
};

export type MenuGroupBy = {
  readonly __typename?: 'MenuGroupBy';
  readonly id?: Maybe<ReadonlyArray<Maybe<MenuConnectionId>>>;
  readonly created_at?: Maybe<ReadonlyArray<Maybe<MenuConnectionCreated_At>>>;
  readonly updated_at?: Maybe<ReadonlyArray<Maybe<MenuConnectionUpdated_At>>>;
  readonly menu?: Maybe<ReadonlyArray<Maybe<MenuConnectionMenu>>>;
  readonly homePage?: Maybe<ReadonlyArray<Maybe<MenuConnectionHomePage>>>;
  readonly reference?: Maybe<ReadonlyArray<Maybe<MenuConnectionReference>>>;
  readonly aboutUs?: Maybe<ReadonlyArray<Maybe<MenuConnectionAboutUs>>>;
  readonly career?: Maybe<ReadonlyArray<Maybe<MenuConnectionCareer>>>;
  readonly contact?: Maybe<ReadonlyArray<Maybe<MenuConnectionContact>>>;
  readonly language?: Maybe<ReadonlyArray<Maybe<MenuConnectionLanguage>>>;
  readonly published_at?: Maybe<ReadonlyArray<Maybe<MenuConnectionPublished_At>>>;
};

export type MenuInput = {
  readonly menu?: Maybe<Scalars['String']>;
  readonly homePage?: Maybe<Scalars['String']>;
  readonly reference?: Maybe<Scalars['String']>;
  readonly aboutUs?: Maybe<Scalars['String']>;
  readonly career?: Maybe<Scalars['String']>;
  readonly contact?: Maybe<Scalars['String']>;
  readonly language?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | AboutUs | AboutUsConnection | AboutUsAggregator | AboutUsGroupBy | AboutUsConnectionId | AboutUsConnectionCreated_At | AboutUsConnectionUpdated_At | AboutUsConnectionLanguage | AboutUsConnectionHeroDescription | AboutUsConnectionHeroLogo | AboutUsConnectionHeroHeadlineTop | AboutUsConnectionHeroHeadlineBottom | AboutUsConnectionHeroArrowTitle | AboutUsConnectionWeAreHeadline | AboutUsConnectionWeAreDescription | AboutUsConnectionWeAreArrowTitle | AboutUsConnectionSkillsHeadline | AboutUsConnectionSkillsDescription | AboutUsConnectionTechnologiesDescription | AboutUsConnectionTechnologiesImage | AboutUsConnectionValuesHeadline | AboutUsConnectionTeamHeadline | AboutUsConnectionHqHeadline | AboutUsConnectionCareerHeadline | AboutUsConnectionCareerCtaTitle | AboutUsConnectionCareerCtaImage | AboutUsConnectionBlogHeadline | AboutUsConnectionHqDescription | AboutUsConnectionCareerDescription | AboutUsConnectionHqWeAreHereDescription | AboutUsConnectionHqWeAreHereImage | AboutUsConnectionHqCtaTitle | AboutUsConnectionBlogReadMore | AboutUsConnectionArrow | AboutUsConnectionPublished_At | CreateAboutUsPayload | UpdateAboutUsPayload | DeleteAboutUsPayload | AboutWeAreImageCarousel | UpdateAboutWeAreImageCarouselPayload | DeleteAboutWeAreImageCarouselPayload | About | UpdateAboutPayload | DeleteAboutPayload | BrandValue | BrandValueConnection | BrandValueAggregator | BrandValueAggregatorSum | BrandValueAggregatorAvg | BrandValueAggregatorMin | BrandValueAggregatorMax | BrandValueGroupBy | BrandValueConnectionId | BrandValueConnectionCreated_At | BrandValueConnectionUpdated_At | BrandValueConnectionHeadline | BrandValueConnectionBackgroundNumber | BrandValueConnectionImage | BrandValueConnectionDescription | BrandValueConnectionPublished_At | CreateBrandValuePayload | UpdateBrandValuePayload | DeleteBrandValuePayload | CareerOfferings | CareerOfferingsConnection | CareerOfferingsAggregator | CareerOfferingsGroupBy | CareerOfferingsConnectionId | CareerOfferingsConnectionCreated_At | CareerOfferingsConnectionUpdated_At | CareerOfferingsConnectionLanguage | CareerOfferingsConnectionTitle | CareerOfferingsConnectionDescription | CareerOfferingsConnectionCareerTechnologiesTitle | CareerOfferingsConnectionCareerTechnologiesContent | CareerOfferingsConnectionCareerExpectedSkillsTitle | CareerOfferingsConnectionCareerExpectedSkillsContent | CareerOfferingsConnectionCareerOfferTitle | CareerOfferingsConnectionCareerOfferContent | CareerOfferingsConnectionEndTitle | CareerOfferingsConnectionEndContent | CareerOfferingsConnectionEndCta | CareerOfferingsConnectionSlug | CareerOfferingsConnectionColor | CareerOfferingsConnectionPerex | CareerOfferingsConnectionLocale | CareerOfferingsConnectionPublished_At | CreateCareerOfferingPayload | UpdateCareerOfferingPayload | DeleteCareerOfferingPayload | Career | UpdateCareerPayload | DeleteCareerPayload | CaseStudyMeta | CaseStudyMetaConnection | CaseStudyMetaAggregator | CaseStudyMetaGroupBy | CaseStudyMetaConnectionId | CaseStudyMetaConnectionCreated_At | CaseStudyMetaConnectionUpdated_At | CaseStudyMetaConnectionIndustry | CaseStudyMetaConnectionClient | CaseStudyMetaConnectionSystem | CaseStudyMetaConnectionTechnologies | CaseStudyMetaConnectionPreviousProject | CaseStudyMetaConnectionNextProject | CaseStudyMetaConnectionFooterText | CaseStudyMetaConnectionWriteUs | CaseStudyMetaConnectionLanguage | CaseStudyMetaConnectionPublished_At | CreateCaseStudyMetaPayload | UpdateCaseStudyMetaPayload | DeleteCaseStudyMetaPayload | CaseStudy | CaseStudyConnection | CaseStudyAggregator | CaseStudyAggregatorSum | CaseStudyAggregatorAvg | CaseStudyAggregatorMin | CaseStudyAggregatorMax | CaseStudyGroupBy | CaseStudyConnectionId | CaseStudyConnectionCreated_At | CaseStudyConnectionUpdated_At | CaseStudyConnectionImage | CaseStudyConnectionTitle | CaseStudyConnectionHeight | CaseStudyConnectionSlug | CaseStudyConnectionTechnologies | CaseStudyConnectionCase_Study | CaseStudyConnectionLocale | CaseStudyConnectionPublished_At | CreateCaseStudyPayload | UpdateCaseStudyPayload | DeleteCaseStudyPayload | Contact | ContactConnection | ContactAggregator | ContactGroupBy | ContactConnectionId | ContactConnectionCreated_At | ContactConnectionUpdated_At | ContactConnectionLanguage | ContactConnectionTitle | ContactConnectionAddress | ContactConnectionTaxIdentificationNumbers | ContactConnectionTaxIdentificationDescription | ContactConnectionEmail | ContactConnectionPhoneNumber | ContactConnectionFormName | ContactConnectionFormText | ContactConnectionFormEmail | ContactConnectionFormNameWarning | ContactConnectionFormEmailWarning | ContactConnectionFormSubmit | ContactConnectionFormInvalidEmailWarning | ContactConnectionFormTextLabel | ContactConnectionFormNameLabel | ContactConnectionFormEmailLabel | ContactConnectionFooterImg | ContactConnectionPublished_At | CreateContactPayload | UpdateContactPayload | DeleteContactPayload | DynamicTest | UpdateDynamicTestPayload | DeleteDynamicTestPayload | Footer | UpdateFooterPayload | DeleteFooterPayload | Header | HeaderConnection | HeaderAggregator | HeaderGroupBy | HeaderConnectionId | HeaderConnectionCreated_At | HeaderConnectionUpdated_At | HeaderConnectionTitle | HeaderConnectionDescription | HeaderConnectionLanguage | HeaderConnectionLogo | HeaderConnectionPublished_At | CreateHeaderPayload | UpdateHeaderPayload | DeleteHeaderPayload | HomepageNew | UpdateHomepageNewPayload | DeleteHomepageNewPayload | Homepage | HomepageConnection | HomepageAggregator | HomepageGroupBy | HomepageConnectionId | HomepageConnectionCreated_At | HomepageConnectionUpdated_At | HomepageConnectionLanguage | HomepageConnectionClickToStop | HomepageConnectionDescriptionAboveLine | HomepageConnectionDescriptionBellowLine | HomepageConnectionLogo | HomepageConnectionPublished_At | CreateHomepagePayload | UpdateHomepagePayload | DeleteHomepagePayload | HqGallery | HqGalleryConnection | HqGalleryAggregator | HqGalleryGroupBy | HqGalleryConnectionId | HqGalleryConnectionCreated_At | HqGalleryConnectionUpdated_At | HqGalleryConnectionPublished_At | CreateHqGalleryPayload | UpdateHqGalleryPayload | DeleteHqGalleryPayload | Job | JobConnection | JobAggregator | JobGroupBy | JobConnectionId | JobConnectionCreated_At | JobConnectionUpdated_At | JobConnectionTitle | JobConnectionDescription | JobConnectionCareerTechnologiesTitle | JobConnectionCareerTechnologiesContent | JobConnectionCareerExpectedSkills | JobConnectionCareerExpectedSkillsContent | JobConnectionCareerOfferTitle | JobConnectionCareerOfferContent | JobConnectionEndTitle | JobConnectionEndContent | JobConnectionEndCta | JobConnectionLanguage | JobConnectionSlug | JobConnectionPublished_At | CreateJobPayload | UpdateJobPayload | DeleteJobPayload | Language | LanguageConnection | LanguageAggregator | LanguageGroupBy | LanguageConnectionId | LanguageConnectionCreated_At | LanguageConnectionUpdated_At | LanguageConnectionLanguageCode | LanguageConnectionDisplayName | LanguageConnectionPublished_At | CreateLanguagePayload | UpdateLanguagePayload | DeleteLanguagePayload | Menu | MenuConnection | MenuAggregator | MenuGroupBy | MenuConnectionId | MenuConnectionCreated_At | MenuConnectionUpdated_At | MenuConnectionMenu | MenuConnectionHomePage | MenuConnectionReference | MenuConnectionAboutUs | MenuConnectionCareer | MenuConnectionContact | MenuConnectionLanguage | MenuConnectionPublished_At | CreateMenuPayload | UpdateMenuPayload | DeleteMenuPayload | Page404 | Page404Connection | Page404Aggregator | Page404GroupBy | Page404ConnectionId | Page404ConnectionCreated_At | Page404ConnectionUpdated_At | Page404ConnectionImage | Page404ConnectionHeading | Page404ConnectionDescription | Page404ConnectionLink | Page404ConnectionLanguage | Page404ConnectionBgText | Page404ConnectionPublished_At | CreatePage404Payload | UpdatePage404Payload | DeletePage404Payload | Products | ProductsConnection | ProductsAggregator | ProductsGroupBy | ProductsConnectionId | ProductsConnectionCreated_At | ProductsConnectionUpdated_At | ProductsConnectionName | ProductsConnectionSlug | ProductsConnectionLocale | ProductsConnectionPublished_At | CreateProductPayload | UpdateProductPayload | DeleteProductPayload | Skill | SkillConnection | SkillAggregator | SkillGroupBy | SkillConnectionId | SkillConnectionCreated_At | SkillConnectionUpdated_At | SkillConnectionTitle | SkillConnectionDescription | SkillConnectionTitleColorHash | SkillConnectionPublished_At | CreateSkillPayload | UpdateSkillPayload | DeleteSkillPayload | SocialNetwork | SocialNetworkConnection | SocialNetworkAggregator | SocialNetworkGroupBy | SocialNetworkConnectionId | SocialNetworkConnectionCreated_At | SocialNetworkConnectionUpdated_At | SocialNetworkConnectionName | SocialNetworkConnectionUrl | SocialNetworkConnectionPublished_At | CreateSocialNetworkPayload | UpdateSocialNetworkPayload | DeleteSocialNetworkPayload | Team | TeamConnection | TeamAggregator | TeamAggregatorSum | TeamAggregatorAvg | TeamAggregatorMin | TeamAggregatorMax | TeamGroupBy | TeamConnectionId | TeamConnectionCreated_At | TeamConnectionUpdated_At | TeamConnectionName | TeamConnectionPosition | TeamConnectionVideo | TeamConnectionSort | TeamConnectionPublished_At | CreateTeamPayload | UpdateTeamPayload | DeleteTeamPayload | TechList | TechListConnection | TechListAggregator | TechListGroupBy | TechListConnectionId | TechListConnectionCreated_At | TechListConnectionUpdated_At | TechListConnectionName | TechListConnectionPublished_At | CreateTechListPayload | UpdateTechListPayload | DeleteTechListPayload | Webhook | WebhookConnection | WebhookAggregator | WebhookGroupBy | WebhookConnectionId | WebhookConnectionCreated_At | WebhookConnectionUpdated_At | WebhookConnectionName | WebhookConnectionPublished_At | CreateWebhookPayload | UpdateWebhookPayload | DeleteWebhookPayload | I18NLocale | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentAboutUsBrandValue | ComponentCaseStudySpecifications | ComponentCaseStudyTechnologiesBox | ComponentContentCarousel | ComponentContentContact | ComponentContentGalleryImage | ComponentContentImage | ComponentContentInfoColumn | ComponentContentPictureList | ComponentContentRichText | ComponentContentScreenshot | ComponentContentSection | ComponentContentSocial | ComponentContentSubSection | ComponentContentTechnologiesList | ComponentContentTechnologies | ComponentContentTechnoologiesTest | ComponentNavigationInternalLink;

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly createAboutUs?: Maybe<CreateAboutUsPayload>;
  readonly updateAboutUs?: Maybe<UpdateAboutUsPayload>;
  readonly deleteAboutUs?: Maybe<DeleteAboutUsPayload>;
  readonly updateAboutWeAreImageCarousel?: Maybe<UpdateAboutWeAreImageCarouselPayload>;
  readonly deleteAboutWeAreImageCarousel?: Maybe<DeleteAboutWeAreImageCarouselPayload>;
  readonly updateAbout?: Maybe<UpdateAboutPayload>;
  readonly deleteAbout?: Maybe<DeleteAboutPayload>;
  readonly createBrandValue?: Maybe<CreateBrandValuePayload>;
  readonly updateBrandValue?: Maybe<UpdateBrandValuePayload>;
  readonly deleteBrandValue?: Maybe<DeleteBrandValuePayload>;
  readonly createCareerOffering?: Maybe<CreateCareerOfferingPayload>;
  readonly updateCareerOffering?: Maybe<UpdateCareerOfferingPayload>;
  readonly deleteCareerOffering?: Maybe<DeleteCareerOfferingPayload>;
  readonly updateCareer?: Maybe<UpdateCareerPayload>;
  readonly deleteCareer?: Maybe<DeleteCareerPayload>;
  readonly createCaseStudyMeta?: Maybe<CreateCaseStudyMetaPayload>;
  readonly updateCaseStudyMeta?: Maybe<UpdateCaseStudyMetaPayload>;
  readonly deleteCaseStudyMeta?: Maybe<DeleteCaseStudyMetaPayload>;
  readonly createCaseStudy?: Maybe<CreateCaseStudyPayload>;
  readonly updateCaseStudy?: Maybe<UpdateCaseStudyPayload>;
  readonly deleteCaseStudy?: Maybe<DeleteCaseStudyPayload>;
  readonly createContact?: Maybe<CreateContactPayload>;
  readonly updateContact?: Maybe<UpdateContactPayload>;
  readonly deleteContact?: Maybe<DeleteContactPayload>;
  readonly updateDynamicTest?: Maybe<UpdateDynamicTestPayload>;
  readonly deleteDynamicTest?: Maybe<DeleteDynamicTestPayload>;
  readonly updateFooter?: Maybe<UpdateFooterPayload>;
  readonly deleteFooter?: Maybe<DeleteFooterPayload>;
  readonly createHeader?: Maybe<CreateHeaderPayload>;
  readonly updateHeader?: Maybe<UpdateHeaderPayload>;
  readonly deleteHeader?: Maybe<DeleteHeaderPayload>;
  readonly updateHomepageNew?: Maybe<UpdateHomepageNewPayload>;
  readonly deleteHomepageNew?: Maybe<DeleteHomepageNewPayload>;
  readonly createHomepage?: Maybe<CreateHomepagePayload>;
  readonly updateHomepage?: Maybe<UpdateHomepagePayload>;
  readonly deleteHomepage?: Maybe<DeleteHomepagePayload>;
  readonly createHqGallery?: Maybe<CreateHqGalleryPayload>;
  readonly updateHqGallery?: Maybe<UpdateHqGalleryPayload>;
  readonly deleteHqGallery?: Maybe<DeleteHqGalleryPayload>;
  readonly createJob?: Maybe<CreateJobPayload>;
  readonly updateJob?: Maybe<UpdateJobPayload>;
  readonly deleteJob?: Maybe<DeleteJobPayload>;
  readonly createLanguage?: Maybe<CreateLanguagePayload>;
  readonly updateLanguage?: Maybe<UpdateLanguagePayload>;
  readonly deleteLanguage?: Maybe<DeleteLanguagePayload>;
  readonly createMenu?: Maybe<CreateMenuPayload>;
  readonly updateMenu?: Maybe<UpdateMenuPayload>;
  readonly deleteMenu?: Maybe<DeleteMenuPayload>;
  readonly createPage404?: Maybe<CreatePage404Payload>;
  readonly updatePage404?: Maybe<UpdatePage404Payload>;
  readonly deletePage404?: Maybe<DeletePage404Payload>;
  readonly createProduct?: Maybe<CreateProductPayload>;
  readonly updateProduct?: Maybe<UpdateProductPayload>;
  readonly deleteProduct?: Maybe<DeleteProductPayload>;
  readonly createSkill?: Maybe<CreateSkillPayload>;
  readonly updateSkill?: Maybe<UpdateSkillPayload>;
  readonly deleteSkill?: Maybe<DeleteSkillPayload>;
  readonly createSocialNetwork?: Maybe<CreateSocialNetworkPayload>;
  readonly updateSocialNetwork?: Maybe<UpdateSocialNetworkPayload>;
  readonly deleteSocialNetwork?: Maybe<DeleteSocialNetworkPayload>;
  readonly createTeam?: Maybe<CreateTeamPayload>;
  readonly updateTeam?: Maybe<UpdateTeamPayload>;
  readonly deleteTeam?: Maybe<DeleteTeamPayload>;
  readonly createTechList?: Maybe<CreateTechListPayload>;
  readonly updateTechList?: Maybe<UpdateTechListPayload>;
  readonly deleteTechList?: Maybe<DeleteTechListPayload>;
  readonly createWebhook?: Maybe<CreateWebhookPayload>;
  readonly updateWebhook?: Maybe<UpdateWebhookPayload>;
  readonly deleteWebhook?: Maybe<DeleteWebhookPayload>;
  /** Delete one file */
  readonly deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  readonly createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  readonly updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  readonly deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  readonly createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  readonly updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  readonly deleteUser?: Maybe<DeleteUserPayload>;
  readonly createAboutLocalization: About;
  readonly createCareerOfferingLocalization: CareerOfferings;
  readonly createCareerLocalization: Career;
  readonly createCaseStudyLocalization: CaseStudy;
  readonly createDynamicTestLocalization: DynamicTest;
  readonly createFooterLocalization: Footer;
  readonly createHomepageNewLocalization: HomepageNew;
  readonly createProductLocalization: Products;
  readonly upload: UploadFile;
  readonly multipleUpload: ReadonlyArray<Maybe<UploadFile>>;
  readonly updateFileInfo: UploadFile;
  readonly login: UsersPermissionsLoginPayload;
  readonly register: UsersPermissionsLoginPayload;
  readonly forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  readonly resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  readonly emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
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


export type MutationUpdateAboutArgs = {
  input?: Maybe<UpdateAboutInput>;
  locale?: Maybe<Scalars['String']>;
};


export type MutationDeleteAboutArgs = {
  locale?: Maybe<Scalars['String']>;
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


export type MutationUpdateDynamicTestArgs = {
  input?: Maybe<UpdateDynamicTestInput>;
  locale?: Maybe<Scalars['String']>;
};


export type MutationDeleteDynamicTestArgs = {
  locale?: Maybe<Scalars['String']>;
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


export type MutationCreateAboutLocalizationArgs = {
  input: UpdateAboutInput;
};


export type MutationCreateCareerOfferingLocalizationArgs = {
  input: UpdateCareerOfferingInput;
};


export type MutationCreateCareerLocalizationArgs = {
  input: UpdateCareerInput;
};


export type MutationCreateCaseStudyLocalizationArgs = {
  input: UpdateCaseStudyInput;
};


export type MutationCreateDynamicTestLocalizationArgs = {
  input: UpdateDynamicTestInput;
};


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
  files: ReadonlyArray<Maybe<Scalars['Upload']>>;
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

export type Page404 = {
  readonly __typename?: 'Page404';
  readonly id: Scalars['ID'];
  readonly created_at: Scalars['DateTime'];
  readonly updated_at: Scalars['DateTime'];
  readonly image?: Maybe<UploadFile>;
  readonly heading?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly link?: Maybe<Scalars['String']>;
  readonly language?: Maybe<Scalars['String']>;
  readonly bgText?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
};

export type Page404Aggregator = {
  readonly __typename?: 'Page404Aggregator';
  readonly count?: Maybe<Scalars['Int']>;
  readonly totalCount?: Maybe<Scalars['Int']>;
};

export type Page404Connection = {
  readonly __typename?: 'Page404Connection';
  readonly values?: Maybe<ReadonlyArray<Maybe<Page404>>>;
  readonly groupBy?: Maybe<Page404GroupBy>;
  readonly aggregate?: Maybe<Page404Aggregator>;
};

export type Page404ConnectionBgText = {
  readonly __typename?: 'Page404ConnectionBgText';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<Page404Connection>;
};

export type Page404ConnectionCreated_At = {
  readonly __typename?: 'Page404ConnectionCreated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<Page404Connection>;
};

export type Page404ConnectionDescription = {
  readonly __typename?: 'Page404ConnectionDescription';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<Page404Connection>;
};

export type Page404ConnectionHeading = {
  readonly __typename?: 'Page404ConnectionHeading';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<Page404Connection>;
};

export type Page404ConnectionId = {
  readonly __typename?: 'Page404ConnectionId';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<Page404Connection>;
};

export type Page404ConnectionImage = {
  readonly __typename?: 'Page404ConnectionImage';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<Page404Connection>;
};

export type Page404ConnectionLanguage = {
  readonly __typename?: 'Page404ConnectionLanguage';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<Page404Connection>;
};

export type Page404ConnectionLink = {
  readonly __typename?: 'Page404ConnectionLink';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<Page404Connection>;
};

export type Page404ConnectionPublished_At = {
  readonly __typename?: 'Page404ConnectionPublished_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<Page404Connection>;
};

export type Page404ConnectionUpdated_At = {
  readonly __typename?: 'Page404ConnectionUpdated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<Page404Connection>;
};

export type Page404GroupBy = {
  readonly __typename?: 'Page404GroupBy';
  readonly id?: Maybe<ReadonlyArray<Maybe<Page404ConnectionId>>>;
  readonly created_at?: Maybe<ReadonlyArray<Maybe<Page404ConnectionCreated_At>>>;
  readonly updated_at?: Maybe<ReadonlyArray<Maybe<Page404ConnectionUpdated_At>>>;
  readonly image?: Maybe<ReadonlyArray<Maybe<Page404ConnectionImage>>>;
  readonly heading?: Maybe<ReadonlyArray<Maybe<Page404ConnectionHeading>>>;
  readonly description?: Maybe<ReadonlyArray<Maybe<Page404ConnectionDescription>>>;
  readonly link?: Maybe<ReadonlyArray<Maybe<Page404ConnectionLink>>>;
  readonly language?: Maybe<ReadonlyArray<Maybe<Page404ConnectionLanguage>>>;
  readonly bgText?: Maybe<ReadonlyArray<Maybe<Page404ConnectionBgText>>>;
  readonly published_at?: Maybe<ReadonlyArray<Maybe<Page404ConnectionPublished_At>>>;
};

export type Page404Input = {
  readonly image?: Maybe<Scalars['ID']>;
  readonly heading?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly link?: Maybe<Scalars['String']>;
  readonly language?: Maybe<Scalars['String']>;
  readonly bgText?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type ProductInput = {
  readonly name: Scalars['String'];
  readonly slug: Scalars['String'];
  readonly localizations?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly locale?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type Products = {
  readonly __typename?: 'Products';
  readonly id: Scalars['ID'];
  readonly created_at: Scalars['DateTime'];
  readonly updated_at: Scalars['DateTime'];
  readonly name: Scalars['String'];
  readonly slug: Scalars['String'];
  readonly locale?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly localizations?: Maybe<ReadonlyArray<Maybe<Products>>>;
};


export type ProductsLocalizationsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ProductsAggregator = {
  readonly __typename?: 'ProductsAggregator';
  readonly count?: Maybe<Scalars['Int']>;
  readonly totalCount?: Maybe<Scalars['Int']>;
};

export type ProductsConnection = {
  readonly __typename?: 'ProductsConnection';
  readonly values?: Maybe<ReadonlyArray<Maybe<Products>>>;
  readonly groupBy?: Maybe<ProductsGroupBy>;
  readonly aggregate?: Maybe<ProductsAggregator>;
};

export type ProductsConnectionCreated_At = {
  readonly __typename?: 'ProductsConnectionCreated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionId = {
  readonly __typename?: 'ProductsConnectionId';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionLocale = {
  readonly __typename?: 'ProductsConnectionLocale';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionName = {
  readonly __typename?: 'ProductsConnectionName';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionPublished_At = {
  readonly __typename?: 'ProductsConnectionPublished_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionSlug = {
  readonly __typename?: 'ProductsConnectionSlug';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<ProductsConnection>;
};

export type ProductsConnectionUpdated_At = {
  readonly __typename?: 'ProductsConnectionUpdated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<ProductsConnection>;
};

export type ProductsGroupBy = {
  readonly __typename?: 'ProductsGroupBy';
  readonly id?: Maybe<ReadonlyArray<Maybe<ProductsConnectionId>>>;
  readonly created_at?: Maybe<ReadonlyArray<Maybe<ProductsConnectionCreated_At>>>;
  readonly updated_at?: Maybe<ReadonlyArray<Maybe<ProductsConnectionUpdated_At>>>;
  readonly name?: Maybe<ReadonlyArray<Maybe<ProductsConnectionName>>>;
  readonly slug?: Maybe<ReadonlyArray<Maybe<ProductsConnectionSlug>>>;
  readonly locale?: Maybe<ReadonlyArray<Maybe<ProductsConnectionLocale>>>;
  readonly published_at?: Maybe<ReadonlyArray<Maybe<ProductsConnectionPublished_At>>>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  readonly __typename?: 'Query';
  readonly aboutUs?: Maybe<AboutUs>;
  readonly aboutuses?: Maybe<ReadonlyArray<Maybe<AboutUs>>>;
  readonly aboutusesConnection?: Maybe<AboutUsConnection>;
  readonly aboutWeAreImageCarousel?: Maybe<AboutWeAreImageCarousel>;
  readonly about?: Maybe<About>;
  readonly brandValue?: Maybe<BrandValue>;
  readonly brandValues?: Maybe<ReadonlyArray<Maybe<BrandValue>>>;
  readonly brandValuesConnection?: Maybe<BrandValueConnection>;
  readonly careerOffering?: Maybe<CareerOfferings>;
  readonly careerOfferings?: Maybe<ReadonlyArray<Maybe<CareerOfferings>>>;
  readonly careerOfferingsConnection?: Maybe<CareerOfferingsConnection>;
  readonly career?: Maybe<Career>;
  readonly caseStudyMeta?: Maybe<CaseStudyMeta>;
  readonly caseStudyMetas?: Maybe<ReadonlyArray<Maybe<CaseStudyMeta>>>;
  readonly caseStudyMetasConnection?: Maybe<CaseStudyMetaConnection>;
  readonly caseStudy?: Maybe<CaseStudy>;
  readonly caseStudies?: Maybe<ReadonlyArray<Maybe<CaseStudy>>>;
  readonly caseStudiesConnection?: Maybe<CaseStudyConnection>;
  readonly contact?: Maybe<Contact>;
  readonly contacts?: Maybe<ReadonlyArray<Maybe<Contact>>>;
  readonly contactsConnection?: Maybe<ContactConnection>;
  readonly dynamicTest?: Maybe<DynamicTest>;
  readonly footer?: Maybe<Footer>;
  readonly header?: Maybe<Header>;
  readonly headers?: Maybe<ReadonlyArray<Maybe<Header>>>;
  readonly headersConnection?: Maybe<HeaderConnection>;
  readonly homepageNew?: Maybe<HomepageNew>;
  readonly homepage?: Maybe<Homepage>;
  readonly homepages?: Maybe<ReadonlyArray<Maybe<Homepage>>>;
  readonly homepagesConnection?: Maybe<HomepageConnection>;
  readonly hqGallery?: Maybe<HqGallery>;
  readonly hqGalleries?: Maybe<ReadonlyArray<Maybe<HqGallery>>>;
  readonly hqGalleriesConnection?: Maybe<HqGalleryConnection>;
  readonly job?: Maybe<Job>;
  readonly jobs?: Maybe<ReadonlyArray<Maybe<Job>>>;
  readonly jobsConnection?: Maybe<JobConnection>;
  readonly language?: Maybe<Language>;
  readonly languages?: Maybe<ReadonlyArray<Maybe<Language>>>;
  readonly languagesConnection?: Maybe<LanguageConnection>;
  readonly menu?: Maybe<Menu>;
  readonly menus?: Maybe<ReadonlyArray<Maybe<Menu>>>;
  readonly menusConnection?: Maybe<MenuConnection>;
  readonly page404?: Maybe<Page404>;
  readonly page404s?: Maybe<ReadonlyArray<Maybe<Page404>>>;
  readonly page404sConnection?: Maybe<Page404Connection>;
  readonly product?: Maybe<Products>;
  readonly products?: Maybe<ReadonlyArray<Maybe<Products>>>;
  readonly productsConnection?: Maybe<ProductsConnection>;
  readonly skill?: Maybe<Skill>;
  readonly skills?: Maybe<ReadonlyArray<Maybe<Skill>>>;
  readonly skillsConnection?: Maybe<SkillConnection>;
  readonly socialNetwork?: Maybe<SocialNetwork>;
  readonly socialNetworks?: Maybe<ReadonlyArray<Maybe<SocialNetwork>>>;
  readonly socialNetworksConnection?: Maybe<SocialNetworkConnection>;
  readonly team?: Maybe<Team>;
  readonly teams?: Maybe<ReadonlyArray<Maybe<Team>>>;
  readonly teamsConnection?: Maybe<TeamConnection>;
  readonly techList?: Maybe<TechList>;
  readonly techLists?: Maybe<ReadonlyArray<Maybe<TechList>>>;
  readonly techListsConnection?: Maybe<TechListConnection>;
  readonly webhook?: Maybe<Webhook>;
  readonly webhooks?: Maybe<ReadonlyArray<Maybe<Webhook>>>;
  readonly webhooksConnection?: Maybe<WebhookConnection>;
  readonly files?: Maybe<ReadonlyArray<Maybe<UploadFile>>>;
  readonly filesConnection?: Maybe<UploadFileConnection>;
  readonly role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  readonly roles?: Maybe<ReadonlyArray<Maybe<UsersPermissionsRole>>>;
  readonly rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  readonly user?: Maybe<UsersPermissionsUser>;
  readonly users?: Maybe<ReadonlyArray<Maybe<UsersPermissionsUser>>>;
  readonly usersConnection?: Maybe<UsersPermissionsUserConnection>;
  readonly me?: Maybe<UsersPermissionsMe>;
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


export type QueryAboutArgs = {
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['String']>;
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
  locale?: Maybe<Scalars['String']>;
};


export type QueryCareerOfferingsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  locale?: Maybe<Scalars['String']>;
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


export type QueryDynamicTestArgs = {
  publicationState?: Maybe<PublicationState>;
  locale?: Maybe<Scalars['String']>;
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

export type RoleInput = {
  readonly name: Scalars['String'];
  readonly description?: Maybe<Scalars['String']>;
  readonly type?: Maybe<Scalars['String']>;
  readonly permissions?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly users?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type Skill = {
  readonly __typename?: 'Skill';
  readonly id: Scalars['ID'];
  readonly created_at: Scalars['DateTime'];
  readonly updated_at: Scalars['DateTime'];
  readonly title?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly titleColorHash?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
};

export type SkillAggregator = {
  readonly __typename?: 'SkillAggregator';
  readonly count?: Maybe<Scalars['Int']>;
  readonly totalCount?: Maybe<Scalars['Int']>;
};

export type SkillConnection = {
  readonly __typename?: 'SkillConnection';
  readonly values?: Maybe<ReadonlyArray<Maybe<Skill>>>;
  readonly groupBy?: Maybe<SkillGroupBy>;
  readonly aggregate?: Maybe<SkillAggregator>;
};

export type SkillConnectionCreated_At = {
  readonly __typename?: 'SkillConnectionCreated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<SkillConnection>;
};

export type SkillConnectionDescription = {
  readonly __typename?: 'SkillConnectionDescription';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<SkillConnection>;
};

export type SkillConnectionId = {
  readonly __typename?: 'SkillConnectionId';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<SkillConnection>;
};

export type SkillConnectionPublished_At = {
  readonly __typename?: 'SkillConnectionPublished_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<SkillConnection>;
};

export type SkillConnectionTitle = {
  readonly __typename?: 'SkillConnectionTitle';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<SkillConnection>;
};

export type SkillConnectionTitleColorHash = {
  readonly __typename?: 'SkillConnectionTitleColorHash';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<SkillConnection>;
};

export type SkillConnectionUpdated_At = {
  readonly __typename?: 'SkillConnectionUpdated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<SkillConnection>;
};

export type SkillGroupBy = {
  readonly __typename?: 'SkillGroupBy';
  readonly id?: Maybe<ReadonlyArray<Maybe<SkillConnectionId>>>;
  readonly created_at?: Maybe<ReadonlyArray<Maybe<SkillConnectionCreated_At>>>;
  readonly updated_at?: Maybe<ReadonlyArray<Maybe<SkillConnectionUpdated_At>>>;
  readonly title?: Maybe<ReadonlyArray<Maybe<SkillConnectionTitle>>>;
  readonly description?: Maybe<ReadonlyArray<Maybe<SkillConnectionDescription>>>;
  readonly titleColorHash?: Maybe<ReadonlyArray<Maybe<SkillConnectionTitleColorHash>>>;
  readonly published_at?: Maybe<ReadonlyArray<Maybe<SkillConnectionPublished_At>>>;
};

export type SkillInput = {
  readonly title?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly titleColorHash?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type SocialNetwork = {
  readonly __typename?: 'SocialNetwork';
  readonly id: Scalars['ID'];
  readonly created_at: Scalars['DateTime'];
  readonly updated_at: Scalars['DateTime'];
  readonly name?: Maybe<Scalars['String']>;
  readonly url?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
};

export type SocialNetworkAggregator = {
  readonly __typename?: 'SocialNetworkAggregator';
  readonly count?: Maybe<Scalars['Int']>;
  readonly totalCount?: Maybe<Scalars['Int']>;
};

export type SocialNetworkConnection = {
  readonly __typename?: 'SocialNetworkConnection';
  readonly values?: Maybe<ReadonlyArray<Maybe<SocialNetwork>>>;
  readonly groupBy?: Maybe<SocialNetworkGroupBy>;
  readonly aggregate?: Maybe<SocialNetworkAggregator>;
};

export type SocialNetworkConnectionCreated_At = {
  readonly __typename?: 'SocialNetworkConnectionCreated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<SocialNetworkConnection>;
};

export type SocialNetworkConnectionId = {
  readonly __typename?: 'SocialNetworkConnectionId';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<SocialNetworkConnection>;
};

export type SocialNetworkConnectionName = {
  readonly __typename?: 'SocialNetworkConnectionName';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<SocialNetworkConnection>;
};

export type SocialNetworkConnectionPublished_At = {
  readonly __typename?: 'SocialNetworkConnectionPublished_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<SocialNetworkConnection>;
};

export type SocialNetworkConnectionUpdated_At = {
  readonly __typename?: 'SocialNetworkConnectionUpdated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<SocialNetworkConnection>;
};

export type SocialNetworkConnectionUrl = {
  readonly __typename?: 'SocialNetworkConnectionUrl';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<SocialNetworkConnection>;
};

export type SocialNetworkGroupBy = {
  readonly __typename?: 'SocialNetworkGroupBy';
  readonly id?: Maybe<ReadonlyArray<Maybe<SocialNetworkConnectionId>>>;
  readonly created_at?: Maybe<ReadonlyArray<Maybe<SocialNetworkConnectionCreated_At>>>;
  readonly updated_at?: Maybe<ReadonlyArray<Maybe<SocialNetworkConnectionUpdated_At>>>;
  readonly name?: Maybe<ReadonlyArray<Maybe<SocialNetworkConnectionName>>>;
  readonly url?: Maybe<ReadonlyArray<Maybe<SocialNetworkConnectionUrl>>>;
  readonly published_at?: Maybe<ReadonlyArray<Maybe<SocialNetworkConnectionPublished_At>>>;
};

export type SocialNetworkInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly url?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type Team = {
  readonly __typename?: 'Team';
  readonly id: Scalars['ID'];
  readonly created_at: Scalars['DateTime'];
  readonly updated_at: Scalars['DateTime'];
  readonly name: Scalars['String'];
  readonly position: Scalars['String'];
  readonly video?: Maybe<UploadFile>;
  readonly sort: Scalars['Int'];
  readonly published_at?: Maybe<Scalars['DateTime']>;
};

export type TeamAggregator = {
  readonly __typename?: 'TeamAggregator';
  readonly count?: Maybe<Scalars['Int']>;
  readonly totalCount?: Maybe<Scalars['Int']>;
  readonly sum?: Maybe<TeamAggregatorSum>;
  readonly avg?: Maybe<TeamAggregatorAvg>;
  readonly min?: Maybe<TeamAggregatorMin>;
  readonly max?: Maybe<TeamAggregatorMax>;
};

export type TeamAggregatorAvg = {
  readonly __typename?: 'TeamAggregatorAvg';
  readonly sort?: Maybe<Scalars['Float']>;
};

export type TeamAggregatorMax = {
  readonly __typename?: 'TeamAggregatorMax';
  readonly sort?: Maybe<Scalars['Float']>;
};

export type TeamAggregatorMin = {
  readonly __typename?: 'TeamAggregatorMin';
  readonly sort?: Maybe<Scalars['Float']>;
};

export type TeamAggregatorSum = {
  readonly __typename?: 'TeamAggregatorSum';
  readonly sort?: Maybe<Scalars['Float']>;
};

export type TeamConnection = {
  readonly __typename?: 'TeamConnection';
  readonly values?: Maybe<ReadonlyArray<Maybe<Team>>>;
  readonly groupBy?: Maybe<TeamGroupBy>;
  readonly aggregate?: Maybe<TeamAggregator>;
};

export type TeamConnectionCreated_At = {
  readonly __typename?: 'TeamConnectionCreated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<TeamConnection>;
};

export type TeamConnectionId = {
  readonly __typename?: 'TeamConnectionId';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<TeamConnection>;
};

export type TeamConnectionName = {
  readonly __typename?: 'TeamConnectionName';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<TeamConnection>;
};

export type TeamConnectionPosition = {
  readonly __typename?: 'TeamConnectionPosition';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<TeamConnection>;
};

export type TeamConnectionPublished_At = {
  readonly __typename?: 'TeamConnectionPublished_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<TeamConnection>;
};

export type TeamConnectionSort = {
  readonly __typename?: 'TeamConnectionSort';
  readonly key?: Maybe<Scalars['Int']>;
  readonly connection?: Maybe<TeamConnection>;
};

export type TeamConnectionUpdated_At = {
  readonly __typename?: 'TeamConnectionUpdated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<TeamConnection>;
};

export type TeamConnectionVideo = {
  readonly __typename?: 'TeamConnectionVideo';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<TeamConnection>;
};

export type TeamGroupBy = {
  readonly __typename?: 'TeamGroupBy';
  readonly id?: Maybe<ReadonlyArray<Maybe<TeamConnectionId>>>;
  readonly created_at?: Maybe<ReadonlyArray<Maybe<TeamConnectionCreated_At>>>;
  readonly updated_at?: Maybe<ReadonlyArray<Maybe<TeamConnectionUpdated_At>>>;
  readonly name?: Maybe<ReadonlyArray<Maybe<TeamConnectionName>>>;
  readonly position?: Maybe<ReadonlyArray<Maybe<TeamConnectionPosition>>>;
  readonly video?: Maybe<ReadonlyArray<Maybe<TeamConnectionVideo>>>;
  readonly sort?: Maybe<ReadonlyArray<Maybe<TeamConnectionSort>>>;
  readonly published_at?: Maybe<ReadonlyArray<Maybe<TeamConnectionPublished_At>>>;
};

export type TeamInput = {
  readonly name: Scalars['String'];
  readonly position: Scalars['String'];
  readonly video?: Maybe<Scalars['ID']>;
  readonly sort: Scalars['Int'];
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type TechList = {
  readonly __typename?: 'TechList';
  readonly id: Scalars['ID'];
  readonly created_at: Scalars['DateTime'];
  readonly updated_at: Scalars['DateTime'];
  readonly name: Scalars['String'];
  readonly published_at?: Maybe<Scalars['DateTime']>;
};

export type TechListAggregator = {
  readonly __typename?: 'TechListAggregator';
  readonly count?: Maybe<Scalars['Int']>;
  readonly totalCount?: Maybe<Scalars['Int']>;
};

export type TechListConnection = {
  readonly __typename?: 'TechListConnection';
  readonly values?: Maybe<ReadonlyArray<Maybe<TechList>>>;
  readonly groupBy?: Maybe<TechListGroupBy>;
  readonly aggregate?: Maybe<TechListAggregator>;
};

export type TechListConnectionCreated_At = {
  readonly __typename?: 'TechListConnectionCreated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<TechListConnection>;
};

export type TechListConnectionId = {
  readonly __typename?: 'TechListConnectionId';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<TechListConnection>;
};

export type TechListConnectionName = {
  readonly __typename?: 'TechListConnectionName';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<TechListConnection>;
};

export type TechListConnectionPublished_At = {
  readonly __typename?: 'TechListConnectionPublished_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<TechListConnection>;
};

export type TechListConnectionUpdated_At = {
  readonly __typename?: 'TechListConnectionUpdated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<TechListConnection>;
};

export type TechListGroupBy = {
  readonly __typename?: 'TechListGroupBy';
  readonly id?: Maybe<ReadonlyArray<Maybe<TechListConnectionId>>>;
  readonly created_at?: Maybe<ReadonlyArray<Maybe<TechListConnectionCreated_At>>>;
  readonly updated_at?: Maybe<ReadonlyArray<Maybe<TechListConnectionUpdated_At>>>;
  readonly name?: Maybe<ReadonlyArray<Maybe<TechListConnectionName>>>;
  readonly published_at?: Maybe<ReadonlyArray<Maybe<TechListConnectionPublished_At>>>;
};

export type TechListInput = {
  readonly name: Scalars['String'];
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};



export type UploadFile = {
  readonly __typename?: 'UploadFile';
  readonly id: Scalars['ID'];
  readonly created_at: Scalars['DateTime'];
  readonly updated_at: Scalars['DateTime'];
  readonly name: Scalars['String'];
  readonly alternativeText?: Maybe<Scalars['String']>;
  readonly caption?: Maybe<Scalars['String']>;
  readonly width?: Maybe<Scalars['Int']>;
  readonly height?: Maybe<Scalars['Int']>;
  readonly formats?: Maybe<Scalars['JSON']>;
  readonly hash: Scalars['String'];
  readonly ext?: Maybe<Scalars['String']>;
  readonly mime: Scalars['String'];
  readonly size: Scalars['Float'];
  readonly url: Scalars['String'];
  readonly previewUrl?: Maybe<Scalars['String']>;
  readonly provider: Scalars['String'];
  readonly provider_metadata?: Maybe<Scalars['JSON']>;
  readonly related?: Maybe<ReadonlyArray<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  readonly __typename?: 'UploadFileAggregator';
  readonly count?: Maybe<Scalars['Int']>;
  readonly totalCount?: Maybe<Scalars['Int']>;
  readonly sum?: Maybe<UploadFileAggregatorSum>;
  readonly avg?: Maybe<UploadFileAggregatorAvg>;
  readonly min?: Maybe<UploadFileAggregatorMin>;
  readonly max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorAvg = {
  readonly __typename?: 'UploadFileAggregatorAvg';
  readonly width?: Maybe<Scalars['Float']>;
  readonly height?: Maybe<Scalars['Float']>;
  readonly size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  readonly __typename?: 'UploadFileAggregatorMax';
  readonly width?: Maybe<Scalars['Float']>;
  readonly height?: Maybe<Scalars['Float']>;
  readonly size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  readonly __typename?: 'UploadFileAggregatorMin';
  readonly width?: Maybe<Scalars['Float']>;
  readonly height?: Maybe<Scalars['Float']>;
  readonly size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  readonly __typename?: 'UploadFileAggregatorSum';
  readonly width?: Maybe<Scalars['Float']>;
  readonly height?: Maybe<Scalars['Float']>;
  readonly size?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  readonly __typename?: 'UploadFileConnection';
  readonly values?: Maybe<ReadonlyArray<Maybe<UploadFile>>>;
  readonly groupBy?: Maybe<UploadFileGroupBy>;
  readonly aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileConnectionAlternativeText = {
  readonly __typename?: 'UploadFileConnectionAlternativeText';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  readonly __typename?: 'UploadFileConnectionCaption';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  readonly __typename?: 'UploadFileConnectionCreated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  readonly __typename?: 'UploadFileConnectionExt';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  readonly __typename?: 'UploadFileConnectionFormats';
  readonly key?: Maybe<Scalars['JSON']>;
  readonly connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  readonly __typename?: 'UploadFileConnectionHash';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  readonly __typename?: 'UploadFileConnectionHeight';
  readonly key?: Maybe<Scalars['Int']>;
  readonly connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionId = {
  readonly __typename?: 'UploadFileConnectionId';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  readonly __typename?: 'UploadFileConnectionMime';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  readonly __typename?: 'UploadFileConnectionName';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  readonly __typename?: 'UploadFileConnectionPreviewUrl';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  readonly __typename?: 'UploadFileConnectionProvider';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  readonly __typename?: 'UploadFileConnectionProvider_metadata';
  readonly key?: Maybe<Scalars['JSON']>;
  readonly connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  readonly __typename?: 'UploadFileConnectionSize';
  readonly key?: Maybe<Scalars['Float']>;
  readonly connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  readonly __typename?: 'UploadFileConnectionUpdated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  readonly __typename?: 'UploadFileConnectionUrl';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  readonly __typename?: 'UploadFileConnectionWidth';
  readonly key?: Maybe<Scalars['Int']>;
  readonly connection?: Maybe<UploadFileConnection>;
};

export type UploadFileGroupBy = {
  readonly __typename?: 'UploadFileGroupBy';
  readonly id?: Maybe<ReadonlyArray<Maybe<UploadFileConnectionId>>>;
  readonly created_at?: Maybe<ReadonlyArray<Maybe<UploadFileConnectionCreated_At>>>;
  readonly updated_at?: Maybe<ReadonlyArray<Maybe<UploadFileConnectionUpdated_At>>>;
  readonly name?: Maybe<ReadonlyArray<Maybe<UploadFileConnectionName>>>;
  readonly alternativeText?: Maybe<ReadonlyArray<Maybe<UploadFileConnectionAlternativeText>>>;
  readonly caption?: Maybe<ReadonlyArray<Maybe<UploadFileConnectionCaption>>>;
  readonly width?: Maybe<ReadonlyArray<Maybe<UploadFileConnectionWidth>>>;
  readonly height?: Maybe<ReadonlyArray<Maybe<UploadFileConnectionHeight>>>;
  readonly formats?: Maybe<ReadonlyArray<Maybe<UploadFileConnectionFormats>>>;
  readonly hash?: Maybe<ReadonlyArray<Maybe<UploadFileConnectionHash>>>;
  readonly ext?: Maybe<ReadonlyArray<Maybe<UploadFileConnectionExt>>>;
  readonly mime?: Maybe<ReadonlyArray<Maybe<UploadFileConnectionMime>>>;
  readonly size?: Maybe<ReadonlyArray<Maybe<UploadFileConnectionSize>>>;
  readonly url?: Maybe<ReadonlyArray<Maybe<UploadFileConnectionUrl>>>;
  readonly previewUrl?: Maybe<ReadonlyArray<Maybe<UploadFileConnectionPreviewUrl>>>;
  readonly provider?: Maybe<ReadonlyArray<Maybe<UploadFileConnectionProvider>>>;
  readonly provider_metadata?: Maybe<ReadonlyArray<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UserInput = {
  readonly username: Scalars['String'];
  readonly email: Scalars['String'];
  readonly provider?: Maybe<Scalars['String']>;
  readonly password?: Maybe<Scalars['String']>;
  readonly resetPasswordToken?: Maybe<Scalars['String']>;
  readonly confirmationToken?: Maybe<Scalars['String']>;
  readonly confirmed?: Maybe<Scalars['Boolean']>;
  readonly blocked?: Maybe<Scalars['Boolean']>;
  readonly role?: Maybe<Scalars['ID']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type UserPermissionsPasswordPayload = {
  readonly __typename?: 'UserPermissionsPasswordPayload';
  readonly ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  readonly identifier: Scalars['String'];
  readonly password: Scalars['String'];
  readonly provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  readonly __typename?: 'UsersPermissionsLoginPayload';
  readonly jwt?: Maybe<Scalars['String']>;
  readonly user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  readonly __typename?: 'UsersPermissionsMe';
  readonly id: Scalars['ID'];
  readonly username: Scalars['String'];
  readonly email: Scalars['String'];
  readonly confirmed?: Maybe<Scalars['Boolean']>;
  readonly blocked?: Maybe<Scalars['Boolean']>;
  readonly role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  readonly __typename?: 'UsersPermissionsMeRole';
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly description?: Maybe<Scalars['String']>;
  readonly type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  readonly __typename?: 'UsersPermissionsPermission';
  readonly id: Scalars['ID'];
  readonly type: Scalars['String'];
  readonly controller: Scalars['String'];
  readonly action: Scalars['String'];
  readonly enabled: Scalars['Boolean'];
  readonly policy?: Maybe<Scalars['String']>;
  readonly role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRegisterInput = {
  readonly username: Scalars['String'];
  readonly email: Scalars['String'];
  readonly password: Scalars['String'];
};

export type UsersPermissionsRole = {
  readonly __typename?: 'UsersPermissionsRole';
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly description?: Maybe<Scalars['String']>;
  readonly type?: Maybe<Scalars['String']>;
  readonly permissions?: Maybe<ReadonlyArray<Maybe<UsersPermissionsPermission>>>;
  readonly users?: Maybe<ReadonlyArray<Maybe<UsersPermissionsUser>>>;
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

export type UsersPermissionsRoleAggregator = {
  readonly __typename?: 'UsersPermissionsRoleAggregator';
  readonly count?: Maybe<Scalars['Int']>;
  readonly totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  readonly __typename?: 'UsersPermissionsRoleConnection';
  readonly values?: Maybe<ReadonlyArray<Maybe<UsersPermissionsRole>>>;
  readonly groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  readonly aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleConnectionDescription = {
  readonly __typename?: 'UsersPermissionsRoleConnectionDescription';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionId = {
  readonly __typename?: 'UsersPermissionsRoleConnectionId';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  readonly __typename?: 'UsersPermissionsRoleConnectionName';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  readonly __typename?: 'UsersPermissionsRoleConnectionType';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleGroupBy = {
  readonly __typename?: 'UsersPermissionsRoleGroupBy';
  readonly id?: Maybe<ReadonlyArray<Maybe<UsersPermissionsRoleConnectionId>>>;
  readonly name?: Maybe<ReadonlyArray<Maybe<UsersPermissionsRoleConnectionName>>>;
  readonly description?: Maybe<ReadonlyArray<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  readonly type?: Maybe<ReadonlyArray<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  readonly __typename?: 'UsersPermissionsUser';
  readonly id: Scalars['ID'];
  readonly created_at: Scalars['DateTime'];
  readonly updated_at: Scalars['DateTime'];
  readonly username: Scalars['String'];
  readonly email: Scalars['String'];
  readonly provider?: Maybe<Scalars['String']>;
  readonly confirmed?: Maybe<Scalars['Boolean']>;
  readonly blocked?: Maybe<Scalars['Boolean']>;
  readonly role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserAggregator = {
  readonly __typename?: 'UsersPermissionsUserAggregator';
  readonly count?: Maybe<Scalars['Int']>;
  readonly totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  readonly __typename?: 'UsersPermissionsUserConnection';
  readonly values?: Maybe<ReadonlyArray<Maybe<UsersPermissionsUser>>>;
  readonly groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  readonly aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserConnectionBlocked = {
  readonly __typename?: 'UsersPermissionsUserConnectionBlocked';
  readonly key?: Maybe<Scalars['Boolean']>;
  readonly connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  readonly __typename?: 'UsersPermissionsUserConnectionConfirmed';
  readonly key?: Maybe<Scalars['Boolean']>;
  readonly connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  readonly __typename?: 'UsersPermissionsUserConnectionCreated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  readonly __typename?: 'UsersPermissionsUserConnectionEmail';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionId = {
  readonly __typename?: 'UsersPermissionsUserConnectionId';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  readonly __typename?: 'UsersPermissionsUserConnectionProvider';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  readonly __typename?: 'UsersPermissionsUserConnectionRole';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  readonly __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  readonly __typename?: 'UsersPermissionsUserConnectionUsername';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserGroupBy = {
  readonly __typename?: 'UsersPermissionsUserGroupBy';
  readonly id?: Maybe<ReadonlyArray<Maybe<UsersPermissionsUserConnectionId>>>;
  readonly created_at?: Maybe<ReadonlyArray<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  readonly updated_at?: Maybe<ReadonlyArray<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  readonly username?: Maybe<ReadonlyArray<Maybe<UsersPermissionsUserConnectionUsername>>>;
  readonly email?: Maybe<ReadonlyArray<Maybe<UsersPermissionsUserConnectionEmail>>>;
  readonly provider?: Maybe<ReadonlyArray<Maybe<UsersPermissionsUserConnectionProvider>>>;
  readonly confirmed?: Maybe<ReadonlyArray<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  readonly blocked?: Maybe<ReadonlyArray<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  readonly role?: Maybe<ReadonlyArray<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type Webhook = {
  readonly __typename?: 'Webhook';
  readonly id: Scalars['ID'];
  readonly created_at: Scalars['DateTime'];
  readonly updated_at: Scalars['DateTime'];
  readonly name?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
};

export type WebhookAggregator = {
  readonly __typename?: 'WebhookAggregator';
  readonly count?: Maybe<Scalars['Int']>;
  readonly totalCount?: Maybe<Scalars['Int']>;
};

export type WebhookConnection = {
  readonly __typename?: 'WebhookConnection';
  readonly values?: Maybe<ReadonlyArray<Maybe<Webhook>>>;
  readonly groupBy?: Maybe<WebhookGroupBy>;
  readonly aggregate?: Maybe<WebhookAggregator>;
};

export type WebhookConnectionCreated_At = {
  readonly __typename?: 'WebhookConnectionCreated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<WebhookConnection>;
};

export type WebhookConnectionId = {
  readonly __typename?: 'WebhookConnectionId';
  readonly key?: Maybe<Scalars['ID']>;
  readonly connection?: Maybe<WebhookConnection>;
};

export type WebhookConnectionName = {
  readonly __typename?: 'WebhookConnectionName';
  readonly key?: Maybe<Scalars['String']>;
  readonly connection?: Maybe<WebhookConnection>;
};

export type WebhookConnectionPublished_At = {
  readonly __typename?: 'WebhookConnectionPublished_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<WebhookConnection>;
};

export type WebhookConnectionUpdated_At = {
  readonly __typename?: 'WebhookConnectionUpdated_at';
  readonly key?: Maybe<Scalars['DateTime']>;
  readonly connection?: Maybe<WebhookConnection>;
};

export type WebhookGroupBy = {
  readonly __typename?: 'WebhookGroupBy';
  readonly id?: Maybe<ReadonlyArray<Maybe<WebhookConnectionId>>>;
  readonly created_at?: Maybe<ReadonlyArray<Maybe<WebhookConnectionCreated_At>>>;
  readonly updated_at?: Maybe<ReadonlyArray<Maybe<WebhookConnectionUpdated_At>>>;
  readonly name?: Maybe<ReadonlyArray<Maybe<WebhookConnectionName>>>;
  readonly published_at?: Maybe<ReadonlyArray<Maybe<WebhookConnectionPublished_At>>>;
};

export type WebhookInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type CreateAboutUsInput = {
  readonly data?: Maybe<AboutUsInput>;
};

export type CreateAboutUsPayload = {
  readonly __typename?: 'createAboutUsPayload';
  readonly aboutUs?: Maybe<AboutUs>;
};

export type CreateBrandValueInput = {
  readonly data?: Maybe<BrandValueInput>;
};

export type CreateBrandValuePayload = {
  readonly __typename?: 'createBrandValuePayload';
  readonly brandValue?: Maybe<BrandValue>;
};

export type CreateCareerOfferingInput = {
  readonly data?: Maybe<CareerOfferingInput>;
};

export type CreateCareerOfferingPayload = {
  readonly __typename?: 'createCareerOfferingPayload';
  readonly careerOffering?: Maybe<CareerOfferings>;
};

export type CreateCaseStudyInput = {
  readonly data?: Maybe<CaseStudyInput>;
};

export type CreateCaseStudyMetaInput = {
  readonly data?: Maybe<CaseStudyMetaInput>;
};

export type CreateCaseStudyMetaPayload = {
  readonly __typename?: 'createCaseStudyMetaPayload';
  readonly caseStudyMeta?: Maybe<CaseStudyMeta>;
};

export type CreateCaseStudyPayload = {
  readonly __typename?: 'createCaseStudyPayload';
  readonly caseStudy?: Maybe<CaseStudy>;
};

export type CreateContactInput = {
  readonly data?: Maybe<ContactInput>;
};

export type CreateContactPayload = {
  readonly __typename?: 'createContactPayload';
  readonly contact?: Maybe<Contact>;
};

export type CreateHeaderInput = {
  readonly data?: Maybe<HeaderInput>;
};

export type CreateHeaderPayload = {
  readonly __typename?: 'createHeaderPayload';
  readonly header?: Maybe<Header>;
};

export type CreateHomepageInput = {
  readonly data?: Maybe<HomepageInput>;
};

export type CreateHomepagePayload = {
  readonly __typename?: 'createHomepagePayload';
  readonly homepage?: Maybe<Homepage>;
};

export type CreateHqGalleryInput = {
  readonly data?: Maybe<HqGalleryInput>;
};

export type CreateHqGalleryPayload = {
  readonly __typename?: 'createHqGalleryPayload';
  readonly hqGallery?: Maybe<HqGallery>;
};

export type CreateJobInput = {
  readonly data?: Maybe<JobInput>;
};

export type CreateJobPayload = {
  readonly __typename?: 'createJobPayload';
  readonly job?: Maybe<Job>;
};

export type CreateLanguageInput = {
  readonly data?: Maybe<LanguageInput>;
};

export type CreateLanguagePayload = {
  readonly __typename?: 'createLanguagePayload';
  readonly language?: Maybe<Language>;
};

export type CreateMenuInput = {
  readonly data?: Maybe<MenuInput>;
};

export type CreateMenuPayload = {
  readonly __typename?: 'createMenuPayload';
  readonly menu?: Maybe<Menu>;
};

export type CreatePage404Input = {
  readonly data?: Maybe<Page404Input>;
};

export type CreatePage404Payload = {
  readonly __typename?: 'createPage404Payload';
  readonly page404?: Maybe<Page404>;
};

export type CreateProductInput = {
  readonly data?: Maybe<ProductInput>;
};

export type CreateProductPayload = {
  readonly __typename?: 'createProductPayload';
  readonly product?: Maybe<Products>;
};

export type CreateRoleInput = {
  readonly data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  readonly __typename?: 'createRolePayload';
  readonly role?: Maybe<UsersPermissionsRole>;
};

export type CreateSkillInput = {
  readonly data?: Maybe<SkillInput>;
};

export type CreateSkillPayload = {
  readonly __typename?: 'createSkillPayload';
  readonly skill?: Maybe<Skill>;
};

export type CreateSocialNetworkInput = {
  readonly data?: Maybe<SocialNetworkInput>;
};

export type CreateSocialNetworkPayload = {
  readonly __typename?: 'createSocialNetworkPayload';
  readonly socialNetwork?: Maybe<SocialNetwork>;
};

export type CreateTeamInput = {
  readonly data?: Maybe<TeamInput>;
};

export type CreateTeamPayload = {
  readonly __typename?: 'createTeamPayload';
  readonly team?: Maybe<Team>;
};

export type CreateTechListInput = {
  readonly data?: Maybe<TechListInput>;
};

export type CreateTechListPayload = {
  readonly __typename?: 'createTechListPayload';
  readonly techList?: Maybe<TechList>;
};

export type CreateUserInput = {
  readonly data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  readonly __typename?: 'createUserPayload';
  readonly user?: Maybe<UsersPermissionsUser>;
};

export type CreateWebhookInput = {
  readonly data?: Maybe<WebhookInput>;
};

export type CreateWebhookPayload = {
  readonly __typename?: 'createWebhookPayload';
  readonly webhook?: Maybe<Webhook>;
};

export type DeleteAboutPayload = {
  readonly __typename?: 'deleteAboutPayload';
  readonly about?: Maybe<About>;
};

export type DeleteAboutUsInput = {
  readonly where?: Maybe<InputId>;
};

export type DeleteAboutUsPayload = {
  readonly __typename?: 'deleteAboutUsPayload';
  readonly aboutUs?: Maybe<AboutUs>;
};

export type DeleteAboutWeAreImageCarouselPayload = {
  readonly __typename?: 'deleteAboutWeAreImageCarouselPayload';
  readonly aboutWeAreImageCarousel?: Maybe<AboutWeAreImageCarousel>;
};

export type DeleteBrandValueInput = {
  readonly where?: Maybe<InputId>;
};

export type DeleteBrandValuePayload = {
  readonly __typename?: 'deleteBrandValuePayload';
  readonly brandValue?: Maybe<BrandValue>;
};

export type DeleteCareerOfferingInput = {
  readonly where?: Maybe<InputId>;
};

export type DeleteCareerOfferingPayload = {
  readonly __typename?: 'deleteCareerOfferingPayload';
  readonly careerOffering?: Maybe<CareerOfferings>;
};

export type DeleteCareerPayload = {
  readonly __typename?: 'deleteCareerPayload';
  readonly career?: Maybe<Career>;
};

export type DeleteCaseStudyInput = {
  readonly where?: Maybe<InputId>;
};

export type DeleteCaseStudyMetaInput = {
  readonly where?: Maybe<InputId>;
};

export type DeleteCaseStudyMetaPayload = {
  readonly __typename?: 'deleteCaseStudyMetaPayload';
  readonly caseStudyMeta?: Maybe<CaseStudyMeta>;
};

export type DeleteCaseStudyPayload = {
  readonly __typename?: 'deleteCaseStudyPayload';
  readonly caseStudy?: Maybe<CaseStudy>;
};

export type DeleteContactInput = {
  readonly where?: Maybe<InputId>;
};

export type DeleteContactPayload = {
  readonly __typename?: 'deleteContactPayload';
  readonly contact?: Maybe<Contact>;
};

export type DeleteDynamicTestPayload = {
  readonly __typename?: 'deleteDynamicTestPayload';
  readonly dynamicTest?: Maybe<DynamicTest>;
};

export type DeleteFileInput = {
  readonly where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  readonly __typename?: 'deleteFilePayload';
  readonly file?: Maybe<UploadFile>;
};

export type DeleteFooterPayload = {
  readonly __typename?: 'deleteFooterPayload';
  readonly footer?: Maybe<Footer>;
};

export type DeleteHeaderInput = {
  readonly where?: Maybe<InputId>;
};

export type DeleteHeaderPayload = {
  readonly __typename?: 'deleteHeaderPayload';
  readonly header?: Maybe<Header>;
};

export type DeleteHomepageInput = {
  readonly where?: Maybe<InputId>;
};

export type DeleteHomepageNewPayload = {
  readonly __typename?: 'deleteHomepageNewPayload';
  readonly homepageNew?: Maybe<HomepageNew>;
};

export type DeleteHomepagePayload = {
  readonly __typename?: 'deleteHomepagePayload';
  readonly homepage?: Maybe<Homepage>;
};

export type DeleteHqGalleryInput = {
  readonly where?: Maybe<InputId>;
};

export type DeleteHqGalleryPayload = {
  readonly __typename?: 'deleteHqGalleryPayload';
  readonly hqGallery?: Maybe<HqGallery>;
};

export type DeleteJobInput = {
  readonly where?: Maybe<InputId>;
};

export type DeleteJobPayload = {
  readonly __typename?: 'deleteJobPayload';
  readonly job?: Maybe<Job>;
};

export type DeleteLanguageInput = {
  readonly where?: Maybe<InputId>;
};

export type DeleteLanguagePayload = {
  readonly __typename?: 'deleteLanguagePayload';
  readonly language?: Maybe<Language>;
};

export type DeleteMenuInput = {
  readonly where?: Maybe<InputId>;
};

export type DeleteMenuPayload = {
  readonly __typename?: 'deleteMenuPayload';
  readonly menu?: Maybe<Menu>;
};

export type DeletePage404Input = {
  readonly where?: Maybe<InputId>;
};

export type DeletePage404Payload = {
  readonly __typename?: 'deletePage404Payload';
  readonly page404?: Maybe<Page404>;
};

export type DeleteProductInput = {
  readonly where?: Maybe<InputId>;
};

export type DeleteProductPayload = {
  readonly __typename?: 'deleteProductPayload';
  readonly product?: Maybe<Products>;
};

export type DeleteRoleInput = {
  readonly where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  readonly __typename?: 'deleteRolePayload';
  readonly role?: Maybe<UsersPermissionsRole>;
};

export type DeleteSkillInput = {
  readonly where?: Maybe<InputId>;
};

export type DeleteSkillPayload = {
  readonly __typename?: 'deleteSkillPayload';
  readonly skill?: Maybe<Skill>;
};

export type DeleteSocialNetworkInput = {
  readonly where?: Maybe<InputId>;
};

export type DeleteSocialNetworkPayload = {
  readonly __typename?: 'deleteSocialNetworkPayload';
  readonly socialNetwork?: Maybe<SocialNetwork>;
};

export type DeleteTeamInput = {
  readonly where?: Maybe<InputId>;
};

export type DeleteTeamPayload = {
  readonly __typename?: 'deleteTeamPayload';
  readonly team?: Maybe<Team>;
};

export type DeleteTechListInput = {
  readonly where?: Maybe<InputId>;
};

export type DeleteTechListPayload = {
  readonly __typename?: 'deleteTechListPayload';
  readonly techList?: Maybe<TechList>;
};

export type DeleteUserInput = {
  readonly where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  readonly __typename?: 'deleteUserPayload';
  readonly user?: Maybe<UsersPermissionsUser>;
};

export type DeleteWebhookInput = {
  readonly where?: Maybe<InputId>;
};

export type DeleteWebhookPayload = {
  readonly __typename?: 'deleteWebhookPayload';
  readonly webhook?: Maybe<Webhook>;
};

export type EditAboutInput = {
  readonly brandValues?: Maybe<ReadonlyArray<Maybe<EditComponentAboutUsBrandValueInput>>>;
  readonly hqGalleries?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly imageCarousel?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly skills?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly teams?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly localizations?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly locale?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type EditAboutUsInput = {
  readonly language?: Maybe<Scalars['String']>;
  readonly heroDescription?: Maybe<Scalars['String']>;
  readonly heroLogo?: Maybe<Scalars['ID']>;
  readonly heroHeadlineTop?: Maybe<Scalars['String']>;
  readonly heroHeadlineBottom?: Maybe<Scalars['String']>;
  readonly heroArrowTitle?: Maybe<Scalars['String']>;
  readonly weAreHeadline?: Maybe<Scalars['String']>;
  readonly weAreDescription?: Maybe<Scalars['String']>;
  readonly weAreImageCarousel?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly weAreArrowTitle?: Maybe<Scalars['String']>;
  readonly skillsHeadline?: Maybe<Scalars['String']>;
  readonly skills?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly skillsDescription?: Maybe<Scalars['String']>;
  readonly technologiesDescription?: Maybe<Scalars['String']>;
  readonly technologiesImage?: Maybe<Scalars['ID']>;
  readonly valuesHeadline?: Maybe<Scalars['String']>;
  readonly brandValues?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly teamHeadline?: Maybe<Scalars['String']>;
  readonly hqHeadline?: Maybe<Scalars['String']>;
  readonly hqImageGrid?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly careerHeadline?: Maybe<Scalars['String']>;
  readonly careerCTATitle?: Maybe<Scalars['String']>;
  readonly careerCTAImage?: Maybe<Scalars['ID']>;
  readonly blogHeadline?: Maybe<Scalars['String']>;
  readonly hqDescription?: Maybe<Scalars['String']>;
  readonly careerDescription?: Maybe<Scalars['String']>;
  readonly hqWeAreHereDescription?: Maybe<Scalars['String']>;
  readonly hqWeAreHereImage?: Maybe<Scalars['ID']>;
  readonly hqCTATitle?: Maybe<Scalars['String']>;
  readonly blogReadMore?: Maybe<Scalars['String']>;
  readonly arrow?: Maybe<Scalars['ID']>;
  readonly teams?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type EditAboutWeAreImageCarouselInput = {
  readonly images?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type EditBrandValueInput = {
  readonly headline?: Maybe<Scalars['String']>;
  readonly backgroundNumber?: Maybe<Scalars['Int']>;
  readonly image?: Maybe<Scalars['ID']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type EditCareerInput = {
  readonly careerPositions?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly technologies?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly localizations?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly locale?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type EditCareerOfferingInput = {
  readonly language?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly careerTechnologiesTitle?: Maybe<Scalars['String']>;
  readonly careerTechnologiesContent?: Maybe<Scalars['String']>;
  readonly careerExpectedSkillsTitle?: Maybe<Scalars['String']>;
  readonly careerExpectedSkillsContent?: Maybe<Scalars['String']>;
  readonly careerOfferTitle?: Maybe<Scalars['String']>;
  readonly careerOfferContent?: Maybe<Scalars['String']>;
  readonly endTitle?: Maybe<Scalars['String']>;
  readonly endContent?: Maybe<Scalars['String']>;
  readonly endCTA?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly color?: Maybe<Scalars['String']>;
  readonly perex?: Maybe<Scalars['String']>;
  readonly localizations?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly locale?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type EditCaseStudyInput = {
  readonly image?: Maybe<Scalars['ID']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly height?: Maybe<Scalars['Int']>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly technologies?: Maybe<EditComponentContentTechnoologiesTestInput>;
  readonly case_study?: Maybe<Scalars['ID']>;
  readonly localizations?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly locale?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type EditCaseStudyMetaInput = {
  readonly industry?: Maybe<Scalars['String']>;
  readonly client?: Maybe<Scalars['String']>;
  readonly system?: Maybe<Scalars['String']>;
  readonly technologies?: Maybe<Scalars['String']>;
  readonly previousProject?: Maybe<Scalars['String']>;
  readonly nextProject?: Maybe<Scalars['String']>;
  readonly footerText?: Maybe<Scalars['String']>;
  readonly writeUs?: Maybe<Scalars['String']>;
  readonly language?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type EditComponentAboutUsBrandValueInput = {
  readonly id?: Maybe<Scalars['ID']>;
  readonly headline?: Maybe<Scalars['String']>;
  readonly backgroundNumber?: Maybe<Scalars['Int']>;
  readonly image?: Maybe<Scalars['ID']>;
  readonly description?: Maybe<Scalars['String']>;
};

export type EditComponentCaseStudySpecificationInput = {
  readonly id?: Maybe<Scalars['ID']>;
  readonly area?: Maybe<Scalars['String']>;
  readonly client?: Maybe<Scalars['String']>;
  readonly system?: Maybe<Scalars['String']>;
};

export type EditComponentCaseStudyTechnologiesBoxInput = {
  readonly id?: Maybe<Scalars['ID']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly technologies?: Maybe<ReadonlyArray<Maybe<EditComponentContentTechnologiesListInput>>>;
};

export type EditComponentContentCarouselInput = {
  readonly id?: Maybe<Scalars['ID']>;
  readonly images?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
};

export type EditComponentContentContactInput = {
  readonly id?: Maybe<Scalars['ID']>;
  readonly address?: Maybe<Scalars['String']>;
  readonly phoneNumber?: Maybe<Scalars['String']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly ico?: Maybe<Scalars['String']>;
  readonly dic?: Maybe<Scalars['String']>;
  readonly legal?: Maybe<Scalars['String']>;
};

export type EditComponentContentGalleryImageInput = {
  readonly id?: Maybe<Scalars['ID']>;
  readonly rows?: Maybe<Scalars['Int']>;
  readonly spacing?: Maybe<Scalars['Int']>;
  readonly images?: Maybe<Scalars['ID']>;
};

export type EditComponentContentImageInput = {
  readonly id?: Maybe<Scalars['ID']>;
  readonly image?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly widthPercent?: Maybe<Scalars['Float']>;
};

export type EditComponentContentInfoColumnInput = {
  readonly id?: Maybe<Scalars['ID']>;
  readonly number?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly image?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly widthPercent?: Maybe<Scalars['Float']>;
};

export type EditComponentContentPictureListInput = {
  readonly id?: Maybe<Scalars['ID']>;
  readonly header?: Maybe<Scalars['String']>;
  readonly color?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly image?: Maybe<Scalars['ID']>;
};

export type EditComponentContentRichTextInput = {
  readonly id?: Maybe<Scalars['ID']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly desciption?: Maybe<Scalars['String']>;
  readonly desciptionLevel2?: Maybe<Scalars['String']>;
  readonly desciptionLevel3?: Maybe<Scalars['String']>;
  readonly image?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly subtitle?: Maybe<Scalars['String']>;
  readonly widthPercent?: Maybe<Scalars['Float']>;
};

export type EditComponentContentScreenshotInput = {
  readonly id?: Maybe<Scalars['ID']>;
  readonly media?: Maybe<Scalars['ID']>;
};

export type EditComponentContentSectionInput = {
  readonly id?: Maybe<Scalars['ID']>;
  readonly heading?: Maybe<Scalars['String']>;
  readonly number?: Maybe<Scalars['Int']>;
  readonly text?: Maybe<Scalars['String']>;
};

export type EditComponentContentSocialInput = {
  readonly id?: Maybe<Scalars['ID']>;
  readonly facebook?: Maybe<Scalars['String']>;
  readonly linkedIn?: Maybe<Scalars['String']>;
  readonly instagram?: Maybe<Scalars['String']>;
  readonly twitter?: Maybe<Scalars['String']>;
};

export type EditComponentContentSubSectionInput = {
  readonly id?: Maybe<Scalars['ID']>;
  readonly header?: Maybe<Scalars['String']>;
  readonly text?: Maybe<Scalars['String']>;
};

export type EditComponentContentTechnologiesListInput = {
  readonly id?: Maybe<Scalars['ID']>;
  readonly label?: Maybe<Scalars['String']>;
  readonly technologies?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
};

export type EditComponentContentTechnologyInput = {
  readonly id?: Maybe<Scalars['ID']>;
  readonly technologies?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly images?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly floatImage?: Maybe<Scalars['ID']>;
  readonly floatImageOnMiddle?: Maybe<Scalars['Boolean']>;
};

export type EditComponentContentTechnoologiesTestInput = {
  readonly id?: Maybe<Scalars['ID']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly tech_lists?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
};

export type EditComponentNavigationInternalLinkInput = {
  readonly id?: Maybe<Scalars['ID']>;
  readonly label?: Maybe<Scalars['String']>;
  readonly path?: Maybe<Scalars['String']>;
};

export type EditContactInput = {
  readonly language?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly address?: Maybe<Scalars['String']>;
  readonly taxIdentificationNumbers?: Maybe<Scalars['String']>;
  readonly taxIdentificationDescription?: Maybe<Scalars['String']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly phoneNumber?: Maybe<Scalars['String']>;
  readonly FormName?: Maybe<Scalars['String']>;
  readonly FormText?: Maybe<Scalars['String']>;
  readonly FormEmail?: Maybe<Scalars['String']>;
  readonly formNameWarning?: Maybe<Scalars['String']>;
  readonly formEmailWarning?: Maybe<Scalars['String']>;
  readonly formSubmit?: Maybe<Scalars['String']>;
  readonly formInvalidEmailWarning?: Maybe<Scalars['String']>;
  readonly formTextLabel?: Maybe<Scalars['String']>;
  readonly formNameLabel?: Maybe<Scalars['String']>;
  readonly formEmailLabel?: Maybe<Scalars['String']>;
  readonly footerImg?: Maybe<Scalars['ID']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type EditDynamicTestInput = {
  readonly Title?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly logo?: Maybe<Scalars['ID']>;
  readonly content: ReadonlyArray<Scalars['DynamicTestContentDynamicZoneInput']>;
  readonly localizations?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly locale?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly alternativeText?: Maybe<Scalars['String']>;
  readonly caption?: Maybe<Scalars['String']>;
  readonly width?: Maybe<Scalars['Int']>;
  readonly height?: Maybe<Scalars['Int']>;
  readonly formats?: Maybe<Scalars['JSON']>;
  readonly hash?: Maybe<Scalars['String']>;
  readonly ext?: Maybe<Scalars['String']>;
  readonly mime?: Maybe<Scalars['String']>;
  readonly size?: Maybe<Scalars['Float']>;
  readonly url?: Maybe<Scalars['String']>;
  readonly previewUrl?: Maybe<Scalars['String']>;
  readonly provider?: Maybe<Scalars['String']>;
  readonly provider_metadata?: Maybe<Scalars['JSON']>;
  readonly related?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type EditFooterInput = {
  readonly title?: Maybe<Scalars['String']>;
  readonly social?: Maybe<EditComponentContentSocialInput>;
  readonly contact?: Maybe<EditComponentContentContactInput>;
  readonly localizations?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly locale?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type EditHeaderInput = {
  readonly title?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly language?: Maybe<Scalars['String']>;
  readonly logo?: Maybe<Scalars['ID']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type EditHomepageInput = {
  readonly language?: Maybe<Scalars['String']>;
  readonly clickToStop?: Maybe<Scalars['String']>;
  readonly descriptionAboveLine?: Maybe<Scalars['String']>;
  readonly descriptionBellowLine?: Maybe<Scalars['String']>;
  readonly logo?: Maybe<Scalars['ID']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type EditHomepageNewInput = {
  readonly topLeftLink?: Maybe<EditComponentNavigationInternalLinkInput>;
  readonly topRightLink?: Maybe<EditComponentNavigationInternalLinkInput>;
  readonly bottomLeftLink?: Maybe<EditComponentNavigationInternalLinkInput>;
  readonly bottomRightLink?: Maybe<EditComponentNavigationInternalLinkInput>;
  readonly logo?: Maybe<Scalars['ID']>;
  readonly clickToStopText?: Maybe<Scalars['String']>;
  readonly aboveLineText?: Maybe<Scalars['String']>;
  readonly belowLineText?: Maybe<Scalars['String']>;
  readonly localizations?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly locale?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type EditHqGalleryInput = {
  readonly galleryCollection?: Maybe<ReadonlyArray<Maybe<EditComponentContentGalleryImageInput>>>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type EditJobInput = {
  readonly title?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly careerTechnologiesTitle?: Maybe<Scalars['String']>;
  readonly careerTechnologiesContent?: Maybe<Scalars['String']>;
  readonly careerExpectedSkills?: Maybe<Scalars['String']>;
  readonly careerExpectedSkillsContent?: Maybe<Scalars['String']>;
  readonly careerOfferTitle?: Maybe<Scalars['String']>;
  readonly careerOfferContent?: Maybe<Scalars['String']>;
  readonly endTitle?: Maybe<Scalars['String']>;
  readonly endContent?: Maybe<Scalars['String']>;
  readonly endCTA?: Maybe<Scalars['String']>;
  readonly language?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type EditLanguageInput = {
  readonly languageCode?: Maybe<Scalars['String']>;
  readonly displayName?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type EditLocaleInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly code?: Maybe<Scalars['String']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type EditMenuInput = {
  readonly menu?: Maybe<Scalars['String']>;
  readonly homePage?: Maybe<Scalars['String']>;
  readonly reference?: Maybe<Scalars['String']>;
  readonly aboutUs?: Maybe<Scalars['String']>;
  readonly career?: Maybe<Scalars['String']>;
  readonly contact?: Maybe<Scalars['String']>;
  readonly language?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type EditPage404Input = {
  readonly image?: Maybe<Scalars['ID']>;
  readonly heading?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly link?: Maybe<Scalars['String']>;
  readonly language?: Maybe<Scalars['String']>;
  readonly bgText?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type EditProductInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly localizations?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly locale?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly type?: Maybe<Scalars['String']>;
  readonly permissions?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly users?: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type EditSkillInput = {
  readonly title?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly titleColorHash?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type EditSocialNetworkInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly url?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type EditTeamInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly position?: Maybe<Scalars['String']>;
  readonly video?: Maybe<Scalars['ID']>;
  readonly sort?: Maybe<Scalars['Int']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type EditTechListInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  readonly username?: Maybe<Scalars['String']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly provider?: Maybe<Scalars['String']>;
  readonly password?: Maybe<Scalars['String']>;
  readonly resetPasswordToken?: Maybe<Scalars['String']>;
  readonly confirmationToken?: Maybe<Scalars['String']>;
  readonly confirmed?: Maybe<Scalars['Boolean']>;
  readonly blocked?: Maybe<Scalars['Boolean']>;
  readonly role?: Maybe<Scalars['ID']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type EditWebhookInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly published_at?: Maybe<Scalars['DateTime']>;
  readonly created_by?: Maybe<Scalars['ID']>;
  readonly updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateAboutInput = {
  readonly data?: Maybe<EditAboutInput>;
};

export type UpdateAboutPayload = {
  readonly __typename?: 'updateAboutPayload';
  readonly about?: Maybe<About>;
};

export type UpdateAboutUsInput = {
  readonly where?: Maybe<InputId>;
  readonly data?: Maybe<EditAboutUsInput>;
};

export type UpdateAboutUsPayload = {
  readonly __typename?: 'updateAboutUsPayload';
  readonly aboutUs?: Maybe<AboutUs>;
};

export type UpdateAboutWeAreImageCarouselInput = {
  readonly data?: Maybe<EditAboutWeAreImageCarouselInput>;
};

export type UpdateAboutWeAreImageCarouselPayload = {
  readonly __typename?: 'updateAboutWeAreImageCarouselPayload';
  readonly aboutWeAreImageCarousel?: Maybe<AboutWeAreImageCarousel>;
};

export type UpdateBrandValueInput = {
  readonly where?: Maybe<InputId>;
  readonly data?: Maybe<EditBrandValueInput>;
};

export type UpdateBrandValuePayload = {
  readonly __typename?: 'updateBrandValuePayload';
  readonly brandValue?: Maybe<BrandValue>;
};

export type UpdateCareerInput = {
  readonly data?: Maybe<EditCareerInput>;
};

export type UpdateCareerOfferingInput = {
  readonly where?: Maybe<InputId>;
  readonly data?: Maybe<EditCareerOfferingInput>;
};

export type UpdateCareerOfferingPayload = {
  readonly __typename?: 'updateCareerOfferingPayload';
  readonly careerOffering?: Maybe<CareerOfferings>;
};

export type UpdateCareerPayload = {
  readonly __typename?: 'updateCareerPayload';
  readonly career?: Maybe<Career>;
};

export type UpdateCaseStudyInput = {
  readonly where?: Maybe<InputId>;
  readonly data?: Maybe<EditCaseStudyInput>;
};

export type UpdateCaseStudyMetaInput = {
  readonly where?: Maybe<InputId>;
  readonly data?: Maybe<EditCaseStudyMetaInput>;
};

export type UpdateCaseStudyMetaPayload = {
  readonly __typename?: 'updateCaseStudyMetaPayload';
  readonly caseStudyMeta?: Maybe<CaseStudyMeta>;
};

export type UpdateCaseStudyPayload = {
  readonly __typename?: 'updateCaseStudyPayload';
  readonly caseStudy?: Maybe<CaseStudy>;
};

export type UpdateContactInput = {
  readonly where?: Maybe<InputId>;
  readonly data?: Maybe<EditContactInput>;
};

export type UpdateContactPayload = {
  readonly __typename?: 'updateContactPayload';
  readonly contact?: Maybe<Contact>;
};

export type UpdateDynamicTestInput = {
  readonly data?: Maybe<EditDynamicTestInput>;
};

export type UpdateDynamicTestPayload = {
  readonly __typename?: 'updateDynamicTestPayload';
  readonly dynamicTest?: Maybe<DynamicTest>;
};

export type UpdateFooterInput = {
  readonly data?: Maybe<EditFooterInput>;
};

export type UpdateFooterPayload = {
  readonly __typename?: 'updateFooterPayload';
  readonly footer?: Maybe<Footer>;
};

export type UpdateHeaderInput = {
  readonly where?: Maybe<InputId>;
  readonly data?: Maybe<EditHeaderInput>;
};

export type UpdateHeaderPayload = {
  readonly __typename?: 'updateHeaderPayload';
  readonly header?: Maybe<Header>;
};

export type UpdateHomepageInput = {
  readonly where?: Maybe<InputId>;
  readonly data?: Maybe<EditHomepageInput>;
};

export type UpdateHomepageNewInput = {
  readonly data?: Maybe<EditHomepageNewInput>;
};

export type UpdateHomepageNewPayload = {
  readonly __typename?: 'updateHomepageNewPayload';
  readonly homepageNew?: Maybe<HomepageNew>;
};

export type UpdateHomepagePayload = {
  readonly __typename?: 'updateHomepagePayload';
  readonly homepage?: Maybe<Homepage>;
};

export type UpdateHqGalleryInput = {
  readonly where?: Maybe<InputId>;
  readonly data?: Maybe<EditHqGalleryInput>;
};

export type UpdateHqGalleryPayload = {
  readonly __typename?: 'updateHqGalleryPayload';
  readonly hqGallery?: Maybe<HqGallery>;
};

export type UpdateJobInput = {
  readonly where?: Maybe<InputId>;
  readonly data?: Maybe<EditJobInput>;
};

export type UpdateJobPayload = {
  readonly __typename?: 'updateJobPayload';
  readonly job?: Maybe<Job>;
};

export type UpdateLanguageInput = {
  readonly where?: Maybe<InputId>;
  readonly data?: Maybe<EditLanguageInput>;
};

export type UpdateLanguagePayload = {
  readonly __typename?: 'updateLanguagePayload';
  readonly language?: Maybe<Language>;
};

export type UpdateMenuInput = {
  readonly where?: Maybe<InputId>;
  readonly data?: Maybe<EditMenuInput>;
};

export type UpdateMenuPayload = {
  readonly __typename?: 'updateMenuPayload';
  readonly menu?: Maybe<Menu>;
};

export type UpdatePage404Input = {
  readonly where?: Maybe<InputId>;
  readonly data?: Maybe<EditPage404Input>;
};

export type UpdatePage404Payload = {
  readonly __typename?: 'updatePage404Payload';
  readonly page404?: Maybe<Page404>;
};

export type UpdateProductInput = {
  readonly where?: Maybe<InputId>;
  readonly data?: Maybe<EditProductInput>;
};

export type UpdateProductPayload = {
  readonly __typename?: 'updateProductPayload';
  readonly product?: Maybe<Products>;
};

export type UpdateRoleInput = {
  readonly where?: Maybe<InputId>;
  readonly data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  readonly __typename?: 'updateRolePayload';
  readonly role?: Maybe<UsersPermissionsRole>;
};

export type UpdateSkillInput = {
  readonly where?: Maybe<InputId>;
  readonly data?: Maybe<EditSkillInput>;
};

export type UpdateSkillPayload = {
  readonly __typename?: 'updateSkillPayload';
  readonly skill?: Maybe<Skill>;
};

export type UpdateSocialNetworkInput = {
  readonly where?: Maybe<InputId>;
  readonly data?: Maybe<EditSocialNetworkInput>;
};

export type UpdateSocialNetworkPayload = {
  readonly __typename?: 'updateSocialNetworkPayload';
  readonly socialNetwork?: Maybe<SocialNetwork>;
};

export type UpdateTeamInput = {
  readonly where?: Maybe<InputId>;
  readonly data?: Maybe<EditTeamInput>;
};

export type UpdateTeamPayload = {
  readonly __typename?: 'updateTeamPayload';
  readonly team?: Maybe<Team>;
};

export type UpdateTechListInput = {
  readonly where?: Maybe<InputId>;
  readonly data?: Maybe<EditTechListInput>;
};

export type UpdateTechListPayload = {
  readonly __typename?: 'updateTechListPayload';
  readonly techList?: Maybe<TechList>;
};

export type UpdateUserInput = {
  readonly where?: Maybe<InputId>;
  readonly data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  readonly __typename?: 'updateUserPayload';
  readonly user?: Maybe<UsersPermissionsUser>;
};

export type UpdateWebhookInput = {
  readonly where?: Maybe<InputId>;
  readonly data?: Maybe<EditWebhookInput>;
};

export type UpdateWebhookPayload = {
  readonly __typename?: 'updateWebhookPayload';
  readonly webhook?: Maybe<Webhook>;
};

export type SkillFragment = (
  { readonly __typename?: 'Skill' }
  & Pick<Skill, 'id' | 'title' | 'description' | 'titleColorHash'>
);

export type BrandValueFragment = (
  { readonly __typename?: 'BrandValue' }
  & Pick<BrandValue, 'id' | 'headline' | 'backgroundNumber' | 'description'>
  & { readonly image?: Maybe<(
    { readonly __typename?: 'UploadFile' }
    & Pick<UploadFile, 'url' | 'alternativeText'>
  )> }
);

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = (
  { readonly __typename?: 'Query' }
  & { readonly aboutuses?: Maybe<ReadonlyArray<Maybe<(
    { readonly __typename?: 'AboutUs' }
    & Pick<AboutUs, 'id' | 'language' | 'created_at' | 'updated_at' | 'heroDescription' | 'heroHeadlineTop' | 'heroHeadlineBottom' | 'heroArrowTitle' | 'weAreHeadline' | 'weAreDescription' | 'weAreArrowTitle' | 'skillsHeadline' | 'skillsDescription' | 'technologiesDescription' | 'valuesHeadline' | 'teamHeadline' | 'hqHeadline' | 'hqDescription' | 'careerHeadline' | 'careerDescription' | 'careerCTATitle' | 'blogHeadline' | 'blogReadMore' | 'published_at' | 'hqCTATitle' | 'hqWeAreHereDescription'>
    & { readonly heroLogo?: Maybe<(
      { readonly __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url' | 'alternativeText'>
    )>, readonly technologiesImage?: Maybe<(
      { readonly __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url' | 'alternativeText'>
    )>, readonly careerCTAImage?: Maybe<(
      { readonly __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url' | 'alternativeText'>
    )>, readonly weAreImageCarousel?: Maybe<ReadonlyArray<Maybe<(
      { readonly __typename?: 'UploadFile' }
      & Pick<UploadFile, 'id' | 'url' | 'alternativeText'>
    )>>>, readonly skills?: Maybe<ReadonlyArray<Maybe<(
      { readonly __typename?: 'Skill' }
      & SkillFragment
    )>>>, readonly brandValues?: Maybe<ReadonlyArray<Maybe<(
      { readonly __typename?: 'BrandValue' }
      & BrandValueFragment
    )>>>, readonly hqImageGrid?: Maybe<ReadonlyArray<Maybe<(
      { readonly __typename?: 'UploadFile' }
      & Pick<UploadFile, 'id' | 'url' | 'alternativeText'>
    )>>>, readonly hqWeAreHereImage?: Maybe<(
      { readonly __typename?: 'UploadFile' }
      & Pick<UploadFile, 'id' | 'url' | 'alternativeText'>
    )>, readonly arrow?: Maybe<(
      { readonly __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url' | 'alternativeText'>
    )> }
  )>>> }
);

export type CareerPositionsFragment = (
  { readonly __typename?: 'CareerOfferings' }
  & Pick<CareerOfferings, 'id' | 'language' | 'title' | 'slug' | 'perex' | 'color'>
);

export type CareerPageFragment = (
  { readonly __typename?: 'Career' }
  & { readonly careerPositions?: Maybe<ReadonlyArray<Maybe<(
    { readonly __typename?: 'CareerOfferings' }
    & CareerPositionsFragment
  )>>> }
);

export type CareerQueryVariables = Exact<{ [key: string]: never; }>;


export type CareerQuery = (
  { readonly __typename?: 'Query' }
  & { readonly career?: Maybe<(
    { readonly __typename?: 'Career' }
    & CareerPageFragment
  )> }
);

export type CareerOfferFragment = (
  { readonly __typename?: 'CareerOfferings' }
  & Pick<CareerOfferings, 'id' | 'language' | 'title' | 'slug' | 'description' | 'careerTechnologiesTitle' | 'careerTechnologiesContent' | 'careerExpectedSkillsTitle' | 'careerExpectedSkillsContent' | 'careerOfferTitle' | 'careerOfferContent' | 'endTitle' | 'endContent' | 'endCTA'>
);

export type CareerOfferQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type CareerOfferQuery = (
  { readonly __typename?: 'Query' }
  & { readonly careerOfferings?: Maybe<ReadonlyArray<Maybe<(
    { readonly __typename?: 'CareerOfferings' }
    & CareerOfferFragment
  )>>> }
);

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_2_Query = (
  { readonly __typename?: 'Query' }
  & { readonly careerOfferings?: Maybe<ReadonlyArray<Maybe<(
    { readonly __typename?: 'CareerOfferings' }
    & Pick<CareerOfferings, 'id' | 'language' | 'title' | 'slug' | 'perex' | 'color'>
  )>>> }
);

export type CaseStudiesQueryVariables = Exact<{ [key: string]: never; }>;


export type CaseStudiesQuery = (
  { readonly __typename?: 'Query' }
  & { readonly caseStudies?: Maybe<ReadonlyArray<Maybe<(
    { readonly __typename?: 'CaseStudy' }
    & Pick<CaseStudy, 'id' | 'title' | 'height' | 'slug'>
    & { readonly image?: Maybe<(
      { readonly __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url' | 'alternativeText'>
    )> }
  )>>> }
);

export type CaseStudyQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type CaseStudyQuery = (
  { readonly __typename?: 'Query' }
  & { readonly caseStudies?: Maybe<ReadonlyArray<Maybe<(
    { readonly __typename?: 'CaseStudy' }
    & Pick<CaseStudy, 'id' | 'title' | 'slug'>
  )>>> }
);

export type Unnamed_3_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_3_Query = (
  { readonly __typename?: 'Query' }
  & { readonly contacts?: Maybe<ReadonlyArray<Maybe<(
    { readonly __typename?: 'Contact' }
    & Pick<Contact, 'id' | 'language' | 'title' | 'address' | 'taxIdentificationNumbers' | 'taxIdentificationDescription' | 'email' | 'phoneNumber' | 'formSubmit' | 'formTextLabel' | 'formNameLabel' | 'formEmailLabel' | 'formNameWarning' | 'formEmailWarning' | 'formInvalidEmailWarning'>
    & { readonly footerImg?: Maybe<(
      { readonly __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url' | 'alternativeText'>
    )> }
  )>>> }
);

export type SpecificationsFragment = (
  { readonly __typename: 'ComponentCaseStudySpecifications' }
  & Pick<ComponentCaseStudySpecifications, 'area' | 'system' | 'client'>
);

export type TechFragment = (
  { readonly __typename?: 'TechList' }
  & Pick<TechList, 'name'>
);

export type TechInfoFragment = (
  { readonly __typename?: 'ComponentContentTechnologiesList' }
  & Pick<ComponentContentTechnologiesList, 'id' | 'label'>
  & { readonly technologies?: Maybe<ReadonlyArray<Maybe<(
    { readonly __typename?: 'TechList' }
    & TechFragment
  )>>> }
);

export type TechnologiesBoxFragment = (
  { readonly __typename: 'ComponentCaseStudyTechnologiesBox' }
  & Pick<ComponentCaseStudyTechnologiesBox, 'description'>
  & { readonly technologies?: Maybe<ReadonlyArray<Maybe<(
    { readonly __typename?: 'ComponentContentTechnologiesList' }
    & TechInfoFragment
  )>>> }
);

export type SectionFragment = (
  { readonly __typename: 'ComponentContentSection' }
  & Pick<ComponentContentSection, 'heading' | 'number' | 'text'>
);

export type SubSectionFragment = (
  { readonly __typename: 'ComponentContentSubSection' }
  & Pick<ComponentContentSubSection, 'header' | 'text'>
);

export type CarouselFragment = (
  { readonly __typename: 'ComponentContentCarousel' }
  & { readonly images?: Maybe<ReadonlyArray<Maybe<(
    { readonly __typename?: 'UploadFile' }
    & Pick<UploadFile, 'url'>
  )>>> }
);

export type DynamicTestPageFragment = (
  { readonly __typename?: 'DynamicTest' }
  & Pick<DynamicTest, 'Title' | 'description'>
  & { readonly logo?: Maybe<(
    { readonly __typename?: 'UploadFile' }
    & Pick<UploadFile, 'url'>
  )>, readonly content: ReadonlyArray<Maybe<(
    { readonly __typename?: 'ComponentContentSection' }
    & SectionFragment
  ) | (
    { readonly __typename?: 'ComponentContentSubSection' }
    & SubSectionFragment
  ) | (
    { readonly __typename?: 'ComponentContentCarousel' }
    & CarouselFragment
  ) | { readonly __typename?: 'ComponentContentScreenshot' } | (
    { readonly __typename?: 'ComponentCaseStudyTechnologiesBox' }
    & TechnologiesBoxFragment
  ) | (
    { readonly __typename?: 'ComponentCaseStudySpecifications' }
    & SpecificationsFragment
  )>> }
);

export type DynamicTestQueryVariables = Exact<{
  locale?: Maybe<Scalars['String']>;
}>;


export type DynamicTestQuery = (
  { readonly __typename?: 'Query' }
  & { readonly dynamicTest?: Maybe<(
    { readonly __typename?: 'DynamicTest' }
    & DynamicTestPageFragment
  )> }
);

export type Unnamed_4_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_4_Query = (
  { readonly __typename?: 'Query' }
  & { readonly headers?: Maybe<ReadonlyArray<Maybe<(
    { readonly __typename?: 'Header' }
    & Pick<Header, 'id' | 'language' | 'title' | 'description'>
    & { readonly logo?: Maybe<(
      { readonly __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url'>
    )> }
  )>>> }
);

export type Unnamed_5_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_5_Query = (
  { readonly __typename?: 'Query' }
  & { readonly homepages?: Maybe<ReadonlyArray<Maybe<(
    { readonly __typename?: 'Homepage' }
    & Pick<Homepage, 'id' | 'language' | 'clickToStop' | 'descriptionAboveLine' | 'descriptionBellowLine'>
    & { readonly logo?: Maybe<(
      { readonly __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url'>
    )> }
  )>>> }
);

export type HqGalleryFragment = (
  { readonly __typename?: 'HqGallery' }
  & { readonly galleryCollection?: Maybe<ReadonlyArray<Maybe<(
    { readonly __typename?: 'ComponentContentGalleryImage' }
    & Pick<ComponentContentGalleryImage, 'spacing' | 'rows'>
    & { readonly images?: Maybe<(
      { readonly __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url' | 'alternativeText' | 'id'>
    )> }
  )>>> }
);

export type HqGalleriesQueryVariables = Exact<{ [key: string]: never; }>;


export type HqGalleriesQuery = (
  { readonly __typename?: 'Query' }
  & { readonly hqGalleries?: Maybe<ReadonlyArray<Maybe<(
    { readonly __typename?: 'HqGallery' }
    & HqGalleryFragment
  )>>> }
);

export type Unnamed_6_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_6_Query = (
  { readonly __typename?: 'Query' }
  & { readonly languages?: Maybe<ReadonlyArray<Maybe<(
    { readonly __typename?: 'Language' }
    & Pick<Language, 'id' | 'languageCode' | 'displayName'>
  )>>> }
);

export type Unnamed_7_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_7_Query = (
  { readonly __typename?: 'Query' }
  & { readonly menus?: Maybe<ReadonlyArray<Maybe<(
    { readonly __typename?: 'Menu' }
    & Pick<Menu, 'id' | 'aboutUs' | 'career' | 'contact' | 'homePage' | 'language' | 'menu' | 'reference'>
  )>>> }
);

export type Unnamed_8_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_8_Query = (
  { readonly __typename?: 'Query' }
  & { readonly page404s?: Maybe<ReadonlyArray<Maybe<(
    { readonly __typename?: 'Page404' }
    & Pick<Page404, 'id' | 'language' | 'heading' | 'description' | 'link' | 'bgText'>
    & { readonly image?: Maybe<(
      { readonly __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url' | 'alternativeText'>
    )> }
  )>>> }
);

export type Unnamed_9_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_9_Query = (
  { readonly __typename?: 'Query' }
  & { readonly socialNetworks?: Maybe<ReadonlyArray<Maybe<(
    { readonly __typename?: 'SocialNetwork' }
    & Pick<SocialNetwork, 'id' | 'name' | 'url'>
  )>>> }
);
