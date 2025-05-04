import React from 'react'
import { H1, H3 } from '../../Utils/styled/Typograpyhy'
import mobtechnical from "../../assets/icon/mobtechnical.png"
import desktechnical from "../../assets/icon/desktechnical.png"
import styled from 'styled-components'

const TechnicalHero = () => {
    let src = `${mobtechnical} 300w, ${desktechnical} 1512w,  `
    let sizes = `(min-width: 1024px) 1024px, 300px`
  return (
    <StyledTechnicalHero>
      <H1 tA="left"  mdlh="7.6rem" color='#1A1A1A' mdfs="clamp(4.5rem,3.703vw,5.8rem)">
      Scale your PM Career with <span>Technical</span> Product Management skills
      </H1>
      <H3 mdfs="clamp(1.6rem,1.522vw,2rem)" fs="3.9vw">Lack of technical skills is costing you more than you can imagine - it is costing you more impact, faster promotions, better job offers, and most importantly, more money</H3>
      <img src={mobtechnical} alt="Enoverlab Hero" srcSet={src} sizes={sizes} className='heroImg' />
    </StyledTechnicalHero>
  )
}

export default TechnicalHero

const StyledTechnicalHero = styled.div`
  h1{
    padding: 0 1rem;
    margin-top: 3.6rem;
    font-size: 3rem;
    br{
      display: block;
    }
  }
  h3{
    padding: 0 1rem;
    margin-top: 2.5rem;
    font-family: 'inter';
    color: var(--Body-Text);
  }
  .heroImg{
    width: 100%;
    height: 150px;
    margin: 4rem 0 0 0;
  }
  span{
    color: white;
    background: #8c8cff;
    border-radius: 15px;
    padding: 0 10px;
  }
  @media (min-width: 700px) {
    h1{
      padding: 0 1rem;
      margin-top: 5.6rem;
      font-size: 4.5rem;
    }
  }
  @media (min-width: 1024px) {
    h1{ 
      padding: 0 91px;
      margin-top: 6.4rem;
      font-size: 4.32vw;
      br#break{
        display: none;
      }
    }
    h3{
      padding: 0 91px;
      margin-top: 2rem;
    }
    span{
      border-radius: 30px;
      padding:0 30px;
    }
    .heroImg{
    width: 100%;
    height: auto;
  }
}
`
