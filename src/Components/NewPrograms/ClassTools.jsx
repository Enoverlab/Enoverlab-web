import React from 'react'
import Figma from "../../assets/figma.png";
import gmailIcon from "../../assets/gmailIcon.png";
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
            Our online classes are designed around the latest  remote product management tools to keep you inline with the latest industry standards.
            </p>
            </div>
            <div className="tools-body">
            <div className="tools-body-item">
                <img src={Figma} alt="Figma" />
                <p>Figma</p>
            </div>
            {/* <div className="tools-body-item">
                <img src={gmailIcon} alt="Gmail" />
                <p>Gmail</p>
            </div> */}
            <div className="tools-body-item">
                <img src={googleAnalytics} alt="Google Analytics" />
                <p>Google Analytics</p>
            </div>
            <div className="tools-body-item">
                <img src={googleDocs} alt="Google Docs" />
                <p>Google Docs</p>
            </div>
            <div className="tools-body-item">
                <img src={hotJar} alt="HotJar" />
                <p>HotJar</p>
            </div>
            <div className="tools-body-item">
                <img src={Jira} alt="Jira" />
                <p>Jira</p>
            </div>
            <div className="tools-body-item">
                <img src={productPlan} alt="ProductPlan" />
                <p>ProductPlan</p>
            </div>
            <div className="tools-body-item">
                <img src={slack} alt="Slack" />
                <p>Slack</p>
            </div>
            <div className="tools-body-item">
                <img src={trello} alt="Trello" />
                <p>Trello</p>
            </div>
            </div>
        </div>
    </ToolsStyle>
  )
}

const ToolsStyle = styled.div`
    background-color: #F4FCFE;
    .tools {
        padding: 5rem 17%;
        /* margin-top: 5rem; */
        margin-bottom: 5rem;
        @media(max-width: 780px){
            padding: 5rem 5%;
        }
        .tools-header {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            margin-bottom: 2rem;
            h1 {
                font-size: 2.25rem;
                font-weight: 700;
            }
            p{
                font-size: 1.125rem;
                font-weight: 400;
                line-height: 24px;
                color: #000;
                margin-top: 12px;
                width: 80%;
                @media(max-width: 780px){
                    font-size: 0.9rem;
                    line-height: 1.5rem;
                    width: 100%;
        }
            }
        }
        .tools-body {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            
            /* grid spacing */
            gap: 3.1875rem;
            width: 100%;
            @media (max-width: 768px) {
                grid-template-columns: repeat(2, 1fr);
                gap: 2.1875rem;
                /* width: 80%; */
            }
            .tools-body-item {
                display: flex;
                flex-direction: row;
                align-items: center;
                /* margin: 1rem; */
                column-gap: 8px;
                img {
                    width: 2.5rem;
                    height: 2.5rem;
                }
                p {
                    font-size: 1rem;
                    font-weight: 700;
                    @media(max-width: 780px){
                        font-size: .8125rem;
                    }
                }
            }
        }
    }
`
