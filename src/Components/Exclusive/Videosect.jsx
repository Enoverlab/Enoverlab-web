import React from 'react'
import styled from 'styled-components'
import {H1} from '../../Utils/styled/Typograpyhy'
const Videosect = () => {
  return (
    <StyledVideoSect>
        <div className="head-container">
            <H1
            fontSize="1.5rem" color="#000000" lineHeight="1.875rem" mobileFontSize="1.25rem" mobileLineHeight="1.5rem"
            >
            Catch a glimpse into the unique training experience
            </H1>
        </div>


        <div className="video-container">
        <iframe width="374" height="665" src="https://www.youtube.com/embed/MBYpSE9xDtY" title="Catch a glimpse into our Product Management training room" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </StyledVideoSect>

  )
}

export default Videosect;

const StyledVideoSect = styled.div`
    padding: 150px 0;

    @media (max-width: 768px) {
        padding: 100px 0;
    }

    .head-container{
        padding: 0 0;
        @media (max-width: 768px) {
            text-align: center;
            padding: 0 5%;
        }
    }

    .video-container{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 20%;

        @media (max-width: 768px) {
            padding: 20px 5%;
        }

        iframe{
            width: 100%;
            height: 35.125rem;

            @media (max-width: 768px) {
                height: 17.25rem;
            }

        }
    }

`