import styled from "styled-components"
import perksLine from "../../assets/icon/careerfair/perksline.svg"
import number1 from "../../assets/icon/careerfair/number1.png"
import number2 from "../../assets/icon/careerfair/number2.svg"
import number3 from "../../assets/icon/careerfair/number3.svg"
import number4 from "../../assets/icon/careerfair/number4.svg"
import number5 from "../../assets/icon/careerfair/number5.svg"

const Perks = () => {
  return (
    <StyledPerks>
      <header>
        <h2>
        What is Enoverlab offering in this Career fair?
        </h2>
        <p>Enoverlab Career Fair Perks and Benefits</p>
      </header>
      <section className="path">
        <img src={perksLine} alt="perks line" />
        <div className="items item1">
          <img src={number1} alt="" />
          <div>
            <h4>
            Onsite Job Profiling
            </h4>
            <p>
            Showcase your talents and land your dream product role through our dedicated onsite job profiling sessions. Successful candidates will have the opportunity to be recruited on the spot.
            </p>
          </div>
        </div>
        <div className="items item2">
          <img src={number2} alt="" />
          <div>
            <h4>
            Real-Time Product Management Interviews
            </h4>
            <p>
            Get direct feedback from industry experts and gain invaluable insights into cracking the perfect product interview.
            </p>
          </div>
        </div>
        <div className="items item3">
          <img src={number3} alt="" />
          <div>
            <h4>
            Expert Panel Discussions
            </h4>
            <p>
            Benefit from diverse perspectives as industry experts delve into the latest trends, challenges, and best practices in product management.
            </p>
          </div>
        </div>
        <div className="items item4">
          <img src={number4} alt="" />
          <div>
            <h4>
            LinkedIn Optimization Workshops 
            </h4>
            <p>
            Learn how to create a standout LinkedIn profile that attracts recruiters and opens doors to new opportunities.
            </p>
          </div>
        </div>
        <div className="items item5">
          <img src={number5} alt="" />
          <div>
            <h4>
            In-Depth Fireside Chats 
            </h4>
            <p>
            Gain exclusive insights from industry leaders as they share their career journeys and product management wisdom.
            </p>
          </div>
        </div>
      </section>
    </StyledPerks>
  )
}

export default Perks

const StyledPerks = styled.div`
  background: #000073;
  padding: 4rem 2.4rem;
  header{
    text-align: center;
    color: #FFF;
    margin-bottom: 4.4rem;
    h2{
      font-size: 1.6rem;
      font-weight: 400;
      line-height: normal;
    }
    p{
      font-size: 5.6vw;
      margin-bottom: 0.4rem;
      font-weight: 700;
      line-height: 3.2rem;
    }

  }
  section.path{
    border-radius: 16px;
    padding: 2.5rem 0 2.5rem 2rem;
    background: #F7F7F7;
    position: relative;
    .items{
      position: absolute;
      display: flex;
      gap: 1.5rem;
      align-items: flex-start;
      width: 270px;
      img{
        margin-top: 2rem;
      }
      h4{
        color: #00001A;
        padding: 1.7rem ;
        font-size: 1.6rem;
        border-radius: 6px;
        border: 1px solid #0046FF;
        width: 100%;
        display: flex;
        justify-content: center;
        font-weight: 600;
        line-height: normal;
        margin-bottom: 0.8rem;
      }
      p{
        color:  #373737;
        font-size: 3.2vw;
        font-style: normal;
        font-weight: 400;
        line-height: 2.2rem;
      }
    }
    .item1{
      top: 4.5rem;
      left: 1rem;
    }
    .item2{
      top: 25.5rem;
      left: 1rem;
    }
    .item3{
      top: 45.5rem;
      left: 1rem;
    }
    .item4{
      top: 65.5rem;
      left: 1rem;
    }
    .item5{
      top: 85.5rem;
      left: 1rem;
    }
  }
  @media (min-width: 700px) {
    padding: 5rem 6rem;
    header{
      p{
        font-size: 3rem;
        font-weight: 700;
        line-height: 3.2rem;
      }
    }
    section.path{
    border-radius: 16px;
    padding: 2.5rem 0 2.5rem 2rem;
    background: #F7F7F7;
    display: flex;
    justify-content: center;
    position: relative;
      .items{
        position: absolute;
        display: flex;
        gap: 1.5rem;
        align-items: flex-start;
        width: 300px;
        img{
          margin-top: 2rem;
        }
        h4{
          color: #00001A;
          padding: 1.7rem  ;
          font-size: 1.6rem;
          border-radius: 6px;
          border: 1px solid #0046FF;
          width: 100%;
          display: flex;
          justify-content: center;
          font-weight: 600;
          line-height: normal;
          margin-bottom: 0.8rem;
        }
        p{
          color:  #373737;
          font-size: 1.6rem;
          font-style: normal;
          font-weight: 400;
          line-height: 2.2rem;
        }
      }
      .item1{
        flex-direction: row-reverse;
        top: 4.5rem;
        left: 4.5rem;
      }
      .item2{
        top: 25.5rem;
        left: 32.2rem;
      }
      .item3{
        flex-direction: row-reverse;
        top: 45.5rem;
        left: 4.5rem;
      }
      .item4{
        top: 65.5rem;
        left: 32.2rem;
      }
      .item5{
        flex-direction: row-reverse;
        top: 85.5rem;
        left: 4.5rem;
      }
    }
  }
  @media (min-width: 1024px) {
    padding: 8rem 9.65vw;
    header{
      text-align: center;
      
      h2{
        font-size: 2.4rem;
        font-weight: 400;
        line-height: 3rem; 
      }
      p{
        font-size: 3.6rem;
        font-weight: 700;
        line-height: normal;
      }
    }
    section.path{
    border-radius: 16px;
    padding: 2.5rem 0 2.5rem 2rem;
    background: #F7F7F7;
    display: flex;
    justify-content: center;
    position: relative;
      .items{
        position: absolute;
        display: flex;
        gap: 1.5rem;
        align-items: flex-start;
        width: 28.1vw;
        img{
          margin-top: 2rem;
        }
        h4{
          color: #00001A;
          padding: 1.7rem  ;
          font-size: 2.4rem;
          border-radius: 6px;
          border: 1px solid #0046FF;
          display: flex;
          justify-content: center;
          font-weight: 600;
          line-height: normal;
          margin-bottom: 0.8rem;
        }
        p{
          color:  #373737;
          font-size: 2rem;
          font-style: normal;
          font-weight: 400;
          line-height: 2.2rem;
        }
      }
      .item1{
        flex-direction: row-reverse;
        top: 4.5rem;
        left: 13.2vw;
      }
      .item2{
        top: 25.5rem;
        left: 39.7vw;
      }
      .item3{
        flex-direction: row-reverse;
        top: 45.5rem;
        left: 13.2vw;
      }
      .item4{
        top: 65.5rem;
        left: 39.7vw;
      }
      .item5{
        flex-direction: row-reverse;
        top: 85.5rem;
        left: 13.2vw;
      }
    }
  }
`