import React from "react";
import styled from "styled-components";
export const SectionFourteen = () => {
  return (
    <>
      <StyledSectionFourteen>
        <div className="section-fourteen-container">
          <h3>3 KEY Reasons why you should learn from Enoverlab Now!</h3>
          <ul>
            <li>
              You get the close attention and support.
              <p>
                Our training is designed to be in small class groups for focused
                attention on individual trainees unlike many other training
                schools that jam pack 60-70 person’s in a class.
              </p>
              <p>
                <span>For example,</span>
              </p>
              <p>
                Before Titi Joined the Enoverlab February cohort, she complained
                bitterly about how she spent a lot of money and wasted her time
                on a training that was not it at all.
              </p>
              <p>
                According to her, she thought having a large number of followers
                on their IG page means they'd deliver.
              </p>
              <p>
                She was so disappointed and had to start afresh with Enoverlab.
              </p>
              <p>
                I understand how this situation can be and that is why we are
                accepting <span> just 20</span> professionals in this March
                cohort.
              </p>
            </li>
            {/* You get access to a special 6-7 weeks Internship placement 
            <p>
                {" "}
                We've created this specially for you so that you can get
                real-life experience that will{" "}
                <span> help you get PM Jobs faster.</span>
              </p>
              <p>
                {" "}
                Many of these companies want Professionals with work Experience.
              </p>
              <p>
                {" "}
                We're doing this to give <span>each</span> of you the{" "}
                <span>right attention</span> needed to succeed.
              </p> */}
            <li>
              You get to join a community of connected Product Managers who have
              a similar mindset as yours and are willing to grow beyond.
              <p>
                Community is so underrated and when you join the Enoverlab
                supportive community you'll understand better.
              </p>
              <p>
                I could go on and on listing more reasons, but if you're still
                Not convinced at this point,
              </p>
              <p>
                I'd advise you to stop reading Now as Product Management might
                Not be for you.
              </p>
            </li>
          </ul>
          <p className="list-head">
            <span>
              {" "}
              Now for you who is ready to transition Into Tech, what does:
            </span>
          </p>
          <div className="list-content">
            <ul>
              <li>
                {" "}
                Working in an <span>important role in Tech</span> sounds like
                for you
              </li>

              <li>
                {" "}
                Or working remotely from <span> anywhere in the world…</span>
              </li>
              <li>
                <span> Solving problems</span> and delivering value with
                products to thousands/millions of people
              </li>
              <li>
                <span>Driving value </span>for businesses and helping them grow
              </li>
              <li>
                <span>Impacting lives</span> with your solutions
              </li>
              <li>
                Making <span> more money</span> to enjoy life as you want
              </li>

              <li>
                And having a truly <span>fulfilling</span> and rewarding career
              </li>
            </ul>
          </div>
        </div>
      </StyledSectionFourteen>
    </>
  );
};

const StyledSectionFourteen = styled.div`
  .section-fourteen-container {
    width: 100%;
    padding: 2.9375rem 5% 2.9rem 5%;
    background-color: #fff;
    @media (max-width: 768px) {
      padding: 2.9375rem 5% 2.9rem 10%;
    }
    h3 {
      color: #000000;
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1rem;

      @media (max-width: 768px) {
        font-size: 1.25rem;
      }
    }
    ul {
      li {
        color: #0046ff;
        font-size: 1.5rem;
        font-weight: 600;

        @media (max-width: 768px) {
          font-size: 1.25rem;
        }
      }
      p {
        color: #000000;
        font-size: 1.25rem;
        font-weight: 400;
        margin-bottom: 2rem;
        margin-top: 1rem;

        span {
          font-weight: 600;
        }
        @media (max-width: 768px) {
          font-size: 0.75rem;
          margin-bottom: 1rem;
          margin-top: 1rem;
        }
      }
    }
    .list-head {
      color: #000000;
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 1rem;

      @media (max-width: 768px) {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
      }
    }
    .list-content {
      ul {
        li {
          color: #000;
          font-size: 1.25rem;
          font-weight: 400;
          margin-bottom: 1.5rem;

          span {
            font-weight: 600;
          }

          @media (max-width: 768px) {
            font-size: 0.75rem;
            margin-bottom: 1rem;
          }
        }
      }
    }
  }
`;
