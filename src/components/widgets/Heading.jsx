import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../styles/theme'

const Heading = {}

const BaseHeading = css`
  color: inherit;
  line-height: 1.2;
`

Heading.h1 = styled.h1`
  ${BaseHeading}
  font-family: ${props => props.fontFamily};
  font-weight: ${props => props.fontWeight};
  font-size: 2.5rem;
  ${props => props.customStyles}
`

Heading.h1.defaultProps = {
  fontFamily: theme.font.sans,
  fontWeight: 700,
}

Heading.h2 = styled.h2`
  ${BaseHeading}
  font-family: ${props => props.fontFamily};
  font-weight: ${props => props.fontWeight};
  font-size: 2rem;
  ${props => props.customStyles}
`

Heading.h2.defaultProps = {
  fontFamily: theme.font.sans,
  fontWeight: 700,
}

Heading.h3 = styled.h3`
  ${BaseHeading}
  font-family: ${props => props.fontFamily};
  font-weight: ${props => props.fontWeight};
  font-size: 1.75rem;
  ${props => props.customStyles}
`

Heading.h3.defaultProps = {
  fontFamily: theme.font.sans,
  fontWeight: 700,
}

Heading.h4 = styled.h4`
  ${BaseHeading}
  font-family: ${props => props.fontFamily};
  font-weight: ${props => props.fontWeight};
  font-size: 1.5rem;
  ${props => props.customStyles}
`

Heading.h4.defaultProps = {
  fontFamily: theme.font.sans,
  fontWeight: 700,
}

Heading.h5 = styled.h5`
  ${BaseHeading}
  font-family: ${props => props.fontFamily};
  font-weight: ${props => props.fontWeight};
  font-size: 1.25rem;
  ${props => props.customStyles}
`

Heading.h5.defaultProps = {
  fontFamily: theme.font.sans,
  fontWeight: 700,
}

Heading.h6 = styled.h6`
  ${BaseHeading}
  font-family: ${props => props.fontFamily};
  font-weight: ${props => props.fontWeight};
  font-size: 1rem;
  ${props => props.customStyles}
`

Heading.h6.defaultProps = {
  fontFamily: theme.font.sans,
  fontWeight: 700,
}

export default Heading
