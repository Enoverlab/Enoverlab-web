import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import styled from "styled-components";
import { Flex } from "../HomeComponents/ProductSection";
import { H2, H4, P } from "../../Utils/styled/Typograpyhy";
import weeks20 from "../../assets/icon/20weeks.png";
import { OnsiteProgram, onlineProgram } from "../../constants";
import check from "../../assets/icon/check.svg";
import { SubmitButton } from "../../Utils/styled/Buttons";
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";

const StandardProgram = () => {
  const [location, setLocation] = useState('')
  const [isError,setIsError] = useState(false)
  const [trainingLocation, setTrainingLocation] = useState({location : "Select Location to see address", tuition : '300,000', link : ''})
  useEffect(()=>{
    switch(location){
      case "Lekki":
        setTrainingLocation({
          location : 'Lekki Gateview Plaza, Admiralty way, Lekki Phase 1',
          tuition : '300,000',
          link : 'https://paystack.com/pay/EnoverlabLekki'
        })
        break;
      case "Ibadan":
        setTrainingLocation({
          location : 'Cafe One, Palms Mall, Ring Road, Ibadan',
          tuition : '250,000',
          link :  "https://paystack.com/pay/enoverlabibadan"
        })
        break;
        case "Anambra":
          setTrainingLocation({
            location : 'Kodex Africa, Plot No. A/127, Iyiagu Housing Estate, Awka, Anambra',
            tuition : '250,000',
            link :  "https://paystack.com/pay/enoverlabibadan"
          })
          break;
      case "Abuja":
        setTrainingLocation({
          location : '22 Kumasi Cres, Wuse 2, Abuja',
          tuition : '300,000',
          link : "https://paystack.com/pay/enoverlababuja"
        })
        break;
        case "Berger":
          setTrainingLocation({
            location : '75b Ogunnusi Rd, Isheri, Ojodu Berger, Lagos Berger',
            tuition : '300,000',
            link : 'https://paystack.com/pay/enoverlabberger'
          })
          break;
      default:
        setTrainingLocation({
          location : 'Select Location to see address',
          tuition : '300,000',
          link : ''
        })
        break;
    }
  },[location])
  function handleLocationChange(e){
    setLocation(e.target.value)
  }
  function handleSubmit(e){
    if(!trainingLocation.link){
      e.preventDefault()
      setIsError(true)
      return
    }
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
                  <img src={weeks20} alt="20 weeks" />
                </div>
                <form action="https://paystack.com/pay/enoverlabadvance" method="post" target="_blank"  className="cover">
                  <main>
                  <div  className="item">
                      <div className='item1'>
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
                      </div>
                      <div className='item3'>
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
                    </div>
                  </main>
                  <div className="cta">
                    <SubmitButton Text="Enroll Now" />
                    <Link to="#" className="syll">
                      Download Syllabus
                    </Link>
                  </div>
                </form>
              </div>
              <div className="breakdown">
                <H4 mdfs="1.58vw" fw="700" pt="25px" pb="25px" mdpb="28px" color="var(--Body-Text)">
                  Training Details
                </H4>
                <div className="list2">
                  {onlineProgram.map((pg) => (
                    <Flex gap="10px">
                      <img src={check} alt="checkMark" />
                      <P fs="3.6" mdfs="1.33vw" color="var(--Body-Text)">
                        {pg}
                      </P>
                    </Flex>
                  ))}
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
                <form action={trainingLocation.link} method="post" target="_blank" onSubmit={handleSubmit} className="cover2">
                  <main>
                  <div className="item">
                      <div className='item1'>
                       <div>
                       <H4 mdfs="1.058vw" mb="1rem" fs="3.2vw" color="var(--Body-Text)">
                          Training day
                        </H4>
                        <H2 mdfs="1.587vw" fs="3.6vw" fw="600" color="var(--Body-Text)">
                          Every Saturday
                        </H2>
                       </div>
                       <div>
                       <H4 mdfs="1.058vw" mb="1rem" fs="3.2vw" color="var(--Body-Text)">
                          Class Times
                        </H4>
                        <H2 mdfs="1.58vw" fs="3.6vw" fw="600" color="var(--Body-Text)">
                          10am - 1pm
                        </H2>
                       </div>
                      </div>
                      <div>
                      <select title="location" name="locale" id="locale"  value={location} onChange={handleLocationChange} onBlur={handleBlur}>
                        <option id="item" value="">Select Location</option>
                        <option value="Lekki">LEKKI</option>
                        <option value="Ibadan">IBADAN</option>
                        <option value="Abuja">ABUJA</option>
                        <option value="Berger">BERGER</option>
                        <option value="Anambra">Anambra</option>
                      </select>
                      {isError && <p className="err">Please select Your Preferred Location</p>}
                      </div>
                      
                      <div className="item2">
                        <div>
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
                      </div>
                      <div className='item3'>
                        <div>
                        <H4 mdfs="1.058vw" mb="1rem" fs="3.2vw" color="var(--Body-Text)">
                          Duration
                        </H4>
                        <H2 mdfs="1.587vw" mb="1rem" fs="3.6vw" fw="600" color="var(--Body-Text)" >
                          12 weeks training
                        </H2>
                        <H2
                          mdfs="1.587vw"
                          fs="3.6vw"
                          fw="600"
                          color="var(--Body-Text)"
                        >
                          8 weeks Internship
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
                    </div>
                  </main>
                  <div className="cta">
                    <SubmitButton Text="Enroll Now" />
                    <Link to="#" className="syll">
                      Download Syllabus
                    </Link>
                  </div>
                </form>
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
                  Training Details
                </H4>
                <div className="list">
                  {OnsiteProgram.map((pg) => (
                    <Flex gap="10px">
                      <img src={check} alt="checkMark" />
                      <P fs="3.6" mdfs="1.23vw" color="var(--Body-Text)">
                        {pg}
                      </P>
                    </Flex>
                  ))}
                </div>
              </div>
            </Flex>
          </SwiperSlide>
        </Swiper>
      </div>
    </StyledProgram>
  );
};

export default StandardProgram;

const StyledProgram = styled.div`
  padding: 32px 0 0 24px;
  header {
    color: var(--Title-Text);
    text-align: center;
    font-size: 2.4rem;
    padding-bottom: 4rem;
  }
  .program {
    position: relative;
    width: 93%;
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
    padding: 4.4rem 0 2rem 0;
    padding-left: 3.5rem;
  }
  .cover2{
    background: rgba(186, 234, 250, 0.4);
    padding: 4.4rem 0 2rem 0;
    padding-left: 3.5rem;
  }
  main {
    display: flex;
  }
  .list {
    display: flex;
    flex-direction: column;
    gap: 26px;
  }
  .item{
    display: flex;
    flex-direction: column;
    gap: 34px;
  }
  .item1,.item2, .item3 {
    display: flex;
  }
  .item1{
    gap:21.164vw;
  }
  .item3{
    gap: 19.841vw;
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
    padding-top: 40px;
    .syll {
      display: none;
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
      width: 62.79vw;
      img {
        position: absolute;
        width: 12.66vw;
        right: -13px;
      }
    }
    .breakdown{
      width: calc(100vw - 62.79vw);
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
      gap: 35px;
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
    gap: 65px;
  }
  .item1{
    gap:17.164vw;
  }
  .item3{
    gap: 15.841vw;
  }
    .cta {
      padding-top: 6.1rem;
      justify-content: flex-start;
      .syll {
        display: block;
        padding-left: 16.01vw;
        color: #175afe;
        font-size: 20px;
      }
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

  }
`;
