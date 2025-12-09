"use client";

import { useEffect, useState } from "react";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  
  // 💡 PERBAIKAN: Gunakan path API relatif. 
  // Next.js akan memanggil endpoint ini di domain yang sama (yaitu domain ngrok).
  const API_ENDPOINT = "/api/orders"; 

  useEffect(() => {
    // 💡 Panggilan fetch menggunakan endpoint relatif. 
    // Jika API Route Anda terletak di /api/orders.
    fetch(API_ENDPOINT)
      .then(res => res.json())
      .then(data => setOrders(data))
      .catch(error => console.error("Error fetching orders:", error)); 
  }, []);

  const updateStatus = async (id, status) => {
    // 💡 Panggilan fetch menggunakan endpoint relatif.
    await fetch(`${API_ENDPOINT}/${id}`, { 
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status, read: false }) // notifikasi untuk user
    });

    setOrders(orders.map(o => (o.id === id ? { ...o, status } : o)));
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">📦 Daftar Semua Pesanan</h1>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 border">Email</th>
            <th className="p-3 border">Nama</th>
            <th className="p-3 border">Waktu</th>
            <th className="p-3 border">Jumlah</th>
            <th className="p-3 border">Status</th>
            <th className="p-3 border">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td className="p-3 border">{order.email}</td>
              <td className="p-3 border">{order.name}</td>
              <td className="p-3 border">{order.date} {order.time}</td>
              <td className="p-3 border text-center">{order.people}</td>
              <td className="p-3 border font-semibold">{order.status}</td>
              <td className="p-3 border space-x-2">
                <button onClick={() => updateStatus(order.id, "approved")}
                  className="px-3 py-1 bg-blue-500 text-white rounded">Approve</button>
                <button onClick={() => updateStatus(order.id, "selesai")}
                  className="px-3 py-1 bg-green-600 text-white rounded">Selesai</button>
                <button onClick={() => updateStatus(order.id, "pending")}
                  className="px-3 py-1 bg-gray-500 text-white rounded">Pending</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}