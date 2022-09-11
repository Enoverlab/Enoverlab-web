import React, {useRef} from 'react'
import styled from 'styled-components'
import {theme} from '../../Utils/Theme'
import { H3, P } from '../../Utils/Typograpyhy'
import Slider from 'react-slick'
import SessionsCard from './SessionsCard'
import arrowLeft from '../../assets/slideArrowLeft.png'
import arrowRight from '../../assets/slideArrowBlue.png'
import SessionImage1 from '../../assets/SessionImages/SessionImage1.png'
import SessionImage2 from '../../assets/SessionImages/SessionImage2.png'
import SessionImage3 from '../../assets/SessionImages/SessionImage3.png'
import SessionImage4 from '../../assets/SessionImages/SessionImage4.png'
import SessionImage5 from '../../assets/SessionImages/SessionImage5.png'
import SessionImage6 from '../../assets/SessionImages/SessionImage6.png'
import SessionImage7 from '../../assets/SessionImages/SessionImage7.png'
import SessionImage8 from '../../assets/SessionImages/SessionImage8.png'
import SessionImage9 from '../../assets/SessionImages/SessionImage9.png'
import SessionImage10 from '../../assets/SessionImages/SessionImage10.png'
import SessionImage11 from '../../assets/SessionImages/SessionImage11.png'
import SessionImage12 from '../../assets/SessionImages/SessionImage12.png'

    const Sessions = () => {
        const slider = useRef(null)
    const Settings = {
        dots: false,
        speed: 500,
        slidesToShow: 2,
        rows: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    rows: 2,
                    dots: false,
                    arrows: false,
                    infinite: true,
                }
            }
        ]
    }
  return (
    <StyledSession>
        <div className="session-contaner">
            <div className="session-text-container">
                <P color={theme.color.dark} textAlign="center"  fontSize={"1rem"} fontWeight={300}>
                    Learn from the best
                </P>
                <H3 color={theme.color.dark} fontSize={"1.5rem"} textAlign="center" fontWeight={500}>
                Our Product Heroes
                </H3>
                <P color={theme.color.dark} textAlign="center"  fontSize={"1rem"} fontWeight={300}>
                The amazing product managers from tech companies all over the world who have been part of our product sessions
                </P>
            </div>


            <div className="SessionGrid">
                <div className="session-column column1">
                <SessionsCard bgUrl={SessionImage1} guestName="Bola Afuye" guestJob="Head,TPay Mobile" />
                <SessionsCard bgUrl={SessionImage2} guestName="James Amattey" guestJob="Product Manager, Megabit" />
                <SessionsCard bgUrl={SessionImage3} guestName="Moshe Mikanovsky" guestJob="Product Manager, RiskThing.ai" />
                </div>

                <div className="session-column column2">
                <SessionsCard bgUrl={SessionImage4} guestName="Oluwatayo Winkunle" guestJob="Snr  Product Manager, Vendease" />
                <SessionsCard bgUrl={SessionImage5} guestName="Obiajulu Anayo" guestJob="Chief Product Officer, Roots" />
                <SessionsCard bgUrl={SessionImage6} guestName="Wale Ajiboye" guestJob="Scrum Master, Inter-Bank Settlement" />
                </div>

                <div className="session-column column3">
                <SessionsCard bgUrl={SessionImage7} guestName="Evelyn EBO" guestJob="" />
                <SessionsCard bgUrl={SessionImage8} guestName="Bridget Iyere" guestJob="Product owner, Elimu" />
                <SessionsCard bgUrl={SessionImage9} guestName="Tomisin Agbaje" guestJob="Product Manager" />
                </div>

                <div className="session-column column4">
                <SessionsCard bgUrl={SessionImage10} guestName="Favour Olusoji" guestJob="Product owner, Takeaway.com" />
                <SessionsCard bgUrl={SessionImage11} guestName="Favour Olusoji" guestJob="Product Manager, SeamlessHR" />
                <SessionsCard bgUrl={SessionImage12} guestName="Olabanji Ewenla" guestJob="Founder, enoverlab" />
                </div>
            </div>

        <div className='session-slider-container'>
        <Slider {...Settings} ref={slider}>
       
                <SessionsCard bgUrl={SessionImage1} guestName="Bola Afuye" guestJob="Head,TPay Mobile" />
                <SessionsCard bgUrl={SessionImage2} guestName="James Amattey" guestJob="Product Manager, Megabit" />
                <SessionsCard bgUrl={SessionImage3} guestName="Moshe Mikanovsky" guestJob="Product Manager, RiskThing.ai" />
                <SessionsCard bgUrl={SessionImage4} guestName="Oluwatayo Winkunle" guestJob="Snr  Product Manager, Vendease" />
                <SessionsCard bgUrl={SessionImage5} guestName="Obiajulu Anayo" guestJob="Chief Product Officer, Roots" />
                <SessionsCard bgUrl={SessionImage6} guestName="Wale Ajiboye" guestJob="Scrum Master, Inter-Bank Settlement" />
                <SessionsCard bgUrl={SessionImage7} guestName="Evelyn EBO" guestJob="" />
                <SessionsCard bgUrl={SessionImage8} guestName="Bridget Iyere" guestJob="Product owner, Elimu" />
                <SessionsCard bgUrl={SessionImage9} guestName="Tomisin Agbaje" guestJob="Product Manager" />
                <SessionsCard bgUrl={SessionImage10} guestName="Favour Olusoji" guestJob="Product owner, Takeaway.com" />
                <SessionsCard bgUrl={SessionImage11} guestName="Favour Olusoji" guestJob="Product Manager, SeamlessHR" />
                <SessionsCard bgUrl={SessionImage12} guestName="Olabanji Ewenla" guestJob="Founder, enoverlab" />
        

        <div className="session-grid">

        </div>

        </Slider>
        <div className="slide-container">
           <div className="slide-arrow">
                <img src={arrowLeft} alt="arrow" className="arrow" onClick={()=> slider?.current?.slickPrev()} />
                <img src={arrowRight} alt="arrow" className="arrow" onClick={()=> slider?.current?.slickNext()} />
            </div>
           </div>
       </div>
        
        
        </div>
   
    </StyledSession>
  )
}

export default Sessions

const StyledSession = styled.div`
    padding: 5% 2% 5% 5%;
    height: 160vh;
    @media (max-width: 768px) {
        padding: 5% 2% 5% 5%;
        max-height: 60vh;
    }
    background-color: ${theme.color.quaternary};
    .session-contaner{
        position: relative;

        .session-text-container{
            @media (max-width: 768px) {
               P{
                text-align: left;
                font-size: 0.8rem;
               }
               H3{
                text-align: left;
               }
            }
        }
    }
    .session-slider-container{
        padding: 2rem 0rem 2rem 0rem;
        display: none;
        @media (max-width: 768px) {
            display: block;
        }
    }
    .slide-container{
        position: absolute;
        top: 3rem;
        right: 6rem;
        @media(max-width: 768px){
        top: 0.8rem;
        right: 0.8rem;
        }
        .slide-arrow{
            display: flex;
            column-gap: 1rem;
        }
    }

    .SessionGrid{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        @media (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(12, 1fr);
            display: none;
        }

        .session-column{
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .column1{
      transform: translate(0px, 5%);

      @media(max-width: 768px){
        transform: translate(0px, 0px);
      }
    }

    .column2{
      transform: translate(0px, 10%);

      @media(max-width: 768px){
        transform: translate(0px, 0px);
      }
    }

    .column3{
      transform: translate(0px, 15%);

      @media(max-width: 768px){
        transform: translate(0px, 0px);
      }
    }

    .column4{
        transform: translate(0px, 20%);
        @media(max-width: 768px){
        transform: translate(0px, 0px);
        }
    }
    }

   
`