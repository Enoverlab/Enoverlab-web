import React from 'react'
import styled from 'styled-components'
import testimonial1 from '../../assets/sales/testimonial1.png'
import testimonial2 from '../../assets/sales/testimonial2.png'
import testimonial3 from '../../assets/sales/testimonial3.png'
import testimonial4 from '../../assets/sales/testimonial4.png'
import testimonial5 from '../../assets/sales/testimonial5.png'
import testimonial6 from '../../assets/sales/testimonial6.png'
import testimonial8 from '../../assets/sales/testimonial8.png'
const SectionSeventeen = () => {
  return (
    <StyledSectionSeventeen>
        <div className="head-text">
            <h4>
            What are people like you saying about Enoverlab?
            </h4>
        </div>
        <div className="section-seventeen-container">
            <div className="image-box">
                <img src={testimonial1} alt=""/>
                <img src={testimonial4} alt=""/>
            </div>
            <div className="image-box">
            <img src={testimonial2} alt=""/>
                
                <img src={testimonial5} alt=""/>
            </div>
            <div className="image-box">
            <img src={testimonial3} alt=""/>    
                <img src={testimonial6} alt=""/>
                <img src={testimonial8} alt=""/>
            </div>
        </div>
    </StyledSectionSeventeen>
  )
}

export default SectionSeventeen

const StyledSectionSeventeen = styled.div`
    .head-text{
        display: flex;
        justify-content: center;
        padding: 2.9375rem 5%;
        @media (max-width: 768px) {
            padding: 2.2375rem 3%;
        }
        h4{
            font-size: 63px;
            line-height: 83.79px;
            max-width: 70%;
            text-align: center;
            color: #0046FF;
            @media (max-width: 768px) {
                font-size:24px;
                line-height: 32px;
                max-width: 100%;
            }
        }
    }
    .section-seventeen-container{
        display: flex;
        justify-content: space-between;
        padding: 0 5%;
        @media (max-width: 768px) {
            flex-direction: column;
        }
        .image-box{
            display: flex;
            flex-direction: column;
            row-gap: 1.5rem;
            max-width: 30%;
            @media (max-width: 768px) {
                max-width: 100%;

            }
            img{
                width: 100%;
                height: auto;
                object-fit: contain;
            }
        }

    }
`