import React from 'react'
import styled from 'styled-components'
import eventImage from '../../assets/resources/eventImage.png'
import eventThumb from '../../assets/resources/eventThumb.png'
import eventThumbLeft from '../../assets/resources/eventThumbLeft.png'
import eventThumbRight from '../../assets/resources/eventThumbRight.png'
const Events = () => {
  return (
    <StyledEvents>
        <div className="events-container">
            <div className="image-container">
                <img src={eventImage} alt="" />
            </div>

            <div className="thumb-container">
                <div className="thumb-image">
                    <img src={eventThumbLeft} alt="" />
                </div>
                <div className="thumb-image center">
                    <img src={eventThumb} alt="" />
                </div>
                <div className="thumb-image">
                    <img src={eventThumbRight} alt="" />
                </div>
            </div>
        </div>
    </StyledEvents>
  )
}

export default Events

const StyledEvents = styled.div`
    .events-container {
        background-color: #FFFDF7;
        padding: 11.0625rem 8.5rem;
        @media (max-width: 768px) {
            padding: 4.0625rem 1.25rem;
        }
        .image-container{
            display: flex;
            align-items: center;
            justify-content: center;

            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }

        .thumb-container{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            margin-top: 7.288125rem;

            @media (max-width: 768px) {
                display: none;
            }

            .thumb-image{
                width: 14.6875rem;
                img{
                    width: 100%;
                    object-fit: contain;
                }
            }
            .center{
                transform: scale(1.2);
            }
        }
    }

`