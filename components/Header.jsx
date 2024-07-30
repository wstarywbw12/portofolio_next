"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Ari<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Button onClick={openModal}>Hire Me</Button>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
          <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4 my-10">
            <h2 className="text-2xl font-bold mb-4 text-primary">Hire Me</h2>
            <p className="text-gray-700 mb-4  text-justify">
            Buka WhatsApp Anda. Kirim pesan dengan format Hai Ari. Saya ingin memperkerjakan Anda dengan gaji Rp15.000.000 s.d. Rp*isi sendiri* untuk posisi *isi sendiri*. Catatan : *isi sendiri* lalu kirim ke 081250353656. Bisa juga melalui chat facebook atau dm instagram atau kirim lewat email (wistuariwibowo6@gmail.com).
            </p>
            <Button className="bg-red-500 hover:bg-red-700 text-white mt-4" onClick={closeModal}>
              Close
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
