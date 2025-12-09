"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../admin/navbar";
import Footer from "../components/Footer";

export default function AdminDashboard() {
  const [allOrders, setAllOrders] = useState({});
  const [userList, setUserList] = useState([]);

  // Ambil data pesanan & daftar user saat halaman dibuka
  useEffect(() => {
    // === Pesanan ===
    let savedOrders = JSON.parse(localStorage.getItem("orders")) || [];

    // Jika format lama array → convert ke format objek berdasarkan email
    if (Array.isArray(savedOrders)) {
      const email = localStorage.getItem("loggedInEmail") || "guest@example.com";
      savedOrders = { [email]: savedOrders };
      localStorage.setItem("orders", JSON.stringify(savedOrders));
    }
    setAllOrders(savedOrders);

    // === Daftar User Terdaftar ===
    const users = JSON.parse(localStorage.getItem("users")) || [];
    setUserList(users);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInEmail");
    localStorage.removeItem("role");
    window.location.href = "/login";
  };

  const handleDelete = (userEmail, index) => {
    const updated = { ...allOrders };
    updated[userEmail].splice(index, 1);
    if (updated[userEmail].length === 0) delete updated[userEmail];
    localStorage.setItem("orders", JSON.stringify(updated));
    setAllOrders(updated);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[380px] flex justify-center items-center text-center overflow-hidden">
        <img src="/arung-jeram.jpeg" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-5xl font-extrabold text-gray-900">Admin Dashboard</h1>
          <p className="mt-3 text-lg text-gray-800">Kelola pesanan & lihat pengguna terdaftar</p>

          <button
            onClick={handleLogout}
            className="mt-6 bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition shadow-lg"
          >
            Logout
          </button>
        </motion.div>
      </section>

      {/* ====== DAFTAR USER TERDAFTAR ====== */}
      <main className="container mx-auto p-8">
        <div className="mb-16 bg-white shadow-lg p-7 rounded-2xl border">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-2">
            👤 Daftar User Terdaftar
          </h2>

          {userList.length === 0 ? (
            <p className="text-gray-600 text-center text-lg">Belum ada user yang mendaftar.</p>
          ) : (
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 border font-semibold">#</th>
                  <th className="p-3 border font-semibold">Email</th>
                </tr>
              </thead>
              <tbody>
                {userList.map((u, i) => (
                  <tr key={i}>
                    <td className="p-3 border text-center">{i + 1}</td>
                    <td className="p-3 border">{u.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* ====== DAFTAR PESANAN ====== */}
        {Object.keys(allOrders).length === 0 ? (
          <p className="text-gray-600 text-center text-xl font-medium">
            ❌ Belum ada pesanan masuk.
          </p>
        ) : (
          Object.keys(allOrders).map((userEmail) => (
            <div key={userEmail} className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                🧍 Pesanan dari: {userEmail}
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {allOrders[userEmail].map((order, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200"
                  >
                    <h3 className="text-xl font-bold">{order.name}</h3>
                    <p className="mt-1 text-gray-600">📅 {order.date}</p>
                    <p className="text-gray-600">⏰ {order.time}</p>
                    <p className="text-gray-700 font-semibold mt-2">👥 {order.people} orang</p>

                    <button
                      onClick={() => handleDelete(userEmail, idx)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition mt-5 w-full font-semibold"
                    >
                      Hapus Pesanan
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          ))
        )}
      </main>

      <Footer />
    </div>
  );
}
