import {NavBar} from "@/components/nav-bar";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="min-w-full lg:min-h-screen overflow-auto no-scrollbar">
      <NavBar />
      <div className="min-w-7xl">{children}</div>
    </div>
  );
};

export default layout;
