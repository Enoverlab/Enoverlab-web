import React, { useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import formSideImg from "../../assets/hire/request.svg";
import { hireForm } from "./hireData";

const HireRequestForm = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form || !form.checkValidity()) {
      form?.reportValidity();
      return;
    }
    toast.success(
      "Thanks — we've received your request. Our team will follow up shortly."
    );
    form.reset();
  };

  const renderField = (field) => {
    const id = `hire-${field.name}`;
    return (
      <div className="field-group" key={field.name}>
        {"labelLines" in field ? (
          <label htmlFor={id} className="field-label multiline">
            {field.labelLines.map((line) => (
              <span key={line} className="label-line">
                {line}
              </span>
            ))}
            {"hint" in field && field.hint ? (
              <span className="label-hint">{field.hint}</span>
            ) : null}
          </label>
        ) : (
          <label htmlFor={id} className="field-label">
            {field.label}
          </label>
        )}
        {field.type === "file" ? (
          <input
            id={id}
            name={field.name}
            type="file"
            className="field-input field-file"
            aria-label={field.label}
          />
        ) : (
          <input
            id={id}
            name={field.name}
            type="text"
            className="field-input"
            autoComplete="on"
            required={Boolean(field.required)}
          />
        )}
      </div>
    );
  };

  return (
    <StyledFormSection id="hire-form">
      <div className="hire-shell outer">
        <div className="form-stack">
          <div className="form-head">
            <p className="eyebrow">{hireForm.eyebrow}</p>
            <h2 className="form-title">{hireForm.heading}</h2>
          </div>

          <div className="side-visual">
            <div className="img-shell">
              <img src={formSideImg} alt="Discussion at a laptop" />
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="form-body">
            <div className="form-grid">
              <div className="col">{hireForm.columns[0].map(renderField)}</div>
              <div className="col">{hireForm.columns[1].map(renderField)}</div>
            </div>

            <button type="submit" className="submit-btn">
              {hireForm.submitLabel}
            </button>
          </form>
        </div>
      </div>
    </StyledFormSection>
  );
};

export default HireRequestForm;

const StyledFormSection = styled.section`
  scroll-margin-top: 10rem;
  font-family: "Inter", "Plus Jakarta Sans", sans-serif;
  background: #ffffff;
  padding: clamp(2rem, 6vw, 6rem) 0 clamp(5rem, 10vw, 10rem);

  .hire-shell {
    width: min(100%, 124rem);
    margin: 0 auto;
    padding: 0 clamp(1.6rem, 4vw, 10rem);
  }

  /** Desktop: text + form column | sticky image column. Mobile: eyebrow → title → image → form. */
  .form-stack {
    display: grid;
    width: 100%;
    align-items: start;
    column-gap: clamp(3rem, 6vw, 6.9rem);
    row-gap: 3.7rem;
    grid-template-columns: minmax(0, 1fr) minmax(0, 39.6rem);
    grid-template-areas:
      "head visual"
      "formbody visual";
  }

  .form-head {
    grid-area: head;
    display: flex;
    flex-direction: column;
    gap: 3.7rem;
    min-width: 0;
  }

  .side-visual {
    grid-area: visual;
    width: 100%;
    max-width: 39.6rem;
    justify-self: end;
    position: sticky;
    top: 10rem;

    .img-shell {
      background: #f7feff;
      border-radius: 2rem;
      overflow: hidden;
      min-height: 40rem;

      img {
        display: block;
        width: 100%;
        height: 67.2rem;
        max-height: 90vh;
        object-fit: cover;
        object-position: center;

        @media (max-width: 960px) {
          height: 36rem;
          max-height: none;
        }
      }
    }
  }

  form.form-body {
    grid-area: formbody;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    align-items: flex-start;
  }

  .eyebrow {
    margin: 0;
    font-size: clamp(1.6rem, 1.85vw, 1.8rem);
    font-weight: 400;
    color: #838383;
  }

  .form-title {
    margin: 0;
    font-weight: 600;
    font-size: clamp(2.2rem, 2.6vw, 2.8rem);
    line-height: 1.2;
    color: #3d3d3d;
    max-width: 32rem;
  }

  .form-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem 4rem;
    width: 100%;

    @media (max-width: 780px) {
      grid-template-columns: 1fr;
    }
  }

  .field-group {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .field-label {
    font-size: 1.4rem;
    font-weight: 400;
    color: #3d3d3d;

    &.multiline {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    }
  }

  .label-line {
    line-height: 1.85;
    white-space: normal;
  }

  .label-hint {
    font-style: italic;
    color: #838383;
    font-size: 1.4rem;
    line-height: 1.85;
    white-space: normal;
  }

  .field-input {
    height: 4.9rem;
    width: 100%;
    max-width: 36.8rem;
    border: 1px solid #d2d2d2;
    border-radius: 8px;
    padding: 0 1.2rem;
    font-size: 1.4rem;
    font-family: inherit;
    color: #3d3d3d;

    &:focus-visible {
      outline: 2px solid #0030af;
      outline-offset: 1px;
    }
  }

  .field-file {
    padding-top: 1rem;
    height: auto;
    min-height: 4.9rem;
    background: #fff;
    line-height: 1.6;
    cursor: pointer;
    border-radius: 8px;
  }

  .submit-btn {
    font-family: inherit;
    background: #0030af;
    color: #ffffff;
    border: none;
    border-radius: 1rem;
    min-height: 5.6rem;
    padding: 0 2.8rem;
    font-size: 1.8rem;
    font-weight: 500;
    cursor: pointer;
    transition: opacity 0.2s ease;
    min-width: clamp(22rem, 40vw, 26.7rem);

    &:hover {
      opacity: 0.92;
    }
  }

  @media (max-width: 960px) {
    .form-stack {
      grid-template-columns: 1fr;
      grid-template-areas:
        "head"
        "visual"
        "formbody";
    }

    .side-visual {
      max-width: 100%;
      justify-self: stretch;
      position: relative;
      top: unset;

      .img-shell img {
        max-height: 48rem;
      }
    }

    .field-input {
      max-width: none;
    }

    .submit-btn {
      width: 100%;
      max-width: 100%;
    }
  }
`;
