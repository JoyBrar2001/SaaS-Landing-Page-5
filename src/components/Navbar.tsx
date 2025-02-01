"use client";

import { useState } from "react";
import Image from "next/image";

import Button from "@/components/Button";
import logoImage from "@/assets/images/logo.svg";

import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
        <div className="container max-w-5xl">
          <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
            <div className="grid grid-cols-2 lg:grid-cols-3 py-2 px-4 md:pr-2 items-center">
              <div>
                <Image
                  src={logoImage}
                  alt="Layers Logo"
                  className="h-9 md:h-auto w-auto"
                />
              </div>

              <div className="hidden lg:flex justify-center items-center">
                <nav className="flex gap-6 font-medium">
                  {navLinks.map((link) => (
                    <a href={link.href} key={link.label}>
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="flex justify-end gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-menu md:hidden"
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  <line x1="3" y1="6" x2="21" y2="6"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "rotate-45 -translate-y-1"
                    )}
                  />
                  <line x1="3" y1="12" x2="21" y2="12"
                    className={twMerge(
                      "transition",
                      isOpen && "opacity-0"
                    )}
                  />
                  <line x1="3" y1="18" x2="21" y2="18"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "-rotate-45 translate-y-1"
                    )}
                  />
                </svg>

                <Button
                  size="sm"
                  variant="secondary"
                  className="hidden md:inline-flex"
                >
                  Log In
                </Button>

                <Button
                  size="sm"
                  variant="primary"
                  className="hidden md:inline-flex"
                >
                  Sign Up
                </Button>
              </div>
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col items-center gap-4 py-4">
                    {navLinks.map((link) => (
                      <a
                        className="py-2"
                        href={link.href}
                        key={link.label}
                      >
                        {link.label}
                      </a>
                    ))}
                    <Button size="sm" variant="secondary">
                      Log In
                    </Button>

                    <Button size="sm" variant="primary">
                      Sign In
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <div className="h-[86px] md:h-[98px] lg:h-[130px]" />
    </>
  );
}