import React from 'react'
import styled from 'styled-components'
import loadingRipple from "../assets/icon/ripple.svg"

const LoadingScreen = () => {
  return (

    <StyledLoadingScreen>
      <img src={loadingRipple} alt="" />
    </StyledLoadingScreen>
  )
}

export default LoadingScreen




const StyledLoadingScreen = styled.div`
display: flex;
align-items: center;
justify-content: center;

`


