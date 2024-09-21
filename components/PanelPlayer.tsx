// /components/PanelPlayer.tsx
"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  Play,
  Pause,
  Volume2,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { usePlayer } from "@/context/PlayerContext";
import TrackListDropdown from "./TrackListDropdown";
import { Range } from "react-range";
import { tracks } from "@/data/track-list";
import { IcOutlinePlayCircleFilled } from "./svg/IcOutlinePlayCircleFilled";
import { IcOutlinePauseCircleFilled } from "./svg/IcOutlinePauseCircleFilled";
import { IonPlaySkipBackSharp } from "./svg/IonPlaySkipBackSharp";

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

const PanelPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { currentTrack, setCurrentTrack, setCurrentlyPlayingTrack } =
    usePlayer();
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPanelVisible, setIsPanelVisible] = useState(true);

  useEffect(() => {
    if (audioRef.current && currentTrack) {
      const handleLoadedMetadata = () => {
        setDuration(audioRef.current?.duration || 0);
      };

      const handlePlay = () => {
        setIsPlaying(true);
      };

      const handlePause = () => {
        setIsPlaying(false);
      };

      audioRef.current.src = currentTrack.src;
      audioRef.current.play();
      audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
      audioRef.current.addEventListener("play", handlePlay);
      audioRef.current.addEventListener("pause", handlePause);

      return () => {
        audioRef.current?.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata,
        );
        audioRef.current?.removeEventListener("play", handlePlay);
        audioRef.current?.removeEventListener("pause", handlePause);
      };
    }
  }, [currentTrack]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleVolumeChange = (values: number[]) => {
    const newVolume = values[0];
    setVolume(newVolume);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setProgress(
        (audioRef.current.currentTime / audioRef.current.duration) * 100 || 0,
      );
    }
  };

  const handleProgressChange = (values: number[]) => {
    const newProgress = values[0];
    setProgress(newProgress);
    if (audioRef.current) {
      audioRef.current.currentTime =
        (newProgress / 100) * audioRef.current.duration;
    }
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNextTrack = () => {
    const currentIndex = tracks.findIndex(
      (track) => track.id === currentTrack?.id,
    );
    const nextIndex = (currentIndex + 1) % tracks.length;
    setCurrentTrack(tracks[nextIndex]);
    setCurrentlyPlayingTrack({ id: tracks[nextIndex].id, isPlaying: true });

    if (audioRef.current) {
      // Проверка на null
      audioRef.current.src = tracks[nextIndex].src;
      audioRef.current.play();
    }
  };

  const handlePreviousTrack = () => {
    const currentIndex = tracks.findIndex(
      (track) => track.id === currentTrack?.id,
    );
    const previousIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrack(tracks[previousIndex]);
    setCurrentlyPlayingTrack({ id: tracks[previousIndex].id, isPlaying: true });

    if (audioRef.current) {
      // Проверка на null
      audioRef.current.src = tracks[previousIndex].src;
      audioRef.current.play();
    }
  };

  const togglePanelVisibility = () => {
    setIsPanelVisible(!isPanelVisible);
  };

  const [isPWA, setIsPWA] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    try {
      setIsPWA(window.matchMedia("(display-mode: standalone)").matches);
      const userAgent = navigator.userAgent.toLowerCase();
      setIsIOS(/iphone|ipad|ipod/.test(userAgent));
    } catch (error) {
      console.error("Error during detection:", error);
    }
  }, []);

  const PanelPlayerClass = isPWA
    ? isIOS
      ? "bottom-20"
      : "bottom-14"
    : "bottom-14";

  if (!currentTrack) return null;

  return (
    <>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        className="hidden"
      />

      <div className={`sticky inset-x-0 z-20 md:bottom-0 ${PanelPlayerClass}`}>
        <div className="absolute inset-x-0 -top-8 z-20 flex justify-end px-4 pb-2">
          <button
            className="rounded-full bg-white/70 backdrop-blur-xl"
            onClick={togglePanelVisibility}
          >
            {isPanelVisible ? (
              <ChevronDown className="h-6 w-6 text-foreground" />
            ) : (
              <ChevronUp className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {isPanelVisible && (
          <div className="bg-slate-950/20 backdrop-blur-xl">
            <div className="flex flex-col gap-y-2 px-6 py-2 md:py-4">
              <div className="flex items-center gap-x-4">
                <div className="flex flex-1 items-center">
                  <div className="flex min-w-10 shrink-0 justify-start text-xs opacity-30">
                    {formatTime(currentTime)}
                  </div>

                  <div className="flex-1">
                    <Range
                      step={1}
                      min={0}
                      max={100}
                      values={[progress]}
                      onChange={handleProgressChange}
                      renderTrack={({ props, children }) => (
                        <div
                          {...props}
                          className={`${props.style} h-1 w-full rounded-full bg-white/20 backdrop-blur-lg`}
                        >
                          {children}
                        </div>
                      )}
                      renderThumb={({ props }) => (
                        <div
                          {...props}
                          className={`${props.style} h-4 w-4 rounded-lg bg-muted outline-none`}
                        />
                      )}
                    />
                  </div>

                  <div className="flex min-w-10 shrink-0 justify-end text-xs opacity-30">
                    {formatTime(duration)}
                  </div>
                </div>

                <div className="hidden shrink-0 md:block">
                  <Range
                    step={0.01}
                    min={0}
                    max={1}
                    values={[volume]}
                    onChange={handleVolumeChange}
                    renderTrack={({ props, children }) => (
                      <div
                        {...props}
                        className={`${props.style} h-1 w-20 rounded-full bg-white/20 backdrop-blur-lg`}
                      >
                        {children}
                      </div>
                    )}
                    renderThumb={({ props }) => (
                      <div
                        {...props}
                        className={`${props.style} h-4 w-4 rounded-lg bg-muted outline-none`}
                      />
                    )}
                  />
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex flex-1 items-center gap-x-2">
                  <div className="shrink-0">
                    <img
                      src={currentTrack.preview}
                      alt={currentTrack.title}
                      className="h-10 w-10 rounded"
                    />
                  </div>

                  <div>
                    <h4 className="line-clamp-1 text-sm font-bold">
                      {currentTrack.title}
                    </h4>
                    <p className="line-clamp-1 text-xs">
                      {currentTrack.artists}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center justify-center md:gap-x-4">
                  <button
                    className="hidden md:block"
                    onClick={handlePreviousTrack}
                  >
                    <IonPlaySkipBackSharp className="h-6 w-6 opacity-50 duration-200 hover:opacity-100" />
                  </button>

                  <button onClick={handlePlayPause}>
                    {isPlaying ? (
                      <IcOutlinePauseCircleFilled className="h-10 w-10 rounded-full transition duration-200 hover:scale-105 md:h-12 md:w-12" />
                    ) : (
                      <IcOutlinePlayCircleFilled className="h-10 w-10 rounded-full transition duration-200 hover:scale-105 md:h-12 md:w-12" />
                    )}
                  </button>

                  <button className="hidden md:block" onClick={handleNextTrack}>
                    <IonPlaySkipBackSharp className="h-6 w-6 rotate-180 opacity-50 duration-200 hover:opacity-100" />
                  </button>
                </div>

                <div className="ml-4 flex items-center justify-end md:ml-0 md:flex-1">
                  <TrackListDropdown />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PanelPlayer;
