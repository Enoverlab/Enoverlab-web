import React from "react";
import styled from "styled-components";
import leanProduct from "../../assets/resources/leanProduct.png";
import pmToolkit from "../../assets/resources/pmToolKit.png";
import productLead from "../../assets/resources/productLeadership.png";
import { H4, P } from "../../Utils/Typograpyhy";
const Ebooks = () => {
  return (
    <StyledEbooks>
      <div className="container">
        <div className="container-head">
          <H4 textAlign="left" color="#111111" fontSize="2.25rem">
            ebooks
          </H4>
          <P textAlign="left" fontSize="1.25rem" color="#4B4B4B">
            Discover quality ebooks in product management
          </P>
        </div>
        <div className="container-body">
          <div className="image-container">
            <img src={leanProduct} alt="lean product" />
          </div>
          <div className="image-container">
            <img src={pmToolkit} alt="pm toolkit" />
          </div>
          <div className="image-container">
            <img src={productLead} alt="product leadership" />
          </div>
          <div className="image-container">
            <img src={leanProduct} alt="lean product" />
          </div>
          <div className="image-container">
            <img src={pmToolkit} alt="pm toolkit" />
          </div>
          <div className="image-container">
            <img src={productLead} alt="product leadership" />
          </div>
        </div>
      </div>
    </StyledEbooks>
  );
};

export default Ebooks;

const StyledEbooks = styled.div`
  background-color: #f5fcff;
  .container {
    padding: 8.0625rem 6.25rem;
    @media (max-width: 768px) {
      padding: 4.0625rem 1.25rem;
    }
    .container-head {
      H4 {
        font-size: 2.25rem;
      }
      @media (max-width: 768px) {
        display: none;
      }
    }
    .container-body {
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
