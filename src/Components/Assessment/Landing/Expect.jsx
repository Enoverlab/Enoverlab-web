import styled from "styled-components"
import expect from "../../../assets/assessment/expect.png"
import time from  "../../../assets/assessment/time.svg"
import insights from "../../../assets/assessment/insights.svg"
import question from "../../../assets/assessment/question.svg"

const Expect = () => {
  return (
    <StyledExpect>
      <header>
        <h2>
          What to Expect
        </h2>
      </header>
      <section className="explain">
        <div>
          <img src={expect} alt="" className="expect" />
        </div>
        <div className="cardItems">
          <div>
            <img src={question} alt="" />
            <p>50 targeted questions covering <br />
            essential Product Management skills</p>
          </div>
          <div>
            <img src={time} alt="" />
            <p>Time required: 15 minutes to complete</p>
          </div>
          <div>
            <img src={insights} alt="" />
            <p>Immediate insights to identify <br />
            strengths and growth areas</p>
          </div>
        </div>
      </section>
      <div className="note">
        <p>
          <span>
          Bear In Mind: 
          </span> Data privacy is guaranteed, and your personal information is secured
        </p>
      </div>
    </StyledExpect>
  )
}

export default Expect

const StyledExpect = styled.div`
  background-color: #EEFCFC;
  padding: 4.8rem 0rem;
  header{
    display: flex;
    justify-content: center;
    margin-bottom: 2.9rem;
  }
  header h2{
    color: #003AD4;
    border : 1px solid #003AD4;
    width: 18rem;
    padding: 1rem 0;
    border-radius : 0.75rem ;
    text-align: center;
    font-size: 1.8rem;
  }
  .explain{
    display: grid;
    gap: 8.4rem;
    margin-bottom: 4.5rem;
    .cardItems{
      display: grid;
      padding: 0rem 0.2rem;
      gap: 0.8rem;
      div{
        background-color: white;
        padding: 2rem;
        display: flex;
        align-items: center;
        gap: 2rem;
        p{
          font-size: 3.18vw;
          color: #303030;
        }
      }
    }
  }
  .note{
    display: flex;
    justify-content: center;
    p{
      color: #303030;
      font-size: 3.6vw;
      text-align: center;
      padding: 0rem 0.5rem;
      span{
        font-weight: 600 ;
      }
    }
  }

  
  @media (min-width: 700px) {
    .explain{
      display: grid;
      place-items: center;
      gap: 8.4rem;
      margin-bottom: 4.5rem;
      img.expect{

      }
    }
    .note{
      p{
        font-size: 2.6vw;
        padding: 0rem 0.5rem;
        span{
          font-weight: 600 ;
        }
      }
    }
  }
  @media (min-width: 1024px) {
    header h2{
      color: white;
      font-size: 2.4rem;
      width: 25.8rem;
      background-color: #003AD4;
    }
    .explain{
      grid-template-columns: repeat(2, auto);
      gap: 5.83vw;
      padding: 0rem 2.4rem;
      .cardItems{
        div{
          p{
            font-size: 1.11vw;
          }
        }
      }
      
    }
    .note{
      p{
        color: #303030;
        font-size: 2rem;
        span{
          font-weight: 600 ;
        }
      }
    }
  }
`