import Marquee from "react-fast-marquee";
import { SliderImagesData } from "@/lib/constants";
import { LinkIconBtn } from "./ui/link-icon-btn";
import { Link } from "react-router";
import { GithubIconBtn1 } from "./ui/github-icon-btn1";

const ImagesSliderSection = () => {
  return (
    <>
      <Marquee pauseOnHover autoFill>
        {SliderImagesData.map((item) => (
          <div className="hover:scale-105 transition-transform duration-500 py-4 relative group"> 
            <img
              className="h-100 mx-4"
              src={item.image}
              alt="Slider_Image"
            />
            <div className="bg-black/50 m-4 rounded-3xl absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-row gap-1 justify-center items-center">
              {
                item.projectUrl ?
                <Link
                  target="_blank"
                  to={item.projectUrl}
                >
                  <LinkIconBtn />
                </Link>
                  : null
              }
              <Link
                target="_blank"
                to={item.githubUrl}
              >
                <GithubIconBtn1 />
              </Link>
            </div>
          </div>
        ))}
      </Marquee>
      <Marquee pauseOnHover autoFill direction="right" className="lg:py-4 hidden lg:block">
        {SliderImagesData.map((item) => (
          <div className="hover:scale-105 transition-transform duration-500 py-4 relative group"> 
            <img
              className="h-100 mx-4 hidden lg:block"
              src={item.image}
              alt="Slider_Image"
            />
            <div className="bg-black/50 m-4 rounded-3xl absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-row gap-1 justify-center items-center">
              {
                item.projectUrl ?
                <Link
                  target="_blank"
                  to={item.projectUrl}
                >
                  <LinkIconBtn />
                </Link>
                  : null
              }
              <Link
                target="_blank"
                to={item.githubUrl}
              >
                <GithubIconBtn1 />
              </Link>
            </div>
          </div>
        ))}
      </Marquee>
    </>
  );
};

export default ImagesSliderSection;
