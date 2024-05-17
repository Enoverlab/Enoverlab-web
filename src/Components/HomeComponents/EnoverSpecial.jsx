import styled from "styled-components";
import lekki from "../../assets/icon/Lekki.png";
import berger from "../../assets/icon/Berger.png";
import ibadan from "../../assets/icon/Ibadan.png";
import { TertiaryButton } from "../../Utils/styled/Buttons";
import "../../App.css";
import ScrollToElement from "../../helper/ScrollToElement";
const EnoverSpecial = () => {
  return (
    <Styledspecial>
      <section className="top" >
        <div className="topSect">
        <header>
        What makes Enoverlab special?
        </header>
        <p>
        7 out of every 10 enoverlab trained PM gets  engaged within 3-6 months after their training.
        </p>
        </div>
        <div className="topSectCard">
          <div className="writeUp">
            <h1>
            7<small>+ </small><span> Locations</span> 
            </h1>
            <p>
            Learn virtually from home or visit hubs in your city.
            </p>
          </div>
          <div className="images">
            <img src={lekki} alt="Lekki" className="lekki locations"/>
            <img src={ibadan}alt="Ibadan" className="ibadan locations"/>
            <img src={berger} alt="Berger" className="locations berger"/>
          </div>
        </div>
      </section>
      <section className="bottom">
        <div className="card1">
          <h2>
          Practical classes
          </h2>
          <p>
          Real-life product projects
          </p>
        </div>
        <div className="card2">
            <header>
            <h2>7K<small>+</small></h2>
            <p>Students trained</p>
            </header>
            <footer>
              <TertiaryButton Text="See Alumni" to="#alumni" arrowDown={true} handleClick={ScrollToElement}/>
            </footer>
        </div>
        <div className="card3">
          <h2>
          70%
          </h2>
          <p>
          Hiring rate
          </p>
        </div>
        <div className="card4">
          <main>
          <h2>Internship placement</h2>
          <TertiaryButton Text="Learn More"/>
          </main>
        </div>
      </section>
      
    </Styledspecial>
  );
};

export default EnoverSpecial;

const Styledspecial = styled.div`
  background: #000073;
  padding: 7.2rem clamp(1.5rem,5vw,2.4rem);
  display: grid;
  .topSect{
    color: white;
    padding-bottom: clamp(4rem,12.85vw,5.5rem);
    header{
      font-size: clamp(1.8rem,5.80vw,2.9rem);
      font-weight: 700;
      line-height: 32px;
      padding-bottom: 0.8rem;
    }
    p{
      font-size: clamp(1rem,3.5vw,1.8rem);
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
    }
  }
  .topSectCard{
    border-radius: 12px;
    background: linear-gradient(90deg, #00F 0%, #DBF5FF 99.56%);
    backdrop-filter: blur(60px);
    padding: 1.5rem 1.5rem 1.5rem 2.4rem;
    display: grid;
    grid-template-columns : repeat(2,auto);
    align-items: center;
    .writeUp{
    color: white;
    font-style: normal;
    h1{
      font-size: clamp(2.8rem,8.411vw,3.6rem);
      font-weight: 800;
      line-height: normal;
      span{
        font-size: clamp(1.5rem,4.205vw,1.9rem);
      }
    }
    p{
      font-size: clamp(1rem,3.73vw,1.6rem);
      font-weight: 400;
      line-height: 28px; 
    }
  }
    img{
      width: clamp(130px,30.37vw,300px);
    }
  }
  .bottom{
    display: grid;
    padding-top: 0.8rem;
    gap: 0.8rem;
    grid-template-columns: repeat(2,1fr);
    color: white;
    div{
      border-radius: 12px;
      background: linear-gradient(90deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.39) 100%);
      backdrop-filter: blur(60px);
      p{
        font-size: clamp(1rem,3.27vw,1.4rem);
      }
      
    }
    .card1{
      padding: 11.4rem 0 6.4rem 1.6rem;
      h2{
        font-size: clamp(1.5rem,4.205vw,1.9rem);
        font-weight: 700;
        line-height: normal;
        padding-bottom: 1.2rem;
        width: 70%;
      }
      p{
        width: 70%;
      }
    }
    .card2{
      padding-top: 4.7rem;
      display: flex;
      flex-direction: column;
      header{
        padding: 0rem 0 0 1.6rem;
      }
      h2{
        font-size: clamp(2.8rem,8.411vw,3.6rem);
        font-weight: 700;
        padding-left: 0.5rem;
      }
      footer{
        border-top: 1px solid black;
        padding: 1.6rem 0 1.6rem 1.6rem;
        margin-top: auto;
      }
    }
    .card3{
      padding: 12.9rem 0 6.4rem 1.6rem;
      h2{
        font-size: clamp(2.8rem,8.411vw,3.6rem);
        padding-bottom: 1.2rem;
        font-weight: 700;
      }
    }
    .card4{
      padding: 12.9rem 0 6.4rem 1.6rem;
      display: flex;
      main{
        /* margin-top: auto; */
        h2{
          font-size: clamp(1.5rem,4.205vw,1.9rem);
          margin-bottom: 3.2rem;
          width: 90%;
        }
      }
    }
  }
  @media (min-width: 1024px) {
    padding: 10.7rem clamp(5rem,6.67vw,9.6rem);
    .top{
      display : grid;
      grid-template-columns: repeat(6, minmax(0, 1fr));
      gap: 4.4rem;
      .topSect{
        grid-column-start: 1;
        grid-column-end: 3;
        header{
          font-size: clamp(2.8rem,2.5vw,3.6rem);
        }
        p{
          font-size: clamp(1.5rem,1.388vw,2rem);
          font-weight: 400;
          line-height: 32px;
        }
      }
      .topSectCard{
        grid-column-start: 3;
        grid-column-end: 7;
        position: relative;
        padding: 7.2rem 1.5rem 7.2rem 3.2rem;
        img{
          position: absolute;
          width: 16vw;
          z-index: 20;
        }
        .writeUp{
          h1{
            font-size: clamp(5.5rem,4.4vw,6.4rem);
            font-style: normal;
            font-weight: 800;
            span{
              font-size: clamp(2.8rem,2.2vw,3.2rem);
              font-weight: 800;
            }
          }
          p{
            font-size: clamp(1.5rem,1.388vw,2rem);
            width: 45%;

          }
        }
      }
    }
    .bottom{
      display : grid;
      grid-template-columns: repeat(4,auto);
      gap: 10px;
      div{
        height: 28rem;
      }
      .card1{
        padding-top:14.1rem;
        padding-left: 2.4rem;
        padding-right: 4rem;
        width: 29.125vw;
        h2{
          font-size: clamp(2.8rem,2.2vw,3.2rem);
          width: 100%;
        }
        p{
          font-size: clamp(1.5rem,1.388vw,2rem);
        }
      }
      .card2{
        padding-top:0.3rem ;
        width: 15vw;
        h2{
          font-size: clamp(5.5rem,4.4vw,6.4rem);
        }
        footer{
          margin-top: 6.1rem;
          padding-top: 2rem;
        }
      }
      .card3{
        width: 15vw;
        text-align: right;
        padding-right: 3.2rem;
        h2{
          font-size: clamp(5.5rem,4.4vw,6.4rem);
          padding-bottom: 0.1rem;
        }
        p{
          font-size: clamp(1.5rem,1.388vw,2rem);
        }
      }
      .card4{
        width: 25.125vw;
        main{
          h2{
          font-size: clamp(2.8rem,2.2vw,3.2rem);
          margin-bottom: 1.8rem;
          width: 100%;
        }
        }
      }
    }
  }
`;


