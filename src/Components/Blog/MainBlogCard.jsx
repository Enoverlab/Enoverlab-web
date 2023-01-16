import React from 'react'
import styled from 'styled-components'
// import blogImage from '../../assets/blogImage.png'
import { P, H3 } from '../../Utils/Typograpyhy'
import thumbnailProfile from '../../assets/BlogImages/thumbnail.png'
import {theme} from '../../Utils/Theme'
import { Article } from './BlogContent'
import { Link } from 'react-router-dom'
const MainBlogCard = () => {
  return (
    <StyledMainBlogCard>
         <div className="main-blog-card-container">
            <div className="image-container">
                <img src={Article[3].cardImg} alt="blogImage" />
            </div>
            <div className="blog-card-content">
                <Link to={`${Article[3].id}`}>
                <div className="category">
                    <P textAlign="left"
                    fontSize="1.25rem"
                    color="#7080A1"
                    >Collaboration</P>
                </div>
                <div className="blog-title">
                <H3 textAlign="left"
                fontSize="2rem"
                color={theme.color.dark}

                >{
                    Article[3].title
                }
                </H3>
                </div>
              
                <div className="blog-text">
                   
                    <P 
                    fontSize="1.1rem"
                    fontWeight="300"
                    color="#4B4B4B"
                    textAlign="left"
                    lineHeight="1.6875rem"
                    >
                    {
                        Article[3].content1
                    }
                    </P>
                </div>
                <div className="blog-author">
                    <div className="image-thumbnail">
                    <img src={thumbnailProfile} alt="" />
                    </div>
                    <div className="author-name">
                    <P 
                    fontSize="1rem"
                    fontWeight="400"
                    color="#0D2A57"
                    textAlign="left">Heather Hansson</P>
                    <P 
                    fontSize="0.5rem"
                    fontWeight="400"
                    color="#0D2A57"
                    textAlign="left">
                        May 27,2022
                    </P>
                    </div>
                </div>
                </Link>
            </div>
           
        </div>
    </StyledMainBlogCard>
  )
}

export default MainBlogCard

const StyledMainBlogCard = styled.div`
   
    .main-blog-card-container{
        display: flex;
        gap: 5%;
        align-items: center;
        @media (max-width: 768px){
            flex-direction: column;
            margin-top: 7.8125rem;
        }
    .image-container{
        width: 55%;
        height: auto;
        @media (max-width: 768px){
            width: 100%;
        }
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
            border: 3px solid #0000FF;
        }
    }
    .blog-card-content{
        width: 50%;
        @media (max-width: 768px){
            width: 100%;
        }
        .category{
            padding-bottom: 0.5rem;
        }
        .blog-title{
            padding-bottom: 1rem;
        }
        
        .blog-text{
            padding: 2% 0;
        }

        .blog-author{
            display: flex;
            gap: 2%;
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
    

    }
`