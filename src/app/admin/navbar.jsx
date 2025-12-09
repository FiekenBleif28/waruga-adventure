"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 backdrop-blur-xl bg-gradient-to-r from-[#0d213a]/60 via-[#14345a]/60 to-[#0d213a]/60 shadow-lg border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6 text-white">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-300 drop-shadow-[0_0_8px_#00d0ff]">
          WARUGA
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-10 text-sm font-semibold">
          <li className="hover:text-cyan-300 transition hover:scale-105"><Link href="/">Home</Link></li>
          <li className="hover:text-cyan-300 transition hover:scale-105"><Link href="/adventure">Adventure</Link></li>
          <li className="hover:text-cyan-300 transition hover:scale-105"><Link href="/about">About</Link></li>
          <li className="hover:text-cyan-300 transition hover:scale-105"><Link href="/contact">Contact</Link></li>
        </ul>

        {/* Profile / Login */}
        <Link
          href="/login"
          className="hidden md:block bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 rounded-full font-semibold text-sm shadow-lg transition hover:scale-105 hover:shadow-cyan-400/40"
        >
          Login
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl hover:text-cyan-300 transition"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#11253f]/90 backdrop-blur-xl shadow-xl border-t border-white/10 py-6 animate-fade-in">
          <ul className="flex flex-col items-center gap-6 text-white font-semibold">
            <li onClick={() => setOpen(false)}><Link href="/">Home</Link></li>
            <li onClick={() => setOpen(false)}><Link href="/adventure">Adventure</Link></li>
            <li onClick={() => setOpen(false)}><Link href="/about">About</Link></li>
            <li onClick={() => setOpen(false)}><Link href="/contact">Contact</Link></li>
            <li onClick={() => setOpen(false)}>
              <Link
                href="/login"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 rounded-full shadow-lg transition hover:scale-105"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
