import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { ArrowRight, Sun, Lightbulb, Zap, Layers } from "lucide-react"

export const metadata: Metadata = {
  title: "Lighting | Melissa Karam",
  description:
    "Professional lighting services for film, commercial, and documentary productions. Sculpting emotion through light.",
}

const capabilities = [
  {
    icon: Sun,
    title: "Natural Light",
    description:
      "Harnessing and shaping available light to create organic, authentic imagery. Working with the sun, windows, and practicals.",
  },
  {
    icon: Lightbulb,
    title: "Studio Lighting",
    description:
      "Controlled environments for precise, repeatable results. From beauty setups to dramatic chiaroscuro for narrative work.",
  },
  {
    icon: Zap,
    title: "Grip & Electric",
    description:
      "Full grip and electric department experience including power distribution, rigging, and advanced modifier techniques.",
  },
  {
    icon: Layers,
    title: "Atmospheric Lighting",
    description:
      "Creating depth and mood with haze, practicals, and motivated sources that bring a scene to life with dimension.",
  },
]

const lightingStyles = [
  {
    title: "Cinematic Narrative",
    description: "Dramatic, motivated lighting that serves the emotional arc of the story. Hard light, deep shadows, and carefully placed practicals.",
    image: "/lighting-hero.jpg",
  },
  {
    title: "Commercial & Beauty",
    description: "Clean, polished light setups designed for product photography, beauty work, and brand campaigns that demand precision.",
    image: "/product-design-minimalist-black-and-white.jpg",
  },
  {
    title: "Documentary & Available Light",
    description: "Fast, adaptable lighting for documentary and run-and-gun work. Making the most of what the location gives you.",
    image: "/modern-architecture-black-and-white.jpg",
  },
]

export default function LightingPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Lighting"
        subtitle="Light Design & Grip"
        description="Light is the most powerful storytelling tool on set. I specialize in crafting lighting that feels motivated, emotional, and true to the world of the story."
        imageSrc="/lighting-hero.jpg"
        imageAlt="Professional film lighting setup with dramatic beams"
      />

      {/* Capabilities */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16 max-w-xl">
            <p className="mb-3 text-xs tracking-[0.3em] uppercase text-primary">
              Capabilities
            </p>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl text-balance">
              Painting with light
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              From subtle fill to dramatic hard light, every setup is designed
              to support the narrative and elevate the visual experience.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="group border border-border/50 bg-card p-8 transition-all hover:border-primary/30"
              >
                <cap.icon className="mb-6 h-6 w-6 text-primary" />
                <h3 className="font-serif text-lg text-foreground">
                  {cap.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lighting Styles */}
      <section className="border-t border-border/50 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16">
            <p className="mb-3 text-xs tracking-[0.3em] uppercase text-primary">
              Styles
            </p>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">
              Adaptable to every genre
            </h2>
          </div>

          <div className="space-y-16">
            {lightingStyles.map((style, i) => (
              <div
                key={style.title}
                className={`grid items-center gap-12 md:grid-cols-2 ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
              >
                <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={style.image || "/placeholder.svg"}
                      alt={style.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 border border-primary/10" />
                  </div>
                </div>
                <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <h3 className="font-serif text-2xl text-foreground">
                    {style.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {style.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & CTA */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/red-lips-artistic-closeup.jpg"
                alt="Dramatic lighting example"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 border border-primary/10" />
            </div>
            <div>
              <p className="mb-3 text-xs tracking-[0.3em] uppercase text-primary">
                Equipment
              </p>
              <h2 className="font-serif text-3xl text-foreground md:text-4xl text-balance">
                The right tools for every scene
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                I work with a wide range of professional lighting equipment
                including ARRI SkyPanels, Aputure fixtures, HMIs, Tungsten
                units, and LED panels. My grip kit includes C-stands, flags,
                silks, and everything needed to shape and control light on set.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Equipment choices are always driven by the creative brief and
                budget, ensuring the most impactful results regardless of scale.
              </p>
              <Link
                href="/portfolio"
                className="mt-8 inline-flex items-center gap-2 bg-primary px-8 py-3 text-xs tracking-[0.2em] uppercase text-primary-foreground transition-all hover:bg-primary/90"
              >
                See My Work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
