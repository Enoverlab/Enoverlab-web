import React from "react";
import styled from "styled-components";
import { theme } from "../../Utils/Theme";
import { P } from "../../Utils/styled/Typograpyhy";

const SuccessCard = ({ notes, flag, name, avatar, role }) => {
  return (
    <StyledSuccessCard>
      <div className="success-card-container">
        <div className="success-card-profile">
          <div className="success-card-img">
            <img src={avatar} alt="" />
          </div>
          <div className="success-card-text">
            <P
              fontSize="2rem"
              textAlign="left"
              color="var(--Title-Text)"
              mdfw={700}
              display="flex"
              align="center"
              gap="10px"
            >
              {name} <img src={flag} alt="" />
            </P>
            <P
              fontSize="1rem"
              textAlign="left"
              color={theme.color.dark}
              mobileFontSize="1rem"
            >
              {role}
            </P>
          </div>
        </div>
        <div className="success-card-text">
          <P
            fontWeight={300}
            fontSize="1rem"
            textAlign="left"
            lineHeight="1.8rem"
            color={theme.color.dark}
            mobileFontSize="1rem"
          >
            {notes}
          </P>
        </div>
      </div>
    </StyledSuccessCard>
  );
};

export default SuccessCard;

const StyledSuccessCard = styled.div`
  .success-card-container {
    background-color: ${theme.color.light};
    padding: 4rem 3.2rem;
    width:100%;
    max-width: 400px;
    border-radius: 16px 0px;
    border: 1px solid rgba(188, 188, 188, 0.50);
    background: var(--white, #FFF);
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.04);
    height: 30.6rem;

    @media (min-width: 1024px) {
      /* margin-bottom: 1rem;
      padding: 1rem; */
    }

    /* &:hover{
                box-shadow: 5px 4px 0px 1px rgba(0,0,0,0.96);
                -webkit-box-shadow: 5px 4px 0px 1px rgba(0,0,0,0.96);
                -moz-box-shadow: 5px 4px 0px 1px rgba(0,0,0,0.96);
            transition: box-shadow 0.3s ease-in-out;
            }
        */
    .success-card-profile {
      display: flex;
      align-items: center;
      column-gap: 0.6875rem;
      margin-bottom: 1rem;
      .success-card-img {
        width: 5.2rem;
        height: 5.2rem;
        border-radius: 50%;
        overflow: hidden;
        border: 1px solid ${theme.color.primary};

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
`;
