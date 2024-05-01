import styled from "styled-components";
import { partners } from "../../constants";

const Partners = () => {
  return (
    <StylePartners>
      <header>Our Partners</header>
      <main>
        <div>{partners.map((partner, index)=>{
            if(index < 3){
                return <img src={partner} alt="partners"/>
            }
            return null;
        })}</div>
        <div>{partners.map((partner, index)=>{
            if(index > 2){
                return <img src={partner} alt="partners"/>
            }
            return null;
        })}</div>
      </main>
    </StylePartners>
  );
};

export default Partners;

const StylePartners = styled.div`
  margin-bottom: 3rem;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  header {
    padding: 4.1rem 2.4rem;
    font-weight: 700;
    color: var(--Body-Text);
    font-size: 1.6rem;
    padding-bottom: 4rem;
  }
  main {
    padding: 0 2.4rem;
    display: flex;
    flex-direction: column ;
    /* flex-wrap: wrap; */
    align-items: center;
    padding-bottom: 4rem;
    gap: 1.2rem;
    div{
        display: flex;
        gap: 1.2rem;
    }
    img {
      width: 25.73vw;
    }
  }
  @media (min-width: 1024px) {
    header {
      padding: 3.2rem 9.6rem;
      font-size: 20px;
      padding-bottom: 2.8rem;
    }
    main {
      padding: 0rem 9.6rem;
      display: flex;
      flex-direction: row;
      /* padding-left: 10px; */
      padding-bottom: 2.8rem;
      gap: 12rem;
      div{
        gap: 12rem;
      }
      img {
        width: 11.24vw;
      }
    }
  }
`;
