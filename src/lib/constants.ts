import { BriefcaseBusiness, FolderGit2, House, Star } from "lucide-react";
import Photo from "../assets/img/myProfilePhoto.jpg";
import EventHubProject from "../assets/img/projects/eventhubProject.png";
import MaxFitProject from "../assets/img/projects/maxfitProject.png";
import TagExtractorProject from "../assets/img/projects/tagextractor.png";
import TestImage from "../assets/img/slider/test.png";
import Test1Image from "../assets/img/slider/test1.png";
import MaleAvator from "../assets/img/icons/male-avatar.png";
import FemaleAvator from "../assets/img/icons/female-avatar.png";

export const NavLinks = [
  { id: 1, name: "Home", url: "/#Hero", icon: House },
  { id: 2, name: "Experience", url: "/#Hero", icon: BriefcaseBusiness },
  { id: 3, name: "Work", url: "/#Work", icon: FolderGit2 },
  { id: 3, name: "Testimonials", url: "/#Testimonials", icon: Star },
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

// Image Slider Section
export const SliderImagesData = [
  {
    id: 1,
    type: "phone",
    image: TestImage,
  },
  {
    id: 2,
    type: "web",
    image: Test1Image,
  },
  {
    id: 3,
    type: "phone",
    image: TestImage,
  },
  {
    id: 4,
    type: "web",
    image: Test1Image,
  },
  {
    id: 5,
    type: "phone",
    image: TestImage,
  },
  {
    id: 6,
    type: "web",
    image: Test1Image,
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

// Testimonials Section
export const TestimonialsSectionHeading = "What Clients Say About Me";
export const TestimonialsSectionSubHeading =
  "Don't just take my word for it. See what my clients have to say about my work.";
export const testimonialsData = [
  {
    text: "Collaborating with Haider Mukhtar on React Native Mobile App Development brings, unparalleled expertise, efficiency and creativity to every project.",
    image: FemaleAvator,
    name: "Muaaz Ahmad",
    role: "Mobile App Developer",
  },
  {
    text: "Collaborating with Haider Mukhtar on React Native Mobile App Development brings, unparalleled expertise, efficiency and creativity to every project.",
    image: MaleAvator,
    name: "Muaaz Ahmad",
    role: "Mobile App Developer",
  },
  {
    text: "Collaborating with Haider Mukhtar on React Native Mobile App Development brings, unparalleled expertise, efficiency and creativity to every project.",
    image: MaleAvator,
    name: "Muaaz Ahmad",
    role: "Mobile App Developer",
  },
  {
    text: "Collaborating with Haider Mukhtar on React Native Mobile App Development brings, unparalleled expertise, efficiency and creativity to every project.",
    image: MaleAvator,
    name: "Muaaz Ahmad",
    role: "Mobile App Developer",
  },
  {
    text: "Collaborating with Haider Mukhtar on React Native Mobile App Development brings, unparalleled expertise, efficiency and creativity to every project.",
    image: MaleAvator,
    name: "Muaaz Ahmad",
    role: "Mobile App Developer",
  },
  {
    text: "Collaborating with Haider Mukhtar on React Native Mobile App Development brings, unparalleled expertise, efficiency and creativity to every project.",
    image: MaleAvator,
    name: "Muaaz Ahmad",
    role: "Mobile App Developer",
  },
  {
    text: "Collaborating with Haider Mukhtar on React Native Mobile App Development brings, unparalleled expertise, efficiency and creativity to every project.",
    image: MaleAvator,
    name: "Muaaz Ahmad",
    role: "Mobile App Developer",
  },
  {
    text: "Collaborating with Haider Mukhtar on React Native Mobile App Development brings, unparalleled expertise, efficiency and creativity to every project.",
    image: MaleAvator,
    name: "Muaaz Ahmad",
    role: "Mobile App Developer",
  },
  {
    text: "Collaborating with Haider Mukhtar on React Native Mobile App Development brings, unparalleled expertise, efficiency and creativity to every project.",
    image: MaleAvator,
    name: "Muaaz Ahmad",
    role: "Mobile App Developer",
  },
];
