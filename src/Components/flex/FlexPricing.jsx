import React from "react";
import styled from "styled-components";
import { FiCheck } from "react-icons/fi";
import FlexBtn from "./FlexBtn";
import { flexPricing } from "./flexData";
import useFlexReveal from "./useFlexReveal";
import {
  flexColors,
  flexFont,
  flexMotion,
  flexReset,
  onHover,
  flexShell,
  pillLabel,
  sectionTitle,
} from "./flexTheme";

// No section-level observer: the head and each card reveal on their own, since the
// cards stack far below the heading on mobile.
const FlexPricing = () => {
  const headReveal = useFlexReveal();

  return (
    <StyledPricing id="flex-pricing" aria-labelledby="flex-pricing-title">
      <div className="shell">
        <div className="pricing-head" {...headReveal}>
          <span className="label reveal">{flexPricing.label}</span>
          <h2 id="flex-pricing-title" className="reveal" style={{ "--i": 1 }}>
            How much does <span className="accent">“Flex”</span> cost?
          </h2>
        </div>

        <div className="plans">
          {flexPricing.plans.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </StyledPricing>
  );
};

const PlanCard = ({ plan, index }) => {
  const reveal = useFlexReveal();
  const {
    name,
    description,
    price,
    period,
    features,
    ctaText,
    ctaLink,
    Icon,
    featured,
  } = plan;

  return (
    <article
      className={featured ? "plan plan--featured reveal" : "plan reveal"}
      aria-label={name}
      style={{ "--i": index }}
      {...reveal}
    >
      <span className="plan-icon draw">
        <Icon aria-hidden="true" />
      </span>
      <h3>{name}</h3>
      <div className="plan-intro">
        <p className="plan-desc">{description}</p>
      </div>

      <p className="plan-price">
        <strong>{price}</strong> <span>{period}</span>
      </p>

      <ul className="plan-features">
        {features.map((feature, i) => (
          // Checks tick in one by one after the card has settled.
          <li key={feature} className="draw" style={{ "--i": index + i + 4 }}>
            <FiCheck aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>

      <FlexBtn
        to={ctaLink}
        block
        bg={featured ? flexColors.white : flexColors.primary}
        color={featured ? flexColors.navy : flexColors.white}
      >
        {ctaText}
      </FlexBtn>
    </article>
  );
};

export default FlexPricing;

const StyledPricing = styled.section`
  font-family: ${flexFont};
  background: ${flexColors.tint};
  padding: clamp(4.8rem, 6vw, 6.4rem) 0 clamp(4.8rem, 6vw, 5.6rem);
  /* Keeps the heading clear of the header when reached via "#flex-pricing". */
  scroll-margin-top: 2rem;
  ${flexReset}
  ${flexMotion}

  .shell {
    ${flexShell}
  }

  .pricing-head {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
  }

  .label {
    ${pillLabel}
    font-size: 1.2rem;
  }

  h2 {
    ${sectionTitle}
    text-align: center;
    max-width: clamp(22.91rem, 63.64vw, 28rem);
    margin: 0 auto;
  }

  .plans {
    margin: clamp(2.4rem, 3vw, 3.2rem) auto 0;
    max-width: 94rem;
    display: grid;
    gap: 2.4rem;
  }

  .plan {
    display: flex;
    flex-direction: column;
    // padding: clamp(2.4rem, 3vw, 4rem) clamp(2rem, 2.6vw, 3.2rem);
    padding: clamp(3.93rem, 10.91vw, 4.8rem);
    background: ${flexColors.white};
    border: 1px solid ${flexColors.border};
    border-radius: 1.6rem;
    color: ${flexColors.title};
  }

  ${onHover(`
    .plan:hover {
      translate: 0 -0.4rem;
      box-shadow: 0 2.4rem 4.8rem -2.4rem rgba(17, 17, 17, 0.22);
    }

    .plan--featured:hover {
      box-shadow: 0 2.8rem 5.6rem -1.6rem rgba(6, 3, 141, 0.55);
    }
  `)}

  .plan--featured {
    background: ${flexColors.navy};
    border-color: ${flexColors.navy};
    color: ${flexColors.white};
    box-shadow: 0 2.4rem 4.8rem -1.6rem rgba(6, 3, 141, 0.45);
  }

  .plan-icon {
    display: grid;
    place-items: center;
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 0.8rem;
    background: ${flexColors.tintStrong};
    color: ${flexColors.primary};
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }

  .plan--featured .plan-icon {
    background: rgba(255, 255, 255, 0.14);
    color: ${flexColors.white};
  }

  h3 {
    font-size: clamp(1.96rem, 5.45vw, 2.4rem);
    font-weight: 800;
  }

  .plan-intro {
    margin-top: 0.8rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid ${flexColors.border};
  }

  .plan-desc {
    font-size: clamp(1.15rem, 3.18vw, 1.4rem);
    line-height: 1.6;
    color: ${flexColors.muted};
  }

  .plan--featured .plan-intro {
    border-color: rgba(255, 255, 255, 0.25);
  }

  .plan--featured .plan-desc {
    color: rgba(255, 255, 255, 0.75);
  }

  .plan-price {
    margin: 2.4rem 0 2rem;
    display: flex;
    align-items: baseline;
    gap: 0.4rem;
    flex-wrap: wrap;

    strong {
      font-size: clamp(4.2rem, 3.4vw, 4.4rem);
      font-weight: 800;
      letter-spacing: -0.02em;
      color: ${flexColors.primary};
    }

    span {
      font-size: clamp(1.31rem, 3.64vw, 1.6rem);
      color: ${flexColors.muted};
    }
  }

  .plan--featured .plan-price {
    strong,
    span {
      color: ${flexColors.white};
    }
  }

  .plan-features {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-bottom: 2.8rem;

    li {
      display: flex;
      align-items: center;
      gap: clamp(0.82rem, 2.27vw, 1rem);
      font-size: clamp(1.15rem, 3.18vw, 1.4rem);
      line-height: 1.4;
      color: ${flexColors.body};
    }

    svg {
      flex-shrink: 0;
      font-size: clamp(1.31rem, 3.64vw, 1.6rem);
      color: ${flexColors.primary};
    }
  }

  .plan--featured .plan-features {
    li,
    svg {
      color: ${flexColors.white};
    }
  }

  /* Pushes both CTAs to the bottom so they line up when feature lists differ in length. */
  .plan > a:last-child {
    margin-top: auto;
  }

  @media (max-width: 439px) {
    .plan-price strong {
      font-size: clamp(3.44rem, 9.55vw, 4.2rem);
    }
  }

  @media (min-width: 768px) {
    h2 {
      max-width: none;
    }
    .plans {
      grid-template-columns: 1fr 1fr;
      gap: clamp(2.4rem, 3vw, 3.2rem);
    }
  }
`;
