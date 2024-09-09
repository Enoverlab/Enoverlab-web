import { ErrorMessage, Field, Form, Formik } from "formik"
import styled from "styled-components"
import { SubmitButton } from "../../Utils/styled/Buttons"

const Register = () => {
  return (
    <StyledRegister>
      <header>
        <h2>
            Register Here
        </h2>
        <h4>
            Complete this form and join us at the Career fair.
        </h4>
      </header>
      <Formik
      initialValues={{full_name : '', email : '', work_currently : '', location : '', background : '', experience : ''}}
      >
        <Form className="form">
            <label htmlFor="full_name">
                <div>
                Full Name <span>*</span>
                </div>
                <Field name='full_name' id="full_name" placeholder= "John Doe"/>
                <ErrorMessage name="full_name" component="div" />
            </label>
            <label htmlFor="email">
                <div>
                Email <span>*</span>
                </div>
                <Field name='email' placeholder= "JohnDoe@email.com"/>
                <ErrorMessage name="email" component="div" />
            </label>
            <label htmlFor="work_currently">
                <div>
                Where do you currently work? <span>*</span>
                </div>
                <Field name='work_currently' placeholder= "Zenith Bank"/>
                <ErrorMessage name="work_currrently" component="div" />
            </label>
            <label htmlFor="location">
                <div>
                What location are you coming from? <span>*</span>
                </div>
                <Field name='location' placeholder= "Lagos"/>
                <ErrorMessage name="location" component="div" />
            </label>
            <label htmlFor="background">
                <div>
                What background do you have prior to Product management? <span>*</span>
                </div>
                <Field name='background' placeholder= "Retail Marketing"/>
                <ErrorMessage name="background" component="div" />
            </label>
            <label htmlFor="experience">
                <div>
                What is your experience level in Product management? <span>*</span>
                </div>
                <Field name='experience'  as="select">
                    <option value="">
                        Select an Option
                    </option>
                </Field>
                <ErrorMessage name="experience" component="div" />
            </label>
            <div className="submit">
                <SubmitButton Text="Submit"/>
            </div>
        </Form>
      </Formik>
    </StyledRegister>
  )
}

export default Register

const StyledRegister = styled.div`
    border-radius: 6px;
    background: #BAEAFA;
    padding: 5.1rem 2.4rem 3.9rem 2.4rem;
    text-align: center;
    header{
        h2{
            color:  #00001A;
            font-size: 2.4rem;
            font-weight: 700;
            line-height: normal;
        }
        h4{
            margin-top: 1rem;
            color: #373737;
            font-size: 3.7vw;
            font-weight: 400;
        }
    }
    .form{
        display: grid;
        gap: 2rem;
        text-align: left;
        margin-top: 2.9rem;
        label{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            div{
                color: #373737;
                font-size: 1.4rem;
                font-weight: 700;
                line-height: normal;
                span{
                    color: #F86C6C;
                    font-size: 1.4rem;
                    font-weight: 700;
                }
            }
            input,select{
                width: 100%;
                padding: 1rem 1.6rem;
                color: rgba(158, 158, 158, 0.85);
                font-size: 1.6rem;
                font-weight: 400;
                border-radius: 6px;
                border: 0.5px solid #BBB;
            }
        }
        .submit{
            display: flex;
            justify-content: center;
            margin-top: 3.9rem;
        }
    }
    @media (min-width: 700px) {
        header{
            h2{
                color:  #00001A;
                font-size: 2.8rem;
                font-weight: 700;
                line-height: normal;
            }
            h4{
                color: #373737;
                font-size: 1.8rem;
                font-weight: 400;
            }
        }
    }
    @media (min-width: 1024px) {
        padding: 10.3rem 9.6rem;
        header{
            h2{
                font-size: 3.6rem;
                font-weight: 700;
            }
            h4{
                font-size: 2.4rem;
                font-weight: 400;
                line-height: 30px; 
            }
        }
        .form{
            grid-template-columns: repeat(2,auto);
            row-gap: 3.6rem;
            column-gap: 2.4rem;
            margin-top: 4.7rem;
            label{
                gap: 1.6rem;
                div{
                    font-size: 1.6rem;
                }
                input,select{
                    width: 100%;
                    font-size: 2rem;
                    line-height: 30px;
                    padding: 1.3rem 2.4rem;
                }
            }
            .submit{
                margin-top: 7.2rem;
                grid-column: span 2 / span 2;
            }
        }
        
    }
`
