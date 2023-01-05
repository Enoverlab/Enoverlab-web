import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import Slick from 'react-slick'
import testiImage1 from '../../assets/TestiVideo.png'
import testiImage2 from '../..//assets/TestiVideo2.png'
import testiImage3 from '../../assets/TestiVideo3.png'
import TestiCard from './TestiCard'
import { H4, P } from '../../Utils/Typograpyhy'
import arrowWhite from '../../assets/BlackArrow.png'
import arrowWhiteLeft from '../../assets/BlackArrowLeft.png'

const TestiData = [
    {
        imgLink: testiImage1,
        name: "Shabi Loretta",
        role: "Product Manger,ModusCreate"
    },
    {
        imgLink: testiImage2,
        name: "Kemi Ademide",
        role: "Product Manger,Microsoft"
    },
    {
        imgLink: testiImage3,
        name: "Buchi Abubakre",
        role: "Product Manger,Skype"
    },
]


const TestiVideo = () => {
   //AsNavFor
   const slideRef = useRef()
    const [nav1, setNav1] = useState()
    const [nav2, setNav2] = useState()
    let slider1 = []
    let slider2 = []

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
    

    React.useEffect(() => {
        setNav1(slider1)
        setNav2(slider2)
    }, [])

    const settings = {
    
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
     
    }
    const bottomSetting = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false,
        adaptiveHeight: true,
        // centerMode: true,
        // centerPadding: "5%",
        // className:"center"
    }
  return (
    <TestiVideoStyled>
        <div className='top-slider-container'>
        {
            <div className="testi-desktop">
             <TestiCard testImg={TestiData[slideIndex].imgLink} testName={TestiData[slideIndex].name} testRole={TestiData[slideIndex].role} />
            </div>
        }
        <div className="testi-mobile">
        <Slick 
        ref={slideRef} {...settings}
        >
            {TestiData.map((slider, index) => (
                    <div key={index}>
                       <TestiCard testImg={slider.imgLink} testName={slider.name} testRole={slider.role} />
                    </div>
            ))}
       
        </Slick>
        <div className="slide-top">
           <div className="slide-arrow">
                <img src={arrowWhiteLeft} alt="arrow" className="arrowLeft" onClick={()=> slideRef?.current?.slickPrev()} />
                <img src={arrowWhite} alt="arrow" className="arrowRight" onClick={()=> slideRef?.current?.slickNext()} />
            </div>
        </div>
        </div>
      
    </div> 

    <div className='bottom-slider-container'>
        <div className="bottom-carousel-container">
        {/* box1 */}
            <div className="slideboxInactive" onClick={() =>handleCarousel(slideIndex1)}>
                <TestiCard testImg={TestiData[slideIndex1].imgLink} testName={TestiData[slideIndex1].name} testRole={TestiData[slideIndex1].role}  />
            </div>
            {/* box2 */}
            <div className="slideboxActive" onClick={() =>handleCarousel(slideIndex)}>
                <TestiCard testImg={TestiData[slideIndex].imgLink} testName={TestiData[slideIndex].name} testRole={TestiData[slideIndex].role}  />
            </div>
            {/* box3 */}
            <div className="slideboxInactive" onClick={() =>handleCarousel(slideIndex2)}>
                <TestiCard testImg={TestiData[slideIndex2].imgLink} testName={TestiData[slideIndex2].name} testRole={TestiData[slideIndex2].role}  />
            </div>
        </div>

        <div className="slide-containers">
           <div className="slide-arrow">
                <img src={arrowWhiteLeft} alt="arrow" className="arrowLeft" onClick={()=> handleNext()} />
                <img src={arrowWhite} alt="arrow" className="arrowRight" onClick={()=> handlePrev()} />
            </div>
        </div>
    </div>

    
    </TestiVideoStyled>
    )
}

export default TestiVideo

const TestiVideoStyled = styled.div`
    position: relative;
    .top-slider-container{
        position: relative;
        padding: 3.25rem 15% 1.25rem 15%;
        box-sizing: border-box;
        @media (max-width: 768px){
            padding: 3.25rem 5%;
        }
    }

    .testi-mobile{
        display: none;
        @media (max-width: 768px){
            display: block;
        }
    }
    .testi-desktop{
        display: block;
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
                left: 15%;
                bottom: 50%;
            }
            .arrowRight{
                position: absolute;
                right: 15%;
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