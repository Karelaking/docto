import React from "react";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const menu: {
  title: string;
  link: string;
}[] = [
  {
    title: "home",
    link: "/",
  },
  {
    title: "about",
    link: "/about",
  },
  {
    title: "services",
    link: "/services",
  },
  {
    title: "contact",
    link: "/contact",
  },
];

const NavBar = () => {
  return (
    <nav className="w-full flex items-center justify-between py-6">
      <div>DOCTO</div>
      <div className="min-w-max flex items-center justify-center">
        <NavigationMenu className="">
          <NavigationMenuList className="space-x-12">
            {menu.map((item, index) => {
              return (
                <NavigationMenuLink asChild key={index}>
                  <Link
                    href={item.link}
                    className="capitalize text-lg font-semibold"
                  >
                    {item.title}
                  </Link>
                </NavigationMenuLink>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div>
        <SignedOut>
          <SignInButton>
            <Button className="rounded-2xl">Sign In</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default NavBar;
