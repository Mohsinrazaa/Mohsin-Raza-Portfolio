import GitHubCalendar from 'react-github-calendar';
import MaxWidthWrapper from './max-width-wrapper';
import { motion } from "motion/react";
import { AboutSectionHeading, AboutSectionSubHeading } from '@/lib/constants';
// import Marquee from "react-fast-marquee";

const AboutSection = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div className='pt-32 pb-10 mx-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="relative font-myMainFont w-full text-4xl md:text-6xl font-semibold flex justify-center items-center text-myPalette9">
              {AboutSectionHeading}
            </div>
            <p className="text-myPalette9 text-base md:text-lg font-medium text-center font-myMainFont mt-3">
              {AboutSectionSubHeading}
            </p>
          </motion.div>
          <div className='mt-10 flex flex-row gap-6'>
            <div className='h-60 w-[40%] bg-red-300 rounded-3xl'></div>
            <div className='h-60 w-[60%] bg-yellow-200 rounded-3xl'>

            </div>
          </div>
          <div className='bg-white border border-myPalette2 shadow-lg p-6 items-center justify-center flex rounded-3xl mt-6'>
            <GitHubCalendar
              username="haider-mukhtar"
              showWeekdayLabels
              errorMessage='GitHub Contribution Data not found'
              colorScheme='light'
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default AboutSection
