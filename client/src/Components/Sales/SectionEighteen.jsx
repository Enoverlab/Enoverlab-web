import React from 'react'
import styled from 'styled-components'

const SectionEighteen = () => {
  return (
    <StyledSectionEighteen>
        <div className="head-text">
          <p className="blue-bold">  
        FAQS
        </p>

        <ul>
            <li>
                <span>
Can I pay in Installments?</span> Yes, you can pay in two installment
</li>
<li>
    <span>
Is it an Online training?</span> Yes it's an online training where you have an Instructor to guide you.
 </li>
<li>
    <span>
Do you have onsite training?</span> Yes, our training center is at Lekki phase 1
</li>
<li>
    <span>
Is it a recorded training?</span> Yes our trainings are recorded for people who may have network issues or are not able to join class
</li>
<li>
    <span>
Does my age matter?</span> No, as long as you're Not 60 yet, you can learn it.
</li>
</ul>
<p className="blue-bold">
Click the link below to get started Now!
</p>

<p className="blue-bold">
[Link]
</p>

        </div>
    </StyledSectionEighteen>
  )
}

export default SectionEighteen

const StyledSectionEighteen = styled.div`
     padding: 2.9375rem 20% 2.9rem 5%;
     background: #FFF; 
     @media (max-width: 768px) {
         padding: 2.5rem 5%;
     }
     p{
            color: #000000;
            font-size: 24px;
            line-height: 2.875rem;
            margin-bottom: 2rem;
            @media (max-width: 768px){
                font-size: .75rem;
                line-height: .945rem;
            }
            span{
                font-size:1.5rem;
                font-weight: 600;

                @media (max-width: 768px){
                    font-size: .875rem;
                }
            }
        }
    .blue-bold{
        color: #0046FF;
        font-weight: 600;
    }
    ul{
        li{
            margin-bottom: 1rem;
            font-size: 24px;
            line-height: 1.875rem;
            span{
                font-weight: 600;
            }
            @media (max-width: 768px){
                font-size: .75rem;
                line-height: .945rem;

            }
        }
    }

`