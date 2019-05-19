import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { media } from '../styles/utils'
import { MenuContainer } from '../widgets/Header'
import MenuIcon from '../widgets/MenuIcon'
import Container from '../widgets/Container'

export default class Menu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false,
    }
  }

  render() {
    const { active } = this.state
    return (
      <>
        <Container>
          <MenuContainer>
            <figure
              onClick={e => {
                e.preventDefault()
                this.setState({ active: !this.state.active })
              }}
            >
              <MenuIcon active={active} />
            </figure>
          </MenuContainer>
        </Container>
        <Wrapper show={active}>
          <LinksContainer>
            <LinkItem>
              <Link activeClassName="link-active" to="/">
                Home
              </Link>
            </LinkItem>
            <LinkItem>
              <Link activeClassName="link-active" to="/about">
                About me
              </Link>
            </LinkItem>
            <LinkItem>
              <Link
                partiallyActive={true}
                activeClassName="link-active"
                to="/blog"
              >
                Blog
              </Link>
            </LinkItem>
            <LinkItem>
              <Link
                partiallyActive={true}
                activeClassName="link-active"
                to="/projects"
              >
                Projects
              </Link>
            </LinkItem>
          </LinksContainer>
        </Wrapper>
      </>
    )
  }
}

const Wrapper = styled.nav`
  position: fixed;
  left: 84%;
  top: 80px;
  z-index: 1000;

  ${media.tablet`
      position: relative;
      padding-bottom: 2rem;
      padding-top: 2rem;
      top: 0;
      left: 0;
      width: 100%;
      background: #fff;
      display: ${({ show }) => (show ? 'block' : 'none')};
  `}
`

const LinksContainer = styled.ul`
  margin: 0;
  padding-inline-start: 1rem;
  list-style: none;
`

const LinkItem = styled.li`
  margin: 0;
  margin-bottom: 1rem;

  a {
    text-decoration: none;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.textDark};

    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`
