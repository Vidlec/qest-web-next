import { request } from 'graphql-request'
import { CaseStudyQuery, CaseStudy, CaseStudyQueryVariables } from 'gql/generated/types'
import CaseStudyPage, { Props as CSQuery } from 'screens/CaseStudy'
import { GetStaticPaths, GetStaticProps } from 'next'
import { CASE_STUDIES_QUERY } from 'gql/queries/caseStudies'
import { CASE_STUDY_QUERY } from 'gql/queries/caseStudy'

export default CaseStudyPage

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await request<{ caseStudies: CaseStudy[] }>(
    process.env.CMS_GRAPHQL_URL!,
    CASE_STUDIES_QUERY
  )

  const paths = data.caseStudies.map((caseStudy) => {
    return {
      params: { slug: caseStudy.slug },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<CSQuery, { slug: string }> = async (context) => {
  const slug = context.params?.slug

  if (!slug) {
    return { notFound: true }
  }

  const data = await request<CaseStudyQuery, CaseStudyQueryVariables>(
    process.env.CMS_GRAPHQL_URL!,
    CASE_STUDY_QUERY,
    { slug }
  )

  if (data.caseStudies![0]) {
    return {
      props: {
        caseStudy: data.caseStudies![0] as CaseStudy,
      },
    }
  }

  return { notFound: true }
}
