import React from 'react'
import { H1 } from '../../Utils/styled/Typograpyhy'
import mobGrow from "../../assets/icon/mobGrow.png"
import deskGrow from "../../assets/icon/deskGrow.png"
import styled from 'styled-components'

const GrowthHero = () => {
    let src = `${mobGrow} 300w, ${deskGrow} 1512w,  `
    let sizes = `(min-width: 1024px) 1024px, 300px`
  return (
    <StyledGrowthHero>
      <H1 tA="center"  mdlh="8.6rem" color='#1A1A1A'>
      Advance your <span>Product</span>  Management Knowledge
      </H1>
      <img src={mobGrow} alt="Enoverlab Hero" srcSet={src} sizes={sizes} className='heroImg' />
    </StyledGrowthHero>
  )
}

export default GrowthHero

const StyledGrowthHero = styled.div`
   h1{
        padding: 0 1rem;
        margin-top: 5.6rem;
        font-size: 3rem;
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
  @media (min-width: 700px) {
    h1{
        padding: 0 1rem;
        margin-top: 5.6rem;
        font-size: 4.5rem;
    }
  }
  @media (min-width: 1024px) {
    h1{ 
        padding: 0 191px;
        margin-top: 6.4rem;
        font-size: 4.32vw;
        br#break{
          display: none;
        }
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
