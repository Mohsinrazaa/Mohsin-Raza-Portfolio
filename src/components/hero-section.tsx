import { HeroSectionHeading, HeroSectionSubHeading, LinkedInProfile } from "@/lib/constants";
import MaxWidthWrapper from "./max-width-wrapper";
import { MyWorkBtn } from "./ui/my-work-btn";
import { LetsConnectBtn } from "./ui/lets-connect-btn";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  return (
    <div id="Home" className="z-[2] flex pb-25 w-full justify-center items-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-myPalette9/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-myPalette9/15 rounded-full animate-bounce animation-delay-300"></div>
        <div className="absolute bottom-32 left-16 w-20 h-20 bg-myPalette9/8 rounded-full animate-pulse animation-delay-600"></div>
        <div className="absolute bottom-20 right-12 w-14 h-14 bg-myPalette9/12 rounded-full animate-bounce animation-delay-900"></div>
        
        {/* Floating squares */}
        <div className="absolute top-32 left-1/4 w-8 h-8 bg-myPalette9/10 transform rotate-45 animate-spin-slow"></div>
        <div className="absolute top-60 right-1/4 w-6 h-6 bg-myPalette9/15 transform rotate-45 animate-spin-slow animation-delay-500"></div>
        <div className="absolute bottom-40 left-1/3 w-10 h-10 bg-myPalette9/8 transform rotate-45 animate-spin-slow animation-delay-800"></div>
        
        {/* Moving gradient orbs */}
        <div className="absolute top-16 right-16 w-32 h-32 bg-gradient-to-br from-myPalette9/20 to-transparent rounded-full animate-pulse blur-xl"></div>
        <div className="absolute bottom-16 left-20 w-40 h-40 bg-gradient-to-br from-myPalette9/15 to-transparent rounded-full animate-pulse blur-2xl animation-delay-700"></div>
        
        {/* Animated lines */}
        <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-myPalette9/20 to-transparent animate-slide-right"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-myPalette9/15 to-transparent animate-slide-right animation-delay-400"></div>
        
        {/* Pulsing dots */}
        <div className="absolute top-24 left-24 w-2 h-2 bg-myPalette9/30 rounded-full animate-ping"></div>
        <div className="absolute top-36 right-36 w-1 h-1 bg-myPalette9/40 rounded-full animate-ping animation-delay-200"></div>
        <div className="absolute bottom-36 left-36 w-1.5 h-1.5 bg-myPalette9/35 rounded-full animate-ping animation-delay-500"></div>
        <div className="absolute bottom-24 right-24 w-2 h-2 bg-myPalette9/25 rounded-full animate-ping animation-delay-800"></div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-myPalette9/5 to-transparent pointer-events-none"></div>
      
      <MaxWidthWrapper>
        <div className="mt-40 md:mt-52 mb-4 relative z-10">
          {/* Main Heading with enhanced animation */}
          <motion.div
            className="relative text-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.p
              className="text-myPalette9 text-5xl md:text-7xl font-semibold text-center font-myMainFont tracking-tight relative z-10"
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
            
            {/* Animated underline */}
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-myPalette9 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ duration: 0.8, delay: 2 }}
            />
          </motion.div>
          
          {/* Subheading with stagger animation */}
          <motion.p
            className="text-myPalette9 text-base md:text-lg font-medium text-center font-myMainFont my-10 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {HeroSectionSubHeading}
          </motion.p>
          
          {/* Enhanced Button Container */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-6 justify-center relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {/* Enhanced LinkedIn Button */}
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <Link target="_blank" to={LinkedInProfile}>
                <div className="relative overflow-hidden">
                  {/* Button background with animated gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-myPalette9 to-myPalette9/90 rounded-full transition-all duration-300 group-hover:from-myPalette9/90 group-hover:to-myPalette9"></div>
                  
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  {/* Ripple effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-myPalette9/30 scale-0 group-hover:scale-110 transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <LetsConnectBtn />
                  </div>
                </div>
              </Link>
            </motion.div>
            
            {/* Enhanced My Work Button */}
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <a href="/#Work">
                <div className="relative overflow-hidden">
                  {/* Button background with animated border */}
                  <div className="absolute inset-0 border-2 border-myPalette9 rounded-full transition-all duration-300 group-hover:border-myPalette9/70"></div>
                  
                  {/* Animated fill effect */}
                  <div className="absolute inset-0 bg-myPalette9 rounded-full scale-0 group-hover:scale-100 transition-all duration-300 origin-center"></div>
                  
                  {/* Animated glow */}
                  <div className="absolute inset-0 rounded-full bg-myPalette9/20 blur-lg scale-0 group-hover:scale-125 transition-all duration-500"></div>
                  
                  <div className="relative z-10 group-hover:text-white transition-colors duration-300">
                    <MyWorkBtn />
                  </div>
                </div>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Floating CTA indicator */}
          <motion.div
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-myPalette9/60"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-myPalette9/40 rounded-full flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="w-1 h-3 bg-myPalette9/60 rounded-full mt-2"></div>
            </motion.div>
          </motion.div>
        </div>
      </MaxWidthWrapper>
      
      {/* Custom Styles */}
      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes slide-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        
        .animate-slide-right {
          animation: slide-right 4s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-700 { animation-delay: 0.7s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-900 { animation-delay: 0.9s; }
      `}</style>
    </div>
  );
};

export default HeroSection;