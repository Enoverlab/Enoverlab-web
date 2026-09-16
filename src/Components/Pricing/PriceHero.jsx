import React from "react";
import styled from "styled-components";
import { H1, H4 } from "../../Utils/styled/Typograpyhy";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
// import BookCard from "../Resources/BookCard";
// import Timer from "./Timer";
// import abc from "../../assets/resources/abc.jpg";
// import CertiMarquee from "../HomeComponents/CertiMarquee";
import * as data from "../../constants/index";
import { Flex } from "../HomeComponents/ProductSection";
import AlumniEarnings from "./AlumniEarnings";
import AlumniHallOfFame from "./AlumniHallOfFame";
const PriceHero = () => {
  return (
    <StyledPriceHero>
      <div className="price-hero-container">
        <div className="left-container">
          <section className="textContainer">
            {/* <H1
            color="#131313"
            textAlign="left"
            mdfs="4rem"
            fs="6vw"
            mdlh="5.8rem"
            lh="3.3rem"
            pb="1rem"
          >
            Learn Product Management Skills in the next 3 months 
          </H1> */}
            <H1
              color="#131313"
              textAlign="left"
              mdfs="3.5rem"
              fs="5.3vw"
              mdlh="5.9rem"
              lh="3rem"
              pb="1rem"
            >
              In 2026, over 60 Alumni's have landed Product Manager jobs
            </H1>
            <H4
              color="var(--Body-Text)"
              mdlh="3rem"
              lh="2.5rem"
              fs="1.8rem"
              mdfs="2.3rem"
              mdwidth="85%"
            >
              In 2025, over 120 Alumni's landed Product Manager jobs
            </H4>
            {/* <H4
             color="var(--Body-Text)"
             mdlh="3rem"
             lh="2.5rem"
             fs="1.8rem"
             mdfs="2.3rem"
             mdwidth="85%"
           >
             This can also be you if you dedicate yourself to our learning
             experience and put in the work.
           </H4> */}
          </section>
        </div>
      </div>
      <AlumniEarnings />
      <AlumniHallOfFame />
      <StyledSwiper>
        <H4 color="rgba(75, 75, 75, 0.89)" mdfs="2.4rem" fw="500">
          Physical Locations
        </H4>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          autoplay={{
            delay: 5000,
          }}
        >
          <SwiperSlide>
            <Flex mdgap="1.4vw" gap="7.7px">
              {data.programLocale1.map((image, idx) => (
                <img src={image} key={`set0ne${idx}`} alt="Lekki" />
              ))}
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex mdgap="1.25vw" gap="7.7px">
              {data.programLocale2.map((image, idx) => (
                <img src={image} key={`set0${idx}`} alt="Lekki" />
              ))}
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex mdgap="1.25vw" gap="7.7px">
              {data.programLocale3.map((image, idx) => (
                <img src={image} key={`set1${idx}`} alt="Lekki" />
              ))}
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex mdgap="1.25vw" gap="7.7px">
              {data.programLocale4.map((image, idx) => (
                <img src={image} key={`set2${idx}`} alt="Lekki" />
              ))}
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex mdgap="1.25vw" gap="7.7px">
              {data.programLocale5.map((image, idx) => (
                <img src={image} key={`set3${idx}`} alt="Lekki" />
              ))}
            </Flex>
          </SwiperSlide>
        </Swiper>
      </StyledSwiper>
    </StyledPriceHero>
  );
};

export default PriceHero;

const StyledSwiper = styled.div`
  h4 {
    // display: none;
    padding-bottom: 3.2rem;
    padding-left: 1.2rem;
  }
  padding: 3.2rem 0;
  img {
    width: 23.7vw;
  }
  @media (min-width: 1024px) {
    padding: 5.4rem 9.6rem;
    h4 {
      display: block;
    }
    img {
      width: 20.63vw;
    }
  }
`;

const StyledPriceHero = styled.div`
  position: relative;
  /* margin-bottom: 10%; */
  background-color: #fffdf7;
  .price-hero-container {
    padding: 0 9.6rem;
    padding-top: 8.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
      padding: 0;
      padding-top: 3.8rem;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      row-gap: 3rem;
    }

    .left-container {
      width: 100%;
      max-width: 72rem;
      .textContainer {
        br {
          display: none;
        }
        h4 {
          margin-top: 1rem;
        }
      }
      @media (max-width: 768px) {
        width: 100%;
        .textContainer {
          padding: 0 2.4rem 0 2.4rem;
          padding-bottom: 3.9rem;
          br {
            display: block;
          }
        }
      }
    }
  }
`;
