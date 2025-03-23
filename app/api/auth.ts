import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

// Register
export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  return API.post("/auth/register", data).then((res) => res.data);
};

// Login
export const loginUser = async (data: { email: string; password: string }) => {
  return API.post("/auth/login", data).then((res) => res.data);
};

// Logout
export const logoutUser = async () => {
  return API.post("/auth/logout").then((res) => res.data);
};

// Get logged-in user data
export const getUser = async () => {
  return API.get("/auth/user").then((res) => res.data.user);
};
