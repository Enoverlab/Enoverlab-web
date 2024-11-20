import React from "react";
import Hero from "../Components/Diaspora/Hero";
import Details from "../Components/Diaspora/Details";
import Coaching from "../Components/Diaspora/Coaching";
// import PricingAbout from '../Components/Diaspora/About'
import AboutProg from "../Components/Diaspora/AboutProg";
import Testimonials from '../Components/Pricing/Testi'
import Testimonies from "../Components/Pricing/Testimonies";
import SuccessStories from "../Components/Pricing/SuccessStories";
import Header from "../Components/Diaspora/DiasporaHeader";
import Footer from "../Components/Footer";
// import Placement from "../Components/Diaspora/Placement";
// import Started from '../Components/HomeComponents/Started'
const Diaspora = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutProg />
      <Details />
      <Testimonials/>
      <Coaching />
      {/* <Placement /> */}
      <Testimonies />
      <SuccessStories />
      {/* <PricingAbout/> */}
      {/* <Started /> */}
      <Footer p="5rem 9.6rem 0 9.6rem"/>
    </div>
  );
};

export default Diaspora;
