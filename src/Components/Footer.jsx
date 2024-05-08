import React, { useRef, useState } from "react";
import styled from "styled-components";
import { theme } from "../Utils/Theme";
import { P, H4 } from "../Utils/styled/Typograpyhy";
import { AiFillLinkedin } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaTwitter,
  FaYoutube,
  FaInstagramSquare,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/enovLogo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Footer = ({p}) => {
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbwCaJuMGD_yGIFXpIJ2tPNsMV94U5ebGPfYwPnUnzJ_nwqyIzRPeSaZ-9Sq1Mk5GKZYCg/exec";
  const formRef = useRef(null);
  const formRefDesktop = useRef(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData(formRef.current);

    fetch(scriptUrl, { method: "POST", body: formData })
      .then((response) => {
        if (response.status === 201 || response.status === 200) {
          toast.success(
            "🎉 Thank you for subscribing to our newsletter. We will get back to you shortly",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              progress: undefined,
            }
          );
          //clear fields
          formRef.current.reset();
          setLoading(false);
        } else {
          toast.error("An error occured. Please try again", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
          });
        }
      })
      .catch((er) => {
        toast.error("An error occured. Please try again", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
      });
  };
  const handleSubmitDesktop = (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData(formRefDesktop.current);

    fetch(scriptUrl, { method: "POST", body: formData })
      .then((response) => {
        if (response.status === 201 || response.status === 200) {
          toast.success(
            "🎉 Thank you for subscribing to our newsletter. We will get back to you shortly",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: false,
              progress: undefined,
            }
          );
          //clear fields
          formRef.current.reset();
          setLoading(false);
        } else {
          toast.error("An error occured. Please try again", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
          });
        }
      })
      .catch((error) => {
        toast.error("An error occured. Please try again", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
      });
  };
  return (
    <StyledFooter p={p}>
      <ToastContainer />
      <div className="footer-container">
        <div className="footer-left">
          <div className="container-left-1">
            <div className="logo-container">
              <img src={logo} alt="logo" />
            </div>
            <div className="slogan">
              <P
                lineHeight="28px"
                color="var(--Body-Text)"
                mdfs="1.058vw"
                fs="3.2037vw"
                fw="500"
              >
                Building impactful product managers for today, tomorrow, and the
                future
              </P>
            </div>

            <div className="icon-container">
              <div className="social-icon">
                <a href="https://web.facebook.com/profile.php?id=100084211149479">
                  <FaFacebookSquare />
                </a>
              </div>
              <div className="social-icon">
                <a href="https://www.linkedin.com/company/enoverlab/">
                  <AiFillLinkedin className="icon" />
                </a>
              </div>

              <div className="social-icon">
                <a href="https://twitter.com/enoverlab">
                  <FaTwitter className="icon" />
                </a>
              </div>
              <div className="social-icon">
                <a href="https://www.youtube.com/@enoverlab">
                  <FaYoutube className="icon" />
                </a>
              </div>
              <div className="social-icon">
                <a href=" https://www.instagram.com/enoverlabng/">
                  <FaInstagramSquare className="icon" />
                </a>
              </div>
              <div className="social-icon">
                <a href="https://wa.me/message/SFVOFYV4VGWDH1">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
            {/* desktop */}
            <div className="footer-form">
              <P
                color="var(--Body-Text)"
                fs="3.73vw"
                mdfs="1.058vw"
                lh="28px"
                fw="500"
              >
                Receive important PM info weekly
              </P>
              <form onSubmit={handleSubmitDesktop} ref={formRefDesktop}>
                <div className="form">
                  <div className="form-box">
                    <input
                      type="text"
                      name="name"
                      id=""
                      placeholder="Full Name"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      id=""
                      placeholder="Email Address"
                      required
                    />
                    <input
                      type="hidden"
                      name="date"
                      id=""
                      value={new Date().toLocaleDateString()}
                    />
                  </div>

                  {/* hiddendatefield */}

                  <button type="submit">
                    {loading ? "Loading.." : "Subscribe"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <div className="container-left-2">
            <H4
              mdfs="1.388vw"
              color="var(--Body-Text)"
              lh="24px"
              fw="700"
            >
              Programs
            </H4>

            <HashLink to="/programs#basic">
              <P
                color="var(--Body-Text)"
                fs="3vw"
                mdfs="1.058vw"
                lh="28px"
                fw="400"
              >
                Basic Program
              </P>
            </HashLink>

            <HashLink to="/programs#advanced">
              <P
                color="var(--Body-Text)"
                fs="3vw"
                mdfs="1.058vw"
                lh="28px"
                fw="400"
              >
                Advanced Program
              </P>
            </HashLink>
            <HashLink to="/programs#executive">
              <P
                color="var(--Body-Text)"
                fs="3vw"
                mdfs="1.058vw"
                lh="28px"
                fw="400"
              >
                Executive Coaching
              </P>
            </HashLink>
            <Link to="/corporate">
              <P
                color="var(--Body-Text)"
                fs="3vw"
                mdfs="1.058vw"
                lh="28px"
                fw="400"
              >
                Corporate Training
              </P>
            </Link>
            <HashLink to="/programs#onsite">
              <P
                color="var(--Body-Text)"
                fs="3vw"
                mdfs="1.058vw"
                lh="28px"
                fw="400"
              >
                Onsite Training
              </P>
            </HashLink>
          </div>
          <div className="container-left-2">
            <H4
              mdfs="1.388vw"
              color="var(--Body-Text)"
              lh="24px"
              fw="700"
            >
              Free Resource
            </H4>

            <Link to="/blog">
              <P
                color="var(--Body-Text)"
                fs="3vw"
                mdfs="1.058vw"
                lh="28px"
                fw="400"
              >
                Blog
              </P>
            </Link>
            <HashLink to="/resources#ebooks">
              <P
                color="var(--Body-Text)"
                fs="3vw"
                mdfs="1.058vw"
                lh="28px"
                fw="400"
              >
                E-books
              </P>
            </HashLink>
            <HashLink to="/resources#sessions">
              <P
                color="var(--Body-Text)"
                fs="3vw"
                mdfs="1.058vw"
                lh="28px"
                fw="400"
              >
                Product Sessions
              </P>
            </HashLink>
            <a href="https://wa.me/message/SFVOFYV4VGWDH1">
              <P
                color="var(--Body-Text)"
                fs="3vw"
                mdfs="1.058vw"
                lh="28px"
                fw="400"
              >
                Career Advisor
              </P>
            </a>
          </div>
          <div className="container-right-1">
            <H4
              mdfs="1.388vw"
              color="var(--Body-Text)"
              lh="24px"
              fw="700"
            >
              Company
            </H4>

            <Link to="/about">
              <P
                color="var(--Body-Text)"
                fs="3vw"
                mdfs="1.058vw"
                lh="28px"
                fw="400"
              >
                About Us
              </P>
            </Link>
            <a
              target="_blank"
              href="https://www.actd.us/enoverlab/"
              rel="noreferrer"
            >
              <P
                color="var(--Body-Text)"
                fs="3vw"
                mdfs="1.058vw"
                lh="28px"
                fw="400"
              >
                Accreditation
              </P>
            </a>
            <Link to="/#">
              <P
                color="var(--Body-Text)"
                fs="3vw"
                mdfs="1.058vw"
                lh="28px"
                fw="400"
              >
                Our Team
              </P>
            </Link>

            <HashLink to="/programs#success">
              <P
                color="var(--Body-Text)"
                fs="3vw"
                mdfs="1.058vw"
                lh="28px"
                fw="400"
              >
                Reviews
              </P>
            </HashLink>
            <a href="https://chat.whatsapp.com/J0jWx8V7joE3Y0ridmgAZ5">
              <P
                color="var(--Body-Text)"
                fs="3vw"
                mdfs="1.058vw"
                lh="28px"
                fw="400"
              >
                Community
              </P>
            </a>
            <a href="tel:09063124595">
              <P
                color="var(--Body-Text)"
                fs="3vw"
                mdfs="1.058vw"
                lh="28px"
                fw="400"
              >
                Contact Us
              </P>
            </a>
            <a href="/policy">
              <P
                color="var(--Body-Text)"
                fs="3vw"
                mdfs="1.058vw"
                lh="28px"
                fw="400"
              >
                Privacy Policy
              </P>
            </a>
          </div>

          {/* mobile */}
          <div className="footer-form">
            <div className="form">
              <H4
                color="var(--Body-Text)"
                fs="3.73vw"
                mdfs="1.058vw"
                lh="28px"
                fw="500"
              >
                Receive important <br /> PM info weekly
              </H4>
              <form onSubmit={handleSubmit} ref={formRef}>
                <div className="form-box">
                  <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="Full Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    id=""
                    placeholder="Email Address"
                    required
                  />
                  {/* hiddendatefield */}
                  <input
                    type="hidden"
                    name="date"
                    id=""
                    value={new Date().toLocaleDateString()}
                  />
                  <button type="submit">
                    {loading ? "Loading.." : "Subscribe"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <P
          color="var(--Body-Text)"
          fs="3vw"
          mdfs="1.058vw"
          lh="28px"
          fw="400"
          tA="center"
        >
          Copyright @ enoverlab {new Date().getFullYear()}. All Rights Reserved.
        </P>
      </div>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  background-color: #F5FCFF;
  padding: ${props => props.p};
  @media (max-width: 768px) {
    padding: 4rem 1.6rem;
    background-color: ${theme.color.lightBlue};
  }
  .footer-container {
    display: flex;
    justify-content: space-between;
    padding: 0% 0% 4% 0%;
    /* align-items: center; */
    @media (max-width: 768px) {
      flex-direction: column;
    }
    .footer-left {
      display: flex;
      justify-content: space-between;
      width: 45%;
      @media (max-width: 768px) {
        width: 70%;
        /* justify-content: flex-start; */
        /* column-gap: 1.375rem; */
      }
      .container-left-1 {
        width: 70%;
        @media (max-width: 768px) {
          width: 100%;
        }
        .logo-container {
          width: 14.88vw;
          margin-bottom: 4.26rem;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          @media (max-width: 768px) {
            width: 31.54vw;
            margin-bottom: 1.6rem;
          }
        }
        .icon-container {
          display: flex;
          column-gap: 2.2rem;
          margin-top: 1.6rem;
          a {
            color: ${theme.color.dark};
            text-decoration: none;
          }
          .social-icon {
            color: ${theme.color.dark};
            font-size: 2.4rem;
            cursor: pointer;
          }
        }
        .slogan {
          P {
            max-width: 65%;
          }
          @media (max-width: 786px) {
            P {
              max-width: 100%;
            }
          }
        }
      }

      .footer-form {
        margin-top: 1.5rem;
        display: block;

        .form-box {
          display: flex;
          align-items: center;
          column-gap: 0.5rem;
        }

        input {
          padding: 1rem ;
          border: none;
          width: 50%;
          outline: none;
          box-shadow: 0px 0px 1.5px 0px rgba(0, 0, 0, 0.25);

          @media (max-width: 768px) {
            width: 100%;
            box-shadow: 0px 0px 1.5px 0px rgba(0, 0, 0, 0.25);
          }
        }
        button {
          padding: 1.2rem 3.6rem;
          border: none;
          font-size: 1.6rem;
          width: 50%;
          outline: none;
          background-color: ${theme.color.tertiary};
          color: #E5ECFF;
          margin-top: 1.5rem;
          @media (max-width: 768px) {
            width: 100%;
          }
        }
        @media (max-width: 768px) {
          display: none;
          flex-direction: column;
          P {
            font-size: 0.8rem;
          }
          .form {
            display: flex;
            flex-direction: column;

            /* align-items: flex-end; */
            P {
              font-size: 1rem;
            }
          }
        }
      }
    }
    .footer-right {
      display: flex;
      justify-content: space-between;
      width: 50%;

      @media (max-width: 768px) {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 3.125rem;
        margin-top: 4rem;
      }

      .footer-form {
        margin-top: 1rem;
        display: none;
        .form-box {
          display: flex;
          flex-direction: column;
          row-gap: 0.5rem;
        }
        input {
          padding: 1rem;
          border: none;
          width: 70%;
          outline: none;
          @media (max-width: 768px) {
            width: 100%;
          }
        }
        button {
          padding: 1rem;
          border: none;
          width: 40%;
          outline: none;
          background-color: ${theme.color.tertiary};
          color: ${theme.color.light};
          margin-top: 0.5rem;
          @media (max-width: 768px) {
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          display: flex;
          flex-direction: column;
          margin-top: 0rem;
          .form-box {
            display: flex;
            flex-direction: column;
          }
          P {
            font-size: 0.6rem;
          }
          .form {
            display: flex;
            flex-direction: column;

            /* align-items: flex-end; */
            P {
              font-size: 1rem;
            }
          }
        }
      }
      .container-left-2,
      .container-right-1 {
        P {
          &:hover {
            color: ${theme.color.primary};
          }
        }
      }
    }
    p {
      margin-bottom: 0.5rem;
    }
    H4 {
      margin-bottom: 1.2rem;
    }
  }
  a {
    text-decoration: none;
  }
  .icon {
    font-size: 2rem;
  }
  .footer-bottom{
    opacity: 0.3;
    border-top: 5px solid #4B4B4B;
    padding: 22px 0;

    @media (min-width: 1024px) {
      opacity: 1;
      padding: 32px 0;
    border-top: 3px solid #4B4B4B;
    }
  }
`;
