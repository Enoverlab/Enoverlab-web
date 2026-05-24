import React, { useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import HireHero from "../Components/hire/HireHero";
import HireCompanyLogos from "../Components/hire/HireCompanyLogos";
import HireWhy from "../Components/hire/HireWhy";
import HireRoadmap from "../Components/hire/HireRoadmap";
import HireRequestForm from "../Components/hire/HireRequestForm";
import HireTestimonials from "../Components/hire/HireTestimonials";

const Hire = () => {
  useEffect(() => {
    document.title = "Hire vetted Product Managers | Enoverlab";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <main>
        <HireHero />
        <HireCompanyLogos />
        <HireWhy />
        <HireRoadmap />
        <HireRequestForm />
        <HireTestimonials />
      </main>
      <Footer p="5rem 9.6rem 0 9.6rem" />
    </div>
  );
};

export default Hire;
