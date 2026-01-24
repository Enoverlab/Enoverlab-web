import styled from "styled-components"
import { SecondaryButton } from "../../Utils/styled/Buttons"
import {useContext, useState, useEffect} from "react"
import { CenterContext } from "../../context/CenterContext";
import { useNavigate, useParams } from "react-router";

const RespectivePlans = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [locationDetails, setLocationDetails] = useState({paystackSubLinks : {
        oneTime : {
            link : '',
            price : '',
        },
        twoTimes : {
            link : '',
            price : '',
        } ,
        threeTimes : {
            link : '',
            price : ''
        } 
    }})

    const centerDetails = useContext(CenterContext)

    useEffect(()=>{
        const parameter = id.toLowerCase()
        const allowedLocations = ['online', 'lekki-weekend','lekki-weekday','ikeja-weekend','ikeja-Weekday','abuja','ibadan','anambra']
        if(!allowedLocations.includes(parameter)){
            navigate('/payments')
        }
        switch(parameter){
            case "lekki-weekend":
            setLocationDetails(centerDetails['Lekki-Weekend'])
            break;
            case "lekki-weekday":
            setLocationDetails(centerDetails['Lekki-Weekday'])
            break;
            case "ikeja-weekend":
            setLocationDetails(centerDetails['Ikeja-Weekend'])
            break;
            case "ikeja-weekday":
            setLocationDetails(centerDetails['Ikeja-Weekday'])
            break;
            case "abuja":
            setLocationDetails(centerDetails['Abuja'])
            break;
            case "ibadan":
            setLocationDetails(centerDetails['Ibadan'])
            break;
            case "anambra":
            setLocationDetails(centerDetails['Anambra'])
            break;
            case "online":
            setLocationDetails(centerDetails.Online)
            break;
            default:
            setLocationDetails({
                paystackSubLinks : {
                    oneTime : {
                        link : '',
                        price : '',
                    },
                    twoTimes : {
                        link : '',
                        price : '',
                    } ,
                    threeTimes : {
                        link : '',
                        price : ''
                    } 
                },
            })
        }
    },[id, centerDetails,navigate])

  return (
    <StyledRespectivePlans>
      <header>
        Payment Plans
      </header>
      <section className="online">
        <h2>
        {id[0].toUpperCase() + id.slice(1)} Training Payment
        </h2>
        <div className="Option" data-aos='fade-right'>
            <div className="details" data-aos='fade-right'>
                <h4>
                    One-Time Payment Of
                </h4>
                <p>
                    {locationDetails.paystackSubLinks.oneTime.price}
                    <span> Full Payment</span>
                </p>
                <div className="cta">
                    <SecondaryButton Text='Pay Now' to={locationDetails.paystackSubLinks.oneTime.link} target='_blank' />
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
                {locationDetails.paystackSubLinks.twoTimes.price}
                    <span> each</span>
                </p>
                <div className="cta">
                    <SecondaryButton Text='Pay Now' to={locationDetails.paystackSubLinks.twoTimes.link} target='_blank' />
                </div>
            </div>
            <div className="hr">
                <hr />
            </div>
            <div className="details" data-aos='fade-down'>
                <h4>
                    Three Times Payment Of
                </h4>
                <p>
                {locationDetails.paystackSubLinks.threeTimes.price}
                    <span> each</span>
                </p>
                <div className="cta">
                    <SecondaryButton Text='Pay Now' to={locationDetails.paystackSubLinks.threeTimes.link} target='_blank' />
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
            Transfer your tuition fee to the account below and send the receipt of payment to enoverlab@gmail.com with your full name, gmail, WhatsApp no, and class you are signing up for.
            </p>
            <div className="details">
                <p>Account Name: <span>Enoverlab Limited</span></p>
                 <p>Account Number: <span>1311450991</span></p>
                <p>Bank: <span>Zenith Bank</span></p>
            </div>
        </div>
      </section>
    </StyledRespectivePlans>
  )
}

export default RespectivePlans


const StyledRespectivePlans = styled.div`
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
        h2{
            color: #373737;
            font-weight: 700;
            font-size: 24px;
            margin-bottom: 1.4rem;
        }
    }

    .online .Option{
        padding: 2rem;
        border-radius: 4px;
        background: #E3F5F8;
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
        margin: 2rem 0;
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
            margin: 5rem 0rem;
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