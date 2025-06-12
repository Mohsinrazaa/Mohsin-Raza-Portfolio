import GitHubCalendar from 'react-github-calendar';
import MaxWidthWrapper from './max-width-wrapper';
import { motion } from "motion/react";
import { AboutSectionHeading, AboutSectionSkillsHeading, AboutSectionSubHeading, GithubIcon, InstagramIcon, LinkedInIcon, MediumIcon, SkillsData } from '@/lib/constants';
import Marquee from "react-fast-marquee";
import {
  MouseTrackerProvider as CursorProvider,
  Pointer as Cursor,
  PointerFollower as CursorFollow,
} from "@/components/ui/cursor";
import { MousePointer2 } from 'lucide-react';

const AboutSection = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div className='pt-32 pb-10 lg:mx-16'>
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
          <div className='mt-10 flex flex-col md:flex-row gap-6'>
            <div className='md:w-[40%] bg-white border border-myPalette2 shadow-lg rounded-3xl px-6 pt-6 pb-6 grid grid-cols-2 gap-4'>
              <div className='bg-white border border-myPalette2 shadow-md rounded-xl p-2 justify-center items-center flex'>   
                <img
                  className="h-14 aspect-square"
                  src={LinkedInIcon}
                  alt="Slider_Image"
                />
                <CursorProvider>
                  <Cursor>
                    <MousePointer2 className="fill-blue-500 stroke-blue-600" size={30} />
                  </Cursor>
                  <CursorFollow align="bottom-right">
                    <div className="bg-blue-500 text-white border border-white/10 text-xs px-2 py-1 rounded-md shadow-md w-[105px]">
                      haider-mukhtar
                    </div>
                  </CursorFollow>
                </CursorProvider>
              </div>
              <div className='bg-white border border-myPalette2 shadow-md rounded-xl p-2 justify-center items-center flex'>
                <img
                  className="h-14 aspect-square"
                  src={GithubIcon}
                  alt="Slider_Image"
                />
                <CursorProvider>
                  <Cursor>
                    <MousePointer2 className="fill-myPalette1 stroke-myPalette9" size={30} />
                  </Cursor>
                  <CursorFollow align="bottom-right">
                    <div className="bg-myPalette9 text-myPalette1 border border-white/10 text-xs px-2 py-1 rounded-md shadow-md w-[105px]">
                      Haider-Mukhtar
                    </div>
                  </CursorFollow>
                </CursorProvider>
              </div>
              <div className='bg-white border border-myPalette2 shadow-md rounded-xl p-2 justify-center items-center flex'>
                <img
                  className="h-14 aspect-square"
                  src={MediumIcon}
                  alt="Slider_Image"
                />
                <CursorProvider>
                  <Cursor>
                    <MousePointer2 className="fill-myPalette1 stroke-myPalette9" size={30} />
                  </Cursor>
                  <CursorFollow align="bottom-right">
                    <div className="bg-myPalette9 text-myPalette1 border border-white/10 text-xs px-2 py-1 rounded-md shadow-md w-[110px]">
                      @haidermukhtar
                    </div>
                  </CursorFollow>
                </CursorProvider>
              </div>
              <div className='bg-white border border-myPalette2 shadow-md rounded-xl p-2 justify-center items-center flex'>
                <img
                  className="h-14 aspect-square"
                  src={InstagramIcon}
                  alt="Slider_Image"
                />
                <CursorProvider>
                  <Cursor>
                    <MousePointer2 className="fill-red-500 stroke-red-600" size={30} />
                  </Cursor>
                  <CursorFollow align="bottom-right">
                    <div className="bg-red-500 text-white border border-white/10 text-xs px-2 py-1 rounded-md shadow-md w-[120px]">
                      haider_mukhtar_ch
                    </div>
                  </CursorFollow>
                </CursorProvider>
              </div>
            </div>
            <div className='md:w-[60%] bg-white border border-myPalette2 shadow-lg rounded-3xl px-6 pt-6 pb-2'>
              <h3 className="font-semibold text-xl md:text-2xl">
                {AboutSectionSkillsHeading}
              </h3>
              <div className='mt-6'>
                <Marquee autoFill gradient gradientWidth={40}>
                  {SkillsData.map((item) => (
                    <div className='bg-white border border-myPalette2 shadow-lg rounded-xl mr-2 mb-4 p-2 flex flex-row items-center gap-2'>
                      <img
                        className="h-10 aspect-square"
                        src={item.icon}
                        alt="Slider_Icon"
                      />
                      <p className='font-myMainFont font-semibold text-lg'>{item.name}</p>
                    </div>
                  ))}
                </Marquee>
                <Marquee autoFill direction="right" gradient gradientWidth={40}>
                  {SkillsData.map((item) => (
                    <div className='bg-white border border-myPalette2 shadow-lg rounded-xl mr-2 mb-6 p-2 flex flex-row items-center gap-2'>
                      <img
                        className="h-10 aspect-square"
                        src={item.icon}
                        alt="Slider_Icon"
                      />
                      <p className='font-myMainFont font-semibold text-lg'>{item.name}</p>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
          <div className='hidden lg:flex bg-white border border-myPalette2 shadow-lg p-6 items-center justify-center rounded-3xl mt-6'>
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
