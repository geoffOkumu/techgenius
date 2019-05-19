import React from 'react'

import Layout from '../../components/containers/Layout'
import BlogPage from '../../components/containers/BlogPage'
import Menu from '../../components/containers/Menu'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Menu />
        <BlogPage />
      </Layout>
    )
  }
}
