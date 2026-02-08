import React from 'react'
import styled from 'styled-components'
import { SecondaryButton } from '../../Utils/styled/Buttons'

const TpmPayment = () => {
  return (
    <StyledPlans>
      <section className="online">
            <h2>
            Technical PM Training Payment
            </h2>
            <div className="Option" data-aos='fade-right'>
                <div className="details" data-aos='fade-right'>
                    <h4>
                        One-Time Payment Of
                    </h4>
                    <p>
                        ₦300,000
                        <span> Full Payment</span>
                    </p>
                    <div className="cta">
                        <SecondaryButton Text='Pay Now' to="https://paystack.shop/pay/enoverlabtpmp" target='_blank' />
                    </div>
                </div>
                <div className="hr">
                    <hr />
                </div>
                <div className="details" data-aos='fade-up'>
                    <h4>
                    Two Times Payment Of
                    </h4>
                    <p>
                        ₦150,000
                        <span> each</span>
                    </p>
                    <div className="cta">
                        <SecondaryButton Text='Pay Now' to="https://paystack.shop/pay/b39taabyi5" target='_blank' />
                    </div>
                </div>
            </div>
        </section>
        <section className="otherOptions">
            <h2>
            Manual Payment Option
            </h2>
            <div className="breakdown">
                <p className="heading">
                Transfer your tuition fee to the account below and send the receipt of payment to enoverlab@gmail.com with your full name, gmail, WhatsApp no, and class you are signing up for.
                </p>
                <div className="details">
                    <p>Account Name: <span>Enoverlab Limited</span></p>
                    <p>Account Number: <span>1311450991</span></p>
                    <p>Bank: <span>Zenith Bank</span></p>
                </div>
            </div>
        </section>
    </StyledPlans>
  )
}

export default TpmPayment


const StyledPlans = styled.div`
    padding: 0rem 5.6vw;
    header{
        margin-top: 6rem;
        margin-bottom : 33px;
        color : #00001A;
        font-size: 7.47vw ;
        font-weight: 700;
        text-align: center;

    }
    section{
        border-radius: 20px;
        border: 1px solid #0046FF;
        padding: 3.2rem 2rem;
        margin: 2rem 0;
        h2{
            color: #373737;
            font-weight: 700;
            font-size: 24px;
            margin-bottom: 1.4rem;
        }
    }
    select{
        padding: 1rem;
        outline: none;
        cursor: pointer;
        font-size: 1.2rem;
        margin-bottom: 2rem;
        background-color: #E3F5F8;
        border: 1px solid #BAEAFA;
        border-radius: 8px;
        font-weight: 700;
    }
    h6.err{
        font-size: 1.2rem;
        color: #c05555;
        font-style: italic;
    }
    .physical{
        border: 1px solid #1A1A1A;
        margin: 6.4rem 0;
    }

    .online .Option{
        padding: 2rem;
        border-radius: 4px;
        background: #E3F5F8;
    }
    
    .physical .Option{
        padding: 2rem;
        border-radius: 4px;
        background: #BAEAFA;
    }
    .Option{
        .details{
            display: grid;
            color : #373737;
            p{
                font-size: 2rem;
                font-weight: 700;
            }
            span{
                font-size: 1.4rem;
                font-weight: 400;
            }
        }
        hr{
            margin: 2rem 0;
        }
    }
    .cta{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2.4rem;
    }
    .otherOptions {
        color: #3D3D3D;
        margin-bottom: 2rem;
        div.breakdown {
            background-color: #E3F5F9;
            padding: 1rem;
            border-radius : 0.7rem;
            font-size: 3.72vw;
            p.heading {
                line-height: 7vw;
                margin-bottom: 3rem;
            }
            span {
                font-weight: 700;
            }

        }
    }
    
    @media (min-width: 1024px) {
        padding: 0rem 6.32vw;
        header{
            margin-top: 89px;
            color : #00001A;
            font-size:  3.17vw;
        }
        section{
            padding: 3.2rem 5rem;
            h2{
                margin-bottom: 3.9rem;
            }
        }
        select{
            font-size: 2rem;
        }
        .online .Option{
            border-radius: 4px;
            padding: 5.3rem 2.5rem;
            background: #E3F5F8;
        }
        .physical{
            margin : 5.6rem 0;
        }

        .physical .Option{
            border-radius: 4px;
            padding: 5.3rem 2.5rem;
        }
        .Option{
            .details{
                display: grid;
                grid-template-columns: repeat(3,auto);
                justify-content: space-evenly;
                align-items: center;
                h4{
                    font-size: 2.4rem;
                }
                h5{
                    font-size: 2rem;
                }
                p{
                font-size: 3.6rem;
                font-weight: 700;
                }
                span{
                    font-size: 2rem;
                    font-weight: 400;
                }
            }
            .hr{
                padding: 0 5rem;
            }
            hr{ 
                padding: 0rem 5rem;
                margin: 3.5rem 0;
                border: 2px solid #1A1A1A;
            }
        }
        .cta{
            margin-top: 0.55rem;
            justify-content: end;
        }
        .otherOptions {
        h2{
            font-size: 3.9rem;
        }
        div.breakdown {
            font-size: 1.65vw;
            padding: 3rem 10rem;
            p.heading {
                line-height: 3vw;
                margin-bottom: 3rem;
            }
            span {
                font-weight: 700;
            }

        }
    }
        
    }
`
