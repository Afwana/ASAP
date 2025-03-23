"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUser, loginUser, logoutUser, registerUser } from "../api/auth";

// Fetch user
export const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: false, // Avoid infinite retries if user is not logged in
  });
};

// Register user
export const useRegister = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};

// Login user
export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};

// Logout user
export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      queryClient.setQueryData(["user"], null);
    },
  });
};
