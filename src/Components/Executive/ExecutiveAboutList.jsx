import React from 'react'
import styled from 'styled-components'
import check from '../../assets/darkMark.svg'
import { theme } from '../../Utils/Theme'
import { P } from '../../Utils/Typograpyhy'
import { AiOutlineCheck } from 'react-icons/ai'
const ExecutiveAboutList = ({listText, key}) => {
  return (
    <StyledExecutiveAboutList key={key}>
        <div className="executive-about-list-container">
          <div className="check-container">
            <AiOutlineCheck className='check-icon' />
          </div>
          <div className="list-text">
            <P lineHeight="2.0625rem" fontSIze="1.375rem" color="#FFFFFF" textAlign="left" mobileFontSize="0.8rem">{listText}</P>
          </div>
        </div>
    </StyledExecutiveAboutList>
  )
}

export default ExecutiveAboutList

export const StyledExecutiveAboutList = styled.div`
    .executive-about-list-container{
        display: flex;
        /* align-items: center; */
        column-gap: 0.98125rem;
        margin-bottom: 1rem;
        @media(max-width: 768px){
          margin-bottom: 0.75rem;
          column-gap: 0.53125rem;
        }
        .check-container{
          margin-top: 0.4rem;
          .check-icon{
            font-size: 1.6875rem;
            /* line-height: 2.6625rem; */
            color: ${theme.color.light};

            @media(max-width: 768px){
              font-size: 1rem;
            }
          }
        }
    }
`