import React from "react";
import styled from "styled-components";
import Figma from "../../assets/figma.png";
import gmailIcon from "../../assets/gmailIcon.png";
import googleAnalytics from "../../assets/googleAnalytics.png";
import googleDocs from "../../assets/googleDocs.png";
import hotJar from "../../assets/hotJar.png";
import Jira from "../../assets/Jira.png";
import productPlan from "../../assets/productPlan.png";
import slack from "../../assets/slackIcon.png";
import trello from "../../assets/trello.png";
import { MainButton, PrimaryButton } from "../../Utils/Buttons";
import { theme } from "../../Utils/Theme";
import { H1, H4, P } from "../../Utils/Typograpyhy";
import PricingCard from "./PricingCard";
import PricingList from "./PricingList";
const BasicData = [
  {
    listText: "Product Management Fundamentals",
  },
  {
    listText: "Customer Journey Map; to learn more about customers, connect, understand & deliver better value to them",
  },
  {
    listText: "UX design: designing experiences beyond the product",
  },
  {
    listText: "Market Leading Strategy",
  },
  {
    listText: "Metrics for product success",
  },
  {
    listText: "Building platform products",
  },
  {
    listText: "Understanding network effects",
  },
  {
    listText: "Mock Interviews: showcasing your skills",
  },
  {
    listText: "Positioning yourself for internships and APM roles",
  },
  {
    listText: "Prioritization",
  },
  {
    listText: "Product-Led Growth",
  },
  {
    listText: "Product Analytics",
  },
  {
    listText: "Innovation for Product Managers",
  },
  {
    listText: "Stakeholder Management",
  },
  {
    listText: "Team Leadership",
  }
];

const AdvancedData = [
  {
    listText: "Introduction to Product Management",
  },
  {
    listText: "Product Thinking",
  },
  {
    listText: "Conducting User Research",
  },
  {
    listText: "Understanding Product Life Cycle",
  },
  {
    listText: "User Segmentation & Personas",
  },
  {
    listText: "Writing User Stories",
  },
  {
    listText: "Creating Userflows, Prototypes & Wireframes",
  },
  {
    listText: "Agile Product Development",
  },
  {
    listText: "Product Roadmap",
    // listSubText:
    //   "Understanding the basics of UX/UI designConnect the product vision,strategy, and development process in line with metrics",
  },
  {
    listText: "Competitive Analysis",
  },
  {
    listText: "Product Metrics",
  },
  {
    listText: "Prioritization frameworks",
  },
  {
    listText: "Product Strategy",
  },
  {
    listText: "Minimum Viable Product",
  },
  {
    listText: "Product Launch; Go - to - market strategy",
  },
  {
    listText: "Tracking & analyzing product data",
  },
  {
    listText: "Certificate of Completion",
  },
  {
    listText: "6 weeks Internship placement",
  }
 
];

const PriceHero = () => {
  return (
    <StyledPriceHero>
      <div className="price-hero-container">
        <div className="price-hero-head">
          <H1 fontWeight="500" mobileFontSize="2rem">
            Launch your Product
            <br />
            Management Career
          </H1>
          <div className="p-container">
            <P
              fontSize="1.5rem"
              lineHeight="2.25rem"
              fontWeight={300}
              color="#4B4B4B"
            >
             For anyone just starting out to learn the required skills to become a Product Manager
            </P>
          </div>
        </div>
      </div>

      <div className="pricing-card">
        <PricingCard
         
          cardTitle={"Advance Program"}
          textColor={theme.color.dark}
          cardText={
            "To learn the required knowledge, skills and tools to fully take up the role of a product manager"
          }
          tuitionFee={"N120,000"}
          duration={"10 Weeks"}
          mobileHeight={"100%"}
          height={"123.4375rem"}
         
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

          <div className="class-tools-container">
            <H4 fontSize="1.5rem" textAlign="left" color={theme.color.dark}>
              Class Tools
            </H4>
            <P
              fontSize="1.125rem"
              textAlign="left"
              color={theme.color.dark}
              paddingTop="0.6625rem"
              mobileFontSize="1rem"
              fontWeight={300}
            >
              Our online classes are designed around the latest remote product
              management tools to keep you inline with the latest industry
              standards
            </P>
          </div>

          <div className="class-tools-icon-container">
            <div
              className="class-tools-icon-vert"
              style={{
                color: theme.color.dark,
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
            <div
              className="class-tools-icon-vert"
              style={{
                color: theme.color.dark,
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
                <img src={productPlan} alt="slack-icon" />
                Product Plan
              </div>
            </div>
          </div>
          <div className="button-container">
            <PrimaryButton to="/" buttText="Enrol Now" />
          </div>
        </PricingCard>

        <PricingCard
         backgroundColor={theme.color.primary}
          cardTitle={"LevelUP Program"}
          textColor={theme.color.light}
          cardText={
            "For working Product Managers looking to LevelUp their product management skills"
          }
          tuitionFee={"N150,000"}
          duration={"7 Weeks"}
          height={"110rem"}
          mobileHeight={"100%"}
          backLeft={"20px"}
        >
          <div className="container-list">
            {BasicData.map((item, index) => {
              return (
                <PricingList
                  index={index}
                  listText={item.listText}
                  textColor={theme.color.light}
                />
              );
            })}
          </div>
          <div className="class-tools-container">
            <H4 fontSize="1.5rem" textAlign="left" color={theme.color.dark}>
              Class Tools
            </H4>
            <P
              paddingTop="0.6625rem"
              fontSize="1.125rem"
              fontWeight={300}
              textAlign="left"
              color={theme.color.light}
              mobileFontSize="1rem"
            >
              Our online classes are designed around the latest remote product
              management tools to keep you inline with the latest industry
              standards
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
            <PrimaryButton to="/" buttText="Enrol Now" />
          </div>
        </PricingCard>

      </div>
    </StyledPriceHero>
  );
};

export default PriceHero;

const StyledPriceHero = styled.div`
  padding: 10% 8% 12% 8%;
  position: relative;
  /* margin-bottom: 10%; */
  background-color: #fffdf7;
  @media (max-width: 768px) {
    padding: 25% 10% 15% 5%;
  }
  .price-hero-container {
    position: relative;
    margin-bottom: 8.5rem;
  }
  .price-hero-head {
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 100%;
    .p-container {
      width: 50%;
      align-self: center;
      @media (max-width: 768px) {
        width: 100%;
        P {
          font-size: 0.8rem;
          line-height: 110%;
        }
      }
    }
  }
  .pricing-card {
    position: relative;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2.3125rem;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-gap: 5rem;
    }
  }

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
  .button-container {
    width: 30%;
    position: absolute;
    bottom: 5%;
    @media (max-width: 768px) {
      position: relative;
      width: 55%;
    }
  }
`;
