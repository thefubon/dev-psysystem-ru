// TrackList.tsx
import React from "react";
import { tracks, Track } from "@/data/track-list";
import { usePlayer } from "@/context/PlayerContext";
import TrackCard from "./TrackCard";

interface TrackListProps {
  onSelect: (src: string) => void;
  currentlyPlayingTrack: { id: number | null; isPlaying: boolean };
  setCurrentlyPlayingTrack: React.Dispatch<
    React.SetStateAction<{ id: number | null; isPlaying: boolean }>
  >;
}

const TrackList: React.FC<TrackListProps> = ({
  onSelect,
  currentlyPlayingTrack,
  setCurrentlyPlayingTrack,
}) => {
  const { currentTrack, setCurrentTrack, isPlaying, setIsPlaying } =
    usePlayer();

  const handleTrackChange = (track: Track) => {
    if (track.id !== currentTrack?.id) {
      setCurrentTrack(track);
      setIsPlaying(true);
      onSelect(track.src);
      setCurrentlyPlayingTrack({ id: track.id, isPlaying: true });
    } else {
      setIsPlaying(!isPlaying);
      setCurrentlyPlayingTrack({ id: track.id, isPlaying: !isPlaying });
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 2xl:gap-8">
      {tracks
        .slice()
        .reverse()
        .map((track) => (
          <div
            key={track.id}
            className="cursor-pointer space-y-2"
            onClick={() => handleTrackChange(track)}
          >
            {/* Обложка */}
            <TrackCard
              src={track.preview}
              alt={track.title}
              track={track}
              currentTrack={currentTrack}
            />
          </div>
        ))}
    </div>
  );
};

export default TrackList;
