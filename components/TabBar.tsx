"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Импортируем иконки
import Home01Icon from "./svg/home-01-stroke-rounded";
import PlayList01Icon from "./svg/playlist-01-stroke-rounded";
import clipboardIcon from "./svg/clipboard-stroke-rounded";
import MailAtSign01Icon from "./svg/mail-at-sign-01-stroke-rounded";
import userAccountIcon from "./svg/user-account-stroke-rounded";
import { useTranslations } from "next-intl";

// Определяем возможные ключи как литералы строк
type IconMapKeys =
  | "Home01Icon"
  | "PlayList01Icon"
  | "clipboardIcon"
  | "MailAtSign01Icon"
  | "userAccountIcon";

// Определяем объект с типами значений
const iconMap: Record<
  IconMapKeys,
  (props: React.SVGProps<SVGSVGElement>) => JSX.Element
> = {
  Home01Icon,
  PlayList01Icon,
  clipboardIcon,
  MailAtSign01Icon,
  userAccountIcon,
};

export default function TabBar() {
  const t = useTranslations("NavbarPage");
  const pathname = usePathname();

  const navItems = [
    { label: t("home"), path: "/", icon: "Home01Icon" },
    { label: t("music"), path: "/music", icon: "PlayList01Icon" },
    { label: t("artists"), path: "/artists", icon: "userAccountIcon" },
    { label: t("about"), path: "/about", icon: "clipboardIcon" },
    { label: t("contacts"), path: "/contacts", icon: "MailAtSign01Icon" },
  ];

  const [isPWA, setIsPWA] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    try {
      setIsPWA(window.matchMedia("(display-mode: standalone)").matches);
      const userAgent = navigator.userAgent.toLowerCase();
      setIsIOS(/iphone|ipad|ipod/.test(userAgent));

      const handleResize = () => setIsMobile(window.innerWidth < 768);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    } catch (error) {
      console.error("Error during detection:", error);
    }
  }, []);

  const tabBarClass = isPWA ? (isIOS ? "h-20" : "h-14") : "h-14";

  return (
    <>
      {isMobile && (
        <div
          className={`sticky bottom-0 z-20 border-t border-slate-900 bg-foreground px-6 pt-2 ${tabBarClass}`}
        >
          <div className="flex grid-cols-4 justify-between">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              const IconComponent = item.icon
                ? iconMap[item.icon as IconMapKeys]
                : null;

              return (
                <Link key={item.path} href={item.path}>
                  <div className="flex flex-col items-center justify-center gap-0.5 md:flex-row md:gap-2">
                    {IconComponent && (
                      <IconComponent
                        className={`h-6 w-6 text-white/50 ${
                          isActive ? "!text-white" : ""
                        }`}
                      />
                    )}
                    <span
                      className={`text-[10px] text-white/50 ${
                        isActive ? "!text-white" : ""
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
