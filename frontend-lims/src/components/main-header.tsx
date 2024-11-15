import Image from "next/image";
import React from "react";
import { ModeToggle } from "./mode-toogle";
import { Github } from "lucide-react";
import { Button } from "./ui/shadcn/button";
import Link from "next/link";

export default function HomeHeader() {
  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 bg-background">
      <div className="h-full items-center flex justify-between mx-auto">
        <div className="flex items-center gap-5 ml-12">
          <Link href={"/"}>
            <Image src={"./logo2.svg"} width={100} height={100} alt="logo" />
          </Link>
        </div>
        <div className="flex items-center gap-5 mr-12">
          <Link href={"/login"}>
          <Button className="rounded-full" size={"sm"} variant={"outline"}>
            {/* Sign In */}
            Login
          </Button>
          </Link>
          <Link href={"/register"}>
          <Button className="rounded-full" size={"sm"} variant={"default"}>
            {/* Sign Up */}
            Register
          </Button>
          </Link>
          <Button variant="outline" size="icon">
            <Github width={16} height={16} />
          </Button>
          <ModeToggle />
        </div>
        {/* <div className="flex items-center gap-5 mr-12">
        </div> */}
      </div>
    </nav>
    // </div>
  );
}
