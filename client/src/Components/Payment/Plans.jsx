import styled from "styled-components"
import { SecondaryButton } from "../../Utils/styled/Buttons"
import {useContext, useState, useEffect} from "react"
import { CenterContext } from "../../context/CenterContext";

const Plans = () => {
    const [location, setLocation] = useState('')
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
    const [installmentLocation, setInstallmentLocation] = useState('')
    const [installmentLocationDetails, setInstallmentLocationDetails] = useState({
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
        }
    })
    const centerDetails = useContext(CenterContext)

    useEffect(()=>{
        switch(location){
            case "Lekki-Weekend":
            setLocationDetails(centerDetails['Lekki-Weekend'])
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
    },[location, centerDetails])

    useEffect(()=>{
        switch(installmentLocation){
            case "Lekki-Weekend":
            setInstallmentLocationDetails(centerDetails['Lekki-Weekend'])
            break;
            default:
            setInstallmentLocationDetails({
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
    },[installmentLocation, centerDetails])

    const [isError,setIsError] = useState(false)

    function handleLocationChange(e){
        setLocation(e.target.value)
        if(location){
            setIsError(false)
        }
    }

    function handleInstallmentLocationChange(e){
        setInstallmentLocation(e.target.value)
        if(location){
            setIsError(false)
        }
    }

    function handleBlur(){
        if(!location){
          setIsError(true)
          return
        }
        setIsError(false)
    }

  return (
    <StyledPlans>
      <header>
        Payment Plans
      </header>
      <section className="oneTime">
        <h2>
        One-Time Payment
        </h2>
        <div className="items">
            <div className="physical">
                <h4>
                    Payment For Physical Classes
                </h4>
                <p>
                    {locationDetails?.paystackSubLinks?.oneTime?.price ||'Select a location'}
                </p>
                <select name="" id="" onChange={handleLocationChange} value={location} onBlur={handleBlur}>
                    <option id="item" value="">Select a Location</option>
                    <option value="Lekki-Weekend">LEKKI-WEEKEND</option>

                    {
                        /* <option value="Ibadan">IBADAN</option>
                        <option value="Abuja">ABUJA</option>
                        <option value="Ikeja-Weekend">IKEJA-WEEKEND</option>
                        <option value="Anambra">ANAMBRA</option> */
                    }

                </select>
                    {isError && <h6 className="err">Please select Your Preferred Location</h6>}
                <div className="cta">
                    <SecondaryButton Text='Pay Now' to={locationDetails?.paystackSubLinks?.oneTime?.link} disabled={!locationDetails?.paystackSubLinks?.oneTime?.price} />
                </div>
            </div>
            <div className="online">
                <h4>
                    Payment For Online Classes
                </h4>
                <p>
                    ₦311,800
                </p>
                <div className="cta">
                    <SecondaryButton Text='Pay Now' to="https://paystack.com/pay/ve2k2y9sst" target='_blank' />
                </div>
            </div>
        </div>
      </section>
      <section className="installment">
        <h2>
        Instalment Payment
        </h2>
        <div className="physical secondOption">
            <div className="details">
                <div className="deposit">
                    <h4>
                    Two Times Payment For Physical Classes
                    </h4>
                    <p>
                        {installmentLocationDetails.paystackSubLinks.twoTimes.price || 'Select a Location'}
                    </p>
                </div>
                <div className="cta">
                    <SecondaryButton Text='Pay Now' to={installmentLocationDetails.paystackSubLinks.threeTimes.link} disabled={!installmentLocationDetails.paystackSubLinks.threeTimes.price}/>
                </div>
            </div>
            <hr />
            <div className="details">
                <div className="deposit">
                    <h4>
                    Three Times Payment For Physical Classes
                    </h4>
                    <p>
                    {installmentLocationDetails.paystackSubLinks.threeTimes.price || 'Select a Location'}
                    </p>
                </div>
                <div className="cta">
                    <SecondaryButton Text='Pay Now' to={installmentLocationDetails.paystackSubLinks.threeTimes.link} disabled={!installmentLocationDetails.paystackSubLinks.threeTimes.price} />
                </div>
            </div>

            
            <select name="" id="" onChange={handleInstallmentLocationChange} value={installmentLocation} onBlur={handleBlur}>

                <option id="item" value="">Select a Location</option>
                <option value="Lekki-Weekend">LEKKI-WEEKEND</option>
                
                {
                    /* <option value="Ibadan">IBADAN</option>
                    <option value="Abuja">ABUJA</option>
                    <option value="Ikeja-Weekend">IKEJA-WEEKEND</option>
                    <option value="Anambra">ANAMBRA</option> */
                }

            </select>
        </div>
        <div className="online secondOption">
            <div className="details">
                <div className="deposit">
                    <h4>
                    Two Times Payment For Online Classes
                    </h4>
                    <p>
                    ₦155,950
                        <span>Initial deposit</span>
                    </p>
                </div>
                <div className="cta">
                    <SecondaryButton Text='Pay Now' to="https://paystack.com/pay/rtszcd4qwq" target='_blank' />
                </div>
            </div>
            <hr />
            <div className="details">
                <div className="deposit">
                    <h4>
                    Three Times Payment For Online Classes
                    </h4>
                    <p>
                        ₦104,000
                        <span>Initial deposit</span>
                    </p>
                </div>
                <div className="cta">
                    <SecondaryButton Text='Pay Now' to="https://paystack.com/pay/odioim9y0n" target='_blank' />
                </div>
            </div>
        </div>
      </section>
    </StyledPlans>
  )
}

export default Plans


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
    .oneTime{
        color: #373737;
        h4{
            font-size: 1.6rem;
        }
        p{
            font-size: 2rem;
            font-weight: 700;
        }
        .physical{
            padding: 2rem;
            border-radius: 4px;
            background: #E3F5F8;
        }
        .online{
            margin-top: 2rem;
            padding: 2rem;
            border-radius: 4px;
            background: #BAEAFA;
        }
    }
    .cta{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2.4rem;
    }
    .installment{
        border: 1px solid #1A1A1A;
        background: #FAFAFA;
        margin-top: 6.4rem;
        margin-bottom: 10rem;
        .secondOption{
            padding: 2rem;
            h4{
                font-size: 1.6rem;
                margin-bottom: 0.8rem;
            }
            hr{
                border : 2px solid #1A1A1A;
                margin: 2.4rem 0;
            }
            p{
                font-size: 2rem;
                font-weight: 700;
                margin-bottom: 2.4rem;
                span{
                    font-size: 1.4rem;
                    font-weight: 400;
                }
            }
        }
        .physical{
            border-radius: 4px;
            background: #E3F5F8;
        }
        .online{
            border-radius: 4px;
            margin-top: 2rem;
            background: #BAEAFA;
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
        .oneTime{
            .items{
                display: flex;
                justify-content: space-between;
                gap: 2rem;
            }
            h4{
                font-size: 2.4rem;
                margin-bottom: 3.4rem;
            }
            p{
                font-size: 3.6rem;
            }
            h5{
                font-size: 2rem;
            }
            .physical{
                padding: 3.8rem 2.5rem;
                width: 50%;
            }
            .online{
                margin-top: 0rem;
                padding: 3.8rem 2.5rem;
                width: 50%;
            }
        }
        .cta{
            margin-top: 0.55rem;
            justify-content: end;
        }  
        .installment{
            margin-top: 5.6rem;
            .secondOption{
                padding: 4rem;
                h4{
                    font-size: 1.587vw;
                    margin: 0;
                }
                hr{
                    margin: 2.4rem;
                }
                p{
                    font-size: 2.38vw;
                    margin: 0;
                    span{
                        font-size: 2rem;
                    }
                }
                h5{
                    font-size: 2rem;
                }
                .details{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .deposit {
                    display: flex;
                    justify-content: space-between;
                    align-items: baseline;
                    width: 75%;
                }
            }
            .online{
                margin-top: 5rem;
            }
        }
    }
`