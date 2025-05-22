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
      <Card className="">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold">
            Sign Up
          </CardTitle>
        </CardHeader>
        <AuthForm type="signup" />
      </Card>
    </div>
  );
}
