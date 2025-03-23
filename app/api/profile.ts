import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

// Fetch user profile
export const getProfile = async (userId: string) => {
  return API.get(`/profile/${userId}`).then((res) => res.data.user);
};

// Update profile
export const updateProfile = async (formData: FormData) => {
  return API.put("/profile/update", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  }).then((res) => res.data);
};
