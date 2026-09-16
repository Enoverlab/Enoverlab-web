import styled from "styled-components";
import Marquee from "react-fast-marquee";

// The source photos range from 0.56 to 2.11 aspect ratio, so the strip is sized
// by height and each image keeps its own width. Constraining width instead would
// squash the landscape shots against the portrait ones.
const AlumniMarquee = ({
  title,
  images,
  altPrefix,
  height,
  mobileHeight,
  direction = "right",
  speed = 40,
}) => {
  return (
    <StyledAlumniMarquee $height={height} $mobileHeight={mobileHeight}>
      <header>{title}</header>
      <Marquee
        direction={direction}
        speed={speed}
        autoFill
        pauseOnHover
        gradient
        gradientColor="#fffdf7"
        gradientWidth={0}
      >
        {images.map((image, idx) => (
          <img
            src={image}
            key={`${altPrefix}${idx}`}
            alt={`${altPrefix} ${idx + 1}`}
            loading="lazy"
          />
        ))}
      </Marquee>
    </StyledAlumniMarquee>
  );
};

export default AlumniMarquee;

const StyledAlumniMarquee = styled.section`
  padding: 3.2rem 0;
  header {
    padding: 0 2.4rem 3.1rem 2.4rem;
    font-weight: 700;
    text-align: center;
    color: var(--Body-Text);
    font-size: 2rem;
  }
  img {
    height: ${(props) => props.$mobileHeight};
    width: auto;
    margin: 0 0.8rem;
    border-radius: 8px;
    object-fit: contain;
  }
  @media (min-width: 1024px) {
    padding: 5.4rem 0;
    header {
      padding: 0 9.6rem 2.8rem 9.6rem;
      font-size: 3rem;
    }
    img {
      height: ${(props) => props.$height};
      margin: 0 1.2rem;
    }
  }
`;
