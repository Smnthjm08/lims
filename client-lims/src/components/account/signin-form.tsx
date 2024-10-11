"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Image from "next/image";

export const description =
  "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account.";

export default function SignInForm() {
  const [togglePassword, setTogglePassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setTogglePassword(!togglePassword);
  };

  const handleSignIn = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      toast({
        title: "Signed in successfully!",
        description: "You can now access your account.",
        variant: "default",
      });
    }, 2000);
  };
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader className="items-center">
          <CardTitle className="text-2xl">Sign In</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>

        <CardContent>
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
              onClick={handleSignIn}
            >
              {loading ? "Signing In..." : "Sign In"}
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
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
