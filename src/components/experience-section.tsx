import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Building2, Calendar, MapPin, Briefcase, ExternalLink, Award } from "lucide-react";
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
    <div id="Experience" className="relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-12 h-12 bg-myPalette9/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-8 h-8 bg-myPalette9/15 rounded-full animate-bounce animation-delay-300"></div>
        <div className="absolute bottom-32 left-16 w-16 h-16 bg-myPalette9/8 rounded-full animate-pulse animation-delay-600"></div>
        <div className="absolute bottom-20 right-12 w-10 h-10 bg-myPalette9/12 rounded-full animate-bounce animation-delay-900"></div>
        
        {/* Moving gradient lines */}
        <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-myPalette9/20 to-transparent animate-slide-right"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-myPalette9/15 to-transparent animate-slide-right animation-delay-700"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(var(--myPalette9), 0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <MaxWidthWrapper>
        <div className="w-full font-myMainFont relative z-10" ref={containerRef}>
          <div className="mx-auto pt-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center relative"
            >
              {/* Enhanced heading with glow effect */}
              <div className="relative font-myMainFont w-full text-4xl md:text-6xl font-semibold flex justify-center items-center text-myPalette9 mb-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  {ExperienceSectionHeading}
                  {/* Animated underline */}
                  <motion.div
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-myPalette9 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "60px" }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </motion.div>
              </div>
              
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-myPalette9 text-base md:text-lg font-medium text-center font-myMainFont mt-3"
              >
                {ExperienceSectionSubHeading}
              </motion.p>
            </motion.div>
          </div>

          <div ref={ref} className="relative mx-auto pb-10">
            {ExperienceData.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex justify-start pt-10 md:pt-20 md:gap-0 group"
              >
                {/* Enhanced Timeline Icon */}
                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="h-12 absolute left-3 md:left-3 w-12 rounded-full bg-white border border-myPalette2 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                  >
                    <div
                      className={`h-9 w-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                        experience.type === "current"
                          ? "bg-green-600 animate-pulse group-hover:bg-green-700"
                          : "bg-blue-500 group-hover:bg-blue-600"
                      }`}
                    >
                      <Briefcase className="h-5 w-5 text-white" />
                    </div>
                  </motion.div>
                  
                  {/* Enhanced Company Header */}
                  <div className="hidden md:block md:pl-18">
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 group-hover:scale-105 transition-all duration-300"
                    >
                      <motion.img
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        src={experience.companyLogo}
                        alt={experience.company}
                        className="h-10 w-10 rounded-lg shadow-md"
                      />
                      <div className="relative">
                        <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer">
                          <h3 className="text-2xl md:text-3xl font-bold text-myPalette9 mb-1 hover:text-myPalette9/80 transition-colors duration-300 flex items-center gap-2">
                            {experience.company}
                            <ExternalLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </h3>
                        </a>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Badge
                        className={`${
                          experience.type === "current"
                            ? "bg-myPalette9 animate-pulse"
                            : "bg-myPalette3"
                        } ${
                          experience.type === "current"
                            ? "text-myPalette1"
                            : "text-myPalette9"
                        } text-xs hover:scale-110 transition-all duration-300`}
                      >
                        {experience.type === "current" ? "Current" : "Previous"}
                      </Badge>
                    </motion.div>
                  </div>
                </div>

                {/* Enhanced Experience Card */}
                <div className="relative pl-18 md:pl-4 w-full">
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="bg-white border border-myPalette2 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden group">
                      {/* Animated background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-myPalette9/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      
                      <CardContent className="p-6 relative z-10">
                        {/* Mobile Company Header */}
                        <div className="md:hidden mb-4">
                          <div className="flex items-center gap-3 mb-2">
                            <motion.img
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                              src={experience.companyLogo}
                              alt={experience.company}
                              className="h-8 w-8 rounded-lg shadow-md"
                            />
                            <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer">
                              <h3 className="text-xl font-bold text-myPalette9 hover:text-myPalette9/80 transition-colors duration-300 flex items-center gap-2">
                                {experience.company}
                                <ExternalLink className="h-4 w-4" />
                              </h3>
                            </a>
                          </div>
                          <Badge
                            className={`${
                              experience.type === "current"
                                ? "bg-myPalette9"
                                : "bg-myPalette3"
                            } ${
                              experience.type === "current"
                                ? "text-myPalette1"
                                : "text-myPalette9"
                            } text-xs hover:scale-110 transition-all duration-300`}
                          >
                            {experience.type === "current" ? "Current" : "Previous"}
                          </Badge>
                        </div>

                        <div className="space-y-4">
                          {/* Enhanced Position Header */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                          >
                            <h4 className="text-xl font-bold text-myPalette9 mb-2 flex items-center gap-2 group-hover:text-myPalette9/90 transition-colors duration-300">
                              <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                              >
                                <Building2 className="h-5 w-5 text-myPalette9" />
                              </motion.div>
                              {experience.position}
                            </h4>

                            {/* Enhanced Meta Information */}
                            <div className="flex flex-col sm:flex-row gap-4 text-sm text-myPalette9/80 mb-4">
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-2 hover:text-myPalette9 transition-colors duration-300"
                              >
                                <Calendar className="h-4 w-4" />
                                {experience.duration}
                              </motion.div>
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-2 hover:text-myPalette9 transition-colors duration-300"
                              >
                                <MapPin className="h-4 w-4" />
                                {experience.location}
                              </motion.div>
                            </div>
                          </motion.div>

                          {/* Enhanced Description */}
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-myPalette9/80 leading-relaxed group-hover:text-myPalette9/90 transition-colors duration-300"
                          >
                            {experience.description}
                          </motion.p>

                          {/* Enhanced Technologies Section */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                          >
                            <h5 className="font-semibold text-myPalette9 mb-3 flex items-center gap-2">
                              <Award className="h-4 w-4" />
                              Technologies & Skills
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {experience.technologies.map((tech, techIndex) => (
                                <motion.div
                                  key={techIndex}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  whileHover={{ scale: 1.1, y: -2 }}
                                  transition={{
                                    duration: 0.3,
                                    delay: techIndex * 0.05,
                                  }}
                                  viewport={{ once: true }}
                                >
                                  <Badge className="hover:bg-myPalette9 hover:text-myPalette1 bg-white border border-myPalette5 text-myPalette9/80 transition-all duration-300 cursor-pointer">
                                    {tech}
                                  </Badge>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}

            {/* Enhanced Timeline Line */}
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
                className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-t from-blue-500 via-purple-500 to-cyan-500 rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      
      {/* Custom Animation Styles */}
      <style>{`
        @keyframes slide-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-slide-right {
          animation: slide-right 6s ease-in-out infinite;
        }
        
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-700 { animation-delay: 0.7s; }
        .animation-delay-900 { animation-delay: 0.9s; }
      `}</style>
    </div>
  );
};

export default ExperienceSection;