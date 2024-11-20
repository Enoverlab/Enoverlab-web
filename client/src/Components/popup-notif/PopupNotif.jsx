import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import notif from '../../assets/icon/notifIcon.svg';
import cancelModal from '../../assets/icon/cancelModal.svg'

Modal.setAppElement('#root');
const PopupNotif = () => {
    const [open, setOpen] = useState(false)

    useEffect(()=>{
        if(open){
            document.body.classList.add('bodyStiff')
        }else{
            document.body.classList.remove('bodyStiff')
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
  return (
    <StyledModal>
        <Modal onRequestClose={handleSwitch} isOpen={open} style={{
        content : {
          width : '98%',
        //   maxWidth : '982px',
        position : 'relative',
        inset : 0,
        background: 'none',
        //   opacity : '1',
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
            <header>
                <div>
                    <h4 >
                        <img src={notif} alt="" />
                        PRICE INCREASE ALERT!!!
                    </h4>
                </div>
            </header>
            <main>
                <p>
                Due to the increase in operational cost of delivering an incredible learning experience to you, the price of all our programs will be increased by <span>January 1, 2025</span>.
                </p>
                <p>
                If you want to sign up for the classes in January, we advise that you make payment on or before <span>December 31, 2024</span>, so you can pay based on the current price.
                </p>
                <p>
                Thank you for your understanding!
                </p>
            </main>
        </StyledModal>
        <StyledCancel>
            <img src={cancelModal} alt="" onClick={handleSwitch}/>
        </StyledCancel>
      
    </Modal>
    </StyledModal>
  )
}

export default PopupNotif

const StyledModal = styled.div`
    font-family: "Inter", sans-serif;
    width: 100%;
    background : white;
    opacity : '1';
    border : '1px solid #A8A8A8';
    border-radius : 2.5rem;
    padding :  1.4rem;
    header{
        div{
            display: flex;
            justify-content: center;
            margin-bottom: 2.8rem;
            h4{
                background-color: #FFEBEB;
                display: flex;
                align-items: center;
                text-align: center;
                width: fit-content;
                font-size: 2rem;
                font-weight: 700;
                border-radius: 1.1rem;
                padding: 1.6rem;
                gap: 1rem;
            }
        }
    }
    main{
        background-color: #003AD4;
        border-radius: 12.218px;
        border: 1.863px solid #D4D4D4;
        padding: 3.4rem;
        display: flex;
        flex-direction: column;
        font-size: 1.2rem;
        gap: 0.5rem;
        line-height: 26.572px;
        color: white;
        span{
            font-weight: 700;
        }
    }
    @media (min-width: 1024px) {
        width: 68.19vw;
        max-width: 982px;
        padding :  3.6rem;
        border-radius : 4.8rem;
        header{
            div{
                h4{
                    font-size: 2.5vw;
                    padding: 2.8rem;
                    gap: 1rem
                    
                }
            }
        }
        main{
            border-radius: 24.218px;
            padding: 4rem 5.7rem;
            font-size: 1.25vw;
            line-height: 46.572px;
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
