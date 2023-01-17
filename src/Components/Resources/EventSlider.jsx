import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import Slick from 'react-slick'
import testiImage1 from '../../assets/resources/eventThumb.png'
import testiImage2 from '../../assets/resources/eventThumbLeft.png'
import testiImage3 from '../../assets/resources/eventThumbRight.png'
import TestiCard from '../HomeComponents/TestiCard'
// import { H4, P } from '../../Utils/Typograpyhy'
// import arrowWhite from '../../assets/BlackArrow.png'
// import arrowWhiteLeft from '../../assets/BlackArrowLeft.png'
import arrowBlueLeft from '../../assets/icon/blueArrowBack.png'
import arrowBlueRight from '../../assets/icon/blueArrowFront.png'
const TestiData = [
    {
        imgLink: testiImage1,
        vidUrl: "https://youtube.com/embed/zZi9y3wIqjA"
       
    },
    {
        imgLink: testiImage2,
        vidUrl: "https://www.youtube.com/embed/XpbmkNho06I"

    },
    {
        imgLink: testiImage3,
        vidUrl: "https://www.youtube.com/embed/Cdxn1yPdz24"
    },
]


const EventSlider = () => {
   //AsNavFor
   const slideRef = useRef()

    const [slideIndex, setSlideIndex] = useState(0)
    const [slideIndex1, setSlideIndex1] = useState(1)
    const [slideIndex2, setSlideIndex2] = useState(2)
   

    const handleCarousel = (index) => {
        if(index === 0){
            setSlideIndex(0)
            setSlideIndex1(1)
            setSlideIndex2(2)
        }else if(index === 1){
            setSlideIndex(1)
            setSlideIndex1(2)
            setSlideIndex2(0)
        }else if(index === 2){
            setSlideIndex(2)
            setSlideIndex1(0)
            setSlideIndex2(1)
        }
    }

    const handleNext = (index) => {
        if(slideIndex === 0){
            setSlideIndex(1)
            setSlideIndex1(2)
            setSlideIndex2(0)
        }else if(slideIndex === 1){
            setSlideIndex(2)
            setSlideIndex1(0)
            setSlideIndex2(1)
        }else if(slideIndex === 2){
            setSlideIndex(0)
            setSlideIndex1(1)
            setSlideIndex2(2)
        }
    }

    const handlePrev = () => {
        if(slideIndex === 0){
            setSlideIndex(2)
            setSlideIndex1(0)
            setSlideIndex2(1)
        }else if(slideIndex === 1){
            setSlideIndex(0)
            setSlideIndex1(1)
            setSlideIndex2(2)
        }else if(slideIndex === 2){
            setSlideIndex(1)
            setSlideIndex1(2)
            setSlideIndex2(0)
        }
    }
    

    

    const settings = {
    
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
     
    }
    // const bottomSetting = {
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     focusOnSelect: true,
    //     arrows: false,
    //     adaptiveHeight: true,
    //     // centerMode: true,
    //     // centerPadding: "5%",
    //     // className:"center"
    // }
  return (
    <EventSliderStyled>
        <div className='top-slider-container'>
        {
            <div className="testi-desktop">
             {/* <TestiCard testImg={TestiData[slideIndex].imgLink} testName={TestiData[slideIndex].name} testRole={TestiData[slideIndex].role} showButton nameFontSize={"2rem"} nameMobileFontSize={"1.5rem"} roleFontSize="1.5rem" roleMobileFontSize={"1rem"}/> */}
             <iframe width="100%" height="100%" src={TestiData[slideIndex].vidUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        }
        <div className="testi-mobile">
        <Slick 
        ref={slideRef} {...settings}
        >
            {TestiData.map((slider, index) => (
                    <div key={index} className="vid-mobile-container">
                       {/* <TestiCard testImg={slider.imgLink} testName={slider.name} testRole={slider.role} showButton nameFontSize={"2rem"} nameMobileFontSize={"1.2rem"} roleFontSize="0.8rem" roleMobileFontSize={"1rem"}/> */}
                          <iframe width="100%" height="100%" src={slider.vidUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
            ))}
       
        </Slick>
       
        </div>
      
    </div> 

    <div className='bottom-slider-container'>
        <div className="bottom-carousel-container">
        {/* box1 */}
            <div className="slideboxInactive" onClick={() =>handleCarousel(slideIndex1)}>
                <TestiCard testImg={TestiData[slideIndex1].imgLink} />
            </div>
            {/* box2 */}
            <div className="slideboxActive" onClick={() =>handleCarousel(slideIndex)}>
                <TestiCard testImg={TestiData[slideIndex].imgLink}  />
            </div>
            {/* box3 */}
            <div className="slideboxInactive" onClick={() =>handleCarousel(slideIndex2)}>
                <TestiCard testImg={TestiData[slideIndex2].imgLink}  />
            </div>
        </div>

        <div className="slide-containers">
           <div className="slide-arrow">
                <img src={arrowBlueLeft} alt="arrow" className="arrowLeft" onClick={()=> handleNext()} />
                <img src={arrowBlueRight} alt="arrow" className="arrowRight" onClick={()=> handlePrev()} />
            </div>
        </div>
    </div>

    
    </EventSliderStyled>
    )
}

export default EventSlider

const EventSliderStyled = styled.div`
    position: relative;
    .top-slider-container{
        position: relative;
        padding: 3.25rem 15% 1.25rem 15%;
        box-sizing: border-box;
        @media (max-width: 768px){
            padding: 3.25rem 2% 1.25rem 2%;
        }
    }

    .testi-mobile{
        display: none;
        @media (max-width: 768px){
            display: block;
        }
        .slick-slider{
            .slick-dots{
                bottom: -38px;
            }
        }
        .vid-mobile-container{
            width: 100%;
            height: 20rem;
        }
    }
    .testi-desktop{
        display: block;
        height: 25rem;
        @media (max-width: 768px){
            display: none;
        }
    }
    .bottom-slider-container{
        padding: 0% 10% 0 10%;
        position: relative;
        display: flex;
        justify-content: center;
        /* width: 100vw; */
        .bottom-carousel-container{
            display: flex;
            align-items: center;
            column-gap: 1rem;
            .slideboxInactive{
                width: 14.6875rem;
                height: 17.625rem;
                transform: translateY(3rem);
            }
            .slideboxActive{
                width: 18.125rem;
                height: 13.5rem;
            }
        }


        @media(max-width: 768px) {
            display: none;
        }

        /* .slick-slider{
            .slick-list{
     
                .slick-track{
                    .slick-center{
                        .bottom-container{
                            padding: 3rem 0rem;
                            height: 17.625rem;
                            transform: scale(1.6, 1.6);
                        }
                    }
                }
            }
        } */
    }
    .bottom-container{
        /*  */
        /* display: flex;
        flex-direction: column;
        align-items: center; */
       .bottomImg-container{
        max-width: 14.6875rem;

        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
       }

        &.slick-center{
            transform: translate(20px, 100%);
            img{
                width: 120%;
                height: 120%;
            }
        }
    }

     .slide-containers{
        
        @media (max-width: 768px){
            display: block;
            bottom: -4rem;
            right: 35%;
        }
        .slide-arrow{
            display: flex;
            column-gap: 1rem;
            img{
                cursor: pointer;
                width:3.5rem;
                height: 1rem;

               
            }
            .arrowLeft{
               position: absolute;
                left: 10%;
                bottom: 50%;
               opacity: 0.5;
            }
            .arrowRight{
                position: absolute;
                right: 10%;
                bottom: 50%;
            }
            .arrowLeft, .arrowRight{
                cursor: pointer;
            }
        }
    }

    .slide-top{
        display: none;
        @media (max-width: 768px){
            display: block;
            bottom: -4rem;
            right: 35%;
        }
        .slide-arrow{
            display: flex;
            column-gap: 1rem;
            img{
                cursor: pointer;
                width:3.5rem;
                height: 1rem;
            }
            .arrowLeft{
               position: absolute;
                left: 10%;
                bottom: 0;
                opacity: 0.5;
            }
            .arrowRight{
                position: absolute;
                right: 10%;
                bottom: 0;
            }
            .arrowLeft, .arrowRight{
                cursor: pointer;
            }
        }
    }
   
`