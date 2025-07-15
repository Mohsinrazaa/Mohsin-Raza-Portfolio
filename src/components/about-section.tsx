import GitHubCalendar from 'react-github-calendar';
import MaxWidthWrapper from './max-width-wrapper';
import { motion } from "motion/react";
import {
  AboutSectionHeading, AboutSectionSkillsHeading, AboutSectionSubHeading,
  GithubIcon, GitHubProfile, InstagramIcon, InstagramProfile, LinkedInIcon,
  FacebookIcon, KaggleIcon, LinkedInProfile, MediumIcon, MediumProfile, SkillsDataGrouped,
  FacebookProfile, DiscordProfile
} from '@/lib/constants';
import Marquee from "react-fast-marquee";
import {
  MouseTrackerProvider as CursorProvider,
  Pointer as Cursor,
  PointerFollower as CursorFollow,
} from "@/components/ui/cursor";
import { MousePointer2, Code, Database, Cloud, Shield, Brain } from 'lucide-react';
import { useState } from 'react';

const AboutSection = () => {
  const [activeCategory, setActiveCategory] = useState('Development Tools');

  const categories = [
    { name: 'Development Tools', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { name: 'AI Tools & Packages', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { name: 'Databases', icon: Database, color: 'from-green-500 to-emerald-500' },
    { name: 'Infra & CI/CD', icon: Cloud, color: 'from-orange-500 to-red-500' },
    { name: 'Auth', icon: Shield, color: 'from-indigo-500 to-blue-500' }
  ];

  const socialLinks = [
    { href: LinkedInProfile, icon: LinkedInIcon, cursor: 'fill-blue-500 stroke-blue-600', tooltip: 'mohsin-raza', bg: 'bg-blue-500' },
    { href: GitHubProfile, icon: GithubIcon, cursor: 'fill-myPalette1 stroke-myPalette9', tooltip: 'Mohsin-Raza', bg: 'bg-myPalette9' },
    { href: MediumProfile, icon: MediumIcon, cursor: 'fill-myPalette1 stroke-myPalette9', tooltip: '@mohsin-raza', bg: 'bg-myPalette9' },
    { href: InstagramProfile, icon: InstagramIcon, cursor: 'fill-red-500 stroke-red-600', tooltip: 'mohsin_raza_40', bg: 'bg-red-500' },
    { href: FacebookProfile, icon: FacebookIcon, cursor: 'fill-red-500 stroke-red-600', tooltip: 'mohsin-raza', bg: 'bg-red-500' },
    { href: DiscordProfile, icon: KaggleIcon, cursor: 'fill-red-500 stroke-red-600', tooltip: 'Mohsinraza', bg: 'bg-red-500' }
  ];

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
            <span className="text-myPalette9 text-base md:text-lg font-medium text-center font-myMainFont mt-3">
              {AboutSectionSubHeading}
            </span>
          </motion.div>

          <div className='mt-10 flex flex-col lg:flex-row gap-6'>
            {/* Social Links Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='lg:w-[35%] bg-white border border-myPalette2 shadow-lg rounded-3xl p-6'
            >
              <h3 className="font-semibold text-xl md:text-2xl mb-6 text-center">
                Connect With Me
              </h3>
              <div className='grid grid-cols-2 gap-4'>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target='_blank'
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className='bg-gradient-to-br from-gray-50 to-white border border-myPalette2 shadow-md rounded-2xl p-4 justify-center items-center flex cursor-none relative group overflow-hidden'
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img
                      className="h-14 aspect-square relative z-10 group-hover:scale-110 transition-transform duration-300"
                      src={social.icon}
                      alt="Social_Icon"
                    />
                    <CursorProvider>
                      <Cursor>
                        <MousePointer2 className={social.cursor} size={30} />
                      </Cursor>
                      <CursorFollow align="bottom-right">
                        <div className={`${social.bg} text-white border border-white/10 text-xs px-2 py-1 rounded-md shadow-md min-w-[105px] text-center`}>
                          {social.tooltip}
                        </div>
                      </CursorFollow>
                    </CursorProvider>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='lg:w-[65%] bg-white border border-myPalette2 shadow-lg rounded-3xl p-6'
            >
              <h3 className="font-semibold text-xl md:text-2xl mb-6 text-center">
                {AboutSectionSkillsHeading}
              </h3>

              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {categories.map((category, index) => {
                  const IconComponent = category.icon;
                  return (
                    <motion.button
                      key={category.name}
                      onClick={() => setActiveCategory(category.name)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeCategory === category.name
                        ? 'text-white shadow-lg'
                        : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                        }`}
                    >
                      {activeCategory === category.name && (
                        <motion.div
                          layoutId="activeTab"
                          className={`absolute inset-0 rounded-full bg-gradient-to-r ${category.color}`}
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                      <IconComponent size={16} className="relative z-10" />
                      <span className="relative z-10">{category.name}</span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Skills Display */}
              <div className="relative">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="min-h-[120px]"
                >
                  <Marquee
                    autoFill
                    gradient
                    gradientWidth={60}
                    speed={30}
                    className="py-2"
                  >
                    {SkillsDataGrouped
                      .filter(skill => skill.category === activeCategory)
                      .map((item, index) => (
                        <motion.div
                          key={`${item.name}-${index}`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className='bg-gradient-to-br from-white to-gray-50 border border-myPalette2 shadow-lg rounded-2xl mr-4 p-4 flex flex-row items-center gap-3 hover:shadow-xl transition-all duration-300 group'
                        >
                          <div className="relative">
                            <img
                              className="h-10 w-10 object-contain group-hover:scale-110 transition-transform duration-300"
                              src={item.icon}
                              alt={`${item.name}_Icon`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <p className='font-myMainFont font-semibold text-lg text-gray-800 group-hover:text-gray-900 transition-colors duration-300'>
                            {item.name}
                          </p>
                        </motion.div>
                      ))}
                  </Marquee>

                  {/* Secondary marquee for more dynamic effect */}
                  <Marquee
                    autoFill
                    gradient
                    gradientWidth={60}
                    speed={25}
                    direction="right"
                    className="py-2"
                  >
                    {SkillsDataGrouped
                      .filter(skill => skill.category === activeCategory)
                      .slice()
                      .reverse()
                      .map((item, index) => (
                        <motion.div
                          key={`${item.name}-reverse-${index}`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className='bg-gradient-to-br from-gray-50 to-white border border-myPalette2 shadow-lg rounded-2xl mr-4 p-4 flex flex-row items-center gap-3 hover:shadow-xl transition-all duration-300 group'
                        >
                          <div className="relative">
                            <img
                              className="h-10 w-10 object-contain group-hover:scale-110 transition-transform duration-300"
                              src={item.icon}
                              alt={`${item.name}_Icon`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <p className='font-myMainFont font-semibold text-lg text-gray-800 group-hover:text-gray-900 transition-colors duration-300'>
                            {item.name}
                          </p>
                        </motion.div>
                      ))}
                  </Marquee>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* GitHub Calendar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='hidden lg:block bg-white border border-myPalette2 shadow-lg rounded-3xl mt-6 relative overflow-hidden'
          >
            {/* Header Section */}
            <div className="relative bg-gradient-to-r from-gray-900 via-black to-gray-800 p-6 text-white">
              <div className="absolute inset-0 bg-white/5" />
              <div className="relative z-10 text-center">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="text-2xl font-bold mb-2 text-white"
                >
                  GitHub Activity
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="text-gray-300 text-sm"
                >
                  My coding journey visualized
                </motion.p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-2 right-2 w-20 h-20 bg-white/10 rounded-full blur-xl" />
              <div className="absolute bottom-2 left-2 w-16 h-16 bg-white/10 rounded-full blur-lg" />
            </div>

            {/* Calendar Container */}
            <div className="p-6 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-emerald-50/30 pointer-events-none" />

              {/* Stats Cards */}
              <div className="flex justify-center mb-6">
                <div className="flex gap-4 flex-wrap justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    className="text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg border border-gray-100 hover:scale-110 transition-all duration-300"
                  >
                    🔥 2083 Contributions
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    className="text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg border border-gray-100 hover:scale-110 transition-all duration-300"
                  >
                    📈 Last Year
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg border border-gray-100 hover:scale-110 transition-all duration-300"
                  >
                    💻 Active Coder
                  </motion.div>
                </div>
              </div>

              {/* Calendar with enhanced styling */}
              <div className="relative z-10 flex justify-center">
                <div className="p-4 bg-white rounded-2xl shadow-inner border border-gray-100">
                  <GitHubCalendar
                    username="mohsinrazaa"
                    showWeekdayLabels
                    errorMessage='GitHub Contribution Data not found'
                    colorScheme='light'
                    blockSize={12}
                    blockMargin={3}
                    fontSize={14}
                  />
                </div>
              </div>

              {/* Bottom Decorative Elements */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-black/20 to-black/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-br from-white/20 to-white/20 rounded-full blur-xl" />
            </div>

            {/* Achievement Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.3, type: "spring" }}
              className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 border-white"
            >
              <span className="text-2xl hover:scale-110 transition-all duration-300">🏆</span>
            </motion.div>
          </motion.div>
        </div>
      </MaxWidthWrapper >
    </div >

  )
}

export default AboutSection