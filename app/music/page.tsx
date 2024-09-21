// /app/music/page.tsx
"use client";

import React from "react";

import { usePlayer } from "@/context/PlayerContext";
import TrackList from "@/components/TrackList";

export default function MusicPage() {
  const { setCurrentTrack, currentlyPlayingTrack, setCurrentlyPlayingTrack } =
    usePlayer();

  const handleTrackSelect = (src: string) => {
    // Здесь ваш код для обработки выбора трека
  };

  return (
    <div className="p-6">
      <TrackList
        onSelect={handleTrackSelect}
        currentlyPlayingTrack={currentlyPlayingTrack}
        setCurrentlyPlayingTrack={setCurrentlyPlayingTrack}
      />
    </div>
  );
}
