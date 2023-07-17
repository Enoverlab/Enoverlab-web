import React from 'react'
import styled from 'styled-components'
import Marquee from "react-fast-marquee";
const CertiMarquee = () => {
  return (
    <StyledCerti>
    <Marquee>
        <h5 className="cert-text">
        We are accredited by the American Council of Training and Development (ACTD)
        </h5>
       
    
    </Marquee>
    </StyledCerti>
  )
}

export default CertiMarquee

const StyledCerti = styled.div`
    padding: 2rem 0;
    .cert-text{
        color: #0046FF;
        font-size: 25px;
        font-weight: 500;

        @media (max-width: 768px) {
            font-size: 14px;
      }
    }
`