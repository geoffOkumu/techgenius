import React from 'react'
import PropTypes from 'prop-types'
import BlogPostBody from '../../components/containers/BlogPost'

const BlogPostPreview = ({ entry, widgetFor }) => {
  const data = {
    html: widgetFor('body'),
    frontmatter: {
      title: entry.getIn(['data', 'title']),
      tags: entry.getIn(['data', 'tags']),
      description: entry.getIn(['data', 'description']),
    },
  }

  return <BlogPostBody data={data} />
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
