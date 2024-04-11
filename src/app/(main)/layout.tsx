import { ModeToggle } from "@/components/mode-toggle";
import React, { FC } from "react";
import NavBar from "./_navigation/navigation";

interface layoutProps {
  children: Readonly<React.ReactNode>;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default layout;
