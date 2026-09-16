import AlumniMarquee from "./AlumniMarquee";
import ahof1 from "../../assets/AHoF/AHoF1.jpg";
import ahof2 from "../../assets/AHoF/AHoF2.jpg";
import ahof3 from "../../assets/AHoF/AHoF3.jpg";
import ahof4 from "../../assets/AHoF/AHoF4.jpg";
import ahof5 from "../../assets/AHoF/AHoF5.jpg";
import ahof6 from "../../assets/AHoF/AHoF6.jpg";
import ahof7 from "../../assets/AHoF/AHoF7.jpg";
import ahof8 from "../../assets/AHoF/AHoF8.jpg";
import ahof9 from "../../assets/AHoF/AHoF9.jpg";
import ahof10 from "../../assets/AHoF/AHoF10.jpg";
import ahof11 from "../../assets/AHoF/AHoF11.jpg";
import ahof12 from "../../assets/AHoF/AHoF12.jpg";
import ahof13 from "../../assets/AHoF/AHoF13.jpg";
import ahof14 from "../../assets/AHoF/AHoF14.jpg";
import ahof15 from "../../assets/AHoF/AHoF15.jpg";
import ahof16 from "../../assets/AHoF/AHoF16.jpg";
import ahof17 from "../../assets/AHoF/AHoF17.jpg";
import ahof18 from "../../assets/AHoF/AHoF18.jpg";
import ahof19 from "../../assets/AHoF/AHoF19.jpg";
import ahof20 from "../../assets/AHoF/AHoF20.jpg";
import ahof21 from "../../assets/AHoF/AHoF21.jpg";
import ahof22 from "../../assets/AHoF/AHoF22.jpg";
import ahof23 from "../../assets/AHoF/AHoF23.jpg";
import ahof24 from "../../assets/AHoF/AHoF24.jpg";

const hallOfFameImages = [
  ahof1,
  ahof2,
  ahof3,
  ahof4,
  ahof5,
  ahof6,
  ahof7,
  ahof8,
  ahof9,
  ahof10,
  ahof11,
  ahof12,
  ahof13,
  ahof14,
  ahof15,
  ahof16,
  ahof17,
  ahof18,
  ahof19,
  ahof20,
  ahof21,
  ahof22,
  ahof23,
  ahof24,
];

const AlumniHallOfFame = () => (
  <AlumniMarquee
    title="See Happiness in the Frames"
    images={hallOfFameImages}
    altPrefix="Enoverlab alumni"
    mobileHeight="18rem"
    height="26rem"
    mobileOnlyTitle
  />
);

export default AlumniHallOfFame;
