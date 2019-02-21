import React from 'react'
import facepaint from 'facepaint'
import { jsx, css } from '@emotion/core'

const breakpoints = [40, 52, 64]

const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}em)`))

export default mq
