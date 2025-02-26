import React from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
const DashboardPage = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default DashboardPage;
