"use client";

import { motion } from "framer-motion";
import "swiper/css";

const projects = [
  {
    id: "01",
    category: "Web Development",
    title: "Sistem Informasi Klinik",
    description:
      "Sistem Informasi Klinik adalah solusi digital yang dirancang untuk mengelola data pasien, rekam medis, serta operasional klinik secara efisien dan terstruktur. Dengan adanya integrasi ke SATUSEHAT, sistem ini dapat menghubungkan data pasien dengan platform kesehatan nasional, memungkinkan pertukaran data medis yang lebih aman, cepat, dan akurat antar fasilitas kesehatan.",
    image: "/assets/work/thumb8.png",
    techStack: [
      "https://svgl-badge.vercel.app/api/Framework/Laravel?theme=dark",
      "https://svgl-badge.vercel.app/api/Framework/Bootstrap?theme=dark",
    ],
    link: "kliniksehat.id",
  },
  {
    id: "02",
    category: "Web Development",
    title: "WEB Anti Ngoding",
    description:
      "Anti Ngoding adalah aplikasi pembelajaran pemrograman yang dirancang khusus untuk pemula yang ingin memulai petualangannya di dunia coding. Dengan pendekatan yang menyenangkan dan interaktif, Anti Ngoding membuat proses belajar coding menjadi lebih mudah dan tidak membosankan.",
    image: "/assets/work/thumb7.png",
    techStack: [
      "https://svgl-badge.vercel.app/api/Framework/Laravel?theme=dark",
      "https://svgl-badge.vercel.app/api/Framework/Bootstrap?theme=dark",
    ],
    link: "antingoding.id",
  },

  {
    id: "03",
    category: "Web Development",
    title: "WEB SISTEM PAKAR",
    description:
      "Aplikasi Sistem Pakar Diagnosa OPT Semangka adalah aplikasi untuk membantu petani dalam mengidentifikasi OPT yang menyerang tanaman semangka. Memanfaatkan teknologi kecerdasan buatan, web ini mampu memberikan diagnosa yang akurat.",
    image: "/assets/work/thumb1.png",
    techStack: [
      "https://svgl-badge.vercel.app/api/Framework/Laravel?theme=dark",
      "https://svgl-badge.vercel.app/api/Framework/Bootstrap?theme=dark",
    ],
    link: "sistempakar.id",
  },
  {
    id: "04",
    category: "Web Development",
    title: "WEB Order Kuliner",
    description:
      "Web Order Kuliner adalah layanan pesan antar makanan online yang memungkinkan pengguna untuk memesan makanan dari berbagai restoran melalui internet. Biasanya, pengguna dapat mencari restoran berdasarkan lokasi, jenis makanan, atau rating. ",
    image: "/assets/work/thumb5.png",
    techStack: [
      "https://svgl-badge.vercel.app/api/Framework/Laravel?theme=dark",
      "https://svgl-badge.vercel.app/api/Framework/Bootstrap?theme=dark",
    ],
    link: "orderfood.id",
  },
  {
    id: "05",
    category: "Web Development",
    title: "WEB PORTAL BERITA",
    description:
      "Web Portal Berita adalah platform berita daring yang dirancang untuk memberikan informasi terkini dan terpercaya kepada pengguna. Situs ini menyediakan berbagai kategori berita mulai dari politik, ekonomi, teknologi dengan tampilan yang bersih dan user-friendly.",
    image: "/assets/work/thumb2.png",
    techStack: [
      "https://svgl-badge.vercel.app/api/Framework/Laravel?theme=dark",
      "https://svgl-badge.vercel.app/api/Framework/Bootstrap?theme=dark",
    ],
    link: "portalberita.id",
  },
  {
    id: "06",
    category: "Web Development",
    title: "WEB ABSENS QR CODE",
    description:
      "Aplikasi Web Absensi Sekolah dengan QR Code adalah solusi inovatif untuk mempermudah proses absensi siswa di sekolah. Dengan memanfaatkan teknologi QR Code, aplikasi ini memungkinkan guru dan siswa untuk melakukan absensi dengan cepat dan akurat.",
    image: "/assets/work/thumb3.png",
    techStack: [
      "https://svgl-badge.vercel.app/api/Framework/Laravel?theme=dark",
      "https://svgl-badge.vercel.app/api/Framework/Bootstrap?theme=dark",
    ],
    link: "absenqrcode.id",
  },
  {
    id: "07",
    category: "Web Development",
    title: "WEB UJIAN CBT SEKOLAH",
    description:
      "Aplikasi Web Ujian CBT Sekolah adalah solusi inovatif yang dirancang untuk menyederhanakan dan meningkatkan efisiensi proses ujian di sekolah. Dengan menggunakan teknologi berbasis komputer, aplikasi ini menggantikan ujian berbasis kertas tradisional.",
    image: "/assets/work/thumb4.png",
    techStack: [
      "https://svgl-badge.vercel.app/api/Framework/Laravel?theme=dark",
      "https://svgl-badge.vercel.app/api/Framework/Bootstrap?theme=dark",
    ],
    link: "ujiancbt.id",
  },
];

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
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
              key={project.id}
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
                <h1 className="text-2xl font-bold mb-4 text-start">
                  {project.title}
                </h1>
                <p className="text-slate-500">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-8">
                  {project.techStack.map((tech, index) => (
                    <img key={index} src={tech} alt={`Tech stack ${index}`} />
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <a
                  href={`https://${project.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
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
