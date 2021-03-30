import React from 'react'
import { groupBy } from 'ramda'
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next'
import apolloClient from 'gql/apollo'
import { CASE_STUDIES_QUERY } from 'gql/queries/caseStudies'
import {
	CaseStudiesQuery,
	CaseStudiesQueryVariables,
	Maybe,
} from 'gql/generated/types'
import { LocalizedPathParams } from 'types/LocalizedPathParams'
import { Language } from 'locale'
import { TranslationProvider } from 'context/TranslationContext'

interface PathParams extends LocalizedPathParams {
	projectId: string
}

type ResultPaths = GetStaticPathsResult<PathParams>['paths']

type ResultPath = ResultPaths[number]

type UnMaybe<T extends Maybe<unknown>> = Exclude<T, null | undefined>

type CaseStudyFromQuery = UnMaybe<
	UnMaybe<CaseStudiesQuery['caseStudies']>[number]
>

interface CaseStudyProps {
	caseStudy: CaseStudyFromQuery
}

const queryCaseStudies = () =>
	apolloClient.query<CaseStudiesQuery, CaseStudiesQueryVariables>({
		query: CASE_STUDIES_QUERY,
	})

const byProjectId = ({ projectId }: CaseStudyFromQuery) => projectId

const toStaticPath = (caseStudy: CaseStudyFromQuery): ResultPath => ({
	params: {
		projectId: caseStudy.projectId,
		language: caseStudy.language as Language,
	},
})

const groupToPaths = (caseStudiesInGroup: CaseStudyFromQuery[]) =>
	caseStudiesInGroup.map(toStaticPath)

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
	const { errors, data } = await queryCaseStudies()

	// TODO error handling
	if (errors) throw errors
	if (!data.caseStudies) return { paths: [], fallback: false }

	const { caseStudies } = data

	const groupedCaseStudies = groupBy(
		byProjectId,
		caseStudies.filter(Boolean) as CaseStudyFromQuery[]
	)

	const paths = Object.values(groupedCaseStudies).flatMap(groupToPaths)

	return {
		paths,
		fallback: false,
	}
}

const equalCaseStudy = (projectId: string, language: Language) => (
	caseStudy: CaseStudyFromQuery
) => caseStudy.projectId === projectId && caseStudy.language === language

export const getStaticProps: GetStaticProps<
	CaseStudyProps,
	PathParams
> = async ({ params }) => {
	if (!params) throw new Error('Undefined path params')

	const { projectId, language } = params
	const { errors, data } = await queryCaseStudies()

	if (errors) throw errors
	if (!data.caseStudies) throw new Error('No case studies fetched')

	const { caseStudies } = data

	const nonNullCaseStudies = caseStudies.filter(
		Boolean
	) as CaseStudyFromQuery[]

	const caseStudy = nonNullCaseStudies.find(
		equalCaseStudy(projectId, language)
	)

	if (!caseStudy) return { notFound: true }

	return { props: { caseStudy } }
}

const CaseStudyPage: React.FC<CaseStudyProps> = ({ caseStudy }) => (
	<TranslationProvider language={caseStudy.language as Language}>
		{JSON.stringify(caseStudy)}
	</TranslationProvider>
)

export default CaseStudyPage
