import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { ArrowRight, Eye, Film, Palette, Video } from "lucide-react"

export const metadata: Metadata = {
  title: "Cinematographer | Melissa Karam",
  description:
    "Cinematography services -- visual storytelling through composition, camera movement, and a deep understanding of light.",
}

const pillars = [
  {
    icon: Eye,
    title: "Visual Language",
    description:
      "Every shot communicates. I work closely with directors to develop a visual language that amplifies the emotional core of the story.",
  },
  {
    icon: Film,
    title: "Camera Movement",
    description:
      "Motivated camera work that breathes with the narrative. From fluid Steadicam to locked-off compositions, movement serves meaning.",
  },
  {
    icon: Palette,
    title: "Color & Tone",
    description:
      "Collaborating with colorists from pre-production through final grade, ensuring a cohesive palette from set to screen.",
  },
  {
    icon: Video,
    title: "Format & Workflow",
    description:
      "Selecting the right camera, lenses, and workflow for each project -- balancing creative goals with practical production needs.",
  },
]

const selectedWork = [
  {
    title: "The Last Frame",
    type: "Narrative Feature",
    year: "2024",
    image: "/fashion-model-black-and-white.jpg",
  },
  {
    title: "Amber Light",
    type: "Short Film",
    year: "2023",
    image: "/red-lips-artistic-closeup.jpg",
  },
  {
    title: "Horizons",
    type: "Documentary",
    year: "2023",
    image: "/luxury-car-black-and-white.jpg",
  },
]

export default function CinematographerPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Cinematographer"
        subtitle="Director of Photography"
        description="I believe cinematography is the art of seeing -- finding the emotional truth of a scene and translating it into light, composition, and movement."
        imageSrc="/cinematographer-hero.jpg"
        imageAlt="Cinematographer operating camera on a dramatic film set"
      />

      {/* Pillars */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 max-w-xl">
            <p className="mb-3 text-xs tracking-[0.3em] uppercase text-primary">
              Philosophy
            </p>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl text-balance">
              Storytelling through the lens
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group border border-border/50 bg-card p-8 transition-all hover:border-primary/30"
              >
                <pillar.icon className="mb-6 h-6 w-6 text-primary" />
                <h3 className="font-serif text-lg text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="border-t border-border/50 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="mb-3 text-xs tracking-[0.3em] uppercase text-primary">
                Work
              </p>
              <h2 className="font-serif text-3xl text-foreground md:text-4xl">
                Selected Projects
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="hidden items-center gap-2 text-xs tracking-[0.2em] uppercase text-primary transition-all hover:gap-3 md:flex"
            >
              View All
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {selectedWork.map((work) => (
              <Link
                key={work.title}
                href="/portfolio"
                className="group relative overflow-hidden"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={work.image || "/placeholder.svg"}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/30 transition-opacity group-hover:bg-background/10" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-xs tracking-[0.2em] uppercase text-primary">
                      {work.type} &middot; {work.year}
                    </p>
                    <h3 className="mt-1 font-serif text-xl text-foreground">
                      {work.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <p className="mb-3 text-xs tracking-[0.3em] uppercase text-primary">
                Vision
              </p>
              <h2 className="font-serif text-3xl text-foreground md:text-4xl text-balance">
                Every frame is a conversation
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                My approach to cinematography is rooted in collaboration. I see
                the role of DP as a translator -- taking the director&apos;s
                emotional intention and finding its visual expression. This
                means deep conversations in pre-production, creative
                experimentation on set, and a willingness to serve the story
                above all else.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Whether it&apos;s a handheld intimacy for a documentary or
                sweeping anamorphic compositions for a feature, I adapt my
                visual toolkit to what the narrative demands.
              </p>
            </div>
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/product-design-minimalist-black-and-white.jpg"
                alt="Cinematic composition example"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 border border-primary/10" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
