"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 z-50 backdrop-blur-xl bg-gradient-to-r from-[#0d213a]/60 via-[#14345a]/60 to-[#0d213a]/60 shadow-lg border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6 text-white">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-300 drop-shadow-[0_0_8px_#00d0ff]"
        >
          Waruga-Adventure
        </Link>

        {/* Login Button */}
        <Link
          href="/login"
          className="bg-gradient-to-r from-cyan-400 to-blue-600 px-5 py-2 rounded-full font-semibold text-sm shadow-lg transition hover:scale-105 hover:shadow-cyan-400/40"
        >
          Login
        </Link>

      </nav>
    </header>
  );
}
