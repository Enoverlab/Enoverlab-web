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
        <header>Explore Our Advanced Programs</header>
      <Swiper
      modules={[Pagination,Autoplay]}
      breakpoints={
        {
            320 : {
                slidesPerView : 1,
            },
            640:{
                slidesPerView : 1.5,
            },
            1024: {
                slidesPerView : 2.3,
                spaceBetween: 25,
            },
            1440 : {
              slidesPerView : 2.5,
                spaceBetween: 15,
            }
        }
      }
      pagination = {
        {
          el : '.swiperPagination',
          clickable : true
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
                  linkText={pg.linkText}
                />
        </SwiperSlide>)}
        {advancedPrograms.filter((x,idx)=>idx > 1).map(pg => <SwiperSlide>
            <Card
                  key={pg.headText}
                  img={pg.img}
                  headText={pg.headText}
                  subText={pg.subText}
                  link={pg.link}
                  linkText={pg.linkText}
                />
        </SwiperSlide>)}
        <div className='swiperPagination'>

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
  .swiperPagination{
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