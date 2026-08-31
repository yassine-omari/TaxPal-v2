"use client";

import Link from "next/link";
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from "@headlessui/react";
import Logo from "../icons/Logo";
import MenuIcon from "../icons/MenuIcon";
import CloseIcon from "../icons/CloseIcon";

const NavBar = () => {
  return (
    <header className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link aria-label="Home" href="#">
              <Logo />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                href="#features"
              >
                Features
              </a>
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                href="#testimonials"
              >
                Testimonials
              </a>
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                href="#pricing"
              >
                Pricing
              </a>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <Link
                className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                href="/login"
              >
                Sign in
              </Link>
            </div>
            <Link
              className="group inline-flex items-center justify-center rounded-full py-2.5 px-4 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
              href="/register"
            >
              <span>
                Get started <span className="hidden lg:inline">today</span>
              </span>
            </Link>
            <div className="-mr-1 md:hidden">
              <Popover>
                <PopoverButton
                  className="relative z-10 flex h-8 w-8 items-center justify-center focus:not-data-focus:outline-hidden"
                  aria-label="Toggle Navigation"
                >
                  {({ open }) => (open ? <CloseIcon /> : <MenuIcon />)}
                </PopoverButton>
                <PopoverBackdrop
                  transition
                  className="fixed inset-0 bg-slate-300/50 duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
                />
                <PopoverPanel
                  transition
                  className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-100 data-leave:ease-in"
                >
                  <a className="block w-full p-2.5 pl-2" href="#features">
                    Features
                  </a>
                  <a className="block w-full p-2.5 pl-2" href="#testimonials">
                    Testimonials
                  </a>
                  <a className="block w-full p-2.5 pl-2" href="#pricing">
                    Pricing
                  </a>
                  <hr className="m-2 border-slate-300/40" />
                  <Link className="block w-full p-2.5 pl-2" href="/login">
                    Sign in
                  </Link>
                </PopoverPanel>
              </Popover>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
