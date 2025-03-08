import styled from "styled-components"
import {motion} from "framer-motion"
import check from "../../../assets/assessment/check.svg"

const Area = ({handleSwitch}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.7
      }
    }
  };
  const listItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };
  return (
    <StyledArea>
      <header>
        Key Areas Assessed:
      </header>
      <section>
        <motion.ul variants={container} initial="hidden" whileInView="show" >
          <motion.li variants={listItem}> <img src={check} alt="" />Product Management Process</motion.li>
          <motion.li variants={listItem}> <img src={check} alt="" />Business Acumen & Strategy</motion.li>
          <motion.li variants={listItem}><img src={check} alt="" />Communication & Leadership</motion.li>
          <motion.li variants={listItem}><img src={check} alt="" />Marketing & Product Launch</motion.li>
          <motion.li variants={listItem}> <img src={check} alt="" />Market Research & Competitive Analysis</motion.li>
          <motion.li variants={listItem}> <img src={check} alt="" />Customer Understanding & Knowledge</motion.li>
        </motion.ul>
      </section>
      <footer>
        <h5>
        Discover Your Strengths Today!
        </h5>
        <p>
          Take the next step in your product management <br /> journey with Enoverlab’s skill assessment
        </p>
        <div className="button">
          <button onClick={handleSwitch}>
            Begin Assessment
          </button>
        </div>
      </footer>
    </StyledArea>
  )
}

export default Area

const StyledArea = styled.div`
  margin-top: 5.3rem;
  header{
    text-align: center;
    color: #303030;
    font-weight: 600;
    font-size: 1.6rem;
    margin-bottom: 2.1rem;
  }
  section{
    background: #003AD4;
    border-radius: 0.6rem;
    padding: 4rem 3.6vw;
    ul {
      display: grid;
      gap: 1.2rem;
      li{
        display: flex;
        gap: 0.4rem;
        color: white;
        font-size: 1.4rem;
        font-weight: 400;
      }
    }
  }
  footer{
    margin-top : 1.8rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #303030;
    font-size: 1.3rem;
    color: #303030;
    font-size: 1.3rem;
    h5{
      font-weight: 600;
    }
    p{
      font-style: italic;
    }
    div.button{
      display: flex;
      justify-content: center;
    }
    button{
      margin-top: 2.6rem;
      font-weight: 500;
      border-radius: 0.5rem;
      color : white;
      width: 23.2rem;
      padding: 1rem 0rem;
      font-size: 1.6rem;
      background-color: #003AD4;
    }
  }
  @media (min-width: 700px) {
    
  }
  @media (min-width: 1024px) {
    margin-top: 8.4rem;
    header{
      font-size: 2.22vw;
    }
    section{
      padding: 5rem 8.15vw;
      border-radius: 1rem;
      ul{
       grid-template-columns: repeat(2,1fr);
       place-content: center;
       row-gap: 1.6rem;
       list-style: none;
       li{
        gap: 1.6rem;
        font-size: 1.8rem;
       }
      }
    }
    footer{
      margin-top: 2.1rem;
      font-size: 1.8rem;
      h5{
        font-size: 1.8rem;
      }
      p{
        br{
          display: none;
        }
      }
      button{
        margin-top: 5.3rem;
        width: 45.1rem;
        padding: 1rem 0rem;
        font-size: 1.8rem;
      }
    }
  }
`
