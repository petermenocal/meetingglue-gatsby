import { Box, Card, Flex, Heading, Text } from 'rebass'
import { Link, StaticQuery, graphql } from 'gatsby'
import React, { useCallback } from 'react'
import { FiMail } from 'react-icons/fi'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

import Gallery from '../components/gallery'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'

const HotelPage = data => {
  const hotel = data.pageContext
  return (
    <StaticQuery
      query={graphql`
        {
          oaklandImages: allFile(
            sort: { fields: [name], order: ASC }
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
            relativePath: {
              eq: "feature-images/oakland-cty-marriott___00000.jpg"
            }
          ) {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          logoImage: file(
            relativePath: { eq: "logo__courtyard_by_mariott.png" }
          ) {
            childImageSharp {
              fixed(width: 300) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          promoImage: file(relativePath: { eq: "smartstart.png" }) {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          promoImage2: file(
            relativePath: { eq: "oakland-cty-marriott___00010.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 900) {
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
              <Link to="/hotels/">Hotels</Link>
              <Box pl={1} style={{ color: `rgba(255,255,255,0.24)` }}>
                >
              </Box>
              <Box px={1} style={{ color: `rgba(255,255,255,0.5)` }}>
                {hotel.name}
              </Box>
            </Flex>
            <Flex width={1} style={{ background: `black` }}>
              <Img
                fluid={data.featureImage.childImageSharp.fluid}
                style={{ minWidth: `100%`, maxHeight: `500px` }}
              />
            </Flex>
            <Flex width={1} bg="whitesmoke" color="black">
              <Card width={1}>
                <Flex
                  flexDirection="row"
                  flexWrap="wrap"
                  justifyContent="space-between"
                  alignItems="center"
                  bg="rebeccapurple"
                  width={1}
                  p={3}
                  color="white"
                >
                  <Box width={[1, 1 / 2]}>
                    <Img fixed={data.logoImage.childImageSharp.fixed} />
                  </Box>
                  <Box width={[1, 1 / 2]} pt={3}>
                    <Text>
                      {hotel.address}, {hotel.city}, {hotel.state}
                    </Text>
                    <Heading
                      fontSize="small"
                      color="gray"
                      mb={2}
                      color="rgba(255,255,255,0.6)"
                    >
                      Address
                    </Heading>
                  </Box>
                </Flex>
                <Flex
                  bg="black"
                  color="white"
                  flexDirection="row"
                  flexWrap="wrap"
                />
                <Flex
                  bg="black"
                  color="white"
                  flexDirection="row"
                  flexWrap="wrap"
                >
                  <Box
                    width={[1, 1, 1 / 2]}
                    p={3}
                    style={{
                      maxHeight: 500,
                      overflowY: `scroll`,
                      WebkitOverflowScrolling: `touch`,
                      overflowX: `hidden`,
                    }}
                  >
                    {data.oaklandImages.edges.map((i, idx) => {
                      const cis = i.node.childImageSharp
                      return (
                        <Img
                          style={{ marginBottom: `20px` }}
                          fluid={cis.fluid}
                        />
                      )
                    })}
                  </Box>
                  <Box width={[1, 1, 1 / 4]} p={3}>
                    <Heading color="rebeccapurple">Quick Facts</Heading>
                    <Flex
                      flexDirection="column"
                      style={{
                        maxHeight: 500,
                        overflowY: `scroll`,
                        WebkitOverflowScrolling: `touch`,
                        overflowX: `hidden`,
                      }}
                    >
                      {hotel.directorsales.length > 0 && (
                        <Box mt={3}>
                          <Text>
                            {hotel.salesemail.length > 0 && (
                              <a
                                href={`mailto:${hotel.salesemail}`}
                                style={{
                                  color: `orange`,
                                  margin: `5px 5px 0 0`,
                                }}
                              >
                                <FiMail
                                  style={{ paddingTop: `5px` }}
                                  alt={`email ${hotel.directorsales}`}
                                />
                              </a>
                            )}
                            {hotel.directorsales}
                          </Text>
                          <Heading fontSize="small" color="gray">
                            Director of Sales
                          </Heading>
                        </Box>
                      )}
                      {hotel.directorcatering.length > 0 && (
                        <Box mt={3}>
                          <Text>{hotel.directorcatering}</Text>
                          <Heading fontSize="small" color="gray">
                            Director of Catering
                          </Heading>
                        </Box>
                      )}
                      {hotel.meetingrooms.length > 0 && (
                        <Box mt={3}>
                          <Text>{hotel.meetingrooms}</Text>
                          <Heading fontSize="small" color="gray">
                            Meeting Rooms
                          </Heading>
                        </Box>
                      )}
                      {hotel.resortfee.length > 0 && (
                        <Box mt={3}>
                          <Text>{hotel.resortfee}</Text>
                          <Heading fontSize="small" color="gray">
                            Resort fee
                          </Heading>
                        </Box>
                      )}
                      {hotel.largestroom1.length > 0 && (
                        <Box mt={3}>
                          <Text>{hotel.largestroom1}</Text>
                          <Heading fontSize="small" color="gray">
                            Largest room #1
                          </Heading>
                        </Box>
                      )}
                      {hotel.largestroom2.length > 0 && (
                        <Box mt={3}>
                          <Text>{hotel.largestroom2}</Text>
                          <Heading fontSize="small" color="gray">
                            Largest room #2
                          </Heading>
                        </Box>
                      )}
                      {hotel.loyaltyprogramname.length > 0 && (
                        <Box mt={3}>
                          <Text>{hotel.loyaltyprogramname}</Text>
                          <Heading fontSize="small" color="gray">
                            Loyalty program
                          </Heading>
                        </Box>
                      )}
                      {hotel.parkingselffee.length > 0 && (
                        <Box mt={3}>
                          <Text>{hotel.parkingselffee}</Text>
                          <Heading fontSize="small" color="gray">
                            Self parking fee
                          </Heading>
                        </Box>
                      )}
                      {hotel.parkingvaletfee.length > 0 && (
                        <Box mt={3}>
                          <Text>{hotel.parkingvaletfee}</Text>
                          <Heading fontSize="small" color="gray">
                            Valet parking fee
                          </Heading>
                        </Box>
                      )}
                      {hotel.pool.length > 0 && (
                        <Box mt={3}>
                          <Text>{hotel.pool}</Text>
                          <Heading fontSize="small" color="gray">
                            Pool?
                          </Heading>
                        </Box>
                      )}
                      {hotel.poolindoors.length > 0 && (
                        <Box mt={3}>
                          <Text>{hotel.poolindoors}</Text>
                          <Heading fontSize="small" color="gray">
                            Pool indoors?
                          </Heading>
                        </Box>
                      )}
                      {hotel.publicwififee.length > 0 && (
                        <Box mt={3}>
                          <Text>{hotel.publicwififee}</Text>
                          <Heading fontSize="small" color="gray">
                            Public Wifi fee
                          </Heading>
                        </Box>
                      )}
                      {hotel.roomstax.length > 0 && (
                        <Box mt={3}>
                          <Text>{hotel.roomstax}</Text>
                          <Heading fontSize="small" color="gray">
                            Rooms tax
                          </Heading>
                        </Box>
                      )}

                      {hotel.salestelephone.length > 0 && (
                        <Box mt={3}>
                          <Text>{hotel.salestelephone}</Text>
                          <Heading fontSize="small" color="gray">
                            Sales telephone
                          </Heading>
                        </Box>
                      )}
                      {hotel.salestax.length > 0 && (
                        <Box mt={3}>
                          <Text>{hotel.salestax}</Text>
                          <Heading fontSize="small" color="gray">
                            Sales tax
                          </Heading>
                        </Box>
                      )}
                      {hotel.servicecharge.length > 0 && (
                        <Box mt={3}>
                          <Text>{hotel.servicecharge}</Text>
                          <Heading fontSize="small" color="gray">
                            Service charge
                          </Heading>
                        </Box>
                      )}
                      {hotel.sleepingrooms.length > 0 && (
                        <Box mt={3}>
                          <Text>{hotel.sleepingrooms}</Text>
                          <Heading fontSize="small" color="gray">
                            Sleeping rooms
                          </Heading>
                        </Box>
                      )}
                      {hotel.spa.length > 0 && (
                        <Box mt={3}>
                          <Text>{hotel.spa}</Text>
                          <Heading fontSize="small" color="gray">
                            Spa
                          </Heading>
                        </Box>
                      )}
                      {hotel.twitter.length > 0 && (
                        <Box mt={3}>
                          <Text>{hotel.twitter}</Text>
                          <Heading fontSize="small" color="gray">
                            Twitter
                          </Heading>
                        </Box>
                      )}
                    </Flex>
                  </Box>
                  <Box width={[1, 1, 1 / 4]} p={3}>
                    <Box width={1}>
                      <Heading color="rebeccapurple" mb={2}>
                        Twitter
                      </Heading>
                    </Box>
                    <TwitterTimelineEmbed
                      sourceType="profile"
                      screenName="Marriott"
                      options={{ height: 500 }}
                    />
                  </Box>
                </Flex>
              </Card>
            </Flex>
            <Flex flexDirection="column">
              <Box bg="whitesmoke" pb={4}>
                <Box width={1}>
                  <Img fluid={data.promoImage.childImageSharp.fluid} />
                </Box>
                <Flex
                  flexDirection="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  flexWrap="wrap"
                >
                  <Box width={[1]}>
                    <Img fluid={data.promoImage2.childImageSharp.fluid} />
                  </Box>
                  <Box width={[1, 1 / 2]}>
                    <Card p={4}>
                      <Heading pb={3}>
                        Start 2019 with smart savings and great rewards!
                      </Heading>
                      <Text color="black">
                        <ul
                          style={{
                            listStyleType: `none`,
                          }}
                        >
                          <li>
                            <span style={{ color: `rebeccapurple` }}>
                              <b>Book 10-20 Room Nights</b>
                            </span>{' '}
                            <br />
                            <span style={{ color: `gray` }}>
                              Pick 1 From Level 1 Perks
                            </span>
                          </li>
                          <li>
                            <span style={{ color: `rebeccapurple` }}>
                              <b>Book 21-40 Room Nights</b>
                            </span>{' '}
                            <br />
                            <span style={{ color: `gray` }}>
                              Pick 2 From Level 1 Perks
                            </span>
                          </li>
                          <li>
                            <span style={{ color: `rebeccapurple` }}>
                              <b>Book 41-50 Room Nights</b>
                            </span>{' '}
                            <br />
                            <span style={{ color: `gray` }}>
                              Pick 1 From Level 2 Perks
                            </span>
                          </li>
                          <li>
                            <span style={{ color: `rebeccapurple` }}>
                              <b>Book 51 or MORE Room Nights</b>
                            </span>{' '}
                            <br />
                            <span style={{ color: `gray` }}>
                              Pick 2 From ANY Level Perks
                            </span>
                          </li>
                          <li>
                            <span style={{ color: `rebeccapurple` }}>
                              <b>Meetings valued at $500-$800</b>
                            </span>{' '}
                            <br />
                            <span style={{ color: `gray` }}>
                              Pick 1 From Level 1 Perks
                            </span>
                          </li>
                          <li>
                            <span style={{ color: `rebeccapurple` }}>
                              <b>Meetings valued at $500-$800</b>
                            </span>{' '}
                            <br />
                            <span style={{ color: `gray` }}>
                              Pick 1 From Level 1 Perks
                            </span>
                          </li>
                          <li>
                            <span style={{ color: `rebeccapurple` }}>
                              <b>Meetings valued at $801-$900</b>
                            </span>{' '}
                            <br />
                            <span style={{ color: `gray` }}>
                              Pick 1 From Level 2 Perks
                            </span>
                          </li>
                          <li>
                            <span style={{ color: `rebeccapurple` }}>
                              <b>Meetings valued at $901 or more</b>
                            </span>{' '}
                            <br />
                            <span style={{ color: `gray` }}>
                              Pick 2 from ANY Level Perks
                            </span>
                          </li>
                        </ul>
                      </Text>
                    </Card>
                  </Box>
                  <Box width={[1 / 2]}>
                    <Card p={4}>
                      <Heading pb={4}>Your SMART Perk Choices:</Heading>
                      <Text color="black">
                        <ul
                          style={{
                            listStyleType: `none`,
                          }}
                        >
                          <li>Triple Marriott Rewards Points (Level 1)</li>
                          <li>
                            5,000 Marriott Rewards Signing Bonus (Level 1)
                          </li>
                          <li>
                            1 VIP upgrade to a suite, complimentary parking and
                            daily breakfast (Level 1)
                          </li>
                          <li>$100 Gift Card (Level 2)</li>
                          <li>10,000 Marriott Reward Points (Level 2)</li>
                          <li>
                            1 Complimentary Staff Room per night (Level 2)
                          </li>
                        </ul>
                      </Text>
                    </Card>
                  </Box>
                  <Box width="1" p={3}>
                    <Text fontSize="small" color="gray">
                      Terms: Perks do not apply to existing contracted groups.
                      Minimum of 10 rooms on peak night required with a signed
                      standard contract agreement, courtesy agreements do not
                      qualify for this incentive. Hotel reserves the right to
                      modify or substitute perks of equal or similar value.
                      Groups which have both rooms and meetings will be counted
                      as one event and will be given the option to choose from
                      perks based on total value of event. Groups who elect gift
                      card counts as 1 card per level, per event, which means
                      you can elect 1 gift card but can not elect a second gift
                      card from the same level as your second perk. Marriott
                      Rewards are subject to terms and conditions, to sign up
                      and for full terms visit www.Marriott/rewards.com. Rewards
                      Points are awarded upon fully executed contract and within
                      15 days of group's departure. Offer cannot be combined
                      with any other offers, subject to availability and
                      contracting terms. Book by June 30, 2019 and arrive by
                      December 31, 2019.
                    </Text>
                  </Box>
                </Flex>
              </Box>
              <Box bg="rgb(0, 0, 0, 0.4)" p={4}>
                <Heading color="deepskyblue" mb={3}>
                  Events near {hotel.name}
                </Heading>
                <Flex
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Card
                    style={{
                      height: `250px`,
                      width: `250px`,
                      backgroundSize: `cover`,
                    }}
                    p={4}
                    backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("http://meetingglue.herokuapp.com/_nuxt/img/b1d6411.png")`}
                  >
                    <Heading color="white">Ace Hotel</Heading>
                    <Text color="white">New Orleans, LA</Text>
                  </Card>
                  <Card width={[1]} p={3}>
                    <Heading color="orange" fontSize={5}>
                      Mi libero lacus ullamcorper rutrum
                    </Heading>
                    <Text>
                      Morbi turpis convallis elementum integer leo sed est justo
                      nam ante tellus, lacinia montes lectus in porttitor neque
                      nulla libero congue blandit sollicitudin...
                    </Text>
                  </Card>
                </Flex>
                <Flex
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Card width={[1]} p={3}>
                    <Heading color="orange" fontSize={5}>
                      Mi libero lacus ullamcorper rutrum
                    </Heading>
                    <Text>
                      Morbi turpis convallis elementum integer leo sed est justo
                      nam ante tellus, lacinia montes lectus in porttitor neque
                      nulla libero congue blandit sollicitudin...
                    </Text>
                  </Card>
                  <Card
                    style={{
                      height: `250px`,
                      width: `250px`,
                      backgroundSize: `cover`,
                    }}
                    p={4}
                    backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("http://meetingglue.herokuapp.com/_nuxt/img/b1d6411.png")`}
                  >
                    <Heading color="white">Ace Hotel</Heading>
                    <Text color="white">New Orleans, LA</Text>
                  </Card>
                </Flex>
                <Flex
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Card
                    style={{
                      height: `250px`,
                      width: `250px`,
                      backgroundSize: `cover`,
                    }}
                    p={4}
                    backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("http://meetingglue.herokuapp.com/_nuxt/img/b1d6411.png")`}
                  >
                    <Heading color="white">Ace Hotel</Heading>
                    <Text color="white">New Orleans, LA</Text>
                  </Card>
                  <Card width={[1]} p={3}>
                    <Heading color="orange" fontSize={5}>
                      Mi libero lacus ullamcorper rutrum
                    </Heading>
                    <Text>
                      Morbi turpis convallis elementum integer leo sed est justo
                      nam ante tellus, lacinia montes lectus in porttitor neque
                      nulla libero congue blandit sollicitudin...
                    </Text>
                  </Card>
                </Flex>
              </Box>
            </Flex>
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1548176921899!6m8!1m7!1sR-12UDVk_2xjMYzK7WbsZw!2m2!1d37.8011819350617!2d-122.2731288497075!3f135.10944431954238!4f-3.8576217568827786!5f0.7820865974627469"
              allowfullscreen="allowfullscreen"
              style={{ border: `0px none` }}
              width="100%"
              height="400px"
              frameborder="0"
            />
          </Layout>
        )
      }}
    />
  )
}

export default HotelPage
