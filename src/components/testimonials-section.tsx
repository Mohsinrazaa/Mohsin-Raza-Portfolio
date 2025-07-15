import {
  LinkedInProfile,
  testimonialsData,
  TestimonialsSectionHeading,
  TestimonialsSectionSubHeading,
} from "@/lib/constants";
import { motion } from "motion/react";
import { TestimonialsColumn } from "./ui/testimonials-columns-1";
import MaxWidthWrapper from "./max-width-wrapper";
import { LinkedinIcon } from "./ui/linkedin-projects-btn";

const firstColumn = testimonialsData.slice(0, 3);
const secondColumn = testimonialsData.slice(3, 6);
const thirdColumn = testimonialsData.slice(6, 9);

const TestimonialsSection = () => {
  return (
    <div id="Reviews">
      <MaxWidthWrapper>
        <section className="pt-32 pb-20 relative">
          <div className="container z-10 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center mx-auto"
            >
              <div className="relative font-myMainFont text-center flex-1 w-full text-4xl md:text-6xl font-semibold flex justify-center items-center text-myPalette9">
                {TestimonialsSectionHeading}
              </div>
              <span className="text-myPalette9 text-base md:text-lg font-medium text-center font-myMainFont mt-3">
                {TestimonialsSectionSubHeading}
              </span>
              <div className='flex flex-row items-center gap-2 justify-center mt-2 cursor-pointer'>
              <a href={LinkedInProfile} target='_blank'>
                <LinkedinIcon />
              </a>
            </div>
            </motion.div>

            <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[640px] overflow-hidden">
              <TestimonialsColumn testimonials={firstColumn} duration={15} />
              <TestimonialsColumn
                testimonials={secondColumn}
                className="hidden md:block"
                duration={19}
              />
              <TestimonialsColumn
                testimonials={thirdColumn}
                className="hidden lg:block"
                duration={17}
              />
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default TestimonialsSection;
