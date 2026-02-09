"use client"

import { useState } from "react"
import { VideoCard } from "./video-card"
import { CustomCursor } from "./custom-cursor"

const projects = [
  {
    id: 1,
    title: "THE LAST FRAME",
    category: "CINEMATOGRAPHER",
    year: "2024",
    thumbnail: "/fashion-model-black-and-white.jpg",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: 2,
    title: "AMBER LIGHT",
    category: "CINEMATOGRAPHER",
    year: "2023",
    thumbnail: "/red-lips-artistic-closeup.jpg",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    id: 3,
    title: "NEON PULSE",
    category: "LIGHTING / GAFFER",
    year: "2023",
    thumbnail: "/portfolio-music-video.jpg",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    id: 4,
    title: "HORIZONS",
    category: "DOCUMENTARY",
    year: "2023",
    thumbnail: "/portfolio-doc.jpg",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: 5,
    title: "LUMIERE",
    category: "COMMERCIAL",
    year: "2022",
    thumbnail: "/portfolio-commercial.jpg",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  },
]

export function PortfolioGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <>
      <CustomCursor isActive={hoveredId !== null} />
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex gap-4 items-stretch">
          {projects.map((project) => (
            <VideoCard
              key={project.id}
              project={project}
              isHovered={hoveredId === project.id}
              onHoverChange={(hovered) =>
                setHoveredId(hovered ? project.id : null)
              }
            />
          ))}
        </div>
      </div>
    </>
  )
}
