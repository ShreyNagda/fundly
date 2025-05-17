"use client";

import { useTransition } from "react";
import { CardContent, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import Link from "next/link";

import { LuLoaderCircle } from "react-icons/lu";
import { FaGoogle } from "react-icons/fa";
import { login, signInWithGoogle, signup } from "@/lib/auth-actions";
import { toast } from "sonner";
import { redirect } from "next/navigation";

type Props = {
  type: "login" | "signup";
};

export function AuthForm({ type }: Props) {
  const isLoginForm = type == "login";

  const [isPending, startTransition] = useTransition();

  const handleButtonClick = (formdata: FormData) => {
    startTransition(async () => {
      const response = await (isLoginForm ? login(formdata) : signup(formdata));
      if (response.error) {
        toast.error("Authorization Error", { description: response.error });
      } else {
        toast.success(response.message);
        redirect("/dashboard");
      }
      console.log(response);
    });
  };

  const handleGoogleButtonClick = async () => {
    const response = await signInWithGoogle();
    if (response.error) {
      toast.error("Authorization Error", { description: response.error });
    }
  };

  return (
    <form>
      <CardContent className="space-y-6">
        {!isLoginForm && (
          <div className="flex gap-2 items-center">
            <div className="space-y-2">
              <Label htmlFor="fname">First</Label>
              <Input
                type="text"
                name="first-name"
                id="fname"
                placeholder="John"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lname">Last</Label>
              <Input
                type="text"
                name="last-name"
                id="lname"
                placeholder="Doe"
                required
              />
            </div>
          </div>
        )}
        <div className="flex flex-col space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            disabled={isPending}
            required
            placeholder="johndoe@gmail.com"
          />
        </div>
        <div className="flex flex-col space-y-2 ">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            disabled={isPending}
            required
            placeholder="Password"
          />
        </div>
      </CardContent>
      <CardFooter className="mt-8 flex-col gap-4">
        <Button className="w-full" formAction={handleButtonClick}>
          {isPending ? (
            <LuLoaderCircle className="animate-spin text-2xl" />
          ) : isLoginForm ? (
            "Login"
          ) : (
            "Sign Up"
          )}
        </Button>
        <p>
          {isLoginForm
            ? "Don't have an account? "
            : "Already have an account? "}
          <Link
            href={isLoginForm ? "/signup" : "/login"}
            className="text-blue-600 underline"
          >
            {isLoginForm ? "Sign Up" : "Login"}
          </Link>
        </p>
        {/* HR */}
        <div className="w-full flex gap-3 items-center">
          <span className="border-b-2 rounded-full w-full"></span>
          <span>OR</span>
          <span className="border-b-2 rounded-full w-full"></span>
        </div>

        {/* Sign In with Google */}
        <Button
          className="w-full"
          variant={"outline"}
          type="button"
          onClick={handleGoogleButtonClick}
        >
          <FaGoogle /> Contine with Google
        </Button>
      </CardFooter>
    </form>
  );
}
