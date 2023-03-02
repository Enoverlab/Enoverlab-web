import React from 'react'
import styled from 'styled-components'

const SectionEleven = () => {
  return (
    <StyledEleven>
        <div className="section-eleven-container">
        <h3>
        Now,
        </h3>
        <h3  className="blue-text">
        Who is Product Management Meant for?
        </h3>
        <div className="list-container">
        <div className="list">
            <ul>
                <li>
                It is for you if you want to <span>start a Tech career….. without coding</span>
                </li>
                <li>It is for you if you love to <span>create</span> and <span>build</span> stuffs</li>

                <li>It is for you if you like to L<span>solve problems</span> for people</li>
                <li>
                It is for you if you're <span>tired of your current</span> Job and <span>want to switch careers</span>
                </li>
            </ul>
        </div>
        <div className="list" >
            <ul>
            <li>
            It is for you if you want to <span>prepare yourself for the future of work</span>
            </li>

            <li>
            It is for you if you want to <span>make plenty of money </span>
            </li>

            <li>
            It is for you if you want to <span>work remotely or relocate from Nigeria</span> 
            </li>
            </ul>
        </div>
        </div>
        </div>
    </StyledEleven>
  )
}

export default SectionEleven


const StyledEleven = styled.div`
    .section-eleven-container{
        padding: 2.9375rem 5% 2.9rem 5%;
        background-color:#C2EEFF;
        h3{
            font-size: 2.5rem;
            font-weight: 600;
            margin-bottom: 2rem;
            @media (max-width: 768px) {
                font-size: 1.5rem;
                margin-bottom: 1rem;
            }
        }
        .blue-text{
            color: #0046FF;
        }
    .list-container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;        
        @media (max-width: 768px) {
            grid-template-columns: 1fr;

        }
    }
    .list{
        ul{
            li{
                margin-bottom: 2rem;
                font-size: 1rem;

                span{
                    font-weight: 600; 
                }
                @media (max-width: 768px) {
                    font-size: 0.75rem;
                    margin-bottom: 1rem;
                }
            }
        }
    }
}
`