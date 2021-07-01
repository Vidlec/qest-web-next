import React from 'react'
import { MediumPost } from 'utils/data/fetchMediumPosts'
import { BlogPostSnippet, BlogPostThumbnail, BlogPostTitle } from './styled'

interface Props {
  post: MediumPost
}

const BlogPost: React.FC<Props> = ({ post }) => (
  <a href={post.link} target="_blank" rel="noreferrer">
    <BlogPostThumbnail src={post.img} />
    <BlogPostTitle>
      {post.title.split(' — ').map((titleLine, index) => (
        <div key={index}>{titleLine}</div>
      ))}
    </BlogPostTitle>
    <BlogPostSnippet>{post.snippet}</BlogPostSnippet>
  </a>
)

export default BlogPost
