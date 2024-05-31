import React from 'react'
import { H1, H3, H4 } from '../../Utils/styled/Typograpyhy'
import { SecondaryButton } from '../../Utils/styled/Buttons'
import bergerCity from "../../assets/icon/abujaCenter.png"
import styled from 'styled-components'
import location from "../../assets/icon/location.svg"
import direction from "../../assets/icon/direction.png"

const AbujaHero = () => {
  return (
    <StyledAbujaHero>
        <section className='leftContainer'>
            <div className='topTool'>
                <H4>Hello</H4>
            </div>
            <div className='direction'>
                <H1 mdfs="clamp(4.5rem,3.703vw,5.8rem)" fs="clamp(2.7rem,7vw,4rem)">
                    Learn Product <br /> Management onsite <br /> in Abuja
                </H1>
                
                    <img src={direction} alt="" />
                
            </div>
            <H3 mdfs="clamp(1.6rem,1.39vw,2rem)" fs="clamp(1.3rem,3.3vw,2rem)">
            Enjoy the richer, deeper experiences that comes with <br /> learning in-person at our incredible Abuja centre
            </H3>
            <SecondaryButton Text="Enroll Now"/>
        </section>
        <section className='rightContainer'>
            <div>
            <img src={bergerCity} alt=""  className='kenyaCity'/>
            <div className='locale'>
                <img src={location} alt="kenya City"/>
                <H4>Wuse, Abuja </H4>
            </div>
            </div>
        </section>
      
    </StyledAbujaHero>
  )
}

export default AbujaHero

const StyledAbujaHero = styled.div`
padding: 1.9rem 2.4rem;
display: flex;
flex-direction: column;
gap: 6rem;
h1{
    color: var(--Title-Text);
    margin-top: 3rem;
    margin-bottom: 1.6rem;
}
h3{
    font-weight:400;
    margin-bottom: 4rem;
    color: var(--Body-Text);
}
h4{
    font-size: 1.4rem;
}
.topTool{
    display: flex;
    align-items: center;
    padding: 0.6rem 0.8rem;
    width: fit-content;
    gap: 0.5rem;
    border-radius: 16px;
    background: rgba(0, 78, 255, 0.44);
    img{
        mix-blend-mode: inherit;
        /* background-blend-mode: lighten; */
    }
    
}
.direction{
        display : flex;
        align-items: center;
        gap: 1rem;
        img{
        width: 4rem;
        }

    }
.rightContainer{
    width: fit-content;
    position: relative;
}
.kenyaCity{
    box-shadow: 15px -15px 0px 0px rgba(0,70,255,0.18);
}
.locale{
    position: absolute;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.32);
    backdrop-filter: blur(8px);
    bottom: 10px;
    left: 10px;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    padding: 1.2rem 2.8rem;
}
@media (min-width: 1024px) {
    padding: 6.4rem 9.6rem 0 9.6rem;
    flex-direction: row;
    justify-content: space-between;
    h1{
    margin-top: 4rem;
    }
    .topTool{
        padding: 1.2rem 1.8rem;
        border-radius: 24px;
    }
    .direction{
        display : flex;
        align-items: center;
        gap: 2rem;
        img{
        width: 6.4rem;
        }
    }
    .leftContainer{
        padding-top: 1.6rem;
    }
    .kenyaCity{
        max-width: 30.06vw;
        box-shadow: 15px -15px 0px 0px rgba(0,70,255,0.18);
    }
    .locale{
        padding: 1.2rem 2.8rem;
    }
}
`
