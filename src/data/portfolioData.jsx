import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaReact, FaNodeJs, FaDatabase, FaCode, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiFirebase, SiTailwindcss, SiJavascript, SiPython, SiPytorch, SiTableau, SiJupyter } from 'react-icons/si';

// Personal Info Section
export const personalInfo = {
  name: "Giri Pragada",
  title: "Data Analyst & ML Engineer",
  email: "gpragada@binghamton.edu",
  linkedin: "https://linkedin.com/in/giripragada",
  github: "https://github.com/gpragada",
  resumeLink: "/Resume_cs.pdf",
  bio: "Data Analyst & ML Engineer with proven experience in predictive modeling, cloud-based data pipelines, and interactive dashboards. Former TCS Analyst.",
  shortBio: "Turning complex data into actionable insights."
};

// Education Section
export const education = [
  {
    institution: "Binghamton University, SUNY",
    degree: "M.S. in Information Systems",
    duration: "Aug 2023 – May 2025",
    score: "GPA: 3.82 / 4.0"
  },
  {
    institution: "Andhra University, Visakapatnam",
    degree: "B.Tech in ECE",
    duration: "2016 – 2020",
    score: "First Class"
  }
];

// Projects Section
export const projects = [
  {
    title: "AI-Powered Business Insights Chatbot",
    tech: ["Streamlit", "LangChain", "OpenAI", "Pandas", "SQL"],
    description: "Developed a chatbot using LangChain and GPT API to convert business queries into SQL queries, providing data insights through interactive visualizations.",
    date: "May 2025 – June 2025",
    githubLink: null, // You can replace null with a GitHub link if available
    liveLink: null, // You can replace null with a live project link if available
    category: "AI/ML",
    icon: <FaReact size={24} className="text-accent-1" />
  },
  {
    title: "Pneumonia Detection System",
    tech: ["CNN", "PyTorch", "Streamlit", "Docker", "AWS SageMaker"],
    description: "Built an end-to-end deep learning-based pneumonia detection system from chest X-ray images with 96% accuracy, deployed with AWS SageMaker for real-time predictions.",
    date: "Jan 2025 – May 2025",
    githubLink: null,
    liveLink: null,
    category: "Healthcare",
    icon: <SiPytorch size={24} className="text-accent-1" />
  },
  {
    title: "YouTube API Data Analysis",
    tech: ["YouTube API", "Python", "Seaborn"],
    description: "Analyzed real-time metrics for 50+ YouTube channels, uncovering trends in engagement, watch time, and subscriber growth.",
    date: "Nov 2024 – Dec 2024",
    githubLink: null,
    liveLink: null,
    category: "Data Analysis",
    icon: <SiJupyter size={24} className="text-accent-1" />
  },
  {
    title: "Netflix Subscription Forecasting",
    tech: ["ARIMA", "Facebook Prophet", "Streamlit"],
    description: "Created a forecasting model using ARIMA and Prophet to predict Netflix subscription trends, with interactive simulations of promotional campaigns.",
    date: "May 2021 – Aug 2021",
    githubLink: null,
    liveLink: null,
    category: "Forecasting",
    icon: <FaDatabase size={24} className="text-accent-1" />
  }
];

// Skills Section
export const skills = {
  languages: [
    { name: "C", icon: <SiPython /> },
    { name: "Java", icon: <FaCode /> },
    { name: "Python", icon: <SiPython /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "R (basic)", icon: <FaCode /> }
  ],
  frameworksAndLibraries: [
    { name: "React JS", icon: <FaReact /> },
    { name: "Node JS", icon: <FaNodeJs /> },
    { name: "Express JS", icon: <SiExpress /> },
    { name: "Jupyter Notebooks", icon: <SiJupyter /> },
    { name: "PyTorch", icon: <SiPytorch /> },
    { name: "LangChain", icon: <FaCode /> },
    { name: "TensorFlow", icon: <FaCode /> },  // Added TensorFlow (Deep Learning)
    { name: "Keras", icon: <FaCode /> },       // Added Keras (Deep Learning)
    { name: "Scikit-learn", icon: <FaCode /> } // Added Scikit-learn (Machine Learning)
  ],
  toolsAndPlatforms: [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Tableau", icon: <SiTableau /> },
    { name: "Power BI", icon: <FaCode /> },
    { name: "AWS", icon: <FaCode /> },
    { name: "Azure", icon: <FaCode /> },
    { name: "Google Data Studio", icon: <FaDatabase /> },
    { name: "Hugging Face", icon: <FaCode /> },  // Added Hugging Face (for LLMs and NLP)
    { name: "OpenAI GPT", icon: <FaCode /> },     // Added OpenAI GPT (for LLMs)
    { name: "Qdrant", icon: <FaDatabase /> },     // Added Qdrant (Vector Database)
    { name: "Pinecone", icon: <FaDatabase /> },   // Added Pinecone (Vector Database)
    { name: "DVC", icon: <FaCode /> },           // Added DVC (Data Version Control for Data Science)
    { name: "MLflow", icon: <FaCode /> },         // Added MLflow (for managing the ML lifecycle)
    { name: "Airflow", icon: <FaCode /> },        // Added Airflow (for data pipelines)
    { name: "Docker", icon: <FaCode /> },         // Added Docker (for containerization)
    { name: "Kubernetes", icon: <FaCode /> },     // Added Kubernetes (for orchestration)
  ],
  coreCompetencies: [
    "Data Analysis",
    "ETL Pipelines",
    "Dashboard Development",
    "Cloud Migrations",
    "Prompt Engineering",
    "Machine Learning & AI",
    "Deep Learning (DL)",
    "Large Language Models (LLM)",
    "Natural Language Processing (NLP)",
    "Vector Databases",
    "LoRA & QLoRA",
    "Data Science Tools (DVC, MLflow, Airflow, Docker, Kubernetes)",
    "Agile Methodologies"
  ]
};

// Leadership & Involvement Section
export const leadershipAndInvolvement = [
  {
    role: "Team Lead",
    organization: "HackBU (DSA-Focused Hackathon)",
    duration: "Aug 2024 – Dec 2024",
    points: [
      "Led a 4-member team to build a real-time coding analysis tool using advanced algorithms.",
      "Designed scalable data structures and ensured MVP delivery within 24 hours."
    ]
  },
  {
    role: "President & Co-founder",
    organization: "BUAI (Artificial Intelligence Club)",
    duration: "Jan 2021 – May 2023",
    points: [
      "Founded and managed an AI-focused student club with 40+ members.",
      "Organized workshops, mentored peers in ML, NLP, and LLM-based projects."
    ]
  }
];

// Social Links Section
export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: { url: `mailto:${personalInfo.email}`, icon: <FaEnvelope size={24} /> }
};
