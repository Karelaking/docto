"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Card, CardContent, CardTitle } from "./ui/card";

export function NavBar() {
  return (
    <nav className="w-full flex items-center justify-between py-5">
      <div>DOCTO</div>
      <div>
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-12">
            {/* Home Menu Start*/}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/" className="text-xl font-semibold">
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* Home Menu End */}
            {/* About Menu */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about" className="text-xl font-semibold">
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* About Menu End */}
            {/* Services Menu */}
            <NavigationMenuItem className="">
              <NavigationMenuTrigger className="text-xl font-semibold">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent className="flex p-3 w-max h-max space-x-3">
                {/* items start*/}
                <Card className="min-w-sm text-center p-4 aspect-video flex flex-col items-center justify-around">
                  <Link href="/services/crops">
                    <CardTitle className="my-3 text-2xl font-semibold">
                      Crop
                    </CardTitle>
                    <CardContent className="flex items-center justify-center">
                      <span className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Explicabo, fugit!
                      </span>
                    </CardContent>
                  </Link>
                </Card>
                <Card className="min-w-sm text-center p-4 aspect-video flex flex-col items-center justify-around">
                  <Link href="/services/">
                    <CardTitle className="my-3 text-2xl font-semibold">
                      Pestisites
                    </CardTitle>
                    <CardContent className="flex items-center justify-center">
                      <span className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Explicabo, fugit!
                      </span>
                    </CardContent>
                  </Link>
                </Card>
                {/* items end */}
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* Services Menu End */}
            {/* Contact  Menu Start*/}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/contact" className="text-xl font-semibold">
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {/* Contect Menu End */}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex w-max space-x-3">
        <SignedOut>
          <SignInButton />
          <SignUpButton>
            <Button className="rounded-2xl">Sign Up</Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
