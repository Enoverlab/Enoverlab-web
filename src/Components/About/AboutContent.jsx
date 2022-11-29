import React from "react";
import styled from "styled-components";
import aboutImage from "../../assets/aboutImage.png";
import { SecondaryButton } from "../../Utils/Buttons";
import { H1, H2, P } from "../../Utils/Typograpyhy";
const AboutContent = () => {
  return (
    <StyledAboutContent>
      <div className="about-content">
        <div className="image-container">
          <img src={aboutImage} alt="about" />
        </div>
        <div className="about-text-container">
          <div className="about-text-left">
            <H1 textAlign="left" fontSize="4rem" fontWeight="300" mobileFontSize="1.5rem">
              Our Mission
            </H1>
            <H2
              textAlign="left"
              fontSize="3rem"
              color="#4B4B4B"
              fontWeight="500"
              paddingBottom="1rem"
              mobileFontSize="2rem"
            >
              Empowering the next generation of product manger through hands on
              learning
            </H2>
            {/* <div className="button-container">
              <SecondaryButton to="/programs" buttText="Learn More" />
            </div> */}
          </div>
          <div className="about-text-right">
            <P
              color="#333333"
              fontSize="1.5rem"
              fontWeight="300"
              textAlign="left"
              lineHeight="160%"
              paddingTop="1rem"
            >
              Traditional models of learning no longer support product managers
              for the modern tech world. We create enoverlab as an innovative
              laboratory to groom skilled product managers who will create great
              products via product thinking.
            </P>
            <P
              color="#333333"
              fontSize="1.5rem"
              fontWeight="300"
              textAlign="left"
              lineHeight="160%"
              paddingTop="1rem"
            >
              Grooming talents with the product management skill set to build
              thriving products. Enoverlab is building product managers who will
              innovate products to deliver increasing value to users and drive
              business growth for organisations. Our mission is to groom talents
              with the skill set to build products that will thrive into the
              future.
            </P>
            <P
              color="#333333"
              fontSize="1.5rem"
              fontWeight="300"
              textAlign="left"
              lineHeight="160%"
              paddingTop="1rem"
            >
              Our Mission is to help you get started on the career you want.
              Whether your seeking extra education, or want to transition to a
              career in tech, We will give you the skills and insight to achieve
              the success you desire.
            </P>
          </div>
        </div>

        <div className="about-text-container">
          <div className="about-text-left">
            <H1 textAlign="left" fontSize="4rem" fontWeight="300" mobileFontSize="1.5rem">
              Our core Values
            </H1>
           <div className="sub-head">
           <H2
              textAlign="left"
              fontSize="3rem"
              color="#4B4B4B"
              fontWeight="500"
              paddingBottom="1rem"
              mobileFontSize="2rem"
            >
              Human focused <br/> Impact driven education <br/> Making the world a better
              place
            </H2>
           </div>
            {/* <div className="button-container">
              <SecondaryButton to="/programs" buttText="Learn More" />
            </div> */}
          </div>
          <div className="about-text-right">
            <P
              color="#333333"
              fontSize="1.5rem"
              fontWeight="500"
              textAlign="left"
              lineHeight="160%"
              paddingTop="1rem"
            >
             1) Human focused
            </P>
            <P
              color="#333333"
              fontSize="1.5rem"
              fontWeight="300"
              textAlign="left"
              lineHeight="160%"
              paddingTop="1rem"
            >
              We are human first before any other thing. We are particularly
              focused on the impact of everything we do on every person
              associated with our brand; not limited to our customers,
              community, staff and partners.
            </P>
            <P
              color="#333333"
              fontSize="1.5rem"
              fontWeight="500"
              textAlign="left"
              lineHeight="160%"
              paddingTop="1rem"
            >
             2) Impact driven education
            </P>
            <P
              color="#333333"
              fontSize="1.5rem"
              fontWeight="300"
              textAlign="left"
              lineHeight="160%"
              paddingTop="1rem"
            >
              Grooming talents with the product management skill set to build
              thriving products. Enoverlab is building product managers who will
              innovate products to deliver increasing value to users and drive
              business growth for organisations. Our mission is to groom talents
              with the skill set to build products that will thrive into the
              future.
            </P>

            <P
              color="#333333"
              fontSize="1.5rem"
              fontWeight="500"
              textAlign="left"
              lineHeight="160%"
              paddingTop="1rem"
            >
             3) Making the world a better place
            </P>
            <P
              color="#333333"
              fontSize="1.5rem"
              fontWeight="300"
              textAlign="left"
              lineHeight="160%"
              paddingTop="1rem"
            >
              Our Mission is to help you get started on the career you want.
              Whether your seeking extra education, or want to transition to a
              career in tech, We will give you the skills and insight to achieve
              the success you desire.
            </P>
          </div>
        </div>
      </div>
    </StyledAboutContent>
  );
};

export default AboutContent;

const StyledAboutContent = styled.div`
  background-color: #FFFDF7;
  .about-content {
    .image-container {
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .about-text-container {
      display: flex;
      justify-content: space-between;
      margin: 7.1875rem 0;
      padding: 0 5%;

      @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 3.5rem;
      }

      .about-text-left {
        width: 45%;
        @media (max-width: 768px) {
          width: 100%;
        }
        .button-container {
          width: 35%;

          @media (max-width: 768px) {
            width: 40%;
          }
        }
        .sub-head{
          display: block;
          @media (max-width: 768px) {
            display: none;
          }
        }
      }
      .about-text-right {
        width: 45%;
        @media (max-width: 768px) {
          width: 100%;
        }
      }
    }
  }
`;
