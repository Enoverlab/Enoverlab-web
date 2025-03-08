import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { ErrorMessage, Field, Form, Formik } from "formik"
import biodata from "../../../assets/assessment/biodata.png"
import * as Yup from "yup"
import cancelModal from '../../../assets/icon/cancelModal.svg'

Modal.setAppElement('#root');
const UserDataPop = ({open,requestClose}) => {
    const [loading] = useState(false)
    useEffect(()=>{
        if(open){
            document.body.style.overflow = "hidden";
            document.body.style.height = "100vh";
        }else{
            document.body.style.overflow = "auto";
            document.body.style.height = "auto";
        }
    },[open])
    if(!open) return null
  return (
    <StyledModal>
        <Modal onRequestClose={requestClose} isOpen={open} style={{
        content : {
        width : '98%',
        position : 'relative',
        inset : 0,
        background: 'none',
        paddingTop: '100px',
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
            <section>
                <img src={biodata} alt="biodata" />
            </section>
            <section className='bio'>
                <header>
                    Biodata
                </header>
                <Formik initialValues={{name : '', email : '', phnNo : '',checkCondition : false}} validationSchema={Yup.object({
                name : Yup.string().required('Your fullname is required to continue'),
                email : Yup.string().email('Must be a valid email address').required('Email address is required'),
                phnNo : Yup.number().required('A valid phone number is required'),
                checkCondition : Yup.boolean()
                .required("The terms and conditions must be accepted.")
                .oneOf([true], "The terms and conditions must be accepted."),
                })} 
                onSubmit={()=>{}}>
                    {
                        ({setFieldValue,dirty,isValid})=>(<Form className='form'>
                            <label htmlFor="name">
                                Name
                                <Field name='name'/>
                                <ErrorMessage name='name'>
                                {
                                    msg => <div style={{ color: 'red' }}>{msg}</div>
                                }
                                </ErrorMessage>
                            </label>
                            <label htmlFor="email">
                                Email address
                                <Field name='email'/>
                                <ErrorMessage name='email'>
                                {
                                    msg => <div style={{ color: 'red' }}>{msg}</div>
                                }
                                </ErrorMessage>
                            </label>
                            <label htmlFor="phnNo">
                                Phone Number
                                <Field name='phnNo'/>
                                <ErrorMessage name='phnNo'>
                                {
                                    msg => <div style={{ color: 'red' }}>{msg}</div>
                                }
                                </ErrorMessage>
                            </label>
                            <label htmlFor="checkCondition" >
                                <div className="condition">
                                    <input type="checkbox" name="checkCondition" id="checkCondition" onChange={(e)=>{
                                    setFieldValue('checkCondition', e.currentTarget.checked)
                                    }} />
                                    I agree to the terms and conditions
                                </div>
                                <ErrorMessage name='checkCondition'>
                                {
                                    msg => <div style={{ color: 'red' }}>{msg}</div>
                                }
                                </ErrorMessage>

                            </label>
                            <button disabled={!(isValid && dirty) || loading }>
                                Continue
                            </button>
                        </Form>)
                    }
                </Formik>
            </section>
        </StyledModal>
        <StyledCancel>
            <img src={cancelModal} alt="" onClick={requestClose}/>
        </StyledCancel>
      
    </Modal>
    </StyledModal>
  )
}

export default UserDataPop

const StyledModal = styled.div`
    padding: 4rem 1rem;
    background-color: white;
    box-shadow: 0px 15px 33px 20px rgba(0, 0, 0, 0.10);
    section img {
        height: 50.90vh;
        width: 86.5vw;
        object-fit: fill;
    }
    .bio{
        width: 100%;
    }
    header{
        margin-top: 6rem;
        color: #3D3D3D;
        font-size: 2.8rem;
        font-weight: 600;
    }
    .form{
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
        width: 100%;
        label{
            display: flex;
            flex-direction: column;
            color: #3D3D3D;
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 0.8rem;
            input {
                border-radius: 5px;
                border: 1px solid #CCC;
                padding: 1rem 1rem;
                outline: none;
                background: #FFF;
            }
            .condition{
                display: flex;
                align-items: center;
                gap: 1rem;
                color: #8C8C8C;
                font-size: 1.6rem;
                font-weight: 500;
                input[type="checkbox"] {
                    width: 24px;
                    height: 24px;
                    cursor: pointer;
                    accent-color: #003AD4; /* Changes checkbox color */
                }
            }
        }
        button{
            width: 100%;
            padding: 1rem 0rem;
            border-radius: 10px;
            background: #003AD4;
            margin-top: 3.3rem;
            color: #FFF;
            text-align: center;
            font-size: 2.2rem;
            font-weight: 500;
        }
        button:disabled{
            background: rgb(84, 109, 179);
            cursor: not-allowed;
        }
    }
    @media (min-width: 700px) {
        padding: 4rem 4rem;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        gap: 2rem;
        border-radius : 1.5rem;
        section img {
            width: 46.5vw;
            height: 100%;
        }
        .bio{
            width: 64.23vw;
        }
        header{
            font-size: 36px;
            margin-top: 4.3rem;
        }
        .form{
            margin-top: 3.5rem;
            label{
                font-size: 18px;
                input{
                    padding: 1rem 1rem;
                }
                .condition{
                    font-size: 1.8rem;
                }
            }
        }
    }
    @media (min-width: 1024px) {
        width: 64.9vw;
        max-width: 95rem;
        padding : 3.9rem 5rem 6rem 5rem;
        section img {
            width: 18.4vw;
        }
        .bio{
            width: 34.23vw;
        }
        header{
            margin-top: 5.3rem;
        }
        .form{
            margin-top: 4.4rem;
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
