import { getUser } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();
  if (user) {
    redirect("/dashboard");
  }

  return <>{children}</>;
}
