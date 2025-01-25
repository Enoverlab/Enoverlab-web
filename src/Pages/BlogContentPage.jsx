import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { P, H1 } from "../Utils/styled/Typograpyhy";
import styled from "styled-components";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
// import arrowBack from '../assets/icon/blueArrowBack.png'
import { Link } from "react-router-dom";
import {BsArrowLeftCircle} from 'react-icons/bs'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'react-share'
import axios from "axios";
const BlogContentPage = () => {
  const { id } = useParams();
  const shareUrl = `https://www.enoverlab.com/blog/${id}`;
  const [details, setDetails] = useState({})
  useEffect(()=>{
    const getDetails = async()=>{
      try {
        const response = await axios.get(`/api/v1/getblogDetails?blogId=${id}`)
        setDetails(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getDetails()
    
  },[id])

  return (
    <>
    <Header  bgColor="#FFFFFF" bgColorMobile="#F5FCFF"/>
    
    <BackIcon>
    <Link to="/blog">
    <div className="back-icon">
      <div className="icon-container">
      <BsArrowLeftCircle className="icon"/>
      </div>
    </div>
    </Link>
    </BackIcon>
  
   
    <ImageContainer>
      <div className="img-container">
        <img src={details?.image} alt="blog page" />
      </div>
    </ImageContainer>
    <StyledBlogContent>
     <div className="head-container">
     <H1
        textAlign="left"
        color="#0F2A65"
        fontSize="3rem"
        lineHeight="3.881875rem"
        mobileFontSize="2rem"
      >
        {details?.title}{" "}
      </H1>
     </div>
     <div dangerouslySetInnerHTML={ {__html: details?.content}}>

     </div>
      
      
      <P
      textAlign="left"
      fontSize="1.125rem"
      color="#4B4B4B"
      lineHeight={"1.1rem"}
      fontWeight={"700"}
      paddingTop={"2rem"}
      >
        Share this article:
      </P>

      <div className="share-container">
      <FacebookShareButton url={shareUrl} quote={details.title}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl} title={details.title}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <WhatsappShareButton url={shareUrl} title={details.title}>
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
      <EmailShareButton url={shareUrl} subject={details.title}>
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
      <LinkedinShareButton url={shareUrl} title={details.title}>
        <LinkedinIcon size={32} round={true} />
      </LinkedinShareButton>
     </div>
    </StyledBlogContent>
    <Footer p="5rem 9.6rem 0 9.6rem"/>
    </>
  );
};

export default BlogContentPage;

const StyledBlogContent = styled.div`
  padding: 2rem 25%;
  
  @media (max-width: 768px) {
    padding: 2rem 10%;
  }
  .head-container {
    margin-bottom: 2.375rem;
  }
  P{
    margin-bottom: 1.75rem;
  }
  H4{
    margin-bottom: 1rem;
    font-weight: 500;
    font-size: 1.5rem;
  }
  span{
    font-weight: 800;
  }
  .share-container{
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    margin-top: 0rem;
    @media(max-width: 768px){
      column-gap: 0.5rem;

    }
  }
`;

const ImageContainer = styled.div`
  padding: 2rem 10%;
  @media (max-width: 768px) {
    padding: 2rem 5% 2rem 5%;
  }
  .img-container{
    width: 100%;
    height: 29rem;
    @media (max-width: 768px) {
      height: auto;
    }
    img{
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
 
`
const BackIcon = styled.div`
 padding: 0 10%;
 position: absolute;
 top: 20%;
 @media (max-width: 768px) {
  top: 10%;
  padding: 0 2%;
 }
 a{
  text-decoration: none;
 
  .back-icon{
    display: flex;
    align-items: center;
    margin-bottom: 0.375rem;
    .icon-container{
      width: 3rem;
      /* img{
        width: 100%;

      } */
      .icon{
        font-size: 2.5rem;
        color: #0046FF;

        @media(max-width: 768px){
          font-size:2rem;
        }
      }
    }
    .text{
      /* margin-left: 1rem; */
      p{
        font-size: 1rem;
        color: #0F2A65;
        font-weight: 500;
      }
    }
  }
 }
 
`