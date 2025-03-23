"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLogin } from "../hooks/useAuth";

const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const loginMutation = useLogin();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await loginMutation.mutateAsync(formData);
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center h-screen w-full bg-white">
      <div className="w-1/3 p-5">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
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
            disabled={loginMutation.isPending}
            className="bg-[#F26F22] text-white p-2 rounded disabled:bg-[#F26F22]">
            {loginMutation.isPending ? "Logging in..." : "Login"}
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
