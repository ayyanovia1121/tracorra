'use client'
import { Button } from "./ui/button";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowUpRight, ArrowUpRightFromSquare } from "lucide-react";

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
        <UserButton />
      ) : (
        <div className="flex items-center space-x-2">
          <Link href="/dashboard">
            <Button variant={"outline"} className="rounded-full">Dashboard</Button>
          </Link>
          <Link href="/dashboard">
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
