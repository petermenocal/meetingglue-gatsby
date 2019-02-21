import React from 'react'
import { Flex, Heading, Card } from '@rebass/emotion'
import { StaticQuery, graphql } from 'gatsby'

const PageTitleBar = props => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "bg-title.png" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <Card
          backgroundImage={
            `url(` + data.placeholderImage.childImageSharp.fluid.src + `)`
          }
          backgroundSize="cover"
        >
          <Flex alignItems="center" justifyContent="center" color="white">
            <Heading py={3} fontSize={5}>
              {props.title}
            </Heading>
          </Flex>
        </Card>
      </div>
    )}
  />
)

export default PageTitleBar
