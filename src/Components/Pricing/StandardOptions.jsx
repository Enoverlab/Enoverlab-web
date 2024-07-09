import styled from 'styled-components'
import { H2,H3,H4 } from '../../Utils/styled/Typograpyhy';
import privateCoaching from "../../assets/icon/private.svg"
import fastTracking from "../../assets/icon/fastTracking.svg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { PrimaryButton } from '../../Utils/styled/Buttons';
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const StandardOptions = () => {
  return (
    <StyledStandardOptions>
        <header>
        <H2 tA="center" fs="5.60vw" w="75%" >
        Other Options for Standard Program
        </H2>
        </header>
        <Swiper className='swipery'
        modules={[Pagination, Autoplay]}
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
                  slidesPerView : 1.2,
                  spaceBetween: 25,
                  autoplay : {
                      delay : 5000
                  }
              },
              1024: {
                  slidesPerView : 2,
                  spaceBetween: 25,
                  autoplay : {
                      delay : 5000
                  }
              },
          }
        }
        pagination={{
          el : '.swiperPagination',
          clickable: true,
        }}
        >
          <SwiperSlide className="swiper">
          <section >
                <div className='card'>
                    <img src={fastTracking} alt="Fast track Coaching" />
                    <H3 fs="4.2vw">International Program</H3>
                </div>
                <H4 mdfs="">
                This is for Nigerians in Diaspora to learn product management skills and get a product manager job within 4 months

                </H4>
                <div className='learnContainer'>
                 <PrimaryButton border="none" svgWidth="2.4rem" Text="Learn More" to='/international'/>
                </div>
            </section>
          </SwiperSlide>
          <SwiperSlide className="swiper">
          <section >
                <div className='card'>
                    <img src={privateCoaching} alt="private Coaching" />
                    <H3 fs="4.2vw">Executive Coaching</H3>
                </div>
                <H4 mdfs="">
                This is for busy career professionals & business leaders to complete the standard program in 10 days instead of 90 days.

                </H4>
                <div className='learnContainer'>
                 <PrimaryButton border="none" svgWidth="2.4rem" Text="Learn More" to='/executive'/>
                </div>
            </section>
          </SwiperSlide>
          <div className='swiperPagination'>

          </div>
        </Swiper>
        
            
    </StyledStandardOptions>
  )
}

export default StandardOptions


const StyledStandardOptions = styled.div`
   background: #E8F3FE;
   header{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
   }
   h2,h3{
    color: var(--Title-Text);
   }
   h3{
    margin-top: 2.4rem;
   }
   h4{
    margin-top: 2.4rem;
    color: var(--Body-Text);
    font-weight: 400;
    line-height: 28px; 
   }
   main{
    margin: 2.4rem 0 0 0;
    display: flex;
    flex-direction: column;
    gap: 4.5rem;
   }
   .card{
    background-color: #BAEAFA;
    padding: 4.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   }
   .learnContainer{
    margin: 3rem 0 1.5rem 0;
    display: flex;
    justify-content: center;
   }
   .swiperPagination{
    display: flex;
    justify-content: center;
    margin-top: 20px;
   }
   padding: 3.2rem 2.4rem;
   @media (min-width: 1024px) {
    padding: 8rem 12rem;
    margin-bottom: 9.7rem;
    header{
        margin-bottom: 4rem;
    }
   /* .swiper{
    width: 50%;
    max-width: 58.4rem;
   } */
    .card{
    background-color: #BAEAFA;
    padding: 4.2rem;
    border-radius: 2.4rem;
   }
   h4{
    font-size: clamp(1.6rem,1.1904vw,1.9rem);
   }
   .learnContainer{
    justify-content: center;
   }
   }
`
