import styled from "styled-components"
import herobg from "../../assets/career/herobg.png"
import scratch from "../../assets/career/scratch.svg"
import scratch2 from "../../assets/career/scratch2.svg"
import comment from "../../assets/career/comment.svg"
import beneathLine from "../../assets/icon/beneathLine.png"

const Hero = () => {
  return (
    <StyledHero>
      <section className="left_sect">
        <h2>
        Product Management <br /> <span>Career Expo:</span> Landing Your Next Product Manager Role
        </h2>
        <p>
        Learn from Enoverlab at the product management summit and kickstart your  career for free.
        </p>
      </section>
      <section className="right_sect">
        <img src={comment} alt="comment_img" />
        <h3>
            Welcome Great Minds 
        </h3>
        <p>
            Your dream product management role is closer than you  think. The Enoverlab Institute Product Management  Career Expo is your gateway to top companies and invaluable insights. Connect, learn, and launch your career at Nigeria’s premier product management event.
        </p>
      </section>
      <div className="timer">
        <header>
            Time Remaining
        </header>
        <div className="timerBody">
            <section>
                <div>
                    05
                    <img src={beneathLine} alt="" />
                </div>
                <p>DAYS</p>
            </section>
            <section>
                <div>
                    20
                    <img src={beneathLine} alt="" />
                </div>
                <p>HOURS</p>
            </section>
            <section>
                <div>
                    12
                    <img src={beneathLine} alt="" />
                </div>
                <p>MINUTES</p>
            </section>
            <section>
                <div>
                    39
                    <img src={beneathLine} alt="" />
                </div>
                <p>SECONDS</p>
            </section>
        </div>
      </div>
    </StyledHero>
  )
}

export default Hero

const StyledHero = styled.div`
    width:100%;
    height: 500px;
    font-family: "Plus Jakarta Sans";
    background : url(${herobg});
    height: fit-content;
    background-size: cover;
    background-repeat: no-repeat;
    margin-top:2rem;
    position: relative;
    padding: 7rem 2.4rem;
    section.left_sect{
        color: white;
        h2{
            font-size: 7.47vw;
            font-weight: 800;
            letter-spacing: 0.64px;
            br{
                display: none;
            }
            span{
                background: #8c8cff;
                border-radius: 999px;
                padding: 0 0.5rem
            }
        }
        p{
            margin-top: 0.9rem;
            font-size: 1.4rem;
            line-height: 2.2rem; 
        }
    }
    section.right_sect{
        background : url(${scratch});
        width: 100%;
        background-repeat: no-repeat;
        background-size: 100%;
        height: max-content;
        padding: 1.3rem 3.4rem 1.9rem 2.4rem ;
        color: #373737;
        font-size: 3.2vw;
        margin-top: 6.7rem;
        line-height: 22px;
        h3{
            font-weight: 800;
        }
        p{
            font-weight: 500;
        }
    }
    .timer {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        bottom: -40px;
        padding: 1.6rem 3.4rem;
        left: 25%;
        right: 25%;
        border-radius: 24px;
        background: linear-gradient(270deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.40) 100%);
        box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.10);
        backdrop-filter: blur(16px);
        header{
            color: #F2F2F2;
            text-align: center;
            font-size: 1.2rem;
        }
        .timerBody{
            display: flex;
            section{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                div{
                    border-radius: 0.43rem;
                    position: relative;
                    color: #F2F2F2;
                    font-size: 2rem;
                    font-weight: 400;
                    padding: 0.2rem 0.5rem;
                    margin-left: 0.5rem;
                    background: #00F;
                    img{
                        position: absolute;
                       bottom: 45%;
                       right: 0%;
                        width: 2000px;
                    }
                }
                p{
                    color: #373737;
                    font-size: 0.6rem;
                }
            }
        }
    }
    @media (min-width: 700px) {
        section.right_sect{
            background: url(${scratch2});
            background-size: 100%;
            background-repeat: no-repeat;
            padding: 2rem 4.5rem 4rem 3.2rem;
            line-height: 3.2rem;
            font-size: 3vw;
            img{
                width: 3rem;
            }
        }
    }
    @media (min-width: 1024px) {
        border-radius: 20px;
        margin-top: 4rem;
        padding: 7rem 9.6rem 10rem 9.6rem;
        display: flex;
        gap: 6.87vw;
        section.left_sect{
            h2{
                font-size: 2.9vw;
                line-height: 6.4rem;
                br{
                display: block;
                }
            }
            
        }
        section.right_sect{
            background: url(${scratch2});
            background-size: 100%;
            height: 270px;
            background-repeat: no-repeat;
            padding: 2rem 4.5rem 4rem 3.2rem;
            line-height: 3.2rem;
            margin-top : 15rem;
            font-size: 1.3vw;
            img{
                width: 3rem;
            }
        }
        div.timer{
            position: absolute;
            padding: 1.6rem 0.4rem;
            left: 30%;
            right: 30%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            bottom: -100px;
            header{
                font-size: 1.2rem;
            }
            .timerBody{
            display: flex;
                section{
                    div{
                        border-radius: 4.379px;
                        font-size: 5.3rem;
                        padding: 0.2rem 1.5rem;
                        margin-left: 1.3rem;
                        background: #00F;
                    }
                    p{
                        color: #373737;
                        font-size: 1.25rem;
                    }
                }
                
            }
        }
    }
`
