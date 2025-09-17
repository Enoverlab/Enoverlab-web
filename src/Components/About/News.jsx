import { Link } from "react-router-dom";
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react";
import { newsContent } from "../../constants";
import { Pagination,Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
const News = () => {
  return (
    <StyledNews>
        <header>
            Inside the News
        </header>
        <Swiper
        modules={[Pagination,Autoplay]}
        breakpoints={
          {
              320 : {
                  slidesPerView : 1.15,
              },
              640:{
                  slidesPerView : 2.5,
              },
              1024: {
                  slidesPerView : 2.5,
                  spaceBetween: 5,
              },
              1440 : {
                slidesPerView : 2.5,
                  spaceBetween: 5,
              }
          }
        }
        autoplay
        pagination = {
          {
            el : '.swiper_Pagination',
            clickable : true
          }
        }
        >
            {
                newsContent.map(content => <SwiperSlide>
                    <NewsCard key={content.newsImg} newsImg={content.newsImg} newsLink={content.newsLink} newsTopic={content.newsTopic} />
                </SwiperSlide>)
            }

            <div className="swiper_Pagination" style={{display:"flex", justifyContent : "center", marginTop : "30px"}}></div>
        </Swiper>
      
    </StyledNews>
  )
}

export default News

const StyledNews = styled.div`
    padding: 0rem 0rem 2.2rem 2rem;
    header{
        color: #002DA4;
        font-size: 2.4rem;
        margin-bottom: 2.7rem;
        font-weight: 700;
        line-height: 25.991px; 
    }
    @media (min-width: 1024px) {
        padding: 7.5rem 0rem 7.5rem 10rem;
        header{
            color: #002DA4;
            font-size: 4.8rem;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 7.6rem;
            line-height: 50px;
        }
    }
`

const NewsCard = ({newsImg, newsTopic, newsLink})=>{
    return(<StyledNewsCard>
        <img src={newsImg} alt="news img" />
        <h4>
            {newsTopic}
        </h4>
        <Link>
        {newsLink}
        </Link>
    </StyledNewsCard>)
}

const StyledNewsCard = styled.div`
    width: 31rem;
    height: 33.6rem;
    border-radius: 11.436px;
    padding: 5.718px 6.238px 20.924px 6.238px;
    border: 0.52px solid #C1C1C1;
    background: #FFF;
    h4{
        color: #3D3D3D;
        font-size: 1.4rem;
        margin: 1.8rem 0;
        font-weight: 700;
        line-height: 19.753px;
    }
    a{
        color: #002DA4;
        text-align: justify;
        font-size: 0.83rem;
        font-weight: 500;
        line-height: 20.793px; /* 250% */
        text-decoration-line: underline;
    }
    @media (min-width: 1024px) {
        padding: 11px 12px 42px 12px;
        height: 63rem;
        width: 35vw;
        max-width: 59.7rem;
        border-radius: 22px;
        border: 1px solid #C1C1C1;
        h4{
            color: #3D3D3D;
            margin: 2rem 0;
            font-size: 2.4rem;
            font-weight: 700;
            line-height: 3.8rem;
        }
        a{
            color: #002DA4;
            text-align: justify;
            font-size: 1.6rem;
            line-height: 30px; /* 250% */
        }
    }
`
