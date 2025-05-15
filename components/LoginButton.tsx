"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { signout } from "@/lib/auth-actions";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import {
  Popover,
  PopoverAnchor,
  PopoverTrigger,
  PopoverContent,
} from "./ui/popover";
import Link from "next/link";
import { PopoverClose } from "@radix-ui/react-popover";

import { PiCaretDownBold } from "react-icons/pi";
import { IoClose } from "react-icons/io5";

const LoginButton = () => {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const supabase = createClient();
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      console.log(user?.user_metadata.avatar_url);
      setUser(user);
    };
    fetchUser();
  }, []);
  if (user) {
    const name: string | undefined = user?.user_metadata.full_name;
    return (
      <Popover>
        <PopoverTrigger className="flex gap-2 items-center">
          <Avatar>
            <AvatarImage src={user?.user_metadata.avatar_url}></AvatarImage>
            <AvatarFallback>
              {name
                ?.split(" ")
                .map((word) => word[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:block"> {name}</div>
          <PopoverAnchor>
            <PiCaretDownBold />
          </PopoverAnchor>
        </PopoverTrigger>
        <PopoverContent className="flex flex-col items-end justify-center gap-3 p-4 absolute -right-6 md:right-0 top-2">
          <Button className="w-full">
            <Link href="/profile" className="">
              Profile
            </Link>
          </Button>
          <Button variant={"outline"} onClick={signout} className=" w-full">
            Logout
          </Button>
        </PopoverContent>
      </Popover>
    );
  }
  return (
    <Button
      onClick={() => {
        router.push("/login");
      }}
    >
      Login
    </Button>
  );
};

export default LoginButton;
