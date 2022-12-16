import React from 'react'
import styled from 'styled-components'
import {AiOutlineCheck} from 'react-icons/ai'
const AboutList = ({listText}) => {
  return (
    <StyledAboutList>
        <div className="container">
            <div className="list">
                <div className="list-item">
                  <div className="icon-container">
                  <AiOutlineCheck className='icon'/>
                  </div>
                 
                   <div className="text-container">
                   <p>{listText}</p>
                   </div>
                </div>
            </div>
        </div>
    </StyledAboutList>
  )
}

export default AboutList

const StyledAboutList = styled.div`
  .container{
    .list{
      .list-item{
        display: flex;
        margin-bottom: 1.5rem;
        column-gap: 1.75rem;
        @media (max-width: 768px) {
          column-gap: 1.25rem;
        }
       .icon-container{
        padding-top: 0.325rem;
        .icon{
          font-size: 1.6875rem;
          font-weight: 700;

          @media (max-width: 768px) {
            font-size: 1.25rem;
          }
        }
       }
      .text-container{
        p{
          font-size: 1.375rem;
          color: #4B4B4B;
          line-height: 2.0625rem;
          font-weight: 300;
          @media (max-width: 768px) {
            font-size: 1rem;
            line-height: 1.5rem;
          }
      }
      }
    }
  }
  }
`