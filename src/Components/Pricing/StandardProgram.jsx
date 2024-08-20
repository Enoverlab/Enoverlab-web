import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import styled from "styled-components";
import { Flex } from "../HomeComponents/ProductSection";
import { H2, H4, P } from "../../Utils/styled/Typograpyhy";
import weeks18 from "../../assets/icon/weeks18.png";
import weeks20 from "../../assets/icon/20weeks.png";
import weeks6 from "../../assets/icon/6weeks.png";
import { OnsiteProgram, PrivateCoaching, onlineProgram } from "../../constants";
import check from "../../assets/icon/check.svg";
import { SubmitButton } from "../../Utils/styled/Buttons";
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import StandardForm from "../Enroll-Form/StandardForm";

const StandardProgram = () => {
  const [location, setLocation] = useState('')
  const [isError,setIsError] = useState(false)
  const [trainingLocation, setTrainingLocation] = useState({place : '',location : "Select Location to see address", tuition : '300,000', link : '', mapIframe : '', weeks : ""})
  const [enrolModal, setEnrolModal] = useState({open : false, formtype : '', site : ''})
  useEffect(()=>{
    switch(location){
      case "Lekki":
        setTrainingLocation({
          place : 'Lekki',
          location : 'Lekki Gateview Plaza, Admiralty way, Lekki Phase 1',
          tuition : '300,000',
          weeks : "10",
          link : 'https://forms.gle/RubzGLnYfKgShe4N7',
          mapIframe : <iframe title="Lekki" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.644401811104!2d3.453612374484845!3d6.439691993551541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf59eb8a97233%3A0x32b5defb8f41b624!2sGateview%20Plaza!5e0!3m2!1sen!2sng!4v1721039921603!5m2!1sen!2sng" width="100%" height="450" style={{border : 0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        })
        break;
      case "Ibadan":
        setTrainingLocation({
          place : 'Ibadan',
          location : 'Cafe One, Palms Mall, Ring Road, Ibadan',
          tuition : '250,000',
          weeks : "10",
          link :  "https://forms.gle/CsYYXENLZNmjnsfK6",
          mapIframe : <iframe title="Ibadan" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.9143544673657!2d3.8634040744943348!3d7.3634969926456275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398decfa59eb47%3A0x97b5292d9159b2d8!2sCaf%C3%A9%20One%2C%20The%20Palms%20Mall%2C%20Ring%20Road%2C%20Ibadan!5e0!3m2!1sen!2sng!4v1721039815052!5m2!1sen!2sng" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        })
        break;
        case "Anambra":
          setTrainingLocation({
            place : 'Anambra',
            location : 'Kodex Africa, Plot No. A/127, Iyiagu Housing Estate, Awka,Anambra',
            tuition : '250,000',
            weeks : "10",
            link :  "https://forms.gle/YWw8jFN42sDoPQiT8",
            mapIframe : <iframe title="Anambra" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3051337147767!2d7.053362574482788!3d6.223437493764614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104379af706c6619%3A0x2598afc465c51641!2sKodex%20Africa!5e0!3m2!1sen!2sng!4v1721040675268!5m2!1sen!2sng" width="100%" height="450" style={{border : 0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          })
          break;
      case "Abuja":
        setTrainingLocation({
          place : 'Abuja',
          weeks : "10",
          location : '22 Kumasi Cres, Wuse 2, Abuja',
          tuition : '300,000',
          link : "https://forms.gle/Gp7G4tN6QsxaPnds7",
          mapIframe : <iframe title="Abuja" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.7928300264903!2d7.476952574515317!3d9.082628890980839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0af7b326c723%3A0xd8be18bcf35b950b!2s22%20Kumasi%20Cres%2C%20Wuse%2C%20Abuja%20904101%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1721039639625!5m2!1sen!2sng" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        })
        break;
        case "Ikeja":
          setTrainingLocation({
            place : 'Ikeja',
            location : 'EridanSpace, Oluwalogbon House, Plot A Obafemi Awolowo Way, Alausa, Ikeja',
            tuition : '300,000',
            weeks : "10",
            link : 'https://forms.gle/p1FhbPHk5muJGpdK6',
            mapIframe : <iframe title="Ikeja Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.270366461118!2d3.3545898!3d6.613292100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b934641e6428f%3A0x2131b57bcd1266a0!2sEridanSpace%20Ikeja%20Lagos!5e0!3m2!1sen!2sng!4v1721037913886!5m2!1sen!2sng" width="100%" height="450" style={{border : 0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          })
          break;
        case "Osapa":
          setTrainingLocation({
            place : "Osapa",
            tuition : '400,000',
            location : "Triangle Mall, Osapa London, Lekki - Epe Expressway",
            link : "https://forms.gle/cuNG9n8vDqqxCdru9",
            weeks : "6",
            mapIframe : <iframe title="Osapa Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.664387829949!2d3.5097482999999996!3d6.437132499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf7266783825f%3A0xc71e7e52aec40174!2sTriangle%20Business%20Place!5e0!3m2!1sen!2sng!4v1724143432688!5m2!1sen!2sng" width="100%" height="450" style={{border : 0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          })
          break;
      default:
        setTrainingLocation({
          location : 'Select Location to see address',
          tuition : '300,000',
          link : '',
          mapIframe : '',
          weeks : "10"
        })
        break;
    }
  },[location])
  function handleLocationChange(e){
    setLocation(e.target.value)
  }

  function handleOpenEnrolModal(formtype , site = ''){
    setEnrolModal({...enrolModal, open : true, formtype, site})
  }
  function handleCloseEnrolModal(){
    setEnrolModal({...enrolModal, open : false})
  }

  function handleSubmit(e){
    if(!trainingLocation.link){
      e.preventDefault()
      setIsError(true)
      return
    }
    e.preventDefault()
    handleOpenEnrolModal(trainingLocation.place, 'On-site')
    setIsError(false)
  }
  function handleBlur(){
    if(!trainingLocation.link){
      setIsError(true)
      return
    }
    setIsError(false)
  }
  return (
    <StyledProgram>
      <header>Standard Programs</header>
      <div className="swipepgContainer">
        <section className="contain">
          <div className="swiperPagination"></div>
        </section>
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            el: ".swiperPagination",
            clickable: true,
            renderBullet: (index, name) => {
              return (
                '<p class="' +
                name +
                '"> <span class="programtext' +
                index +
                '"></span> </p>'
              );
            },
          }}
          autoHeight={true}
        >
          <SwiperSlide>
            <Flex mdgap="5.9rem" display="block" mdalign="stretch">
              <div className="program">
                <div className="heading" id="online">
                  <H4 mdfs="2.3vw" fw="700">
                    Online Training
                  </H4>
                  <img src={weeks18} alt="18 weeks" />
                </div>
                <form className="cover" onSubmit={(e)=>{e.preventDefault()}}>
                  <main>
                  <div  className="item">
                       <div >
                       <H4 mdfs="1.058vw" mb="1rem" fs="3.2vw" color="var(--Body-Text)">
                          Training day
                        </H4>
                        <H2
                          mdfs="1.587vw"
                          fs="3.6vw"
                          fw="600"
                          color="var(--Body-Text)"
                        >
                          Every Monday <br /> & Thursday
                        </H2>
                       </div>
                       <div>
                       <H4 mdfs="1.058vw" mb="1rem" fs="3.2vw" color="var(--Body-Text)">
                          Class Times
                        </H4>
                        <H2
                          mdfs="1.58vw"
                          fs="3.6vw"
                          fw="600"
                          color="var(--Body-Text)"
                        >
                          8pm - 10pm
                        </H2>
                       </div>
                        <div>
                        <H4 mdfs="1.058vw" mb="1rem" fs="3.2vw" color="var(--Body-Text)">
                          Duration
                        </H4>
                        <H2 mdfs="1.587vw" mb="1rem" fs="3.6vw" fw="600" color="var(--Body-Text)">
                          10 weeks training
                        </H2>
                        <H2 mdfs="1.587vw" fs="3.6vw" fw="600" color="var(--Body-Text)">
                          8 weeks internship
                        </H2>
                        </div>
                        <div>
                        <H4 mdfs="1.058vw" mb="1rem" fs="3.2vw" color="var(--Body-Text)">
                          TUITION FEES
                        </H4>
                        <H2
                          mdfs="2.38vw"
                          fs="3.6vw"
                          fw="600"
                          color="var(--Body-Text)"
                        >
                          ₦200,000
                        </H2>
                      </div>
                    </div>
                    
                  </main>
                  <div className="cta">
                      <SubmitButton Text="Enroll Now"  handleClick={()=>{
                        handleOpenEnrolModal('Online Instructor Led')
                      }}/>
                      <Link to="/StandardSyllabus.pdf" target="_blank" download='StandardSyllabus.pdf' className="syll">
                      Download Syllabus
                    </Link>
                  </div>
                </form>
              </div>
              <div className="breakdown">
                <H4 mdfs="1.58vw" fw="700" pt="25px" pb="25px" mdpb="28px" color="var(--Body-Text)">
                  Here Are The Benefits You Get
                </H4>
                <div className="list2">
                  {onlineProgram.map((pg) => (
                    <Flex gap="10px">
                      <img src={check} alt="checkMark" />
                      <P fs="3.6vw" mdfs="1.33vw" color="var(--Body-Text)">
                        {pg}
                      </P>
                    </Flex>
                  ))}
                </div>
                <div className="but">
                <Link to="/StandardSyllabus.pdf" target="_blank" download='StandardSyllabus.pdf' className="syll">
                      Download Syllabus
                </Link>
                </div>
              </div>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex mdgap="5.9rem" display="block" mdalign="stretch">
                <div className="program">
                <div className="heading" id="onsite">
                  <H4 mdfs="2.3vw" fw="700" >
                    On-site Training
                  </H4>
                  <img src={weeks20} alt="20 weeks" />
                </div>
                <form  onSubmit={handleSubmit} className="cover2">
                  <main>
                    <div className="item">
                      <div>
                       <H4 mdfs="1.058vw" mb="1rem" fs="3.2vw" color="var(--Body-Text)">
                          Training day
                        </H4>
                        {
                          trainingLocation.place === "Osapa" ? 
                          <H2 mdfs="1.587vw" fs="3.6vw" fw="600" color="var(--Body-Text)">
                          Every Tuesday <br /> & Thursday
                          </H2> : <H2 mdfs="1.587vw" fs="3.6vw" fw="600" color="var(--Body-Text)">
                          Every Saturday
                        </H2>
                        }
                      </div>
                      <div>
                       <H4 mdfs="1.058vw" mb="1rem" fs="3.2vw" color="var(--Body-Text)">
                          Class Times
                        </H4>
                        <H2 mdfs="1.58vw" fs="3.6vw" fw="600" color="var(--Body-Text)">
                          {trainingLocation.place === "Osapa" ? "12pm - 3pm" : "10am - 1pm"}
                        </H2>
                      </div>
                      <div className="selectOption">
                        <select title="location" name="locale" id="locale"  value={location} onChange={handleLocationChange} onBlur={handleBlur}>
                          <option id="item" value="">Select Location</option>
                          <option value="Lekki">LEKKI</option>
                          <option value="Ibadan">IBADAN</option>
                          <option value="Abuja">ABUJA</option>
                          <option value="Ikeja">IKEJA</option>
                          <option value="Anambra">ANAMBRA</option>
                          <option value="Osapa">OSAPA, LEKKI</option>
                        </select>
                        {isError && <p className="err">Please select Your Preferred Location</p>}
                      </div>
                      <div className="selectLocale">
                        <H4 mdfs="1.058vw" mb="1rem" fs="3.2vw" color="var(--Body-Text)">
                          Location
                        </H4>
                        <H2
                          mdfs="1.587vw"
                          fs="3.6vw"
                          fw="600"
                          color="var(--Body-Text)"
                        >
                          {trainingLocation.location}
                        </H2>
                      </div>
                      <div>
                        <H4 mdfs="1.058vw" mb="1rem" fs="3.2vw" color="var(--Body-Text)">
                          Duration
                        </H4>
                        <H2 mdfs="1.587vw" mb="1rem" fs="3.6vw" fw="600" color="var(--Body-Text)" >
                          {trainingLocation.weeks} weeks training
                        </H2>
                        <H2
                          mdfs="1.587vw"
                          fs="3.6vw"
                          fw="600"
                          color="var(--Body-Text)"
                        >
                          {trainingLocation.place === "Osapa" || '8 weeks Internship'}
                        </H2>
                      </div>
                      <div>
                        <H4 mdfs="1.058vw" mb="1rem" fs="3.2vw" color="var(--Body-Text)">
                          TUITION FEES
                        </H4>
                        <H2
                          mdfs="2.38vw"
                          fs="3.6vw"
                          fw="600"
                          color="var(--Body-Text)"
                        >
                          ₦{trainingLocation.tuition}
                        </H2>
                      </div>
                    </div>
                  </main>
                  <div className="cta">
                    <SubmitButton Text="Enroll Now"  />
                    <Link to="/StandardSyllabus.pdf" target="_blank" download='StandardSyllabus.pdf' className="syll">
                      Download Syllabus
                    </Link>
                  </div>
                </form>
                </div>
                <div className="mapMobileIframe">
                {trainingLocation.mapIframe}
                </div>
              <div className="breakdown">
                <H4
                  mdfs="1.58vw"
                  fw="700"
                  pt="25px"
                  pb="25px"
                  mdpb="28px"
                  color="var(--Body-Text)"
                >
                  Here Are The Benefits You Get
                </H4>
                <div className="list">
                  {OnsiteProgram.map((pg) => (
                    <Flex gap="10px">
                      <img src={check} alt="checkMark" />
                      <P fs="3.6vw" mdfs="1.23vw" color="var(--Body-Text)">
                        {pg}
                      </P>
                    </Flex>
                  ))}
                </div>
                <div className="but">
                <Link to="/StandardSyllabus.pdf" target="_blank" download='StandardSyllabus.pdf' className="syll">
                      Download Syllabus
                </Link>
                </div>
              </div>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Flex mdgap="5.9rem" display="block" mdalign="stretch">
              <div className="program">
                <div className="heading" id="online">
                  <H4 mdfs="2.3vw" fw="700">
                    Private Coaching
                  </H4>
                  <img src={weeks6} alt="6weeks" />
                </div>
                <form className="cover" onSubmit={(e)=>{e.preventDefault()}}>
                  <main>
                  <div  className="item">
                       <div >
                       <H4 mdfs="1.058vw" mb="1rem" fs="3.2vw" color="var(--Body-Text)">
                          Training day
                        </H4>
                        <H2
                          mdfs="1.587vw"
                          fs="3.6vw"
                          fw="600"
                          color="var(--Body-Text)"
                        >
                          Any Day You <br /> Choose
                        </H2>
                       </div>
                       <div>
                       <H4 mdfs="1.058vw" mb="1rem" fs="3.2vw" color="var(--Body-Text)">
                          Class Times
                        </H4>
                        <H2
                          mdfs="1.58vw"
                          fs="3.6vw"
                          fw="600"
                          color="var(--Body-Text)"
                        >
                          Any Time You <br />Choose
                        </H2>
                       </div>
                        <div>
                        <H4 mdfs="1.058vw" mb="1rem" fs="3.2vw" color="var(--Body-Text)">
                          Duration
                        </H4>
                        <H2 mdfs="1.587vw" mb="1rem" fs="3.6vw" fw="600" color="var(--Body-Text)">
                          6 weeks or less
                        </H2>
                        </div>
                        <div>
                        <H4 mdfs="1.058vw" mb="1rem" fs="3.2vw" color="var(--Body-Text)">
                          TUITION FEES
                        </H4>
                        <H2
                          mdfs="2vw"
                          fs="3.6vw"
                          fw="600"
                          color="var(--Body-Text)"
                        >
                          ₦899,000 / $699
                        </H2>
                      </div>
                    </div>
                  </main>
                  <div className="cta">
                      <SubmitButton Text="Enroll Now"  handleClick={()=>{
                        handleOpenEnrolModal('Online Instructor Led')
                      }}/>
                      <Link to="/PrivateSyllabus.pdf" target="_blank" download='PrivateSyllabus.pdf' className="syll">
                      Download Syllabus
                    </Link>
                  </div>
                </form>
              </div>
              <div className="breakdown">
                <H4 mdfs="1.58vw" fw="700" pt="25px" pb="25px" mdpb="28px" color="var(--Body-Text)">
                  Here Are The Benefits You Get
                </H4>
                <div className="list2">
                  {PrivateCoaching.map((pg) => (
                    <Flex gap="10px">
                      <img src={check} alt="checkMark" />
                      <P fs="3.6vw" mdfs="1.33vw" color="var(--Body-Text)">
                        {pg}
                      </P>
                    </Flex>
                  ))}
                </div>
                <div className="but">
                <Link to="/PrivateSyllabus.pdf" target="_blank" download='PrivateSyllabus.pdf' className="syll">
                      Download Syllabus
                </Link>
                </div>
              </div>
            </Flex>
          </SwiperSlide>
        </Swiper>
      </div>
      <StandardForm handleCloseModal={handleCloseEnrolModal} modalDetails={enrolModal}/>
      <div className="mapLaptopIframe">
      {trainingLocation.mapIframe}
      </div>
    </StyledProgram>
  );
};

export default StandardProgram;

const StyledProgram = styled.div`
  padding: 32px 0 0 5px;
  header {
    color: var(--Title-Text);
    text-align: center;
    font-size: 2.4rem;
    padding-bottom: 4rem;
  }
  .program {
    position: relative;
    width: 97%;
    img {
      width: 32.71vw;
      position: absolute;
      right: -10px;
    }
  }
  .heading {
    padding: 2.5rem 0;
    background: #0000ff;
    padding-left: 3.5rem;
    display: flex;
    align-items: center;
  }
  .cover {
    background: rgba(186, 234, 250, 0.4);
    padding: 4.4rem 0 2.5rem 0;
    padding-left: 3.5rem;
  }
  .cover2{
    background: rgba(186, 234, 250, 0.4);
    padding: 4.4rem 0 3.5rem 0;
    padding-left: 3.5rem;
  }
  .breakdown{
    padding: 0 1.2rem;
  }
  main {
    display: flex;
  }
  .item{
    display: grid;
    grid-template-columns: repeat(2, auto);
    column-gap: 100px;
    row-gap: 30px;
  }
  .selectLocale, .selectOption{
    grid-column: span 2 / span 2;
  }

  .list, .list2{
    display: flex;
    flex-direction: column;
    gap: 26px;
  }

  .cta {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
    .syll {
      display: none;
    }
  }

  .but{
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    .syll{
      color: #175afe;
      font-size: 16px;
    }
  }

  .swiperPagination {
    display: flex;
    .swiper-pagination-bullet {
      position: relative;
      display: flex;
      justify-items: center;
      align-items: center;
      padding: 4px 16px;
      color: #4b4b4b;
      width: 140px;
      margin: 0;
      border-radius: 3.103px 3.103px 0px 0px;
      border: 0.388px solid rgba(139, 139, 139, 0.40);
      font-size: 14px;
      text-align: center;
      height: 42px;
      background-color: #FFFDF7;
      opacity: 100%;
      z-index: 20;
    }
    .swiper-pagination-bullet-active {
      background-color: #010140;
      color: #fff;
    }
    .programtext0::before {
      content: "Online Training";
    }
    .programtext1::before {
      content: "On-Site Training";
    }
    .programtext2::before {
      content: "Private Coaching";
    }
  }
  .contain{
      border-bottom: 4px solid rgba(0, 70, 255, 0.44);
      margin-bottom:4rem;
    }
  #locale{
    outline: none;
    padding: 0.5rem 0;
    width: 13rem;
    color: var(--Body-Text);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    border-radius: 3.257px;
    background-color: inherit;
    border: 0.714px solid #B0B0B0;
    cursor: pointer;
  }
  option{
    background-color: #FFFDF7;
  }
  .err{
    color: red;
    font-style: italic;
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }
  .mapMobileIframe{
    display: block;
    padding: 30px 20px 30px 5px ;
  }
  .mapLaptopIframe{
    display: none;
  }
  @media (min-width: 1024px) {
    padding: 110px 9.6rem;
    header {
      padding-bottom: 5.6rem;
      color: #0000ff;
      font-size: 3.2rem;
      font-weight: 700;
    }
    .program {
      position: relative;
      width: 62vw;
      img {
        position: absolute;
        width: 12.66vw;
        right: -13px;
      }
    }
    .breakdown{
      width: calc(100vw - 62vw);
      padding-top: 2rem;
    }
    .heading {
      padding: 4rem 0;
      padding-left: 9.6rem;
      display: flex;
      align-items: center;
      gap: 14.48vw;
    }
    .list, .list2{
      display: flex;
      flex-direction: column;
      gap: 25px;
    }
    .list2{
      gap: 18px;
    }
    .cover {
      width: 100%;
      padding: 7.2rem 0 16rem 0;
      padding-left: 9.6rem;
    }
    .cover2 {
      width: 100%;
      padding: 7.2rem 0 7rem 0;
      padding-left: 9.6rem;
    }
    .item{
    column-gap: 165px;
    row-gap: 65px;
  }
    .cta {
      display: grid;
      grid-template-columns: repeat(2,auto);
      justify-content: flex-start;
      gap: 200px;
      padding-top: 6.1rem;
      .syll {
        display: block;
        color: #175afe;
        font-size: 20px;
      }
    }

    .note{
    padding-top: 50px;
    font-size: 16px;
    display: flex;
    gap: 10px;
  }
    .but{
      display: none;
    }
    .swiperPagination{
      width: 100%;
    .swiper-pagination-bullet{
    font-size: 2rem;
    padding: 1rem 2.9rem;
    border-radius: 16px 16px 0px 0px;
    width: 220px;
    height: 75px;
    }
    }
    #locale{
    width: 19rem;
    font-size: 18px;
  }
  .mapMobileIframe{
    display: none;
  }
  .mapLaptopIframe{
    display: block;
    padding: 30px 0px;
  }

  }
`;
