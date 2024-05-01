import React from 'react'
import styled from 'styled-components'
import { H2,H3,H4 } from '../../Utils/styled/Typograpyhy';
import fastTracking from "../../assets/icon/fastTracking.svg";
import privateCoaching from "../../assets/icon/private.svg"
import { PrimaryButton } from '../../Utils/styled/Buttons';

const StandardOptions = () => {
  return (
    <StyledStandardOptions>
        <H2 tA="center">
        Other Options for Standard Program
        </H2>
        <main>
            <section>
                <div className='card'>
                    <img src={fastTracking} alt="Fast Tracking" />
                    <H3>Fast-Tracking</H3>
                </div>
                <H4>
                This is for individuals who want to complete the standard program in 5 - 10 weeks instead of 18 - 20 weeks.
                </H4>
                <div className='learnContainer'>
                 <PrimaryButton border="none" svgWidth="2.4rem" Text="Learn More"/>
                </div>
            </section>
            <section>
                <div className='card'>
                    <img src={privateCoaching} alt="private Coaching" />
                    <H3>Private Coaching</H3>
                </div>
                <H4 mdfs="">
                This is for high-level professionals who want a one-on-one coaching to get personal mentorship and support.
                </H4>
                <div className='learnContainer'>
                 <PrimaryButton border="none" svgWidth="2.4rem" Text="Learn More"/>
                </div>
            </section>

        </main>
      
    </StyledStandardOptions>
  )
}

export default StandardOptions

const StyledStandardOptions = styled.div`
   background: #E8F3FE;
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
    margin-top: 1rem;
    display: flex;
    justify-content: flex-start;
   }
   padding: 3.2rem 2.4rem;
   @media (min-width: 1024px) {
    padding: 8rem 12rem;
    margin-bottom: 9.7rem;
    main{
    flex-direction: row;
    justify-content: center;
    margin: 7.8rem 0 0 0;
    gap: clamp(8rem, 6.812vw, 10.2rem) ;
   }
   section{
    width: 50%;
    max-width: 58.4rem;
   }
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
