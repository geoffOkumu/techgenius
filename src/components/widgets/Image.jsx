import styled from 'styled-components'
import PropTypes from 'prop-types'

const Image = styled.img`
  max-width: 100%;
  display: block;
  height: auto;
  ${props => props.customStyles}
`

Image.propTypes = {
  alt: PropTypes.string.isRequired,
}

export default Image
