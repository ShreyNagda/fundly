"use client";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import { signInWithGoogle } from "@/lib/auth-actions";
import React from "react";

const SignInWithGoogleButton = () => {
  return (
    <Button
      type="button"
      variant="outline"
      className="w-full hover:bg-transparent hover:text-accent-foreground"
      onClick={() => {
        signInWithGoogle();
      }}
    >
      <FaGoogle />
      Login with Google
    </Button>
  );
};

export default SignInWithGoogleButton;
