import React from 'react'
import { Article } from '../Components/Blog/BlogContent'
import { useParams } from 'react-router-dom'
const BlogContentPage = () => {
  const { id } = useParams()

  // display content
  const article = Article.filter((item) => item.id === parseInt(id))
  console.log(article)
  return (
    <div>
      <h1>{article[0]?.title} </h1>
    </div>
  )
}

export default BlogContentPage