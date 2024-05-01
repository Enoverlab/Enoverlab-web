import React from 'react'
import styled from 'styled-components'
import { H3, P } from '../../Utils/styled/Typograpyhy'
import ReasonCard from './ReasonCard'
import { theme } from '../../Utils/Theme'
import { ReasonData } from './ReasonData'
const Reason = () => {
    const [activeDots, setActiveDots] = React.useState(0)
  return (
    <StyledReason>
    <div className="reason-header">
        <H3 color={theme.color.dark} paddingBottom="0.5rem" fontSize="1.5rem" fontWeight="700" mobileFontSize="1.25rem" >
        Why take this Exclusive training?
        </H3>
        <P color={theme.color.dark} fontSize="1rem" fontWeight="400" mobileFontSize="0.75rem">
        7 out of every 10 enoverlab trained PM’s gets employed <br/>
        within 3 months after their training
        </P>
    </div>
    <div className="card-grid">
       {
              ReasonData.map((data, index) => (
                <ReasonCard key={index} image={data.image} title={data.title} description={data.description} 
                onClick={() => {setActiveDots(index)}}
                onMouseEnter={() => {setActiveDots(index)}}
                />
              ))
       }
    </div>
    {/* dots */}
    <div className="dots">   
    {
        ReasonData.map((data, index) => (
            <div className={
                activeDots === index ? "dot active" : "dot"
            }
            onMouseEnter={() => {
                setActiveDots(index)
            }}
            onClick={() => {
                setActiveDots(index)
            }}
            key={index}></div>
        ))
    }
     </div>
    </StyledReason>
  )
}

export default Reason

const StyledReason = styled.div`
    padding: 2% 0% 5% 0%;
    @media screen and (max-width: 768px){
        padding: 2% 0% 15% 0%;
    }
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
    .dots{
        display: none;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin-top: 2rem;
        
        @media (max-width: 768px) {
            display: flex;
        }

        .dot{
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            background-color: #C4C4C4;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            &:hover{
                background-color: #000;
            }
        }
        .active{
            background-color: #000;
        }
    }

`