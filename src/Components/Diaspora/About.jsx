import React from 'react'
import styled from 'styled-components'
import PricingImage from '../../assets/pricingImage.png'
import { theme } from '../../Utils/Theme'
import { H2, P } from '../../Utils/Typograpyhy'
import PricingAboutList from '../Pricing/PricingAboutList'
import PricingAboutCorner from '../../assets/pricingAboutCorner.png'
import PlacementImg from '../../assets/placementImg.png'
const aboutList = [
  {
    listText: "Get real life product management experience."
  },
 
  {
    listText: "Put into practice everything you learnt"
  },
  
  {
    listText: "Become more skilled in product managment"
  },
  {
    listText: "Team of UIUX designers"
  },
  {
    listText: "Team of software engineers"
  },
  {
    listText: "Team of  other product managers"
  },
]

const PricingAbout = () => {
  return (
    <StyledPricingAbout> 
        <div className="pricing-about-container">
            <div className="pricing-about-text-container">
              <div className="pricingCorner">
              {/* <img src={PricingAboutCorner} alt=""  /> */}
              </div>
        
            <H2 mobileFontSize="1.8rem" paddingBottom="2rem" fontSize="3rem" color="#121212" textAlign="left" fontWeight={400}>Internship Placement(8 Weeks)</H2>
            <P fontWeight={"500"} paddingBottom={"2rem"} textAlign="left" fontSize="1.75rem" color={theme.color.dark} mobileFontSize="1rem">After completing the 10 weeks training, you will be placed in an open-source remote internship </P>
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
                <img src={PlacementImg} alt="pricing about" />
            </div>
        </div>
    </StyledPricingAbout>
  )
}

export default PricingAbout

const StyledPricingAbout = styled.div`
   
  .pricing-about-container{
    background-color: #F0F5F7;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px){
      flex-direction: column;
    }
    .pricing-about-image{
    width: 40%;
    padding: 95px 0;
    height: auto;
    align-self: flex-start;
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
       width: 60%;
       /* background-color: #DBF5FF; */
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