import React from 'react'
import styled from 'styled-components'
import TrainingCard from './TrainingCard'
import topRightBg from "../../assets/resources/topRightBg.svg";
import bottomLeftBg from "../../assets/resources/bottomLeftBg.svg";
const Training = () => {
  return (
    <StyledTraining>
        <div className="topbgContainer">
          <img src={topRightBg} alt="top right bg" />
        </div>
        <div className="bottombgContainer">
          <img src={bottomLeftBg} alt="bottom left bg" />
        </div>
      <div className="training-card-container">
      <TrainingCard/>
      </div>
    </StyledTraining>
  )
}

export default Training

const StyledTraining = styled.div`
    position: relative;
    background-color: #F0F5F7;
    .topbgContainer {
      position: absolute;
      top: 0;
      right: 0;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .bottombgContainer {
      position: absolute;
      bottom: 0;
      left: 0;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .training-card-container{
        position: relative;
        padding: 20% 16%;

        @media (max-width: 768px){
            padding: 20% 5% 20% 10%;
        }
    }
`