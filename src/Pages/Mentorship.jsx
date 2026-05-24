import React, { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MentorshipHero from "../Components/mentorship/MentorshipHero";
import MentorshipWhy from "../Components/mentorship/MentorshipWhy";
import MentorshipMentors from "../Components/mentorship/MentorshipMentors";
import MentorshipComparison from "../Components/mentorship/MentorshipComparison";
import MentorshipCta from "../Components/mentorship/MentorshipCta";

const InterFontLink = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400..700;1,600&display=swap');
`;

const Mentorship = () => {
  useEffect(() => {
    document.title = "1-on-1 Mentorship | Enoverlab";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <InterFontLink />
      <StyledPageBg>
        <Header />
        <main>
          <MentorshipHero />
          <MentorshipWhy />
          <MentorshipMentors />
          <MentorshipComparison />
          <MentorshipCta />
        </main>
        <Footer p="5rem 9.6rem 0 9.6rem" />
      </StyledPageBg>
    </>
  );
};

export default Mentorship;

const StyledPageBg = styled.div`
  min-height: 100vh;
  background: #fbfbfb;

  main section:first-child {
    background: #ffffff;
  }
`;
