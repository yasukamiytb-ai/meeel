import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { ArrowRight } from "lucide-react"
import { Focus, Aperture, Settings, Clapperboard } from "@/components/icons" // Importing the undeclared variables

export const metadata: Metadata = {
  title: "Camera Assistant | Melissa Karam",
  description:
    "Professional camera assistant services -- precision focus pulling, camera preparation, and technical on-set support.",
}

const credits = [
  { title: "It's Okay", type: "Music Video", year: "2025" },
  { title: "Normal", type: "Music Video", year: "2025" },
  { title: "Behind Closed Doors", type: "Short Film", year: "2025" },
  { title: "Hotel Cold Town", type: "Short Film", year: "2024" },
  { title: "Ni Oui Ni Non", type: "Short Film", year: "2024" },
  { title: "The Dancer in the Crowds", type: "Promotional Fashion Video", year: "2024" },
  { title: "Je n'aime plus ma voiture", type: "Short Film", year: "2023" },
  { title: "The Raining Room", type: "Short Film", year: "2023" },
  { title: "Human Hand", type: "Short Film", year: "2023" },
]

export default function CameraAssistantPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Camera Assistant"
        subtitle="On-Set Technical Support"
        description="From first-unit features to fast-paced commercials, I bring precision, reliability, and a deep technical knowledge to every camera department I join."
        imageSrc="/camera-assistant-hero.jpg"
        imageAlt="Hands adjusting a professional cinema camera lens"
      />

      {/* Selected Work */}
      <section className="border-t border-border/50 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="mb-3 text-xs tracking-[0.3em] uppercase text-primary">
                Filmography
              </p>
              <h2 className="font-serif text-3xl text-foreground md:text-4xl">
                Selected Work
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="hidden items-center gap-2 text-xs tracking-[0.2em] uppercase text-primary transition-all hover:gap-3 md:flex"
            >
              Full Portfolio
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="space-y-0">
            {credits.map((credit, i) => (
              <div
                key={i}
                className="group flex flex-col gap-2 border-b border-border/50 py-6 transition-colors hover:bg-card/50 md:flex-row md:items-center md:gap-0 md:px-4"
              >
                <span className="flex-1 font-serif text-lg text-foreground">
                  {credit.title}
                </span>
                <span className="text-sm text-muted-foreground md:w-64">
                  {credit.type}
                </span>
                <span className="text-sm text-muted-foreground md:w-20 md:text-right">
                  {credit.year}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/portfolio"
            className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-primary transition-all hover:gap-3 md:hidden"
          >
            Full Portfolio
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </section>


    </div>
  )
}
