import React from 'react'
import { groupBy } from 'ramda'
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'node:querystring'
import apolloClient from 'gql/apollo'
import { CASE_STUDIES_QUERY } from 'gql/queries/caseStudies'
import {
	CaseStudiesQuery,
	CaseStudiesQueryVariables,
	Maybe,
} from 'gql/generated/types'

interface PathParams extends ParsedUrlQuery {
	projectId: string
}

type ResultPaths = GetStaticPathsResult<PathParams>['paths']

type ResultPath = ResultPaths[number]

type UnMaybe<T extends Maybe<unknown>> = Exclude<T, null | undefined>

type CaseStudyFromQuery = UnMaybe<
	UnMaybe<CaseStudiesQuery['caseStudies']>[number]
>

interface CaseStudyProps {
	data: CaseStudyFromQuery
}

const queryCaseStudies = () =>
	apolloClient.query<CaseStudiesQuery, CaseStudiesQueryVariables>({
		query: CASE_STUDIES_QUERY,
	})

const byProjectId = ({ projectId }: CaseStudyFromQuery) => projectId

const toStaticPath = (caseStudy: CaseStudyFromQuery): ResultPath => ({
	params: { projectId: caseStudy.projectId },
	locale: caseStudy.language,
})

const groupToPaths = (caseStudiesInGroup: CaseStudyFromQuery[]) =>
	caseStudiesInGroup.map(toStaticPath)

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
	const {
		errors,
		data,
	} = await queryCaseStudies()

	// TODO error handling
	if (errors) throw errors
	if (!data?.caseStudies) return { paths: [], fallback: false }

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

const equalCaseStudy = (projectId: string, language: string) => (
	caseStudy: CaseStudyFromQuery
) => caseStudy.projectId === projectId && caseStudy.language === language

export const getStaticProps: GetStaticProps<
	CaseStudyProps,
	PathParams
> = async ({ params, locale }) => {
	if (!params) throw new Error('Undefined path params')
	if (!locale) throw new Error('No locale defined')

	const { projectId } = params
	const {
		errors,
		data: { caseStudies },
	} = await queryCaseStudies()

	if (errors) throw errors
	if (!caseStudies) throw new Error('No case studies fetched')

	const nonNullCaseStudies = caseStudies.filter(
		Boolean
	) as CaseStudyFromQuery[]

	const caseStudy = nonNullCaseStudies.find(equalCaseStudy(projectId, locale))

	if (!caseStudy) return { notFound: true }

	return { props: { data: caseStudy } }
}

const CaseStudy: React.FC<CaseStudyProps> = ({ data }) => (
	<div>{JSON.stringify(data)}</div>
)

export default CaseStudy
