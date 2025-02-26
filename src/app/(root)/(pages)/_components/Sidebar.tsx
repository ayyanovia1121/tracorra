'use client'
import { menuList } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const Sidebar = () => {
  const pathName = usePathname();

  useEffect(() => {
    console.log(pathName);
  }, [pathName]);

  return (
    <div className="h-screen p-5 border shadow-sm">
      <div className="flex flex-row items-center ">
        <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
        <span className="font-bold text-xl text-primary">Traccora</span>
      </div>

      <div className="mt-10">
        {menuList.map((item, index) => (
          <Link key={index} href={item.path}>
            <h2 className= {`flex gap-2 items-center text-gray-500 font-medium mb-2 p-4 cursor-pointer rounded-full hover:bg-gray-100 hover:text-primary transition-all duration-300 ease-in-out
              ${pathName === item.path ? "bg-primary text-white" : ""}
              `}>
              {<item.icon />} {item.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
