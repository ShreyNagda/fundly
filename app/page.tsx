import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center container">
      <div className="max-w-[600px] mx-auto text-center px-4">
        <div className="h1 text-foreground mb-4">
          Secure your family’s future, one investment at a time.
        </div>
        <div className="mb-12">
          Fundly - A smart investment tracker built for families. Stay
          organized, plan for the future, and ensure every rupee is accounted
          for — all in one secure place.
        </div>
        <Button variant={"secondary"} className="rounded-full text-xl">
          Get Started
        </Button>
      </div>
    </div>
  );
}
