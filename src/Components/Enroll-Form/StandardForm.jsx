import Modal from 'react-modal';
import { Form, Formik } from 'formik';
import styled from 'styled-components';
import { useEffect } from 'react';

const StandardForm = ({handleCloseModal, modalDetails}) => {

  Modal.setAppElement('#root');
  useEffect(()=>{
    if(modalDetails.open){
      document.body.style.cssText = 'overflow: hidden;'
    }
  },[modalDetails])

  return (
      <Modal onRequestClose={handleCloseModal} isOpen={modalDetails.open}
      style={{
        content : {
          zIndex : 300,
          width : '90%',
          maxWidth : '100rem',
          position : 'static',
          inset : 0
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
        <Formik>
          <Form className='form'>
            <header id='header'>
              Enrolment Form
            </header>
            <label htmlFor="">

            </label>
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
  @media (min-width: 1024px) {
    /* header{

    } */
  }
`