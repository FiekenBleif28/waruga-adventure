"use client";

import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CardAdventure from "./components/CardAdventure"; // Asumsi CardAdventure ada

// Data Kartu Petualangan
const adventureCards = [
  {
    title: "Classic Rafting",
    description: "Petualangan santai dan menyenangkan untuk semua.",
    hideButton: true,
    shadowClass: "shadow-2xl shadow-blue-400/50 hover:shadow-blue-400/80 transition-shadow duration-500",
    borderColor: "border-2 border-blue-500/80",
  },
  {
    title: "Rafting Extreme",
    description: "Pengalaman menantang dengan jeram kelas tinggi!",
    hideButton: true,
    shadowClass: "shadow-2xl shadow-gray-400/50 hover:shadow-gray-400/80 transition-shadow duration-500",
    borderColor: "border-2 border-gray-300/80",
  },
  {
    title: "Family Adventure",
    description: "Cocok untuk keluarga, aman dan penuh keseruan.",
    hideButton: true,
    shadowClass: "shadow-2xl shadow-green-400/50 hover:shadow-green-400/80 transition-shadow duration-500",
    borderColor: "border-2 border-green-500/80",
  },
];


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Navbar />

      <main className="flex-grow">

        {/* HERO - Ditingkatkan menjadi h-[700px] untuk menampung overlap kartu di bagian bawah */}
        <section className="relative h-[650px] md:h-[700px] flex justify-center items-center overflow-hidden">
          <img
            src="/arung-jeram.jpeg"
            alt="Sungai"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>

          {/* Konten teks diposisikan di tengah atas */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-6 mt-[-100px] md:mt-0" 
            // mt-[-100px] agar teks tidak terlalu dekat dengan kartu yang mengambang
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 drop-shadow">
              Waruga Adventure
            </h1>
            <p className="mt-3 text-lg md:text-2xl text-gray-800 font-medium max-w-2xl mx-auto drop-shadow">
              Nikmati pengalaman arung jeram terbaik di Sulawesi Utara — seru, aman, dan tak terlupakan.
            </p>

            <motion.a
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.92 }}
  href="/login"
  className="
    group relative mt-8 inline-block px-10 py-3 rounded-full font-semibold
    text-white tracking-wide
    backdrop-blur-xl bg-white/5
    border border-white/30
    shadow-[0_0_25px_rgba(255,255,255,0.15)]
    overflow-hidden
  "
>
  {/* deeper glass inner shine */}
  <span
    className="absolute inset-0 bg-white/5 rounded-full  
               shadow-inner shadow-white/10"
  />

  {/* shiny highlight moving diagonally */}
  <span
    className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent
               opacity-30 group-hover:opacity-60
               animate-[shine_4s_linear_infinite] rounded-full"
  />

  {/* soft glow on hover */}
  <span
    className="absolute inset-0 rounded-full bg-white/10 
               opacity-0 group-hover:opacity-20 
               transition duration-500 blur-2xl"
  />

  <span className="relative z-10">Book Now</span>
</motion.a>
          </motion.div>
        </section>

        {/* ADVENTURE CARDS - Tampilan Horizontal & Mengambang */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          // grid-cols-1 (mobile) -> md:grid-cols-3 (desktop)
          // max-w-7xl mx-auto untuk membatasi lebar dan centering
          // -mt-24 untuk efek mengambang / overlap
          className="p-6 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-5 -mt-1 relative z-20 max-w-7xl mx-auto"
        >
          {adventureCards.map((card, index) => (
            <CardAdventure
              key={index}
              title={card.title}
              description={card.description}
              hideButton={card.hideButton}
              shadowClass={card.shadowClass}
              borderColor={card.borderColor}
            />
          ))}
        </motion.section>

        {/* ABOUT - Ditambahkan margin-top agar tidak bertabrakan dengan kartu */}
        <section className="pt-24 p-6 md:p-16 text-center text-gray-700 max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Waruga Adventure
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg leading-relaxed max-w-3xl mx-auto"
          >
            Kami adalah penyedia wisata arung jeram profesional dengan lebih
            dari <span className="font-semibold text-blue-700">10 tahun pengalaman</span>.
            Mengutamakan keselamatan dan kenyamanan, kami menyediakan instruktur
            berlisensi, peralatan premium, dan pelayanan terbaik untuk semua pengunjung.
          </motion.p>

          {/* Decorative line */}
          <div className="w-4/5 mx-auto h-[1.5px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mt-10"></div>
        </section>

      </main>

      <Footer />
    </div>
  );
}