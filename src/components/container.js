import React from 'react'
import { Flex } from '@rebass/emotion'

const Container = props => (
  <Flex
    flexDirection={['row']}
    css={{
      maxWidth: 1200,
      margin: '0 auto',
    }}
  >
    {props.children}
  </Flex>
)

export default Container
