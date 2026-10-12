import React from "react";
import styled from "styled-components";
import PriceHero from "../Components/Pricing/PriceHero";
import Header from "../Components/Header";
// import Testimonies from '../Components/Pricing/Testimonies'
// import SuccessStories from '../Components/Pricing/SuccessStories'
import Footer from "../Components/Footer";
import StandardProgram from "../Components/Pricing/StandardProgram";
// import { ClassTools } from '../Components/Pricing/ClassTools'
import Explore from "../Components/Pricing/Explore";
import { FaqSection } from "../Components/Pricing/FaqSection";
// import StandardOptions from '../Components/Pricing/StandardOptions'
import Testimonials from "../Components/Pricing/Testi";
import { useState, useEffect } from "react";
import LoadingScreen2 from "../Components/LoadingScreen2";
import Guarantee from "../Components/Pricing/Guarantee";
import Companies from "../Components/Pricing/Companies";
import PopupNotif from "../Components/popup-notif/PopupNotif";

/**
 * Programs and pricing page component.
 * Displays program details, fees, testimonials, FAQs, and the early enrollment discount popup.
 *
 * @returns {JSX.Element} The rendered Programs & Pricing page.
 */
const Pricing = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Delay removing loading screen to match design entrance sequence
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => {
      clearTimeout(loadTimer);
    };
  }, []);
  return (
    <div>
      <PopupNotif
        delay={10000}
        title="IMPORTANT NOTICE!!!"
        discountAmount="₦50,000"
        message="Get ₦50,000 discount when you sign up atleast 1 month before the class begins."
        ctas={[
          {
            text: "Get Discount Here",
            to: "/programs#online",
            variant: "primary",
          },
        ]}
      />
      {loading ? (
        <LoadingScreen2 />
      ) : (
        <div>
          <Header bg="#FFFDF7" />
          <StyledPricing>
            <PriceHero />
            <Companies />
            <Testimonials />
            <StandardProgram />
            {/* <ClassTools/> */}
            <Guarantee />
            {/* <LearningCentres /> */}
            {/* <StandardOptions/> */}
            {/* <Testimonies/> */}
            <Explore />
            {/* <AccessModal/> */}
            <FaqSection />
          </StyledPricing>
          <Footer p="5rem 9.6rem" />
        </div>
      )}
    </div>
  );
};

export default Pricing;

const StyledPricing = styled.div`
  background: #fffdf7;
  @media (min-width: 1024px) {
    /* padding: 0 9.6rem; */
  }
`;
