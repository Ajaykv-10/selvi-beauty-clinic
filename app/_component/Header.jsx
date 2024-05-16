import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header = () => {
  const Menu = [
    {
      id: 1,
      path: "/",
      name: "Home",
    },
    {
      id: 2,
      path: "/beauty-pics-feed",
      name: "Services",
    },
    {
      id: 3,
      path: "/contact",
      name: "Contact us",
    },
  ];
  return (
    <div className="flex items-center justify-between p-4  shadow-2xl bg-purple-100">
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" alt="logo" width={180} height={80} />
        <ul className="md:flex gap-5 hidden">
          {Menu.map((item, index) => (
            <Link href={item.path} key={item.id}>
              <li className="hover:text-primary cursor-pointer hover:scale-105">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <Button>Start</Button>
    </div>
  );
};
