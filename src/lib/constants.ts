import { BriefcaseBusiness, FolderGit2, House, Star } from "lucide-react";
import Photo from "../assets/img/myProfilePhoto.jpg";
import MaleAvator from "../assets/img/icons/male-avatar.png";
import FemaleAvator from "../assets/img/icons/female-avatar.png";
import ReactIcon from "../assets/img/icons/skills-tools/react.png";
import PythonIcon from "../assets/img/icons/skills-tools/python.png";
import DjangoIcon from "../assets/img/icons/skills-tools/django.png";
import BootstrapIcon from "../assets/img/icons/skills-tools/bootstrap.png";
import ChromeIcon from "../assets/img/icons/skills-tools/chrome.png";
import CSSIcon from "../assets/img/icons/skills-tools/css.png";
import FirebaseIcon from "../assets/img/icons/skills-tools/firebase.png";
import GithubIcon from "../assets/img/icons/skills-tools/github.png";
import HTMLIcon from "../assets/img/icons/skills-tools/html.png";
import JavaScriptIcon from "../assets/img/icons/skills-tools/javascript.png";
import TailwindCSSIcon from "../assets/img/icons/skills-tools/tailwindcss.png";
import TypeScriptIcon from "../assets/img/icons/skills-tools/typescript.png";
import VSCodeIcon from "../assets/img/icons/skills-tools/vscode.png";
import LinkedInIcon from "../assets/img/icons/social-icons/linkedin.png";
import DiscordIcon from "../assets/img/icons/social-icons/discord.png";
import InstagramIcon from "../assets/img/icons/social-icons/instagram.png";
import MediumIcon from "../assets/img/icons/social-icons/medium.png";
import DigiMarkDevelopersLogo from "../assets/img/companies/digimark.png";
import EnlaticsLogo from "../assets/img/companies/enlatics.jpg";
import MosesTechnologiesLogo from "../assets/img/companies/moses.jpg";
import PytorchIcon from "../assets/img/icons/skills-tools/pytorch.png";
import CluadeAI from "../assets/img/icons/skills-tools/claude.png";
import RAGIcon from "../assets/img/icons/skills-tools/rag.png";
import ChatGPTIcon from "../assets/img/icons/skills-tools/chatgpt.png";
import AnthropicIcon from "../assets/img/icons/skills-tools/anthropic.png";
import OllamaIcon from "../assets/img/icons/skills-tools/ollama.jpg";
import FastAPI from "../assets/img/icons/skills-tools/fastapi.png";
import DeepSeekIcon from "../assets/img/icons/skills-tools/deepseek.png";
import DockerIcon from "../assets/img/icons/skills-tools/docker.png";
import SeleniumIcon from "../assets/img/icons/skills-tools/selenium.png";
import VercelIcon from "../assets/img/icons/skills-tools/vercel.png";
import FlaskIcon from "../assets/img/icons/skills-tools/flask.png";
import AWSIcon from "../assets/img/icons/skills-tools/aws.png";
import AzureIcon from "../assets/img/icons/skills-tools/azure.png";
import APIIcon from "../assets/img/icons/skills-tools/rest-api.png";
import EventHubProject from "../assets/img/projects/eventhubProject.png";
import MaxFitProject from "../assets/img/projects/maxfitProject.png";
import TagExtractorProject from "../assets/img/projects/tagextractor.png";
import PushNotificationProject from "../assets/img/projects/pushnotification.png";
import CI_CDIcon from "../assets/img/icons/skills-tools/devops.png";
import web1 from "../assets/img/sliderwebp/web1.webp";
import web2 from "../assets/img/sliderwebp/web2.webp";
import web3 from "../assets/img/sliderwebp/web3.webp";
import web4 from "../assets/img/sliderwebp/web4.webp";
import web5 from "../assets/img/sliderwebp/web1.webp";
import web6 from "../assets/img/sliderwebp/web2.webp";
import web7 from "../assets/img/sliderwebp/web3.webp";
import web8 from "../assets/img/sliderwebp/web4.webp";
import web9 from "../assets/img/sliderwebp/web1.webp";
import PostgreSQLIcon from "../assets/img/icons/skills-tools/postgresql.png";
import MySQLIcon from "../assets/img/icons/skills-tools/mysql.png";
import MongoDBIcon from "../assets/img/icons/skills-tools/mongodb.png";
import PineconeIcon from "../assets/img/icons/skills-tools/pinecone.png";

import mobile1 from "../assets/img/sliderwebp/mobile3.webp";
import mobile2 from "../assets/img/sliderwebp/mobile1.webp";
import mobile3 from "../assets/img/sliderwebp/mobile2.webp";
import mobile4 from "../assets/img/sliderwebp/mobile4.webp";
import mobile5 from "../assets/img/sliderwebp/mobile5.webp";
import mobile6 from "../assets/img/sliderwebp/mobile6.webp";
import mobile7 from "../assets/img/sliderwebp/mobile7.webp";
import mobile8 from "../assets/img/sliderwebp/mobile8.webp";
import mobile9 from "../assets/img/sliderwebp/mobile9.webp";

export const NavLinks = [
  { id: 1, name: "Home", url: "/#Home", icon: House },
  { id: 2, name: "Experience", url: "/#Experience", icon: BriefcaseBusiness },
  { id: 3, name: "Work", url: "/#Work", icon: FolderGit2 },
  { id: 3, name: "Reviews", url: "/#Reviews", icon: Star },
];

export const firstName = "Mohsin";
export const lastName = "Raza";
export const fullName = "Mohsin Raza";
export const profilePhoto = Photo;

// Social Links
export const GitHubProfile = "https://github.com/Mohsinrazaa";
export const LinkedInProfile = "https://www.linkedin.com/in/mohsin-raza-40/";
export const MediumProfile = "https://medium.com/@razamh";
export const InstagramProfile = "https://www.instagram.com/mohsin_raza_40/";

// Hero Section
export const HeroSectionHeading =
  "Full Stack Developer </br> for  Python & AI Engineer";
// export const HeroSectionHeading = "Creative Frontend Developer <br/> for Scalable Web & Mobile Apps ";
export const HeroSectionSubHeading =
  "Building fast, elegant interfaces with Python, AI, and  Web Development.";
export const HeroLetsConnectButton = "Let's Connect";
export const HeroLetsSeeMyWorkButton = "See My Work";

// Image Slider Section
export const SliderImagesData = [
  {
    id: 1,
    type: "phone",
    image: mobile1,
    projectUrl: "",
    githubUrl: "",
  },
  {
    id: 2,
    type: "web",
    image: web1,
    projectUrl: "https://tag-extractor.vercel.app/",
    githubUrl: "https://github.com/Haider-Mukhtar/Tag-Extractor",
  },
  {
    id: 3,
    type: "phone",
    image: mobile2,
    projectUrl: "",
    githubUrl: "",
  },
  {
    id: 4,
    type: "web",
    image: web2,
    projectUrl: "https://lenob-project.vercel.app/",
    githubUrl: "https://github.com/Haider-Mukhtar/Lenob-Project",
  },
  {
    id: 5,
    type: "phone",
    image: mobile3,
    projectUrl: "",
    githubUrl: "",
  },
  {
    id: 6,
    type: "web",
    image: web3,
    projectUrl: "https://lenob-project.vercel.app/",
    githubUrl: "https://github.com/Haider-Mukhtar/Lenob-Project",
  },
  {
    id: 7,
    type: "phone",
    image: mobile4,
    projectUrl: "",
    githubUrl: "https://github.com/Haider-Mukhtar/ReactNative-EventHub-App",
  },
  {
    id: 8,
    type: "web",
    image: web4,
    projectUrl: "https://online-image-compressor-1a.vercel.app/",
    githubUrl: "https://github.com/Haider-Mukhtar/Online-Image-Compressor",
  },
  {
    id: 9,
    type: "phone",
    image: mobile5,
    projectUrl: "",
    githubUrl: "https://github.com/Haider-Mukhtar/ReactNative-EventHub-App",
  },
  {
    id: 10,
    type: "web",
    image: web5,
    projectUrl: "https://tag-extractor.vercel.app/",
    githubUrl: "https://github.com/Haider-Mukhtar/Tag-Extractor",
  },
  {
    id: 11,
    type: "phone",
    image: mobile6,
    projectUrl: "",
    githubUrl: "https://github.com/Haider-Mukhtar/ReactNative-EventHub-App",
  },
  {
    id: 12,
    type: "web",
    image: web6,
    projectUrl: "https://lenob-project.vercel.app/",
    githubUrl: "https://github.com/Haider-Mukhtar/Lenob-Project",
  },
  {
    id: 13,
    type: "phone",
    image: mobile7,
    projectUrl: "",
    githubUrl: "https://github.com/Haider-Mukhtar/ReactNative-EventHub-App",
  },
  {
    id: 14,
    type: "web",
    image: web7,
    projectUrl: "https://lenob-project.vercel.app/",
    githubUrl: "https://github.com/Haider-Mukhtar/Lenob-Project",
  },
  {
    id: 15,
    type: "phone",
    image: mobile8,
    projectUrl: "",
    githubUrl: "https://github.com/Haider-Mukhtar/ReactNative-EventHub-App",
  },
  {
    id: 16,
    type: "web",
    image: web8,
    projectUrl: "https://online-image-compressor-1a.vercel.app/",
    githubUrl: "https://github.com/Haider-Mukhtar/Online-Image-Compressor",
  },
  {
    id: 17,
    type: "phone",
    image: mobile9,
    projectUrl: "",
    githubUrl: "https://github.com/Haider-Mukhtar/ReactNative-EventHub-App",
  },
  {
    id: 18,
    type: "web",
    image: web9,
    projectUrl: "https://tag-extractor.vercel.app/",
    githubUrl: "https://github.com/Haider-Mukhtar/Tag-Extractor",
  },
];

// Project Section
export const ProjectsSectionHeading = "My Recent Work";
export const ProjectsSectionSubHeading =
  "Check out what I've been working on lately.";
export const ProjectsSectionGithubButton = "View More on";
export const ProjectsCardViewLiveSiteButton = "View Live Site";
export const ProjectCardsData = [
  {
    id: 1,
    title: "EventHub App",
    description:
      "EventHub App, developed in React Native & Firebase, served as my internship practice application at MikroStar Tech.",
    image: EventHubProject,
    type: "Personal",
    year: "2023",
    technologies: ["React Native", "JavaScript", "FireBase"],
    techColors: ["#818CF8", "#38B2AC", "#3178C6"],
    projectUrl:
      "https://github.com/Haider-Mukhtar/ReactNative-EventHub-App/tree/main/EventHubAppScreenshots",
    githubUrl: "https://github.com/Haider-Mukhtar/ReactNative-EventHub-App",
  },
  {
    id: 2,
    title: "Maxfit App",
    description: "MaxFit App, developed in React Native & Firebase.",
    image: MaxFitProject,
    type: "Personal",
    year: "2024",
    technologies: ["React Native", "JavaScript", "FireBase"],
    techColors: ["#818CF8", "#38B2AC", "#3178C6"],
    projectUrl: "https://github.com/Haider-Mukhtar/ReactNative-MaxFit-App",
    githubUrl: "https://github.com/Haider-Mukhtar/ReactNative-MaxFit-App",
  },
  {
    id: 3,
    title: "Tag Extractor",
    description:
      "Youtube Tag Extractor using Vite, React, TypeScript, Tailwind CSS.",
    image: TagExtractorProject,
    type: "Personal",
    year: "2025",
    technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
    techColors: ["#818CF8", "#38B2AC", "#3178C6"],
    projectUrl: "https://tag-extractor.vercel.app/",
    githubUrl: "https://github.com/Haider-Mukhtar/Tag-Extractor",
  },
  {
    id: 4,
    title: "Firebase Push Notifications",
    description: "React Native - Push Notification - Firebase",
    image: PushNotificationProject,
    type: "Personal",
    year: "2025",
    technologies: [
      "React Native",
      "TypeScript",
      "FireBase",
      "Push Notification",
    ],
    techColors: ["#818CF8", "#38B2AC", "#3178C6"],
    projectUrl:
      "https://github.com/Haider-Mukhtar/ReactNative-Push-Notification?tab=readme-ov-file#demo",
    githubUrl:
      "https://github.com/Haider-Mukhtar/ReactNative-Push-Notification",
  },
];

// Testimonials Section
export const TestimonialsSectionHeading = "What People Say About Me";
export const TestimonialsSectionSubHeading =
  "Don't just take my word for it. See what my colleagues have to say about my work.";
export const testimonialsData = [
  {
    text: "Working with Mohsin Raza was a pleasure. I found him as someone with great experience as well as deep understanding of business solutions. He is a detail oriented, target oriented, ambitious and strong co-worker, his knowledge is vast and thorough. Mohsin Raza is a organized and customer-service oriented perfectionist, has no problem to work hard when necessary. Result driven, experienced and efficient team player. Deliver results and move on. That's Mohsin Raza's way. Mohsin Raza possesses a winning combination of solid tech skills and business sense, I learned a great deal from him. He is a a trustworthy person and I will always hold him in the highest esteem.",
    image: MaleAvator,
    name: "Mushood Hanif",
    role: "Full Stack Developer",
  },
  {
    text: "Mohsin Raza is an exceptional developer with a deep understanding of modern technologies and a relentless focus on delivering high-quality results. A true professional, he takes great pride in his work and consistently goes the extra mile to ensure client satisfaction.Raza possesses remarkable development skills, particularly in Python and its frameworks such as Django and Flask, and has an outstanding command of Django and Artificial Intelligence solutions. I highly recommend him to anyone seeking a reliable, talented developer who can turn complex ideas into reality.",
    image: MaleAvator,
    name: "Qasim Arshad",
    role: "Team Lead",
  },
  {
    text: "I strongly recommend Mohsin for his exceptional Python development skills and remarkable efficiency. His expertise in Python programming greatly contributed to the success of our project, consistently delivering high-quality solutions on time. It was a privilege to collaborate with him, and I have complete confidence in his abilities.",
    image: MaleAvator,
    name: "Junaid Ali",
    role: "SQA Engineer",
  },
  {
    text: "I had the opportunity to work with Mohsin on a project as a Project Manager. Mohsin is an excellent developer who consistently delivers on time while maintaining a strong attention to detail. He is highly receptive to feedback and collaborates seamlessly with his teammates. It was a pleasure working with him.",
    image: FemaleAvator,
    name: "Aimen Abid",
    role: "Project Manager",
  },
  {
    text: "I’ve had the pleasure of working with Mohsin and am truly impressed by his skills and work ethic. Throughout our collaboration, Mohsin consistently demonstrated exceptional Python development expertise, particularly in web scraping, along with a solid grasp of deep learning. His attention to detail and commitment to high-quality results made him an invaluable member of our team. Beyond his technical abilities, Mohsin always brought a positive attitude and was a joy to work with. I highly recommend Mohsin Raza for any opportunity in Python, web scraping, or deep learning—he will bring a wealth of experience, skill, and professionalism to any role.",
    image: MaleAvator,
    name: "Abdul Rehman",
    role: "Full Stack Developer",
  },
  {
    text: "Mohsin is very passionate about AI and always eager to learn and explore new things. He stays up to date with the latest advancements, actively experimenting with new technologies and approaches. His curiosity, dedication to continuous improvement, and drive to push boundaries make him stand out as a developer who’s always growing. Mohsin’s enthusiasm is truly inspiring and adds great value to any team he’s part of.",
    image: MaleAvator,
    name: "Bilal Aslam",
    role: "Android Developer",
  },
  {
    text: "I had the pleasure of teaching Mohsin a course in Applied Data Science. He is very articulate, has a strong can-do attitude, and consistently demonstrates punctuality and meticulous attention to detail. Overall, Mohsin is a dedicated, hard-working individual. I would strongly recommend him for any opportunity.",
    image: MaleAvator,
    name: "Atique Abbas",
    role: "Senior Data Engineer",
  },
  {
    text: "Mohsin and I worked in the same group under my leadership, and I can confidently attest to his strong skill set in data science and analytics. He is hard-working, always willing to help those around him, and truly embodies the spirit of a team player. Mohsin is an asset to any organization, and I wish him the very best in all his future endeavors.",
    image: FemaleAvator,
    name: "Deepthika Shiwani Muralikrishnan",
    role: "Supervisor",
  },
  {
    text: "Mohsin is a very talented and hard-working professional with strong expertise in the field of data science. I have had the pleasure of working with him on many projects and have always been impressed by his patience, thoughtful approach, and commitment to delivering high-quality results.He consistently demonstrates a collaborative spirit and is always ready to support his team. Mohsin’s dedication, curiosity, and positive attitude truly set him apart. Keep it up, Mohsin! 'Hard work and consistency are the keys to success.'",
    image: MaleAvator,
    name: "Muhammad Rizwan Munawar",
    role: "Computer Vision Engineer",
  },
];

// Experience Section
export const ExperienceSectionHeading = "Work Experience";
export const ExperienceSectionSubHeading =
  "Here's a look at my current role and previous experiences.";
export const ExperienceData = [
  {
    company: "DigiMark Developers",
    companyUrl: "https://www.digimarkdevelopers.com/",
    companyLogo: DigiMarkDevelopersLogo,
    position: "Senior Software Engineer",
    duration: "July 2024 - Present",
    location: "Johar Town, Lahore, Pakistan",
    description:
      "Experienced in leading backend-focused teams, gathering and understanding client requirements, and overseeing end-to-end deployment. Proficient in Python, Django REST Framework, FastAPI, PostgreSQL, MySQL, MongoDB, Redis, React JS, and DevOps practices. Skilled in architecting scalable APIs, implementing CI/CD pipelines, and containerizing applications with Docker. Adept at integrating LLM, OpenAI, Anthropic, Ollama and RAG pipelines to build AI-powered systems. Ensures high-quality deliverables through effective team coordination and regular client engagement.",
    technologies: [
      "Python",
      "AI",
      "Web Development",
      "Django REST Framework",
      "React JS",
      "FastAPI",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "GitHub",
      "LLM",
      "OpenAI",
      "Anthropic",
      "Ollama",
      "RAG",
      "Docker",
      "CI/CD Pipeline",
      "DevOps",
      "AWS S3",
      "Microservices",
      "MS Azure",

    ],
    type: "current",
  },
  {
    company: "Enlatics (SMC-Pvt.) Ltd.",
    companyUrl: "https://enlatics.com/",
    companyLogo: EnlaticsLogo,
    position: "Software Engineer",
    duration: "Jun 2022 - July 2024",
    location: "Opf Housing Scheme, Lahore, Pakistan",
    description:
      "Driven by a passion for product development and research, contributing to innovative solutions at Enlatics. Specializes in Python, Django, MongoDB, PostgreSQL, and JavaScript. Skilled in third-party API integration, database design and maintenance, and leveraging Git for version control. Tackles complex performance and architectural challenges to ensure seamless, high-quality product delivery.",
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "FastAPI",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Web Scraping",
      "Web Automation",
      "Bypassing Captcha",
      "BeautifulSoup",
      "Selenium",
    ],
    type: "previous",
  },
  {
    company: "Moses Technologies Pvt. Ltd.",
    companyUrl: "https://mosestechnologies.ai/",
    companyLogo: MosesTechnologiesLogo,
    position: "Python Developer",
    duration: "July 2021 - April 2022",
    location: "Gulberg 2, Lahore, Pakistan",
    description:
      "Responsible for Python backend development using Django REST Framework and integrating machine learning/deep learning models. Enhanced infrastructure with AWS S3 and SQS, and contributed to projects on the Laravel MVC framework. Tech stack includes Python, Django, Laravel, ML, and DL, driving robust, scalable solutions.",
    technologies: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Django",
      "Django REST Framework",
      "AWS S ",
      "Laravel MVC",
      "Git",
      "Selenium",
      "BeautifulSoup",
      "Bypassing Captcha",
      "Web Scraping",
      "Web Development",
      "JavaScript",
      "Docker",
    ],
    type: "previous",
  },
];

// About Section
export const AboutSectionHeading = "A Glimpse into My World";
export const AboutSectionSubHeading =
  "Here, you'll find a snapshot of my coding activity, the tools I master, my key skills, and ways to connect with me.";
export const AboutSectionSkillsHeading = "My Skills & Tools";
export const SkillsData = [
  {
    id: 1,
    name: "Python",
    icon: PythonIcon,
  },

  {
    id: 2,
    name: "BootStrap",
    icon: BootstrapIcon,
  },
  {
    id: 3,
    name: "Chrome",
    icon: ChromeIcon,
  },
  {
    id: 4,
    name: "CSS",
    icon: CSSIcon,
  },
  {
    id: 6,
    name: "Firebase",
    icon: FirebaseIcon,
  },
  {
    id: 7,
    name: "Github",
    icon: GithubIcon,
  },
  {
    id: 8,
    name: "HTML",
    icon: HTMLIcon,
  },
  {
    id: 9,
    name: "JavaScript",
    icon: JavaScriptIcon,
  },
  {
    id: 10,
    name: "React",
    icon: ReactIcon,
  },
  {
    id: 12,
    name: "Tailwind CSS",
    icon: TailwindCSSIcon,
  },
  {
    id: 13,
    name: "TypeScript",
    icon: TypeScriptIcon,
  },
  {
    id: 14,
    name: "VS Code",
    icon: VSCodeIcon,
  },
  {
    id: 15,
    name: "Django",
    icon: DjangoIcon,
  },
  {
    id: 16,
    name: "FastAPI",
    icon: FastAPI,
  },
];
export const SkillsData2 = [
  {
    id: 1,
    name: "Pytorch",
    icon: PytorchIcon,
  },
  {
    id: 2,
    name: "Cluade AI",
    icon: CluadeAI,
  },
  {
    id: 3,
    name: "RAG",
    icon: RAGIcon,
  },
  {
    id: 4,
    name: "OpenAI",
    icon: ChatGPTIcon,
  },
  {
    id: 5,
    name: "Anthropic",
    icon: AnthropicIcon,
  },
  {
    id: 6,
    name: "Ollama",
    icon: OllamaIcon,
  },
  {
    id: 7,
    name: "DeepSeek",
    icon: DeepSeekIcon,
  },
  {
    id: 8,
    name: "Docker",
    icon: DockerIcon,
  },
  {
    id: 9,
    name: "CI/CD Pipeline",
    icon: CI_CDIcon,
  },
  {
    id: 10,
    name: "Vercel",
    icon: VercelIcon,
  },
  {
    id: 11,
    name: "AWS",
    icon: AWSIcon,
  },
  {
    id: 12,
    name: "MS Azure",
    icon: AzureIcon,
  },
  {
    id: 13,
    name: "Selenium",
    icon: SeleniumIcon,
  },
  {
    id: 14,
    name: "Flask",
    icon: FlaskIcon,
  },
  {
    id: 15,
    name: "Rest API",
    icon: APIIcon,
  },
  {
    id: 16,
    name: "PostgreSQL",
    icon: PostgreSQLIcon,
  },
  {
    id: 17,
    name: "MySQL",
    icon: MySQLIcon,
  },
  {
    id: 18,
    name: "MongoDB",
    icon: MongoDBIcon,
  },
  {
    id: 19,
    name: "Pinecone",
    icon: PineconeIcon,
  },
];
export {
  LinkedInIcon,
  DiscordIcon,
  InstagramIcon,
  MediumIcon,
  GithubIcon,
};

// Footer Section
export const FooterSectionHeading = "Anything in Mind?";
export const FooterSectionSubHeading = "Let's Talk";
export const FooterSectionBtn = "Let's Talk"