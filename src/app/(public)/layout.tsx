import NavBar from "@/components/nav-bar";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="min-w-full min-h-screen flex items-center flex-col overflow-auto no-scrollbar">
      <NavBar/>
      <div className="min-w-6xl">{children}</div>
    </div>
  );
};

export default layout;
