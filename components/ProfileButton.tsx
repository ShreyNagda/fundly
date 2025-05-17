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
    <Link href="/profile" className="p-1 border border-primary rounded-full">
      <Avatar className="h-10 w-10">
        <AvatarImage
          src={user.user_metadata.avatar_url}
          className="h-10 w-10  rounded-full"
        ></AvatarImage>
        <AvatarFallback className="font-semibold">
          {formatNameAsIcon(user.user_metadata.full_name)}
        </AvatarFallback>
      </Avatar>
    </Link>
  );
}
