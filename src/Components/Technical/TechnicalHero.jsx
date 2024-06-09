import React from 'react'
import { H1 } from '../../Utils/styled/Typograpyhy'
import mobtechnical from "../../assets/icon/mobtechnical.png"
import desktechnical from "../../assets/icon/desktechnical.png"
import styled from 'styled-components'

const GrowthHero = () => {
    let src = `${mobtechnical} 300w, ${desktechnical} 1512w,  `
    let sizes = `(min-width: 1024px) 1024px, 300px`
  return (
    <StyledGrowthHero>
      <H1 tA="center"  mdlh="8.6rem" color='#1A1A1A'>
      Take your product manager <span>career</span> to the<br id='break' /><span>next level</span></H1>
      <img src={mobtechnical} alt="Enoverlab Hero" srcSet={src} sizes={sizes} className='heroImg' />
    </StyledGrowthHero>
  )
}

export default GrowthHero

const StyledGrowthHero = styled.div`
    h1{
        padding: 0 1rem;
        margin-top: 5.6rem;
        br{
          display: block;
        }
    }
    .heroImg{
        width: 100%;
        margin: 4rem 0 0 0;
    }
    span{
        color: white;
        background: #8c8cff;
        border-radius: 15px;
        padding: 0 10px;
    }
  @media (min-width: 1024px) {
    h1{ 
        padding: 0 191px;
        margin-top: 6.4rem;
        br#break{
          display: none;
        }
    }
    span{
        border-radius: 10px;
        padding:0 30px;
    }
    .heroImg{
    width: 100%;
    height: auto;
  }
}
`
