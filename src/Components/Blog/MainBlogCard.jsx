import React from 'react'
import styled from 'styled-components'
import blogImage from '../../assets/blogImage.png'
import { P, H3 } from '../../Utils/Typograpyhy'
import thumbnailProfile from '../../assets/BlogImages/thumbnail.png'
import {theme} from '../../Utils/Theme'
const MainBlogCard = () => {
  return (
    <StyledMainBlogCard>
         <div className="main-blog-card-container">
            <div className="image-container">
                <img src={blogImage} alt="blogImage" />
            </div>
            <div className="blog-card-content">
                <div className="category">
                    <P textAlign="left"
                    fontSize="1.25rem"
                    color="#7080A1"
                    paddingBottom="0.5rem"
                    >Collaboration</P>
                </div>
                <div className="blog-title">
                <H3 textAlign="left"
                fontSize="2rem"
                color={theme.color.dark}

                >How teamwork fosters your growth as a product manager</H3>
                </div>
                <div className="blog-text">
                    <P 
                    fontSize="1.1rem"
                    fontWeight="400"
                    color="#4B4B4B"
                    textAlign="left">
                    Great product teams must see the business customer relationship as a collaborative back and forth to build a greater product.With the input from your customers, your product is better positioned to continually drive value for customers.
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
            </div>
        </div>
    </StyledMainBlogCard>
  )
}

export default MainBlogCard

const StyledMainBlogCard = styled.div`
   
    .main-blog-card-container{
        display: flex;
        gap: 15%;
    .image-container{
        width: 40%;
        height: auto;
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
            border: 3px solid #0000FF;
        }
    }
    .blog-card-content{
        width: 50%;

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