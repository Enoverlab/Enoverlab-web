import React from 'react'
import {H4, P} from '../../Utils/styled/Typograpyhy'
import Slider from 'react-slick'
import styled from 'styled-components'
import PricingTestimonialCard from './PricingTestimonialCard'


const vidSrcData = [
    {
        vidSrc: "https://www.youtube.com/embed/6qK8W_yUEP8",
        flag: "🇳🇬",
        name: "Jennifer",
        country: "Nigeria"
    },
    {
        vidSrc: "https://www.youtube.com/embed/GUkZoWrHtRU",
        flag: "🇬🇧",
        name: "Adeola",
        country: "United Kingdom"
    },
    {
        vidSrc: "https://www.youtube.com/embed/cnERxJ-kJ_I",
        flag: "🇳🇬",
        name: "Olatunji",
        country: "Nigeria"
    }
   
]

const Testimonies = () => {
    const slider = React.useRef(null)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
       
    }
  return (
            <StyledTestimonies>
                <div className="testimonies-container">
                    <div className="header">
                    <H4 fs="5.60vw" mdfs="2.38vw" fw={700} color="#181818" lh="normal">
                    Students' Projects
                    </H4>
                        <P color="#363636" fs="3.27vw" mdfs="1.322vw" fw={300}>
                        Listen to some of our trained product managers showcase their skills, you can also achieve such feat.
                        </P>
                    </div>
                    <div className="testimonies-flex">
                     {
                            vidSrcData.map((vid, index)  => {
                                return(
                                    <PricingTestimonialCard key={vid.vidSrc} vidSrc={vid.vidSrc} flag={vid.flag} country={vid.country} name={vid.name}/>
                                )
                            })
                     }
                    </div>
                        <div className="testimonial-slider">
                        <Slider {...settings} ref={slider}>
                        {
                            vidSrcData.map((vid, index) => {
                                return(
                                    <PricingTestimonialCard key={vid.vidSrc} vidSrc={vid.vidSrc} flag={vid.flag} country={vid.country} name={vid.name} />
                                )
                            })
                     }
                 
                        </Slider>
                    </div>
                </div>
            </StyledTestimonies>    
  )
}

export default Testimonies

export const StyledTestimonies = styled.div`
   
    .testimonies-container{
        position: relative;
        padding: 0 2rem 6.4rem 2rem;
        @media (min-width: 1024px){
            padding: 4rem 9.6rem 16rem 9.6rem;
        }
        
        .header{
            margin-bottom: 2rem;
            h4{
                padding-bottom: 1.6rem;
            }
            @media (min-width: 1024px){
                margin-bottom: 3.1rem;
                display: flex;
                justify-content: space-between;
                h4{
                padding-bottom: 0rem;
            }
                p{
                    width: 42%;
                }
            }
        }
        .testimonies-flex{
            display: flex;
            justify-content: space-between;
            margin-top: 2rem;
            gap: 2.7rem;

            @media (max-width: 768px){
                display: none;
            }
        }

        .testimonial-slider{
            display: none;

            @media (max-width: 768px){
                display: block;
            }
            .slide-arrow-container{
                display: flex;
                position: absolute;
                top: 2%;
                right: 5%;
            }
        }

        .slick-slider{
            .slick-dots{
                bottom: -2rem;
                
                    li{
                        button{
                          
                            /* font-size: 6rem; */
                            /* width: 40px;
                            height: 40px; */
                        }
                    }
                
            }
        }
      
    }
`