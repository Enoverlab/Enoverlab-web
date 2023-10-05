import React from 'react'
import styled from 'styled-components'
import PricingImage from '../../assets/pricingImage.png'
import { theme } from '../../Utils/Theme'
import { H2, P } from '../../Utils/Typograpyhy'
import PricingAboutList from './PricingAboutList'
import PricingAboutCorner from '../../assets/pricingAboutCorner.png'

const aboutList = [
  {
    listText: "All the programs here are for practising product managers looking to upskill.",
    listText2: " PS: If you are just transitioning into product management, the program above are not for you."
   
  },
 
  {
    listText: "Installment payment option is available; you can spread your tuition payment twice"
  },
  
  {
    listText: "The online classes are instructor led, not pre-recorded videos"
  },
  {
    listText: "Class runs for 3-4 hours depending on your class schedules"
  },
  {
    listText: "You will get an Internationally accredited Certificate of Completion at the end of the training"
  },
  // {
  //   listText: "We have weekday & weekend class for the online training; you can choose any class that works best for you"
  // },
  // {
  //   listText: "Onsite training holds only on Saturdays"
  // }
]

const PricingAbout = () => {
  return (
    <StyledPricingAbout> 
        <div className="pricing-about-container">
            <div className="pricing-about-text-container">
              <div className="pricingCorner">
              <img src={PricingAboutCorner} alt=""  />
              </div>
        
            <H2 mobileFontSize="1.8rem" paddingBottom="2rem" fontSize="2.75rem" fontWeight={400}>Important Information</H2>
            <P fontWeight={"500"} paddingBottom={"2rem"} textAlign="left" color={theme.color.dark} mobileFontSize="1rem">These are few things to keep in mind while registering for the training</P>
            <div className="pricing-about-list-container">
          {
            aboutList.map((item, index) => {
               return(
                  <PricingAboutList listText={item.listText} listText2={item?.listText2} key={index} />
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