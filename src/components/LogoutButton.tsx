"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { LuLoaderCircle, LuLogOut } from "react-icons/lu";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signout } from "@/utils/supabase/authActions";
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

type LogoutButtonProps = {
  className?: string;
};

export function LogoutButton({ className }: LogoutButtonProps) {
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
          <Button
            variant={"destructive"}
            className={
              className +
              " md:flex w-20 md:w-30 text-sm flex items-center justify-center"
            }
          >
            {loading ? (
              <LuLoaderCircle className="animate-spin" />
            ) : (
              <>
                <LuLogOut />
                <p className="hidden md:block">Log Out</p>
              </>
            )}
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-black">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              Do you really want to logout?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setLoading(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleLogout} asChild>
              <Button variant={"destructive"}>Logout</Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
