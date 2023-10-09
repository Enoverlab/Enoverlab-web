import React, {useState} from 'react'
import Figma from "../../assets/figma.png";
// import gmailIcon from "../../assets/gmailIcon.png";
// import googleAnalytics from "../../assets/googleAnalytics.png";
// import googleDocs from "../../assets/googleDocs.png";
// import hotJar from "../../assets/hotJar.png";
import Jira from "../../assets/Jira.png";
import productPlan from "../../assets/productPlan.png";
// import slack from "../../assets/slackIcon.png";
import trello from "../../assets/trello.png";
import {  PrimaryButton, MainButton, TransparentButton } from "../../Utils/Buttons";
import { theme } from "../../Utils/Theme";
import {  H4, P } from "../../Utils/Typograpyhy";
import PricingCard from "./PricingCard";
import PricingList from "./PricingList";
import { BasicData, AdvancedData, Onsite, ExecutiveData, TPMData, GrowthData } from "./PricingData";
import styled from "styled-components";
export const BasicCard = () => {
  return (
    <CardStyle>
      <PricingCard
        cardTitle={"Basic Program"}
        textColor={theme.color.dark}
        cardText={
          "Introductory training to understand the foundations of product management  "
        }
        tuitionFee={"₦50,000"}
        duration={"4 Weeks"}
        height={"63rem"}
        mobileHeight={"100%"}
        // backLeft={"20px"}
      >
        <div className="container-list">
          {BasicData.map((item, index) => {
            return (
              <PricingList
                index={index}
                listText={item.listText}
                textColor={theme.color.dark}
              />
            );
          })}
        </div>
        
        <div className="button-container"
        onClick={() => {
          window.open("https://forms.gle/mEgFW43AXVTkpUtV7")
        }}
        >
          <PrimaryButton to="#" buttText="Sign Up" />
        </div>
      </PricingCard>
    </CardStyle>
  );
};

export const AdvancedCard = () => {
  return (
    <CardStyle>
      <PricingCard
        backgroundColor={theme.color.primary}
        cardTitle={"Advanced Program (ONLINE)"}
        textColor={theme.color.light}
        cardText={"Comprehensive product management training to become a skilled product manager"}
        tuitionFee={"₦150,000"}
        duration={"10 Weeks"}
        mobileHeight={"100%"}
        height={"108.4375rem"}
        backLeft={"20px"}
        
        // discountPrice={"₦150,000"}
      >
        {AdvancedData.map((item, index) => {
          return (
            <PricingList
              key={index}
              listText={item.listText}
              listSubText={item.listSubText}
              textColor={theme.color.light}
            />
          );
        })}

        <div className="class-tools-container">
          <H4 fontSize="1.5rem" textAlign="left" color={theme.color.light}>
            Class Tools
          </H4>
        </div>

        <div className="class-tools-icon-container">
          <div
            className="class-tools-icon-vert"
            style={{
              color: theme.color.light,
            }}
          >
          
            <div className="class-tools-icon">
              <img src={Figma} alt="google-docs-icon" />
              Figma
            </div>
            <div className="class-tools-icon">
              <img src={Jira} alt="slack-icon" />
              Jira Software
            </div>
          </div>
          <div
            className="class-tools-icon-vert"
            style={{
              color: theme.color.light,
            }}
          >
            
            <div className="class-tools-icon">
              <img src={trello} alt="slack-icon" />
              Trello
            </div>
            <div className="class-tools-icon">
              <img src={productPlan} alt="slack-icon" />
              Product Plan
            </div>
          </div>
        </div>
        <div className="button-container"
        onClick={() => {
          window.open("https://forms.gle/mEgFW43AXVTkpUtV7")
        }}
        >
          <PrimaryButton to="#" buttText="Sign Up" />
        </div>
      </PricingCard>
    </CardStyle>
  );
};

export const OnsiteCard = () => {
  const [tab, setTab] = useState("tabActive")

  const handleChange = (tabValue) => {
  //  if(tab === "active"){
  //   setTab("active")
  //  }else if(tab==="tabInactive"){
  //   setTab("inactive")
  //  }else{
  //   setTab("bergActive")
  //  }
  setTab(tabValue)
  }
  return (
    <CardStyle> 
      <PricingCard
        // backgroundColor={theme.color.primary} add comment
        cardTitle={"Advanced Program (ON-SITE)"}
        textColor={theme.color.dark}
        cardText={
          "This is for professionals who prefers physical training to learn the required skills to become a Product Manager"
        }
        tuitionFee={tab === "active" ? "₦200,000" : "₦200,000"}
        duration={"12 Weeks"}
        mobileHeight={"100%"}
        height={"75.4375rem"}
        showSwitch
        tabValue={tab}
        switchTab={handleChange}
        // discountPrice={tab === "active" ? "" : "₦200,000" }
      >
        {Onsite.map((item, index) => {
          return (
            <PricingList
              key={index}
              listText={item.listText}
              listSubText={item.listSubText}
              textColor={theme.color.dark}
            />
          );
        })}

        <div className="note">
          {/* <H4 fontSize="1.5rem" textAlign="left" color={theme.color.dark}>
            NOTE:
          </H4> */}
         
        </div>
        
        <div className="button-box">
          <div className="button-flex">
            <div
              className="button-container"
              onClick={() => {
                window.open("https://paystack.com/pay/enoverlabbasic");
              }}
            >
              <MainButton to="#" buttText="Pay Now" />
            </div>
            <div
              className="button-container"
              onClick={() => {
                window.open("https://forms.gle/DfFEZ36nZLFoUJwN8")
              }}
            >
              <TransparentButton to="#" buttText="Sign Up" />
            </div>
          </div>
          <div className="download-text-url">
            <a href="">
              <p>Download Syllabus</p>
            </a>
          </div>
        </div>

        <div className="button-container"
        onClick={() => {
          window.open("https://forms.gle/DfFEZ36nZLFoUJwN8")
        }}
        >
          <PrimaryButton to="#" buttText="Sign Up" />
        </div>
      </PricingCard>
    </CardStyle>
  );
};

export const Executive = () => {
  return (
    <CardStyle>
      <PricingCard
        cardTitle={"Executive Coaching"}
        textColor={theme.color.dark}
        cardText={
          "For senior level professionals, business leaders & founders to learn the product management skills to lead product teams, scale products and take companies to the next level"
        }
        tuitionFee={"₦300,000"}
        duration={"7 Weeks"}
        height={"72rem"}
        mobileHeight={"100%"}
        backLeft={"20px"}
      >
        <div className="container-list">
          {ExecutiveData.map((item, index) => {
            return (
              <PricingList
                index={index}
                listText={item.listText}
                textColor={theme.color.dark}
              />
            );
          })}
        </div>
        <div className="button-container"
        onClick={() => {
          window.open("https://forms.gle/2Ymz8FovVJEX6uDD9")
        }}
        >
          <PrimaryButton to="#" buttText="Sign Up" />
        </div>
      </PricingCard>
    </CardStyle>
  );
};

export const TechnicalPM = () => {
 
  return (
    <CardStyle>
      <PricingCard
        // backgroundColor={theme.color.primary}
        cardTitle={"Technical Product Management Program"}
        textColor={theme.color.dark}
        cardText={
          "For product managers with atleast one year working experience to build their technical proficiency"
        }
        tuitionFee={"₦150,000"}
        duration={"8 Weeks"}
        mobileHeight={"100%"}
        height={"73.4375rem"}
        // backleft={"20px"}
        // discountPrice={"₦150,000"}
      >
        {TPMData.map((item, index) => {
          return (
            <PricingList
              key={index}
              listText={item.listText}
              listSubText={item.listSubText}
              textColor={theme.color.dark}
            />
          );
        })}

<div className="button-box">
          <div className="button-flex">
            <div
              className="button-container"
              onClick={() => {
                window.open("https://paystack.com/pay/enoverlabtpmp");
              }}
            >
              <MainButton to="#" buttText="Pay Now" />
            </div>
            <div
              className="button-container"
              onClick={() => {
                window.open("https://forms.gle/nWz9USaguewx1bQ5A")
              }}
            >
              <TransparentButton to="#" buttText="Sign Up" />
            </div>
          </div>
          <div className="download-text-url">
            <a href="https://birdsend.page/forms/6444/va9wSykY3B">
              <p>Download Syllabus</p>
            </a>
          </div>
        </div>
{/* 
        <div className="button-container"
        onClick={() => {
          window.open("https://forms.gle/nWz9USaguewx1bQ5A")
        }}
        >
          <PrimaryButton to="#" buttText="Sign Up" />
        </div> */}
      </PricingCard>
    </CardStyle>
  );
};

export const GrowthPM = () => {
  return (
    <CardStyle>
      <PricingCard
        backgroundColor={theme.color.primary}
        cardTitle={"Growth Product Management Program"}
        textColor={theme.color.light}
        cardText={
          "For Product Managers to learn the specific skills required to drive their product growth to the next level"
        }
        tuitionFee={"₦150,000"}
        duration={"8 weeks"}
        mobileHeight={"100%"}
        height={"85.4375rem"}
        backleft={"20px"}
        // discountPrice={"₦150,000"}
      >
        {GrowthData.map((item, index) => {
          return (
            <PricingList
              key={index}
              listText={item.listText}
              listSubText={item.listSubText}
              textColor={theme.color.light}
            />
          );
        })}
         <div className="button-box">
          <div className="button-flex">
            <div
              className="button-container"
              onClick={() => {
                window.open("https://paystack.com/pay/enoverlabgpmp");
              }}
            >
              <PrimaryButton
                to="#"
                buttText="Pay Now"
                border="1px solid #000"
              />
            </div>
            <div
              className="button-container"
              onClick={() => {
                window.open("https://forms.gle/dhpvRAR5qXY3sjdu8")
              }}
            >
              <TransparentButton
                to="#"
                buttText="Sign Up"
                border="1px solid #FFF"
                textColor="#FFF"
                whiteArrow
              />
            </div>
          </div>
          <div className="download-text-url white-download">
            <a href="https://birdsend.page/forms/6444/va9wSykY3B">
              <p>Download Syllabus</p>
            </a>
          </div>
        </div>
        {/* <div className="button-container"
        onClick={() => {
          window.open("https://forms.gle/dhpvRAR5qXY3sjdu8")
        }}
        >
          <PrimaryButton to="#" buttText="Sign Up" />
        </div> */}
      </PricingCard>
    </CardStyle>
  );
};



const CardStyle = styled.div`
  .class-tools-icon-container {
    display: flex;
    justify-content: space-between;
    max-width: 80%;
    margin: 2rem 0;
    .class-tools-icon-vert {
      gap: 2.125rem;
      display: flex;
      flex-direction: column;
      @media (max-width: 768px) {
        gap: 1.75rem;
      }
      .class-tools-icon {
        display: flex;
        align-items: center;
        column-gap: 1rem;
        font-size: 1rem;
        font-weight: 700;
        .class-icon {
          width: 2.5rem;
          height: 2.5rem;
          object-fit: contain;
        }
        @media (max-width: 768px) {
          gap: 0.3rem;
          font-size: 0.7rem;
          img {
            width: 1.9rem;
          }
        }
      }
    }
    @media (max-width: 768px) {
      max-width: 90%;
    }
  }

  .button-box {
    /* width: 100%; */
    margin-top: 3rem;
    .button-flex {
      display: flex;
      /* width: 100%; */
      column-gap: 1rem;

      @media (max-width: 768px){
        /* flex-direction: column; */
        columnn-gap: 0.2rem;
      }
      .button-container {
        width: 35%;
        /* position: absolute; */
        bottom: 5%;
        @media (max-width: 768px) {
          position: relative;
          width: 50%;
          /* margin-top: 3.2rem; */
        }
      }
    }

    .download-text-url {
      margin-top: 1rem;
      a {
        color: ${theme.color.primary};
      }
       @media (max-width: 768px) {
        margin-top: 2rem;
        padding-bottom: 3rem;
       }
    }
    .white-download{
     a{
      color: #FFF;
     }
    }
  }

  .note {
    H4 {
      margin-bottom: 1rem;

      @media (max-width: 768px) {
        margin-bottom: 0rem;
      }
    }
    @media (max-width: 768px) {
      margin-bottom: 2rem;
    }
  }
`;
