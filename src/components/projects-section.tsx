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
          <p className="text-myPalette9 text-base md:text-lg font-medium text-center font-myMainFont mt-3">
            {ProjectsSectionSubHeading}
          </p>
          <Link target="_blank" to={GitHubProfile}>
            <GithubProjectsBtn />
          </Link>
        </motion.div>
        <div className="relative z-[2] -mt-52 mb-6">
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
                      "h-[80%] sm:h-[70%] bg-white flex-col lg:flex-row gap-6 lg:gap-8 aspect-video p-6 md:p-8 flex w-11/12 rounded-3xl mx-auto relative border border-myPalette2 backdrop-blur-sm shadow-lg"
                    )}
                  >
                    <div className="flex-1 flex flex-col justify-between font-myMainFont">
                      <div>
                        <p className="font-bold text-sm md:text-md mb-2 flex flex-row items-center gap-2">
                          {project.type}
                          <p className="h-5 w-0.5 bg-myPalette6" />
                          {project.year}
                        </p>
                        <h3 className="font-bold text-2xl md:text-3xl">
                          {project.title}
                        </h3>
                        <div className="w-full h-[1px] bg-myPalette6 my-3 lg:my-5" />
                        <p className="font-normal text-base md:text-md">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap items-center mt-3 lg:mt-5">
                          {project.technologies.map((techstack, techIndex) => (
                            <div
                              key={techIndex}
                              className="flex items-center text-myPalette9 px-3 text-xs py-1 border border-myPalette9 rounded-full mr-2 mb-2"
                            >
                              <div
                                className="rounded-full h-2 w-2 mr-2"
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
                      <div className="flex flex-row items-center gap-2 lg:gap-4 mt-4 md:mt-0">
                        <Link
                          target="_blank"
                          to={project.projectUrl}
                        >
                          <VisitLiveSiteBtn />
                        </Link>
                        <Link
                          target="_blank"
                          to={project.githubUrl}
                        >
                          <GithubIconBtn />
                        </Link>
                      </div>
                    </div>

                    <div className="w-full sm:w-1/2 rounded-xl aspect-video relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover"
                      />
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
