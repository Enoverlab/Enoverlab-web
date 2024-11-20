import React, { useState, useRef } from "react";
import styled from "styled-components";
import Slick from "react-slick";
import testiImage1 from "../../assets/icon/shalom.png";
import testiImage2 from "../..//assets/icon/adebola.png";
import testiImage3 from "../../assets/icon/chinelo.png";
import testiImage4 from "../../assets/icon/chika.png"
import testiImage5 from "../../assets/icon/elizabeth.jpg"
import TestiCard from "./TestiCard";

const TestiData = [
  {
    imgLink: testiImage1,
    name: "Shalom",
    role: "Product Manager",
    vidUrl: "https://www.youtube.com/embed/jXR2CYoci_4",
  },
  {
    imgLink: testiImage2,
    name: " Adebola ",
    role: "Lead Product Manager",
    vidUrl: "https://www.youtube.com/embed/CnlDAo2EHVU",
  },
  {
    imgLink: testiImage3,
    name: "Chinelo",
    role: "Product Manager",
    vidUrl: "https://www.youtube.com/embed/iPMxwnmj7sk",
  },
  {
    imgLink: testiImage4,
    name: "Chika Ibobo",
    role: "Product Manager",
    vidUrl: "https://www.youtube.com/embed/BGUOtO0yLJM",
  },
  {
    imgLink: testiImage5,
    name: "Elizabeth",
    role: "Product Manager",
    vidUrl: "https://www.youtube.com/embed/0V6SionngKM",
  },
];

const TestiVideo = () => {
  const slideRef = useRef();
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideIndex1, setSlideIndex1] = useState(1);
  const [slideIndex2, setSlideIndex2] = useState(2);
  const [slideIndex3, setSlideIndex3] = useState(3);
  const [slideIndex4, setSlideIndex4] = useState(4);
  console.log(slideIndex3)
  console.log(slideIndex4)

  const handleCarousel = (index) => {
    if (index === 0) {
      setSlideIndex(0);
      setSlideIndex1(1);
      setSlideIndex2(2);
      setSlideIndex3(3);
      setSlideIndex4(4);
    } else if (index === 1) {
      setSlideIndex(1);
      setSlideIndex1(2);
      setSlideIndex2(0);
    } else if (index === 2) {
      setSlideIndex(2);
      setSlideIndex1(0);
      setSlideIndex2(1);
    }
  };

  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
  };
  return (
    <TestiVideoStyled>
      <div className="top-slider-container">
        {
          <div className="testi-desktop">
            <iframe
              width="100%"
              height="100%"
              src={TestiData[slideIndex].vidUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        }
        <div className="testi-mobile">
          <Slick ref={slideRef} {...settings}>
            {TestiData.map((slider, index) => (
              <div className="vid-mobile-container" key={index}>
                {/* <TestiCard testImg={slider.imgLink} testName={slider.name} testRole={slider.role} showButton nameFontSize={"2rem"} nameMobileFontSize={"1.2rem"} roleFontSize="0.8rem" roleMobileFontSize={"1rem"}/> */}
                <iframe
                  width="100%"
                  height="100%"
                  src={slider.vidUrl}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </Slick>
        </div>
      </div>

      <div className="bottom-slider-container">
        <div className="bottom-carousel-container">
          {/* box1 */}
          <div
            className="slideboxInactive"
            onClick={() => handleCarousel(slideIndex1)}
          >
            <TestiCard
              testImg={TestiData[slideIndex1].imgLink}
              testName={TestiData[slideIndex1].name}
              testRole={TestiData[slideIndex1].role}
              nameFontSize={"0.8rem"}
              nameMobileFontSize={"0.8rem"}
              roleFontSize="0.55rem"
              roleMobileFontSize={"0.55rem"}
              textAlign="left"
              filterImg
            />
          </div>
          {/* box2 */}
          <div
            className="slideboxActive"
            onClick={() => handleCarousel(slideIndex)}
          >
            <TestiCard
              testImg={TestiData[slideIndex].imgLink}
              testName={TestiData[slideIndex].name}
              testRole={TestiData[slideIndex].role}
              nameFontSize={"1rem"}
              nameMobileFontSize={"0.8rem"}
              roleFontSize="0.75rem"
              roleMobileFontSize={"0.65rem"}
              textAlign="left"
            />
          </div>
          {/* box3 */}
          <div
            className="slideboxInactive"
            onClick={() => handleCarousel(slideIndex2)}
          >
            <TestiCard
              testImg={TestiData[slideIndex2].imgLink}
              testName={TestiData[slideIndex2].name}
              testRole={TestiData[slideIndex2].role}
              nameFontSize={"0.8rem"}
              nameMobileFontSize={"0.8rem"}
              roleFontSize="0.55rem"
              roleMobileFontSize={"0.55rem"}
              textAlign="left"
              filterImg
            />
          </div>
        </div>
        {/* <div className="slide-containers">
           <div className="slide-arrow">
                <img src={arrowWhiteLeft} alt="arrow" className="arrowLeft" onClick={()=> handleNext()} />
                <img src={arrowWhite} alt="arrow" className="arrowRight" onClick={()=> handlePrev()} />
            </div>
        </div> */}
      </div>
    </TestiVideoStyled>
  );
};

export default TestiVideo;

const TestiVideoStyled = styled.div`
  position: relative;
  .top-slider-container {
    position: relative;
    padding: 3.25rem 10% 3.25rem 10%;
    box-sizing: border-box;
    @media (max-width: 768px) {
      padding: 3.25rem 5% 1.25rem 5%;
    }
  }

  .testi-mobile {
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
    .slick-slider {
      .slick-dots {
        bottom: -38px;
      }
    }
    .vid-mobile-container {
      width: 100%;
      height: 25rem;
    }
  }
  .testi-desktop {
    display: block;
    height: 53.4rem;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .bottom-slider-container {
    padding: 0% 10% 0 10%;
    position: relative;
    display: flex;
    justify-content: center;
    .bottom-carousel-container {
      display: flex;
      align-items: center;
      column-gap: 2rem;
      .slideboxInactive {
        width: 25.4rem;
        height: 16.2rem;
        cursor: pointer;
      }
      .slideboxActive {
        cursor: pointer;
        width: 25.4rem;
        height: 21.6rem;
      }
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
  .bottom-container {
    .bottomImg-container {
      max-width: 14.6875rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    &.slick-center {
      transform: translate(20px, 100%);
      img {
        width: 120%;
        height: 120%;
      }
    }
  }

  .slide-containers {
    @media (max-width: 768px) {
      display: block;
      bottom: -4rem;
      right: 35%;
    }
    .slide-arrow {
      display: flex;
      column-gap: 1rem;
      img {
        cursor: pointer;
        width: 3.5rem;
        height: 1rem;
      }
    }
  }

  .slide-top {
    display: none;
    @media (max-width: 768px) {
      display: block;
      bottom: -4rem;
      right: 35%;
    }
    .slide-arrow {
      display: flex;
      column-gap: 1rem;
      img {
        cursor: pointer;
        width: 3.5rem;
        height: 1rem;
      }
    }
  }
`;
