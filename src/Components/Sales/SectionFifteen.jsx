import React from 'react'
import styled from 'styled-components'
const SectionFifteen = () => {
  return (
    <StyledSectionFifteen>
        <div className="section-fifteen-container">
            <p>
                <span>
        Does this sound like what you want for yourself?
        </span>
        </p>
        <p>
If yes, you have the chance to achieve everything starting from today.
</p>
<p>
    <span>
The truth is,
</span>
</p>

<p>If we decide to charge you N400k to get access to all of these today, it is going to be a steal.</p>

<p>
And No, you're still Not even paying up to N300k to get access to it today
</p>
<p>
Is it N200k? 
</p>
<p>
No, it's way more affordable for you.
</p>
<p>
All you have to do is pay a commitment fee of just <span>N150k</span> to get access to all the benefits listed above and get proper Product Management training.
</p>
<p>
To make this even better, you can split the tuition payment into 2 payments;
</p>
<p>
N80,000 on admission, N70,000 after a month during the training.
</p>

        </div>
    </StyledSectionFifteen>
  )
}

export default SectionFifteen

const StyledSectionFifteen = styled.div`
    .section-fifteen-container{
        padding: 2.9375rem 20% 2.9rem 5%;
        background: #C2EEFF;
        @media (max-width: 768px){
            padding: 2.5rem 5%;
        }
        p{
            color: #000000;
            font-size: 1.25rem;
            line-height: 1.875rem;
            margin-bottom: 2rem;
            @media (max-width: 768px){
                font-size: .75rem;
                line-height: .945rem;

            }
            span{
                font-size: 1.5rem;
                font-weight: 600;
                color: #000000;
                @media (max-width: 768px){
                    font-size: .875rem;
                }
            }
        }
    }
`