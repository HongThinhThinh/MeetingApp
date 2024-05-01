import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./ui/MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav
      className="flex-between fixed z-50 w-full
    bg-dark-1 px-6 py-4 lg:px-10
    "
    >
      <Link href="/" className="flex items-center justify-center gap-1 h-3">
        <Image
          src="/icons/LogoHT-removebg-preview.png"
          width={120}
          height={100}
          alt="Yoom Logo"
          className="max-sm:size=10 mt-6"
        ></Image>
      </Link>

      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
