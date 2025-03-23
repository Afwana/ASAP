"use client";

import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const { login, loading, error } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(formData.email, formData.password);
  };

  return (
    <div className="flex items-center justify-center h-screen w-full bg-white">
      <div className="w-1/3 p-5">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
              defaultValue={"abhishekshankar123@gmail.com"}
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
              defaultValue={"12345678"}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-[#F26F22] text-white p-2 rounded disabled:bg-[#F26F22]">
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-center text-sm text-blue-500 mt-2">
          Don&apos;t you have an account?{" "}
          <span className="underline" onClick={() => router.push("/register")}>
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
