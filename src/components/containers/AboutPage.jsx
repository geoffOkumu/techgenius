import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Container from '../widgets/Container'
import CopyContainer from '../widgets/CopyContainer'
import { TextOverlay, HeaderOverlay, Header } from '../widgets/Header'
import { media } from '../styles/utils'

//Icons
import facebookIcon from '../../img/facebook.svg'
import instagramIcon from '../../img/instagram.svg'
import twitterIcon from '../../img/twitter.svg'
import linkedinIcon from '../../img/linkedin.svg'

const AboutPage = ({ data }) => {
  const {
    heading,
    image,
    maincopy,
    twitter,
    facebook,
    instagram,
    linkedin,
    email,
    phone,
  } = data

  return (
    <main>
      <Header>
        <Img
          style={{ height: 500, objectFit: 'cover' }}
          fluid={image.childImageSharp.fluid}
        />
        <HeaderOverlay />
        <TextOverlay>
          <Container maxWidth={720}>
            <h1>{heading}</h1>
          </Container>
        </TextOverlay>
      </Header>
      <CopyContainer copy={maincopy.body} />
      <SocialLinks>
        <Container maxWidth={720}>
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="twitter" />
          </a>
          <a href={facebook} target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="twitter" />
          </a>
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="twitter" />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="twitter" />
          </a>
        </Container>
      </SocialLinks>
      <Container maxWidth={720}>
        <Contact>
          <ContactList>
            <ul>
              <li>{`Email: ${email}`}</li>
              <li>{`Phone: ${phone}`}</li>
            </ul>
          </ContactList>
        </Contact>
      </Container>
    </main>
  )
}

export default AboutPage

const SocialLinks = styled.section`
  padding-bottom: 80px;
  position: relative;

  img {
    height: 40px;
    width: 40px;
  }

  a {
    margin-right: 1rem;
  }
`

const Contact = styled.section`
  padding-bottom: 80px;
`

const ContactList = styled.div`
  background: ${({ theme }) => theme.colors.grey};
  padding: 3rem 1rem;

  ul {
    margin: 0;
    padding-top: 1rem;
    padding-inline-start: 0;
    list-style: none;
  }

  li {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    font-weight: 500;

    ${media.phone`
      font-size: 1.2rem;
    `}
  }
`
