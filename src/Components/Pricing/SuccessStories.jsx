import React, {useRef} from 'react'
import styled from 'styled-components'
import { theme } from '../../Utils/Theme'
import {P, H4} from '../../Utils/Typograpyhy'
import SuccessCard from './SuccessCard'
import avatar1 from '../../assets/successImage1.png'
import avatar2 from '../../assets/successImage2.png'
import avatar3 from '../../assets/successImage3.png'
import avatar4 from '../../assets/successImage4.png'
import avatar5 from '../../assets/successImage5.png'
import avatar6 from '../../assets/successImage6.png'
import Slider from 'react-slick'


const SuccessData = [
    {
        avatar: avatar1,
        name: "Raphiu Silas",
        role: "Product Engineer",
        notes: "enoverlab is an ideal school for anybody who wants to learn product management. Their syllabus is profound and their mentors are aweome. I got a job after my training Thank you!",
        flag: "🇳🇬"
    },
    {
        avatar: avatar2,
        name: "Kofe Anan",
        role: "Ceo Afrofusion",
        notes: "enoverlab  is a super encouraging, friendly group of Product Managers  at all stages of their career. There is always  something to learn from everyone. which is super awesome",
        flag: "🇬🇭"
    },
    {
        avatar: avatar3,
        name: "Sandra Tabansi",
        role: "Ceo Fruittylife",
        notes: "enoverlab  is a an awesome group of productmanagers who  are  striving to give out their best in their careers",
        flag: "🇨🇦"
    },
    {
        avatar: avatar4,
        name: "Samuel Adekoya",
        role: "Bank Manager",
        notes: "The product management course at enoverlab is very detailed and each class was an   interesting experience for me. Coming from a field that is not tech related. I was able to easily understand the role of a product manager.", 
        flag: "🇺🇸"
    },
    {
        avatar: avatar5,
        name: "Joy Alem",
        role: "Student",
        notes: "I like how structured and practical the classes have been.I have been able to get grounded knowledge on product management",
        flag: "🇳🇬"
    },
    {
        avatar: avatar6,
        name: "Tommy Rowland",
        role: "Pilot",
        notes: "“Looking to get the best value for your money then enoverlab is the best place to begin, dontoverthink it just got for it",
        flag: "🇬🇧"
    }
]

const SuccessStories = () => {
    const slider = useRef(null)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        rows: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        arrows: false,
    }

  return (
    <StyledSuccessStories>
        <div className="success-stories-container">
            <div className="text-head">
            <P textAlign="left" color={theme.color.dark}>
            Reviews and Feedback
            </P>

            <H4 fontSize="2.25rem" mobileFontSize="1.875rem" textAlign="left" fontWeight={500} color={theme.color.dark}>
            Hear what people like you have to say 
about their experience with Enoverlab
            </H4>

            {/* <P textAlign="left" color={theme.color.dark}>
            Look at what our community of PMs are sharing online
            </P> */}
            </div>

            <div className="success-stories-cards">
                {
                    SuccessData.map((data, index) => {
                        return <SuccessCard key={index} {...data} />
                    })
                }
            </div>

            <div className="success-stories-slider">
                <Slider {...settings}>
                 
                        <SuccessCard {...SuccessData[0]} />
                        <SuccessCard {...SuccessData[1]} /> 
                        <SuccessCard {...SuccessData[2]} />
                        <SuccessCard {...SuccessData[3]} />
                        <SuccessCard {...SuccessData[4]} />
                        <SuccessCard {...SuccessData[5]} />
                  
                </Slider>
            </div>
        </div>
    </StyledSuccessStories>
  )
}

export default SuccessStories

const StyledSuccessStories = styled.div`
    background-color: ${theme.color.quaternary};
  
    .success-stories-container{
        padding: 5% 5%;
    
        .text-head{
            margin-bottom: 3rem;
            max-width: 55%;

            @media(max-width: 768px){
                max-width: 100%;
            }
        }
        .success-stories-cards{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            column-gap: 1.25rem;
            row-gap: 1.25rem;
            margin-top: 2.5rem;
            @media(max-width: 768px){
                grid-template-columns: repeat(1, 1fr);
                display: none;
            }
        }

        .success-stories-slider{
            display: none;
            @media(max-width: 768px){
                display: block;
                /* padding: 5% 5% 5% 0%; */
            }
        }   
    }
`