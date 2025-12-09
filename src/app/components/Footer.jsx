"use client";

import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-br from-[#0e1b2b] via-[#101e37] to-[#182a49] text-white py-14 px-6">
      
      {/* Neon Glow Moving Background */}
      <div className="absolute inset-0 opacity-30 animate-pulse bg-[radial-gradient(circle_at_50%_50%,#00eaff33_0%,transparent_70%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center gap-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 drop-shadow-[0_0_12px_#00eaff]">
          WARUGA ADVENTURE
        </h2>

        <p className="text-gray-300 text-sm md:text-base max-w-lg">
          Rasakan sensasi arung jeram paling epik & penuh adrenalin di Minahasa Utara — experience that hits different ⚡
        </p>

        {/* Social Links */}
        <div className="flex gap-8 mt-4 text-3xl">
          <a
            href="https://www.instagram.com/waruga_adventure"
            target="_blank"
            className="hover:text-pink-400 hover:scale-125 transition drop-shadow-[0_0_6px_#ff7ae9]"
          ><FaInstagram /></a>

          <a
            href="https://www.facebook.com/waruga_adventure"
            target="_blank"
            className="hover:text-blue-400 hover:scale-125 transition drop-shadow-[0_0_6px_#7ab8ff]"
          ><FaFacebook /></a>

          <a
            href="https://twitter.com/waruga_adventure"
            target="_blank"
            className="hover:text-sky-400 hover:scale-125 transition drop-shadow-[0_0_6px_#7de3ff]"
          ><FaTwitter /></a>

          <a
            href="https://wa.me/628123456789"
            target="_blank"
            className="hover:text-green-400 hover:scale-125 transition drop-shadow-[0_0_6px_#77ff8e]"
          ><FaWhatsapp /></a>
        </div>

        {/* Divider Line */}
        <div className="w-3/4 md:w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40 mt-6"></div>

        {/* Copyright */}
        <p className="text-gray-400 text-xs tracking-widest">
          © 2025 Waruga Adventure — Powered by Mountain & Adrenaline
        </p>
      </div>
    </footer>
  );
}
