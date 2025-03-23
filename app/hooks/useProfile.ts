/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useAuth } from "./useAuth";

interface ProfileData {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  profilePicture?: File | null;
  aadhar: string;
  address: {
    street: string;
    district: string;
    state: string;
    pincode: string;
  };
  gender: string;
  dob: Date;
  guardian: {
    name: string;
    phone: string;
  };
  lastUpdated?: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  user?: ProfileData;
}

export const useProfile = () => {
  const { user } = useAuth();

  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getProfile = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!user?.id) {
        throw new Error("User not authenticated");
      }

      const response = await fetch(`/api/profile/${user.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });

      const data: ApiResponse = await response.json();

      if (!data.success) throw new Error(data.message);

      if (data.user) {
        setProfile(data.user);
      }

      return data.user;
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (profileData: ApiResponse) => {
    try {
      setLoading(true);
      setError(null);

      // Ensure we have a user and token
      if (!user?.id) {
        throw new Error("User not authenticated");
      }

      const response = await fetch(`/api/profile/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(profileData),
      });

      const data: ApiResponse = await response.json();

      if (!data.success) throw new Error(data.message);

      if (data.user) {
        setProfile(data.user);

        if (data.user.name || data.user.email) {
          const updatedUser = {
            ...user,
            name: data.user.name || user.name,
            email: data.user.email || user.email,
          };
          localStorage.setItem("user", JSON.stringify(updatedUser));
          // setProfile(updatedUser);
        }
      }

      return data.user;
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Update profile picture
  const updateProfilePicture = async (imageFile: File) => {
    try {
      setLoading(true);
      setError(null);

      // Ensure we have a user and token
      if (!user?.id) {
        throw new Error("User not authenticated");
      }

      // Create FormData to send the file
      const formData = new FormData();
      formData.append("profileImage", imageFile);

      const response = await fetch(`/api/profile/${user.id}/picture`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        body: formData,
      });

      const data: ApiResponse = await response.json();

      if (!data.success) throw new Error(data.message);

      // Update local user data with new profile info (including picture URL)
      if (data.user) {
        setProfile((prevProfile) =>
          prevProfile
            ? ({
                ...prevProfile,
                profilePicture: data.user?.profilePicture,
              } as ProfileData)
            : (data.user as ProfileData)
        );
      }

      return data.user;
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    profile,
    getProfile,
    updateProfile,
    updateProfilePicture,
    loading,
    error,
  };
};
