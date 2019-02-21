import 'react-tabs/style/react-tabs.css'

import { Box, Flex } from 'rebass'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

import React from 'react'

export default () => (
  <Tabs>
    <TabList>
      <Tab>Nobu</Tab>
      <Tab>Nobu</Tab>
      <Tab>Nobu</Tab>
    </TabList>

    <TabPanel>
      <Flex flexDirection="row" flexWrap="wrap">
        <Box width={[1, 1 / 2]}>
          <h3 style={{ marginBottom: `0` }}>Actions:</h3>
          <ul style={{ listStyleType: `none` }}>
            <li style={{ marginBottom: `0` }}>Sign by 10/30/2018</li>
            <li style={{ marginBottom: `0` }}>Hold by 10/30/2018</li>
            <li style={{ marginBottom: `0` }}>100 Rooms or more on peak</li>
          </ul>
        </Box>
        <Box width={[1, 1 / 2]}>
          <h3 style={{ marginBottom: `0` }}>Receive:</h3>
          <ul style={{ listStyleType: `none`, paddingTop: `0` }}>
            <li style={{ marginBottom: `0` }}>Sign by 10/30/2018</li>
            <li style={{ marginBottom: `0` }}>Hold by 10/30/2018</li>
            <li style={{ marginBottom: `0` }}>100 Rooms or more on peak</li>
          </ul>
        </Box>
      </Flex>
    </TabPanel>
    <TabPanel>
      <Flex flexDirection="row" flexWrap="wrap">
        <Box width={[1, 1 / 2]}>
          <h3 style={{ marginBottom: `0` }}>Actions:</h3>
          <ul style={{ listStyleType: `none` }}>
            <li style={{ marginBottom: `0` }}>Sign by 2/5/2018</li>
            <li style={{ marginBottom: `0` }}>Hold by 2/5/2018</li>
            <li style={{ marginBottom: `0` }}>100 Rooms or more on peak</li>
          </ul>
        </Box>
        <Box width={[1, 1 / 2]}>
          <h3 style={{ marginBottom: `0` }}>Receive:</h3>
          <ul style={{ listStyleType: `none`, paddingTop: `0` }}>
            <li style={{ marginBottom: `0` }}>Sign by 10/3/2018</li>
            <li style={{ marginBottom: `0` }}>Hold by 10/3/2018</li>
            <li style={{ marginBottom: `0` }}>100 Rooms or more on peak</li>
          </ul>
        </Box>
      </Flex>
    </TabPanel>
    <TabPanel>
      <Flex flexDirection="row" flexWrap="wrap">
        <Box width={[1, 1 / 2]}>
          <h3 style={{ marginBottom: `0` }}>Actions:</h3>
          <ul style={{ listStyleType: `none` }}>
            <li style={{ marginBottom: `0` }}>Sign by 1/30/2018</li>
            <li style={{ marginBottom: `0` }}>Hold by 1/30/2018</li>
            <li style={{ marginBottom: `0` }}>100 Rooms or more on peak</li>
          </ul>
        </Box>
        <Box width={[1, 1 / 2]}>
          <h3 style={{ marginBottom: `0` }}>Receive:</h3>
          <ul style={{ listStyleType: `none`, paddingTop: `0` }}>
            <li style={{ marginBottom: `0` }}>Sign by 1/30/2018</li>
            <li style={{ marginBottom: `0` }}>Hold by 1/30/2018</li>
            <li style={{ marginBottom: `0` }}>100 Rooms or more on peak</li>
          </ul>
        </Box>
      </Flex>
    </TabPanel>
  </Tabs>
)
