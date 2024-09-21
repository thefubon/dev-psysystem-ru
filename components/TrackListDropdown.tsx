// /components/TrackListDropdown.tsx
import { usePlayer } from "@/context/PlayerContext";
import { tracks, Track } from "@/data/track-list";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Play, ListMusic, CircleX, AudioLines } from "lucide-react";

const TrackListDrawer: React.FC = () => {
  const { currentTrack, setCurrentTrack, isPlaying, setIsPlaying } =
    usePlayer();

  const handleTrackChange = (track: Track) => {
    if (track.id !== currentTrack?.id) {
      setCurrentTrack(track);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Drawer>
      <DrawerTrigger>
        <button className="flex items-center opacity-50 duration-200 hover:opacity-100">
          <ListMusic size={32} />
        </button>
      </DrawerTrigger>
      <DrawerContent
        className="z-[999] w-full overflow-hidden bg-gray-900/75 p-4 text-white outline-none ring-0 backdrop-blur-lg transition-transform duration-700 ease-in-out md:container"
        style={{ maxHeight: "calc(100vh - 2rem)" }}
      >
        <div className="flex items-center justify-center pb-2">
          <div className="h-1 w-[40px] rounded-full bg-muted/30" />
        </div>

        <div className="scroll-smoothspace-y-4 max-h-[80vh] overflow-y-auto">
          {tracks
            .slice()
            .reverse()
            .map((trackItem) => (
              <div
                key={trackItem.id}
                className="flex cursor-pointer items-center space-x-4 rounded-xl p-2 hover:bg-slate-800/20"
                onClick={() => handleTrackChange(trackItem)}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={trackItem.preview}
                    alt={trackItem.title}
                    className="h-16 w-16"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    {trackItem.id === currentTrack?.id && (
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/10 text-center backdrop-blur-lg">
                        <AudioLines size={36} />
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="flex-grow font-bold">{trackItem.title}</h4>
                  <p className="text-sm">{trackItem.artists}</p>
                </div>
              </div>
            ))}
        </div>

        <DrawerClose asChild className="absolute right-4 top-4 cursor-pointer">
          <CircleX size={32} className="text-muted/50" />
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
};

export default TrackListDrawer;
