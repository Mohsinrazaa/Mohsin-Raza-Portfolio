import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import ImagesSliderSection from "@/components/images-slider-section";
import ProjectsSection from "@/components/projects-section";
import TestimonialsSection from "@/components/testimonials-section";
import ExperienceSection from "@/components/experience-section";
import AboutSection from "@/components/about-section";

const Home = () => {
  // const [time, setTime] = useState(moment().format("LTS"));

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime(moment().format("LTS"));
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div className="flex flex-col bg-myBackground">
      <SmoothCursor />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_right,#dee2e6_1px,transparent_1px),linear-gradient(to_bottom,#dee2e6_1px,transparent_1px)] bg-[size:45px_44px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_50%,transparent_100%)]" />
      <Navbar />
      <HeroSection />
      <ImagesSliderSection />
      <ExperienceSection />
      <ProjectsSection />
      <AboutSection />
      <TestimonialsSection />
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      <p>Scroll</p>
      {/* <div className="absolute z-[4] bottom-2 right-2 flex gap-2 items-end justify-end">
        <ModeToggleBtn />
        <div className="border-2 border-myPalette1 rounded-full px-2 py-0.5">
          <p className="text-myPalette1 text-md font-medium font-myMainFont">
            {time}
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
