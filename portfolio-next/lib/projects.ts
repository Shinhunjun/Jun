export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  tagline: string;
  description: string;
  bullets: string[];
  tags: string[];
  links: { label: string; href: string; primary?: boolean }[];
  videoEmbedUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "flanner",
    title: "Flanner",
    subtitle: "HackPrinceton Spring 2026 · Knot API track, 1st Place",
    category: "Hackathon",
    year: "2026",
    tagline:
      "Turns six months of DoorDash / Uber Eats orders into a weekly home-cooked meal plan, then auto-fills your Amazon Fresh cart.",
    description:
      "A mirror on your delivery habits. Pulls six months of real DoorDash / Uber Eats orders via Knot API, decomposes each dish into ingredients with K2 Think V2, generates a weekly home-cooked plan respecting calendar and dietary constraints, and pushes the exact ingredients to a real Amazon Fresh cart in one tap.",
    bullets: [
      "Next.js 15 + React 19 on Vercel; FastAPI on Cloud Run; MongoDB Atlas",
      "Knot API in production mode: TransactionLink for delivery history, AgenticShopping for real Amazon Fresh cart push",
      "K2 Think V2 for weekly plan reasoning; Gemma 4 31B for photo recognition and check-in classification",
      "Photon spectrum-ts bridge for live iMessage orchestration during the demo",
    ],
    tags: [
      "Next.js 15",
      "React 19",
      "FastAPI",
      "Python",
      "MongoDB",
      "K2 Think V2",
      "Gemma",
      "Knot API",
      "Cloud Run",
      "Vercel",
    ],
    links: [
      { label: "Live", href: "https://flanner.health" },
      { label: "GitHub", href: "https://github.com/son-engr-kr/hackprinceton-beta" },
    ],
    videoEmbedUrl: "https://www.youtube.com/embed/gfLijC1apBo",
  },
  {
    slug: "motzip",
    title: "MotZip",
    subtitle: "Next-Gen Hacks Beta · Spring 2026",
    category: "Hackathon",
    year: "2026",
    tagline:
      "Restaurants by voice. Speak what you want, watch a 3D map filter to candidates, then have an AI agent call every restaurant in parallel.",
    description:
      "Bilingual (EN/KO) restaurant discovery built around two ideas: voice-first filtering on a 3D map, and an AI phone agent that calls restaurants for you. Speak a query, the map sinks non-matching food into the ground; pick questions (reservations, vegetarian, wheelchair access...), click \"Call N selected,\" and watch real Twilio calls return ✓/✗/? per question.",
    bullets: [
      "Next.js 16 + React 19 + Tailwind 4 frontend; MapLibre GL + Three.js for the 3D scene",
      "FastAPI on Cloud Run; Google Places API for restaurant data, dedup'd across 7 cuisine groups",
      "Voice search: Google Cloud STT → Gemini 2.0 Flash filter extraction → in-process filtering → Cloud TTS reply",
      "Batch calls: Twilio chained <Gather> per question, per-turn STT + Gemini parsing, streamed back as a checklist",
      "Graceful degradation: ElevenLabs Scribe/Turbo as STT/TTS fallback, keyword heuristics if Gemini JSON parse fails",
    ],
    tags: [
      "Next.js 16",
      "React 19",
      "Tailwind 4",
      "MapLibre GL",
      "Three.js",
      "FastAPI",
      "Twilio Voice",
      "Gemini 2.0",
      "Google Places",
    ],
    links: [
      { label: "Live", href: "https://motzip.vercel.app" },
      { label: "GitHub", href: "https://github.com/son-engr-kr/next-gen-hacks-beta" },
    ],
    videoEmbedUrl: "https://www.youtube.com/embed/a8UhKh7S4FU",
  },
  {
    slug: "bci-visualization",
    title: "BCI Neural Visualization System",
    subtitle: "Brain Storm BCI Hackathon · 1st Place ($1,000)",
    category: "Hackathon",
    year: "2026",
    tagline:
      "Real-time guidance for surgeons placing 1024-channel ECoG arrays.",
    description:
      "Real-time neural activity visualization and BCI array placement guidance system. Processes live data from a 1024-channel micro-ECoG array (32×32 grid) to help neurosurgeons optimize BCI array placement during surgery. Hosted by Precision Neuroscience at Microsoft NERD Center.",
    bullets: [
      "CNN-based denoising (ResNet U-Net with CBAM attention)",
      "Kalman filter and EMA-based position tracking",
      "Real-time heatmap smoothing with configurable web UI",
      "500 Hz sampling, ~20–50 ms end-to-end latency",
    ],
    tags: [
      "PyTorch",
      "ResNet U-Net",
      "CBAM",
      "Kalman Filter",
      "Real-time",
      "ECoG",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/son-engr-kr/H2W-brainstorm-track2",
        primary: true,
      },
      { label: "Demo Video", href: "https://www.youtube.com/watch?v=VwRhRfCjqCM" },
    ],
    videoEmbedUrl: "https://www.youtube.com/embed/XMMdG1X3W9g",
  },
  {
    slug: "zerve-odsc-datathon",
    title: "Zerve × ODSC AI Datathon",
    subtitle: "ODSC AI Datathon · 2026",
    category: "Datathon",
    year: "2026",
    tagline:
      "Production-style MLOps pipeline for subscription upgrade prediction — 32 blocks, 5-model ensemble, weekly drift detection, all built inside the Zerve canvas.",
    description:
      "End-to-end MLOps pipeline as a 32-block, 42-edge parallel-converge DAG inside the Zerve canvas: schema/leakage validation → EDA + 15-stage funnel → a 5-candidate AutoML pool → drift detection → champion picked for serving → weekly retraining loop. A Next.js frontend renders the DAG and calls a deployed FastAPI for live inference, reading canvas variables in real time.",
    bullets: [
      "5-candidate model pool: calibrated XGBoost + RF + HGB soft-vote ensemble, PyTorch tab-MLP, sklearn GBM — isotonic calibration throughout",
      "PR-AUC 0.2645, ROC-AUC 0.812 on 3.5M rows / 17,541 users (1.84% upgrade rate, ~53:1 imbalance); top-5% precision ~9× lift",
      "Tree SHAP + segment-level diagnostics map top features to marketing actions",
      "Weekly drift watch (PSI 0.10/0.25 + KS) with append-only event store, label-stable retraining gates",
      "Next.js 14 + ReactFlow frontend draws the canvas DAG and queries the deployed FastAPI for live PNGs and inference",
    ],
    tags: [
      "Python",
      "XGBoost",
      "PyTorch",
      "scikit-learn",
      "SHAP",
      "FastAPI",
      "Next.js 14",
      "ReactFlow",
      "Zerve",
    ],
    links: [
      { label: "Live", href: "https://anmemol-beta.github.io/zerve-odsc-ai-datathon/" },
      { label: "GitHub", href: "https://github.com/anmemol-beta/zerve-odsc-ai-datathon" },
    ],
    videoEmbedUrl: "https://www.youtube.com/embed/TSgGcswV9NA",
  },
  {
    slug: "booky",
    title: "Booky",
    subtitle: "YHack 2026 · with Hyoungseo Son",
    category: "Hackathon",
    year: "2026",
    tagline:
      "Social reading platform with story-branching choices and an AI-generated solar system.",
    description:
      "Social reading platform that transforms solitary reading into a connected experience. Readers highlight passages, discuss with friends, make story-branching choices (Detroit: Become Human style), and explore an AI-generated solar system visualizing reading compatibility.",
    bullets: [
      "Next.js 16, React 19, Three.js for 3D planet visualization",
      "FastAPI backend with Firebase Firestore and ChromaDB",
      "Google K2 Think V2 for AI content, Gemini 2.0 Flash for voice Q&A, Vertex AI Imagen for illustrations",
    ],
    tags: [
      "Next.js 16",
      "React 19",
      "Three.js",
      "FastAPI",
      "Firestore",
      "ChromaDB",
      "Vertex AI",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/son-engr-kr/booky-yhack",
        primary: true,
      },
    ],
    videoEmbedUrl: "https://www.youtube.com/embed/vb6r4Af8pb0",
  },
  {
    slug: "reflecta",
    title: "Reflecta",
    subtitle: "LLM Goal-Setting Chatbot · Top 12 LikeLion 2025 Hackathon",
    category: "Project",
    year: "2025",
    tagline:
      "LLM-based goal-setting and conversational AI for everyday self-reflection.",
    description:
      "An LLM-based goal-setting and conversational AI system for daily reflection. Achieved Top 12 in LikeLion 2025 Hackathon. CHI 2026 Poster submission planned.",
    bullets: [
      "FastAPI backend, deployed on GCP Cloud Run with Docker",
      "Conversational goal-setting and tracking flow tuned for daily check-ins",
      "Vercel-hosted demo frontend",
    ],
    tags: ["Python", "FastAPI", "GCP", "Docker", "LLM"],
    links: [
      { label: "Demo", href: "https://aidiary-reflecta.vercel.app/demo" },
      { label: "GitHub", href: "https://github.com/Shinhunjun/aidiary-reflecta" },
    ],
  },
  {
    slug: "pantrypilot",
    title: "PantryPilot",
    subtitle: "End-to-End MLOps Recipe Assistant · 2nd Place, Google Cambridge MLOps Expo 2025",
    category: "Project",
    year: "2024",
    tagline:
      "Full-stack MLOps pipeline for personalized recipe generation with LLM fine-tuning, DPO feedback, and weekly retraining.",
    description:
      "Full-stack MLOps pipeline for personalized recipe generation: LLM fine-tuning (Llama 3.2 3B with LoRA), DPO-based feedback loop for continuous model improvement, data pipeline with Great Expectations validation, Airflow orchestration, and observability with Slack alerts. Deployed finetuned LLM on GCP Cloud Run for scalable inference, with GCS + DVC for data and model versioning. Features dietary restriction enforcement, admin dashboard, and automated model registry.",
    bullets: [
      "Llama 3.2 3B fine-tuned with LoRA, then DPO loop for continuous model improvement",
      "Airflow-orchestrated data pipeline with Great Expectations validation and Slack alerts",
      "GCP Cloud Run deployment + GCS / DVC for data and model versioning",
      "Admin dashboard, automated model registry, dietary restriction enforcement",
    ],
    tags: [
      "FastAPI",
      "React",
      "PyTorch",
      "LoRA",
      "DPO",
      "Airflow",
      "GCP",
      "Docker",
      "Great Expectations",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Shinhunjun/PantryPilot" },
    ],
  },
  {
    slug: "mnist-mlops",
    title: "MNIST MLOps Pipeline",
    subtitle: "Automated Retraining with User Feedback",
    category: "Project",
    year: "2025",
    tagline:
      "End-to-end MLOps pipeline for MNIST digit recognition with automated retraining triggered by user feedback.",
    description:
      "Complete MLOps pipeline for MNIST digit recognition with automated model retraining based on user feedback. Features interactive drawing canvas, real-time predictions, and continuous model improvement workflow.",
    bullets: [
      "FastAPI inference service deployed via Vertex AI on GCP Cloud Run",
      "GitHub Actions for CI/CD across train, evaluate, and deploy stages",
      "React frontend with interactive drawing canvas and feedback capture",
    ],
    tags: [
      "FastAPI",
      "TensorFlow",
      "GCP",
      "Vertex AI",
      "GitHub Actions",
      "React",
      "Docker",
    ],
    links: [
      { label: "Demo", href: "https://frontend-mh7kjdw4p-shinhunjuns-projects.vercel.app" },
      {
        label: "GitHub",
        href: "https://github.com/Shinhunjun/MLOps/tree/main/GithubAction_GCP_Docker",
      },
    ],
  },
  {
    slug: "fullstack-gpt",
    title: "FullStackGPT",
    subtitle: "LangChain + Streamlit AI Apps",
    category: "Project",
    year: "2024",
    tagline:
      "DocumentGPT, QuizGPT, and PrivateGPT — LangChain-based web apps for RAG, quiz generation, and local LLM inference.",
    description:
      "AI-powered web applications using LangChain — DocumentGPT (document Q&A with RAG over FAISS), QuizGPT (automatic quiz generation), and PrivateGPT (local LLM for private document analysis).",
    bullets: [
      "RAG pipeline with FAISS vector search and OpenAI GPT",
      "Streamlit frontends with chat history and document upload",
      "Local LLM variant for fully offline private document analysis",
    ],
    tags: ["LangChain", "Streamlit", "OpenAI GPT", "FAISS", "RAG"],
    links: [
      { label: "GitHub", href: "https://github.com/Shinhunjun/fullstackGPT" },
    ],
  },
  {
    slug: "job-board",
    title: "Job Board",
    subtitle: "Flask + MySQL Full-Stack Platform",
    category: "Project",
    year: "2024",
    tagline:
      "Full-stack job board with search, company profiles, and real-time recommendations.",
    description:
      "Full-stack job board platform with job search, company profiles, and real-time recommendations. Features MySQL database integration with SQLAlchemy ORM and EDA / ML analysis.",
    bullets: [
      "Flask backend with SQLAlchemy ORM over MySQL",
      "Job search, company profiles, and recommendation surfaces",
      "EDA and ML analysis on collected job listings",
    ],
    tags: ["Flask", "MySQL", "SQLAlchemy", "Python"],
    links: [
      { label: "GitHub", href: "https://github.com/Shinhunjun/Job_board" },
    ],
  },
];
