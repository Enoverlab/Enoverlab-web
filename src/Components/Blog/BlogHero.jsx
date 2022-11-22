import React from 'react'
import styled from 'styled-components'
import MainBlogCard from './MainBlogCard'
import thumbImg2 from '../../assets/BlogImages/thumbnail2.png'
import thumbImg3 from '../../assets/BlogImages/thumbnail3.png'
import thumbImg4 from '../../assets/BlogImages/thumbnail4.png'
import blogImg2 from '../../assets/blogImage2.png' 
import blogImg3 from '../../assets/blogImage3.png'
import blogImg4 from '../../assets/blogImage4.png'
import BlogCard from './BlogCard'
import { Article } from './BlogContent'

const BlogData = [
  {
    id: 1,
    category: "Technology",
    contentTitle: "Understanding Product Visiontle",
    contentText: "A Product Vision or the Product Vision Statement is a description of the essence of your product what are the problems it is solving, for whom,and why now is the right time to build it.",
    authorName: "chinemerem Okachi",
    cardImg: blogImg2,
    thumbImg: thumbImg2,
    date: "June 25,2022",
  },
  {
    id: 2,
    category: "Softskills",
    contentTitle: "Building Competence",
    contentText: "A Product Vision or the Product Vision Statement  is a description of the essence of your product what are the problems it is solving, for whom,and why now is the right time to build it.",
    authorName: "Juila Austin",
    cardImg: blogImg3,
    thumbImg: thumbImg3,
    date: "June 25,2022",
  },
  {
    id: 3,
    category: "Technology",
    contentTitle: "Understanding Product Visiontle",
    contentText: "A Product Vision or the Product Vision Statement is a description of the essence of your product what are the problems it is solving, for whom,and why now is the right time to build it.",
    authorName: "chinemerem Okachi",
    cardImg: blogImg4,
    thumbImg: thumbImg4,
    date: "June 25,2022",
  }
]

const BlogHero = () => {
  return (
    <StyledBlogHero>
        <div className="blog-hero-container">
        <MainBlogCard/>        

         <div className="blog-card-grid">
           {
             Article.map((item) => {
                return (
                  <BlogCard
                  key={item.id}
                  category={item.category}
                  contentTitle={item.title}
                  contentText={item.content1}
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
    padding: 5% 10% 5% 10%;
    .blog-card-grid{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem;
      margin-top: 8.1875rem;

      @media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 3rem;
      }

    }
  }

`