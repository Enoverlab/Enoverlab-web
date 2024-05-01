import React from 'react'
import styled from 'styled-components'
import {H1,  H4} from '../../Utils/styled/Typograpyhy'
import AboutList from './AboutList'
import laptop from '../../assets/corporate/laptop.png'
const ListData = [
    {
        listText: "Remote,hybrid or on-site training"
    },
    {
        listText: "Training your product team with specific skill set to take your products to the next level"
    },
    {
        listText: "Introducing tools,systems & frameworks that will enhance collaboration within your team products to the next level"
    }
]
const AboutCorporate = () => {
  return (
    <StyledAboutCorporate>
        <div className="container">
         <div className="head-text-container">
         <div className="head-text">
           <H4
           fontWeight="400"
           color='#111111'
          
           >
            what sets us apart
            </H4>
            <H1
            fontSize="2.25rem"
            color="#333333"
            lineHeight="2.91125rem"
            mobileFontSize="1.25rem"
            mobileLineHeight="1.875rem"
            >
            Why this is the only product course 
            you need for your entire team
            </H1>
           </div>
         </div>
        <div className="content">
            <div className="content-container">
                <div className="list-container">
                    <div className="list-header">
                        <H1
                        textAlign="left"
                        fontSize="2rem"
                        color="#333333"
                        fontWeight="700"
                        lineHeight="3rem"
                        mobileFontSize="1.5rem"
                        mobileLineHeight="2.06875rem"
                        >
                        Custom Product management training to suit your company needs
                        </H1>
                    </div>

                  {
                        ListData.map((item,index) => {
                            return <AboutList key={index} listText={item.listText} />
                        }
                        )
                  }
                </div>
                <div className="image-container">
                  <div className="laptop-container">
                    <img src={laptop} alt="" />
                  </div>
                </div>
            </div>
        </div>
        </div>
    </StyledAboutCorporate>
  )
}

export default AboutCorporate


const StyledAboutCorporate = styled.div`
    padding: 5rem 1rem 5rem 6rem;
   background-color: #FFFDF7;
    @media (max-width: 768px) {
        padding: 2rem 1.525rem;
    }
    .container{
       .head-text-container{
        display: flex;
        justify-content: center;
        .head-text{
            max-width: 39.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            align-self: center;

            @media (max-width: 768px) {
                max-width: 100%;
            }
        }
       }

       .content{
        .content-container{
            display: flex;
            column-gap: 6.25rem;
            align-items: center;
            margin-top: 6.125rem;
            @media (max-width: 768px) {
                flex-direction: column;
                margin-top: 3rem;
                gap: 2rem;
            }
            .list-container{
                max-width: 45%;
                @media (max-width: 768px) {
                    max-width: 100%;
                }
                .list-header{
                    margin-bottom: 2.9375rem;
                    @media (max-width: 768px){
                        margin-bottom: 2rem;
                    }
                }
            }
            .image-container{
                .laptop-container{
                    width: 100%;
                    max-width: 42.1225rem;
                    height: 100%;
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }
            }
        }
       }
    }
    }
`