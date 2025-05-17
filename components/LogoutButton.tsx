"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { LuLoaderCircle } from "react-icons/lu";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signout } from "@/lib/auth-actions";

export function LogoutButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleLogout = async () => {
    setLoading(true);
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await signout();
    if (response.error) {
      toast.error(`Error: ${response.error}`);
    } else {
      toast.success(response.message);
      router.replace("/");
    }
    setLoading(false);
  };
  return (
    <Button onClick={handleLogout} className="w-20 text-sm">
      {loading ? <LuLoaderCircle className="animate-spin" /> : "Log Out"}
    </Button>
  );
}
