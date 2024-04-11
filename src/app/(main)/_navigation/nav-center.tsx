"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { IoPeopleCircle } from "react-icons/io5";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";

const navLinks = [
  {
    name: "home",
    href: "/",
    outlineIcon: <AiOutlineHome size={26} />,
    fillIcon: <AiFillHome size={26} />,
  },
  {
    name: "friends",
    href: "/friends",
    outlineIcon: <BsPeople size={26} />,
    fillIcon: <BsPeopleFill size={26} />,
  },
  {
    name: "groups",
    href: "/groups",
    outlineIcon: <IoPeopleCircleOutline size={26} />,
    fillIcon: <IoPeopleCircle size={26} />,
  },
  {
    name: "bookmarks",
    href: "/bookmarks",
    outlineIcon: <AiOutlineMenu size={26} />,
    fillIcon: <AiOutlineMenu size={26} />,
  },
];

const NavCenter = () => {
  const pathname = usePathname();

  return (
    <div className="700:flex-center hidden space-x-3 h-full py-[3.2px]">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            className={cn(
              "w-1/3 h-full max-w-28",
              isActive
                ? "text-main"
                : "text-text-2 hover:bg-bg-4 hover:rounded-lg"
            )}
            href={link.href}
            key={link.name}
          >
            <Button variant="nav_main" size="nav_main">
              {isActive ? (
                <>
                  <span>{link.fillIcon}</span>
                  <Separator className="w-full absolute bottom-[-3.2px] h-[3.2px] bg-main" />
                </>
              ) : (
                <span>{link.outlineIcon}</span>
              )}
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export default NavCenter;
