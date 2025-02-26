'use client'
import { Button } from "./ui/button";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className="flex p-5 justify-between items-center border shadow-sm">
      <div className="flex items-row items-center justify-center">
        {/* logo */}
        <Image src="/wallet.svg" alt="logo" width={40} height={40} />
        <span className="text-xl font-bold text-primary">Tracorra.ai</span>
      </div>
      {isSignedIn ? (
        <div className="flex items-center space-x-2">
          <Link href="/dashboard">
            <Button className="rounded-full">
              Dashboard
            </Button>
          </Link>
          <UserButton  />
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          <Link href="/sign-in">
            <Button className="rounded-full">
              Get Started
              <ArrowUpRight className="mr-2" />
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
