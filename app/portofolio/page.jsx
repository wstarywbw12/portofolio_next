"use client";

import { FaBootstrap, FaPhp, FaLaravel, FaJs } from "react-icons/fa";

import { useState } from "react";
import { motion } from "framer-motion";
import "swiper/css";

const projects = [
  {
    num: "01",
    category: "Web Development",
    title: "WEB SISTEM PAKAR",
    description:
      "Aplikasi Sistem Pakar Diagnosa OPT Semangka adalah aplikasi untuk membantu petani dalam mengidentifikasi OPT yang menyerang tanaman semangka. Memanfaatkan teknologi kecerdasan buatan, web ini mampu memberikan diagnosa yang akurat.",
    stack: [
      {
        name: "Bootstrap",
        icon: <FaBootstrap />,
      },
      {
        name: "JavaScript",
        icon: <FaJs />,
      },
      {
        name: "PHP",
        icon: <FaPhp />,
      },
      {
        name: "Laravel",
        icon: <FaLaravel />,
      },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://github.com",
    github: "https://github.com",
    link: "sistempakar.id",
  },
  {
    num: "02",
    category: "Web Development",
    title: "WEB PORTAL BERITA",
    description:
      "Web Portal Berita adalah platform berita daring yang dirancang untuk memberikan informasi terkini dan terpercaya kepada pengguna. Situs ini menyediakan berbagai kategori berita mulai dari politik, ekonomi, teknologi dengan tampilan yang bersih dan user-friendly.",
    stack: [
      {
        name: "Bootstrap",
        icon: <FaBootstrap />,
      },
      {
        name: "JavaScript",
        icon: <FaJs />,
      },
      {
        name: "PHP",
        icon: <FaPhp />,
      },
      {
        name: "Laravel",
        icon: <FaLaravel />,
      },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://github.com",
    github: "https://github.com",
    link: "portalberita.id",
  },
  {
    num: "03",
    category: "Web Development",
    title: "WEB ABSENSI SEKOLAH",
    description:
      "Aplikasi Web Absensi Sekolah dengan QR Code adalah solusi inovatif untuk mempermudah proses absensi siswa di sekolah. Dengan memanfaatkan teknologi QR Code, aplikasi ini memungkinkan guru dan siswa untuk melakukan absensi dengan cepat dan akurat.",
    stack: [
      {
        name: "Bootstrap",
        icon: <FaBootstrap />,
      },
      {
        name: "JavaScript",
        icon: <FaJs />,
      },
      {
        name: "PHP",
        icon: <FaPhp />,
      },
      {
        name: "Laravel",
        icon: <FaLaravel />,
      },
    ],
    image: "/assets/work/thumb3.png",
    live: "https://github.com",
    github: "https://github.com",
    link: "absensisekolah.id",
  },
  {
    num: "03",
    category: "Web Development",
    title: "WEB UJIAN CBT SEKOLAH",
    description:
      "Aplikasi Web Ujian CBT Sekolah adalah solusi inovatif yang dirancang untuk menyederhanakan dan meningkatkan efisiensi proses ujian di sekolah. Dengan menggunakan teknologi berbasis komputer, aplikasi ini menggantikan ujian berbasis kertas tradisional.",
    stack: [
      {
        name: "Bootstrap",
        icon: <FaBootstrap />,
      },
      {
        name: "JavaScript",
        icon: <FaJs />,
      },
      {
        name: "PHP",
        icon: <FaPhp />,
      },
      {
        name: "Laravel",
        icon: <FaLaravel />,
      },
    ],
    image: "/assets/work/thumb4.png",
    live: "https://github.com",
    github: "https://github.com",
    link: "ujiancbt.id",
  },
];

const Work = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-2 md:mb-10">
          My Projects
        </h2>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-5">
          {projects.map((project) => (
            <div
              key={project.num}
              className="card flex flex-col gap-4 p-4 group"
            >
              <div className="card-img transition-all duration-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full max-w-full object-cover"
                  width={1920}
                  height={1080}
                />
              </div>
              <div className="h-full pt-8 px-4">
                <h1 className="text-2xl font-bold mb-4 text-start">{project.title}</h1>
                <p className="text-slate-500">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-8">
                  <img src="https://svgl-badge.vercel.app/api/Framework/Laravel?theme=dark" />
                  <img src="https://svgl-badge.vercel.app/api/Library/React?theme=dark" />
                  <img src="https://svgl-badge.vercel.app/api/Framework/Tailwind%20CSS?theme=dark" />
                </div>
              </div>
              <div className="mb-4">
                <a
                  href={project.link}
                  target="_blank"
                  className="card-link"
                >
                  <p>Website</p>
                  <p className="text-teal-400">{project.link}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
