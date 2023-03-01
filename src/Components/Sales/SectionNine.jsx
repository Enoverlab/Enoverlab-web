import React from 'react'
import styled from 'styled-components'
const SectionNine = () => {
  return (
    <StyledSectionNine>
        <div className="section-nine-container">
        <h5>
        You see,
        </h5>
        <p>
Before I started teaching/training people Product Management,
</p>

<p>
I remember in May 2021, when I guided a former GTBank staff who relocated from Nigeria to Canada over a Period of 2 months and he got a Product manager role in Canada a month later.
</p>

<p>
It was at that moment I knew I needed to Impact more lives and I shouldn't keep this valuable PM knowledge all to myself.
</p>

<p>
In that period,<span> Enoverlab Institute </span> was born.
 </p>

<p>
And just in 2022 alone, we trained over 140 Professionals like you to become Product Managers.
</p>

<p>
82 of them are <span> currently </span> working in different Product Manager roles for companies all over the world
</p>

<p>
Like the UK, US, Germany, Turkey, Canada, Qatar and Nigeria.
</p>

<p>
While 28 of them are currently undergoing Product Management Internship. 
</p>

        </div>
    </StyledSectionNine>
  )
}

export default SectionNine

const StyledSectionNine = styled.div`
 .section-nine-container{
        padding: 2.9375rem 20% 2.9rem 5%;
        background: #202020;
        @media (max-width: 768px){
            padding: 2.5rem 5%;
        }
        h5{
            font-size:28px;
            font-weight: 600;
            color: #84A6FF;
            margin-bottom: 2rem;
            @media (max-width: 768px){
                font-size: 1.25rem;
                line-height: 1.875rem;
                margin-bottom: 1rem;
            }
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