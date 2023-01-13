import React from 'react'
import styled from 'styled-components'
import {AiOutlineLink} from 'react-icons/ai'
const BookCard = ({imgUrl}) => {
    const [active, setActive] = React.useState(false)
  return (
    <StyledBookCard>
        <div
        onMouseLeave={() => setActive(false)}
        onMouseEnter={() => setActive(true)}
        className={
            active ? "book-card-container active" : "book-card-container"
        }>
            <img src={imgUrl} alt=""/> 
            {
                active ? (
                    <div className="book-card-content">
                        <div className="book-card-content-text">
                            <h4><AiOutlineLink/>{" "}Read Book</h4>
                        </div>
                    </div>
                ):
                null
            }
        </div>
    </StyledBookCard>    
  )
}

export default BookCard

const StyledBookCard = styled.div`
    .book-card-container {
        max-width: 18.9375rem;
        max-height: 28.216875rem;
        cursor: pointer;
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    .book-card-container.active {
        position: relative;
        width: 100%;
        &:before{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #000;
            opacity: 0.5;
           
        }
        .book-card-content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            margin: 0 auto;

            .book-card-content-text {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
                h4 {
                    color: #fff;
                    font-size: 1.2rem;

                }
            }
        }
    }
`