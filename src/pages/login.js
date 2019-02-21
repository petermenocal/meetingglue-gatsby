import { Box, Card, Flex, Heading, Text } from 'rebass'

import Layout from '../components/layout'
import { Link } from 'gatsby'
import React from 'react'
import SEO from '../components/seo'
import Slider from '../components/slider'
import Tabs from '../components/tabs'
import Nav from '../components/nav'

const LoginPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Flex
      flexDirection="row"
      flexWrap="wrap"
      alignItems="flex-start"
      justifyContent="center"
    >
      <Box width={[1]} p={4} style={{ minHeight: `300px` }}>
        <Slider style={{ minWidth: `100%`, minHeight: `100%` }} />
      </Box>
      <Box width={[1]} p={4} mt={4} color="black" bg={`white`}>
        <Heading mb={2} fontSize={2} textAlign="right" color={`rebeccapurple`}>
          Promotions
        </Heading>
        <Tabs />
      </Box>
    </Flex>
    <Flex
      bg="rebeccapurple"
      p={3}
      flexDirection="row"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        <Heading color="limegreen">Invite a fellow planner</Heading>
      </Box>
      <Box>
        <input
          type="text"
          style={{
            background: `none`,
            borderBottom: `1px solid white`,
            borderRadius: `0`,
            color: `white`,
            padding: `10px`,
            border: `3px solid white`,
          }}
          placeholder="Their email"
        />
        <input
          type="text"
          style={{
            marginLeft: `20px`,
            background: `none`,
            borderBottom: `1px solid white`,
            borderRadius: `0`,
            color: `white`,
            padding: `10px`,
            border: `3px solid white`,
          }}
          placeholder="Your name"
        />
        <button
          style={{
            background: `white`,
            borderBottom: `1px solid white`,
            borderRadius: `0`,
            color: `rebeccapurple`,
            padding: `10px`,
            marginLeft: `10px`,
            border: `3px solid white`,
          }}
        >
          Send
        </button>
      </Box>
    </Flex>
    <Flex bg="black" flexWrap="wrap">
      <Box width={[1, 1 / 2]} p={4}>
        <Heading color={`white`}>Reviews</Heading>
        <Box p={4}>
          <Heading color="orange">Hyatt Regency Washington</Heading>
          <Text fontSize="small" py={3}>
            "Our high-level guest speaker (Joe Biden) had access to the ballroom
            from a secret stairwell from the back of the hotel! Secret Service
            was very familiar with the property. This place is built for VIPs!"
          </Text>
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
          >
            <img
              src="https://randomuser.me/api/portraits/women/17.jpg"
              style={{ float: `left`, borderRadius: `50%`, maxWidth: `80px` }}
            />
            <Text ml={2} pb={4} fontWeight="bold" color="deepskyblue">
              Juliet Armstrong <br />
              <span style={{ color: `white`, fontSize: `.7rem` }}>
                Senior member (4 years)
              </span>
            </Text>
          </Flex>
        </Box>
        <Box p={4}>
          <Heading color="orange">Hyatt Regency Washington</Heading>
          <Text fontSize="small" py={3}>
            "Our high-level guest speaker (Joe Biden) had access to the ballroom
            from a secret stairwell from the back of the hotel! Secret Service
            was very familiar with the property. This place is built for VIPs!"
          </Text>
          <Flex
            flexDirection="row"
            alignItems="center"
            justifyContent="flex-start"
          >
            <img
              src="https://randomuser.me/api/portraits/women/27.jpg"
              style={{ float: `left`, borderRadius: `50%`, maxWidth: `80px` }}
            />
            <Text ml={2} pb={4} fontWeight="bold" color="deepskyblue">
              Portia Coleman <br />
              <span style={{ color: `white`, fontSize: `.7rem` }}>
                Member (23 weeks)
              </span>
            </Text>
          </Flex>
        </Box>
      </Box>
      <Box width={[1, 1 / 2]} p={4}>
        <Heading color={`white`}>Industry News</Heading>
        <Flex flexDirection="column" mt={3}>
          <Flex flexDirection="row">
            <Box width={1 / 2}>
              <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" />
            </Box>
            <Box width={1 / 2} px={3}>
              <Heading color="orange" fontSize={3}>
                Mi libero lacus ullamcorper rutrum
              </Heading>
              <Text fontSize="small">
                Morbi turpis convallis elementum integer leo sed est justo nam
                ante tellus, lacinia montes lectus in porttitor neque nulla
                libero congue blandit sollicitudin...
              </Text>
            </Box>
          </Flex>
          <Flex flexDirection="row">
            <Box width={1 / 2}>
              <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" />
            </Box>
            <Box width={1 / 2} px={3}>
              <Heading color="orange" fontSize={3}>
                Mi libero lacus ullamcorper rutrum
              </Heading>
              <Text fontSize="small">
                Morbi turpis convallis elementum integer leo sed est justo nam
                ante tellus, lacinia montes lectus in porttitor neque nulla
                libero congue blandit sollicitudin...
              </Text>
            </Box>
          </Flex>
          <Flex flexDirection="row">
            <Box width={1 / 2}>
              <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" />
            </Box>
            <Box width={1 / 2} px={3}>
              <Heading color="orange" fontSize={3}>
                Mi libero lacus ullamcorper rutrum
              </Heading>
              <Text fontSize="small">
                Morbi turpis convallis elementum integer leo sed est justo nam
                ante tellus, lacinia montes lectus in porttitor neque nulla
                libero congue blandit sollicitudin...
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Flex>
    <Flex bg="whitesmoke" flexWrap="wrap">
      <Box width={[1, 1 / 3]} p={4}>
        <Heading color="black" mb={2}>
          Most Popular
        </Heading>
        <Flex flexDirection="column">
          <Card
            style={{ height: `200px`, backgroundSize: `cover` }}
            p={4}
            mb={2}
            backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1508527951275-84b4bfe1be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80")`}
          >
            <Heading color="white">Las Vegas</Heading>
          </Card>
          <Card
            style={{ height: `200px`, backgroundSize: `cover` }}
            p={4}
            mb={2}
            backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80")`}
          >
            <Heading color="white">Washington DC</Heading>
          </Card>
          <Card
            style={{ height: `200px`, backgroundSize: `cover` }}
            p={4}
            mb={2}
            backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1505248207594-9f9912dda70a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80")`}
          >
            <Heading color="white">Oakland, CA</Heading>
          </Card>
        </Flex>
      </Box>
      <Box width={[1, 1 / 3]} p={4}>
        <Heading color="black" mb={2}>
          Hot Openings
        </Heading>
        <Flex flexDirection="column">
          <Card
            style={{ height: `200px`, backgroundSize: `cover` }}
            p={4}
            mb={2}
            backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("http://meetingglue.herokuapp.com/_nuxt/img/b1d6411.png")`}
          >
            <Heading color="white">Ace Hotel</Heading>
            <Text color="white">New Orleans, LA</Text>
          </Card>
          <Card
            style={{ height: `200px`, backgroundSize: `cover` }}
            p={4}
            mb={2}
            backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("http://meetingglue.herokuapp.com/_nuxt/img/14b7322.png")`}
          >
            <Heading color="white">Ace Hotel</Heading>
            <Text color="white">New Orleans, LA</Text>
          </Card>
          <Card
            style={{ height: `200px`, backgroundSize: `cover` }}
            p={4}
            mb={2}
            backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://pbs.twimg.com/media/DxECH09V4AA66Sf.jpg")`}
          >
            <Heading color="white">Ace Hotel</Heading>
            <Text color="white">New Orleans, LA</Text>
          </Card>
        </Flex>
      </Box>

      <Box width={[1, 1 / 3]} p={4}>
        <Heading color="black" mb={2}>
          Polls
        </Heading>
        <Card
          mt={4}
          bg="white"
          p={4}
          style={{ boxShadow: `-5px 5px 15px rgba(0,0,0,0.4)` }}
        >
          <Heading color="gray" fontSize={3} mb={3}>
            What type of planner are you?
          </Heading>
          <select>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
          </select>
          <button
            style={{
              background: `rebeccapurple`,
              border: `none`,
              marginLeft: `30px`,
              color: `white`,
            }}
          >
            Vote
          </button>
        </Card>
        <Card
          mt={4}
          bg="white"
          p={4}
          style={{ boxShadow: `-5px 5px 15px rgba(0,0,0,0.4)` }}
        >
          <Heading color="gray" fontSize={3} mb={3}>
            What type of planner are you?
          </Heading>
          <select>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
          </select>
          <button
            style={{
              background: `rebeccapurple`,
              border: `none`,
              marginLeft: `30px`,
              color: `white`,
            }}
          >
            Vote
          </button>
        </Card>
        <Card
          mt={4}
          bg="white"
          p={4}
          style={{ boxShadow: `-5px 5px 15px rgba(0,0,0,0.4)` }}
        >
          <Heading color="gray" fontSize={3} mb={3}>
            What type of planner are you?
          </Heading>
          <select>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
          </select>
          <button
            style={{
              background: `rebeccapurple`,
              border: `none`,
              marginLeft: `30px`,
              color: `white`,
            }}
          >
            Vote
          </button>
        </Card>
      </Box>
    </Flex>
  </Layout>
)

export default LoginPage
