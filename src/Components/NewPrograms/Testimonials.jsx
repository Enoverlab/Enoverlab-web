import React, {useRef} from 'react'
import styled from 'styled-components'
import {H3, P} from '../../Utils/Typograpyhy'
import {theme} from '../../Utils/Theme'
import topCornerStripe from '../../assets/topCornerStripes.png'
import bottomCornerStripe from '../../assets/bottomCornerStripes.png'
import Slider from 'react-slick'

const Testimonials = () => {
    const slider = useRef(null)
     const Settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        rows: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        arrows: false,
        infinite: true,
    }
  return (
    <StyledTestimonials>
        <div className="testimonials-container">
        <div className="testimonials-text-container">
            {/* <P mobileFontSize="0.6875rem" color={theme.color.light} fontSize={"1.25rem"} fontWeight={500}>Project Presentation</P>     */}
            <H3 mobileFontSize="1.5rem" color={theme.color.primary} fontWeight={500}>
            See the results of our training
            </H3>
            <P lineHeight="1.5125rem" mobileFontSize="1rem" color={theme.color.primary} fontSize={"1.25rem"} fontWeight={400}>
            Hear what our trained PMs have to say
            </P>
        </div>
            <div className="slide-container">
                <Slider ref={slider} {...Settings}>
                <iframe width="100%" height="515" src="https://www.youtube.com/embed/jXR2CYoci_4?si=RQNw6ZY0L8XLO8il" title="YouTube video player" frameborder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe width="100%" height="515" src="https://www.youtube.com/embed/CnlDAo2EHVU?si=iioex-ResHalig_y" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe width="100%" height="515" src="https://www.youtube.com/embed/iPMxwnmj7sk?si=IIoJGezZSvZXKOUI" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                </Slider>
            </div>
        </div>
     
    </StyledTestimonials>
  )
}

export default Testimonials

const StyledTestimonials = styled.div`
    padding: 0% 0% 5% 0%;
    position: relative;
    background-color: #fffdf7;
    /* background-color: ${theme.color.tertiary}; */
    z-index: 1;
    /* height: 150vh; */
    
    @media (max-width: 768px) {
        display: none;
        height: 100%;
        padding: 10% 0% 5% 0%;
    }
       
    
    .testimonials-container{
        position: relative;
        z-index: 3;

        @media (max-width: 768px) {
            margin-bottom: 3rem;
        }
      
    }

    .testimonials-text-container{
        margin-bottom: 2.9375rem;
        @media (max-width: 768px) {
            /* margin-bottom: 1.9375rem; */
            padding: 0 1.5rem;
        }
        P{
            margin-bottom: 0.5rem;
        }
        H3{
            margin-bottom: 0.2rem;
        }
    }
  
    
    .slide-container{
        padding: 0rem 15% 0 15%;
    }
  
`