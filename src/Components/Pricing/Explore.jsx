import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination,Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { advancedPrograms } from "../../constants";
import { Card } from "../HomeComponents/ProductSection";
import styled from "styled-components";
const Explore = () => {
  return (
    <StyledExplore>
        <header>Already a Product Manager? <br />
        </header>
        <h1>Check out Advanced Programs for you</h1>
      <Swiper
      modules={[Pagination,Autoplay]}
      breakpoints={
        {
            320 : {
                slidesPerView : 1,
            },
            640:{
                slidesPerView : 1.2,
            },
            1024: {
                slidesPerView : 2.5,
                spaceBetween: 15,
            },
            1440 : {
              slidesPerView : 2.7,
                spaceBetween: 10,
            }
        }
      }
      pagination = {
        {
          el : '.swiperPaginationss',
          clickable : true
        }
      }
      >
        {advancedPrograms.filter((x,idx)=>idx < 2).map(pg => <SwiperSlide key={pg.link}>
            <Card
                  key={pg.headText}
                  img={pg.img}
                  headText={pg.headText}
                  subText={pg.subText}
                  link={pg.link}
                  linkText={pg.linkText}
                />
        </SwiperSlide>)}
        {advancedPrograms.filter((x,idx)=>idx > 1).map(pg => <SwiperSlide key={pg.link}>
            <Card
                  key={pg.headText}
                  img={pg.img}
                  headText={pg.headText}
                  subText={pg.subText}
                  link={pg.link}
                  linkText={pg.linkText}
                />
        </SwiperSlide>)}
        <div className='swiperPaginationss'>

        </div>
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
  h1{
    font-size: 18px;
    font-weight: 600;
    padding-bottom: 10px;
  }
  .swiperPaginationss{
    display: flex;
    justify-content: center;
    margin-top: 20px;
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