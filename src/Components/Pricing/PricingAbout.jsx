import React from 'react'
import styled from 'styled-components'
import PricingImage from '../../assets/pricingImage.png'
import { theme } from '../../Utils/Theme'
import { H2, P } from '../../Utils/Typograpyhy'
import PricingAboutList from './PricingAboutList'
import PricingAboutCorner from '../../assets/pricingAboutCorner.png'
import { MainButton } from '../../Utils/Buttons'

const aboutList = [
  {
    listText: "Installment payment option is available;you can spread your tuition payment"
  },
  {
    listText: "All our programs are for absolute beginners in product management"
  },
  {
    listText: "You don’t need any degree to become a product manager"
  },
  {
    listText: "Trainings are held  twice a week at selected days"
  },
  {
    listText: "All classes are live online class with an instructor"
  },
  {
    listText: "Each class runs for 2hrs"
  },
  {
    listText: "Only Advanced Program trainees have an internship placement at the end of the 10weeks training"
  }
]

const PricingAbout = () => {
  return (
    <StyledPricingAbout> 
        <div className="pricing-about-container">
            <div className="pricing-about-text-container">
              <div className="pricingCorner">
              <img src={PricingAboutCorner} alt=""  />
              </div>
        
            <H2 paddingBottom="2rem" fontSize="2.75rem" fontWeight={400}>Important Information</H2>
            <P paddingBottom={"2rem"} textAlign="left" color={theme.color.dark}>These are few things to keep in mind while registering for the classes</P>
            <div className="pricing-about-list-container">
          {
            aboutList.map((item, index) => {
               return(
                  <PricingAboutList listText={item.listText} key={index} />
               )
            })
          }
            </div>
            {/* <div className="button-container">
              <MainButton buttText="Register Now" to="" />
            </div> */}
          </div>
            <div className="pricing-about-image">
                <img src={PricingImage} alt="pricing about" />
            </div>
        </div>
    </StyledPricingAbout>
  )
}

export default PricingAbout

const StyledPricingAbout = styled.div`
   
  .pricing-about-container{
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
       background-color: #DBF5FF;
        padding: 5% 3%;
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