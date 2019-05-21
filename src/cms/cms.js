import CMS from 'netlify-cms-app'

import BlogPostPreview from './preview-templates/BlogPagePreview'

CMS.init()

CMS.registerPreviewTemplate('blog', BlogPostPreview)
