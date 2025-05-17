import { AuthForm } from "@/components/AuthForm";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function SignUpPage() {
  return (
    <div>
      <Card className="mt-16">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold">
            Sign Up
          </CardTitle>
          <CardDescription>Enter our details</CardDescription>
        </CardHeader>
        <AuthForm type="signup" />
      </Card>
    </div>
  );
}
