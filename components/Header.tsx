import Image from "next/image";
import { LogoutButton } from "./LogoutButton";
import Link from "next/link";
import { Button } from "./ui/button";
import { DarkModeToggle } from "./DarkModeToggle";
import { getUser } from "@/utils/supabase/server";
import { ProfileButton } from "./ProfileButton";
import { User } from "@supabase/supabase-js";

export async function Header() {
  const user: User | null = await getUser();
  return (
    <nav className="shadow-lg dark:shadow-none container mx-auto flex items-center justify-between p-4 lg:p-4 bg-popover rounded-b-md">
      <div className="flex items-center gap-2 md:gap-4 h-[50px] w-[50px] md:h-[60px] md:w-[60px]">
        <Image src={"/logo.png"} width={60} height={60} alt="Logo" />
        <div className="text-xl md:text-3xl font-bold hidden md:block">
          Fundly.io
        </div>
      </div>
      <div className="flex gap-2 items-center">
        {!user ? (
          <>
            <Button asChild variant={"outline"} className="hidden md:block">
              <Link href={"/signup"}>Sign Up</Link>
            </Button>
            <Button asChild>
              <Link href={"/login"}>Login</Link>
            </Button>
          </>
        ) : (
          <>
            {user && <ProfileButton user={user} />}
            <div className="hidden lg:inline-block">
              <LogoutButton />
            </div>
          </>
        )}
        <DarkModeToggle />
      </div>
    </nav>
  );
}
