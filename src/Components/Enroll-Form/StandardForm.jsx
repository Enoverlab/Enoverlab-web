import Modal from 'react-modal';
import { Field, Form, Formik } from 'formik';
import styled from 'styled-components';
import { useEffect } from 'react';
import { countries } from '../../constants';

const StandardForm = ({handleCloseModal, modalDetails}) => {

  Modal.setAppElement('#root');
  useEffect(()=>{
    if(modalDetails.open){
      document.body.style.cssText = 'overflow: hidden;'
    }else{
      document.body.style.cssText = ''
    }
  },[modalDetails])

  return (
      <Modal onRequestClose={handleCloseModal} isOpen={modalDetails.open}
      style={{
        content : {
          zIndex : 300,
          width : '98%',
          maxWidth : '100rem',
          position : 'static',
          inset : 0,
          background: '#F7F7F7',
          padding : '0px'
        },
        overlay: {
          zIndex : 300,
          display: 'flex',
          justifyContent : 'center',
          alignItems : 'center',
          width : '100%',
          border : '1px solid red'
        },
      }}
      center>
      <StyledStandardForm>
        <Formik
        initialValues={{
          fullName : '',
          email : '',
          phnNo : '', 
          location : '',
          occupation : '',
          knowAbout : ''

        }}
        >
          <Form className='form'>
            <header id='header'>
              Enrolment Form
            </header>
            <h3>
              By completing this form, you are applying for the Online Instructor led Product Management training.
            </h3>
            <h5>
              Ensure you fill in your details correctly below. 
              You would be contacted by the admission team within 24 hours!
            </h5>
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
              </label>
              <label htmlFor="">
                <h4>Phone Number <span>*</span></h4>
                <div className="phony">
                  <Field name='phnNo' as="select">
                    <option>
                      here
                    </option>
                    <option>
                      here
                    </option>
                  </Field>
                  <Field name='phnNo'>
                  {({ 
                          field, 
                          meta: { touched, error } 
                    }) => <input className={ touched && error ? "invalid" : "" } { ...field } placeholder="123456789" type=''/>
                  }
                  </Field>
                </div>
              </label>
            </main>
            
          </Form>
        </Formik>
      </StyledStandardForm>
    </Modal>
  )
}

export default StandardForm

const StyledStandardForm = styled.div`
  
  header{
    font-size: 2.4rem;
    font-weight: 700;
    color : #00001A;
    text-align: center;
    margin-top: 5.4rem;
  }
  h3{
    font-size: 1.4rem;
    padding-left: 1.6rem;
    color: #373737;
    margin : 1.6rem 0 3.2rem 1.6rem;
  }
  h5{
    text-align: center;
    color: #373737;
    font-size: 1.4rem;
    font-weight: 700;
    margin: 0 3.1rem 1.6rem 3.2rem;
  }
  main{
    background-color: white;
    padding: 4rem 1.6rem;
    label{
      display: flex;
      flex-direction: column;
      input,select{
        padding: 1rem 1.6rem;
        border-radius: 6px;
        border: 0.5px #BBB;
        font-size: 1.6rem;
        color: rgba(158, 158, 158, 0.85);
      }
      h4{
        font-size: 1.4rem;
        font-weight: 700;
        margin-bottom: 1rem;
        span{
          color: red;
        }
      }
    }
  }
  @media (min-width: 1024px) {
    /* header{

    } */
  }
`