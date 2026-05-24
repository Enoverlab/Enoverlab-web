/**
 * Copy and structured content for the Hire landing page (desktop Figma source).
 */

export const hireHero = {
  titleLines: [
    "Hire Vetted Product Managers",
    "of any experienced level",
    "in 72 hours for FREE!",
  ],
  subtitle: "Stop Searching! Reduce long wait times! No fees involved!",
  description:
    "Get skilled product managers ready to build, contribute, and add value to your organisation",
  primaryCta: "Request a Talent",
  primaryCtaTarget: "#hire-form",
};

export const hireCompaniesHeading =
  "Join over 150+ companies growing with Enoverlab Alumni";

export const hireWhySection = {
  heading: "Why top companies hire from Enoverlab",
  bullets: [
    "0% Recruitment Fees. Save millions on headhunting",
    "Day-1 Ready. You don't need to do much training again - they can jump into work right away",
    "AI-Empowered Talents. Our Product Managers are skilled in leveraging AI in their workflow",
  ],
};

export const hireRoadmap = {
  title: 'The "72-Hour Talent Match Roadmap"',
  subtitle: "From Request to Interview in 3 Steps",
  steps: [
    {
      lead: "Submit Your Requirements:",
      text: " Fill the 60-second form below with your specific needs",
    },
    {
      lead: "We curate the best:",
      text: " Our team matches your role with the top 3% of our available alumni",
    },
    {
      lead: "Get Your Shortlist:",
      text: " Within 72 hours, you receive verified talents which you can interview right away",
    },
  ],
};

export const hireForm = {
  eyebrow: "Request a Talent Form",
  heading: "Get an Exceptional Product Manager",
  submitLabel: "Send Me Top Talent",
  columns: [
    [
      { name: "fullName", label: "Full Name", type: "text", required: true },
      { name: "jobTitle", label: "Job Title", type: "text", required: true },
      { name: "companyName", label: "Company Name", type: "text", required: true },
      {
        name: "roleHiringFor",
        labelLines: ["What role are you hiring for?"],
        hint: "(Associate PM, Senior PM, Technical PM, etc.)",
        type: "text",
        required: true,
      },
    ],
    [
      {
        name: "jobDescriptionFile",
        label: "Attached the JD for the role",
        type: "file",
        required: false,
      },
      {
        name: "specialRequirements",
        label: "Any other special requirements for the role",
        type: "text",
        required: false,
      },
      {
        name: "salaryRange",
        label: "What is the salary range?",
        type: "text",
        required: false,
      },
      {
        name: "resumeDate",
        label: "When is the talent expected to resume?",
        type: "text",
        required: false,
      },
    ],
  ],
};

export const hireTestimonials = {
  heading: "Testimonials",
  items: [
    {
      quote:
        "We needed a PM who understood both the Lagos market. Enoverlab gave us three options within two days. We hired one, and she's been our top performer since.",
      attribution: "Head of Product at a Top African Fintech",
    },
    {
      quote:
        "We needed a PM who understood both the Lagos market. Enoverlab gave us three options within two days. We hired one, and she's been our top performer since.",
      attribution: "Head of Product at a Top African Fintech",
    },
    {
      quote:
        "We needed a PM who understood both the Lagos market. Enoverlab gave us three options within two days. We hired one, and she's been our top performer since.",
      attribution: "Head of Product at a Top African Fintech",
    },
  ],
};
