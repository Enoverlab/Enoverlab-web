import styled from 'styled-components'
import Header from '../Components/Header'
import BlogHead from '../Components/Blog/BlogHead'
import { PaginatedItems } from '../Components/Blog/BlogHero'
import Footer from '../Components/Footer'

const Blog = () => {
  return (
    <StyledBlog>
        <Header bgColor="#fff" bgColorMobile="#FFF" />
        <div data-aos="fade-right">
          <BlogHead/>
        </div>
        <PaginatedItems itemsPerPage={6}/>
        <Footer p="5rem 9.6rem 0 9.6rem"/>
    </StyledBlog>
  )
}

export default Blog

const StyledBlog = styled.div``