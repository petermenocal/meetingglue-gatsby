import './layout.css'

import { Box, Flex } from 'rebass'
import { StaticQuery, graphql } from 'gatsby'
import Nav from './nav'
import Header from './header'
import PropTypes from 'prop-types'
import React from 'react'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1200,
          }}
        >
          <Flex width={1} flexDirection="column">
            <Box p={3}>{children}</Box>
            <Box bg="black" p={3}>
              <footer>
                © {new Date().getFullYear()} {` `}
                <a href="https://meetingglue.com">Meeting Glue</a>
              </footer>
            </Box>
          </Flex>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
