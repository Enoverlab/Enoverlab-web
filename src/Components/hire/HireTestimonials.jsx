import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import stars from "../../assets/hire/stars-rating.svg";
import { hireTestimonials } from "./hireData";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
};

const HireTestimonials = () => {
  const { heading, items } = hireTestimonials;

  const card = ({ quote, attribution }) => (
    <figure className="testi-card">
      <img src={stars} alt="5 star rating" className="stars" />
      <blockquote className="quote">{quote}</blockquote>
      <figcaption className="attr">{attribution}</figcaption>
    </figure>
  );

  return (
    <StyledTestimonials>
      <div className="hire-shell inner">
        <h2 className="section-heading">{heading}</h2>

        <div className="grid-desktop">
          {items.map((t, idx) => (
            <React.Fragment key={idx}>{card(t)}</React.Fragment>
          ))}
        </div>

        <div className="slider-mobile">
          <Slider {...sliderSettings}>
            {items.map((t, idx) => (
              <div key={idx} className="slide-pad">
                {card(t)}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </StyledTestimonials>
  );
};

export default HireTestimonials;

const StyledTestimonials = styled.section`
  font-family: "Inter", "Plus Jakarta Sans", sans-serif;
  background: #002890;
  padding: clamp(4.6rem, 9vw, 8rem) 0 clamp(5rem, 10vw, 9rem);

  .hire-shell {
    width: min(100%, 124rem);
    margin: 0 auto;
    padding: 0 clamp(1.6rem, 4vw, 10rem);
    display: flex;
    flex-direction: column;
    gap: clamp(3rem, 5vw, 4.6rem);
  }

  .section-heading {
    margin: 0;
    text-align: center;
    font-weight: 600;
    font-size: clamp(2.2rem, 2.8vw, 2.8rem);
    color: #ffffff;
  }

  .testi-card {
    margin: 0;
    background: #ffffff;
    border: 1px solid #dfdfdf;
    border-radius: 2rem;
    padding: 3rem 3.2rem;
    min-height: 29.9rem;
    display: flex;
    flex-direction: column;
    gap: 1.9rem;
    max-width: 38.7rem;
    margin-left: auto;
    margin-right: auto;

    box-sizing: border-box;
    width: 100%;
    height: 100%;
    justify-content: flex-start;

    .stars {
      width: 13.9rem;
      height: 1.9rem;
      display: block;
      object-fit: contain;
      flex-shrink: 0;
    }

    .quote {
      margin: 0;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 1.85;
      color: #3d3d3d;
    }

    .attr {
      margin: 0;
      font-style: italic;
      font-weight: 500;
      font-size: 1.4rem;
      color: #3d3d3d;
    }
  }

  .grid-desktop {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem clamp(2.4rem, 3vw, 4rem);
    justify-content: center;
    align-items: stretch;

    .testi-card {
      flex: 1 1 28rem;
    }
  }

  .slider-mobile {
    display: none;

    .slide-pad {
      padding: 0 1rem;
    }

    /* Slick dots on dark bg */
    .slick-dots li button:before {
      color: #ffffff !important;
      opacity: 0.45 !important;
    }

    .slick-dots li.slick-active button:before {
      opacity: 1 !important;
    }
  }

  @media (max-width: 960px) {
    .grid-desktop {
      display: none;
    }

    .slider-mobile {
      display: block;

      .testi-card {
        max-width: 42rem;
      }
    }

    .section-heading {
      text-align: left;
    }
  }
`;
