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

import { SiTailwindcss, SiNextdotjs,SiMysql , SiPostgresql } from "react-icons/si";
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
            <h3 className="font-bold text-4xl text-center">{skills.title}</h3>
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
      </div>
    </motion.div>
  );
};

export default Resume;
