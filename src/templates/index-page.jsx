import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/containers/Layout'
import HomePage from '../components/containers/HomePage'
import Menu from '../components/containers/Menu'

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <Menu />
      <HomePage data={frontmatter} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        heading
        subheading
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
        testimonials {
          list {
            image
            text
          }
        }
      }
    }
  }
`
