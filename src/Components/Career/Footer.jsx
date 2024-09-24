import styled from "styled-components"
import facebook from "../../assets/icon/careerfair/Facebook.svg"
import instagram from "../../assets/icon/careerfair/Instagram.svg"
import linkedin from "../../assets/icon/careerfair/linkedin.svg"
import twitter from "../../assets/icon/careerfair/twitter.svg"
import youtube from "../../assets/icon/careerfair/YouTube.svg"
import logo from "../../assets/icon/careerfair/enoverlab_logo.svg"
import mailsvg from "../../assets/icon/mail.svg"
import locationsvg from "../../assets/icon/contactLocation.svg"
import callsvg from "../../assets/icon/call.svg"
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <StyledFooter>
      <section className="enoverlab">
        <div>
            <img src={logo} alt="Enoverlab" />
            <h4>
                Building product managers for today,
                tomorrow and the future
            </h4>
        </div>
        <div>
            <h2>
                Follow Us
            </h2>
            <div className="links">
                <Link>
                    <img src={facebook} alt="Enoverlab Facebook link" />
                </Link>
                <Link>
                    <img src={instagram} alt="Enoverlab instagram link" />
                </Link>
                <Link>
                    <img src={linkedin} alt="Enoverlab linkedin link" />
                </Link>
                <Link>
                    <img src={twitter} alt="Enoverlab twitter link" />
                </Link>
                <Link>
                    <img src={youtube} alt="Enoverlab youtube link" />
                </Link>
            </div>
        </div>
      </section>
      <section className="contact">
      <div className="contactDetails">
            <div>
              <img src={mailsvg} alt="mail icon" />
              <section>
              <h1>Send us a mail</h1>
              <p><Link to="mailto:sarah@enoverlab.com" target="_blank">Sarah@enoverlab.com</Link> </p>
              <Link to="mailto:info@enoverlab.com" target="_blank">info@enoverlab.com</Link> 
              </section>
            </div>
          </div>
          <div className="contactDetails">
            <div>
              <img src={callsvg} alt="call icon" />
              <section>
              <h1>Call us on</h1>
              <p>+234 (813 489 7313)</p>
              <p>+234 (906 312 4595) </p>
              <h5>8Am - 8Pm</h5> 
              </section>
            </div>
          </div>
          {/* <div className="contactDetails">
            <div>
              <img src={callsvg} alt="call icon" />
              <section>
              <h1>Chat via Whatsapp</h1>
              <p>08104522214, 07053395509</p>
              <h5>8Am - 8Pm</h5> 
              </section>
            </div>
          </div> */}
          <div className="contactDetails">
            <div>
              <img src={locationsvg} alt="mail icon" />
              <section>
              <h1>Office (HQ)</h1>
              <p>Gateview Plaza, Plot 11 Admiralty Way, Lekki Phase 1, Lagos 100001, Lagos</p>
              <h5>10Am - 3Pm</h5>
              </section>
            </div>
          </div>
      </section>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.div`
    background: #F5FCFF;
    padding: 5rem 2rem;
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 2rem;
    .enoverlab{
        h4{
            color:#4B4B4B;
            font-size: 1.4rem;
            font-weight: 400;
            line-height: 2.8rem;
            letter-spacing: -0.32px;
        }
        h2{
            color: #1A1A1A;
            font-size: 1.6rem;
            margin: 1.2rem 0rem;
            font-weight: 700;
            line-height: normal;
        }
        .links{
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }
    }
    .contact{
        display: grid;
        gap: 2rem;
        .contactDetails{
            div{
                display: flex;
                align-items: flex-start;
                color: #373737;
                gap: 1rem;
                h1{
                    font-size: 1.4rem;
                    font-weight: 700;
                }
                p, a{
                    font-size: 1.2rem;
                }
                h5{
                    font-size: 1.2rem;
                    font-weight: 700;
                }
            }
        }
    }
    

    @media (min-width: 1024px) {
        padding: 6rem 9.6rem;
        grid-template-columns: 25% auto;
        gap: 5rem;
        .enoverlab{
            /* width: 30%; */
            h4{
                font-size: 1.6rem;
            }
            h2{
                font-size: 2rem;
                margin: 2.4rem 0rem;
                line-height: normal;
            }
            .links{
                gap: 3rem;
            }
        }
        .contact{
            grid-template-columns: repeat(3, auto);
            /* gap: 3rem; */
            .contactDetails{
            div{
            display: flex;
            align-items: flex-start;
            color: #373737;
            /* gap: 1.6rem; */
            h1{
                font-size: 2rem;
                font-weight: 700;
            }
            p,a{
                font-size: 1.6rem;
            }
            h5{
                font-size: 1.6rem;
                font-weight: 700;
            }
            }
        }
        }
        
    }

`
