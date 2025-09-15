import styled from "styled-components"
import checksvg from "../../assets/icon/markcheck.svg"
import bullet from "../../assets/icon/bullet.svg"
import {motion} from "framer-motion"

const Guarantee = () => {
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
    <motion.div>
      <StyledGuarantee>
      <main>
        <header>
          <img src={checksvg} alt="" />
          <h1>100% JOB GUARANTEE!</h1>
        </header>
        <section className="card">
          <h2>
          If you go through this program effectively for the next 3 months; 
          </h2>
          <hr />
          <motion.ul variants={container} initial="hidden" whileInView="show" >
            <motion.li variants={listItem}> <img src={bullet} alt="" />Attending all classes</motion.li>
            <motion.li variants={listItem}> <img src={bullet} alt="" />Doing the assignments</motion.li>
            <motion.li variants={listItem}><img src={bullet} alt="" />Participating in the group work</motion.li>
            <motion.li variants={listItem}><img src={bullet} alt="" />Working on the capstone project</motion.li>
            <motion.li variants={listItem}> <img src={bullet} alt="" />Following the instructions of your trainers</motion.li>
          </motion.ul>
          <p>
          You will definitely get a Product Manager job anywhere in the world, <span>regardless of your background</span>, education, or degree.
          </p>
        </section>
      </main>
    </StyledGuarantee>
    </motion.div>
  )
}

export default Guarantee


const StyledGuarantee = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom:4rem;
    main{
      width: 92%;
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
          line-height: 5rem;
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