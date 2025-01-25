import styled from 'styled-components'
import Header from '../Components/Header'
import BlogHead from '../Components/Blog/BlogHead'
import { PaginatedItems } from '../Components/Blog/BlogHero'
import Footer from '../Components/Footer'
import { BlogContextProvider } from '../context/BlogContext'

const Blog = () => {
  return (
    <StyledBlog>
      <BlogContextProvider>
        <Header bgColor="#fff" bgColorMobile="#FFF" />
        <div data-aos="fade-right">
          <BlogHead/>
        </div>
        <PaginatedItems itemsPerPage={6}/>
        <Footer p="5rem 9.6rem 0 9.6rem"/>
      </BlogContextProvider>
    </StyledBlog>
  )
}

export default Blog

const StyledBlog = styled.div``