import styled from "styled-components"
import visitbg from "../../assets/icon/visitbg.png"
import visitlpbg from "../../assets/icon/visitlpbg.png"

const Visit = () => {
  return (
    <StyledVisit>
      <header>
        <h1>
            Visit our other <br /> Learning Centres
        </h1>
        <p>
            Find us at these locations
        </p>
      </header>
      <main>
        <div>
            <h1>
                Lekki
            </h1>
            <p>
            Lekki Gateview Plaza, Admiralty way, Lekki Phase 1
            </p>
        </div>
        <div>
            <h1>
                Ibadan
            </h1>
            <p>
            Cafe One, Palms Mall, Ring Road, Ibadan
            </p>
        </div>
        <div>
            <h1>
                Anambra
            </h1>
            <p>
                Kodex Africa, Plot No. A/127, Iyiagu Housing Estate, Awka,Anambra
            </p>
        </div>
        <div>
            <h1>
            Abuja
            </h1>
            <p>
                22 Kumasi Cres, Wuse 2, Abuja
            </p>
        </div>
        <div>
            <h1>
                Ikeja
            </h1>
            <p>
                EridanSpace, Oluwalogbon House, Plot A Obafemi Awolowo Way, Alausa, Ikeja
            </p>
        </div>
      </main>

    </StyledVisit>
  )
}

export default Visit

const StyledVisit = styled.div`
    background: url(${visitbg});
    background-repeat: no-repeat;
    background-size: cover;
    padding: 5.3rem 2.4rem;
    font-family: 'Plus Jakarta Sans', sans-serif;
    header{
        color: white;
        text-align: center;
        margin-bottom: 2.4rem;
        h1{
            font-size: 2.4rem;
            font-weight: 700;
            br{
                display: none;
            }
        }
        p{
            font-size: 1.4rem;
            color: rgba(255, 255, 255, 0.85);
        }
    }
    main{
        display : grid;
        grid-template-columns: repeat(2, auto);
        row-gap: 2.4rem;
        column-gap: 4.5rem;
        color: rgba(255, 255, 255, 0.85);
        h1{
            font-size: 1.6rem;
            font-weight: 700;
            margin-bottom: 0.8rem;
        }
        p{
            font-size: 1.4rem;
        }
    }
    @media (min-width: 1024px) {
        background: url(${visitlpbg});
        background-repeat: no-repeat;
        padding: 7.8rem 9.6rem;
        display: grid;
        grid-template-columns: repeat(2, auto);
        column-gap: 11.6rem;
        header{
            text-align: left;
            h1{
                font-size: 3.6rem;
                font-weight: 700;
                color: white;
                br{
                    display: block;
                }
            }
            p{
                font-size: 2rem;
            }
        }
        main{
        grid-template-columns: repeat(3, auto);
        column-gap: 2.4rem;
        color: rgba(255, 255, 255, 0.85);
        h1{
            font-size: 2rem;
            color: white;
            font-weight: 700;
            margin-bottom: 1.6rem;
        }
        p{
            font-size: 2rem;
            line-height: 3rem;
        }
    }
    }
`
