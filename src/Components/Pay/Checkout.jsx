import React from "react";
import styled from "styled-components";
import { H3, H4, P } from "../../Utils/Typograpyhy";
import enoverlogo from "../../assets/enovLogo.png";
import { PrimaryButton, SecondaryButton } from "../../Utils/Buttons";
import aellaLogo from "../../assets/aellalogo.png";
import { FaArrowLeft} from "react-icons/fa";
const Checkout = () => {
  return (
    <StyledCheckout>
      <div className="checkout-container">
        <div className="navigation">
          <div className="arrow-back">
            <FaArrowLeft className="arrow" />
            <P color="#0F2A65" fontSize="1rem" fontWeight="300" textAlign="left">
              Back
            </P>
          </div>
          <H3 paddingBottom="1rem" textAlign="left" color="#333333" fontSize="1.5rem">
          Select Payment Method
          </H3>
          <P  color="#0F2A65" fontSize="1rem" fontWeight="300" textAlign="left">
          You selected advanced program choose a payment method to proceed
          </P>
        </div>
        <div className="checkout-box">
          <div className="order-summary">
            <div className="head-container">
              <H3 textAlign="left" color="#333333" fontSize="1.5rem">
                Order Summary
              </H3>
            </div>
            <div className="order-container">
              <H4
                textAlign="left"
                fontWeight={300}
                fontSize={"1.25rem"}
                color="#4B4B4B"
              >
                Program
              </H4>
              <H4
                fontWeight={300}
                fontSize={"1.25rem"}
                color="#4B4B4B"
                textAlign="left"
              >
                Advanced Program
              </H4>
            </div>
            <div className="order-container">
              <H4
                fontWeight={300}
                fontSize={"1.25rem"}
                color="#4B4B4B"
                textAlign="left"
              >
                Discount
              </H4>
              <H4
                fontWeight={300}
                fontSize={"1.25rem"}
                color="#4B4B4B"
                textAlign="left"
              >
                5%
              </H4>
            </div>
            <div className="order-container">
              <H4
                fontWeight={300}
                fontSize={"1.25rem"}
                color="#4B4B4B"
                textAlign="left"
              >
                VAT
              </H4>
              <H4
                fontWeight={300}
                fontSize={"1.25rem"}
                color="#4B4B4B"
                textAlign="left"
              >
                ₦0.00
              </H4>
            </div>
            <div className="order-container">
              <H4
                textAlign="left"
                fontWeight={300}
                fontSize={"1.25rem"}
                color="#4B4B4B"
              >
                Sub-total
              </H4>
              <H4
                textAlign="left"
                fontWeight={300}
                fontSize={"1.25rem"}
                color="#4B4B4B"
              >
                ₦120,000
              </H4>
            </div>
            <div className="total-container">
              <H4
                textAlign="left"
                fontWeight={500}
                fontSize={"1.5rem"}
                color="#4B4B4B"
              >
                Total Amount
              </H4>
              <H4
                textAlign="left"
                fontWeight={500}
                fontSize={"1.5rem"}
                color="#4B4B4B"
              >
                ₦120,000
              </H4>
            </div>
          </div>
          <div className="payment-option">
            <div className="head-container">
              <H3 textAlign="left" color="#333333" fontSize="1.5rem">
                Payment Method
              </H3>
            </div>
            <div className="payment-container">
              <div className="option-container">
                <div className="option-details">
                  <div className="option-img-container">
                    <div className="option-img">
                      <img src={enoverlogo} alt="enover logo" />
                    </div>
                    <div className="option-text">
                      <H4
                        fontWeight={300}
                        fontSize={"1.125rem"}
                        color="#4B4B4B"
                        textAlign="left"
                      >
                        Pay tuition now
                      </H4>
                    </div>
                  </div>

                  <div className="optionButton">
                    <SecondaryButton buttText="Pay tuition now" to="/" />
                  </div>
                </div>
              </div>
              <div className="option-container">
                <div className="option-details">
                  <div className="option-img-container">
                    <div className="option-img aella-container">
                      <img src={aellaLogo} alt="aella logo" />
                    </div>
                    <div className="option-text">
                      <H4
                        fontWeight={300}
                        fontSize={"1.125rem"}
                        color="#4B4B4B"
                        textAlign="left"
                      >
                        Learn Now, pay later
                      </H4>
                    </div>
                  </div>
                  <div className="optionButton">
                    <PrimaryButton buttText="Learn Now, pay later" to="/" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledCheckout>
  );
};

export default Checkout;

const StyledCheckout = styled.div`
  .checkout-container {
    padding: 2rem 10% 5rem 10%;
    .navigation{
        padding: 0.75rem 0 3.75rem 0;
        .arrow-back{
            display: flex;
            align-items: center;
            margin-bottom: 1.5rem;
            column-gap: 0.4rem;
            .arrow{
                font-size: 1rem;
            }
        }
    }
    .checkout-box {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
      .order-summary,
      .payment-option {
        background: #f5fcff;
        border-radius: 10px;
        padding: 3rem 2.5rem 4.625rem 2.55rem;
        border: 1px solid #E2E2E2;
        .head-container {
          margin-bottom: 2.9375rem;
        }
      }
      .order-container {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.6875rem;
      }
      .total-container {
        display: flex;
        justify-content: space-between;
        margin-top: 2.9375rem;
      }
      .payment-container {
        display: flex;
        flex-direction: column;
        gap: 9.3125rem;
        .option-container {
          .option-details {
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            .option-img {
              max-width: 10.125rem;

              img {
                width: 100%;
                object-fit: contain;
              }
              .option-text {
                margin-top: 0.2rem;
              }
            }
            .aella-container {
              max-width: 4.25rem;
            }
          }
        }
      }
    }
  }
`;
