import { Box, Flex, Heading, Text } from 'rebass'
import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import React from 'react'
import SEO from '../components/seo'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

const HotelPage = data => {
  const cvb = data.pageContext
  console.log(cvb)
  return (
    <StaticQuery
      query={graphql`
        {
          oaklandImages: allFile(
            filter: { absolutePath: { regex: "/oakland/" } }
          ) {
            edges {
              node {
                childImageSharp {
                  fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          featureImage: file(
            relativePath: { eq: "oakland-cty-marriott-14.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 2000, maxHeight: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <Layout>
            <SEO title="Hotel" keywords={[`gatsby`, `application`, `react`]} />
            <Flex bg="rgb(38,38,38)" p={3}>
              <Link to="/cvbs/">CVBs</Link>
              <Box pl={1} style={{ color: `rgba(255,255,255,0.24)` }}>
                >
              </Box>
              <Box px={1} style={{ color: `rgba(255,255,255,0.5)` }}>
                {cvb.name}
              </Box>
            </Flex>
            <Flex>
              <Box width={[1, 1 / 2]}>
                <Box
                  style={{
                    minHeight: `200px`,
                    height: `100%`,
                    width: `100%`,
                    background: `url("https://maps.googleapis.com/maps/api/staticmap?center=${
                      cvb.address
                    }+${cvb.city}+${cvb.state}&markers=color:purple%7C${
                      cvb.address
                    }+${cvb.city}+${
                      cvb.state
                    }&zoom=15&scale=1&size=700x700&maptype=roadmap&format=png&visual_refresh=true&key=AIzaSyAyKqdyShfNZdKo1jpeOUyoDEKCCq8gZIE&style=")`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center center !important`,
                  }}
                />
              </Box>
              <Box bg="white" p={3} width={[1, 1 / 2]}>
                <Heading mb={2} color={`rebeccapurple`}>
                  {cvb.name}
                </Heading>
                <Text color="black">
                  {cvb.address}, {cvb.city}, {cvb.state}
                </Text>
                <Heading color="gray" fontSize="small">
                  Address
                </Heading>
                <Text color="black" pt={3}>
                  {cvb.phone}
                </Text>
                <Heading color="gray" fontSize="small">
                  Phone
                </Heading>
                <Text color="black" pt={3}>
                  {cvb.hotelRoomInventory}
                </Text>
                <Heading color="gray" fontSize="small">
                  Total hotel inventory
                </Heading>
                <Text color="black" pt={3}>
                  {cvb.conventionCenter}
                </Text>
                <Heading color="gray" fontSize="small">
                  Convention Center
                </Heading>
                <Text color="black" pt={3}>
                  {cvb.mainAirport2}
                </Text>
                <Heading color="gray" fontSize="small">
                  Airports
                </Heading>
                <Text color="black" pt={3}>
                  {cvb.transportationCosts2}
                </Text>
                <Heading color="gray" fontSize="small">
                  Transportation Costs
                </Heading>
              </Box>
            </Flex>
            <Flex bg={`rebeccapurple`} p={2}>
              <Box>Sales Staff</Box>
            </Flex>
            <Flex
              bg={`#9674bc`}
              p={4}
              flexDirection="row"
              justifyContent="space-between"
            >
              <Box p={4}>
                <img
                  src="https://randomuser.me/api/portraits/women/27.jpg"
                  style={{ borderRadius: `50%`, maxWidth: `100px` }}
                />
                <Heading>Portia Conerly</Heading>
                <Text>Meetings and Conventions Manager</Text>
                <Text>pconerly@arlingtonva.us</Text>
                <Text>703-228-0873</Text>
              </Box>
              <Box p={4}>
                <img
                  src="https://randomuser.me/api/portraits/women/27.jpg"
                  style={{ borderRadius: `50%`, maxWidth: `100px` }}
                />
                <Heading>Portia Conerly</Heading>
                <Text>Meetings and Conventions Manager</Text>
                <Text>pconerly@arlingtonva.us</Text>
                <Text>703-228-0873</Text>
              </Box>
            </Flex>
            <Flex bg={`#3e3e3e`} p={2}>
              <Box>Promos</Box>
            </Flex>
            <Flex bg={`#000`} p={4} flexDirection="row" flexwrap="wrap">
              <Box p={4} width={[1, 1 / 2]}>
                <img
                  src="https://pbs.twimg.com/media/DpBrilTWkAEO6h3.jpg"
                  width="100%"
                />
                <Heading color="orange">Promo name</Heading>
                <Text>
                  Per conubia etiam at curae magnis ex finibus lobortis donec
                  morbi erat enim ultricies ut condimentum nibh augue phasellus
                  ac
                </Text>
              </Box>
              <Box p={4} width={[1, 1 / 2]}>
                <img
                  src="https://pbs.twimg.com/media/DpBrilTWkAEO6h3.jpg"
                  width="100%"
                />
                <Heading color="orange">Promo name</Heading>
                <Text>
                  Per conubia etiam at curae magnis ex finibus lobortis donec
                  morbi erat enim ultricies ut condimentum nibh augue phasellus
                  ac
                </Text>
              </Box>
            </Flex>
            <Flex flexDirection="row" flexWrap="wrap" bg="white">
              <Box width={[1, 1 / 2]}>
                <Box width={1} bg="purple">
                  <Heading color="white" fontSize="2" p={3}>
                    CVB updates
                  </Heading>
                </Box>
                <Box p={3} bg="#f0f0f0">
                  <img
                    src="http://meetingglue.herokuapp.com/_nuxt/img/bd28f89.png"
                    width="100%"
                  />
                  <Heading px={3} mb={3} color="gray" fontSize={3}>
                    Enrich Attendees’ Event Experiences with Volunteer Projects
                  </Heading>
                  <Heading px={3} fontSize="2">
                    Create purpose and connection among your attendees. Express
                    your clients’ brand values by organizing a volunteer
                    experience at your next meeting or event.
                  </Heading>
                  <Text px={3} color="black" fontSize="2" mt={3} pb={5}>
                    In the capital area, volunteer opportunities abound with a
                    host of non-profits, Non-Governmental Organization (NGOs)
                    and cause-driven organizations that can align well with your
                    group or client’s mission. Activities can range from packing
                    school supplies for local kids, joining in an environmental
                    cleanup or even working as a volunteer at a charity run. If
                    your clients’ organizational culture includes a focus on
                    social responsibility, many local Arlington non-profits have
                    activities that might be a good match for your attendees.
                  </Text>
                </Box>
              </Box>
              <Box width={[1, 1 / 2]}>
                <Box width={1} bg="deepskyblue">
                  <Heading color="white" fontSize="2" p={3}>
                    Twitter
                  </Heading>
                </Box>
                <Box p={3} bg="white">
                  <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="lvcva"
                    options={{ height: 750 }}
                  />
                </Box>
              </Box>
            </Flex>
          </Layout>
        )
      }}
    />
  )
}

export default HotelPage
