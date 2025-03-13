import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import cancelModal from '../../../assets/icon/cancelModal.svg'
import access from '../../../assets/assessment/access.png'
import {motion} from "framer-motion"
import { Link } from 'react-router-dom';
import footery from '../../../assets/assessment/footery.svg'


Modal.setAppElement('#root');
const AccessModal = () => {
    const [open, setOpen] = useState(false)
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
    useEffect(()=>{
        if(open){
            document.body.style.overflow = "hidden";
            document.body.style.height = "100vh";
        }else{
            document.body.style.overflow = "auto";
            document.body.style.height = "auto";
        }
    },[open])
    useEffect(()=>{
        setTimeout(()=>{
            setOpen(true)
        },4000)
    },[])
    function handleSwitch(){
        setOpen(!open)
    }
    if(!open) return null
  return (
    <StyledModal>
        <Modal onRequestClose={handleSwitch} isOpen={open} style={{
        content : {
        width : '98%',
        position : 'relative',
        inset : 0,
        background: 'none',
        paddingTop: '150px',
        border : 'none',
        display: 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        gap : '3rem'
        },
        overlay: {
          zIndex : 20000,
          display: 'flex',
          justifyContent : 'center',
          alignItems : 'center',
          background : 'rgba(0,0,0,0.5)',
          width : '100%',
          overflowY: 'scroll',
          backdropFilter : 'blur(1.6500015258789px)'
        },
      }}>
        <StyledModal>
            <main>
                <section>
                    <img src={access} alt="" />
                </section>
                <section className='writeup'>
                    <header>
                        Quick Assessment Access
                    </header>
                    <h4>
                        Ready to assess your Product Management skills?
                    </h4>
                    <h5>
                        Click below to start your 15-minute evaluation and unlock personalized insights!
                    </h5>
                    <div>
                        <motion.ul variants={container} initial="hidden" whileInView="show" >
                        <motion.li variants={listItem}>50 Questions to test core skills</motion.li>
                        <motion.li variants={listItem}>Instant Result to identify areas of growth</motion.li>
                        <motion.li variants={listItem}>Secure & Private - your data stays protected</motion.li>
                        </motion.ul>
                    </div>
                    <Link to='/assessment/about'>
                        <div className='cta'>
                        Access my skills now
                        </div>
                    </Link>
                </section>
            </main>
            <footer>
                <img src={footery} alt="" />
            </footer>
        </StyledModal>
        <StyledCancel>
            <img src={cancelModal} alt="" onClick={handleSwitch}/>
        </StyledCancel>
      
    </Modal>
    </StyledModal>
  )
}

export default AccessModal

const StyledModal = styled.div`
    width: 100%;
    background : white;
    opacity : '1';
    border : '1px solid #A8A8A8';
    border-radius :2rem;
    padding :  1.4rem;
    main{
        section img {
        height: 50.90vh;
        width: 86.5vw;
        object-fit: fill;
        }
        section.writeup{
            padding: 1.8rem 3vw;
            width: 100%;
            header{
                color: #303030;
                font-size: 7.2vw;
                font-weight: 700;
            }
            h4{
                color: #3D3D3D;
                font-size: 4.09vw;
                line-height: 28px;
                font-weight: 500;
                padding: 0;
                margin: 0;
            }
            h5{
                color: #3D3D3D;
                font-size: 3.18vw;
                font-weight: 500;
                line-height: 2.7rem;
                padding: 0;
                margin: 0;
            }
            ul{
                list-style: none;
                padding: 0;
                margin: 0;
                li{
                    width: fit-content;
                    color: #3D3D3D;
                    padding: 1rem 2rem;
                    font-size: 3.18vw;
                    font-weight: 400;
                    border-radius: 2.8rem;
                    margin-bottom: 1.4rem;
                }
                li:nth-child(1){
                    background: #FEE;
                }
                li:nth-child(2){
                    background: #EEF4FF;
                }
                li:nth-child(3){
                    background: #FBFFEE;
                    padding-right: 1rem;
                }
            }
            .cta{
                color: #FFF;
                font-size: 1.6rem;
                text-align: center;
                padding: 1rem 0rem;
                font-weight: 700;
                max-width: 35.3rem;
                border-radius: 10px;
                transition: all;
                transition-duration: 500ms;
                background: #003AD4;
                border : 1px solid #003AD4;
            }
            .cta:hover{
                color : #003AD4;
                background-color: whitesmoke;
            }
        }
    }
    footer{
        margin-top: 4rem;
        img{
            width: 90vw;
        }
        
    }
    @media (min-width: 700px) {
        padding : 3.9rem 4.5rem;
        main{
            display: flex;
            flex-direction: row-reverse;
            gap: 5rem;
            section img {
                width: 46.5vw;
                height: 100%;
                border-radius: 1rem;
            }
            section.writeup{
                padding: 0;
                margin-top: 3.5rem;
                header{
                    font-size: 3vw;
                    margin-bottom: 2rem;
                }
                h4{
                    font-size: 2vw;
                    margin-bottom: 1rem;
                }
                h5{
                    font-size: 1.8vw;
                    margin-bottom: 1rem;
                }
                ul{
                    li{
                        font-size: 1.7vw;
                    }
                }
                .cta{
                    margin-top: 3rem;
                }
            }
        }
        footer{
            display: flex;
            justify-content: end;
            img{
                width: 30vw;
            }
        }
        
    }
    @media (min-width: 1024px) {
        width: 73.9vw;
        max-width: 113rem;
        padding : 3.9rem 4.5rem;
        gap: 4.79vw;
        main{
            section img{
                width: 27.7vw;
                object-fit: cover;
            }
            section.writeup{
                margin-top: 4.5rem;
                width: 39.9vw;
                header{
                    font-size: 2.7vw;
                    margin-bottom: 4rem;
                }
                h4{
                    font-size: 1.6vw;
                    margin-bottom: 2rem;
                }
                h5{
                    font-size: 1.52vw;
                    margin-bottom: 3.5rem;
                }
                ul{
                    li{
                        font-size: 1.25vw;
                    }
                }
                .cta{
                    margin-top: 4.9rem;
                }
            }
        }
        footer{
            img{
                width: 20vw;
            }
        }
    }
`

const StyledCancel = styled.div`
    img{
        width: 3.5rem;
        font-weight: 700;
        cursor: pointer;
    }
    @media (min-width: 1024px) {
        img{
        width: 5.5rem;
    }
    }
`
