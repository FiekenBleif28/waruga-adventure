// File: /src/app/dashboard/page.js

"use client"; // Diperlukan jika menggunakan state atau event handler di Next.js App Router

import Link from 'next/link';

// Asumsi Anda memiliki fungsi untuk menangani proses logout
const handleLogout = () => {
  // Lakukan logika logout di sini:
  // 1. Hapus token/session dari Local Storage atau Cookies.
  // 2. Redirect pengguna ke halaman login atau home.
  console.log("User logged out");
  // Contoh redirect:
  // window.location.href = '/login'; 
};

export default function DashboardPage() {
  const heroImageStyle = {
    // Sesuaikan path gambar dengan lokasi di folder public Anda
    backgroundImage: "url('/hero-dashboard.jpeg')", 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ========================================
        1. KOMPONEN NAVBAR (Header) 
        - Ganti tombol Login/Register menjadi Logout 
        ========================================
      */}
      {/* *CATATAN: Anda mungkin perlu mengimpor komponen Navbar Anda 
        dan mengganti link-nya di sana, atau membuatnya di sini jika 
        Navbar Anda belum mendukung tombol Logout.*
      */}
      <header className="absolute top-0 left-0 w-full z-10 p-6 flex justify-between items-center text-white">
        <div className="text-3xl font-bold tracking-wider text-teal-400">
          TRAVOSCA {/* Ganti dengan nama brand Anda jika perlu */}
        </div>
        <nav className="space-x-6 hidden md:flex">
          {/* Contoh Menu */}
          <Link href="/" className="hover:text-teal-400 transition duration-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-teal-400 transition duration-300">
            About Us
          </Link>
          <Link href="/destinations" className="hover:text-teal-400 transition duration-300">
            Destinations
          </Link>
          {/* Tombol Logout */}
          <button 
            onClick={handleLogout} 
            className="text-white hover:text-red-400 transition duration-300 font-semibold"
          >
            Logout
          </button>
        </nav>
      </header>

      {/* ========================================
        2. HERO SECTION (Tampilan Utama)
        ========================================
      */}
      <section 
        className="relative h-[600px] flex items-center justify-start text-white" 
        style={heroImageStyle}
      >
        {/* Overlay gelap untuk membuat teks lebih mudah dibaca */}
        <div className="absolute inset-0 bg-black opacity-30"></div> 

        {/* Konten Hero di Lapisan Depan */}
        <div className="relative z-10 ml-10 p-4 max-w-xl">
          {/* Box Harga */}
          <div className="bg-white text-gray-800 py-2 px-4 inline-block font-bold mb-6 text-xl">
            From $399.00
          </div>
          
          <p className="text-xl mb-2 font-light">Search Your Next</p>
          
          {/* Judul Utama */}
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight tracking-tighter">
            DREAM <br />
            VACATION
          </h1>
          
          {/* Subteks */}
          <p className="text-lg mt-4 mb-8 font-light border-l-4 border-teal-400 pl-4">
            Explore Beautiful Destination Around The World
          </p>

          {/* Tombol Book Now */}
          <Link 
            href="/booking" 
            className="bg-teal-400 hover:bg-teal-500 text-white font-semibold py-3 px-8 transition duration-300 inline-flex items-center"
          >
            BOOK NOW 
            {/* Ikon panah kanan */}
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </Link>
        </div>
      </section>

      {/* ========================================
        3. CONTENT LAINNYA DI DASHBOARD (Opsional)
        ========================================
      */}
      <main className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Welcome to Your Dashboard!</h2>
        <p className="text-gray-600">This is where your personalized content will go.</p>
      </main>
    </div>
  );
}