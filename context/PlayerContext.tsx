// /context/PlayerContext.tsx
'use client'

import React, { createContext, useContext, useState } from 'react'

interface Track {
  id: number
  src: string
  preview: string
  title: string
  artists: string
}

interface PlayerContextType {
  currentTrack: Track | null
  setCurrentTrack: React.Dispatch<React.SetStateAction<Track | null>>
  currentlyPlayingTrack: { id: number | null; isPlaying: boolean }
  setCurrentlyPlayingTrack: React.Dispatch<
    React.SetStateAction<{ id: number | null; isPlaying: boolean }>
  >
  isPlaying: boolean
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined)

export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null)
  const [currentlyPlayingTrack, setCurrentlyPlayingTrack] = useState<{
    id: number | null
    isPlaying: boolean
  }>({ id: null, isPlaying: false })
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  return (
    <PlayerContext.Provider
      value={{
        currentTrack,
        setCurrentTrack,
        currentlyPlayingTrack,
        setCurrentlyPlayingTrack,
        isPlaying,
        setIsPlaying,
      }}>
      {children}
    </PlayerContext.Provider>
  )
}

// Указываем тип возвращаемого значения для usePlayer
export const usePlayer = (): PlayerContextType => {
  const context = useContext(PlayerContext)
  if (!context) {
    throw new Error('usePlayer must be used within a PlayerProvider')
  }
  return context
}
