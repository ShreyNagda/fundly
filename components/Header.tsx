"use client";
import Image from "next/image";
import { LogoutButton } from "./LogoutButton";
import Link from "next/link";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { DarkModeToggle } from "./DarkModeToggle";
export function Header() {
  const user = null;
  return (
    <nav className="container mx-auto flex items-center justify-between p-4 lg:p-8 bg-popover">
      <div className="flex items-center gap-2 md:gap-4 h-[30px] w-[30px] md:h-[60px] md:w-[60px]">
        <Image src={"/logo.png"} width={60} height={60} alt="Logo" />
        <div className="text-xl md:text-3xl font-bold">Fundly.io</div>
      </div>
      <div className="flex gap-2">
        {user ? (
          <>
            <Button asChild>
              <Link href={"/login"}>Login</Link>
            </Button>
            <Button asChild variant={"outline"}>
              <Link href={"/signup"}>Sign Up</Link>
            </Button>
          </>
        ) : (
          <LogoutButton />
        )}
        <DarkModeToggle />
      </div>
    </nav>
  );
}
