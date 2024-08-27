import Modal from 'react-modal';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { countries,countryCodes } from '../../constants';
import { SubmitButton } from '../../Utils/styled/Buttons';
import { Link } from 'react-router-dom';
import * as Yup from 'yup'
import axios from 'axios';
import LoadingScreen from '../LoadingScreen';
import Submission from '../Submission';


const CloseIcon = ({...props})=> (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
  <path d="M8.4 17L12 13.4L15.6 17L17 15.6L13.4 12L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4L10.6 12L7 15.6L8.4 17ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z" fill="#5F6368"/>
  </svg>
)


const StandardForm = ({handleCloseModal, modalDetails}) => {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  Modal.setAppElement('#root');
  const [formDetails, setFormDetails] = useState({
    formPost : '',
    fullnameFieldName: '',
    emailFieldName : '',
    countryCodeFieldName: '',
    phnNoFieldName : '', 
    locationFieldName : '',
    occupationFieldName : '',
    knowAboutFieldName : ''
  })

  useEffect(()=>{
    if(modalDetails.open){
      document.body.style.cssText = 'overflow: hidden;'
    }else{
      document.body.style.cssText = ''
    }

    switch (modalDetails.place){
      case 'Lekki':
        setFormDetails({
          fullnameFieldName: '',
          emailFieldName : '',
          countryCodeFieldName: '',
          phnNoFieldName : '', 
          locationFieldName : '',
          occupationFieldName : '',
          knowAboutFieldName : ''
        })
        break;
      case 'Ibadan':
        setFormDetails({
          fullnameFieldName: '',
          emailFieldName : '',
          countryCodeFieldName: '',
          phnNoFieldName : '', 
          locationFieldName : '',
          occupationFieldName : '',
          knowAboutFieldName : ''
        })
        break;
      case 'Anambra':
        setFormDetails({
          fullnameFieldName: '',
          emailFieldName : '',
          countryCodeFieldName: '',
          phnNoFieldName : '', 
          locationFieldName : '',
          occupationFieldName : '',
          knowAboutFieldName : ''
        })
        break;
      default:
        setFormDetails({
          formPost : 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScpjm-tCzcioB1QORVotBlBg_vmwDNQnBD4JkUpJuUbBhW0QA/formResponse',
        })
    }

  },[modalDetails])

  return (
      <Modal onRequestClose={handleCloseModal} isOpen={modalDetails.open}
      style={{
        content : {
          zIndex : 300,
          width : '98%',
          maxWidth : '100rem',
          position : 'relative',
          marginTop : '150px',
          inset : 0,
          background: '#F7F7F7',
          padding : '0px',
        },
        overlay: {
          zIndex : 300,
          display: 'flex',
          justifyContent : 'center',
          alignItems : 'center',
          height : '100%',
          width : '100%',
          overflowY: 'scroll',
        },
      }}
      >
      <StyledStandardForm>
        <Formik
        initialValues={{
          fullName : '',
          email : '',
          countryCode: '',
          phnNo : '', 
          location : '',
          occupation : '',
          knowAbout : ''

        }}
        validationSchema={Yup.object({
          fullName : Yup.string().required('Your full name is required'),
          email : Yup.string().email('Must be a valid email address').required('Email field is required'),
          phnNo : Yup.number().required('Phone Number is required').test(
            'len',
            "Doesn't look like a real phone number 👀",
            (val) => val && val.toString().length >= 10 && val.toString().length <= 11
          ),
          location : Yup.string().required('Kindly fill in yout locale'),
          occupation : Yup.string().required('We would like to know your occupation'),
          knowAbout : Yup.string().required('Give us a tip of who refferd you 😊')
        })}
        onSubmit={(values)=>{
          const subValues = {
            "entry.740827428"  : values.fullName,
            "entry.1252540315" : values.email,
            "entry.1702911739" : `${values.phnNo}`,
            "entry.225648131" : values.location,
            "entry.761658912" : values.occupation,
            "entry.2009367428" : values.knowAbout,
            "entry.2009367428_sentinel" :  ''
          }
          setLoading(true)
          axios.postForm(formDetails.formPost, subValues)
          .then((res)=>{
            console.log(res)
          })
          .catch((err)=>{
            console.log(err)
          })
          .then(()=>{
            setTimeout(()=>{
              setLoading(false)
              setSubmitted(true)
            },2500)
          })
        }}
        >
          {({isValid,dirty})=>(
            <Form className='form'>
              <CloseIcon className='closeIcon' onClick={loading ||handleCloseModal}/>
              {
                loading ? (<LoadingScreen/>) : submitted ? (<Submission heading="Success!!!" subheading="Your enrolment form has been successfully submitted."/>) : (<>
                <header id='header'>
                  Enrolment Form
                </header>
                <div className='heading'>
                  <h3>
                    By completing this form, you are applying for the {modalDetails.formtype} {modalDetails.site} Product <br /> Management training.
                  </h3>
                  <h4>
                    Ensure you fill in your details correctly below. 
                  </h4>
                  <h5>
                    You would be contacted by the admission team within 24 hours!
                  </h5>
                </div>
                <main>
                  <label htmlFor="">
                    <h4>Full Name <span>*</span></h4>
                    <Field name='fullName'>
                    {({ 
                            field, 
                            meta: { touched, error } 
                      }) => <input className={ touched && error ? "invalid" : "" } { ...field } placeholder="John Doe"/>
                    }
                    </Field>
                    <ErrorMessage name='fullName' component="div" className='erroMsg'/>
                  </label>
                  <label htmlFor="">
                    <h4>Email <span>*</span></h4>
                    <Field name='email'>
                    {({ 
                            field, 
                            meta: { touched, error } 
                      }) => <input className={ touched && error ? "invalid" : "" } { ...field } placeholder="johndoe@examplemail.com"/>
                    }
                    </Field>
                    <ErrorMessage name='email' component="div" className='erroMsg'/>
                  </label>
                  <label htmlFor="">
                    <h4>Phone Number <span>*</span></h4>
                    <div className="phony">
                      <Field name='countryCode' as="select">
                        {
                          countryCodes.map(countryDetails =>
                            <option value={countryDetails.code}> +{countryDetails.code}</option>)
                        }
                      </Field>
                      <Field name='phnNo'>
                      {({ 
                              field, 
                              meta: { touched, error } 
                        }) => <input className={ touched && error ? "invalid" : "" } { ...field } placeholder="12345678" type='number'/>
                      }
                      </Field>
                    </div>
                    { <ErrorMessage name='phnNo' component="div" className='erroMsg'/>}
                  </label>
                  <label htmlFor="">
                    <h4>Location <span>*</span></h4>
                    <Field name='location'>
                    {({ 
                            field, 
                            meta: { touched, error } 
                      }) => <div>
                        <input className={touched && error ? "invalid locale" : "locale" } { ...field } placeholder="Berger, Lagos" list='countries'/>
                        <datalist id='countries'>
                          {
                            countries.map(country => 
                            <option value={country} key={country}/>                         
                            )
                          }
                        </datalist>
                      </div>
                    }
                    </Field>
                    <ErrorMessage name='location' component="div" className='erroMsg'/>
                  </label>
                  <label htmlFor="">
                    <h4>Occupation <span>*</span></h4>
                    <Field name='occupation'>
                    {({ 
                            field, 
                            meta: { touched, error } 
                      }) => <input className={ touched && error ? "invalid" : "" } { ...field } placeholder="Banker, Student etc"/>
                    }
                    </Field>
                    <ErrorMessage name='occupation' component="div" className='erroMsg'/>
                  </label>
                  <label htmlFor="">
                    <h4>How did you get to know about Enoverlab? <span>*</span></h4>
                    <Field name='knowAbout' as="select">
                      <option value="">
                        Select an Option
                      </option>
                      <option value="Instagram">
                        Instagram
                      </option>
                      <option value="Twitter">
                        Twitter
                      </option>
                      <option value="WhatsApp">
                        WhatsApp
                      </option>
                      <option value="LinkedIn">
                        LinkedIn
                      </option>
                      <option value="Facebook">
                        Facebook
                      </option>
                      <option value="Other">
                        Other
                      </option>
                    </Field>
                    <ErrorMessage name='knowAbout' component="div" className='erroMsg'/>
                  </label>
                </main>
                <div className="cta">
                  <SubmitButton Text="Submit" disabled={!(isValid && dirty)}/>
                  <Link>Pay Now, Instead</Link>
                </div>
                </>)
              }
            
            
          </Form> 
          )}
        </Formik>
      </StyledStandardForm>
    </Modal>
  )
}

export default StandardForm

const StyledStandardForm = styled.div`
  margin: 5.4rem 0;
  .closeIcon {
    position: absolute;
    top: 2.4rem;
    right: 1rem;
    cursor: pointer;
  }
  header{
    font-size: 2.4rem;
    font-weight: 700;
    color : #00001A;
    text-align: center;
  }
  .heading{
    h3{
    font-size: 1.4rem;
    padding-left: 1.6rem;
    color: #373737;
    margin : 1.6rem 0 3.2rem 0;
      br{
        display: none;
      }
    }
    h4{
      text-align: center;
      color: #373737;
      font-size: 1.4rem;
      font-weight: 700;
      margin: 0 3.1rem 0 3.2rem;
    }
    h5{
      text-align: center;
      color: #373737;
      font-size: 1.4rem;
      font-weight: 700;
      margin: 0 3.1rem 0 3.2rem;
    }
  }
  main{
    background-color: white;
    padding: 4rem 1.6rem;
    label{
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;
      input,select{
        padding: 1rem 1.6rem;
        border-radius: 6px;
        border: 0.5px solid#BBB;
        font-size: 1.6rem;
        color: rgba(158, 158, 158, 0.85);
      }
      input:focus, select:focus{
        outline: 0.5px solid#0046FF;
        border-color: #0046FF;
        transition: all 0.5s ease-in-out;
      }
      input.invalid, textarea.invalid {
        border-color: red;
      }
      .erroMsg{
        color : red;
        font-size: 14px;
        font-style: italic;
      }
      .phony{
        display : flex;
        border: 0.5px solid #BBB;
        input{
          width: 100%;
          border: 0px ;
          outline: none;
        }
        select{
        color: rgba(125, 125, 125, 0.85);
        width: 90px;
        font-weight: 700;
        border-radius: 4px;
        border: 0.5px solid rgba(55, 55, 55, 0.20);
        background: #FCFDFE;
        }
        
      }
      .locale{
        width: 100%;
      }
      h4{
        font-size: 1.4rem;
        font-weight: 700;
        text-align: left;
        margin: 0 0 1rem 0;
        span{
          color: red;
        }
      }
    }
  }
  .cta{
    margin: 3.4rem 1.6rem 0 1.6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
      color: #00F;
      font-size: 1.4rem;
      font-weight: 700;
    }
  }
  @media (min-width: 1024px) {
    .heading{
      h3{
      font-size: 2rem;
      padding-left: 5.6rem;
      color: #373737;
      margin : 1.6rem 0 4rem 0;
      br{
        display: block;
      }
      }
      h4{
        font-size: 2rem;
      }
      h5{
        text-align: center;
        color: #373737;
        font-size: 2rem;
        font-weight: 700;
        margin: 0 3.1rem 1.6rem 3.2rem;
      }
    }
    main{
      display: grid;
      margin: 0 5.1rem;
      grid-template-columns: repeat(2,auto);
      gap: 3.2rem;
      label{
        margin-bottom: 0;
      }
    }
    .cta{
    margin: 3.4rem 5.6rem 0 5.6rem;
    a{
      color: #00F;
      font-size: 2rem;
      font-weight: 700;
    }
  }
  }
`