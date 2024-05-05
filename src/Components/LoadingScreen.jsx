import React from 'react'
import styled, { keyframes } from 'styled-components'
import dbg from "../assets/icon/Dbg.png"

const LoadingScreen = () => {
  return (

    <StyledLoadingScreen>
      <svg width="66" height="79" viewBox="0 0 66 79" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Property" className='Property'>
        <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M1.86279 42.9142L44.6895 77.501C47.5207 79.7874 51.3989 79.4245 53.8591 76.6429L64.6207 64.4754C66.5456 62.2991 66.3056 58.6959 64.1141 56.8701L55.601 49.7778L47.4319 42.9722C45.8946 43.1449 44.2244 43.2395 42.4784 43.2395C34.8626 43.2395 28.6886 41.4382 28.6886 39.216C28.6886 36.9939 34.8626 35.1924 42.4784 35.1924C44.3392 35.1924 46.1138 35.3 47.7334 35.4949L64.0634 22.8622C66.2914 21.1386 66.6589 17.5867 64.8429 15.3282L54.6363 2.63422C52.2543 -0.328209 48.3085 -0.860222 45.3771 1.38582L1.95282 34.6582C-0.612277 36.6236 -0.658678 40.8779 1.86279 42.9142Z" fill="#52DEE5"/>
        </g>
    </svg>

    </StyledLoadingScreen>
  )
}

export default LoadingScreen

const fadeOut = keyframes`

    0%,100% {
        opacity: 1;
        transform: scale(1);
    }
    50%{
        opacity: 0.5;
        transform: scale(0.8);
    }

`


const StyledLoadingScreen = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100svh;
width: 100%;
background-image: url(${dbg});
background-color:rgba(82, 222, 229,0.1);
svg{
    height: 100%;
    /* width: 100%; */
}


.Property{
    animation: ${fadeOut} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
} 

`


