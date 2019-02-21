import { Box, Card, Flex, Heading } from 'rebass'

import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const MapCard = ({ title, address, city, state, id }) => (
  <Card
    width={[1]}
    p={2}
    mb={4}
    color="black"
    bg="whitesmoke"
    boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
  >
    <Flex flexDirection="row" flexWrap="wrap">
      <Box width={[1, 1, 1 / 2]} pt={1}>
        <Box
          style={{
            minHeight: `200px`,
            width: `100%`,
            background: `url("https://maps.googleapis.com/maps/api/staticmap?center=${address}+${city}+${state}&markers=color:purple%7C${address}+${city}+${state}&zoom=15&scale=1&size=700x200&maptype=roadmap&format=png&visual_refresh=true&key=AIzaSyAyKqdyShfNZdKo1jpeOUyoDEKCCq8gZIE&style=")`,
            backgroundSize: `cover`,
            backgroundPosition: `center center`,
          }}
        />
      </Box>
      <Box width={[1, 1 / 2]} p={3}>
        <Link to={`hotel/${id}`}>
          <Heading fontSize={4} pb={2} color={`rebeccapurple`}>
            {title}
          </Heading>
          <Heading fontSize="2" color="darkorange">
            {address}, {city}, {state}
          </Heading>
        </Link>
      </Box>
    </Flex>
  </Card>
)

MapCard.propTypes = {
  title: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  link: PropTypes.string,
  id: PropTypes.string,
}

MapCard.defaultProps = {
  title: ``,
  address: ``,
  city: ``,
  state: ``,
  link: ``,
  id: ``,
}

export default MapCard
