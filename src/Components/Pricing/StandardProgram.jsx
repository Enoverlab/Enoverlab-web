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
import { OnsiteProgram, OnsiteProgramWeekday, onlineProgram, privateCoaching } from "../../constants";
import check from "../../assets/icon/check.svg";
import { SubmitButton } from "../../Utils/styled/Buttons";
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import StandardForm from "../Enroll-Form/StandardForm";
import { useContext } from "react";
import { CenterContext } from "../../context/CenterContext";

const StandardProgram = () => {
  const [location, setLocation] = useState('')
  const [isError,setIsError] = useState(false)
  const centerDetails = useContext(CenterContext)
  const admissionClosed = ['Lekki-Weekday']

  const [trainingLocation, setTrainingLocation] = useState({place : '',location : "Select Location to see address", tuition : '300,000', link : '', mapIframe : '', weeks : "", startDate : "", weekIcon : weeks20,trainingDay : "", trainingTime : '', classType : '', discount : ''})
  
  const [enrolModal, setEnrolModal] = useState({open : false, formtype : '', site : ''})
  useEffect(()=>{
    switch(location){
      case "Lekki-Weekday":
        setTrainingLocation(centerDetails['Lekki-Weekday'])
        break;
      case "Lekki-Weekend":
        setTrainingLocation(centerDetails["Lekki-Weekend"])
        break;
      case "Ibadan":
        setTrainingLocation(centerDetails.Ibadan)
        break;
        case "Anambra":
          setTrainingLocation(centerDetails.Anambra)
          break;
      case "Abuja":
        setTrainingLocation(centerDetails.Abuja)
        break;
      case "Ikeja-Weekday":
        setTrainingLocation(centerDetails['Ikeja-Weekday'])
        break;
      case "Ikeja-Weekend":
      setTrainingLocation(centerDetails['Ikeja-Weekend'])
      break;
      default:
        setTrainingLocation({
          location : 'Select Location to see address',
          tuition : '300,000',
          discount : '350,000',
          trainingDay : "Select Location",
          trainingTime : 'Select Location',
          classType : 'weekend',
          link : '',
          mapIframe : '',
          weeks : "10",
          weekIcon : weeks20,
          startDate : "N/A"
        })
        break;
    }
  },[location,centerDetails])
  function handleLocationChange(e){
    setLocation(e.target.value)
  }

  function handleCloseEnrolModal(){
    setEnrolModal({...enrolModal, open : false})
  }

  function handleSubmit(e){
    if(!trainingLocation.link){
      console.log(trainingLocation)
      e.preventDefault()
      setIsError(true)
      return
    }
    console.log(trainingLocation)
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
                <form className="cover" method="get" action="/payments/online">
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
                          Every Wednesday <br /> & Saturday
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
                          Start Date
                        </H4>
                        <H2
                          mdfs="2.38vw"
                          fs="3.6vw"
                          fw="600"
                          color="var(--Body-Text)"
                        >
                          July 14, 2025
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
                          ₦300,000
                        </H2>
                      </div>
                    </div>
                    
                  </main>
                  <div className="cta">
                      <SubmitButton Text="Enroll Now" />
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
                  <img src={trainingLocation.weekIcon} alt="20 weeks" />
                </div>
                <form onSubmit={handleSubmit}  action={`/payments/${location}`} className="cover2">
                  <main>
                    <div className="item">
                      <div>
                       <H4 mdfs="1.058vw" mb="1rem" fs="3.2vw" color="var(--Body-Text)">
                          Training day
                        </H4>
                        <H2 mdfs="1.587vw" fs="3.6vw" fw="600" color="var(--Body-Text)">
                          {trainingLocation.trainingDay}
                        </H2>
                      </div>
                      <div>
                       <H4 mdfs="1.058vw" mb="1rem" fs="3.2vw" color="var(--Body-Text)">
                          Class Times
                        </H4>
                        <H2 mdfs="1.58vw" fs="3.6vw" fw="600" color="var(--Body-Text)">
                          {trainingLocation.trainingTime}
                        </H2>
                      </div>
                      <div className="selectOption">
                        <select title="location" name="locale" id="locale"  value={location} onChange={handleLocationChange} onBlur={handleBlur}>
                          <option id="item" value="">Select Location</option>
                          <option value="Lekki-Weekday">LEKKI-Weekday</option>
                          <option value="Lekki-Weekend">LEKKI-Weekend</option>
                          <option value="Ibadan">IBADAN</option>
                          <option value="Abuja">ABUJA</option>
                          <option value="Ikeja-Weekday">IKEJA-Weekday</option>
                          <option value="Ikeja-Weekend">IKEJA-Weekend</option>
                          <option value="Anambra">ANAMBRA</option>
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
                          Start Date
                        </H4>
                        <H2 mdfs="1.587vw" mb="1rem" fs="3.6vw" fw="600" color="var(--Body-Text)" className={`${admissionClosed.includes(location) && 'adclosed'}`} >
                          {trainingLocation.startDate}
                        </H2>
                        
                      </div>
                      <div>
                        <H4 mdfs="1.058vw" mb="1rem" fs="3.2vw" color="var(--Body-Text)">
                          TUITION FEES
                        </H4>
                        <H2
                          mdfs="2.4vw"
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
                    <SubmitButton Text="Enroll Now" disabled={admissionClosed.includes(location)}  />
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
                  {(trainingLocation.classType === "weekend" ? OnsiteProgram : OnsiteProgramWeekday).map((pg) => (
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
                <div className="heading" id="private">
                  <H4 mdfs="2.3vw" fw="700">
                    Private Coaching
                  </H4>
                  <img src={weeks6} alt="4weeks" />
                </div>
                <form className="cover" method="get" action="https://paystack.com/pay/-hl1a72e6u">
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
                          Flexible
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
                        Flexible
                      </H2>
                      </div>
                      <div>
                      <H4 mdfs="1.058vw" mb="1rem" fs="3.2vw" color="var(--Body-Text)">
                        Duration
                      </H4>
                      <H2 mdfs="1.587vw" mb="1rem" fs="3.6vw" fw="600" color="var(--Body-Text)">
                        6 weeks
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
                        ₦ 600,000
                      </H2>
                      </div>
                    </div>
                  </main>
                  <div className="cta">
                    <SubmitButton Text="Enroll Now" />
                    <Link to="/ProgramSyllabus.pdf" target="_blank" download='ProgramSyllabus.pdf' className="syll">
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
                  {privateCoaching.map((pg) => (
                    <Flex gap="10px">
                      <img src={check} alt="checkMark" />
                      <P fs="3.6vw" mdfs="1.33vw" color="var(--Body-Text)">
                        {pg}
                      </P>
                    </Flex>
                  ))}
                </div>
                <div className="but">
                <Link to="/ProgramSyllabus.pdf" target="_blank" download='ProgramSyllabus.pdf' className="syll">
                  Download Syllabus
                </Link>
                </div>
              </div>
            </Flex>
          </SwiperSlide>
          <div className="swiper-pagination-progressbar-fill"></div>
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
  padding: 3.2rem 0 4.2rem 0.5rem;
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
    width: 100%;
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
      font-size: 1.2rem;
    }
    .programtext1::before {
      content: "On-Site Training";
      font-size: 1.2rem;
    }
    .programtext2::before {
      content: "Executive Coaching";
      font-size: 1.2rem;
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
  .strikeThrough{
    text-decoration: line-through;
  }
  .adclosed{
    color: red;
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
    .programtext0::before {
      content: "Online Training";
      font-size: 1.6rem;
    }
    .programtext1::before {
      content: "On-Site Training";
      font-size: 1.6rem;
    }
    .programtext2::before {
      content: "Executive Coaching";
      font-size: 1.6rem;
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
