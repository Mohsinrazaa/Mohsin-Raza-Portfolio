import MaxWidthWrapper from './max-width-wrapper'
import { FooterSectionHeading, fullName, LinkedInIcon, LinkedInProfile } from '@/lib/constants';
import { LetsTalkBtn } from './ui/lets-talk-btn';

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  
  return (
    <div className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-myPalette9 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-myPalette9 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-myPalette9 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-myPalette9 rounded-full animate-bounce delay-700"></div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-myPalette9/5 to-myPalette9/10"></div>
      
      <MaxWidthWrapper>
        <div className='pt-10 relative z-10'>
          {/* Main footer card with enhanced animations */}
          <div className='bg-myPalette9 rounded-3xl flex flex-col justify-center items-center p-10 relative overflow-hidden group transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl'>
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-myPalette1 rounded-full transform group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-myPalette1 rounded-full transform group-hover:scale-110 transition-transform duration-700 delay-100"></div>
            </div>
            
            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-6 left-6 w-2 h-2 bg-myPalette1 rounded-full animate-ping"></div>
              <div className="absolute top-12 right-8 w-1 h-1 bg-myPalette1 rounded-full animate-ping delay-500"></div>
              <div className="absolute bottom-8 left-12 w-1.5 h-1.5 bg-myPalette1 rounded-full animate-ping delay-1000"></div>
              <div className="absolute bottom-12 right-6 w-1 h-1 bg-myPalette1 rounded-full animate-ping delay-700"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 text-center">
              <p className='text-myPalette1 text-4xl font-bold font-myMainFont mb-2 transform transition-all duration-300 group-hover:scale-105'>
                {FooterSectionHeading}
              </p>
              
              {/* Animated underline */}
              <div className="h-1 bg-myPalette1 mx-auto rounded-full transform origin-left transition-all duration-500 group-hover:scale-x-110" 
                   style={{ width: '60px' }}></div>
              
              <div className='flex flex-row items-center justify-center mt-6 transform transition-all duration-300 hover:scale-105'>
                <a href="https://wa.me/+923034020491?text=Hello, How can I help you?" target='_blank'>
                  <LetsTalkBtn />
                </a>
              </div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-myPalette1/10 via-transparent to-myPalette1/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          {/* Bottom section with enhanced styling */}
          <div className='flex flex-row gap-3 justify-center items-center py-6 relative'>
            {/* Animated separator line */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-myPalette9 to-transparent"></div>
            
            {/* Copyright text with hover effect */}
            <p className='text-myPalette9 text-sm font-myMainFont transition-all duration-300 hover:text-myPalette9/80 hover:scale-105'>
              © {year} {fullName}
            </p>
            
            {/* LinkedIn icon with enhanced hover effects */}
            <a href={LinkedInProfile} target='_blank' className="group relative">
              <div className="absolute inset-0 bg-myPalette9 rounded-full scale-0 group-hover:scale-110 transition-transform duration-300"></div>
              <img
                className='h-5 aspect-square relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:brightness-0 group-hover:invert filter'
                src={LinkedInIcon}
                alt='LinkedIn-Icon'
              />
              
              {/* Ripple effect on hover */}
              <div className="absolute inset-0 rounded-full border-2 border-myPalette9 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </a>
          </div>
          
          {/* Animated bottom border */}
          <div className="h-1 bg-gradient-to-r from-transparent via-myPalette9 to-transparent opacity-30 animate-pulse"></div>
        </div>
      </MaxWidthWrapper>
      
      {/* Scroll-triggered animation styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default Footer