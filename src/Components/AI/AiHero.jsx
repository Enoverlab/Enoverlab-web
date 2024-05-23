import React from 'react'
import { H1 } from '../../Utils/styled/Typograpyhy'
import mobaiheroimg from "../../assets/icon/mobaiheroimg.jpg"
import deskaiheroimg from "../../assets/icon/deskaiheroimg.jpg"
import styled from 'styled-components'

const AiHero = () => {
    let src = `${mobaiheroimg} 300w, ${deskaiheroimg} 1512w,  `
    let sizes = `(min-width: 1024px) 1024px, 300px`
  return (
    <StyledAiHero>
      <H1 tA="center"  mdlh="8.6rem" color='#1A1A1A'>
        <span>Artificial</span> Intelligence Product <span>Management Program</span> </H1>
      <img src={mobaiheroimg} alt="Enoverlab Hero" 
    srcSet={src} sizes={sizes} className='heroImg'
     />
    </StyledAiHero>
  )
}

export default AiHero

const StyledAiHero = styled.div`
    h1{
        padding: 0 20px ;
        margin-top: 5.6rem;
    }
    .heroImg{
        width: 100%;
        margin: 4rem 0 0 0;
        /* height: clamp(200px,26vw,350px) ; */
    }
    span{
        color: white;
        background: #8c8cff;
        border-radius: 15px;
        padding-left:5px;
    }
  @media (min-width: 1024px) {
    h1{
        padding: 0 191px;
        margin-top: 6.4rem;
    }
    span{
        border-radius: 20px;
        padding-left:30px;
    }
    .heroImg{
    width: 100%;
    height: auto;
  }
}
`
