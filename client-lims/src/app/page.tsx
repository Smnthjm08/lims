// import Image from "next/image";
import { ModeToggle } from "@/components/globals/mode-toggle";
import { BackgroundBeamsWithCollision } from "@/components/ui/aceternity/background-beams-with-collision";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Button>Init</Button>
        <ModeToggle />
        <BackgroundBeamsWithCollision>

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ullamcorper, nisl in commodo aliquet, eros nunc aliquet nisi, eu
              tincidunt nisi nisl sed nisl. Sed ullamcorper, nisl in commodo        
        </BackgroundBeamsWithCollision>
      </main>
    </div>
  );
}
