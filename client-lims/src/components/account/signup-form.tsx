"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const description =
  "A sign up page with two columns. The first column has the sign up form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image.";

export default function SignUpForm() {
  const [togglePassword, setTogglePassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();

  const togglePasswordVisibility = () => {
    setTogglePassword(!togglePassword);
  };

  const handleSignUp = async () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      toast({
        title: "Signed up successfully!",
        description: "You can now log in to your account.",
        variant: "default",
      });
    }, 2000);
  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder2.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>

      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-balance text-muted-foreground">
              Enter your Email below to Sign-up to your Account.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>

            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={togglePassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {togglePassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className={`w-full ${
                loading ? "cursor-not-allowed bg-transparent" : ""
              }`}
              onClick={handleSignUp}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </Button>

            <Button
              variant="outline"
              className="w-full hover:bg-slate-50 hover:text-slate-700"
            >
              <Image
                src="/google.svg"
                alt="google"
                width={20}
                height={20}
                className="mr-2"
              />
              Login with Google
            </Button>
          </div>

          <div className="mt-4 text-center text-sm">
            Already part of an Organization?
            <Link href="/signin" className="underline">
              {" "}
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
