import React from 'react'
import Figma from "../../assets/figma.png";
import googleAnalytics from "../../assets/googleAnalytics.png";
import googleDocs from "../../assets/googleDocs.png";
import hotJar from "../../assets/hotJar.png";
import Jira from "../../assets/Jira.png";
import productPlan from "../../assets/productPlan.png";
import slack from "../../assets/slackIcon.png";
import trello from "../../assets/trello.png";
import styled from "styled-components";

export const ClassTools = () => {
  return (
    <ToolsStyle>
        <div className="tools">
            <div className="tools-header">
            <h1>Class Tools</h1>
            <p>
            Below are industry-standard tools you would be exposed to during the course of our program
            </p>
            </div>
            <div className="tools-body">
            <div className="tools-body-item">
                <img src={googleAnalytics} alt="Google Analytics" />
                <p>Google Analytics</p>
            </div>
            <div className="tools-body-item">
                <img src={Jira} alt="Jira" />
                <p>Jira Software</p>
            </div>
            <div className="tools-body-item">
                <img src={Figma} alt="Figma" />
                <p>Figma</p>
            </div>
            <div className="tools-body-item">
                <img src={trello} alt="Trello" />
                <p>Trello</p>
            </div>
            <div className="tools-body-item">
                <img src={hotJar} alt="HotJar" />
                <p>HotJar</p>
            </div>
            <div className="tools-body-item">
                <img src={productPlan} alt="ProductPlan" />
                <p>ProductPlan</p>
            </div>
            <div className="tools-body-item">
                <img src={googleDocs} alt="Google Docs" />
                <p>Google Docs</p>
            </div>
            <div className="tools-body-item">
                <img src={slack} alt="Slack" />
                <p>Slack</p>
            </div>
            </div>
        </div>
    </ToolsStyle>
  )
}

const ToolsStyle = styled.div`
    .tools {
        padding: 5.9rem 2.4rem;
        @media(min-width: 1024px){
            padding: 3.9rem 9.6rem 11.9rem 9.6rem;
        }
        .tools-header {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            h1 {
                font-size: clamp(2.8rem,5.90vw,3rem);
                font-weight: 700;
            }
            p{
                font-size: 3.62vw;
                font-weight: 400;
                line-height: 24px;
                color: #000;
                margin-top: 22px;
            }
            margin-bottom: 2rem;
            @media (min-width: 1024px) {
                text-align:center;
                align-items: center;
                h1 {
                font-size: 2.38vw;
                }
                p{
                font-size: 1.19vw;
                line-height: 27px;
                margin-top: 3.2rem;
                width: 50%;
                }
                margin-bottom: 4.8rem;
            }
        }
        .tools-body {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2.1875rem;
            width: 100%;
            /* place-items: center; */
            @media (min-width: 1024px) {
                grid-template-columns: repeat(4, auto);
                gap: 3.1875rem;
                width: 100%;
            }
            .tools-body-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                column-gap: 8px;
                img {
                    width: 5.5vw;
                }
                p {
                    font-size: 3vw;
                    font-weight: 400;
                }

                @media (min-width: 1024px) {
                    flex-direction: row;
                img {
                    width: 6.4rem;
                }
                p {
                    font-size: 1.35vw;
                    font-weight: 700;
                }
                }
            }
        }
    }
`
