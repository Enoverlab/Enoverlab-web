import React from "react";
import styled from "styled-components";
import acquilaImage from '../../assets/sales/acquilaSales.png'
const listData = [
  "You do NOT require the knowledge of coding to transition Into Product Management.",
  "Product Management is NOT Project Management",
  " You do NOT have to come from a technical background to do Product Management",
  "Product Management is NOT for special people with special skills",
];
const SectionSeven = () => {
  return (
    <StyledSectionSeven>
      <div className="section-seven-container">
        <p>
          This simply means I have met the International requirement and
          standard to join the most recognised body of product managers globally
          and I have access to rights and privileges ascribed to AIPMM Certified
          Product Managers globally..
        </p>

        <p>
          <span>What does that mean for you?</span>
        </p>

        <p>
          Well, it means I am in the best position to guide you through one of
          the best money making Tech skills you’d ever come across today.
        </p>

        <p>
          Enoverlab and I have helped hundreds of Professionals like you to
          transition Into Tech and also get Tech roles{" "}
          <span>successfully </span>
        </p>
        <p>
          Right now, <span>70%</span> of our trained product managers now work
          in both local and International companies.
        </p>
        <div className="section-box">
            <p>
                <span>
                An example is Aquila,
                </span>
            </p>
            <div className="image-container">
                <img src={acquilaImage} alt=""/>
            </div>
        </div>

        <div className="skill">
          <p className="text-1">
            <span>
            The Money making Tech skill that requires zero coding knowledge is
            known as
            </span>
          </p>
          <h3>Product Management(PM)</h3>
          <p>
            It is one of the highest paying and In demand Tech roles anyone
            Professional can tap into today.
          </p>
          <p>
            Now, before I tell you what Product Management is, I need to tell
            you what Product Management is NOT
          </p>

          <div>
            <ul  className="list-grid">
                {
                    listData.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
          </div>
        </div>
      </div>
    </StyledSectionSeven>
  );
};

export default SectionSeven;

const StyledSectionSeven = styled.div`
  .section-seven-container {
    padding: 2.9375rem 20% 2.9rem 5%;
    background: #fff;
    @media (max-width: 768px) {
      padding: 2.5rem 5%;
    }

    p {
      color: #000000;
      font-size: 20px;
      line-height: 1.875rem;
      margin-bottom: 2rem;
      @media (max-width: 768px) {
        font-size: 0.75rem;
        line-height: 0.945rem;
      }
      span {
        font-size: 1.5rem;
        font-weight: 600;

        @media (max-width: 768px) {
          font-size: 0.875rem;
        }
      }
    }
    h3 {
      font-size: 2.5rem;
      font-weight: 600;
      line-height: 3.6875rem;
      color: #0046ff;
      /* margin-top: 46px; */
      margin-bottom: 30px;
      text-decoration: underline;
      @media (max-width: 768px) {
        font-size: 1.25rem;
        line-height: 2.1875rem;
      }
    }
    .skill{
        .text-1{
            margin-bottom: 0.5rem !important;
        }
        .list-grid{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-width: auto;
            grid-column-gap: 3.75rem;
            grid-row-gap: 1.875rem;
            width: 100%;
            font-size: 1rem;

            @media (max-width: 768px) {
                grid-template-columns: repeat(1, 1fr);
                font-size: .625rem;
            }
        }
    }
    .section-box{
        display: flex;
        padding: 2.5rem 0;
        column-gap: 3.8125rem;
        @media (max-width: 768px) {
            flex-direction: column;
            padding: 1rem 0;
        }
        .image-container{
         max-width: 544px;
         height: auto;
         img{
                width: 100%;
                height: 100%;
                object-fit: contain;
         }
        }
    }
  }
`;
