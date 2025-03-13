import React from 'react'
import styled from 'styled-components'
import loadingRipple from "../assets/Ripple.svg"

const LoadingScreen = () => {
  return (
    <StyledLoadingScreen>
      <img src={loadingRipple} alt="loading ripple" />
    </StyledLoadingScreen>
  )
}

export default LoadingScreen




const StyledLoadingScreen = styled.div`
position: fixed;
width: 100%;
z-index: 10;
cursor: pointer;
top: 0;
height: 100%;
background-color: rgba(0,0,0,0.7);
display: flex;
align-items: center;
justify-content: center;
`


