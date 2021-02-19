
import React from "react"
import TechList from "../components/TechList"
import { gql } from "apollo-boost"
import apolloClient from "../setup/apolloClient"

const Index = ({ techList }) => {
  return (
    <div>
      <h1>QEST</h1>
      <h2>Tech-stack:</h2>
      <TechList techList={techList} />
    </div>
  )
}

export const getStaticProps = async () => {
  const TECH_LIST_QUERY = gql`
    query {
      techLists {
        id
        name
      }
    }
  `

  const techList = await apolloClient.query({
    query: TECH_LIST_QUERY
  })

  return {
    props: {
      techList: techList?.data?.techLists || [],
    }
  }
}

export default Index