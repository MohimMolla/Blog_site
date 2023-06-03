import React from 'react'
import Posts from '../Components/Posts/Posts'


export default function Blog({posts}) {
  return (
	<div>
		<Posts posts={posts}></Posts>
		</div>
  )
}
