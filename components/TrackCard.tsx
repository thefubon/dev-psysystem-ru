// LazyImage.tsx
"use client";
import React, { useState, useEffect } from "react";
import { AudioLines, Play } from "lucide-react";
import { Skeleton } from "./ui/skeleton";
import { useTranslations } from "next-intl";

const TrackCard: React.FC<{
  src: string;
  alt: string;
  track?: any;
  currentTrack?: any;
}> = ({ src, alt, track, currentTrack }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoading(false);
  }, [src]);

  const t = useTranslations("TrackCard");

  return (
    <div className="relative overflow-hidden rounded-lg">
      {isLoading ? (
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-56 w-full rounded-xl bg-slate-900 lg:h-64 2xl:h-80" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full bg-slate-900" />
            <Skeleton className="h-4 w-1/2 bg-slate-900" />
          </div>
        </div>
      ) : (
        <>
          <div className="group relative">
            <img
              src={src}
              alt={alt}
              className="h-full w-full object-cover"
              onError={() => setIsLoading(false)}
            />

            <div className="absolute bottom-1.5 right-1.5 flex items-center justify-center">
              {track.id === currentTrack?.id ? (
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/10 text-center backdrop-blur-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-9 w-9"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path className="anim-line" d="M2 10v3"></path>
                    <path className="anim-line" d="M6 6v11"></path>
                    <path className="anim-line" d="M10 3v18"></path>
                    <path className="anim-line" d="M14 8v7"></path>
                    <path className="anim-line" d="M18 5v13"></path>
                    <path className="anim-line" d="M22 10v3"></path>
                  </svg>
                </div>
              ) : (
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/10 text-center opacity-0 backdrop-blur-lg duration-200 group-hover:opacity-100">
                  <Play size={28} className="text-white" />
                </div>
              )}
            </div>
          </div>

          <div className="mt-2 text-white">
            <h4 className="font-bold">{track.title}</h4>
            <p className="text-sm">{track.artists}</p>
            {track.data && (
              <p className="text-xs">
                {t("released")}: {track.data}
              </p>
            )}
          </div>

          {track?.new && (
            <div className="absolute left-1.5 top-1.5 rounded bg-yellow-500 px-1.5 py-0.5 text-xs font-medium text-yellow-950">
              Новое
            </div>
          )}

          {/* <div className="absolute right-1.5 top-1.5 rounded bg-background/50 px-1 py-0.5 text-xs font-bold text-foreground">
            {Math.floor(track?.duration / 60)}:
            {(track?.duration % 60).toString().padStart(2, "0")}
          </div> */}
        </>
      )}
    </div>
  );
};

export default TrackCard;
