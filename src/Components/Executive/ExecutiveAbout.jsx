import React from 'react'
import styled from 'styled-components'
import PricingImage from '../../assets/executive/aboutImage.png'
import { theme } from '../../Utils/Theme'
import { H2, P } from '../../Utils/Typograpyhy'
import ExecutiveAboutList from './ExecutiveAboutList'
import { MainButton } from '../../Utils/Buttons'

const aboutList = [
  {
    listText: "Remote,hybrid or on-site training"
  },
  {
    listText: "Training your product team with specific skill set to take your products to the next level"
  },
  {
    listText: "Introducing tools,systems & frameworks that will enhance collaboration within your team"
  }
]

const ExecutiveAbout = () => {
  return (
    <StyledExecutiveAbout> 
        <div className="executive-about-container">
            <div className="pricing-about-text-container">
             
        
          
            <P fontSize="2rem" paddingBottom={"2rem"} fontWeight={700} textAlign="left" color={theme.color.light}>Custom Product management training to suit your company needs</P>
            <div className="pricing-about-list-container">
          {
            aboutList.map((item, index) => {
               return(
                  <ExecutiveAboutList listText={item.listText} key={index} />
               )
            })
          }
            </div>
            
          </div>
            <div className="pricing-about-image">
                <img src={PricingImage} alt="pricing about" />
            </div>
        </div>
    </StyledExecutiveAbout>
  )
}

export default ExecutiveAbout

const StyledExecutiveAbout = styled.div`
   
  .executive-about-container{
    display: flex;
    @media (max-width: 768px){
      flex-direction: column;
    }
    .pricing-about-image{
    width: 50%;
    height: auto;
    @media(max-width: 768px){
        width: 100%;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
   }
    .pricing-about-text-container{
      position: relative;
       width: 50%;
       background-color: #0088FF;
        padding: 15% 5% 6% 5%;
        @media(max-width: 768px){
        width: 100%;
        padding: 20% 3% 8% 3%;
        }
        .pricingCorner{
          position: absolute;
          top: 0;
          left: 0;
          height: 20%;
          width: 50%;
          img{
            width: 100%;
            height: 100%;
          }
        }
      .pricing-about-list-container{ 
    }
    .button-container{
        width: 40%;
        margin: 0 auto; 
        @media (max-width: 768px){
            position: relative;
            width: 70%;
        }
    }
    }
  }

  
`