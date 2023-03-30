import React from "react";
import styled, {keyframes}  from "styled-components";
import { H1, H2, H3, P, H4 } from "../../Utils/Typograpyhy";
import { theme } from "../../Utils/Theme";
import detailsImage1 from "../../assets/exclusive/detailsImage1.png";
import detailsImage2 from "../../assets/exclusive/detailsImage2.png";
import {BsCheckCircle} from 'react-icons/bs'
import {detailsData, detailsListData} from './DetailsData'
import Figma from "../../assets/figma.png";
import gmailIcon from "../../assets/gmailIcon.png";
import googleAnalytics from "../../assets/googleAnalytics.png";
import googleDocs from "../../assets/googleDocs.png";
import hotJar from "../../assets/hotJar.png";
import Jira from "../../assets/Jira.png";
import productPlan from "../../assets/productPlan.png";
import slack from "../../assets/slackIcon.png";
import trello from "../../assets/trello.png";
import { SecondaryButton } from '../../Utils/Buttons'



const Details = () => {
  const color = theme.color;
  return (
    <StyledDetails>
      <div className="details-container">
        <div className="details-images-container">
          <div className="details-image">
            <img src={detailsImage1} alt="" />
          </div>
          <div className="details-image">
            <img src={detailsImage2} alt="" />
          </div>
        </div>

        <div className="details-content-container">
          <div className="head-text">
            <div className="desktop-head">
            <H1
              color={"#0046FF"}
              fontSize="3rem"
              lineHeight="3.75rem"
              mobileFontSize="1.5rem"
              fontWeight="700"
              paddingBottom={".875rem"}
              textAlign="left"
            >
              What the course entails
            </H1>
            </div>
            
          
          
          </div>
          <div className="details-content">
            {detailsData.map((item, index) => (
              <div key={index} className="details-content-text">
                <H4
                  color={color.dark}
                  fontSize="1.25rem"
                  mobileFontSize="1rem"
                  fontWeight="400"
                  textAlign="left"
                >
                  {item.text}
                </H4>
                <P
                  color={color.dark}
                  fontSize="1.5rem"
                  mobileFontSize=".875rem"
                  fontWeight="500"
                  textAlign="left"
                >
                  {item.value}
                </P>
              </div>
            ))}
          </div>

          <div className="detailsListContainer">
            <div className="list-title">
              <H4 textAlign="left" color={color.dark} fontSize="1.25rem" mobileFontSize="1rem">
                Learning Syllabus
              </H4>
            </div>
            <div className="list">
          {
            detailsListData.map((item, index) => (
              <div key="index" className="list-item">
              <div className="icon">
                <BsCheckCircle color={color.dark} size="1rem" fontWeight={"700"}/>
              </div>
              <div className="text">
                <P color={color.dark} fontSize="1.25rem" mobileFontSize="1rem" textAlign="left">
                  {item}
                </P>
            </div>
          </div>
            ))
          }
          </div>
        </div>
        <div className="class-tools-container">
          <H4 fontSize="1.5rem" textAlign="left" color={theme.color.dark}>
            Class Tools
          </H4>
        </div>
        <div className="class-tools-icon-container">
          <div
            className="class-tools-icon-vert"
            style={{
              color: theme.color.dark,
            }}
          >
          
            <div className="class-tools-icon">
              <img src={Figma} alt="google-docs-icon" />
              Figma
            </div>
            <div className="class-tools-icon">
              <img src={Jira} alt="slack-icon" />
              Jira Software
            </div>

            <div className="class-tools-icon">
              <img src={googleAnalytics} alt="slack-icon" />
              Product Plan
            </div>

          </div>

          <div
            className="class-tools-icon-vert"
            style={{
              color: theme.color.dark,
            }}
          >
            
            <div className="class-tools-icon">
              <img src={trello} alt="slack-icon" />
              Trello
            </div>
            <div className="class-tools-icon">
              <img src={productPlan} alt="slack-icon" />
              Product Plan
            </div>
            <div className="class-tools-icon">
              <img src={hotJar} alt="slack-icon" />
              Hotjar
            </div>
          </div>
        </div>
        <div 
         onClick={() => {
          window.open("https://bit.ly/enoverlabexclusive")
        }}
        className="button-container">
        <SecondaryButton to="#" buttText="Enrol Now"/>
        </div>
        </div>
      </div>
    </StyledDetails>
  );
};

export default Details;

const animate = keyframes`
    from {
        transform: scale(.95);
    }

    to {
        transform: scale(1);
    }
`


const StyledDetails = styled.div`
  background-color: #dbf5ff;
  padding: 4.875rem 5%;

  @media (max-width: 768px) {
    padding: 2.875rem 5%;
  }


  .details-container {
    display: flex;
    column-gap: 48px;
    @media (max-width: 768px) {
      flex-direction: column-reverse;
      row-gap: 2rem;
    }

    .details-images-container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 50%;
    
      @media (max-width: 768px) {
        width: 100%;

      }

      .details-image {
        width: 100%;
        height: 26.5rem;

        @media (max-width: 768px) {
          height: 17.25rem;
        }

        img {
          width: 100%;
          height: 100%;
          box-shadow: -10px 14px 0px 0px rgba(0,70,255,1);
        }
      }
    }
    .details-content-container {
      width: 50%;
      @media (max-width: 768px) {
        width: 100%;
      }
      .head-text{
        .desktop-head{
          display: block;
        }
       
      }
      .details-content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;

        .details-content-text{
          H4{
            @media (max-width: 768px) {
              font-weight: 700;
            }
          }
        }
      }

    }
    .detailsListContainer{
      .list-title{
       padding: 1rem 0;
      }
      .list{
        .list-item{
          margin-bottom: 1rem;
          display: flex;
          column-gap: 1rem;
          align-items: center;
        }
      }
    }
    .class-tools-icon-container {
    display: flex;
    justify-content: space-between;
    max-width: 80%;
    margin: 2rem 0;
    .class-tools-icon-vert {
      gap: 2.125rem;
      display: flex;
      flex-direction: column;
      @media (max-width: 768px) {
        gap: 1.75rem;
      }
      .class-tools-icon {
        display: flex;
        align-items: center;
        column-gap: 1rem;
        font-size: 1rem;
        font-weight: 700;

      
        .class-icon {
          width: 2.5rem;
          height: 2.5rem;
          object-fit: contain;
        }
        @media (max-width: 768px) {
          gap: 0.3rem;
          font-size: 0.85rem;
          img {
            width: 1.9rem;
          }
        }
      }
    }
    @media (max-width: 768px) {
      max-width: 90%;
    }
  }
  }

  .button-container{
        margin-top: 3rem;
        width: 35%;
        animation: ${animate} 1s ease-in-out infinite; 
        @media(max-width: 768px){
          min-width:47%;
          bottom: 1.7rem;

        }
    }

    ${SecondaryButton}{
      animation : ${animate} 1s ease-in-out infinite;
    }

`;
