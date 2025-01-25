import React, {useState} from 'react'
import { H1, P } from "../../Utils/styled/Typograpyhy";
import LogoImg from '../../assets/diaspora/enovLogoBg.png';
import styled from "styled-components";
const AboutProg = () => {
    const [showMore, setShowMore] = useState(false)

    const toggleMore = () => {
        console.log('hi')
        setShowMore(!showMore)
    }

  return (
    <StyledAboutProg >
        <H1 fs="2.8rem" mdfs='4.5rem' tA='center' id="about">
        About The Program
        </H1>
        <P>
        Many Nigerians living in other countries like the UK, US, Canada, UAE, Germany, Qatar, etc, struggle with getting well paying jobs.

        This is because a lot of them are not equipped with the right skills, which will make them more valuable in the job market and business space abroad.

        This International Product Management Program has been created to help solve this problem.{" "}
        </P>
        {showMore ? '' : <span onClick={toggleMore} className="show-more">Show More...</span>
        }
        {
            showMore ? (<>
                <P>
        Regardless of your background, your qualifications, and education, this program will help you build skills that will make you valuable in the marketplace abroad.

        In the program, you will
        - Learn product management skills (one of the top tech skills in the world today).
        </P>
        <P>
        - Get one-on-one intensive career coaching to help you land a product manager job anywhere in the world in 4 months if you are ready to put in the work.

        - Be guided on how to use product management skills to build a successful business (For business driven people)
        </P>
        <P>
            Get more details about the program below
        </P>
            </>) : null
        }
        </StyledAboutProg>
  )
}

export default AboutProg

const StyledAboutProg = styled.div`
    padding: 4.875rem 20% 7.125rem 20%;
    font-family: "Plus Jakarta Sans";
    background-color: #BAEAFA21;
    background-image: url(${LogoImg});
    background-repeat: no-repeat;
    background-position: center;
    z-index: 100;
    overflow: hidden;
    @media (max-width: 768px){
        padding: 3rem 5% 3rem 5%;
    }
    H1{
        color: #333;
        z-index: 100;
        margin-bottom: 4.5rem;
        font-weight: 700;
        @media (max-width: 768px){
            H1{
                margin-bottom:3.2rem;
            }
    }
    }
    P{
        z-index: 100;
        margin-bottom: 3.2rem;
        text-align: left;
        color: #4B4B4B;
        font-size: 2.4rem;
        line-height: 3.2rem;
        font-weight:400;
        @media (max-width: 768px){
            font-size: 1.4rem;
            line-height: 2.4rem;
            margin-bottom: 2.4rem;
        }
    }
    .show-more{
        z-index: 100;
        color: blue;
        cursor: pointer;
        font-weight: 600;
        font-size: 1.8rem;
        &:hover{
            color: #00A343;
        }
        @media (max-width: 768px){
            font-size: 1.6rem;
        }
    }
`