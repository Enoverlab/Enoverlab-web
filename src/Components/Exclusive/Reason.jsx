import React from 'react'
import styled from 'styled-components'
import { H3, P } from '../../Utils/Typograpyhy'
import ReasonCard from './ReasonCard'
import { theme } from '../../Utils/Theme'
import { ReasonData } from './ReasonData'
const Reason = () => {
  return (
    <StyledReason>
    <div className="reason-header">
        <H3 color={theme.color.dark} paddingBottom="0.5rem" fontSize="1.5rem" fontWeight="700" mobileFontSize="1.25rem" >
            Why you should join our exclusive community
        </H3>
        <P color={theme.color.dark} fontSize="1rem" fontWeight="400" mobileFontSize="0.75rem">
            We have a community of product managers who are ready to help you grow your career. Here are some of the reasons why you should join us.
        </P>
    </div>
    <div className="card-grid">
       {
              ReasonData.map((data, index) => (
                <ReasonCard key={index} image={data.image} title={data.title} description={data.description} />
              ))
       }
    </div>
    </StyledReason>
  )
}

export default Reason

const StyledReason = styled.div`
    padding: 2% 0% 5% 0%;

    .reason-header{
        padding: 0 5%;
    }

    .card-grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        padding: 0 5%;
        margin-top: 3rem;


        @media (max-width: 768px) {
            display: flex;
            /* grid-template-columns: repeat(1, 1fr); */
            gap: 1rem;
            padding: 0 1.5rem;
            overflow-y: scroll;

        }
    }
`