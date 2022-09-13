import React from 'react'
import styled from 'styled-components'
import Header from '../Components/Header'
import BlogHead from '../Components/Blog/BlogHead'

const Blog = () => {
  return (
    <StyledBlog>
        <Header/>
        <BlogHead/>
    </StyledBlog>
  )
}

export default Blog

const StyledBlog = styled.div``