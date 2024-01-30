import React from 'react'
import styled from 'styled-components'
// images
import banner from '../../assets/bannerPrograms.png';
import {Link} from 'react-router-dom'
import {SecondaryButton} from '../../Utils/Buttons'
const Banner = () => {
    return (
        <StyledBanner>
            <div className="content">
                {/* <h5>Session Topic:</h5> */}
                <h2>Check here for technical and growth PM programs if you are a practising 
product manager looking to upgrade your skills</h2>
                {/* <p>(Blackberry, Nokia, Sony, OLX, Lagos Red Taxi, Mr Biggs)</p> */}
            </div>
            {/* <Link to="/register">Register here</Link> */}
            {/* <Link to="/upskill" target="_blank" rel="noopener noreferrer">
                Click here
            </Link> */}
            <SecondaryButton
                onClick={() => {
                    window.open("https://paystack.com/pay/enoverlabadvance");
                }}
                to="/"
                buttText={"Click here"}
            />
              
        </StyledBanner>
    )
}

export default Banner

const StyledBanner = styled.section`
    max-height: 447px;
    background-image: url(${banner});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* background-color: #0046FF; */
    padding: 3rem 6%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 48px;
    position: relative;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        max-height: 100%;
        padding: 1.6875rem 5%;
    }

    .content {
        width: 100%;
        @media(max-width: 768px) {
                width: 100%;
            }
        h2 {
            font-size: 3rem;
            font-weight: 400;
            color: #fff;
            text-align: center;
            line-height: 3.625rem;
            @media (max-width: 768px) {
                font-size: 1.25rem;
                width: 100%;
                margin-bottom: 1.5rem;
            }
        }
        p {
            font-size: .75rem;
            color: #f2f2f2dd;
            @media (max-width: 768px) {
                max-width: 271px;
                margin-bottom: 1rem;
            }
        }
    }
    /* a {
        padding: 1rem 2rem;
        background: #090C9B;
        border: 2px solid #52DEE5;
        color: #52DEE5;
        font-size: 1.1rem;
        font-weight: 700;
        text-decoration: none;
        cursor: pointer;
        transition: all .3s ease-in-out;
        &:hover {
            background: #52DEE5;
            color: #090C9B;
        }
    } */
`