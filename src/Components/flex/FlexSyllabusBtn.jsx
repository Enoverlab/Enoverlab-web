import React from "react";
import styled from "styled-components";
import FlexBtn from "./FlexBtn";
import { flexPricing } from "./flexData";
import { flexColors } from "./flexTheme";

/**
 * Renders nothing until flexPricing.syllabusLink is set, so no dead button ships.
 * Which breakpoint shows it is left to the parent via `className`.
 */
const FlexSyllabusBtn = ({ className }) => {
  if (!flexPricing.syllabusLink) return null;

  return (
    <StyledSyllabus className={className}>
      <FlexBtn
        to={flexPricing.syllabusLink}
        bg={flexColors.tintSoft}
        color={flexColors.navy}
      >
        View Syllabus
      </FlexBtn>
    </StyledSyllabus>
  );
};

export default FlexSyllabusBtn;

/* Wrapper selector outranks FlexBtn's own class, so these sizes win over "md". */
const StyledSyllabus = styled.div`
  a {
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    padding: 1.4rem 3.6rem;
  }
`;
