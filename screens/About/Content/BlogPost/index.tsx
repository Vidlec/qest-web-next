import React from 'react'
import {
	BlogPostSnippet,
	BlogPostThumbnail,
	BlogPostTitle,
} from './styled'

type Post = {
	link: string
	img: string
	title: string
	snippet: string
}

interface Props {
	post: Post
}

const BlogPost: React.FC<Props> = ({ post }) => (
	<a href={post.link} target="_blank">
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
