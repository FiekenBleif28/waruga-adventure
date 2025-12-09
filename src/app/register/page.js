"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

export default function RegisterPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const passwordValid = (pw) => {
    return pw.length >= 8 && /[A-Z]/.test(pw) && /[0-9]/.test(pw);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (!passwordValid(password)) {
      setError("Password minimal 8 karakter, harus ada huruf besar dan angka.");
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          username,
          password,            // 👈 sekarang dikirim lengkap
        }),
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.message || "Terjadi kesalahan saat registrasi.");
        return;
      }

      alert("Registrasi berhasil! Silakan login.");
      router.push("/login");

    } catch (err) {
      setError("Tidak dapat terhubung ke server.");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-5 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/arung-jeram.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative bg-white/30 p-7 rounded-3xl shadow-2xl border border-gray-300 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center mb-10">Register</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleRegister} className="flex flex-col gap-8">

          {/* USERNAME */}
          <div className="relative">
            <FiUser className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-2xl" />
            <input
              type="text"
              placeholder="Input Username"
              className="w-full pl-16 pr-4 py-4 text-lg rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* EMAIL */}
          <div className="relative">
            <FiMail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-2xl" />
            <input
              type="email"
              placeholder="Input Email"
              className="w-full pl-16 pr-4 py-4 text-lg rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <FiLock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-2xl" />
            <input
              type="password"
              placeholder="Input Password"
              className="w-full pl-16 pr-4 py-4 text-lg rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="w-full bg-blue-600 text-white py-4 rounded-xl text-xl font-semibold hover:bg-blue-700 transition">
            Register
          </button>
        </form>

        <p className="text-center mt-10 text-lg">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
