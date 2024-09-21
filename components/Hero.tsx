"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 7000, stopOnInteraction: true }),
  );

  const t = useTranslations("Hero");

  const HeroSlides = [
    {
      background: "bg-yellow-300",
      textColor: "text-black",

      title: t("slide01.title"),
      meta: t("slide01.meta"),

      button: t("slide01.button"),
      urlButton: "/about",

      images: "/hero/FubonMaskot.png",
      sizeImages: "w-[180px] md:w-[200px]",
    },

    {
      background: "bg-red-600",
      images: "/hero/NewTrack.png",
      sizeImages:
        "w-[360px] md:w-[380px] relative -right-[20px] md:-right-[50px] bottom-2",

      textColor: "text-beckground",
      title: t("slide02.title"),
      meta: t("slide02.meta"),

      button: t("slide02.button"),
      urlButton: "/music",
    },

    {
      background: "bg-blue-600",
      images: "/hero/FubonMaskot.png",
      sizeImages: "w-[180px] md:w-[200px]",

      textColor: "text-background",
      title: t("slide03.title"),
      meta: t("slide03.meta"),

      button: t("slide03.button"),
      urlButton: "/about",
    },
  ];

  return (
    <>
      <div className="w-full">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            loop: true,
            align: "center",
          }}
          className="group w-full"
        >
          <CarouselContent>
            {HeroSlides.map((item, index) => (
              <CarouselItem key={index} className="basis-[85%] lg:basis-3/5">
                <div
                  className={`grid h-full overflow-hidden rounded-xl sm:grid-cols-2 ${item.background} ${item.textColor}`}
                >
                  <div className="flex flex-col gap-y-4 p-4 sm:justify-between">
                    <div className="grid gap-y-2">
                      <h2
                        className="font-stolzl text-4xl font-black md:text-5xl lg:text-6xl xl:text-7xl"
                        dangerouslySetInnerHTML={{
                          __html: item.title,
                        }}
                      />
                      <p
                        className="text-lg leading-snug"
                        dangerouslySetInnerHTML={{
                          __html: item.meta,
                        }}
                      />
                    </div>

                    <div>
                      <Button variant="default" className="rounded-lg" asChild>
                        <Link href={item.urlButton} title={item.button}>
                          {item.button}
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-end justify-center md:pt-4">
                    <Image
                      className={`h-fit ${item.sizeImages}`}
                      src={item.images}
                      width={1024}
                      height={1024}
                      alt=""
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="bottom-0 left-4 top-auto hidden h-12 w-12 border-none text-foreground opacity-0 transition group-hover:opacity-100 lg:flex" />
          <CarouselNext className="bottom-0 right-4 top-auto hidden h-12 w-12 border-none text-foreground opacity-0 transition group-hover:opacity-100 lg:flex" />
        </Carousel>
      </div>
    </>
  );
}
