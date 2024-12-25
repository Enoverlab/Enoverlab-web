import React, { useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import dbg from "../assets/icon/Dbg.png"
import {useState, useEffect} from "react"
import enovlogo from "../assets/hatc.png"

const LoadingScreen2 = () => {
  const [text, setText] = useState("")
  const containerRef = useRef()
  document.body.classList.add('bodyStiff')
  document.body.classList.add('bodyStiff2')
  
  useEffect(()=>{
    let knows = ["Enoverlab is accredited by the American Council of Training and Development?", "A skilled Product Manager can increase a company's profit by 34.2%", "The focus of product management is to deliver value to customers. The end result of product management is to drive up business value for organisations.", 'Our mission at Enoverlab is to "Build impactful product talents like you for today, tomorrow, and the future"', 'Enoverlab vision is to "Transform Africa One Talent at a time"', 'You can earn between N20,000,000 - N50,000,000 in base salary over the next 36 months as a Skilled Product Manager'
  ]
  let randomValue = Math.random()*knows.length
  randomValue = Math.ceil(randomValue) - 1
  setText(knows[randomValue])
  },[])
  return (
    <div className="docu" id='docu' ref={containerRef}>
      <StyledLoadingScreen>

        <div className='content'>
          <img src={enovlogo } alt="" />
          <h2>Did you know...</h2>
          <p>{text}</p>
        </div>
      </StyledLoadingScreen>
    </div>

  )
}

export default LoadingScreen2

const bounce = keyframes`
    0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  `

const StyledLoadingScreen = styled.div`
 display: flex;
flex-direction: column;

background-image: url(${dbg});
align-items: center;
justify-content: center;
height: 100vh;
width: 100%;
background-color:rgba(82, 222, 229,0.1);
.content{
  background-color: white;
  width: 85.710vw;
  height: 25rem;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  padding: 10px;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;

}
img{
   width: 12rem;
}
h2{
  font-weight: 700;
  font-size: 1.8rem;
  text-align: center;
}
p{
    font-size: clamp(1.2rem,3.27vw,1.4rem);
    text-align: center;
  }
/* #Property{
  animation: ${bounce} 1s infinite;;
} */

@media(min-width: 1024px) {
  .content{
    width: 44.51vw;
    height:  30rem;
    border-radius: 15px;
    padding: 10px;
  }
  img{
     width : 16rem;
  }
  h2{
    font-weight: 700;
    font-size: clamp(2rem,2.5vw,3.6rem);
  }
  p{
    font-size: clamp(1.6rem,1.388vw,2rem);
  }
}

`
