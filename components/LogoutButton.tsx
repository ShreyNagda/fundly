"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { LuLoaderCircle } from "react-icons/lu";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signout } from "@/lib/auth-actions";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogHeader,
  AlertDialogFooter,
} from "./ui/alert-dialog";

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
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild onClick={() => setLoading(true)}>
          <Button className="w-20 md:w-20 text-sm">
            {loading ? <LuLoaderCircle className="animate-spin" /> : "Log Out"}
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              Do you really want to logout?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleLogout}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
