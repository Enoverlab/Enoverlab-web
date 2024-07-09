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
        About  The Program
        </H1>
        <P>
        Enoverlab, a product management training institute accredited by the American Council of Training and Development (ACTD), and EliteDIgest, a career coaching company based in Europe are partnering together to bring an wholistic product management program that will help Africans in diaspora take their life and career to the next level in a new country.{" "}
        </P>
        {showMore ? '' : <span onClick={toggleMore} className="show-more">Show More...</span>
        }
        {
            showMore ? (<>
                <P>
        This carefully curated product management program has been designed to help Africans living in other countries learn product management skills in-depthly, go through a remote open-source internship to get work experience, receive an intensive career coaching till they they land an international product manager role.
        </P>
        <P>
        The program will run for 18 weeks, which would include training, mentorship, internship, and career coaching services to help you take your life in a new country to the next level.
        </P>
        <P>
        Go through the details of the program below
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