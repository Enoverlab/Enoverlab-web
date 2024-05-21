import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from "yup"
import styled from 'styled-components'
import { H1, H2, H3, H4 } from '../../Utils/styled/Typograpyhy'
import { PrimaryButton, SecondaryButton } from '../../Utils/styled/Buttons'

const Formi = () => {
  return (<StyledFormi>
  <StyledForm>
    <Formik
    initialValues={{name: "", email : ""}}
    validationSchema={
        Yup.object({
            name : Yup.string().min(5, "Name must be atleast 5 characters long").required('Field is Requred!'),
            email : Yup.string().email("Must be a Valid Email Address").required('Field is Requred!')
        })
    }
    onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
        <Form>
                <section className='write'>
                    <H3 mdfs="1.587vw" fs="5.607vw" mb="1.6rem" mdmb="2.4rem" color='#fff'>
                    Can't enroll now? 
                    </H3>
                    <H4 color='#C7C7FF'>Receive updates on our next admission batch, free product management knowledge, tips, and trends in the industry
                    </H4>
                </section>
                <section className='forms'>
                <div className='form12'>
                <div className='form1'>
                <Field name='name' type="text" placeholder="Name"/>
                <ErrorMessage name='name' id='name' render={msg => <div className='err'>{msg}</div>} />
                </div>
                <div className='form1'>
                <Field name='email' type="email" placeholder="Email"/>
                <ErrorMessage name='email' id='email' render={msg => <div className='err'>{msg}</div>} />
                </div>
                </div>
                <div className='button'>
               <SecondaryButton Text="Register"/>
                </div>
                </section>
        </Form>
    </Formik>
    </StyledForm>
    <section className='physical'>
        <H1>Can't attend physically?</H1>
        <H2>Sign up for our online instructor led training that you can join from anywhere you are in the world.</H2>
        <PrimaryButton bg="white" border="none" Text="Online Training" />
    </section>
  </StyledFormi>)
}

export default Formi

const StyledFormi = styled.div`
.physical{
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    background: rgba(0, 70, 255, 0.20);
    padding: 4.8rem 3rem;
    h1{
        font-size: 2.4rem;
        color: #181818;
    }
    h2{
        font-size: 1.4rem;
        color: var(--Body-Text);
        font-weight: 400;
    }
}
@media (min-width: 1024px) {
    display: flex;
    .physical{
        gap: 3.5rem;
        padding: 4.8rem 9rem;
        h1{
            font-size: 2.4rem;
        }
        h2{
            font-size: 2rem;
        }
    }
}
`

const StyledForm = styled.div`
    background-color: #010140;
    padding: 4.7rem 2.4rem;
    form{
            .write{
                width: 95%;
                margin-bottom:3.2rem;
            }
            .button{
                display: flex;
                width: 100%;
                max-width: 450px;
                justify-content: center;
            }
        }
    input{
        color: rgba(24, 24, 24, 0.55);
        padding:1.6rem 2.4rem ;
        border-radius: 4px;
        width: 100%;
        max-width: 450px;
        font-size: 1.4rem;
    }
    .form1, .form2{
            display: flex;
            flex-direction: column;
            margin-bottom: 0.8rem;
        }
        .err{
            margin-top: 5px;
            font-size: 14px;
            color: red;
        }
    @media (min-width: 1024px) {
        padding: 5.2rem 0 5.2rem 9.6rem;
        width: 100%;
        form{
            .button{
                display: flex;
                width: 100%;
                max-width: 450px;
                justify-content: flex-start;
            }
            .forms{
                display: flex;
                align-items: center;
                gap: 3rem;
            }
            .form12{
                width: 100%;
            }
        }
        input{
            font-size: 1.6rem;
            width: 100%;
        }

        .form1{
            margin-bottom: 1.6rem;
        }
    }
`
