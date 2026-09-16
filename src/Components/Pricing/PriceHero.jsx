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
      <div className="hallCont">
        <div className="price-hero-container">
          <div className="left-container">
            <section className="textContainer">
              <H1
                color="#131313"
                textAlign="left"
                mdfs="3.4rem"
                fs="5.3vw"
                mdlh="1.7"
                lh="3.2rem"
                pb="1rem"
              >
                Welcome to the Happiest Place to Learn Product Management in the
                World<span>🥳</span>
              </H1>
              <H4
                color="var(--Body-Text)"
                mdlh="1.5"
                lh="1.3"
                fs="1.9rem"
                mdfs="2.8rem"
                mdwidth="85%"
              >
                Life is already hard<span>🥹</span>
              </H4>
              <H4
                color="var(--Body-Text)"
                mdlh="1.5"
                lh="1.3"
                fs="1.9rem"
                mdfs="2.8rem"
                mdwidth="85%"
              >
                Learning should not be hard, too<span>😂</span>
              </H4>
              <H4
                color="var(--Body-Text)"
                mdlh="1.5"
                lh="1.6"
                fs="1.9rem"
                mdfs="2.8rem"
                mdwidth="85%"
              >
                Imagine you becoming an Exceptional Product Manager while having
                fun and enjoying the process at the same time<span>🤭</span>
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
        <AlumniHallOfFame />
      </div>

      <AlumniEarnings />
      <StyledSwiper>
        <H4 color="rgba(75, 75, 75, 0.89)" mdfs="2.4rem" fw="500">
          Learning Centres
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
  .hallCont {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    /* Grid items default to min-width: auto, which lets the marquee's very wide
       content push the column past 1fr and overflow the page. */
    > * {
      min-width: 0;
    }
    @media (min-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      column-gap: 4rem;
      padding-top: 8.2rem;
      padding-bottom: 2.2rem;
    }
  }
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
    /* Top padding moves to .hallCont so both grid columns share it, and the
       right gutter goes so the marquee can run to the page edge. */
    @media (min-width: 1024px) {
      padding-top: 0;
      padding-right: 0;
    }

    .left-container {
      width: 100%;
      max-width: 72rem;
      .textContainer {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        br {
          display: none;
        }
        h1 {
          font-style: italic;
          span {
            font-style: normal;
          }
        }
        h4 {
          font-style: italic;
          margin-top: 1rem;
          span {
            font-style: normal;
          }
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
