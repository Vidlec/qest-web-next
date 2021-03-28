import React from 'react'
import { groupBy, project } from 'ramda'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'node:querystring'
import apolloClient from 'gql/apollo'
import { CASE_STUDIES_QUERY } from 'gql/queries/caseStudies'
import {
	CaseStudiesQuery,
	CaseStudiesQueryVariables,
	CaseStudy,
	Maybe,
} from 'gql/generated/types'

interface PathParams extends ParsedUrlQuery {
	projectName: string
}

interface CaseStudyProps {}

const queryCaseStudies = () =>
	apolloClient.query<CaseStudiesQuery, CaseStudiesQueryVariables>({
		query: CASE_STUDIES_QUERY,
	})

const toStaticPath = (
	caseStudy: Pick<CaseStudy, 'title' | 'language'> | null
) =>
	caseStudy && !!caseStudy.title && {
		params: { projectName: caseStudy.title },
		locale: caseStudy.language || undefined,
	}

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
	const {
		errors,
		data: { caseStudies },
	} = await queryCaseStudies()

	// TODO error handling
	if (errors) throw errors
	if (!caseStudies) return { paths: [], fallback: false }

	const groupedCaseStudies = groupBy(
		// TODO make projectId required in Strapi
		(caseStudy) => caseStudy?.projectId ?? '',
		caseStudies
	)

	const paths = Object.values(groupedCaseStudies).flatMap(
		(caseStudiesInGroup) =>
			caseStudiesInGroup?.map(toStaticPath)?.filter(Boolean) ?? []
	)

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps<
	CaseStudyProps,
	PathParams
> = async ({ params: {} }) => {
	const caseStudies = await queryCaseStudies()
}
