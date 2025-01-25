import React from 'react'
import styled from 'styled-components'
import BlogCard from './BlogCard'
import { useBlog } from '../../context/BlogContext'

const BlogHero = ({articles}) => {
  return (
    <StyledBlogHero>
      <div className="blog-hero-container">
        <div className="blog-card-grid">
          {articles &&
            articles.map((item) => {
              return (
                <BlogCard
                key={item._id}
                category={item.tag}
                contentTitle={item.title}
                contentText={ item?.description}
                authorName={item.author.name}
                cardImg={item.image}
                thumbImg={item.author.image}
                date={new Date(item.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                id={item._id}
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

export function PaginatedItems() {
  const tools = useBlog()
  return (
    <StyledPaginated>
      <BlogHero articles={tools.blogData} />
      <div className='mainy'>
        {tools.renderPagination()}
      </div>
    </StyledPaginated>
  );
}

const StyledPaginated = styled.div`
  .mainy{
    display : flex;
    justify-content: center;
  }
  .pagination{
    display : flex;
    list-style: none;
    margin-bottom : 2rem;
    gap: 2rem;
  }
  .page-item{
    font-size: 1.6rem;
    font-weight: 600;
    color: #0000FF;
    border-radius: 10px;
  }
  .active{
    border: 0.1rem solid blue;
    border-radius: 10px;
    padding: 0px;
  }
  .disabledbutton{
    font-weight : 400;
    color : #000000;
    pointer-events: none;
    cursor: default;
  }
`