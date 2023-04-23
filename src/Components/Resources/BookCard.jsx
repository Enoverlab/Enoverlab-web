import React, { useState, useRef } from "react";
import styled from "styled-components";
import { AiOutlineLink } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { theme } from "../../Utils/Theme";
import { ToastContainer, toast } from 'react-toastify';
import {useLocation} from 'react-router-dom'
const SignupModal = ({ showModal, setShowModal, fileUrl }) => {
    const location = useLocation()
    const [loading, setLoading] = useState(false)
  const scriptUrl = location.pathname === "/resources" ?  "https://script.google.com/macros/s/AKfycbw0ohi51CR9vuzVd8cgKr0oV7JU7DsPPvlgg2aQ4iPSrib6SHOzuorHNbdKtLiVQ6z3/exec" : "https://script.google.com/macros/s/AKfycbxFQevT1kEmAzxou6O23T9nV1EmhWCpSBdsKlenLE07D7ks5gMhJttZFKLk3WLomuot/exec"
   
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    const form = new FormData(formRef.current);
    fetch(scriptUrl, { method: "POST", body: form })
      .then((response) => {

        if (response.status === 200) {
            toast.success("🎉 Thank you, your download will proceed immediately", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                
              })

            setLoading(false)
          // download pdf with blob
          const link = document.createElement("a");
          link.href = `${fileUrl}`;
          link.setAttribute("download", "file.pdf");
          document.body.appendChild(link);
          link.click();
          link.parentNode.removeChild(link);
        } else {
          alert("Something went wrong");
        }
      })
      .catch((error) => console.error("Error!", error.message));
  };
  return (
    <StyledSignupModal>
          <ToastContainer />
      <div className="signup-modal-container">
        <div className="overlay" />
        <div className="signup-modal">
          <div className="signup-modal-header">
            <h3>Let's get to know you</h3>
            <FaTimes onClick={() => setShowModal(!showModal)} />
          </div>
          <div className="signup-modal-body">
            <form onSubmit={handleSubmit} ref={formRef}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Email">Email</label>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="name"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <input
                type="hidden"
                name="date"
                id=""
                value={new Date().toLocaleDateString()}
              />
              {/* submit */}
              <div className="form-group">
                <input type="submit" value={loading ? "...Loading" : "Download Now"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </StyledSignupModal>
  );
};

const StyledSignupModal = styled.div`
  .signup-modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .signup-modal {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 25rem;
      height: fit-content;
      background-color: #ffffff;
      border-radius: 0.5rem;
      @media (max-width: 768px){
        width: 95%;
      }
      .signup-modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        border-bottom: 1px solid #e5ecff;
        h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #000000;

          @media (max-width: 768px){
            font-size: 1.2rem;
            
          }
        }
      }
      .signup-modal-body {
        padding: 2rem;
        form {
          .form-group {
            margin-bottom: 1rem;
            label {
              font-size: 1rem;
              font-weight: 600;
              color: #000000;
            }
            input {
              width: 100%;
              height: 3rem;
              border: 1px solid #e5ecff;
              border-radius: 0.5rem;
              padding: 0 1rem;
              font-size: 1rem;
              font-weight: 400;
              color: #000000;
              outline: none;
            }
            input[type="submit"] {
              border: none;
              background-color: ${theme.color.tertiary};
              color: ${theme.color.light};
            }
          }
        }
      }
    }
  }
`;

const BookCard = ({ imgUrl, bookUrl, maxWidth, maxHeight }) => {
  const [active, setActive] = React.useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <StyledBookCard maxWidth={maxWidth} maxHeight={maxHeight}>
      <div
        onMouseLeave={() => setActive(false)}
        onMouseEnter={() => setActive(true)}
        className={
          active ? "book-card-container active" : "book-card-container"
        }
        // onclick={() => window.open(bookUrl, "download")}
      >
        {/* <a href={bookUrl} download> */}
        <img src={imgUrl} alt="" onClick={() => setShowModal(!showModal)} />
        {active ? (
          <div
            className="book-card-content"
            onClick={() => setShowModal(!showModal)}
          >
            <div className="book-card-content-text">
              <h4>
                <AiOutlineLink /> Read Book
              </h4>
            </div>
          </div>
        ) : null}

        {showModal ? (
          <SignupModal
            showModal={showModal}
            setShowModal={setShowModal}
            fileUrl={bookUrl}
          />
        ) : null}
        {/* </a> */}
      </div>
    </StyledBookCard>
  );
};

export default BookCard;

const StyledBookCard = styled.div`
  .book-card-container {
    max-width: ${(props) => props.maxWidth ? props.maxWidth : "18.9375rem" };
    max-height: ${(props) => props.maxHeight ? props.maxHeight : "28.216875rem" };
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .book-card-container.active {
    position: relative;
    width: 100%;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #000;
      opacity: 0.5;
    }
    .book-card-content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin: 0 auto;

      .book-card-content-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        h4 {
          color: #fff;
          font-size: 1.2rem;
        }
      }
    }
  }
`;
