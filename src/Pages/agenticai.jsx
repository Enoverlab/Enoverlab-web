import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LoadingScreen2 from "../Components/LoadingScreen2";
import AgenticHero from "../Components/agenticai/AgenticHero";
import AgenticHighlights from "../Components/agenticai/AgenticHighlights";
import AgenticPriceBanner from "../Components/agenticai/AgenticPriceBanner";
import AgenticProgramEntails from "../Components/agenticai/AgenticProgramEntails";
import AgenticTools from "../Components/agenticai/AgenticTools";
import AgenticInstructors from "../Components/agenticai/AgenticInstructors";
import AgenticProgramGoals from "../Components/agenticai/AgenticProgramGoals";
import AgenticFinalCta from "../Components/agenticai/AgenticFinalCta";

const AgenticAi = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.classList.remove("bodyStiff");
  }, [loading]);

  return (
    <div>
      {loading ? (
        <LoadingScreen2 />
      ) : (
        <div>
          <Header />
          <AgenticHero />
          <AgenticHighlights />
          <AgenticPriceBanner />
          <AgenticProgramEntails />
          <AgenticTools />
          <AgenticInstructors />
          <AgenticProgramGoals />
          <AgenticFinalCta />
          <Footer p="5rem 9.6rem 0 9.6rem" />
        </div>
      )}
    </div>
  );
};

export default AgenticAi;
