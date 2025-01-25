import React from 'react'
import styled from 'styled-components'
const SectionFive = () => {
  return (
    <StyledSectionFive>
        <div className="section-five-container">
            <p>
        Truth be told, coming from a place of living from hand to mouth and off people despite the fact that I was working…
        </p>

<p>
Added with the responsibility of being the first child in a family of six without a Dad,
</p>

<p>
    <span>
I know what being really broke is.
</span>
</p>

<p>
You may NOT even be broke like I was, but I'm sure you want to make more money than you're doing right now
</p>

<p>
And you want to be able to do so from your comfort zone and still be in charge of your time.
</p>

<p>
    <span>
By now, you may be thinking…
</span>
</p>

<h3>
What is this Tech Skill that requires no knowledge of coding and How can I start getting International Tech roles too?
</h3>

<p>
But before I go fully into that discussion in your mind,
</p>

<p>
    <span>
Let me introduce myself quickly…
</span>
</p>

<p>
My name is Olabanji Ewenla, I am a Lead Product Manager, Co-founder of Enoverlab and the Author of one of the most viral Tech book titled <span>"The Blood Money in Tech"</span>
</p>
        </div>
    </StyledSectionFive>
  )
}

export default SectionFive

const StyledSectionFive = styled.div`
    .section-five-container{
        padding: 2.9375rem 20% 2.9rem 5%;
        background: #FFF;
        @media (max-width: 768px){
            padding: 2.5rem 5%;
        }

        p{
            color: #000000;
            font-size: 20px;
            line-height: 1.875rem;
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
        h3{
            font-size: 2.5rem;
            font-weight: 600;
            line-height: 3.6875rem;
            color:#0046FF;
            margin-top: 46px;
            margin-bottom: 30px;
            @media (max-width: 768px){
                font-size:1.25rem;
                line-height: 2.1875rem;
                
            }
        }
    }
`