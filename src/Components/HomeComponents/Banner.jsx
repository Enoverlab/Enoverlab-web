import React from 'react'

import styled from 'styled-components'

// images
import banner from '../../assets/bannerBackground.jpg';
import ama from '../../assets/ama.svg';
import character from '../../assets/banner/bannerImage1.jpeg'
import character2 from '../../assets/banner/bannerImage2.jpg'
import character3 from '../../assets/banner/bannerImage3.jpeg'
const Banner = () => {
    return (
        <StyledBanner>
            <div className="topImage">
                <img className="logo" src={ama} alt="ama section" />
                <div className='cont'>
                <img src={character} className="characterMobile" alt="character" />        
                  <div className="details mobile">
                  <h4>Chinyere Tony-Eke </h4>
                    <p>Group Head, Digital Banking, Globus Bank</p>
                    </div>
                </div>
            </div>
            <div className="content">
                <h5>Session Topic:</h5>
                <h2>The difference between a product manager and a product marketing manager</h2>

                {/* <p>(Blackberry, Nokia, Sony, OLX, Lagos Red Taxi, Mr Biggs)</p> */}
            </div>
            <div className="cont">
                <img src={character} className="characterWeb" alt="character" />
              
                <div className="details web">
                    <h3>Guest Speaker:</h3>
                    <h4>Chinyere Tony-Eke </h4>
                    <p>Group Head, Digital Banking, Globus Bank</p>
                </div>
            </div>
            {/* <Link to="/register">Register here</Link> */}
            <a href="https://forms.gle/8jVs1tALg73xYxNr6" target="_blank" rel="noopener noreferrer">Register here</a>
        </StyledBanner>
    )
}

export default Banner

const StyledBanner = styled.section`
    max-height: 179px;
    background-image: url(${banner});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* background-color: #0046FF; */
    padding: 3rem 6%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        max-height: 100%;
        padding: 1.6875rem 5%;
    }
    .characterWeb {
        /* width: 90.63px; */
        width: 90.63px;
        height: 100px;
        object-fit:  cover;
        @media (max-width: 768px) {
            display: none;
        }
    }
    .topImage {
        display: flex;
        align-items: center;
        @media (max-width: 768px) {
            margin-bottom: 2.5rem;
        }
        .characterMobile {
            display: none;
            @media (max-width: 768px) {
                display: block;
                width: 80px;
                height: auto;
                margin-left: .5rem;
            }
        }
        .logo {
            width: 73px;
            height: auto;
        }
    }
    .cont {
        display: flex;
        column-gap: 0.5rem;
        
         /* new */
        @media (max-width: 768px) {
            column-gap: 0rem;
        }
        /* new */
    }
    .details {
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-left: 1rem;
        max-width: 150px;
        h3{
            font-size: 1.1rem;
            color: #52DEE5;
            font-weight: 400;
            margin-bottom: .3rem;
        }
        h4 {
            font-size: 1rem;
            color: #fff;
            margin-bottom: .3rem;
        }
        p {
            font-size: .75rem;
            color: #f2f2f2dd;
           
        }
        &.mobile {
            display: none;
    
            @media(max-width: 768px) {
                display: flex;
            }
        }
        &.web {
            display: flex;
            @media(max-width: 768px) {
                display: none;
            }
        }
    }
    .content {
        max-width: 320.45px;
       
        h5 {
            font-size: 1.1rem;
            color: #52DEE5;
            font-weight: 400;
            margin-bottom: 0.5rem;
        }
        h2 {
            font-size: 1.331875rem;
            font-weight: 700;
            color: #fff;
            line-height: 1.385rem;
            @media (max-width: 768px) {
                font-size: 1.25rem;
                max-width: 271px;
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
    a {
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
    }
`