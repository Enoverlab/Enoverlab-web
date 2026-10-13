import React, { useEffect, useState, useCallback } from 'react';
import Modal from 'react-modal';
import styled, { css } from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import notif from '../../assets/icon/notifIcon.svg';
import cancelModal from '../../assets/icon/cancelModal.svg';

// Guard against non-browser environments during tests or builds
if (typeof document !== 'undefined' && document.getElementById('root')) {
  Modal.setAppElement('#root');
}

/**
 * Reusable promotional notification modal highlighting early enrollment discounts.
 * Automatically displays after a set delay (default: 10 seconds) from landing on the page
 * and smoothly routes learners to the corresponding tuition or programs section.
 *
 * @param {Object} props - Component properties.
 * @param {number} [props.delay=10000] - Delay in milliseconds before opening the popup.
 * @param {string} [props.title='IMPORTANT NOTICE!!!'] - Header notice badge text.
 * @param {string} [props.discountAmount='₦5,000'] - Highlighted discount amount.
 * @param {string} [props.message] - Main notice text.
 * @param {Array<{ text: string, to: string, variant?: 'primary' | 'secondary' }>} [props.ctas] - CTA buttons configuration.
 * @returns {JSX.Element} The rendered notification modal.
 */
const PopupNotif = ({
  delay = 11000,
  title = 'IMPORTANT NOTICE!!!',
  discountAmount = '₦5,000',
  message,
  ctas = [
    {
      text: 'Online flex Discount',
      to: 'https://paystack.shop/pay/flex-dis-online',
      variant: 'primary',
    },
    {
      text: 'Hybrid flex Discount',
      to: 'https://paystack.shop/pay/flex-dis-hybrid',
      variant: 'secondary',
    },
  ],
}) => {
  const [open, setOpen] = useState(false);

  // Close the modal cleanly
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  // Timer: Trigger popup display after the specified delay from page landing
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, delay);

    // Prevent memory leaks if the user navigates away before the timer expires
    return () => {
      clearTimeout(timer);
    };
  }, [delay]);

  // Scroll lock: Freeze document body scroll when modal is active
  useEffect(() => {
    if (open) {
      document.body.classList.add('bodyStiff');
    } else {
      document.body.classList.remove('bodyStiff');
    }

    // Ensure the scroll lock class is removed if unmounting while open
    return () => {
      document.body.classList.remove('bodyStiff');
    };
  }, [open]);

  // CTA Click handler: Closes modal and smoothly scrolls if already on the target page
  const handleCtaClick = (target) => {
    handleClose();

    // Browser does not automatically trigger smooth scrolling if the target hash is already active
    if (typeof window !== 'undefined' && target) {
      const hashIndex = target.indexOf('#');
      if (hashIndex !== -1) {
        const hash = target.substring(hashIndex);
        const path = target.substring(0, hashIndex);

        if (!path || window.location.pathname === path) {
          const targetElement = document.querySelector(hash);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    }
  };

  // Construct fallback notice text if explicit message is not supplied
  const noticeText =
    message ||
    `Get ${discountAmount} discount monthly when you sign up atleast 1 month before the class begins.`;

  return (
    <Modal
      onRequestClose={handleClose}
      isOpen={open}
      ariaHideApp={false}
      style={{
        content: {
          width: '92%',
          maxWidth: '680px',
          position: 'relative',
          inset: 'auto',
          background: 'transparent',
          border: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
          padding: 0,
          overflow: 'visible',
        },
        overlay: {
          zIndex: 20000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'rgba(5, 8, 30, 0.68)',
          backdropFilter: 'blur(4px)',
          width: '100%',
          overflowY: 'auto',
          padding: '2rem 1.2rem',
        },
      }}
    >
      <StyledModalCard>
        {/* Top-right close button inside the card for immediate accessibility */}
        <button
          type="button"
          className="card-close-btn"
          onClick={handleClose}
          aria-label="Close notification"
        >
          &times;
        </button>

        <header>
          <div className="badge-wrap">
            <h4>
              <img src={notif} alt="Alert icon" className="notif-icon" />
              {title}
            </h4>
          </div>
        </header>

        <main>
          <p className="notice-lead">
            {/* Formatted display of discount notice with highlighted discount figure */}
            {noticeText.includes(discountAmount) ? (
              <>
                {noticeText.split(discountAmount)[0]}
                <span className="discount-pill">{discountAmount}</span>
                {noticeText.split(discountAmount)[1]}
              </>
            ) : (
              noticeText
            )}
          </p>

          <div className={`cta-container ${ctas.length === 1 ? 'cta-single' : ''}`}>
            {ctas.map((cta, index) => {
              const isExternal = /^https?:\/\//i.test(cta.to);
              const className = `cta-btn ${
                cta.variant === 'secondary' ? 'cta-secondary' : 'cta-primary'
              }`;

              if (isExternal) {
                return (
                  <StyledCtaAnchor
                    key={cta.text || index}
                    href={cta.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleClose}
                    className={className}
                  >
                    {cta.text}
                  </StyledCtaAnchor>
                );
              }

              return (
                <StyledCtaLink
                  key={cta.text || index}
                  to={cta.to}
                  smooth
                  onClick={() => handleCtaClick(cta.to)}
                  className={className}
                >
                  {cta.text}
                </StyledCtaLink>
              );
            })}
          </div>
        </main>
      </StyledModalCard>

      {/* Floating circular close button below the modal */}
      <StyledCancel>
        <img
          src={cancelModal}
          alt="Close notification"
          onClick={handleClose}
        />
      </StyledCancel>
    </Modal>
  );
};

export default PopupNotif;

const StyledModalCard = styled.div`
  position: relative;
  font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  width: 100%;
  background: #ffffff;
  border-radius: 2.4rem;
  padding: 2.4rem 1.8rem;
  box-shadow: 0 24px 48px -12px rgba(0, 0, 26, 0.28);
  border: 1px solid rgba(0, 0, 0, 0.08);

  .card-close-btn {
    position: absolute;
    top: 1.4rem;
    right: 1.6rem;
    background: #f1f5f9;
    border: none;
    border-radius: 50%;
    width: 3.2rem;
    height: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.2rem;
    line-height: 1;
    color: #475569;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: #e2e8f0;
      color: #0f172a;
      transform: scale(1.08);
    }
  }

  header {
    .badge-wrap {
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;

      h4 {
        background-color: #ffebeb;
        color: #d92d20;
        display: inline-flex;
        align-items: center;
        text-align: center;
        font-size: clamp(1.6rem, 3.8vw, 2.2rem);
        font-weight: 800;
        letter-spacing: -0.01em;
        border-radius: 9999px;
        padding: 1rem 2rem;
        gap: 0.8rem;
        box-shadow: 0 2px 8px rgba(217, 45, 32, 0.08);

        .notif-icon {
          width: 2.4rem;
          height: 2.4rem;
          display: inline-block;
        }
      }
    }
  }

  main {
    background: linear-gradient(145deg, #003ad4 0%, #002b9e 100%);
    border-radius: 1.8rem;
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 2.4rem 1.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);

    .notice-lead {
      color: #ffffff;
      font-size: clamp(1.45rem, 3.2vw, 1.95rem);
      font-weight: 500;
      line-height: 1.55;
      margin-bottom: 2.2rem;
      max-width: 54rem;

      .discount-pill {
        display: inline-block;
        background: #ffe58f;
        color: #1a1a1a;
        font-weight: 800;
        padding: 0.15rem 0.75rem;
        border-radius: 0.6rem;
        margin: 0 0.35rem;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
      }
    }

    .cta-container {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      width: 100%;

      &.cta-single {
        max-width: 34rem;
        margin: 0 auto;
      }
    }
  }

  @media (min-width: 640px) {
    padding: 3.2rem 2.8rem;
    border-radius: 3.2rem;

    .card-close-btn {
      top: 1.8rem;
      right: 2rem;
      width: 3.6rem;
      height: 3.6rem;
      font-size: 2.4rem;
    }

    header {
      .badge-wrap {
        margin-bottom: 2.4rem;

        h4 {
          padding: 1.2rem 2.6rem;
          gap: 1.2rem;

          .notif-icon {
            width: 2.8rem;
            height: 2.8rem;
          }
        }
      }
    }

    main {
      padding: 3.2rem 3rem;
      border-radius: 2.2rem;

      .notice-lead {
        margin-bottom: 2.8rem;
      }

      .cta-container {
        flex-direction: row;
        justify-content: center;
        gap: 1.6rem;

        &.cta-single {
          max-width: 34rem;
        }
      }
    }
  }
`;

const ctaStyles = css`
  font-family: 'Plus Jakarta Sans', sans-serif;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.3rem 2rem;
  border-radius: 1rem;
  font-size: clamp(1.3rem, 2.5vw, 1.45rem);
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: normal;
  text-align: center;
  flex: 1;

  &.cta-primary {
    background: #ffffff;
    color: #003ad4;
    border: 2px solid #ffffff;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);

    &:hover {
      background: #f0f4ff;
      color: #002ba3;
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
  }

  &.cta-secondary {
    background: #090e38;
    color: #ffffff;
    border: 2px solid rgba(255, 255, 255, 0.35);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);

    &:hover {
      background: #04061a;
      border-color: #ffffff;
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    }
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 2px;
  }
`;

const StyledCtaLink = styled(HashLink)`
  ${ctaStyles}
`;

const StyledCtaAnchor = styled.a`
  ${ctaStyles}
`;

const StyledCancel = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 4rem;
    height: 4rem;
    cursor: pointer;
    transition: transform 0.2s ease, opacity 0.2s ease;
    opacity: 0.9;

    &:hover {
      transform: scale(1.12);
      opacity: 1;
    }
  }

  @media (min-width: 640px) {
    img {
      width: 5rem;
      height: 5rem;
    }
  }
`;
