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
        paystackSubLinks : {
            oneTime : {
                link : '',
                price : '',
            },
            twoTimes : {
                link : '',
                price : '',
            } ,
            threeTimes : {
                link : '',
                price : ''
            } 
        },
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
        paystackSubLinks : {
            oneTime : {
                link : '',
                price : '',
            },
            twoTimes : {
                link : '',
                price : '',
            } ,
            threeTimes : {
                link : '',
                price : ''
            } 
        },
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
        paystackSubLinks : {
            oneTime : {
                link : '',
                price : '',
            },
            twoTimes : {
                link : '',
                price : '',
            } ,
            threeTimes : {
                link : '',
                price : ''
            } 
        },
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
        paystackSubLinks : {
            oneTime : {
                link : '',
                price : '',
            },
            twoTimes : {
                link : '',
                price : '',
            } ,
            threeTimes : {
                link : '',
                price : ''
            } 
        },
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
        paystackSubLinks : {
            oneTime : {
                link : '',
                price : '',
            },
            twoTimes : {
                link : '',
                price : '',
            } ,
            threeTimes : {
                link : '',
                price : ''
            } 
        },
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
        paystackSubLinks : {
            oneTime : {
                link : '',
                price : '',
            },
            twoTimes : {
                link : '',
                price : '',
            } ,
            threeTimes : {
                link : '',
                price : ''
            } 
        },
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
        paystackSubLinks : {
            oneTime : {
                link : '',
                price : '',
            },
            twoTimes : {
                link : '',
                price : '',
            } ,
            threeTimes : {
                link : '',
                price : ''
            } 
        },
        mapIframe : '',
        startDate : "",
        discount : ''
    },
    Online : {
        place : '',
        location : '',
        trainingDay : "",
        classType : '',
        trainingTime : "",
        tuition : '',
        weeks : "",
        weekIcon : '',
        link :  "",
        paystackSubLinks : {
            oneTime : {
                link : '',
                price : '',
            },
            twoTimes : {
                link : '',
                price : '',
            } ,
            threeTimes : {
                link : '',
                price : ''
            } 
        },
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
        tuition : '400,000',
        weeks : "10",
        weekIcon : weeks14,
        link : 'https://enoverlab.com/payments',
        paystackSubLinks : {
            oneTime : {
                link : 'https://paystack.com/pay/lqxlwzoyi1',
                price : '₦410,000',
            },
            twoTimes : {
                link : 'https://paystack.com/pay/wzgm-e6dgx',
                price : '₦205,000',
            } ,
            threeTimes : {
                link : 'https://paystack.com/pay/fvxag45f7j',
                price : '₦136,666'
            } 
        },
        mapIframe : <iframe title="Lekki" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.644401811104!2d3.453612374484845!3d6.439691993551541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf59eb8a97233%3A0x32b5defb8f41b624!2sGateview%20Plaza!5e0!3m2!1sen!2sng!4v1721039921603!5m2!1sen!2sng" width="100%" height="450" style={{border : 0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
        startDate : "September 9, 2025",
    },
    "Lekki-Weekend" : {
        place : 'Lekki',
        location : 'Roc Workspace, Gateview Plaza, Plot 11, Admiralty way, Lekki Phase 1',
        trainingDay : "Every Saturday",
        classType : 'weekend',
        trainingTime : "2pm - 5pm",
        tuition : '400,000',
        weeks : "10",
        weekIcon : weeks20,
        link : 'https://enoverlab.com/payments',
        paystackSubLinks : {
            oneTime : {
                link : 'https://paystack.com/pay/lqxlwzoyi1',
                price : '₦410,000',
            },
            twoTimes : {
                link : 'https://paystack.com/pay/wzgm-e6dgx',
                price : '₦205,000',
            } ,
            threeTimes : {
                link : 'https://paystack.com/pay/fvxag45f7j',
                price : '₦136,666'
            } 

        },
        mapIframe : <iframe title="Lekki" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.644401811104!2d3.453612374484845!3d6.439691993551541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf59eb8a97233%3A0x32b5defb8f41b624!2sGateview%20Plaza!5e0!3m2!1sen!2sng!4v1721039921603!5m2!1sen!2sng" width="100%" height="450" style={{border : 0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
        startDate : "July 19, 2025",
    },
    Ibadan : {
        place : 'Ibadan',
        location : 'Perxels Hub, Sunrise Mall, Ring Road, Ibadan',
        trainingDay : "Every Saturday",
        classType : 'weekend',
        trainingTime : "10am - 1pm",
        tuition : '300,000',
        weeks : "10",
        weekIcon : weeks20,
        link :  "https://enoverlab.com/payments",
        paystackSubLinks : {
            oneTime : {
                link : 'https://paystack.com/pay/dekyy51qhn',
                price : '₦310,000',
            },
            twoTimes : {
                link : 'https://paystack.com/pay/fd89f6xax8',
                price : '₦155,000',
            } ,
            threeTimes : {
                link : 'https://paystack.com/pay/8b2r1y62zj',
                price : '₦103,333'
            } 
        },
        mapIframe : <iframe title="ibadan" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.9685499825955!2d3.8717742000000004!3d7.357421999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398def589da5ad%3A0x6b54bd3bcc977a03!2sSunrise%20Supermarket%20Ring%20Road%20Ibadan!5e0!3m2!1sen!2sng!4v1743766375767!5m2!1sen!2sng" width="100%" height="450" style={{border : 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
        startDate : "August 9, 2025",
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
        link :  "https://enoverlab.com/payments",
        paystackSubLinks : {
            oneTime : {
                link : 'https://paystack.com/pay/zu0g8u0gny',
                price : '₦260,000',
            },
            twoTimes : {
                link : 'https://paystack.com/pay/hvdlh6xiug',
                price : '₦130,000',
            } ,
            threeTimes : {
                link : 'https://paystack.com/pay/e0tlgg9dzt',
                price : '₦86,666'
            } 
        },
        mapIframe : <iframe title="Anambra" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3051337147767!2d7.053362574482788!3d6.223437493764614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104379af706c6619%3A0x2598afc465c51641!2sKodex%20Africa!5e0!3m2!1sen!2sng!4v1721040675268!5m2!1sen!2sng" width="100%" height="450" style={{border : 0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
        startDate : "Admission Closed",
    },
    Abuja : {
        place : 'Abuja',
        weeks : "10",
        weekIcon : weeks20,
        location : 'Novare Shared Office, Zone 5 Dalaba St, Wuse, Abuja',
        trainingDay : "Every Saturday",
        classType : 'weekend',
        trainingTime : "10am - 1pm",
        tuition : '300,000',
        link : "https://enoverlab.com/payments",
        paystackSubLinks : {
            oneTime : {
                link : 'https://paystack.com/pay/i-1jvotnch',
                price : '₦310,000',
            },
            twoTimes : {
                link : 'https://paystack.com/pay/a6u0vgjz8b',
                price : '₦155,000',
            } ,
            threeTimes : {
                link : 'https://paystack.com/pay/7-tan6kbku',
                price : '₦103,333'
            } 
        },
        mapIframe : <iframe title="Abuja" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.994307502363!2d7.455678374485262!3d9.064281990998463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0be926ae002f%3A0xe1ee5fbb305e0b36!2sNovare%20Shared%20Office!5e0!3m2!1sen!2sng!4v1748264325538!5m2!1sen!2sng" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> ,
        startDate : "June 21, 2025",
    },
    'Ikeja-Weekday' : {
        place : 'Ikeja-Weekday',
        location : 'EridanSpace, Oluwalogbon House, Plot A Obafemi Awolowo Way, Alausa, Ikeja',
        trainingDay : "Every Tuesday & Thursday",
        classType : 'weekday',
        trainingTime : "1pm - 4pm",
        tuition : '400,000',
        weeks : "10",
        weekIcon : weeks14,
        link : 'https://enoverlab.com/payments',
        paystackSubLinks : {
            oneTime : {
                link : 'https://paystack.com/pay/4nctjeq3or',
                price : '₦410,000',
            },
            twoTimes : {
                link : 'https://paystack.com/pay/nctqraqiiw',
                price : '₦205,000',
            } ,
            threeTimes : {
                link : 'https://paystack.com/pay/4euo-rt5yz',
                price : '₦136,666'
            } 
        },
        mapIframe : <iframe title="Ikeja Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.270366461118!2d3.3545898!3d6.613292100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b934641e6428f%3A0x2131b57bcd1266a0!2sEridanSpace%20Ikeja%20Lagos!5e0!3m2!1sen!2sng!4v1721037913886!5m2!1sen!2sng" width="100%" height="450" style={{border : 0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
        startDate : "September 9, 2025",
    },
    'Ikeja-Weekend' : {
        place : 'Ikeja-Weekend',
        location : 'EridanSpace, Oluwalogbon House, Plot A Obafemi Awolowo Way, Alausa, Ikeja',
        trainingDay : "Every Saturday",
        classType : 'weekend',
        trainingTime : "10am - 1pm",
        tuition : '400,000',
        weeks : "10",
        weekIcon : weeks20,
        link : 'https://enoverlab.com/payments',
        paystackSubLinks : {
            oneTime : {
                link : 'https://paystack.com/pay/4nctjeq3or',
                price : '₦410,000',
            },
            twoTimes : {
                link : 'https://paystack.com/pay/nctqraqiiw',
                price : '₦205,000',
            } ,
            threeTimes : {
                link : 'https://paystack.com/pay/4euo-rt5yz',
                price : '₦136,666'
            } 
        },
        mapIframe : <iframe title="Ikeja Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.270366461118!2d3.3545898!3d6.613292100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b934641e6428f%3A0x2131b57bcd1266a0!2sEridanSpace%20Ikeja%20Lagos!5e0!3m2!1sen!2sng!4v1721037913886!5m2!1sen!2sng" width="100%" height="450" style={{border : 0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
        startDate : "August 2, 2025",
    },
    Online : {
        paystackSubLinks : {
            oneTime : {
                link : 'https://paystack.com/pay/ve2k2y9sst',
                price : '₦310,000',
            },
            twoTimes : {
                link : 'https://paystack.com/pay/rtszcd4qwq',
                price : '₦155,000',
            } ,
            threeTimes : {
                link : 'https://paystack.com/pay/odioim9y0n',
                price : '₦103,333'
            } 
        },
    }
}

export const CenterContextProvider = ({children})=>{
    return(<CenterContext.Provider value={centerDetails}>
        {children}
    </CenterContext.Provider>)
}
