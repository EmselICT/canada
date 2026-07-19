import heroImg from "@/assets/jude-hero-cutout.png";
import aboutImg from "@/assets/jude-about-cutout.png";

export const HERO_IMG = heroImg;
export const ABOUT_IMG = aboutImg;
export const CV_URL = "/cv.pdf";

export const CONTACT = {
  name: "Jude Chinonso Chukwuemeka",
  role: "Full Stack Developer & Co-founder of Jisatech",
  location: "Calgary, Alberta, Canada",
  email: "sirjude318@gmail.com",
  phone: "403 681 9694",
  linkedin:
    "https://linkedin.com/in/jude-chinonso-chukwuemeka-518963232",
};

export const JISATECH = {
  tagline: "Software with soul, shipped like clockwork.",
  description:
    "A software studio that builds web platforms, mobile apps, and cloud systems. Founded in 2019, headquartered in Calgary with a second office in Abuja, Nigeria.",
  url: "https://jisatech.emselictconsults.workers.dev",
  email: "hello@jisatech.com",
  phone: "+1 403 681 9694",
  stats: [
    { label: "Client retention", value: "94%" },
    { label: "Kickoff to shippable", value: "6 weeks" },
    { label: "Offices", value: "2 across 2 continents" },
    { label: "Team", value: "Every hire is senior" },
  ],
  services: [
    { name: "Software Engineering", desc: "Custom platforms, internal tools, product engineering" },
    { name: "Web Development", desc: "Marketing sites, dashboards, e-commerce" },
    { name: "Mobile Applications", desc: "Flutter, React Native — native-feel cross-platform" },
    { name: "Website Design", desc: "Brand-led editorial sites with art direction and motion" },
    { name: "UI/UX", desc: "Design systems, research, usability testing, WCAG 2.2" },
    { name: "Cloud & DevOps", desc: "AWS, Google Cloud, Cloudflare — Terraform, CI/CD" },
    { name: "IT Consulting", desc: "Architecture reviews, build vs. buy, tech roadmaps" },
  ],
  tech: [
    "Next.js", "React", "Angular", "Svelte", "Flutter", "React Native",
    "TypeScript", "Python", "Go", "Rust", "Postgres", "AWS",
    "Google Cloud", "Cloudflare Workers", "Terraform",
  ],
  positions: [
    "Calgary — 450 1st Ave SW, Suite 800",
    "Abuja — 14 Aguiyi-Ironsi Street, Maitama",
  ],
};

export const SKILLS: { name: string; level: number }[] = [
  { name: "Python", level: 92 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 88 },
  { name: "Django", level: 85 },
  { name: "PHP", level: 80 },
  { name: "WordPress", level: 92 },
  { name: "Node.js", level: 78 },
  { name: "MySQL", level: 82 },
  { name: "REST APIs", level: 88 },
  { name: "SEO", level: 80 },
];

export const EDUCATION = [
  {
    school: "Segi University College",
    location: "Kuala Lumpur, Malaysia",
    degree: "Degree in Business Management",
    period: "2012 to 2014",
  },
];

export const EXPERIENCE = [
  {
    role: "IT Specialist and Full Stack Developer",
    company: "Infosys",
    place: "Calgary, Canada",
    period: "Nov 2023 to Jan 2026",
    points: [
      "Design and deploy scalable web applications that improve business efficiency and user engagement.",
      "Lead full stack projects with Python, JavaScript, Django, and React across cross functional teams.",
      "Mentor junior developers and set coding standards for testing, debugging, and performance.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Website Depot Inc.",
    place: "Los Angeles, USA",
    period: "Jan 2019 to Nov 2023",
    points: [
      "Built and maintained high performance websites with JavaScript, PHP, and WordPress.",
      "Shipped custom themes and plugins tailored to client requirements.",
      "Integrated payment, CRM, and marketing APIs and improved SEO across every launch.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Atlantis Telekomunikasyon",
    place: "Istanbul, Turkey",
    period: "Mar 2016 to Dec 2019",
    points: [
      "Delivered responsive web applications using JavaScript, Node.js, and PHP.",
      "Built RESTful APIs and designed MySQL databases for reliability at scale.",
      "Ran code reviews and coached junior engineers on best practices.",
    ],
  },
];

export const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Jisatech", href: "#jisatech" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
