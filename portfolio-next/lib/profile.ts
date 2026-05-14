export type Education = {
  school: string;
  location: string;
  degreeLevel: string;
  major: string;
  minor?: string;
  period: string;
  gpa?: string;
  honors?: string;
  advisor?: string;
  logo?: string;
  logoAlt: string;
};

export type Industry = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export type Award = {
  title: string;
  year: string;
  href?: string;
};

export type Research = {
  title: string;
  period: string;
  stack: string;
  description: string;
  status?: "In Progress" | "Under Review" | "Published" | "Capstone";
  advisor?: string;
  citation?: string;
  links?: { label: string; href: string }[];
};

export const education: Education[] = [
  {
    school: "Northeastern University",
    location: "Boston, MA",
    degreeLevel: "M.S.",
    major: "Data Science",
    period: "2024.09 - 2026.05",
    gpa: "4.0 / 4.0",
    honors: "Laurel and Scroll 100",
    logo: "/Jun/images/logos/nu.png",
    logoAlt: "Northeastern University",
  },
  {
    school: "Korea Military Academy",
    location: "Seoul, South Korea",
    degreeLevel: "B.S.",
    major: "Chemistry, Military Arts and Science",
    period: "2015.02 - 2020.03",
    logo: "/Jun/images/logos/kma.png",
    logoAlt: "Korea Military Academy",
  },
  {
    school: "National Institute for Lifelong Education",
    location: "South Korea",
    degreeLevel: "B.S.",
    major: "Computer Science and Engineering",
    period: "2023.01 - 2023.12",
    logo: "/Jun/images/logos/nile.png",
    logoAlt: "National Institute for Lifelong Education",
  },
];

export const researchInterests: string[] = [
  "Human-Centered AI",
  "Computational Social Science",
  "Multimodal Deep Learning",
  "NLP",
  "MLOps",
];

export const coursework: string[] = [
  "Machine Learning",
  "Deep Learning",
  "Natural Language Processing",
  "Data Mining",
  "Algorithms",
  "Network Science",
];

export const research: Research[] = [
  {
    title: "fMRI Political Extremism Pattern Analysis",
    period: "2025.06 - present",
    stack: "Python · PyTorch · Machine Learning",
    description:
      "Analyzing fMRI brain data to identify patterns of political extremism using machine-learning classification.",
    status: "In Progress",
  },
  {
    title: "TikTok Fear-Mongering Analysis",
    period: "2026.01 - present",
    stack: "Python · NLP · Social Media Analysis",
    description:
      "Analyzing fear-mongering content and narratives on TikTok using computational methods.",
    status: "In Progress",
    advisor: "Dr. Mohit Singhal (NULab)",
  },
  {
    title: "India–Pakistan Conflict Discourse on Reddit",
    period: "2026.01 - present",
    stack: "Python · NLP · Network Analysis",
    description:
      "Investigating online discourse patterns around the India–Pakistan conflict using computational social science methods.",
    status: "In Progress",
    advisor: "Dr. Mohit Singhal (NULab)",
  },
  {
    title: "US–Venezuela Relations: GDELT & Reddit",
    period: "2026.01 - present",
    stack: "Python · GDELT · NLP",
    description:
      "Capstone project comparing GDELT event data with Reddit discourse to analyze US–Venezuela relations from 2013 to early 2026.",
    status: "Capstone",
  },
  {
    title: "Online Framing of North Korea Diplomacy",
    period: "2024.09 - 2025.01",
    stack: "Python · LLM · Network Analysis · NLP",
    description:
      "How diplomatic summits reshape online discourse about adversarial nations. Difference-in-Differences design with LLM-based framing classification on Reddit data (2018–2019).",
    status: "Under Review",
    citation:
      'Hunjun Shin, Hoonbae Moon, Mohit Singhal. "How Diplomacy Reshapes Online Discourse: Asymmetric Persistence in Online Framing of North Korea," arXiv:2601.09942, Jan 2025.',
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2601.09942" }],
  },
  {
    title: "Multimodal Hateful Meme Detection",
    period: "2024.09 - 2024.12",
    stack: "PyTorch · Graph Attention Networks · VQA",
    description:
      "Multimodal classification framework using Graph Attention Networks to model cross-modal relationships between visual and textual components. VQA and image captioning provide contextual cues.",
    status: "Published",
    citation:
      'Hunjun Shin, Dhruv Agarwal, Wonhee Lee, Mahdi Imani, Naveen Naik Sapavath. "Multimodal Hateful Meme Detection with Graph Attention Networks and Contextual Cues," 2025 IEEE ICAD, pp. 1–8, June 2025.',
    links: [
      {
        label: "Paper",
        href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_5BJbWMAAAAJ&citation_for_view=_5BJbWMAAAAJ:u5HHmVD_uO8C",
      },
    ],
  },
  {
    title: "Instagram Multimodal Political Communication",
    period: "2024.12 - 2025.06",
    stack: "Python · PyTorch · Multimodal Deep Learning",
    description:
      "Multimodal deep learning on Instagram posts from U.S. politicians, identifying visual and verbal communication patterns across parties. Supported by NULab Seedling Grant 2023–2024.",
    links: [
      {
        label: "Project Page",
        href: "https://cssh.northeastern.edu/nulab/social-media-images-in-politics/",
      },
    ],
  },
  {
    title: "VR Political Attitudes & Eye-Tracking",
    period: "2025.04 - 2025.09",
    stack: "Python · VR · Physiological Data",
    description:
      "VR's impact on political attitudes toward solitary confinement, using eye-tracking and physiological measures (skin conductivity, heart rate). NULab Seedling Grant 2024–2025.",
  },
  {
    title: "Gig Worker AI Upskilling",
    period: "2025.04 - 2025.09",
    stack: "Python · Qualitative Analysis",
    description:
      "How gig workers leverage AI tools for skill development and career advancement in the platform economy.",
  },
];

export const industry: Industry[] = [
  {
    company: "CIVIC A.I Lab · Northeastern University",
    role: "Research Assistant",
    period: "2025.01 - present",
    bullets: [
      "Researching how gig workers leverage AI for upskilling, advised by Prof. Saiph Savage",
      "Developed LLM-based goal-setting chatbot (Reflecta) — Top 12, LikeLion 2025 Hackathon",
    ],
  },
  {
    company: "Northeastern University",
    role: "Research Assistant",
    period: "2024.12 - present",
    bullets: [
      "Multimodal deep learning on political communication in social media, advised by Prof. Seo Eun Yang",
      "VR + eye-tracking and physiological data on political attitudes (NULab Seedling Grant)",
      "fMRI brain data analysis for political extremism classification",
    ],
  },
  {
    company: "Republic of Korea Army",
    role: "Captain · Logistics and Supporting Department",
    period: "2022.10 - 2024.02",
    bullets: [
      "Managed military supplies to maintain combat readiness across multiple units",
    ],
  },
  {
    company: "Republic of Korea Army",
    role: "Head of HR Department",
    period: "2021.10 - 2022.10",
    bullets: [
      "Managed over 180 soldiers — salaries, positions, and promotions",
    ],
  },
  {
    company: "Republic of Korea Army · Special Battalion",
    role: "Platoon Leader",
    period: "2020.01 - 2021.10",
    bullets: [
      "Urban operations, reconnaissance, and joint exercises with the U.S. Army",
    ],
  },
];

export const awards: Award[] = [
  {
    title: "Laurel and Scroll 100, Northeastern University",
    year: "2026",
    href: "https://distinction.northeastern.edu/laurel-and-scroll-100/laurel-and-scroll-100-inductees-2026/#:~:text=Hunjun%20Shin",
  },
  {
    title: "BCI Neural Visualization, 1st Place · Brain Storm BCI Hackathon",
    year: "2026",
    href: "/projects/#bci-visualization",
  },
  {
    title: "PantryPilot, 2nd Place · Google Cambridge MLOps Expo",
    year: "2025",
    href: "/projects/#pantrypilot",
  },
  {
    title: "Military Scholarship · Republic of Korea Army Headquarters",
    year: "2024",
  },
  {
    title: "Excellent Graduate Record (1st place) · ROK Army Command",
    year: "2022",
  },
  {
    title: "Best Platoon Leader · ROK Army Division",
    year: "2021",
  },
];
