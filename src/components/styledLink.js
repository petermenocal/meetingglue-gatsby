import React from 'react'
import { Link } from 'gatsby'
import { jsx, css } from '@emotion/core'

const StyledLink = props => (
  <Link
    css={css`
      border-bottom: 2px solid transparent;
      color: #fff;
      font-weight: 100;
      letter-spacing: 0.08em;
      margin-left: 1em;
      padding-bottom: 5px;
      text-decoration: none;
      @media (min-width: 52em) {
        margin: 5px;
      }
    `}
    activeStyle={{
      fontWeight: 'bold',
    }}
    {...props}
  >
    {props.children}
  </Link>
)

export default StyledLink
