// /app/page.tsx
import React from "react";
import { useTranslations } from "next-intl";
import { Hero } from "@/components/Hero";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <>
      <Hero />

      <div className="container py-4">
        <h1 className="text-4xl font-semibold">{t("title")}</h1>
      </div>

      <div className="h-[1500px]"></div>
    </>
  );
}
