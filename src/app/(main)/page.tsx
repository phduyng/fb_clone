"use client";

import { FC } from "react";
import { FaHouse } from "react-icons/fa6";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <div className="absolute w-full top-14 z-40">
      <div className="h-10 w-40 bg-bg-1"></div>
      <div className="h-10 w-40 bg-bg-2"></div>
      <div className="h-10 w-40 bg-bg-3"></div>
      <div className="h-20 w-40 bg-bg-4"></div>
      <div className="h-20 w-40 bg-bg-4"></div>
      <div className="h-20 w-40 bg-bg-4"></div>
      <div className="h-20 w-40 bg-bg-4"></div>
      <div className="h-20 w-40 bg-bg-4"></div>
      <div className="h-20 w-40 bg-bg-4"></div>
      <div className="h-20 w-40 bg-bg-4"></div>
      <div className="h-20 w-40 bg-bg-4"></div>
      <div className="h-20 w-40 bg-bg-4"></div>
      <div className="h-20 w-40 bg-bg-4"></div>
      <div className="h-20 w-40 bg-bg-4"></div>
      <div className="h-20 w-40 bg-bg-4"></div>
      <div className="h-20 w-40 bg-bg-4"></div>
      <FaHouse className="text-main" />
      <div className="text-text-1 font-semibold text-[1.25rem]">
        Hello World
      </div>
      <div className="text-text-2 font-semibold text-[20px]">Hello World</div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="text-main">Hello</Button>
        </DialogTrigger>
        <DialogContent className="">
          <div>Hello World</div>
        </DialogContent>
      </Dialog>
      <Separator orientation="horizontal" className="bg-main h-2" />
    </div>
  );
};

export default HomePage;
