import React from 'react'
import styled from 'styled-components'
import banjiCert from '../../assets/sales/banjiCert.png'
import banjiImage from '../../assets/sales/banjiImage.png'
import sectionArrow from '../../assets/sales/sectionArrow.png'
const SectionSix = () => {
  return (
    <StyledSectionSix>
        <div className="section-six-container">
            <div className="image-box">
                <h6>
                And this is what I look like:
                </h6>
                <div className="image-container">
                <img src={banjiImage} alt=""/>
                </div>
                <p>
                Before you stare too much, I'm Not just an{" "}
                <span>
                ordinary{" "}
                </span>
                Product Manager,
                </p>
            </div>
            <div className="arrow-container">
                <div className="arrow-image">
                <img src={sectionArrow} alt=""/>
                </div>
            </div>
            <div className="cert-box">
                <div className="cert-image-container">
                    <img src={banjiCert} alt=""/>
                </div>
                <p className="cert-cap">
                I'm also an <span>AIPMM</span> (Association of International Product Marketing and Management) Certified Product Manager,
                </p>
                <p className="proof">
                And here's proof:
                </p>
            </div>
        </div>
    </StyledSectionSix>
  )
}

export default SectionSix

const StyledSectionSix = styled.div`
    .section-six-container{
        padding: 2.9375rem 5%;
        display: flex;
        height: 100%;
        background-color: #202020;
        justify-content: flex-end;
        @media (max-width: 768px) {
            flex-direction: column;
            padding: 2.2375rem 5%;
            row-gap: 19px;
        }
        .image-box{
            width: 30%;
            @media (max-width: 768px) {
                width: 80%;
            }
            h6{
                color: #FFFFFF;
                font-size: 1.25rem;
                font-weight: 1.875rem;
                margin-bottom: 4px;

                @media (max-width: 768px) {
                    font-size: .75rem;
                }
            }
            p{
                color:#FFFFFF;
                font-size: 1rem;
                line-height: 30px;
                @media (max-width: 768px) {
                    font-size: .75rem;
                    line-height: 1.25rem;
                }
                span{
                    color: #84A6FF;
                }
            }
          .image-container{
            height: 36.5rem;
            width: 100%;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
          }
        }
        .arrow-container{
            width: 10%; 
            display: flex;
          
            flex-direction: column;
            justify-content: flex-end;

            @media (max-width: 768px) {
                display: none;
            }
            /* align-items: flex-end; */
            .arrow-image{
                width: 100%;
                height: 20%;
                img{
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
        }
        .cert-box{
            width: 60%;
            height: 410px;
            margin-top: 5rem;

            @media (max-width: 768px) {
                width: 100%;
                margin-top: 0rem;
            }
            .cert-image-container{
                width: 100%;
                height: 100%;
                @media (max-width: 768px){
                    height: 258px;
                }

                img{
                    width: 100%;
                    height: 100%;
                }
            }
            p{
                color: #FFFFFF;
                font-size: 1rem;
                @media (max-width: 768px) {
                    font-size: .75rem;
                    line-height: 1.25rem;
                }
                span{
                    font-weight: 600
                }   

            }
            .proof{
                padding-top: 2rem;
                font-weight: 600;

            }
           
        }
    }
`