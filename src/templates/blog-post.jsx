import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/containers/Layout'
import Menu from '../components/containers/Menu'
import BlogPostBody from '../components/containers/BlogPost'

const BlogPostTemplate = ({ data }) => {
  return (
    <Layout>
      <Menu />
      <BlogPostBody data={data.markdownRemark} />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1366, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
