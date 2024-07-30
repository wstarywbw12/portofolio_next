"use client";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section className="h-full relative">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 relative z-10 mb-0">
          {/* {text} */}
          <div className="text-center xl:text-left order-2 xl:order-none relative z-10 mb-16">
            <h1 className="text-white mb-4 text-3xl sm:text-5xl lg:text-5xl lg:leading-normal font-extrabold relative z-10">
              <span className="text-accent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Hello, I&apos;m{" "}
              </span>
              <br></br>
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  1000,
                  "FrontEnd Developer",
                  1000,
                  "BackEnd Developer",
                  1000,
                  "Game Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 relative z-10">
              I am a highly
              skilled Full Stack Developer with a background in Informatics
              Engineering, I possess a comprehensive understanding of both
              front-end and back-end technologies.
            </p>
            {/* {button} */}
            <div className="flex flex-col xl:flex-row items-center gap-8 relative z-10">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 relative z-10"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0 relative z-10">
                <Socials
                  containerStyles="flex gap-6 "
                  iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center items-center text-accent text-base hover:bg-accent  hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* {photo} */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 relative z-10">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />

      {/* Lingkaran dengan efek gradient bercahaya */}
      <div className="hidden md:block absolute bottom-20 left-[-70px] w-[250px] h-[250px] bg-accent rounded-full opacity-60 blur-3xl z-0">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-accent via-blue-500 to-accent opacity-100"></div>
      </div>

      {/* Lingkaran dengan efek gradient bercahaya */}
      <div className="hidden md:block absolute top-0 right-[0px] w-[250px] h-[250px] bg-accent rounded-full opacity-60 blur-3xl z-0">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-accent via-purple-500 to-pink-600 opacity-100"></div>
      </div>
    </section>
  );
};

export default Home;
