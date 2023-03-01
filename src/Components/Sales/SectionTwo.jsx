import React from "react";
import styled from "styled-components";
const SectionTwo = () => {
  return (
    <StyledSectionTwo>
      <div className="section-two-container">
        <p>
          Few years before I knew about the world of Tech, I had gotten my hands
          dirty by doing many kinds of Jobs. 
        </p>
        <p>
          Is it photography, Networking marketing, social media management,
          music …
        </p>

        <p>
          …and the funniest one was when I even Niched down to become a
        <span>  fertility consultant </span> for women in Nigeria 
        </p>

        <p><span>(Without studying any biological science course in school)</span></p>

        <p>
          Now, I went from doing all of these, to Now working remotely for a
          company in Texas, US and even helping other Professionals like you get
          International Tech roles.
        </p>
      </div>
    </StyledSectionTwo>
  );
};

export default SectionTwo;

const StyledSectionTwo = styled.div`
    .section-two-container{
        padding: 2.9375rem 20% 2.9rem 5%;
        background: #202020;
        @media (max-width: 768px){
            padding: 2.5rem 5%;
        }
        p{
            color: #FFFFFF;
            font-size: 1.25rem;
            line-height: 1.875rem;
            margin-bottom: 2rem;
            @media (max-width: 768px){
                font-size: .75rem;
                line-height: .945rem;

            }
            span{
                font-size: 1.5rem;
                color: #84A6FF;
                @media (max-width: 768px){
                    font-size: .875rem;
                }
            }
        }
    }

`;
