import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { BASE_URL } from "../utils/util";

const LoginForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/login`, formData);
      localStorage.setItem("token", res.data.accessToken);
      alert("Berhasil login! Selamat datang kembali ✨");
      navigate("/notes");
    } catch (err) {
      alert(err.response?.data?.message || "Login gagal. Periksa kembali username/password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-cyan-100 to-sky-200 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-10 rounded-xl shadow-xl flex flex-col items-center space-y-6"
      >
        <h1 className="text-2xl font-bold text-cyan-700">Login ke Naws Notes</h1>
        <p className="text-gray-600 text-sm">Masukkan informasi login Anda untuk melanjutkan</p>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <button
          type="submit"
          className="w-full bg-cyan-600 text-white py-2 rounded-md font-semibold hover:bg-cyan-700 transition"
        >
          Login
        </button>

        <p className="text-sm text-gray-500">
          Belum punya akun?{' '}
          <Link to="/register" className="text-cyan-700 hover:underline font-medium">
            Daftar di sini
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
