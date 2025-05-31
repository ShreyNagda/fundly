import { getUser } from "@/utils/supabase/server";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { LogoutButton } from "./LogoutButton";

export async function Header() {
  const user = await getUser();
  console.log(user);
  return (
    <header className="p-8 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <div className="h-[35px] w-[35px] md:h-[45px] md:w-[45px] relative">
          <Image src={"/logo.png"} alt="Fundly.io" fill sizes="35 45" />
        </div>
        <p className="hidden md:block text-xl font-bold">Fundly.io</p>
      </div>
      <nav className="flex gap-2 items-center">
        {user ? (
          <>
            <Link
              href="/profile"
              className="h-[35px] w-[35px] md:h-[45px] md:w-[45px] relative"
            >
              <Image
                src={user.user_metadata.avatar_url}
                alt="Fundly.io"
                fill
                sizes="35 45"
                className="rounded-full"
              />
            </Link>
            <LogoutButton />
          </>
        ) : (
          <>
            <Button asChild className="hidden md:block" variant={"outline"}>
              <Link href={"/signup"}>Sign Up</Link>
            </Button>
            <Button asChild>
              <Link href={"/login"}>Login</Link>
            </Button>
          </>
        )}
      </nav>
    </header>
  );
}
