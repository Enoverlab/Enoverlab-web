import React from 'react'
import styled from 'styled-components'
import {theme} from '../../Utils/Theme'
import { H3, P } from '../../Utils/Typograpyhy'
import AboutList from './AboutList'

const trainingList = [
    {
        listText: "Custom product management training to suit your company's needs"
    },
    {
        listText: "Remote,hybrid or on-site training"
    },
    {
        listText: "Training your product team with specific skill set to take your products to the next level"  
    },
    {
        listText: "Introducing tools,systems & frameworks that will enhance collaboration within your team products to the next level"
    },
    {
        listText: "Team structure development to drive efficient work delivery"
    },
    {
        listText: "Close support after training to help keep your team aligned for long term success"
    }

]

const TrainingCard = ({children, cardTitle, cardText, backgroundColor, textColor, backLeft}) => {
  return (
    <StyledTrainingCard>
           <div className="home-card-container">
            <div className="card-container-back">
            </div>
            <div className="card-container-front">
                <div className="card-front-text">
                    <H3 fontSize="2.25rem" textAlign={"center"} fontWeight={"500"} color={"#111111"} paddingBottom={"1rem"}>
                    Cooperate Training
                    </H3>
                    <div className="p-container">
                    <P fontSize="1.5rem" lineHeight="2.25rem" mobileFontSize="1rem" mobileLineHeight="1.5rem" textAlign={"left"}  color={"#333333"} fontWeight={300}>
                    For companies looking to train their internal product teams with the skills to help them achieve their business objectives
                    </P>  
                    </div>
                   

                    <div className="list-container">
                    {
                        trainingList.map((item,index) => {
                            return(
                                <AboutList key={index} listText={item.listText} textColor={textColor} marginBottom="0.75rem"/>
                            )
                        }
                        )
                    }
                    </div>              
                </div>
                <div className="card-front-bottom">
                   <P 
                     fontSize="1.25rem"
                        lineHeight="2.25rem"
                        mobileFontSize="1rem"
                        mobileLineHeight="1.6875rem"
                        textAlign={"left"}
                        color={"#FFFFFF"}
                        fontWeight={500}
                   >
                  Train your team in 6weeks
                   </P>
                </div>
            </div>
        </div>
    </StyledTrainingCard>
  )
}

export default TrainingCard

const StyledTrainingCard = styled.div`
       position: relative;
     width: 100%;
    .home-card-container{
        position: relative;
    
        .card-container-back{
            position: absolute;
            top: -45px;
            left: ${props => props.backLeft ?  props.backLeft : "-45px"};
            width: 100%;
            height: 47.1875rem;
            z-index: 1;
            border: 1px solid ${theme.color.dark};
            background-color: #0088FF;
            @media (max-width: 768px){
                width: 100%;
                height: 56.0625rem;
                left: -20px;
            }
        }
        .card-container-front{
            position: relative; 
            width: 100%;
            height: 47rem;
            z-index: 2;
            border: 1px solid #0000FF;
            background-color: #FFFFFF;
            @media(max-width: 768px){
                height: 56.0625rem;
                width: 100%;
                padding: 1.5rem 0rem 0rem 0rem;
            }
            .card-front-text{
                position: relative;
                width: 100%;
                height: 80%;
                background-color: #FFFFFF;
                padding: 3.5rem 4.5rem;

                @media(max-width: 768px){
                    padding: 1rem;
                    height: 85%;
                }
                .p-container{
                    margin-bottom: 1.5rem;
                    padding: 0 1.5rem;

                    @media(max-width: 768px){
                        padding: 0;
                    }
                }
            }
            .card-front-bottom{
                position: relative;
                width: 100%;
                height: 20%;
                background-color: #0088FF;
                padding: 3.25rem 10%;

                @media(max-width: 768px){
                    padding: 2.25rem 1rem;
                    height: 15%;
                }
            }
        }
    }
`