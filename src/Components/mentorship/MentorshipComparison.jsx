import React from "react";
import styled from "styled-components";
import { comparisonRows, mentorshipAssets } from "./mentorshipData";

const MentorshipComparison = () => {
  return (
    <StyledComparison>
      <div className="mentorship-shell inner">
        <h2 className="section-title">
          Here is the Cost of &quot;Figuring It Out Alone&quot;
        </h2>

        <figure className="comparison-visual">
          <img
            src={mentorshipAssets.comparisonPhoto}
            alt=""
            loading="lazy"
          />
        </figure>

        <div className="table-scroll">
          <table className="vs-table">
            <thead>
              <tr>
                <th scope="col" className="th-metric">
                  Metric
                </th>
                <th scope="col" className="th-without">
                  Without a Mentor
                </th>
                <th scope="col" className="th-with">
                  With a Mentor
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.metric}>
                  <th scope="row" className="td-metric">
                    {row.metric}
                  </th>
                  <td className="td-without">{row.without}</td>
                  <td className="td-with">{row.with}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </StyledComparison>
  );
};

export default MentorshipComparison;

const StyledComparison = styled.section`
  font-family: "Inter", "Plus Jakarta Sans", sans-serif;
  background: #fbfbfb;
  padding: clamp(3.6rem, 9vw, 8rem) 0 clamp(3.6rem, 10vw, 9rem);

  .mentorship-shell.inner {
    width: min(100%, 124rem);
    margin: 0 auto;
    padding: 0 clamp(1.6rem, 4vw, 10rem);
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas:
      "title"
      "photo"
      "table";
    gap: clamp(3.8rem, 7vw, 5.65rem);
    justify-items: center;

    @media (min-width: 961px) {
      grid-template-columns: minmax(0, 590px) minmax(280px, 528px);
      grid-template-rows: auto auto;
      grid-template-areas:
        "title photo"
        "table photo";
      column-gap: clamp(7.2rem, 10vw, 12.1rem);
      row-gap: clamp(4rem, 6vw, 5.6rem);
      align-items: start;
      justify-items: stretch;
    }
  }

  .section-title {
    grid-area: title;
    margin: 0;
    font-weight: 700;
    font-size: clamp(2rem, 2.75vw, 2.4rem);
    line-height: 1.25;
    text-align: center;
    color: #3d3d3d;
    max-width: min(54rem, 100%);

    @media (min-width: 961px) {
      max-width: none;
      text-align: left;
      align-self: start;
    }

    @media (max-width: 960px) {
      max-width: 28.2rem;
    }
  }

  .comparison-visual {
    grid-area: photo;
    margin: 0;
    width: min(100%, 398px);
    border-radius: clamp(14px, 1.6vw, 20px);
    overflow: hidden;
    aspect-ratio: 528 / 354;
    background: #dcdcdc;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (min-width: 961px) {
      width: 100%;
      max-width: 528px;
      justify-self: end;
      margin-top: clamp(3.2rem, 5vw, 5.5rem);
    }
  }

  .table-scroll {
    grid-area: table;
    width: 100%;
    max-width: 590px;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 0.35rem;

    @media (min-width: 961px) {
      max-width: none;
      justify-self: stretch;
    }
  }

  .vs-table {
    border-collapse: separate;
    border-spacing: 0;
    table-layout: fixed;
    width: 100%;
    min-width: 388px;
    font-size: clamp(1.3rem, 1.35vw, 1.4rem);
    line-height: 1.35;
  }

  .vs-table thead th {
    font-weight: 600;
    padding: 2rem 1rem 1.6rem;
    vertical-align: top;
    text-align: left;
  }

  .vs-table tbody th,
  .vs-table tbody td {
    font-weight: 400;
    padding: 1.25rem 1rem;
    text-align: left;
    min-height: 4.6rem;
    box-sizing: border-box;
  }

  .th-metric,
  .td-metric {
    width: 36%;
    background: #effdff;
    color: #3d3d3d;
    border-left: 1px solid #efefef;
    border-right: 1px solid #efefef;
  }

  .th-metric {
    border-top: 1px solid #efefef;
    border-radius: 10px 0 0 0;
  }

  .td-metric {
    border-top: 1px solid #f4f4f4;
  }

  .th-without,
  .td-without {
    width: 34%;
    background: #002890;
    color: #ffffff;
  }

  .th-without {
    border-inline: none;
  }

  .td-without {
    border-top: 1px solid rgba(255, 255, 255, 0.39);
    border-inline: none;
  }

  .th-with,
  .td-with {
    width: 30%;
    background: #00144b;
    color: #ffffff;
    border-inline: none;
  }

  .td-with {
    border-top: 1px solid rgba(255, 255, 255, 0.39);
  }

  .th-with {
    border-radius: 0 10px 0 0;
  }

  tbody tr:last-child .td-metric {
    border-bottom: 1px solid #efefef;
    border-radius: 0 0 0 10px;
  }

  tbody tr:last-child .td-without {
    border-bottom: none;
  }

  tbody tr:last-child .td-with {
    border-radius: 0 0 10px 0;
  }
`;

