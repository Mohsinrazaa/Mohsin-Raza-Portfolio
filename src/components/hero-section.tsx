import { HeroSectionHeading, HeroSectionSubHeading, LinkedInProfile } from "@/lib/constants";
import MaxWidthWrapper from "./max-width-wrapper";
import { MyWorkBtn } from "./ui/my-work-btn";
import { LetsConnectBtn } from "./ui/lets-connect-btn";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  return (
    <div id="Home" className="z-[2] flex h-scree w-full justify-center items-center">
      <MaxWidthWrapper>
        <div className="mt-40 md:mt-52 mb-32">
          <motion.p
            className="text-myPalette9 text-5xl md:text-7xl font-semibold text-center font-myMainFont tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Typewriter
              words={[HeroSectionHeading]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.p>
          <motion.p
            className="text-myPalette9 text-base md:text-lg font-medium text-center font-myMainFont my-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {HeroSectionSubHeading}
          </motion.p>
          <motion.div
            className="flex flex-col md:flex-row items-center gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Link target="_blank" to={LinkedInProfile}>
              <LetsConnectBtn />
            </Link>
            <a href="/#Work">
              <MyWorkBtn />
            </a>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HeroSection;
