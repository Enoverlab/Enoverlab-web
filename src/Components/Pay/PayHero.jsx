import React from "react";
import styled from "styled-components";
import { H1, P } from "../../Utils/Typograpyhy";
import HomeCard from "../HomeComponents/HomeCard";
import { PrimaryButton, SecondaryButton } from "../../Utils/Buttons";
import { theme } from "../../Utils/Theme";
import PriceTag from "./PriceTag";
const PayHero = () => {
  return (
    <StyledPayHero>
      <div className="payHero-container">
        <div className="text-container">
          <H1
            fontSize="4rem"
            mobileFontSize="1.7rem"
            color="#0046FF"
            fontWeight="500"
            lineHeight="6rem"
          >
            Clear and Affordable Pricing <br />
            made just for you
          </H1>
          <div className="p-container">
            <P
              fontSize="1.5rem"
              mobileFontSize="1rem"
              color="#4B4B4B"
              fontWeight="300"
              lineHeight="2.25rem"
            >
              Check our payment plans for all programs here
            </P>
          </div>
        </div>

        <div className="pay-card">
          <HomeCard
            cardTitle={"Advanced Program"}
            textColor={theme.color.light}
            cardText={
              "To learn the required knowledge,skills and tools to fully take up the role as a product manager"
            }
            backgroundColor={theme.color.primary}
          >
           
           <PriceTag tuitionFee={"₦120,000"} duration={"10 Weeks"} textColor={theme.color.light} />

            <div className="button-container">
              <PrimaryButton to="/programs" buttText="Make Payment" />
            </div>
          </HomeCard>

          <HomeCard
            cardTitle={"LevelUp Program"}
            textColor={theme.color.dark}
            cardText={
              "To understand the fundamentals of product management and kickstart your product manager career"
            }
            backLeft="20px"
          >
              <PriceTag tuitionFee={"₦150,000"} duration={"10 Weeks"} textColor={theme.color.dark} />
            <div className="button-container">
              <SecondaryButton to="/programs" buttText="Make Payment" />
            </div>
          </HomeCard>

          <HomeCard
            cardTitle={"Executive Program"}
            textColor={theme.color.dark}
            cardText={
              "For senior level professionals looking to get high-level knowledge to lead product teams, scale products and grow companies"
            }
            backLeft="20px"
          >
              <PriceTag tuitionFee={"₦300,000"} duration={"6 Weeks"} textColor={theme.color.dark} />

            <div className="button-container">
              <SecondaryButton to="/programs" buttText="Make Payment" />
            </div>
          </HomeCard>

          <HomeCard
            cardTitle={"Corperate Training"}
            textColor={theme.color.light}
            cardText={
              "For companies looking to train their internal product teams with the skills to help them believe their business objectives"
            }
            backgroundColor={theme.color.primary}
          >
            <div className="button-container">
              <PrimaryButton to="/programs" buttText="Make Payment" />
            </div>
          </HomeCard>
        </div>
      </div>
    </StyledPayHero>
  );
};

export default PayHero;

const StyledPayHero = styled.div`
  .text-container {
    padding-top: 7.1875rem;
  }

  .pay-card {
    position: relative;
    padding: 5rem 6% 5rem 6%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 4.4375rem;
    column-gap: 5rem;
    position: relative;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      padding: 5rem 5% 5rem 10%;
      row-gap: 2.4375rem;
    }
  }

  .button-container {
    position: absolute;
    bottom: 3.84375rem;
    margin-top: 3rem;
    width: 35.5%;
    @media (max-width: 768px) {
      width: 50%;
      bottom: 1.7rem;
    }
  }
`;
