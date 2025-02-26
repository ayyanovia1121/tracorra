'use client'
import React from "react";
import { useUser } from "@clerk/nextjs";
const DashboardPage = () => {
  const { user } = useUser();
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold">Hi, {user?.fullName}</h2>
      <p className="text-foreground">Welcome to your dashboard!, Lets manage your money</p>
    </div>
  );
};

export default DashboardPage;
