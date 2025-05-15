"use client";
import { usePathname } from "next/navigation";
import LoginButton from "./LoginButton";

export function Header() {
  const path = usePathname();
  const isAuthPage = path.startsWith("/login") || path.startsWith("/signup");
  return (
    <nav
      className={`container mx-auto flex items-center h-[100px] px-6 md:px-8 ${
        isAuthPage ? "justify-center" : "justify-between"
      }`}
    >
      <div className="text-3xl font-bold">Fundly.io</div>
      {!isAuthPage && <LoginButton />}
    </nav>
  );
}
