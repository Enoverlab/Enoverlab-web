import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";
import { advancedPrograms } from "../../constants";
import { Card } from "../HomeComponents/ProductSection";
import styled from "styled-components";
const Explore = () => {
  return (
    <StyledExplore>
        <header>Explore Our Advanced Programs</header>
      <Swiper
      modules={[Autoplay]}
      autoplay
      breakpoints={
        {
            320 : {
                slidesPerView : 1,
                autoplay : {
                    delay : 3000,
                }
            },
            640:{
                slidesPerView : 1.5,
                autoplay : {
                    delay : 5000
                }
            },
            1024: {
                slidesPerView : 2.5,
                spaceBetween: 15,
                autoplay : {
                    delay : 5000
                }
            },
            1440 : {
              slidesPerView : 2.5,
                spaceBetween: 10,
                autoplay : {
                    delay : 5000
                }
            }
        }
      }
      >
        {advancedPrograms.filter((x,idx)=>idx < 2).map(pg => <SwiperSlide>
            <Card
                  key={pg.headText}
                  img={pg.img}
                  headText={pg.headText}
                  subText={pg.subText}
                  link={pg.link}
                  
                />
        </SwiperSlide>)}
        {advancedPrograms.filter((x,idx)=>idx > 1).map(pg => <SwiperSlide>
            <Card
                  key={pg.headText}
                  img={pg.img}
                  headText={pg.headText}
                  subText={pg.subText}
                  link={pg.link}
                />
        </SwiperSlide>)}
      </Swiper>
    </StyledExplore>
  )
}

export default Explore

const StyledExplore = styled.div`
  header{
    color: #010140;
    font-size: 24px;
    font-weight: 700;
    padding-bottom: 10px;
  }
  padding: 4rem 2rem 2rem 2rem;
  padding-bottom: 64px;
  @media (min-width: 1024px) {
    header{
      font-size: 32px;
      padding-bottom: 10px;
    }
    padding: 0 9.6rem;
    padding-bottom: 104px;
  }
`