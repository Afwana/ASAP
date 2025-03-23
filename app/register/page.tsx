"use client";

import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const router = useRouter();
  const { register, loading, error } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await register(
      formData.name,
      formData.userName,
      formData.email,
      formData.password
    );
  };

  return (
    <div className="flex items-center justify-center h-screen w-full bg-white">
      <div className="w-1/3 p-5">
        <h2 className="text-2xl font-semibold mb-4 text-black">Register</h2>
        {error && <p className="text-red-500 text-xs">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="label">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Full Name"
              className="input-box"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="userName" className="label">
              User Name
            </label>
            <input
              type="text"
              name="userName"
              onChange={handleChange}
              placeholder="user name"
              className="input-box"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
              className="input-box"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
              className="input-box"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-[#F26F22] text-white p-2 rounded disabled:bg-[#F26F22]">
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <p className="text-center text-sm text-blue-500 mt-2">
          Already have an account?{" "}
          <span className="underline" onClick={() => router.push("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
