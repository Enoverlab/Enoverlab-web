import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from "yup"
import styled from 'styled-components'
import { H3, H4 } from '../../Utils/styled/Typograpyhy'
import { SubmitButton } from '../../Utils/styled/Buttons'
import axios from 'axios'

const Formi = () => {
  return (
    <StyledForm>
    <Formik
    initialValues={{name: "", email : ""}}
    validationSchema={
        Yup.object({
            name : Yup.string().min(5, "Name must be atleast 5 characters long").required('Field is Requred!'),
            email : Yup.string().email("Must be a Valid Email Address").required('Field is Requred!')
        })
    }
    onSubmit={(values, { setSubmitting, }) => {
        const tkn = process.env.REACT_APP_BIRDSEND_TKN
        const config = {
            headers : {
                Authorization : `Bearer ${tkn}`
            }
        }
        function checkNaming(){
            const nameBreakdown = values.name.split(' ')
            const firstName = nameBreakdown[0]
            if(nameBreakdown[1]){
                const lastName = nameBreakdown[1]
                return {
                    first_name : firstName,
                    last_name : lastName
                }
            }
            return {
                first_name : firstName
            }
        }
        const namingResult = checkNaming()
        console.log(namingResult)
        axios.post('https://api.birdsend.co/v1/contacts',
            {
                email : values.email,
                fields : {
                    ...namingResult
                }
            },config
        )
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
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
                <div className='form1'>
                <Field name='name' type="text" placeholder="Name"/>
                <ErrorMessage name='name' id='name' render={msg => <div className='err'>{msg}</div>} />
                </div>
                <div className='form1'>
                <Field name='email' type="email" placeholder="Email"/>
                <ErrorMessage name='email' id='email' render={msg => <div className='err'>{msg}</div>} />
                </div>
                <div className='button'>
               <SubmitButton Text="Register"/>
                </div>
                </section>
        </Form>
    </Formik>
      
    </StyledForm>
  )
}

export default Formi



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
                margin-top: 25px;
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
        padding: 5.2rem 9.6rem;
        form{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            .write{
                width: 40%;
            }
            .forms{
                width: 40%;
            }
            .button{
                display: flex;
                width: 100%;
                max-width: 450px;
                justify-content: flex-start;
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
