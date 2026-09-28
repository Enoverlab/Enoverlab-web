import React, { useId, useState } from "react";
import styled, { keyframes } from "styled-components";
import FlexCenterSelect from "./FlexCenterSelect";
import FlexSyllabusBtn from "./FlexSyllabusBtn";
import { flexStartDates } from "./flexData";
import useFlexReveal from "./useFlexReveal";
import {
  flexColors,
  flexEase,
  flexFont,
  flexMotion,
  flexReset,
  flexShell,
  pillLabel,
} from "./flexTheme";

const FlexStartDates = () => {
  const { label, online, hybrid } = flexStartDates;
  const hybridLabelId = useId();
  const [centerId, setCenterId] = useState(null);
  const selectedCenter = hybrid.centers.find((c) => c.id === centerId);
  const OnlineIcon = online.Icon;
  const HybridIcon = hybrid.Icon;
  const reveal = useFlexReveal();

  return (
    <StyledStartDates aria-labelledby="flex-dates-title" {...reveal}>
      <div className="shell">
        <h2 id="flex-dates-title" className="label reveal">
          {label}
        </h2>

        <div className="dates-card reveal" style={{ "--i": 1 }}>
          <div className="tracks">
            <div className="track">
              <p className="track-title">
                <span className="track-icon draw">
                  <OnlineIcon aria-hidden="true" />
                </span>
                {online.title}
              </p>
              <p className="track-meta">
                <span>
                  Date: <strong>{online.date}</strong>
                </span>
                <span>
                  Day: <strong>{online.day}</strong>
                </span>
                <span>
                  Time: <strong>{online.time}</strong>
                </span>
              </p>
            </div>

            <span className="divider" aria-hidden="true" />

            <div className="track">
              <p id={hybridLabelId} className="track-title track-title--hybrid">
                <span className="track-icon draw">
                  <HybridIcon aria-hidden="true" />
                </span>
                {hybrid.title}
              </p>

              <FlexCenterSelect
                centers={hybrid.centers}
                labelId={hybridLabelId}
                value={centerId}
                onChange={setCenterId}
              />

              {/* aria-live so screen readers hear the schedule when a centre is picked. */}
              <div aria-live="polite">
                {selectedCenter && (
                  // Keyed so switching centre replays the fade on the new schedule.
                  <p
                    key={selectedCenter.id}
                    className="track-meta track-meta--enter"
                  >
                    <span>
                      Date: <strong>{selectedCenter.date}</strong>
                    </span>
                    {/* <span>
                      Time: <strong>{selectedCenter.time}</strong>
                    </span> */}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Mobile shows this inside the Online Flex pricing card instead. */}
          <FlexSyllabusBtn className="dates-syllabus" />
        </div>
      </div>
    </StyledStartDates>
  );
};

export default FlexStartDates;

const metaIn = keyframes`
  from { opacity: 0; transform: translateY(-0.6rem); }
`;

const metaFade = keyframes`
  from { opacity: 0; }
`;

const StyledStartDates = styled.section`
  font-family: ${flexFont};
  background: #eef3ff;
  padding: clamp(2.4rem, 3vw, 3.2rem) 0 clamp(4rem, 5vw, 5.6rem);
  text-align: center;
  ${flexReset}
  ${flexMotion}

  .shell {
    ${flexShell}
  }

  .label {
    ${pillLabel}
    font-size: 1.1rem;
  }

  .dates-card {
    margin: 1.6rem auto 0;
    max-width: 121.8rem;
    padding: 3.4rem clamp(2rem, 3vw, 3.2rem);
    background: ${flexColors.white};
    border-radius: 1.2rem;
  }

  .tracks {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
  }

  .dates-syllabus {
    display: none;
    margin-top: 3.2rem;
  }

  .track {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    width: 100%;
  }

  .track-title {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.6rem;
    font-weight: 500;
    color: ${flexColors.title};
  }

  .track-title--hybrid {
    color: ${flexColors.primary};
  }

  .track-icon {
    display: grid;
    place-items: center;
    width: 3rem;
    height: 2.6rem;
    border-radius: 0.6rem;
    background: ${flexColors.tintStrong};
    color: ${flexColors.primary};
    font-size: 1.5rem;
  }

  .track-meta {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    font-size: 2rem;
    color: ${flexColors.title};

    strong {
      font-weight: 700;
    }
  }

  .track-meta--enter {
    animation: ${metaIn} 280ms ${flexEase};

    @media (prefers-reduced-motion: reduce) {
      animation-name: ${metaFade};
    }
  }

  .divider {
    width: 4.8rem;
    height: 1px;
    background: ${flexColors.border};
  }

  @media (min-width: 900px) {
    .tracks {
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-start;
    }

    .dates-syllabus {
      display: block;
    }

    .track-title {
      margin-top: 1rem;
    }

    .track-title--hybrid {
      margin-top: 0;
    }
    // .track-meta {
    //   flex-direction: row;
    //   gap: 1.6rem;
    // }

    .track-meta--enter {
      animation: ${metaIn} 280ms ${flexEase};

      @media (prefers-reduced-motion: reduce) {
        animation-name: ${metaFade};
      }
    }

    .divider {
      align-self: stretch;
      width: 1px;
      height: auto;
    }
  }
`;
