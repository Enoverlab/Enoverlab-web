import { ErrorMessage, Field, Form, Formik } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import { SubmitButton } from "../../Utils/styled/Buttons";
import mailsvg from "../../assets/icon/mail.svg";
import locationsvg from "../../assets/icon/contactLocation.svg";
import callsvg from "../../assets/icon/call.svg";
import { Fragment, useState } from "react";
import LoadingScreen from "../LoadingScreen";
import Submission from "../Submission";
import axios from "axios";
import { FaWhatsapp } from "react-icons/fa";

const EMAIL = "enoverlab@gmail.com";

// Kept in the local Nigerian form the page has always displayed. tel: and wa.me
// both want E.164, so the trunk 0 is swapped for the +234 country code.
const CALL_NUMBERS = ["07053395509", "08104522214"];
const WHATSAPP_NUMBERS = ["07053395509", "09063124595"];
const toE164 = (local) => `234${local.replace(/^0/, "")}`;

const OFFICE_ADDRESS =
  "Gateview Plaza, Plot 11 Admiralty Way, Lekki Phase 1, Lagos 100001, Lagos";

const OFFICE_MAP_URL = "https://maps.app.goo.gl/F4RnmRcCDNdr2rFU7";

const ContactHero = () => {
  const [loading, setloading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  return (
    <StyledContactHero>
      <header>
        <h1>We&apos;re Eager To Hear From You</h1>
        <p>
          Are you unsure about anything? Reach out to us, our friendly team will
          be there to assist.
        </p>
      </header>
      <main>
        <section className="form">
          {loading ? (
            <LoadingScreen />
          ) : submitted ? (
            <Submission
              heading="Success!!!"
              subheading="Your message has been successfully submitted."
            />
          ) : (
            <>
              <p>For quicker response, send a message.</p>
              <Formik
                initialValues={{
                  fullName: "",
                  email: "",
                  message: "",
                }}
                validationSchema={Yup.object({
                  fullName: Yup.string()
                    .min(3, "Must be atlest three characters")
                    .required("Kindly let us know your full name"),
                  email: Yup.string()
                    .email("Must be a valid email address")
                    .required("Email field is required"),
                  message: Yup.string()
                    .min(10, "Must be atlest three characters")
                    .required("A message is Required"),
                })}
                onSubmit={(values) => {
                  const subValues = {
                    "entry.740827428": values.fullName,
                    "entry.1252540315": values.email,
                    "entry.225648131": values.message,
                    "entry.1702911739": "123456789",
                  };

                  axios
                    .postForm(
                      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfkkBqyBI9rNg-iVibsJDt8feH6-0tIcncLn40ZjfithRz0lQ/formResponse",
                      subValues,
                    )
                    .then(() => {
                      console.log("yay");
                    })
                    .catch(() => {
                      console.log("err");
                    })
                    .then(() => {
                      setloading(true);
                      setTimeout(() => {
                        setloading(false);
                        setSubmitted(true);
                      }, 2500);
                    });
                }}
              >
                {() => (
                  <Form>
                    <label htmlFor="">
                      Full Name
                      <Field name="fullName">
                        {({ field, meta: { touched, error } }) => (
                          <input
                            className={touched && error ? "invalid" : ""}
                            {...field}
                            placeholder="John Doe"
                          />
                        )}
                      </Field>
                      <ErrorMessage
                        name="fullName"
                        component="div"
                        className="errorMsg"
                      />
                    </label>
                    <label htmlFor="">
                      Email
                      <Field name="email">
                        {({ field, meta: { touched, error } }) => (
                          <input
                            className={touched && error ? "invalid" : ""}
                            {...field}
                            placeholder="johndoe234@example.com"
                          />
                        )}
                      </Field>
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="errorMsg"
                      />
                    </label>
                    <label htmlFor="">
                      Message
                      <Field as="textarea" name="message">
                        {({ field, meta: { touched, error } }) => (
                          <textarea
                            className={touched && error ? "invalid" : ""}
                            {...field}
                            placeholder="Leave us a message..."
                            rows="5"
                          />
                        )}
                      </Field>
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="errorMsg"
                      />
                    </label>
                    <div className="submitDiv">
                      <SubmitButton Text="Send" />
                    </div>
                  </Form>
                )}
              </Formik>
            </>
          )}
        </section>

        <section className="container2">
          <div className="contactDetails">
            <div>
              <img src={mailsvg} alt="mail icon" />
              <section>
                <a href={`mailto:${EMAIL}`}>
                  <h1>Send us a mail</h1>
                  <p>{EMAIL}</p>
                </a>
              </section>
            </div>
          </div>
          <div className="contactDetails">
            <div>
              <img src={callsvg} alt="call icon" />
              <section>
                <h1>Call us on</h1>
                <p>
                  {CALL_NUMBERS.map((number, index) => (
                    <Fragment key={number}>
                      {index > 0 && ", "}
                      <a href={`tel:+${toE164(number)}`}>{number}</a>
                    </Fragment>
                  ))}
                </p>
                {/* <h5>8Am - 8Pm</h5> */}
              </section>
            </div>
          </div>
          <div className="contactDetails">
            <div>
              <span>
                <FaWhatsapp size={24} />
              </span>

              {/* <img src={callsvg} alt="call icon" /> */}
              <section>
                <h1>Chat via Whatsapp</h1>
                <p>
                  {WHATSAPP_NUMBERS.map((number, index) => (
                    <Fragment key={number}>
                      {index > 0 && ", "}
                      <a
                        href={`https://wa.me/${toE164(number)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {number}
                      </a>
                    </Fragment>
                  ))}
                </p>
                {/* <h5>8Am - 8Pm</h5> */}
              </section>
            </div>
          </div>
          <div className="contactDetails">
            <div>
              <img src={locationsvg} alt="mail icon" />
              <section>
                <h1>Office (HQ)</h1>
                {OFFICE_MAP_URL ? (
                  <p>
                    <a
                      href={OFFICE_MAP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {OFFICE_ADDRESS}
                    </a>
                  </p>
                ) : (
                  <p>{OFFICE_ADDRESS}</p>
                )}
                {/* <h5>10Am - 3Pm</h5> */}
              </section>
            </div>
          </div>
        </section>
      </main>
    </StyledContactHero>
  );
};

export default ContactHero;

const StyledContactHero = styled.div`
  padding: 6.2rem 2rem;
  header {
    text-align: center;
    h1 {
      color: #1a1a1a;
      font-size: 32px;
      font-weight: 700;
      padding-bottom: 1.2rem;
    }
    p {
      font-size: 1.4rem;
      padding-bottom: 3.6rem;
      color: #373737;
    }
  }
  .container2 {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    margin: 0 auto;
  }
  main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .form {
    display: none;
    padding: 2.2rem 1.6rem;
    border: 1px solid rgba(204, 204, 204, 0.8);
    border-radius: 12px;
    width: 100%;
    max-width: 585px;
    p {
      font-size: 1.4rem;
      color: #373737;
      margin-bottom: 3rem;
    }
    label {
      font-size: 1.4rem;
      font-weight: 700;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 2.4rem;
      input,
      textarea {
        border-radius: 0.6rem;
        font-size: 16px;
        font-weight: 400;
        border: 0.5px solid #bbb;
        color: rgba(158, 158, 158, 0.85);
        padding: 10px;
      }
      input:focus,
      textarea:focus {
        outline: 0.5px solid#0046FF;
        border-color: #0046ff;
        transition: all 0.5s ease-in-out;
      }
      input.invalid,
      textarea.invalid {
        border-color: red;
      }
      .errorMsg {
        font-style: italic;
        font-size: 1.4rem;
        color: #e26969;
      }
    }
    .submitDiv {
      display: flex;
      justify-content: center;
    }
  }
  .contactDetails {
    div {
      display: flex;
      align-items: flex-start;
      color: #373737;
      gap: 1.6rem;
      h1 {
        font-size: 1.6rem;
        font-weight: 700;
      }
      p {
        font-size: 1.4rem;
      }
      h5 {
        font-size: 1.4rem;
        font-weight: 700;
      }
      span {
        padding: 0.6rem;
        border-radius: 12%;
        border: 1px solid #e5e5e5;
      }
      a {
        color: inherit;
        text-decoration: none;
        &:hover,
        &:focus-visible {
          text-decoration: underline;
        }
      }
    }
  }

  @media (min-width: 1024px) {
    padding: 8.8rem 9.6rem;
    header {
      h1 {
        font-size: 54px;
      }
      p {
        font-size: 2rem;
        padding-bottom: 5.1rem;
      }
    }
    main {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      gap: 5rem;
    }
    .container2 {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
    }
    .contactDetails {
      div {
        gap: 1.6rem;
        h1 {
          font-size: 2rem;
          font-weight: 700;
        }
        p {
          font-size: 2rem;
        }
        h5 {
          font-size: 1.6rem;
        }
      }
    }
    .form {
      display: none;
      padding: 2.4rem 3rem;
      border: 1px solid rgba(204, 204, 204, 0.8);
      border-radius: 12px;
      p {
        font-size: 2rem;
        margin-bottom: 2rem;
      }
      label {
        font-size: 1.6rem;
        gap: 0.8rem;
        input,
        textarea {
          font-size: 2rem;
          padding: 1rem 3rem;
        }
      }
    }
  }
`;
