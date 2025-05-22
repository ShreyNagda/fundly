import { User } from "@supabase/supabase-js";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";

type Props = {
  user: User;
};

export function ProfileButton({ user }: Props) {
  const formatNameAsIcon = (name: string) => {
    const _name = name.split(" ");
    return _name[0].charAt(0).toUpperCase() + _name[1].charAt(0).toUpperCase();
  };
  return (
    <Link href="/profile" className="">
      <Avatar className="w-8 h-8 md:w-10 md:h-10 border">
        <AvatarImage
          src={user.user_metadata.avatar_url}
          className="rounded-full h-full w-full"
        ></AvatarImage>
        <AvatarFallback className="font-semibold text-sm">
          {formatNameAsIcon(user.user_metadata.full_name)}
        </AvatarFallback>
      </Avatar>
    </Link>
  );
}
