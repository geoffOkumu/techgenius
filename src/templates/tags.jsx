import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/containers/Layout'
import Menu from '../components/containers/Menu'
import Container from '../components/widgets/Container'
import {
  TextOverlay,
  HeaderOverlay,
  Header,
} from '../components/widgets/Header'
import { media } from '../components/styles/utils'

const TagsTemplate = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges

  const postLinks = posts.map(post => (
    <li key={post.node.fields.slug}>
      <PostItem>
        <Link to={post.node.fields.slug}>
          <h2>{post.node.frontmatter.title}</h2>
        </Link>
        <div>
          <span>{post.node.frontmatter.date}</span>
          <span>/{post.node.timeToRead} min read</span>
        </div>
      </PostItem>
    </li>
  ))

  const tag = pageContext.tag
  const title = data.site.siteMetadata.title
  const totalCount = data.allMarkdownRemark.totalCount
  const image = data.background.edges[0].node.frontmatter.featuredimage
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with “#${tag}”`

  return (
    <Layout>
      <Menu />
      <Helmet title={`${tag} | ${title}`} />
      <Header>
        <Img
          style={{ height: 500, objectFit: 'cover' }}
          fluid={image.childImageSharp.fluid}
        />
        <HeaderOverlay />
        <TextOverlay fontSize={64}>
          <Container maxWidth={720}>
            <Heading>{tagHeader}</Heading>
          </Container>
        </TextOverlay>
      </Header>
      <main>
        <Container maxWidth={720}>
          <PostsWrapper>{postLinks}</PostsWrapper>
        </Container>
      </main>
    </Layout>
  )
}

export default TagsTemplate

const Heading = styled.h1`
  font-size: 4rem !important;
  margin-top: 150px;

  ${media.phone`
    font-size: 2.6rem !important;
    margin-top: 200px !important;
  `}
`

const PostsWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 80px 0;
  position: relative;
`

const PostItem = styled.article`
  padding-bottom: 40px;
  margin-bottom: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textLight};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textDark};

    &:hover {
      color: ${({ theme }) => theme.colors.blue};
      text-decoration: underline;
    }
  }

  h2 {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  span {
    text-transform: uppercase;
    margin-right: 0.5rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textLight};
    font-weight: 500;
  }
`

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
    background: allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          frontmatter {
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
    }
  }
`
