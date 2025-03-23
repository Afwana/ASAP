/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

interface ProfileData {
  _id: string;
  name: string;
  userName: string;
  email: string;
  phone?: string;
  profilePicture?: File | null;
}

interface ApiResponse {
  success: boolean;
  message: string;
  user?: ProfileData & { lastUpdated: string };
}

export const useProfile = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [profile, setProfile] = useState<ProfileData | null>(null);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/profile/get", {
        credentials: "include",
      });
      const data: ApiResponse = await response.json();

      if (!data.success) throw new Error(data.message);
      setProfile(data.user || null);
      console.log(data.user);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (profileData: ProfileData) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", profileData.name);
      formData.append("userName", profileData.userName);
      formData.append("email", profileData.email);
      if (profileData.phone) formData.append("phone", profileData.phone);
      if (profileData.profilePicture)
        formData.append("profilePicture", profileData.profilePicture);

      const response = await fetch("/api/profile/update", {
        method: "PUT",
        body: formData,
        credentials: "include",
      });

      const data: ApiResponse = await response.json();
      if (!data.success) throw new Error(data.message);
      setProfile(data.user || null);
      return data;
    } catch (err: any) {
      setError(err.message);
      return { success: false, message: err.message };
    } finally {
      setLoading(false);
    }
  };

  return { profile, fetchProfile, updateProfile, loading, error };
};
