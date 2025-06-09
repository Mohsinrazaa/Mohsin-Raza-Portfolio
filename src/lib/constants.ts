import { BriefcaseBusiness, FolderGit2, House, Star } from "lucide-react";
import Photo from "../assets/img/myProfilePhoto.jpg";
import EventHubProject from "../assets/img/projects/eventhubProject.png";
import MaxFitProject from "../assets/img/projects/maxfitProject.png";
import TagExtractorProject from "../assets/img/projects/tagextractor.png";

export const NavLinks = [
  { id: 1, name: "Home", url: "/", icon: House },
  { id: 2, name: "Experience", url: "/", icon: BriefcaseBusiness },
  { id: 3, name: "Projects", url: "/", icon: FolderGit2 },
  { id: 3, name: "Reviews", url: "/", icon: Star },
];

export const firstName = "Haider";
export const lastName = "Mukhtar";
export const fullName = "Haider Mukhtar";
export const profilePhoto = Photo;

// Social Links
export const GitHubProfile = "https://github.com/Haider-Mukhtar";
export const LinkedInProfile = "https://www.linkedin.com/in/haider-mukhtar/";

// Hero Section
export const HeroSectionHeading =
  "Frontend Developer </br> for  Web & Mobile Apps";
// export const HeroSectionHeading = "Creative Frontend Developer <br/> for Scalable Web & Mobile Apps ";
export const HeroSectionSubHeading =
  "Building fast, elegant interfaces with React, React Native, and Tailwind CSS.";
export const HeroLetsConnectButton = "Let's Connect";
export const HeroLetsSeeMyWorkButton = "See My Work";

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
    image: TagExtractorProject,
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
