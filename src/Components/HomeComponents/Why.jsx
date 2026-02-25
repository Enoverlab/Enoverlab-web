import React from "react";
import styled from "styled-components";
import { H4, H3 } from "../../Utils/styled/Typograpyhy";
import { theme } from "../../Utils/Theme";
import bulb from "../../assets/bulb.png";
import percent from "../../assets/percent.png";
import headphone from "../../assets/headphone.png";
import people from "../../assets/people.png";
import time from "../../assets/time.png";
import WhyCard from "./WhyCard";
import Slider from "react-slick";

const Why = () => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
    rows: 3,
  };
  return (
    <StyledWhy>
      <div className="why-container">
        <div className="why-text-container">
          <H3
            mobileFontSize="1.3rem"
            textAlign="left"
            color={theme.color.dark}
            fontWeight="500"
          >
            Why Learn at enoverlab?
          </H3>
          <H4
            lineHeight="1.875rem"
            mobileFontSize="0.75rem"
            textAlign="left"
            color={theme.color.dark}
            fontWeight="300"
          >
            <span>7</span> out of every <span>10</span> enoverlab trained PM
            gets engaged within 3 months after their training
          </H4>
          {/* <div className="button-container">
            <SecondaryButton to="/" buttText="Start Learning"/>
            </div> */}
        </div>

        <div className="why-card-container">
          <WhyCard
            title={"In-depth training and mentorship"}
            content={
              "with a structured syllabus taught by experienced product managers"
            }
            imgSrc={percent}
            bgColor="#E9F4FE"
          />
          <WhyCard
            title={"Project Based Learning"}
            content={
              "Exposure to projects to get real-life product experience "
            }
            imgSrc={bulb}
          />
          {/* <WhyCard title={"Guaranteed Internship Placement "}  content={"6 weeks Internship after the 10 weeks Advanced training program to build a live product"} imgSrc={cert} /> */}
          <WhyCard
            title={"Practical and Interactive Live Classes"}
            content={"Hands on training with real life cases and examples"}
            imgSrc={headphone}
            bgColor="#E9F4FE"
          />
          <WhyCard
            title={"Supportive Community"}
            content={
              "Access to a close knitted community of product professionals supporting each other"
            }
            imgSrc={people}
            bgColor="#E9F4FE"
          />
          <WhyCard
            title={"Flexible Payment Options"}
            content={
              "Opportunity to split the payment for your tuition fee for easy payment"
            }
            imgSrc={time}
          />
        </div>

        <div className="why-card-mobile">
          <Slider {...settings}>
            <WhyCard
              title={"In-depth training and mentorship"}
              content={
                "with a structured syllabus taught by experienced product managers"
              }
              imgSrc={percent}
              bgColor="#E9F4FE"
            />
            {/* <WhyCard title={"Guaranteed Internship Placement "}  content={"6 weeks Internship after the 10 weeks Advanced training program to build a live product"} imgSrc={cert} /> */}
            <WhyCard
              title={"Supportive Community"}
              content={
                "Access to a close knitted community of product professionals supporting each other"
              }
              imgSrc={people}
              bgColor="#E9F4FE"
            />
            <WhyCard
              title={"Project Based Learning"}
              content={
                "Exposure to projects to get real-life product experience "
              }
              imgSrc={bulb}
            />
            <WhyCard
              title={"Practical and Interactive Live Classes"}
              content={"Hands on training with real life cases and examples"}
              imgSrc={headphone}
              bgColor="#E9F4FE"
            />
            <WhyCard
              title={"Flexible Payment Options"}
              content={
                "Opportunity to split the payment for your tuition fee for easy payment"
              }
              imgSrc={time}
            />
          </Slider>
        </div>
      </div>
    </StyledWhy>
  );
};

export default Why;

const StyledWhy = styled.div`
  padding: 5% 6%;
  min-height: 100vh;

  position: relative;
  background: #f5fcff;
  @media (max-width: 768px) {
    padding: 25% 5%;
  }
  .why-text-container {
    max-width: 45%;
    @media (max-width: 768px) {
      max-width: 100%;
    }
  }
  .button-container {
    width: 30%;
    margin-top: 1.5rem;
    @media (max-width: 768px) {
      width: 50%;
    }
  }
  .why-card-container {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
    grid-gap: 3rem;
    margin-top: 5.875rem;
    @media (max-width: 768px) {
      display: none;
      grid-template-columns: repeat(auto-fit, minmax(70%, 1fr));
    }
  }
  .why-card-mobile {
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;
