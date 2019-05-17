import React from 'react'
import styled, { css } from 'styled-components'
import { font, colors } from '../styles/theme'

const Text = {}

const defaultStyles = css`
  font-family: ${font.serif};
  font-size: 1rem;
  color: ${colors.textDark};
`

Text.p = styled.p`
  ${defaultStyles}
  margin-bottom: 1rem;
  ${props => props.customStyles}
`

Text.span = styled.span`
  ${defaultStyles}
  ${props => props.customStyles}
`
export default Text
