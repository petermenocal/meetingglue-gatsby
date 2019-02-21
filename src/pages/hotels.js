import { Flex } from 'rebass'
import Layout from '../components/layout'
import MapCard from '../components/mapcard'
import React from 'react'
import SEO from '../components/seo'
import { graphql } from 'gatsby'

const SecondPage = ({ data }) => {
  const hotels = data.allHotelsJson.edges
  return (
    <Layout>
      <SEO title="Hotels" />
      <Flex flexDirection="column">
        {hotels.map(h => (
          <MapCard
            key={h.node.id}
            id={h.node.id}
            title={h.node.name}
            address={h.node.address}
            city={h.node.city}
            state={h.node.state}
          />
        ))}
      </Flex>
    </Layout>
  )
}

export default SecondPage

export const query = graphql`
  query {
    allHotelsJson {
      edges {
        node {
          name
          address
          city
          state
          id
        }
      }
    }
  }
`
