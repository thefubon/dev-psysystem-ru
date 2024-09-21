"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AudioWaveform, Languages, Sun } from "lucide-react";
import Image from "next/image";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations } from "next-intl";
import { ModeToggle } from "./ModeToggle";

const Navbar: React.FC = () => {
  const t = useTranslations("NavbarPage");
  const pathname = usePathname();

  const navItems = [
    { label: t("music"), path: "/music" },
    { label: t("artists"), path: "/artists" },
    { label: t("about"), path: "/about" },
    { label: t("contacts"), path: "/contacts" },
  ];

  return (
    <nav className="sticky top-0 z-20 bg-slate-950/20 backdrop-blur-xl">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-x-3 lg:flex-1">
            <AudioWaveform size={36} className="text-white" />

            <Image
              src="/logo-white.svg"
              width="1032"
              height="257"
              alt="PsySystem Records"
              className="w-32"
              priority
            />
          </Link>

          <div className="hidden items-center space-x-1 md:flex lg:shrink-0 lg:space-x-4">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link key={item.path} href={item.path}>
                  <span
                    className={`rounded-md px-3 py-2 text-sm font-bold uppercase text-background lg:text-lg ${
                      isActive && "bg-background !text-foreground"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-x-4 lg:flex-1 lg:justify-end">
            <LocaleSwitcher />
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
