"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SimpleButton from "@/components/ui/button";
import ThemeSwitcher from "@/components/ui/theme-switcher";
import Logo from "@/components/ui/logo";
import Typography from "@/components/ui/typography";
import Link from "next/link";
// import Logo from "/public/images/logo.svg"
// import Image from "next/image";

const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 w-full border-b border-transparent bg-gray max-md:border-gray-100">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 md:px-8"
        aria-label="Global"
      >
        <div className="flex md:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <span> </span>

            <Logo className="h-6 w-auto" />
          </a>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900 "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden md:flex md:gap-x-12 md:justify-end md:items-center">
          <Link href={"#about"}>
            <Typography variant="body1" className="hover:text-gray-950">
              About
            </Typography>
          </Link>
          <Link href={"#experience"}>
            <Typography variant="body1" className="hover:text-gray-950">
              Experience
            </Typography>
          </Link>
          <Link href={"#work"}>
            <Typography variant="body1" className="hover:text-gray-950">
              Work
            </Typography>
          </Link>
          <Link href={"#contact"}>
            <Typography variant="body1" className="hover:text-gray-950">
              Contact
            </Typography>
          </Link>
          <div className="flex gap-2 justify-end items-center border-l-2 pl-4 border-gray-100">
            <ThemeSwitcher />
          
            <SimpleButton  onClick={() => window?.open('/files/birnesh_resume.pdf', '_blank')}>{"Download CV"}</SimpleButton>
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Logo className="h-6 w-auto" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <a
                href="#about"
                className="-mx-3 block rounded-md px-3 py-2 text-base  leading-7 text-gray-900  hover:bg-gray-50 "
              >
                About
              </a>
              <a
                href="#experience"
                className="-mx-3 block rounded-md px-3 py-2 text-base  leading-7 text-gray-900  hover:bg-gray-50 "
              >
                Experiences
              </a>
              <a
                href="#work"
                className="-mx-3 block rounded-md px-3 py-2 text-base  leading-7 text-gray-900  hover:bg-gray-50 "
              >
                Work
              </a>
              <a
                href="#contact"
                className="-mx-3 block rounded-md px-3 py-2 text-base  leading-7 text-gray-900  hover:bg-gray-50 "
              >
                Contact
              </a>
            </div>
            <div className="space-y-2 py-6">
              <div className="flex items-center justify-between">
                <span>{"Switch Theme"}</span>
                <ThemeSwitcher />
              </div>
              <SimpleButton className="w-full" onClick={() => window?.open('/files/birnesh_resume.pdf', '_blank')}>Download CV</SimpleButton>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default NavigationBar;
