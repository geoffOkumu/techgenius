import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'

import Container from '../widgets/Container'
import { BlogListItem } from './BlogList'
import { TextOverlay, HeaderOverlay, Header } from '../widgets/Header'

export default () => (
  <StaticQuery
    query={graphql`
      query BlogPageQuery {
        posts: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              timeToRead
              fields {
                slug
              }
              frontmatter {
                title
                tags
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 720, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
        headerBg: markdownRemark(
          frontmatter: { templateKey: { eq: "index-page" } }
        ) {
          frontmatter {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => {
      const posts = data.posts.edges

      return (
        <main>
          <Header>
            <Img
              style={{ height: 500, objectFit: 'cover' }}
              fluid={data.headerBg.frontmatter.image.childImageSharp.fluid}
            />
            <HeaderOverlay />
            <TextOverlay>
              <Container maxWidth={720}>
                <h1>Blog</h1>
              </Container>
            </TextOverlay>
          </Header>
          <Wrapper>
            <Container maxWidth={720}>
              <Title>All Posts</Title>
              {posts.map(p => (
                <BlogListItem
                  key={p.node.frontmatter.title}
                  image={p.node.frontmatter.featuredimage}
                  title={p.node.frontmatter.title}
                  tags={p.node.frontmatter.tags}
                  timeToRead={p.node.timeToRead}
                  slug={p.node.fields.slug}
                />
              ))}
            </Container>
          </Wrapper>
        </main>
      )
    }}
  />
)

const Title = styled.h2`
  font-size: 2.4rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
`

const Wrapper = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
`
