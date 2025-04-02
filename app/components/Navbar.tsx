"use client";

import Link from "next/link";
import { navLinks } from "../../constants/index";
import { Menu, Sun, Moon, X as Cross } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import Image from "next/image";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpenMobile = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  if (!mounted) return null; // Avoid SSR mismatch

  return (
    <nav className="py-5 fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-transparent">
      <div className="max-w-[1450px] w-[90%] mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
          <div className="flex items-center gap-3">
            <Image
              src={"/Logo.png"}
              alt="logo"
              width={70}
              height={70}
              className="rounded-full"
            />
            <h1 className="text-black font-semibold uppercase text-xl md:text-2xl dark:text-white transition-all">
              MKW Closers
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center"> {/* Adjusted gap */}
          {navLinks.map((link, index) => (
            <Link href={link.route} key={index} target={link.target}>
              <li className="hover:text-gray-700 dark:hover:text-gray-300 transition">
                {link.icon ? <link.icon size={24} /> : link.name} {/* Render icon if it exists, otherwise render name */}
              </li>
            </Link>
          ))}
        </ul>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-5">
          {/* Theme Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start">
              <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden text-3xl cursor-pointer text-black dark:text-white" onClick={handleOpenMobile}>
            {openMobileMenu ? <Cross /> : <Menu />}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {openMobileMenu && (
          <ul className="md:hidden bg-white/30 dark:bg-black/30 backdrop-blur-lg absolute top-14 right-5 px-6 py-6 text-center text-black dark:text-white rounded-lg flex flex-col gap-4 shadow-lg mt-4">
            {navLinks.map((link, index) => (
              <Link href={link.route} key={index} onClick={() => setOpenMobileMenu(false)} target={link.target}>
                <li className="hover:text-gray-700 dark:hover:text-gray-300 transition">
                  {link.icon ? <link.icon size={24} /> : link.name} {/* Render icon if it exists, otherwise render name */}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;