import React from 'react'
import styled from 'styled-components'
import Header from '../Components/Header'
import BlogHead from '../Components/Blog/BlogHead'
import BlogHero from '../Components/Blog/BlogHero'
import Footer from '../Components/Footer'

const Blog = () => {
  return (
    <StyledBlog>
        <Header bgColor="#fff" bgColorMobile="#FFF" />
        <BlogHead/>
        <BlogHero/>
        <Footer p="5rem 9.6rem 0 9.6rem"/>
    </StyledBlog>
  )
}

export default Blog

const StyledBlog = styled.div``