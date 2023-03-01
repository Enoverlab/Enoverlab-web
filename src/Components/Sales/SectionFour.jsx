import React from 'react'
import styled from 'styled-components'


const SectionFour = () => {
  return (
    <StyledSectionFour>
          <div className="section-four-header">
                <h1>
                And the Good News is,
                </h1>
        </div>
        <div className="section-four-container">
       <p>
        These companies are now increasingly shifting their focus to creating digital products 
        </p>

        <p>
        And this is why you're <span>heavily in demand</span> if only you have the Tech skill that I'm about to show you in today's <span>"technology-driven world"</span>
        </p>

        <p>
        I remember how I always depended on the 30-50k monthly income that I was getting from my previous jobs
        </p>

        <p>
        And most times, my transport fare for the whole month is already taking more than half of my salary <span>plus</span> no peace of mind from the Jobs.
        </p>


        </div>
    </StyledSectionFour>
  )
}

export default SectionFour

const StyledSectionFour = styled.div`

.section-four-header{
    background: #FFF;
    padding: 2.9375rem 5%;
    color: #0046FF;
    h1{
        font-weight: 500;
        font-size: 2.75rem;

        

        @media screen and (max-width: 768px){
            font-size: 24px;
            line-height: .945rem;
        }
    }
}

 .section-four-container{
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
`