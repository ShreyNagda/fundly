import { AuthForm } from "@/components/AuthForm";

export default function SignUpPage() {
  return (
    <section>
      <div className="mx-auto max-w-[400px]">
        <div className="p-4 font-bold text-xl">Login</div>
        <AuthForm type="signup" />
      </div>
    </section>
  );
}
