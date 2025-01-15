"use client";
import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaPhp,
  FaLaravel,
  FaJs,
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { motion } from "framer-motion";

const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, totam?",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <FaLaravel />,
      name: "Laravel",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "ReactJS",
    },
    {
      icon: <FaVuejs />,
      name: "VueJS",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJS",
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJS",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mt-auto mb-5">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="font-bold text-4xl text-center">MY SKILLS</h3>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 xl:gap-[30px]">
            {skills.skillList.map((skill, index) => (
              <li key={index}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                      <div className="text-6xl group-hover:text-accent transition-all group-hover:text-8xl duration-300 ">
                        {skill.icon}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="capitalize">{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            ))}
          </ul>
        </div>

        <div class="container mx-auto mt-10">
          <div className="flex flex-col gap-[30px] text-center xl:text-left mb-5">
            <h3 className="font-bold text-4xl text-center">MY EXPERIENCE</h3>
          </div>
          <div class="relative flex flex-col items-center">
            <div class="absolute h-full border-l-2 border-gray-200 dark:border-gray-700 md:left-1/2 left-1 transform md:-translate-x-1/2"></div>

            <div class="mb-10 flex w-full md:justify-start justify-start">
              <div class="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg relative md:ml-8 md:mr-0 ml-5">
                <span class="md:hidden absolute flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full md:-left-3 -left-7 top-1/2 transform -translate-y-1/2 ring-8 ring-gray-900"></span>
                <span class="hidden md:block absolute  items-center justify-center w-6 h-6 bg-gray-200 rounded-full -right-3 top-1/2 transform -translate-y-1/2 ring-8 ring-gray-900"></span>
                <h3 class="mb-1 text-lg font-semibold text-white">
                  Web Developer
                </h3>
                <div class="flex justify-between align-middle mb-2">
                  <p class="block text-sm font-normal leading-none text-gray-400">PT Disty Teknologi Indonesia</p>
                  <time class="block text-sm font-normal leading-none text-gray-400">
                    08 2024 - 01 2025
                  </time>
                </div>

                <p class="text-justify text-base font-normal text-gray-300">
                  I interned as a web developer, responsible for creating and
                  maintaining web applications. My role includes designing user
                  interfaces, developing server-side logic, managing databases,
                  and writing efficient code.
                </p>
              </div>
            </div>

            <div class="mb-10 flex w-full md:justify-end justify-start">
              <div class="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg relative md:mr-8 md:ml-0 ml-5">
                <span class="absolute flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full md:-left-3 -left-7 top-1/2 transform -translate-y-1/2 ring-8 ring-gray-900"></span>
                <h3 class="mb-1 text-lg font-semibold text-white">
                  Web Developer
                </h3>
                <div class="flex justify-between align-middle mb-2">
                  <p class="block text-sm font-normal leading-none text-gray-400">PT. Winnicode Garuda Teknologi
                  </p>
                  <time class="block text-sm font-normal leading-none text-gray-400">
                    05 2024 - 08 2025
                  </time>
                </div>
                <p class="text-justify text-base font-normal text-gray-300">
                  I interned as a web developer, responsible for creating and
                  maintaining web applications. My role includes designing user
                  interfaces, developing server-side logic, managing databases,
                  and writing efficient code.
                </p>
              </div>
            </div>

            <div class="mb-10 flex w-full md:justify-start justify-start">
              <div class="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg relative md:ml-8 md:mr-0 ml-5">
                <span class="md:hidden absolute flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full md:-left-3 -left-7 top-1/2 transform -translate-y-1/2 ring-8 ring-gray-900"></span>
                <span class="hidden md:block absolute  items-center justify-center w-6 h-6 bg-gray-200 rounded-full -right-3 top-1/2 transform -translate-y-1/2 ring-8 ring-gray-900"></span>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-white">
                  Software Tester
                </h3>
                <div class="flex justify-between align-middle mb-2">
                  <p class="block text-sm font-normal leading-none text-gray-400">Dinas Kesehatan Provinsi JATIM
                  </p>
                  <time class="block text-sm font-normal leading-none text-gray-400">
                    05 2024 - 06 2025
                  </time>
                </div>
                <p class="mb-4 text-justify text-base font-normal text-gray-300">
                  I interned as a Software Tester, responsible for testing the
                  health office information system. My role includes designing
                  and executing test scenarios, identifying and documenting bugs
                  or issues discovered during testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
