import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/containers/Layout'
import HomePage from '../components/containers/HomePage'

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
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
        image
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
