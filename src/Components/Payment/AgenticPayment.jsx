import React from "react";
import styled from "styled-components";
import { SecondaryButton } from "../../Utils/styled/Buttons";

const AgenticPayment = () => {
  return (
    <StyledPlans>
      <header>Payment Plans</header>

      <section className="online">
        <h2>Agentic AI Training Payment</h2>
        <div className="Option" data-aos="fade-right">
          <div className="details" data-aos="fade-right">
            <h4>One-Time Payment Of</h4>
            <p>
              ₦800,000
              <span> Full Payment</span>
            </p>
            <div className="cta">
              <SecondaryButton Text="Pay Now" to="https://paystack.shop/pay/agenticaifullpay" target="_blank" />
            </div>
          </div>

          <div className="hr">
            <hr />
          </div>

          <div className="details" data-aos="fade-right">
            <h4>Full USD Payment</h4>
            <p>
              $599
              <span> Full Payment</span>
            </p>
            <div className="cta">
              <SecondaryButton Text="Pay Now" to="https://paystack.shop/pay/agenticai-usd" target="_blank" />
            </div>
          </div>

          <div className="hr">
            <hr />
          </div>

          <div className="details" data-aos="fade-up">
            <h4>First Payment Of</h4>
            <p>
              ₦500,000
              <span> Initial Payment</span>
            </p>
            <div className="cta">
              <SecondaryButton Text="Pay Now" to="https://paystack.shop/pay/agenticaifirstpayments" target="_blank" />
            </div>
          </div>

          <div className="hr">
            <hr />
          </div>

          <div className="details" data-aos="fade-down">
            <h4>Second Payment Of</h4>
            <p>
              ₦300,000
              <span> Final Payment</span>
            </p>
            <div className="cta">
              <SecondaryButton Text="Pay Now" to="https://paystack.shop/pay/agenticai2ndpayments" target="_blank" />
            </div>
          </div>
        </div>
      </section>

      <section className="otherOptions">
        <h2>Manual Payment Option</h2>
        <div className="breakdown">
          <p className="heading">
            Transfer your tuition fee to the account below and send the receipt of payment to enoverlab@gmail.com with your full
            name, gmail, WhatsApp no, and class you are signing up for.
          </p>
          <div className="details">
            <p>
              Account Name: <span>Enoverlab Limited</span>
            </p>
            <p>
              Account Number: <span>1311450991</span>
            </p>
            <p>
              Bank: <span>Zenith Bank</span>
            </p>
          </div>
        </div>
      </section>
    </StyledPlans>
  );
};

export default AgenticPayment;

const StyledPlans = styled.div`
  padding: 0rem 5.6vw;

  header {
    margin-top: 6rem;
    margin-bottom: 33px;
    color: #00001a;
    font-size: 7.47vw;
    font-weight: 700;
    text-align: center;
  }

  section {
    border-radius: 20px;
    border: 1px solid #0046ff;
    padding: 3.2rem 2rem;
    margin: 2rem 0;

    h2 {
      color: #373737;
      font-weight: 700;
      font-size: 24px;
      margin-bottom: 1.4rem;
    }
  }

  .online .Option {
    padding: 2rem;
    border-radius: 4px;
    background: #e3f5f8;
  }

  .Option {
    .details {
      display: grid;
      color: #373737;

      p {
        font-size: 2rem;
        font-weight: 700;
      }

      span {
        font-size: 1.4rem;
        font-weight: 400;
      }
    }

    hr {
      margin: 2rem 0;
    }
  }

  .cta {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2.4rem;
  }

  .otherOptions {
    color: #3d3d3d;
    margin-bottom: 2rem;

    div.breakdown {
      background-color: #e3f5f9;
      padding: 1rem;
      border-radius: 0.7rem;
      font-size: 3.72vw;

      p.heading {
        line-height: 7vw;
        margin-bottom: 3rem;
      }

      span {
        font-weight: 700;
      }
    }
  }

  @media (min-width: 1024px) {
    padding: 0rem 6.32vw;

    header {
      margin-top: 89px;
      color: #00001a;
      font-size: 3.17vw;
    }

    section {
      padding: 3.2rem 5rem;

      h2 {
        margin-bottom: 3.9rem;
      }
    }

    .online .Option {
      border-radius: 4px;
      padding: 5.3rem 2.5rem;
      background: #e3f5f8;
    }

    .Option {
      .details {
        display: grid;
        grid-template-columns: repeat(3, auto);
        justify-content: space-evenly;
        align-items: center;

        h4 {
          font-size: 2.4rem;
        }

        p {
          font-size: 3.6rem;
          font-weight: 700;
        }

        span {
          font-size: 2rem;
          font-weight: 400;
        }
      }

      .hr {
        padding: 0 5rem;
      }

      hr {
        padding: 0rem 5rem;
        margin: 3.5rem 0;
        border: 2px solid #1a1a1a;
      }
    }

    .cta {
      margin-top: 0.55rem;
      justify-content: end;
    }

    .otherOptions {
      h2 {
        font-size: 3.9rem;
      }

      div.breakdown {
        font-size: 1.65vw;
        padding: 3rem 10rem;

        p.heading {
          line-height: 3vw;
          margin-bottom: 3rem;
        }

        span {
          font-weight: 700;
        }
      }
    }
  }
`;
