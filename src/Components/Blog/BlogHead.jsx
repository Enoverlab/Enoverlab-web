import React from 'react'
import styled from 'styled-components'
import {theme} from '../../Utils/Theme'
import blogHead from '../../assets/blogHeaderBg.svg'
import { H1 } from '../../Utils/Typograpyhy'
import { Fi, FiSearch } from 'react-icons/fi'

const BlogHead = () => {
  return (
    <StyledBlogHead>
             <div className="blog-head-container">
                <div className="blog-head-container-back">
                </div>
                <div className="blog-head-container-front">
                    <div className="blog-head-container-front-text">
                    <H1 fontWeight={300}>
                            Product Blog
                    </H1>
                    </div>

                 <div className="searchbar-container">
                 <div className="searchbar">
                        <FiSearch className="search-icon"/>
                        <input type="text" placeholder="Search"/>
                    </div>
                 </div>
                </div>
            </div>
    </StyledBlogHead>
  )
}

export default BlogHead

const StyledBlogHead = styled.div`
    position: relative;
    width: 100%;
    padding: 5% 5% 5% 10%;
    .blog-head-container{
        position: relative;

        .blog-head-container-back{
            position: absolute;
            top: -20px;
            left: 30px;
            width: 90%;
            height: 14.625rem;
            background: ${theme.color.quaternary};
            border: 1px solid ${theme.color.dark};
        }
        .blog-head-container-front{
            position: relative;
            width: 95%;
            background: url(${blogHead});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            height: 14.625rem;
            background-color: ${theme.color.quaternary};
            border: 1px solid ${theme.color.dark};
            padding: 1.5rem;
            @media (max-width: 768px){
                
            }

            .searchbar-container{
                margin: 0 auto;
                display: flex;
                justify-content: center;
                transform: translate(0%, 70%);
                .searchbar{
                    position: relative;
                    display: flex;
                    align-items: center;
                    background-color: ${theme.color.light};
                    border: 1px solid ${theme.color.dark};
                    width: 60%;
                    padding: 1.25rem 1.35rem ;
                    input{
                        width: 100%;
                        height: 100%;
                        padding: 1rem 1rem;
                        border: none;
                        outline: none;
                        font-size: 1.25rem;
                    }
                    .search-icon{
                        font-size: 1.5rem;
                        color: ${theme.color.dark};
                        font-weight: 300;
                    }
                }
            }
        }

        .blog-head-container-front-text{
            
        }
    }
`