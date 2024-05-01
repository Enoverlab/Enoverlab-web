import React from "react";
import styled from "styled-components";
import { H2, H4 } from "../../Utils/styled/Typograpyhy";
import { alumni } from "../../constants";
import  alumniLine from "../../assets/icon/alumiLine.png"

const Alumni = () => {
  return (
    <StyledAlumni>
      <H2 fs="5.6974vw" mdfs="2.38vw" color="var(--Title-Text)">
        Meet Some of Our Alumni
        </H2>
      <H4 fs="3.27vw" color="var(--Body-Text)" tA="left" mdtA="center">
        Some of the amazing product managers who have trained with us all over
        the world
      </H4>
      <section className="imageGrid" id="alumni">
        {alumni.map((x) => (
          <img src={x} alt="x" />
        ))}
      </section>
    </StyledAlumni>
  );
};

export default Alumni;

const StyledAlumni = styled.div`
  padding: 3rem 3rem;
  text-align: center;
  background: ${alumniLine};
  .imageGrid {
    display: grid;
    margin-top: 4rem;
    grid-template-columns: repeat(2, auto);
    /* place-content: center; */
    column-gap: 0.5rem;
    row-gap: 0.5rem;
    img{
      width : 100%
    }
  }
  @media (min-width: 1024px) {
    padding: 14rem 9.6rem;
    .imageGrid {
      display: grid;
      margin-top: 6.9rem;
      gap: 0;
      grid-template-columns: repeat(5, 1fr);
    }
  }
`;
