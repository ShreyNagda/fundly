import { AuthForm } from "@/components/AuthForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getUser } from "@/utils/supabase/server";

export default async function LoginPage() {
  // const user = await getUser();
  return (
    <div>
      <Card className="mt-24">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold">
            Login
          </CardTitle>
          <CardDescription>Enter our details</CardDescription>
        </CardHeader>
        <AuthForm type="login" />
      </Card>
    </div>
  );
}
