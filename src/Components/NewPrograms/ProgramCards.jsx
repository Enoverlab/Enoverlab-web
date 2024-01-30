import React, { useState } from "react";
import Figma from "../../assets/figma.png";
import Jira from "../../assets/Jira.png";
import productPlan from "../../assets/productPlan.png";
import trello from "../../assets/trello.png";
import {
  PrimaryButton,
  MainButton,
  TransparentButton,
} from "../../Utils/Buttons";
import { theme } from "../../Utils/Theme";
import { H4, P } from "../../Utils/Typograpyhy";
import PricingCard from "./PricingCard";
import PricingList from "./PricingList";
import {
  BasicData,
  AdvancedData,
  Onsite,
  ExecutiveData,
  TPMData,
  GrowthData,
  PMPData
} from "./PricingData";
import styled from "styled-components";

export const AdvancedCard = () => {
  return (
    <CardStyle>
      <PricingCard
        backgroundColor={theme.color.light}
        cardTitle={"Online Program "}
        textColor={theme.color.dark}
        cardText={"To learn the required knowledge, skills and tools to fully take up the role of a product manager"
        }
        tuitionFee={"₦200,000"}
        duration={"$49.00"}
        mobileHeight={"100%"}
        height={"100%"}

        >
       
        {AdvancedData.map((item, index) => {
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
                window.open("https://paystack.com/pay/enoverlabadvance");
              }}
            >
              <MainButton
                to="#"
                buttText="Pay Now"
                border="1px solid #000"
              />
            </div>
            <div
              className="button-container"
              onClick={() => {
                window.open("https://forms.gle/2Ymz8FovVJEX6uDD9");
              }}
            >
              <TransparentButton
                to="#"
                buttText="Sign Up"
                // border="1px solid #FFF"
                // textColor="#FFF"
                // whiteArrow
              />
            </div>
          </div>
          <div className="download-text-url ">
            <a href="https://birdsend.page/forms/6444/va9wSykY3B">
              <p>Download Syllabus</p>
            </a>
          </div>
        </div>
        {/* <div className="button-container"
        onClick={() => {
          window.open()
        }}
        >
          <PrimaryButton to="#" buttText="Sign Up" border="1px solid #000" />
        </div> */}
      </PricingCard>
    </CardStyle>
  );
};

export const OnsiteCard = () => {
  const [tab, setTab] = useState("tabActive");
  const [selectedLocation, setSelectedLocation] = useState('Lekki');
  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  }
  return (
    <CardStyle>
      <PricingCard
        backgroundColor={"#FFF"}
        cardTitle={"On-Site Program"}
        topBgColor="#BAEAFA29"
        textColor={theme.color.dark}
        cardText={"To understand the fundamentals of product management and kickstart your product manager career"}
        tuitionFee={selectedLocation === "Lekki" ? "₦250,000" : "₦300,000"}
        duration={"$245.00"}
        mobileHeight={"100%"}
        height={"100%"}
        showSwitch
        tabValue={tab}
        selectedLocation={selectedLocation}
        handleLocationChange={handleLocationChange}
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
        <div className="button-box">
          <div className="button-flex">
            <div
              className="button-container"
              onClick={() => {
                window.open(
                  tab === "tabActive"
                    ? "https://paystack.com/pay/EnoverlabLekki"
                    : tab === "tabInactive"
                    ? "https://paystack.com/pay/enoverlabibadan"
                    : "https://paystack.com/pay/enoverlabberger"
                );
              }}
            >
              <MainButton to="#" buttText="Pay Now" />
            </div>
            <div
              className="button-container"
              onClick={() => {
                window.open(
                  tab === "tabActive"
                    ? " https://bit.ly/enoverlabexclusive"
                    : tab === "tabInactive"
                    ? "https://forms.gle/UQtq3gr3BeP59iui8"
                    : "https://forms.gle/Bv6j6THHFdTvmx5W6"
                );
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
      margin-top: 1.5rem;
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
