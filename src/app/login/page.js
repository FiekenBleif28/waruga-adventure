"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiUser, FiLock } from "react-icons/fi";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({ user: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Prepare payload: trim, normalize email if needed
    let userInput = (form.user || "").trim();
    const password = form.password;

    if (!userInput || !password) {
      setError("Isi semua field.");
      setLoading(false);
      return;
    }

    // Jika terlihat seperti email, lowercase-kan (opsional tapi disarankan)
    if (userInput.includes("@")) {
      userInput = userInput.toLowerCase();
    }

    const payload = { user: userInput, password };

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // Read response body (debug) and status
      const data = await res.json();
      console.debug("LOGIN RESULT:", res.status, data);

      if (!res.ok) {
        // Jika backend mengirim message, tampilkan
        setError(data?.message || "Login gagal");
        setLoading(false);
        return;
      }

      // sukses: optional setLoading(false) sebelum navigasi
      setLoading(false);
      // redirect ke halaman user
      router.push("/user");
    } catch (err) {
      // network / unexpected error
      console.error("LOGIN ERROR:", err);
      setError("Terjadi kesalahan koneksi. Coba lagi.");
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-5 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/arung-jeram.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      <div className="relative bg-white/30 p-7 rounded-3xl shadow-2xl border border-gray-300 max-w-lg w-full">
        <h1 className="text-center text-2xl font-bold mb-10">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8" aria-label="login-form">
          {/* Username / Email */}
          <div className="relative">
            <FiUser className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 text-2xl" />
            <input
              type="text"
              name="user"
              placeholder="Username or Email"
              value={form.user}
              onChange={handleChange}
              required
              autoComplete="username"
              className="w-full pl-16 pr-4 py-4 text-lg rounded-xl border border-gray-300"
              aria-label="username-or-email"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FiLock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 text-2xl" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
              className="w-full pl-16 pr-4 py-4 text-lg rounded-xl border border-gray-300"
              aria-label="password"
            />
          </div>

          {error && <p className="text-red-500 text-center" role="alert">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 disabled:opacity-60"
            aria-busy={loading}
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>

        <p className="text-center mt-8 text-lg">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600 font-semibold hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
