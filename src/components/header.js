import './hamburgers.css'
import Logo from './logo'
import PropTypes from 'prop-types'
import React from 'react'
import StyledLink from './styledLink'
import classNames from 'classnames'
import facepaint from 'facepaint'
import { Box, Flex } from '@rebass/emotion'
import { Link } from 'gatsby'
import { jsx, css } from '@emotion/core'
import Nav from '../components/nav'

const breakpoints = [40, 52, 64]
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}em)`))

const Container = props => (
  <Flex
    flexDirection={['column', 'column', 'row']}
    alignItems="center"
    justifyContent="space-around"
    css={{
      margin: '0 auto',
      maxWidth: 1200,
      padding: 15,
    }}
  >
    {props.children}
  </Flex>
)

const StyledNavLink = props => (
  <Box mb={[3, 0]}>
    <StyledLink {...props} />
  </Box>
)

const OpenMobileNav = props => (
  <>
    <StyledNavLink to="/">HOME</StyledNavLink>
    <StyledNavLink to="/cvbs">CVBs</StyledNavLink>
    <StyledNavLink to="/hotels">HOTELS</StyledNavLink>
    <Nav />
  </>
)

const SmallNav = props => (
  <>
    <button onClick={this.toggleHidden.bind(this)}>Click to show modal</button>
  </>
)

const LargeNav = props => (
  <>
    <OpenMobileNav />
  </>
)

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      isActive: false,
      isHidden: true,
    }
  }
  toggleHidden = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
      isHidden: !prevState.isHidden,
    }))
  }
  render() {
    return (
      <div css={mq({ width: '100%', background: 'black' })}>
        <Container>
          <div
            css={mq({
              display: ['block', 'none'],
              position: 'relative',
              width: '100%',
            })}
          >
            <Link to="/">
              <Logo />
            </Link>
            <div
              css={css`
                position: absolute;
                right: 0;
                top: 0;
                width: '100%';
              `}
            >
              <button
                className={classNames('hamburger hamburger--collapse ', {
                  'is-active': this.state.isActive,
                })}
                type="button"
                onClick={this.toggleHidden}
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            </div>
          </div>

          {!this.state.isHidden && (
            <Flex flexDirection="column" alignItems="flex-start" pt={4} pb={4}>
              <OpenMobileNav />
            </Flex>
          )}

          <div
            css={mq({
              display: ['none', 'block'],
              position: 'relative',
              width: '100%',
            })}
          >
            <Flex
              alignItems="center"
              flexDirection="row"
              justifyContent="center"
            >
              <Box pr={5}>
                <Link to="/">
                  <Logo />
                </Link>
              </Box>
              <LargeNav />
            </Flex>
          </div>
        </Container>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
