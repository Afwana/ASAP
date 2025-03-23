"use client";

import { useRouter } from "next/navigation";
import { useUser } from "../hooks/useAuth";
import { ReactNode, useEffect } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { data: user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    }
  }, [isLoading, user, router]);

  if (isLoading) return <p>Loading...</p>;

  return <>{user ? children : null}</>;
};

export default ProtectedRoute;
