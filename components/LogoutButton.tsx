"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { LuLoaderCircle } from "react-icons/lu";
import { toast } from "sonner";
import { redirect, useRouter } from "next/navigation";

export function LogoutButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleLogout = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const errorMsg = null;
    if (!errorMsg) {
      toast(`Successfully logged out!`);
      router.replace("/");
    } else {
      toast(`Error: ${errorMsg}`);
    }
    setLoading(false);
  };
  return (
    <Button onClick={handleLogout} className="w-20 text-sm">
      {loading ? <LuLoaderCircle className="animate-spin" /> : "Log Out"}
    </Button>
  );
}
