import React, { useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FlexHero from "../Components/flex/FlexHero";
import FlexAudience from "../Components/flex/FlexAudience";
import FlexHowItWorks from "../Components/flex/FlexHowItWorks";
import FlexPricing from "../Components/flex/FlexPricing";
import FlexStartDates from "../Components/flex/FlexStartDates";
import FlexContact from "../Components/flex/FlexContact";
import PopupNotif from "../Components/popup-notif/PopupNotif";

/**
 * Flex program landing page component.
 * Showcases the 6-month flexible product management track and features an early enrollment discount popup.
 *
 * @returns {JSX.Element} The rendered Flex landing page.
 */
const Flex = () => {
  useEffect(() => {
    document.title =
      "Flex Program: Become a Product Manager in 6 Months | Enoverlab";
  }, []);

  return (
    <>
      <Header />
      <PopupNotif
        delay={10000}
        title="IMPORTANT NOTICE!!!"
        discountAmount="₦5,000"
        message="Get ₦5,000 discount monthly when you sign up atleast 1 month before the class begins."
        ctas={[
          {
            text: "Online flex Discount",
            to: "https://paystack.shop/pay/flex-dis-online",
            variant: "primary",
          },
          {
            text: "Hybrid flex Discount",
            to: "https://paystack.shop/pay/flex-dis-hybrid",
            variant: "secondary",
          },
        ]}
      />
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
