import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { H4 } from "../../Utils/styled/Typograpyhy";
import * as data from "../../constants/index";
import { Flex } from "../HomeComponents/ProductSection";

const LearningCentres = () => {
  return (
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
  );
};

export default LearningCentres;

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
