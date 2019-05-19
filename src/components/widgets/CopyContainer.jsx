import styled from 'styled-components'
import React from 'react'

import Container from './Container'
import Text from './Text'

export default ({ copy }) => (
  <Wrapper>
    <Container maxWidth={720}>
      <Text.p>{copy}</Text.p>
    </Container>
  </Wrapper>
)

const Wrapper = styled.section`
  padding: 80px 0;
  position: relative;
`
