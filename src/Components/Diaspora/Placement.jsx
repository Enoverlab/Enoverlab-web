import React from "react";
import styled from "styled-components";
import { H1, P} from "../../Utils/styled/Typograpyhy";
import Place1 from "../../assets/diaspora/place1.svg";
import Place2 from "../../assets/diaspora/place2.svg";
import Place3 from "../../assets/diaspora/place3.svg";

const placeData = [
  {
    title: "Upskill",
    imageName: Place1,
    description:
      "The internship will ensure practical application of academic knowledge, exposure to industry-specific tools and technologies and aid in the development of hands-on skills.",
  },
  {
    title: "Experience Accumulation",
    imageName: Place2,
    description:
      "You will be exposed to real-world application of theoretical concepts, industry practices, protocols and workflows. Also, you get to build a portfolio of tangible accomplishments.",
  },
  {
    title: "Cross-Functional Teams",
    imageName: Place3,
    description:
      "You get integrated into diverse work teams, collaborate with professionals from varied departments and exposure to different work styles and communication methods.",
  },
];

const Placement = () => {
  return (
    <StyledPlacement>
      <div className="placement-container">
        <div className="placement-title">
          <H1 fontSize={"48px"} color="#333" fontWeight={600}
          mobileFontSize="1.875rem"
          >
            8-Week Internship Placement
          </H1>
          <P fontSize={"28px"} fontWeight={500}
            mobileFontSize={"14px"}
           color="#4B4B4B">
            After completing the 10 weeks training, you will be placed in an
            open-source remote internship
          </P>
        </div>
        <div className="place-cards-container">
          {placeData.map((place, index) => (
            <div key={index} class="place-card">
              <img src={place.imageName} alt="" />
              <P
                textAlign="left"
                fontSize="20px"
                fontWeight={600}
                color={"#333"}
                paddingTop="0.5rem"
                
              >
                {place.title}
              </P>
              <P
                className="desctext"
                textAlign="left"
                fontWeight={400}
                fontSize={"20px"}
                color={"#4B4B4B"}
                paddingTop="0.5rem"
                lineHeight="2.25rem"
                mobileFontSize="14px"
                mobileLineHeight="normal"
              >
                {place.description}
              </P>
            </div>
          ))}
        </div>
      </div>
    </StyledPlacement>
  );
};

export default Placement;

const StyledPlacement = styled.div`
  .placement-container {
    padding: 5% 5%;

    .placement-title {
      padding: 0 10%;
      margin-bottom: 5rem;
      @media (max-width: 768px) {
        padding: 0;
        margin-bottom: 2rem;
      }
    }
  }
  .place-cards-container {
    margin-bottom: 3rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      row-gap: 2rem;
    }
  }
  .desctext {
    width: 75%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
