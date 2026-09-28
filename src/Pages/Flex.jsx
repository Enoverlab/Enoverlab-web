import React, { useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FlexHero from "../Components/flex/FlexHero";
import FlexAudience from "../Components/flex/FlexAudience";
import FlexHowItWorks from "../Components/flex/FlexHowItWorks";
import FlexPricing from "../Components/flex/FlexPricing";
import FlexStartDates from "../Components/flex/FlexStartDates";
import FlexContact from "../Components/flex/FlexContact";

const Flex = () => {
  useEffect(() => {
    document.title =
      "Flex Program: Become a Product Manager in 6 Months | Enoverlab";
  }, []);

  return (
    <>
      <Header />
      <main>
        <FlexHero />
        <FlexAudience />
        <FlexHowItWorks />
        <FlexPricing />
        <FlexStartDates />
        <FlexContact />
      </main>
      <Footer p="5rem 9.6rem 0 9.6rem" />
    </>
  );
};

export default Flex;
