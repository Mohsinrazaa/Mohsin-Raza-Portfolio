import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Building2, Calendar, MapPin, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import MaxWidthWrapper from "./max-width-wrapper";
import {
  ExperienceData,
  ExperienceSectionHeading,
  ExperienceSectionSubHeading,
} from "@/lib/constants";

const ExperienceSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div id="Experience">
      <MaxWidthWrapper>
        <div className="w-full font-myMainFont" ref={containerRef}>
          <div className="mx-auto pt-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="relative font-myMainFont w-full text-4xl md:text-6xl font-semibold flex justify-center items-center text-myPalette9">
                {ExperienceSectionHeading}
              </div>
              <p className="text-myPalette9 text-base md:text-lg font-medium text-center font-myMainFont mt-3">
                {ExperienceSectionSubHeading}
              </p>
            </motion.div>
          </div>

          <div ref={ref} className="relative mx-auto pb-10">
            {ExperienceData.map((experience, index) => (
              <motion.div
                key={index}
                // initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex justify-start pt-10 md:pt-20 md:gap-0"
              >
                <div className="sticky flex flex-col md:flex-row z-40 items-cente top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="h-12 absolute left-3 md:left-3 w-12 rounded-full bg-white border border-myPalette2 flex items-center justify-center shadow-lg">
                    <div
                      className={`h-9 w-9 rounded-full flex items-center justify-center ${
                        experience.type === "current"
                          ? "bg-green-600 animate-pulse"
                          : "bg-blue-500"
                      }`}
                    >
                      <Briefcase className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="hidden md:block md:pl-18">
                    <h3 className="text-2xl md:text-3xl font-bold text-myPalette9 mb-1">
                      {experience.company}
                    </h3>
                    <Badge
                      className={`${
                        experience.type === "current"
                          ? "bg-myPalette9"
                          : "bg-myPalette3"
                      } ${
                        experience.type === "current"
                          ? "text-myPalette1"
                          : "text-myPalette9"
                      } text-xs`}
                    >
                      {experience.type === "current" ? "Current" : "Previous"}
                    </Badge>
                  </div>
                </div>

                <div className="relative pl-18 md:pl-4 w-full">
                  <Card className="bg-white border border-myPalette2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <CardContent className="p-6">
                      <div className="md:hidden mb-4">
                        <h3 className="text-xl font-bold text-myPalette9 mb-2">
                          {experience.company}
                        </h3>
                        <Badge
                          className={`${
                            experience.type === "current"
                              ? "bg-myPalette9"
                              : "bg-myPalette3"
                          } ${
                            experience.type === "current"
                              ? "text-myPalette1"
                              : "text-myPalette9"
                          } text-xs`}
                        >
                          {experience.type === "current"
                            ? "Current"
                            : "Previous"}
                        </Badge>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-xl font-bold text-myPalette9 mb-2 flex md:items-center gap-2">
                            <Building2 className="h-5 w-5 text-myPalette9" />
                            {experience.position}
                          </h4>

                          <div className="flex flex-col sm:flex-row gap-4 text-sm text-myPalette9/80 mb-4">
                            <div className="flex md:items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              {experience.duration}
                            </div>
                            <div className="flex md:items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              {experience.location}
                            </div>
                          </div>
                        </div>

                        <p className="text-myPalette9/80 leading-relaxed">
                          {experience.description}
                        </p>

                        <div>
                          <h5 className="font-semibold text-myPalette9 mb-1">
                            Technologies & Skills
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, techIndex) => (
                              <motion.div
                                key={techIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                  duration: 0.3,
                                  delay: techIndex * 0.05,
                                }}
                                viewport={{ once: true }}
                              >
                                <Badge className="hover:bg-myPalette1 bg-white border border-myPalette5 text-myPalette9/80 transition-colors">
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}

            <div
              style={{
                height: height + "px",
              }}
              className="absolute md:left-8 left-8 top-0 overflow-hidden w-[3px] bg-gradient-to-b from-transparent via-border to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
            >
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-t from-blue-500 via-purple-500 to-cyan-500 rounded-full"
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ExperienceSection;
