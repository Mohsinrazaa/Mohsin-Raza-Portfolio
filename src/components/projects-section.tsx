import { useState } from "react";
import StackingCards, { StackingCardItem } from "./ui/stacking-cards";
import {
  GitHubProfile,
  ProjectCardsData,
  ProjectsSectionHeading,
  ProjectsSectionSubHeading,
} from "@/lib/constants";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "./max-width-wrapper";
import { GithubProjectsBtn } from "./ui/github-projects-btn";
import { VisitLiveSiteBtn } from "./ui/visit-live-site-btn";
import { GithubIconBtn } from "./ui/github-icon-btn";
import { Link } from "react-router";
import { motion } from "motion/react";

const ProjectsSection = () => {
  // @ts-ignore
  const [container, setContainer] = useState<HTMLElement | null>(null);
  // ref={(node) => setContainer(node)}
  return (
    <div id="Work" className="z-[2]">
      <MaxWidthWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true }}
          className="relative z-[3] pt-32 items-center justify-center flex flex-col bg-rd-200 pb-32"
        >
          <div className="relative font-myMainFont w-full text-4xl md:text-6xl font-semibold flex justify-center items-center text-myPalette9">
            {ProjectsSectionHeading}
          </div>
          <span className="text-myPalette9 text-base md:text-lg font-medium text-center font-myMainFont mt-3">
            {ProjectsSectionSubHeading}
          </span>
          <Link target="_blank" to={GitHubProfile}>
            <GithubProjectsBtn />
          </Link>
        </motion.div>
        <div className="relative z-[2] -mt-52 mb-6" /* position: relative for stacking cards scroll offset */>
          <StackingCards
            totalCards={ProjectCardsData.length}
            scrollOptons={{ container: { current: container } }}
          >
            {ProjectCardsData.map((project, index) => {
              return (
                <StackingCardItem
                  key={index}
                  index={index}
                  className="h-[670px] lg:h-[570px]"
                >
                  <div
                    className={cn(
                      "h-[80%] sm:h-[70%] bg-white flex-col lg:flex-row gap-6 lg:gap-8 aspect-video p-6 md:p-8 flex w-11/12 rounded-3xl mx-auto relative border border-myPalette2 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                    )}
                  >
                    <div className="flex-1 flex flex-col justify-between font-myMainFont">
                      <div>
                        <span className="font-bold text-sm md:text-md mb-2 flex flex-row items-center gap-2 transition-colors duration-300 group-hover:text-myPalette9">
                          {project.type}
                          <p className="h-5 w-0.5 bg-myPalette6 transition-colors duration-300 group-hover:bg-myPalette9" />
                          {project.year}
                        </span>
                        <h3 className="font-bold text-2xl md:text-3xl transition-all duration-300 group-hover:text-myPalette9 group-hover:scale-105">
                          {project.title}
                        </h3>
                        <div className="w-full h-[1px] bg-myPalette6 my-3 lg:my-5 transition-all duration-300 group-hover:bg-myPalette9 group-hover:h-[2px]" />
                        <span className="font-normal text-base md:text-md transition-colors duration-300 group-hover:text-gray-700 hover:scale-105">
                          {project.description}
                        </span>
                        <div className="flex flex-wrap items-center mt-3 lg:mt-5">
                          {project.technologies.map((techstack, techIndex) => (
                            <div
                              key={techIndex}
                              className="flex items-center text-myPalette9 px-3 text-xs py-1 border border-myPalette9 rounded-full mr-2 mb-2 transition-all duration-300 hover:bg-myPalette9 hover:text-white hover:scale-105 hover:shadow-md transform cursor-pointer"
                            >
                              <div
                                className="rounded-full h-2 w-2 mr-2 transition-all duration-300 hover:scale-110"
                                style={{
                                  backgroundColor:
                                    project.techColors[
                                      techIndex % project.techColors.length
                                    ],
                                }}
                              ></div>
                              {techstack}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-row items-center gap-2 lg:gap-4 mt-4 md:mt-0 transition-all duration-300 group-hover:gap-6">
                        <Link
                          target="_blank"
                          to={project.projectUrl}
                          className="transition-transform duration-300 hover:scale-110"
                        >
                          <VisitLiveSiteBtn />
                        </Link>
                        <Link
                          target="_blank"
                          to={project.githubUrl}
                          className="transition-transform duration-300 hover:scale-110"
                        >
                          <GithubIconBtn />
                        </Link>
                      </div>
                    </div>

                    <div className="w-full sm:w-1/2 rounded-xl aspect-video relative overflow-hidden transition-all duration-500 group-hover:shadow-xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                  </div>
                </StackingCardItem>
              );
            })}
          </StackingCards>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ProjectsSection;