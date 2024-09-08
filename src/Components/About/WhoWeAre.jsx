import styled from "styled-components"
import aboutusimg from "../../assets/icon/aboutusimg.png"

const WhoWeAre = () => {
  return (
    <StyledWhoWeAre>
      <header>
        <h4>
            Who we are
        </h4>
        <img src={aboutusimg} alt="" width="100%"/>
        
      </header>
      <section>
        <p>
            Enoverlab is a training institute that provides Product Management training, mentorship, and internship to individuals and corporate organizations. Enoverlab is accredited by the American Council of Training and Development (ACTD).
        </p>
        <p className="margin">
            We have trained over 700 African talents to become Product Managers. Our Alumni’s work for some of the best organizations across Africa and the globe. We have alumni working at PWC (UK), Cambridge University Press & Assessment (UK), BorderlessHR (Canada), UNIDROIT (Italy), Code for Africa (South Africa), Access Bank, Opay, Renmoney, God is Good (GIG) group, GTbank, Kuda Bank, CreditDirect, Healthstack, SeamlessHR, Ulospaces, Drinks.ng, among others.
        </p>
        <p className="margin">
            Our trained product managers have been involved in creating products with a cumulative market value of over $100,000,000 in Africa.
        </p>
        <p className="margin">
            We are on a mission to build impactful product talents for today, tomorrow, & the future to transform the African continent.
        </p>
      </section>
    </StyledWhoWeAre>
  )
}

export default WhoWeAre

const StyledWhoWeAre = styled.div`
    background-color: white;
    padding: 0 2.4rem 6.4rem 2.4rem;
    header{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        h4{
            border-radius: 10px;
            padding: 1.7rem 2.8rem;
            background: rgba(128, 162, 255, 0.44);
            color: #002DA4;
            font-size: 2.8rem;
            margin-bottom: 2.4rem;
            font-weight: 700;
        }
        img{
            width: 100%;
            border-radius: 4px;
        }
    }
    section{
        color: #3D3D3D;
        padding-top: 2rem;
        text-align: justify;
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 2.2rem;
        .margin{
            margin-top: 1rem;
        }
    }
    @media (min-width: 1024px) {
        padding: 40.5rem 0 10rem 0;
        display: flex;
        justify-content: center;
        gap : 4.8rem;
        header{
            align-items: stretch;
        }
        section{
            padding-top: 0rem;
            font-size: 2.2rem;
            width: 70%;
            line-height: 3.1rem;
            .margin{
                margin-top: 3rem;
            }
        }
    }
`
