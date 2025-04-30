import styled from "styled-components"
import checksvg from "../../assets/icon/markcheck.svg"
import bullet from "../../assets/icon/bullet.svg"
import {motion} from "framer-motion"

const Perks = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1
      }
    }
  };

  const listItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };
  return (
    <motion.div>
      <StyledPerks>
      <main>
        <header>
          <img src={checksvg} alt="" />
          <h1>Perks!</h1>
        </header>
        <section className="card">
          <h2>
          Why You Need This Technical PM Knowledge
          </h2>
          <hr />
          <motion.ul variants={container} initial="hidden" whileInView="show" >
            <motion.li variants={listItem}> <img src={bullet} alt="" />You are confused and lost during technical discussions</motion.li>
            <motion.li variants={listItem}> <img src={bullet} alt="" />You want to learn how to collaborate better with engineering teams</motion.li>
            <motion.li variants={listItem}><img src={bullet} alt="" />You have lost job opportunities due to lack of technical skills</motion.li>
            <motion.li variants={listItem}><img src={bullet} alt="" />You want to earn more money with your skills</motion.li>
            <motion.li variants={listItem}> <img src={bullet} alt="" />You want to grow your PM career faster</motion.li>
            <motion.li variants={listItem}> <h2>This Progam is Perfect For</h2></motion.li>
            <motion.li variants={listItem}></motion.li>
            <motion.li variants={listItem}> <img src={bullet} alt="" />Product Managers with 1+ year experience</motion.li>
            <motion.li variants={listItem}> <img src={bullet} alt="" />Non-technical founders managing dev teams</motion.li>
            <motion.li variants={listItem}><img src={bullet} alt="" />Non-technical talents looking to collaborate better with engineers</motion.li>
          </motion.ul>
          <p>
          At the end of this program, you will <span> Speak Tech, Collaborate Better</span>, Implement Faster, Grow Bigger & Become Richer!!!
          </p>
        </section>
      </main>
    </StyledPerks>
    </motion.div>
  )
}

export default Perks


const StyledPerks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom:4rem;
    main{
      width: 92%;
      margin-top: 2rem;
      max-width: 1000px;
    }
    header{
      display: flex;
      align-items: center;
      gap: 1.9rem;
      margin-bottom: 1.3rem;
      img{
          width: 2.5rem;
        }
      h1{
        color: #3D3D3D;
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 5rem;
      }
    }
    section.card{
      border-radius: 1rem;
      position: relative;
      z-index: 1000;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      box-shadow: 0px 20px 0px -10px #80A2FF;
      padding: 2.9rem 2.8rem 3.0rem 2.8rem;
      background: #003AD4;
      color: white;
      h2{
        font-size: 1.8rem;
        line-height: 4.1rem;
      }
      hr{
        margin: 1.7rem 0;
        border-color: #4175FF;
      }
      ul{
        list-style: none;
        li{
          display: flex;
          align-items: center;
          gap: 2.2rem;
          font-size: 1.6rem;
          line-height: 2.8rem;
          margin: 0.6rem 0;
        }
        li:nth-child(6){
          line-height: 2.8rem;
        }
      }
      p{
        margin-top: 2.2rem;
        font-size: 1.6rem;
        line-height: 2.9rem;
        span{
          font-weight: 700;
        }
      }
      div.smally{
        position: absolute;
        width: 90%;
        bottom: -200rem;
        z-index: -100;
      }
    }

    @media (min-width: 1024px) {
      main{
        margin-top: 4rem;
      }
      header{
        margin-bottom: 2.9rem;
        img{
          width: initial;
        }
        h1{
           font-size: 3.5rem;
        }
      }
      section.card{
        border-radius: 2.6rem;
        padding: 5.4rem 11.5rem;
        box-shadow: 0px 30px 0px -10px #80A2FF;
        h2{
          font-size: 2.3855rem;
          line-height: 5rem;
        }
        ul{
          li{
            font-size: 2.3855rem;
            line-height: 5rem;
          }
          li:nth-child(6){
            line-height: 5rem;
          }
        }
        p{
          font-size: 2.3855rem;
          line-height: 4rem;
        }
      }
    }
`