import React from 'react'
import styled from 'styled-components'
import { P } from '../../Utils/Typograpyhy'
import {theme} from '../../Utils/Theme'
import { Link } from 'react-router-dom'
const BlogCard = ({cardImg, thumbImg, category, contentTitle, contentText, authorName, imgSrc, date, id}) => {
  return (
    <StyledBlogCard>
       <div className="blog-card-container"
       >
        <Link to={`${id}`}>
       
            <div className="blog-card-image">
                <img src={cardImg} alt="blog"/>
            </div>
            <div className="blog-card-content">
                <div className="category">
                    <P textAlign="left"
                    fontSize="1rem"
                    color="#7080A1"
                    >
                      {category}
                    </P>
                </div> 
               <div className="blog-title">
                    <P textAlign="left"
                    fontSize="1.5rem"
                    color={"#0D2A57"}
                    lineHeight="1.9rem"
                    fontWeight={500}
                    >
                      {contentTitle}
                    </P>
                </div>   
                <div className="blog-text">
                  <P
                  fontSize= "1.125rem"
                  fontWeight="300"
                  color="#4B4B4B"
                  textAlign="left"
                  lineHeight="1.8125rem"
                  >
                    {contentText}
                  </P>
                </div>
                <div className="blog-author">
                    <div className="image-thumbnail">
                      <img src={thumbImg} alt="" />
                    </div>
                    <div className="author-name">
                    <P
                    fontSize="1rem"
                    fontWeight="400"
                    color="#0D2A57"
                    textAlign="left">{authorName}</P>
                      <P 
                    fontSize="0.5rem"
                    fontWeight="400"
                    color="#0D2A57"
                    textAlign="left">
                       {date}
                    </P>
                </div>
            </div>
          </div>
          </Link>
       </div>
    </StyledBlogCard>
  )
}

export default BlogCard

const StyledBlogCard = styled.div`
.blog-card-container{
    .blog-card-image{
        width: 100%;
        max-width: 23.875rem;
        height: 18.75rem;
        background-color: #F2F2F2;
        overflow: hidden;
        border: 1px solid #0000FF;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
           
            transition: transform .5s ease;

            &:hover{
                transform: scale(1.1);
               
            }
        }
    }
    .blog-card-content{
      margin-top: 1.5rem;
      
      .category{
        padding-bottom: 0.5rem;
      }

      .blog-title{
        padding-bottom: 1rem;
      }

      .blog-text{
        padding-bottom: 1rem;
        
      }
    }
    .blog-author{
            display: flex;
            gap: 1%;
            align-items: center;
            .image-thumbnail{
                width: 50px;
                height: 50px;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

    }   



}
`

