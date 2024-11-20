import React from "react";
import styled from "styled-components";

import topRightBg from "../../assets/resources/topRightBg.svg";
import bottomLeftBg from "../../assets/resources/bottomLeftBg.svg";
import { H4, P } from "../../Utils/styled/Typograpyhy";
import { BookData } from "./BookData";
import BookCard from "./BookCard";
const Ebooks = () => {
  return (
    <StyledEbooks id="ebooks"> 
      <div className="container">
        <div className="topbgContainer">
          <img src={topRightBg} alt="top right bg" />
        </div>
        <div className="bottombgContainer">
          <img src={bottomLeftBg} alt="bottom left bg" />
        </div>
        <div className="container-head">
          <H4 textAlign="center" color="#111111" fontSize="2.25rem" mobileFontSize="1.8rem" mobileLineHeight="2rem">
          Free product management ebooks
          </H4>
          <P textAlign="center" fontSize="1.25rem" color="#4B4B4B" mobileFontSize="1rem">
          Download now and expand your product management knowledge
          </P>
        </div>
        <div className="container-body">
          {
            BookData.map((book, index) => {
              return (
                <BookCard
                  imgUrl={book.imgUrl}
                  key={index}
                  bookUrl={book.bookUrl}
                />
              );
            })
          }
        </div>
      </div>
    </StyledEbooks>
  );
};

export default Ebooks;

const StyledEbooks = styled.div`
  background-color: #f5fcff;
  .container {
    padding: 8.0625rem 6.25rem 18.970625rem 6.25rem;
    position: relative;
    @media (max-width: 768px) {
      padding: 4.0625rem 1.25rem;
    }
    .topbgContainer {
      position: absolute;
      top: 0;
      right: 0;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .bottombgContainer {
      position: absolute;
      bottom: 0;
      left: 0;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .container-head {
      position: relative;
      z-index: 2;
      @media (max-width: 768px) {
        /* display: none; */
      }
    }
    .container-body {
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 5.095625rem;
      margin-top: 2rem;
      padding: 2rem 6.25rem;

      

      @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        padding: 2rem 1.25rem;
      }
    }
  }
`;
