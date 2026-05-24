import mentorDefault from "../../assets/mentor/mentor.svg";
import mentorGrace from "../../assets/mentorship/mentor-grace.jpg";
import mentorshipHeroArt from "../../assets/mentor/hero.svg";
import comparisonPhoto from "../../assets/mentorship/comparison-side.jpg";
import ctaBanner from "../../assets/mentorship/cta-banner.jpg";

export const mentorshipAssets = {
  mentorDefault,
  mentorGrace,
  heroArt: mentorshipHeroArt,
  comparisonPhoto,
  ctaBanner,
};

export const mentorshipWhy = [
  {
    title: "Inability to land a Job",
    body:
      "You have been job hunting for months to no avail. You have applied to many companies and attended interviews but still not getting a job",
    bg: "#fff3e6",
  },
  {
    title: "Career stagnation",
    body:
      "Your PM career is stagnant. You don’t know exactly how to go from where you are to where you want to be in your career",
    bg: "#e6fff6",
  },
  {
    title: "Salary ceiling",
    body:
      "Your salary has not grown in atleast 2 - 4 years. You have been earning the same income or salary range without any significant growth in years",
    bg: "#e6f0ff",
  },
  {
    title: "Role overwhelm",
    body:
      "You are overwhelmed by the heavy responsibilities of a Product Manager. You need systems to navigate the role more effectively.",
    bg: "#ffe6e6",
  },
  {
    title: "Technical complexity",
    body:
      "You are bugged down with technical complexity and you don’t even know where to start from",
    bg: "#fffde6",
  },
  {
    title: "Imposter Syndrome",
    body:
      "The feeling of not being good enough overwhelms you. You feel you are not capable or don’t deserve the job or the salary you earn. ",
    bg: "#f2e6ff",
  },
];

export const mentorshipMentors = [
  {
    name: "Emmanuel Onwubiko",
    role: "Product Manager, Strata ",
    tagline: "5+ Years Exp, Systems Specialist, ",
    image: mentorDefault,
    imagePosition: "left",
    oldPrice: "80,000",
    bookWidth: "13.7rem",
  },
  {
    name: "John Esan",
    role: "Product Manager, Vendorcredit",
    tagline: "5+ Years Exp, Systems Specialist, ",
    image: mentorDefault,
    imagePosition: "left",
    oldPrice: "60,000",
    bookWidth: "13.7rem",
  },
  {
    name: "Grace Ajagbe",
    role: "Co-founder & CTO, Candorrai",
    tagline: "10+ Years Exp, AI Consultant, Technical Lead",
    image: mentorGrace,
    imagePosition: "center",
    oldPrice: "100,000",
    roleShadow: true,
    bookWidth: "13.3rem",
  },
  {
    name: "Segun Sobodu",
    role: "Product & QA Manager, Opera Software",
    tagline: "5+ Years Exp, Social Media Strategist, QA Specialist",
    image: mentorDefault,
    imagePosition: "left",
    oldPrice: "60,000",
    bookWidth: "13.7rem",
  },
  {
    name: "Praise Kehinde Ige",
    role: "Product Manager, Kenkeputa Inc",
    tagline: "5+ Years Exp, Systems Specialist",
    image: mentorDefault,
    imagePosition: "left",
    oldPrice: "60,000",
    bookWidth: "13.7rem",
  },
  {
    name: "Paula Adaja",
    role: "Product Manager, GoNomad",
    tagline: "5+ Years Exp, Systems Specialist ",
    image: mentorDefault,
    imagePosition: "left",
    oldPrice: "60,000",
    bookWidth: "13.7rem",
  },
];

export const comparisonRows = [
  { metric: "Promotion Rate", without: "5%", with: "25%" },
  { metric: "Retention (5+ Years)", without: "32%", with: "68%" },
  { metric: "Salary Growth", without: "Stagnant", with: "Higher (Avg +25%)" },
  { metric: "Self-Confidence", without: "Low (18%)", with: "High (70%)" },
];
