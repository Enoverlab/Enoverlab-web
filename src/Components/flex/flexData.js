import {
  FiUser,
  FiActivity,
  FiBookOpen,
  FiCalendar,
  FiUsers,
  FiCreditCard,
  FiVideo,
  FiMapPin,
  FiPhone,
  FiMessageSquare,
  FiMail,
} from "react-icons/fi";
import heroImage from "../../assets/flex/hero-image-container.webp";
import audienceImage from "../../assets/flex/collaboration-image-container.webp";

export const flexHero = {
  badge: "Flex Program",
  titleLead: "Become a job ready",
  titleAccent: "Product Manager",
  titleTail: "in 6 months",
  subtitle:
    "Enjoy the gradual learning process of becoming an exceptional Product Manager without any pressure",
  ctaText: "Enroll in Flex",
  ctaLink: "#flex-pricing",
  image: heroImage,
  imageAlt:
    "Two smiling young professionals holding a phone and a tablet in an office",
};

export const flexAudience = {
  image: audienceImage,
  imageAlt: "Two learners working together on a laptop in a shared workspace",
  items: [
    {
      text: "For people who want a slower and gradual learning experience",
      Icon: FiUser,
      tone: { bg: "#F3E8FF", fg: "#9333EA" },
    },
    {
      text: "For people who want to test & see if Product Management is for them",
      Icon: FiActivity,
      tone: { bg: "#DCFCE7", fg: "#16A34A" },
    },
    {
      text: "For anyone who wants to learn specific topics in Product Management and do not need to take the full training",
      Icon: FiBookOpen,
      tone: { bg: "#E0EAFF", fg: "#0046FF" },
    },
  ],
};

export const flexSteps = [
  {
    number: "01",
    title: "One class every week",
    body: "Bite-sized structured learning to balance easily with your regular day job or studies.",
    Icon: FiCalendar,
  },
  {
    number: "02",
    title: "6 months of training",
    body: "Extended access to peer mentorship, professional industry coaching, and direct career guidance.",
    Icon: FiUsers,
  },
  {
    number: "03",
    title: "Monthly payment as you learn",
    body: "Affordable and predictable subscription options to support your growth pathway.",
    Icon: FiCreditCard,
  },
];

export const flexPricing = {
  label: "Simple Tuition",
  // Shared by the mobile Online Flex card and the desktop Start Dates section.
  // null hides both "View Syllabus" buttons. TODO(flex): set to the syllabus URL/PDF once available.
  // syllabusLink: null,
  // syllabusLink: "/FlexSyllabus.pdf",
  // syllabusLink: "/StandardSyllabus.pdf",
  syllabusLink: "/standard-syllabus.pdf",

  plans: [
    {
      id: "online",
      name: "Online Flex",
      description:
        "100% remote online live classes with high interactive quality.",
      price: "₦55,000",
      period: "/ month",
      features: [
        "Interactive Live Classes",
        "Slower, Gradual 6-Month Track",
        "Access to recorded lessons",
        "Dedicated mentorship support",
        "Flexible monthly payment",
      ],
      ctaText: "Join Online Flex",
      ctaLink: "https://paystack.shop/pay/onlineflex",
      Icon: FiVideo,
      featured: false,
      // Design: only this card carries "View Syllabus", and only on mobile.
      showSyllabus: true,
    },
    {
      id: "hybrid",
      name: "Hybrid Flex",
      description:
        "Blended format with remote live learning plus hands-on in-person hubs.",
      price: "₦80,000",
      period: "/ month",
      features: [
        "In-Person Saturday Hub Sessions",
        "All Online Flex Benefits Included",
        "Direct group collaboration",
        "Exclusive networking sessions",
        "Personalized career coaching sessions",
      ],
      ctaText: "Join Hybrid Flex",
      ctaLink: "https://paystack.shop/pay/hybridflex",
      Icon: FiMapPin,
      featured: true,
    },
  ],
};

export const flexStartDates = {
  label: "Start Dates",
  online: {
    title: "Online Flex:",
    date: "November 14th",
    day: "Every Saturday",
    time: "11:00am - 1:00 pm",
    Icon: FiVideo,
  },
  hybrid: {
    title: "Hybrid Flex",
    Icon: FiMapPin,
    // Flex-specific hub schedule from the design; context/CenterContext dates belong
    // to the full programme and are deliberately not reused here.
    centers: [
      {
        id: "lekki",
        name: "Lekki",
        date: "Admission not yet open",
        time: "n/a",
      },
      {
        id: "ikeja",
        name: "Ikeja",
        date: "Admission not yet open",
        time: "n/a",
      },
      {
        id: "anambra",
        name: "Anambra",
        date: "Admission not yet open",
        time: "n/a",
      },
    ],
  },
};

export const flexContact = {
  title: "Have questions?",
  subtitle: "Talk directly with our team",
  channels: [
    { label: "07053395509", href: "tel:+2347053395509", Icon: FiPhone },
    { label: "09063124595", href: "tel:+2349063124595", Icon: FiMessageSquare },
    {
      label: "info@enoverlab.com",
      href: "mailto:info@enoverlab.com",
      Icon: FiMail,
    },
  ],
};
