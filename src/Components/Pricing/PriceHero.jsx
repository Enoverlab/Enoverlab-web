import React from 'react'
import styled from 'styled-components'
import Figma from '../../assets/figma.png'
import gmailIcon from '../../assets/gmailIcon.png'
import googleAnalytics from '../../assets/googleAnalytics.png'
import googleDocs from '../../assets/googleDocs.png'
import hotJar from '../../assets/hotJar.png'
import Jira from '../../assets/Jira.png'
import productPlan from '../../assets/productPlan.png'
import slack from '../../assets/slackIcon.png'
import trello from '../../assets/trello.png'
import { MainButton, PrimaryButton } from '../../Utils/Buttons'
import { theme } from '../../Utils/Theme'
import { H1, H4, P } from '../../Utils/Typograpyhy'
import PricingCard from './PricingCard'
import PricingList from './PricingList'
const BasicData = [
  {
      listText: "Introduction to Product Management",
  },
  {
      listText: "Product Thinking",
  },
  {
      listText: "Understanding Product Lifecycle to Product Management",
  },
  {
      listText: "Conducting user research",
  },
  {
      listText: "Writing User Stories",
  },
  {
      listText: "Competitive Market Analysis",
  },
  {
      listText: "Product Strategy",
  },
  {
      listText: "Mock Interviews: showcasing your skills",
  },
  {
      listText: "Positioning yourself for internships and APM roles",
  },
  {
      listText: "Certificate of Completion",
  }

]

const AdvancedData = [
    {
        listText: "Introduction to Product Management",
        listSubText: "Product thinking, and understanding the product lifecycle"
    },
    {
        listText: "Customer Development",
        listSubText: "Understanding Users,Conducting user research;creating user personas,writing user stories and user segmentation"
    },
    {
        listText: "Competitive Market Analysis",
    },
    {
        listText: "Minimum viable Product(MVP)"
    },
    {
        listText: "Product Metrics",
        listSubText: "Define, track,analyse and measure success"
    },
    {
        listText: "Product Strategy",
        listSubText: "Increasing the business viability of the product"
    },
    {
        listText: "Product Prioritization",
    },
    {
        listText: "Product Roadmap",
        listSubText: "Connect the product vision,strategy, and development process in line with metrics"
    },
    {
        listText: "Basis of UX/UI Design",
        listSubText: "Understanding the basics of UX/UI designConnect the product vision,strategy, and development process in line with metrics"
    },
    {
        listText: "Product Launching",
        listSubText: "Strategically releasing the product to the marketplace"
    },
    {
        listText: "Product Growth",
        listSubText: "Strategically growing the product to the marketplace"
    },
    {
        listText: "Stalkholder Managment",
        listSubText: "Working effectively with multiple teams"
    },
    {
        listText: "Prepare for the PM role workspace",
    },
    {
        listText: "Certficate of Completion"
    }
]

const PriceHero = () => {
  return (
    <StyledPriceHero>
        <div className="price-hero-container">
            <div className="price-hero-head">
                <H1 fontWeight="400" mobileFontSize="2rem" >
                Launch your Product 
                <br />
                Management Career
                </H1>
                <div className="p-container">
                <P fontWeight={300} color="#4B4B4B">
                Get the knowledge, skills and tools you need  to function  effectively in the role of a product manager 
                </P>
                </div>
            </div>
        </div>

        <div className="pricing-card">
            <PricingCard cardTitle={"Basic Program"} 
            textColor={theme.color.dark}
            cardText={"To understand the fundamentals of product management and kickstart your product manager career"}
            tuitionFee={"N40,000"}
            duration={"4 Weeks"}
            mobileHeight={"100%"}
            >
           
            <div className="container-list">
                {
                    BasicData.map((item, index) => {
                        return (
                            <PricingList index={index} listText={item.listText} textColor={theme.color.dark} />
                        )
                    })
                }            
            </div>            
            <div className="class-tools-container">
                <H4 textAlign="left" color={theme.color.dark}>Class Tools</H4>
                <P textAlign="left" color={theme.color.dark} mobileFontSize="1rem">
                Our online classes are designed around the latest  remote 
                product management tools to keep you inline with the latest
                industry standards
                </P>
            </div>

            <div className="class-tools-icon-container">
                <div className="class-tools-icon-vert">
                <div className="class-tools-icon">
                    <img src={gmailIcon} alt="gmail-icon" />
                    Google Meet
                </div>
                <div className="class-tools-icon">
                    <img src={googleDocs} alt="google-docs-icon" />
                    Google Docs
                </div>
                </div>
                <div className="class-tools-icon-vert">
                <div className="class-tools-icon">
                    <img src={slack} alt="slack-icon" />
                    Slack
                </div>
                </div>
            </div>
            <div className="button-container">
            <MainButton buttText="Register Now" to="/"/>
            </div>
            </PricingCard>

            <PricingCard backgroundColor={theme.color.primary}
            cardTitle={"Advance Program"}
            textColor={theme.color.light}
            cardText={"To learn the required knowledge, skills and tools to fully take up the role of a product manager"}
            tuitionFee={"N100,000"}
            duration={"10 Weeks"}
            mobileHeight={"100%"}
            backLeft={"20px"}
            >
                {
                    AdvancedData.map((item, index) => {
                        return (
                            <PricingList index={index} listText={item.listText} listSubText={item.listSubText} textColor={theme.color.light} />
                        )
                    })
                }

            <div className="class-tools-container">
                <H4 textAlign="left" color={theme.color.light}>Class Tools</H4>
                <P textAlign="left" color={theme.color.light} mobileFontSize="1rem">
                Our online classes are designed around the latest  remote product management tools to keep you inline with the latest industry standards
                </P>
            </div>

            <div className="class-tools-icon-container">
                <div className="class-tools-icon-vert"
                style={{
                    color: theme.color.light
                }}
                >
                <div className="class-tools-icon">
                    <img src={googleAnalytics} alt="gmail-icon" />
                    Google Analytics
                </div>
                <div className="class-tools-icon">
                    <img src={Figma} alt="google-docs-icon" />
                    Figma
                </div>
                <div className="class-tools-icon">
                    <img src={hotJar} alt="google-docs-icon" />
                    Hot Jar
                </div>
                </div>
                <div className="class-tools-icon-vert"
                style={{
                    color: theme.color.light
                }}
                >
                <div className="class-tools-icon">
                    <img src={Jira} alt="slack-icon" />
                    Jira Software
                </div>
                <div className="class-tools-icon">
                    <img src={trello} alt="slack-icon" />
                    Trello
                </div>
                <div className="class-tools-icon">
                    <img src={productPlan}alt="slack-icon" />
                    Product Plan
                </div>
                </div>
            </div>
            <div className="button-container">
            <PrimaryButton to="/" buttText="Register Now"/>
            </div>
            </PricingCard>
        </div>
    </StyledPriceHero>
  )
}

export default PriceHero

const StyledPriceHero = styled.div`
    padding: 2% 5% 2% 10%;
    margin-bottom: 10%;
    background-color: #FFFDF7;
   @media (max-width: 768px) {
    padding: 0% 8% 5% 8%;
   }
    .price-hero-container{
        margin-bottom: 5.5rem;
       
    }
 .price-hero-head{
        display: flex;
       justify-content: center;
       flex-direction: column;
       max-width: 100%;
         .p-container{
                width: 50%;
                align-self: center;
                @media (max-width: 768px){
                    width: 100%;
                    P{
                        font-size: 0.8rem;
                        line-height: 110%;
                    }
                }
         }
 }
 .pricing-card{
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
        margin-top: 2rem;

        @media (max-width: 768px){
            grid-template-columns: 1fr;
            grid-gap: 5rem;
        }
 }    


    .class-tools-icon-container{
        display: flex;
        justify-content: space-between;
        max-width: 80%;
        margin: 2rem 0;
        .class-tools-icon-vert{
          gap: 3.5625rem;
          display: flex;
          flex-direction: column;
          @media(max-width: 768px){
            gap: 1.75rem;
          }
          .class-tools-icon{
            display: flex;
            align-items: center;
            column-gap: 1rem;
            @media(max-width: 768px){
            gap: 0.3rem; 
            font-size: 0.7rem;
            img{
                width: 1.9rem;
            }
          }    
          }
        }
        @media (max-width: 768px){
            max-width: 90%;
        }
    }
    .button-container{
        width: 40%;
        position: absolute;
        bottom: 5%;
        @media (max-width: 768px){
            position: relative;
            width: 60%;
        }
    }
`