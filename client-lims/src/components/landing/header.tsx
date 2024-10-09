/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AlignVerticalSpaceAround, Home, LogOut } from 'lucide-react';
import { ModeToggle } from '../globals/mode-toggle';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// // import { useUser } from '@/lib/auth';
// // import { signOut } from '@/app/(login)/actions';
// import { useRouter } from 'next/navigation';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { user, setUser } = useUser();
//   const router = useRouter();

//   async function handleSignOut() {
//     setUser(null);
//     await signOut();
//     router.push('/');
//   }

  return (
    <header className="border-b-1 font-semibold border-gray-200 bg-slate-500 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <AlignVerticalSpaceAround className="h-6 w-6 text-lime-500" />
          <span className="ml-2 text-xl font-extrabold text-gray-900">LIMS</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            href="/pricing"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Pricing
          </Link>
          {/* {user ? (
            <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer size-9">
                  <AvatarImage alt={user.name || ''} />
                  <AvatarFallback>
                    {user.email
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="flex flex-col gap-1">
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/dashboard" className="flex w-full items-center">
                    <Home className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <form action={handleSignOut} className="w-full">
                  <button type="submit" className="flex w-full">
                    <DropdownMenuItem className="w-full flex-1 cursor-pointer">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Sign out</span>
                    </DropdownMenuItem>
                  </button>
                </form>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : ( */}
            <Button
              asChild
              className="bg-black hover:bg-gray-800 text-white text-sm px-4 py-2 rounded-full"
            >
              <Link className='font-bold' href="/sign-up">Sign Up</Link>
            </Button>
          {/* )} */}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;
// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <section className="flex flex-col min-h-screen">
//       <Header />
//       {children}
//     </section>
//   );
// }

// 'use client';
// import { MobileNav } from '@/layouts/mobile-nav';
// import {
//   adminNavbar,
//   nonUserNavbar,
//   userNavbar,
// } from '@/lib/constant/app.constant';
// import { signOut, useSession } from 'next-auth/react';
// import Link from 'next/link';
// import { NavItem } from '@/components/navitem';
// import Image from 'next/image';
// import { Skeleton } from '@/components/ui/skeleton';
// import { Moon, Sun } from 'lucide-react';
// import { useTheme } from 'next-themes';
// import { ADMIN_ROLE } from '@/config/app.config';
// import { useEffect, useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { useRouter } from 'next/navigation';
// import { getNameInitials } from '@/lib/utils';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';
// import icons from '@/lib/icons';
// export const CompanyLogo = () => {
//   return (
//     <div
//       className="flex items-center gap-2 cursor-pointer"
//       onClick={() => {
//         window.location.href = '/';
//       }}
//     >
//       <Image
//         src={'/main.svg'}
//         alt="100xJobs"
//         width={30}
//         height={30}
//         className="rounded"
//       />
//       <h3 className="text-xl font-bold">
//         100x<span className="text-blue-700">Jobs</span>
//       </h3>
//     </div>
//   );
// };

// const Header = () => {
//   const session = useSession();
//   const { theme, setTheme } = useTheme();
//   const router = useRouter();
//   const [mounted, setMounted] = useState(false);
//   const [open, setOpen] = useState(false);
//   const toggleTheme = () => {
//     setTheme(theme === 'dark' ? 'light' : 'dark');
//   };

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <>
//       <nav className="fixed w-full z-50 backdrop-blur-md border">
//         <div className="flex h-[72px] w-full items-center justify-between lg:px-20 px-3 shadow-sm">
//           <Link href="/" className="p-2.5">
//             <CompanyLogo />
//           </Link>
//           <div className="flex items-center">
//             <ul className="md:flex items-center gap-4 text-sm lg:gap-6 hidden mx-4">
//               {session.status === 'loading'
//                 ? nonUserNavbar.map((_, index) => (
//                     <Skeleton className="h-4 w-[60px]" key={index} />
//                   ))
//                 : session.data?.user
//                   ? session.data?.user.role === ADMIN_ROLE
//                     ? adminNavbar.map((item) => (
//                         <NavItem {...item} key={item.id} />
//                       ))
//                     : userNavbar.map((item) => (
//                         <NavItem {...item} key={item.id} />
//                       ))
//                   : nonUserNavbar.map((item) => (
//                       <NavItem {...item} key={item.id} />
//                     ))}
//             </ul>
//             <div className="flex items-center">
//               {mounted && (
//                 <button
//                   className="border p-2.5 rounded-lg text-foreground/60 hover:dark:bg-[#191919] hover:bg-gray-100 md:mx-4 outline-none"
//                   onClick={toggleTheme}
//                 >
//                   {theme === 'dark' ? (
//                     <Moon className="w-4 h-4" />
//                   ) : (
//                     <Sun className="w-4 h-4" />
//                   )}
//                 </button>
//               )}
//             </div>
//             <div className="hidden md:block">
//               {session.status === 'loading' ? (
//                 <Skeleton className="h-8 w-8 rounded-full" />
//               ) : session.status === 'authenticated' ? (
//                 <>
//                   <DropdownMenu open={open} onOpenChange={setOpen}>
//                     <DropdownMenuTrigger asChild>
//                       <Button
//                         variant="ghost"
//                         className="relative h-8 w-8 rounded-full"
//                       >
//                         <Avatar className="h-8 w-8">
//                           <AvatarImage
//                             src={
//                               session.data.user.image
//                                 ? session.data.user.image
//                                 : 'hello'
//                             }
//                           />
//                           {/* <Image
//                             src={session.data.user.image}
//                             alt={session.data.user.name}
//                             width={32}
//                             height={32}
//                             className="rounded-full"
//                           /> */}

//                           <AvatarFallback>
//                             {getNameInitials(session.data.user.name)}
//                           </AvatarFallback>
//                         </Avatar>
//                       </Button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent
//                       className="w-56"
//                       align="end"
//                       forceMount
//                     >
//                       <DropdownMenuItem>
//                         <icons.profile className="mr-2 h-4 w-4" />
//                         <span>Profile</span>
//                       </DropdownMenuItem>
//                       <DropdownMenuSeparator />
//                       <DropdownMenuItem
//                         onClick={() => {
//                           signOut();
//                         }}
//                       >
//                         <icons.logout className="mr-2 h-4 w-4" />
//                         <span>Log out</span>
//                       </DropdownMenuItem>
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                 </>
//               ) : (
//                 <div>
//                   <Button
//                     className="rounded-lg"
//                     size="sm"
//                     variant="default"
//                     onClick={() => {
//                       router.push('/signin');
//                     }}
//                   >
//                     Login
//                   </Button>
//                 </div>
//               )}
//             </div>

//             <div className="md:hidden flex justify-center ml-3">
//               <MobileNav />
//             </div>
//           </div>
//         </div>
//       </nav>
//       <div className="h-[72px] print:hidden"></div>
//     </>
//   );
// };

// export default Header;