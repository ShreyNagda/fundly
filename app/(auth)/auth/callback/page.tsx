"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { LuLoaderCircle } from "react-icons/lu";

export default function Callback() {
  const router = useRouter();

  useEffect(() => {
    const message = "Successfully logged in!";
    toast.success("Success", { description: "Login successful using Google" });
    console.log(message);

    const timeout = setTimeout(() => {
      router.replace("/dashboard");
    }, 5500); // wait for 1.5s before redirecting

    return () => clearTimeout(timeout); // cleanup timeout
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-24">
      <p className="text-gray-600">Redirecting to your dashboard...</p>
      <LuLoaderCircle className="animate-spin text-2xl" />
    </div>
  );
}
