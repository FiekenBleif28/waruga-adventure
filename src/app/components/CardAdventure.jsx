import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CardAdventure({ title, description, borderColor, shadowClass, hideButton = false }) {
  // Catatan: 'borderColor' dan 'shadowClass' harus dikirimkan dari Home.js
  // seperti yang kita lakukan sebelumnya (misalnya: border-blue-500/80, shadow-blue-400/50).
  
  return (
    <motion.div
      // Animasi saat kartu muncul
      initial={{ scale: 0.95, y: 20, opacity: 0 }}
      whileInView={{ scale: 1, y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.1 }}
      viewport={{ once: true }}
      
      // Kelas Premium & Glossy
      className={`relative bg-white/70 backdrop-blur-md rounded-2xl p-7 
                  ${borderColor} ${shadowClass} 
                  ring-1 ring-inset ring-blue-100/30
                  hover:scale-[1.03] transition-all duration-300 transform cursor-pointer`}
    >
      
      {/* Glossy Overlay (Elemen Estetik) */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none 
                      bg-gradient-to-br from-white/20 to-transparent opacity-50"></div>

      <h3 className="text-xl font-extrabold text-blue-700 tracking-tight">{title}</h3>
      <p className="text-gray-700 mt-3 text-base">{description}</p>

      {!hideButton && (
        <a
          href="#booking"
          className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 
                     hover:text-blue-800 transition group"
        >
          Pilih Sekarang
          <ChevronRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-0.5" />
        </a>
      )}
    </motion.div>
  );
}