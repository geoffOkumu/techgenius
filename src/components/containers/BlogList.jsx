import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import Img from 'gatsby-image'

import Container from '../widgets/Container'
import { media } from '../styles/utils'

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          limit: 2
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
      }
    `}
    render={(data, count) => {
      const posts = data.allMarkdownRemark.edges

      return (
        <Wrapper>
          <Container maxWidth={720}>
            <Title>Latest from the blog</Title>
            {posts.map(p => (
              <BlogListItem
                key={p.node.frontmatter.title}
                image={p.node.frontmatter.featuredimage}
                title={p.node.frontmatter.title}
                tags={p.node.frontmatter.tags}
                date={p.node.frontmatter.date}
                timeToRead={p.node.timeToRead}
                slug={p.node.fields.slug}
              />
            ))}
          </Container>
        </Wrapper>
      )
    }}
  />
)

export const BlogListItem = ({
  image,
  title,
  timeToRead,
  tags,
  slug,
  date,
}) => (
  <ArticleWrapper>
    <figure>
      <Img
        fluid={image.childImageSharp.fluid}
        alt="featured"
        style={{ height: 300, objectFit: 'cover' }}
      />
    </figure>
    <ArticleDetails>
      <span>
        {tags.map(t => (
          <Link key={t} to={`/tags/${kebabCase(t)}`}>
            {t}
          </Link>
        ))}
      </span>
      <span>
        {date} . {timeToRead} min read
      </span>
    </ArticleDetails>
    <Link to={slug}>
      <h2>{title}</h2>
    </Link>
  </ArticleWrapper>
)

const Wrapper = styled.section`
  padding-bottom: 100px;
`

const Title = styled.h2`
  font-size: 2.4rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
`

const ArticleWrapper = styled.article`
  padding-bottom: 40px;
  margin-bottom: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textLight};

  figure {
    height: 300px !important;
    margin: 0;
    object-fit: cover;

    img {
      height: 300px !important;
      width: 100% !important;
      object-fit: cover;
    }
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textDark};
    position: relative;

    &:hover {
      color: ${({ theme }) => theme.colors.blue};
      text-decoration: underline;
    }
  }

  h2 {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    font-size: 1.6rem;
  }
`

const ArticleDetails = styled.div`
  padding-top: 1rem;
  font-weight: 500;
  position: relative;

  span {
    text-transform: uppercase;
    margin-right: 0.5rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textLight};

    ${media.tablet`
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 0.5rem;

        &:nth-child(1) {
          margin-bottom: 0.5rem;
          font-size: 12px;

          a {
            background: #cecece;
            display: block;
            margin-bottom: 0.5rem;
            padding: 0.5rem;
            color: ${({ theme }) => theme.colors.blue};
            font-weight: 400;
          }
        }
    `}
  }

  a {
    margin-right: 0.5rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textLight};

    &:hover {
      color: ${({ theme }) => theme.colors.blue};
      text-decoration: underline;
    }
  }

  a:before {
    content: '#';
  }
`
