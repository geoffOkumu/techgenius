import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import kebabCase from 'lodash/kebabCase'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Container from '../widgets/Container'
import { media } from '../styles/utils'

const BlogPostBody = ({ data }) => {
  const { html, timeToRead } = data
  const { title, description, tags, date, featuredimage } = data.frontmatter

  return (
    <main>
      <Helmet>
        <title>{`${title} - Techgenius Blog`}</title>
        <meta name="description" content={`${description}`} />
      </Helmet>
      <Header>
        <Img
          style={{ height: 300, objectFit: 'cover' }}
          fluid={featuredimage.childImageSharp.fluid}
        />
      </Header>
      <Container maxWidth={720}>
        <h1>{title}</h1>
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
      </Container>
      <Container maxWidth={720}>
        <ArticleWrapper dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </main>
  )
}

export default BlogPostBody

const Header = styled.header`
  height: 300px;
  position: relative;

  img {
    width: 80% !important;
    height: 300px !important;
    object-fit: cover;

    ${media.tablet`
        width: 100% !important;
        height: 100% !important;
        object-fit: cover;
    `}
  }
`

const ArticleDetails = styled.div`
  font-weight: 500;
  z-index: 100;
  position: relative;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textDark};

  span {
    text-transform: uppercase;
    margin-right: 1rem;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textLight};

    ${media.tablet`
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 1rem;
        font-size: 12px;

        &:nth-child(1) {
          margin-bottom: 1rem;

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
const ArticleWrapper = styled.article`
  padding: 2rem 0;
  position: relative;
  font-size: 1.2rem;
  line-height: 1.5;

  ${media.phone`
    font-size: 1rem;
  `}
`
