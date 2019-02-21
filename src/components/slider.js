import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Box, Flex, Heading } from 'rebass'
import { StaticQuery, graphql } from 'gatsby'

import { Img } from 'gatsby-image'
import React from 'react'
import Slider from 'react-slick'

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}
export default () => (
  <StaticQuery
    query={graphql`
      query {
        image1: file(relativePath: { eq: "fp-1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image2: file(relativePath: { eq: "fp-2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image3: file(relativePath: { eq: "fp-3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      console.log(data)
      return (
        <Slider {...settings}>
          <Box>
            <Flex>
              <img
                src={data.image1.childImageSharp.fluid.src}
                style={{ width: `100%`, height: `auto` }}
              />
            </Flex>
          </Box>
          <Box>
            <Flex>
              <img
                src={data.image2.childImageSharp.fluid.src}
                style={{ width: `100%`, height: `auto` }}
              />
            </Flex>
          </Box>
          <Box>
            <Flex>
              <img
                src={data.image3.childImageSharp.fluid.src}
                style={{ width: `100%`, height: `auto` }}
              />
            </Flex>
          </Box>
        </Slider>
      )
    }}
  />
)
