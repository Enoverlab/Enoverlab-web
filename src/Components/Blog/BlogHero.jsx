import React from 'react'
import styled from 'styled-components'
import BlogCard from './BlogCard'
import { Article } from './BlogContent'

const BlogHero = () => {
  return (
    <StyledBlogHero>
        <div className="blog-hero-container">
        {/* <MainBlogCard/>         */}

         <div className="blog-card-grid">
           {
             Article.map((item) => {
                return (
                  <BlogCard
                  key={item.id}
                  category={item.category}
                  contentTitle={item.title}
                  contentText={item.content1 ? item?.content1?.slice(0, 100) + '...' : item.content4.slice(0,100) + '...'}
                  authorName={item.authorName}
                  cardImg={item.cardImg}
                  thumbImg={item.thumbImg}
                  date={item.date}
                  id={item.id}
                  />
                )
              })
           }
          </div> 
        </div>
    </StyledBlogHero>
  )
}

export default BlogHero

const StyledBlogHero = styled.div`
  a{
    text-decoration: none;
  }
  .blog-hero-container {
    padding: 1% 8% 5% 8%;
    .blog-card-grid{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 2rem;
      grid-row-gap: 4rem;
      margin-top: 3.1875rem;

      @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 3rem;
      }

    }
  }

`