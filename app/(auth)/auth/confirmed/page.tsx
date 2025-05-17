import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ConfirmedEmailPage() {
  return (
    <div className="mt-24 flex flex-col items-center justify-center gap-4">
      <div className="text-2xl md:text-3xl font-bold">Email Confirmed!</div>
      <Button type="button" asChild>
        <Link href={"/dashboard"}>Go to Dashboard</Link>
      </Button>
    </div>
  );
}
