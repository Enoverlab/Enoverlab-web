import React, {useState} from 'react'
import { H1, P } from "../../Utils/styled/Typograpyhy";
import LogoImg from '../../assets/diaspora/enovLogoBg.png';
import styled from "styled-components";
const AboutProg = () => {
    const [showMore, setShowMore] = useState(false)

    const toggleMore = () => {
        setShowMore(!showMore)
    }

  return (
    <StyledAboutProg >
        <div className={"bg-img"} alt="logo" >
            <img src={LogoImg} alt="" />
        </div>
        <H1 fontSizee="2.8125rem" id="about">
        About  The Program
        </H1>
        <P>
        Enoverlab, a product management training institute accredited by the American Council of Training and Development (ACTD), and EliteDIgest, a career coaching company based in Europe are partnering together to bring an wholistic product management program that will help Africans in diaspora take their life and career to the next level in a new country.{" "}{
            showMore === false ? <span onClick={toggleMore} className="show-more">Show More...</span> : null
        }
        </P>
        {
            showMore === true ? (
                <>    
        <P>
        This carefully curated product management program has been designed to help Africans living in other countries learn product management skills in-depthly, go through a remote open-source internship to get work experience, receive an intensive career coaching till they they land an international product manager role.
        </P>
        <P>
        The program will run for 18 weeks, which would include training, mentorship, internship, and career coaching services to help you take your life in a new country to the next level.
        </P>
        <P>
        Go through the details of the program below
        </P>
                </>
            ) : null
        }
        </StyledAboutProg>
  )
}

export default AboutProg

const StyledAboutProg = styled.div`
    padding: 4.875rem 20% 7.125rem 20%;
    background-color: #BAEAFA21;
    position: relative;
    z-index: 100;
    overflow: hidden;
    .bg-img{
        position: absolute;
        transform: translate(40%, -10%);
        width: 50%;
        z-index: 2;
        @media (max-width: 768px){
            width: 90%;
            transform: translate(0, 0);
        }
        img{
            width: 50%;

            @media(max-width: 768px){
                width: 120%;
            }
        }
    }
    @media (max-width: 768px){
        padding: 3rem 5% 3rem 5%;
    }
    H1{
        color: #121212;
        z-index: 100;
        @media (max-width: 768px){
            font-size: 1.5rem;
        }
    }
    P{
        z-index: 100;
        margin: 1rem 0;
        text-align: left;
        color: #121212;
        font-size: 1.125rem;
        line-height: 1.9rem;
        @media (max-width: 768px){
            font-size: 1rem;
            lin-height: 1.8rem;

        }
    }
    .show-more{
        z-index: 100;
        color: blue;
        cursor: pointer;
        font-weight: 600;
        font-size: 1.2rem;
        &:hover{
            color: #00A343;
        }
        @media (max-width: 768px){
            font-size: 1rem;
        }
    }
`