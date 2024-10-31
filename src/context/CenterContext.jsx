import { createContext } from "react";
import weeks20 from "../assets/icon/20weeks.png";
import weeks14 from "../assets/icon/14weeks.png";

export const CenterContext = createContext({
    'Lekki-Weekday' : {
        place : '',
        location : '',
        trainingDay : "",
        classType : '',
        trainingTime : "",
        tuition : '',
        weeks : "",
        weekIcon : '',
        link :  "",
        mapIframe : '',
        startDate : "",
        discount : ''
    },
    "Lekki-Weekend" : {
        place : '',
        location : '',
        trainingDay : "",
        classType : '',
        trainingTime : "",
        tuition : '',
        weeks : "",
        weekIcon : '',
        link :  "",
        mapIframe : '',
        startDate : "",
        discount : ''
    },
    Ibadan : {
        place : '',
        location : '',
        trainingDay : "",
        classType : '',
        trainingTime : "",
        tuition : '',
        weeks : "",
        weekIcon : '',
        link :  "",
        mapIframe : '',
        startDate : "",
        discount : ''
    },
    Anambra : {
        place : '',
        location : '',
        trainingDay : "",
        classType : '',
        trainingTime : "",
        tuition : '',
        weeks : "",
        weekIcon : '',
        link :  "",
        mapIframe : '',
        startDate : "",
        discount : ''
    },
    Abuja : {
        place : '',
        location : '',
        trainingDay : "",
        classType : '',
        trainingTime : "",
        tuition : '',
        weeks : "",
        weekIcon : '',
        link :  "",
        mapIframe : '',
        startDate : "",
        discount : ''
    },
    'Ikeja-Weekday' : {
        place : '',
        location : '',
        trainingDay : "",
        classType : '',
        trainingTime : "",
        tuition : '',
        weeks : "",
        weekIcon : '',
        link :  "",
        mapIframe : '',
        startDate : "",
        discount : ''
    },
    'Ikeja-Weekend' : {
        place : '',
        location : '',
        trainingDay : "",
        classType : '',
        trainingTime : "",
        tuition : '',
        weeks : "",
        weekIcon : '',
        link :  "",
        mapIframe : '',
        startDate : "",
        discount : ''
    }

})

const centerDetails = {
    'Lekki-Weekday': {
        place : 'Lekki-Weekday',
        location : 'Roc Workspace, Gateview Plaza, Plot 11, Admiralty way, Lekki Phase 1',
        trainingDay : "Every Tuesday & Friday",
        classType : 'weekday',
        trainingTime : '1pm - 4pm',
        tuition : '300,000',
        weeks : "10",
        weekIcon : weeks14,
        link : 'https://forms.gle/UdiS5NrY1XfJykJRA',
        mapIframe : <iframe title="Lekki" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.644401811104!2d3.453612374484845!3d6.439691993551541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf59eb8a97233%3A0x32b5defb8f41b624!2sGateview%20Plaza!5e0!3m2!1sen!2sng!4v1721039921603!5m2!1sen!2sng" width="100%" height="450" style={{border : 0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
        startDate : "Feb 7, 2025",
        discount : '400,000'
    },
    "Lekki-Weekend" : {
        place : 'Lekki',
        location : 'Roc Workspace, Gateview Plaza, Plot 11, Admiralty way, Lekki Phase 1',
        trainingDay : "Every Saturday",
        classType : 'weekend',
        trainingTime : "10am -1pm",
        tuition : '300,000',
        weeks : "10",
        weekIcon : weeks20,
        link : 'https://forms.gle/RubzGLnYfKgShe4N7',
        mapIframe : <iframe title="Lekki" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.644401811104!2d3.453612374484845!3d6.439691993551541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf59eb8a97233%3A0x32b5defb8f41b624!2sGateview%20Plaza!5e0!3m2!1sen!2sng!4v1721039921603!5m2!1sen!2sng" width="100%" height="450" style={{border : 0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
        startDate : "Jan 11, 2025",
        discount : '350,000'
    },
    Ibadan : {
        place : 'Ibadan',
        location : 'Cafe One, Palms Mall, Ring Road, Ibadan',
        trainingDay : "Every Saturday",
        classType : 'weekend',
        trainingTime : "10am - 1pm",
        tuition : '250,000',
        weeks : "10",
        weekIcon : weeks20,
        link :  "https://forms.gle/CsYYXENLZNmjnsfK6",
        mapIframe : <iframe title="Ibadan" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.9143544673657!2d3.8634040744943348!3d7.3634969926456275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398decfa59eb47%3A0x97b5292d9159b2d8!2sCaf%C3%A9%20One%2C%20The%20Palms%20Mall%2C%20Ring%20Road%2C%20Ibadan!5e0!3m2!1sen!2sng!4v1721039815052!5m2!1sen!2sng" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
        startDate : "Jan 18, 2025",
        discount : '300,000'
    },
    Anambra : {
        place : 'Anambra',
        location : 'Kodex Africa, Plot No. A/127, Iyiagu Housing Estate, Awka,Anambra',
        trainingDay : "Every Saturday",
        classType : 'weekend',
        trainingTime : "10am - 1pm",
        tuition : '250,000',
        weeks : "10",
        weekIcon : weeks20,
        link :  "https://forms.gle/YWw8jFN42sDoPQiT8",
        mapIframe : <iframe title="Anambra" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3051337147767!2d7.053362574482788!3d6.223437493764614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104379af706c6619%3A0x2598afc465c51641!2sKodex%20Africa!5e0!3m2!1sen!2sng!4v1721040675268!5m2!1sen!2sng" width="100%" height="450" style={{border : 0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
        startDate : "Jan 25, 2025",
        discount : '200,000'
    },
    Abuja : {
        place : 'Abuja',
        weeks : "10",
        weekIcon : weeks20,
        location : 'Savvy Instant Offices, No 22, Kumasi Cres, Wuse 2,Abuja',
        trainingDay : "Every Saturday",
        classType : 'weekend',
        trainingTime : "10am - 1pm",
        tuition : '300,000',
        link : "https://forms.gle/Gp7G4tN6QsxaPnds7",
        mapIframe : <iframe title="Abuja" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.7928300264903!2d7.476952574515317!3d9.082628890980839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0af7b326c723%3A0xd8be18bcf35b950b!2s22%20Kumasi%20Cres%2C%20Wuse%2C%20Abuja%20904101%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1721039639625!5m2!1sen!2sng" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
        startDate : "Jan 25, 2024",
        discount : '300,000'
    },
    'Ikeja-Weekday' : {
        place : 'Ikeja-Weekday',
        location : 'EridanSpace, Oluwalogbon House, Plot A Obafemi Awolowo Way, Alausa, Ikeja',
        trainingDay : "Every Saturday",
        classType : 'weekday',
        trainingTime : "2pm -5pm",
        tuition : '300,000',
        weeks : "10",
        weekIcon : weeks20,
        link : 'https://forms.gle/p1FhbPHk5muJGpdK6',
        mapIframe : <iframe title="Ikeja Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.270366461118!2d3.3545898!3d6.613292100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b934641e6428f%3A0x2131b57bcd1266a0!2sEridanSpace%20Ikeja%20Lagos!5e0!3m2!1sen!2sng!4v1721037913886!5m2!1sen!2sng" width="100%" height="450" style={{border : 0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
        startDate : "Jan 11, 2025",
        discount : '400,000'
    },
    'Ikeja-Weekend' : {
        place : 'Ikeja-Weekend',
        location : 'EridanSpace, Oluwalogbon House, Plot A Obafemi Awolowo Way, Alausa, Ikeja',
        trainingDay : "Every Saturday",
        classType : 'weekend',
        trainingTime : "2pm -5pm",
        tuition : '300,000',
        weeks : "10",
        weekIcon : weeks20,
        link : 'https://forms.gle/p1FhbPHk5muJGpdK6',
        mapIframe : <iframe title="Ikeja Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.270366461118!2d3.3545898!3d6.613292100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b934641e6428f%3A0x2131b57bcd1266a0!2sEridanSpace%20Ikeja%20Lagos!5e0!3m2!1sen!2sng!4v1721037913886!5m2!1sen!2sng" width="100%" height="450" style={{border : 0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
        startDate : "Jan 11, 2025",
        discount : '350,000'
    }
}

export const CenterContextProvider = ({children})=>{
    return(<CenterContext.Provider value={centerDetails}>
        {children}
    </CenterContext.Provider>)
}
