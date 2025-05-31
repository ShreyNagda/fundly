"use client";

import { AuthForm } from "@/components/AuthForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "@/utils/supabase/authActions";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(formdata: FormData) {
    setLoading(true);
    startTransition(async () => {
      const response = await login(formdata);
      if (response.error) {
        toast.error("Authorization Error", { description: response.error });
      } else {
        toast.success(response.message);
        redirect("/dashboard");
      }
      setLoading(false);
    });
  }
  return (
    <section>
      <div className="mx-auto max-w-[400px]">
        <div className="p-4 font-bold text-xl">Login</div>
        <AuthForm type="login" />
      </div>
    </section>
  );
}
