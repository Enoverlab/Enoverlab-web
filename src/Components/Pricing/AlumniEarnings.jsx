import AlumniMarquee from "./AlumniMarquee";
import aearn1a from "../../assets/aearns/aearn1a.jpg";
import aearn1b from "../../assets/aearns/aearn1b.jpg";
import aearn2a from "../../assets/aearns/aearn2a.jpg";
import aearn2b from "../../assets/aearns/aearn2b.jpg";
import aearn3a from "../../assets/aearns/aearn3a.jpg";
import aearn3b from "../../assets/aearns/aearn3b.jpg";
import aearn4a from "../../assets/aearns/aearn4a.jpg";
import aearn4b from "../../assets/aearns/aearn4b.jpg";
import aearn5a from "../../assets/aearns/aearn5a.jpg";
import aearn5b from "../../assets/aearns/aearn5b.jpg";

// Each alumnus contributes an a/b pair, kept adjacent so the two shots stay
// together as they scroll past.
const earningsImages = [
  aearn1a,
  aearn1b,
  aearn2a,
  aearn2b,
  aearn3a,
  aearn3b,
  aearn4a,
  aearn4b,
  aearn5a,
  aearn5b,
];

const AlumniEarnings = () => (
  <AlumniMarquee
    title="The Results of Happiness"
    images={earningsImages}
    altPrefix="Alumni earnings"
    mobileHeight="22rem"
    height="30rem"
  />
);

export default AlumniEarnings;
