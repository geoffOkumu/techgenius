import React from 'react'
import Img from 'gatsby-image'

import Container from '../widgets/Container'
import { TextOverlay, HeaderOverlay, Header } from '../widgets/Header'
import CopyContainer from '../widgets/CopyContainer'
import Projects from './Projects'
import BlogList from './BlogList'

const HomePage = ({ data }) => {
  const { heading, subheading, image, maincopy, testimonials } = data

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
            <p>{subheading}</p>
          </Container>
        </TextOverlay>
      </Header>
      <CopyContainer copy={maincopy.body} />
      <Projects projects={testimonials.list} />
      <BlogList />
    </main>
  )
}

export default HomePage
