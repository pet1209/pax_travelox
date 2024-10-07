"use client";

import Link from "next/link";
import {
  ArrowRight,
  ChevronDownIcon,
  Mail,
  Menu,
  Package2,
  Phone,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { ModeToggle } from "../ModeToggle";
import Image from "next/image";
import { navlinks } from "../../data/content";

export default function NavBar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  return (
    <div
      className={`navbar ${
        isSticky ? "flex  w-full flex-col" : "flex container w-full flex-col"
      }`}
    >
      <header className="hidden md:flex  top-0  h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          {/* <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link> */}
          <Link className="inline-flex items-center" href="#">
            <Phone className="size- mx-2" /> +2 123 4567 897
          </Link>
          <Link className="inline-flex items-center" href="#">
            <Mail className="size-4 mx-2" /> email protected
          </Link>
        </div>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <div className="ml-auto flex items-center gap-4">
            <div className="md:flex sm:hidden hidden">
              <div className="md:mx-4 ml-auto h-8 w-12 ">
                <ModeToggle />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="English" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="EN">English</SelectItem>
                  <SelectItem value="FRN">French</SelectItem>
                  <SelectItem value="JPN">Japanese</SelectItem>
                </SelectContent>
              </Select>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost">USD</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>EUR</DropdownMenuItem>
                  <DropdownMenuItem>AUD</DropdownMenuItem>
                  <DropdownMenuItem>CAD</DropdownMenuItem>
                  <DropdownMenuItem>JPN</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Link
              href="/pages/login"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
            >
              Login
            </Link>
          </div>
        </div>
      </header>
      <header
        className={`navbar ${
          isSticky
            ? "is-sticky w-full flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6"
            : "sticky top-0 flex z-10 h-16 items-center gap-4 border-b bg-background px-4 md:px-6"
        }`}
      >
        <nav className="hidden flex-col justify-center gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <div className="md:mr-12">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
              <Image src="/logo.png" alt="logo" width={160} height={40} />
              <span className="sr-only">worldT</span>
            </Link>
          </div>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-4 text-lg font-medium">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Image src="/logo.png" alt="logo" width={160} height={40} />
                <span className="sr-only">WorldT</span>
              </Link>

              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground"
              >
                Home
              </Link>
              <Collapsible className="grid gap-1">
                <CollapsibleTrigger className="flex items-center justify-between rounded-md text-sm font-medium hover:px-3 py-3 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50">
                  <div className="flex items-center gap-3 text-lg font-semibold text-muted-foreground hover:text-foreground">
                    Destinations
                  </div>
                  <ChevronDownIcon className="h-4 w-4 transition-transform" />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1">
                  {navlinks.destinations.map((item, index) => (
                    <Link
                      key={index}
                      href={item.url}
                      className="flex items-center gap-3 rounded-md px-3 py-2 text-base text-muted-foreground hover:text-foreground hover:bg-gray-200 dark:hover:bg-gray-800"
                      prefetch={false}
                    >
                      {item.name}
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="grid gap-1">
                <CollapsibleTrigger className="flex items-center justify-between rounded-md text-sm font-medium hover:px-3 py-3 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50">
                  <div className="flex items-center gap-3 text-lg font-semibold text-muted-foreground hover:text-foreground">
                    Tours
                  </div>
                  <ChevronDownIcon className="h-4 w-4 transition-transform" />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1">
                  {navlinks.tours.map((item, index) => (
                    <Link
                      key={index}
                      href={item.url}
                      className="flex items-center gap-3 rounded-md px-3 py-2 text-base text-muted-foreground hover:text-foreground hover:bg-gray-200 dark:hover:bg-gray-800"
                      prefetch={false}
                    >
                      {item.name}
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="grid gap-1">
                <CollapsibleTrigger className="flex items-center justify-between rounded-md text-sm font-medium hover:px-3 py-3 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50">
                  <div className="flex items-center gap-3 text-lg font-semibold text-muted-foreground hover:text-foreground">
                    Pages
                  </div>
                  <ChevronDownIcon className="h-4 w-4 transition-transform" />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1">
                  {navlinks.pages.map((item, index) => (
                    <Link
                      key={index}
                      href={item.url}
                      className="flex items-center gap-3 rounded-md px-3 py-2 text-base text-muted-foreground hover:text-foreground hover:bg-gray-200 dark:hover:bg-gray-800"
                      prefetch={false}
                    >
                      {item.name}
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="grid gap-1">
                <CollapsibleTrigger className="flex items-center justify-between rounded-md text-sm font-medium hover:px-3 py-3 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50">
                  <div className="flex items-center gap-3 text-lg font-semibold text-muted-foreground hover:text-foreground">
                    Blog
                  </div>
                  <ChevronDownIcon className="h-4 w-4 transition-transform" />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1">
                  {navlinks.blogs.map((item, index) => (
                    <Link
                      key={index}
                      href={item.url}
                      className="flex items-center gap-3 rounded-md px-3 py-2 text-base text-muted-foreground hover:text-foreground hover:bg-gray-200 dark:hover:bg-gray-800"
                      prefetch={false}
                    >
                      {item.name}
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
              <Link
                href="/pages/contact"
                className="text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link>
              <div className="w-full mt-4 flex flex-col items-center gap-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="English" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="EN">English</SelectItem>
                    <SelectItem value="FRN">French</SelectItem>
                    <SelectItem value="JPN">Japanese</SelectItem>
                  </SelectContent>
                </Select>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full p-5">
                      USD
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>EUR</DropdownMenuItem>
                    <DropdownMenuItem>AUD</DropdownMenuItem>
                    <DropdownMenuItem>CAD</DropdownMenuItem>
                    <DropdownMenuItem>JPN</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Link
                  href="/pages/login"
                  className="w-full p-5 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9"
                >
                  Login
                </Link>
                <div className="h-8 w-full ">
                  <ModeToggle />
                </div>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <div className="ml-auto flex items-center gap-4">
            <nav className="hidden flex-col justify-center gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link
                      href="/"
                      className="text-muted-foreground transition-colors hover:text-foreground mr-4"
                    >
                      Home
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Destinations</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="flex-wrap p-2 min-w-64">
                        {navlinks.destinations.map((item, index) => (
                          <li key={index}>
                            <NavigationMenuLink asChild>
                              <a
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                href={item.url}
                              >
                                <div className="text-sm font-medium leading-none">
                                  {item.name}
                                </div>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Tours</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="flex-wrap p-2 min-w-64">
                        {navlinks.tours.map((item, index) => (
                          <li key={index}>
                            <NavigationMenuLink asChild>
                              <a
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                href={item.url}
                              >
                                <div className="text-sm font-medium leading-none">
                                  {item.name}
                                </div>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="flex-wrap p-2 min-w-64">
                        {navlinks.pages.map((item, index) => (
                          <li key={index}>
                            <NavigationMenuLink asChild>
                              <a
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                href={item.url}
                              >
                                <div className="text-sm font-medium leading-none">
                                  {item.name}
                                </div>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Blogs</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="flex-wrap p-2 min-w-64">
                        {navlinks.blogs.map((item, index) => (
                          <li key={index}>
                            <NavigationMenuLink asChild>
                              <a
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                href={item.url}
                              >
                                <div className="text-sm font-medium leading-none">
                                  {item.name}
                                </div>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link
                href="/pages/contact"
                className="text-foreground transition-colors hover:text-foreground"
              >
                Contact
              </Link>
            </nav>
            <Button className="md:ml-10 p-5">
              BOOK NOW <ArrowRight />
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}
