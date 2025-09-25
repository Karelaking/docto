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
import Logo from "./Logo";
import { Badge } from "./ui/badge";

export function NavBar() {
  return (
    <nav className="min-w-full flex items-center justify-between py-4">
      <div className="text-2xl font-bold">
        <Logo />
      </div>
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
            {/* Services Menu */}
            <NavigationMenuItem className="">
              <NavigationMenuTrigger className="text-xl font-semibold">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent className="flex p-3 w-max h-max space-y-3 flex-col">
                {/* items start*/}
                <Card className="min-w-sm w-full text-center p-4 aspect-video flex flex-col items-center justify-around">
                  <Link href="/services/crops">
                    <CardTitle className="my-3 text-2xl font-semibold">
                      Crop
                    </CardTitle>
                    <CardContent className="flex items-center justify-center">
                      <span className="text-sm">
                        Explore smart algorithums powering crop prefictions
                      </span>
                    </CardContent>
                  </Link>
                </Card>
                <Card className="min-w-sm text-center p-4 aspect-video flex flex-col items-center justify-around">
                  <Link href="/services/">
                    <CardTitle className="my-3 text-2xl font-semibold">
                      Pesticides <Badge className="bg-green-500">Comming soon</Badge>
                    </CardTitle>
                    <CardContent className="flex items-center justify-center">
                      <span className="text-sm">
                        Get crop-specific pesticide recommendations
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
          <SignInButton>
            <Button variant="ghost" className="rounded-2xl cursor-pointer">Sign In</Button>
          </SignInButton>
          <SignUpButton>
            <Button className="rounded-2xl cursor-pointer">Sign Up</Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
