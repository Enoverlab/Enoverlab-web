import React from "react";
import styled from "styled-components";
import { SuccessData } from "../../constants";
import SuccessCard from "../Pricing/SuccessCard";
import Slider from "react-slick";

const SuccessStories = ({ bgColor }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    rows: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <StyledSuccessStories id="success" bgColor={bgColor}>
      <div className="success-stories-container">
        <div className="success-stories-cards">
          {SuccessData.map((data, index) => {
            return <SuccessCard key={index} {...data} />;
          })}
        </div>

        <div className="success-stories-slider">
          <Slider {...settings} className="daler">
            <SuccessCard {...SuccessData[0]} />
            <SuccessCard {...SuccessData[1]} />
            <SuccessCard {...SuccessData[2]} />
            <SuccessCard {...SuccessData[3]} />
            <SuccessCard {...SuccessData[4]} />
            <SuccessCard {...SuccessData[5]} />
          </Slider>
        </div>
      </div>
    </StyledSuccessStories>
  );
};

export default SuccessStories;

const StyledSuccessStories = styled.div`

  .success-stories-container {
    padding: 5% 5%;
    @media (max-width: 768px) {
      padding: 5% 2.4rem 15% 2.4rem;
    }
    .text-head {
      margin-bottom: 3rem;
      max-width: 45%;

      @media (max-width: 768px) {
        max-width: 100%;
      }
    }
    .success-stories-cards {
      display: grid;
      grid-template-columns: repeat(3, auto);
      place-content: center;
      place-items: center;
      column-gap: 1.25rem;
      row-gap: 1.25rem;
      margin-top: 2.5rem;
      @media (max-width: 768px) {
        display: none;
      }
    }
    .daler{
      grid-template-columns: repeat(1, auto);
      gap: 50rem;
    }

    .success-stories-slider {
      display: none;
      @media (max-width: 768px) {
        display: block;


        /* padding: 5% 5% 5% 0%; */
      }
    }
  }
`;
