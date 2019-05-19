import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/containers/Layout'
import AboutPage from '../components/containers/AboutPage'
import Menu from '../components/containers/Menu'

const About = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <Menu />
      <AboutPage data={frontmatter} />
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        heading
        subheading
        twitter
        facebook
        linkedin
        instagram
        phone
        email
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        maincopy {
          title
          body
        }
      }
    }
  }
`
