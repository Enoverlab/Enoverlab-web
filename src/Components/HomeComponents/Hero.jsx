import { SecondaryButton } from "../../Utils/styled/Buttons";
import {
  StyledHeroBody,
  StyledHeroFooter,
  StyledHeroHeader,
} from "../../Utils/styled/hero/hero.styled";
import ACTD from "../../assets/icon/ACTD.svg";
import deskheroImage1 from "../../assets/icon/deskHeroImg.png";
import mobHeroImg from "../../assets/icon/mobHeroImg.png";
import line from "../../assets/icon/Line 76.svg";

const Hero = () => {
  let src = `${mobHeroImg} 300w, ${deskheroImage1} 1512w,  `;
  let sizes = `(min-width: 1024px) 1024px, 300px`;
  return (
    <div>
      <StyledHeroHeader>
        <h1>
          Empowering Ordinary People to Become <span>EXCEPTIONAL</span> Product Managers
        </h1>
        <SecondaryButton Text="Explore Our Programs" to="#programs" arrowDown={true} />
      </StyledHeroHeader>
      <StyledHeroBody>
        <img
          src={mobHeroImg}
          alt="Enoverlab Hero"
          srcSet={src}
          sizes={sizes}
          className="heroImg"
        />
        <div className="text">
          <h2>
            20K+ <span>Members</span>
          </h2>
          <img src={line} alt="" />
          <h2>
            20+ <span>Locations</span>
          </h2>
        </div>
      </StyledHeroBody>
      <StyledHeroFooter>
        <section>
          <p>
            Regardless of your background, you can become a skilled product
            manager in the next 6 months.
          </p>
          <SecondaryButton to="#programs"  Text="Explore Our Programs" w="27rem" arrowDown={true} />
        </section>
        <div>
          <img src={ACTD} alt="Acrd" />
          <p>
            Accredited by American Council of Training and Development (ACTD)
          </p>
        </div>
      </StyledHeroFooter>
    </div>
  );
};

export default Hero;
