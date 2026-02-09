import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Camera Assistant",
    description:
      "Precision focus pulling, camera setup, and on-set technical support for seamless productions.",
    href: "/camera-assistant",
    image: "/camera-assistant-hero.jpg",
  },
  {
    title: "Cinematographer",
    description:
      "Visual storytelling through thoughtful composition, movement, and a deep understanding of the frame.",
    href: "/cinematographer",
    image: "/cinematographer-hero.jpg",
  },
  {
    title: "Lighting",
    description:
      "Crafting atmosphere and emotion through light -- from naturalistic setups to dramatic, sculpted scenes.",
    href: "/lighting",
    image: "/lighting-hero.jpg",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-cinema.jpg"
            alt="Cinematic film set with dramatic lighting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <p className="mb-6 text-xs tracking-[0.4em] uppercase text-primary">
            Cinematographer &middot; Camera Assistant &middot; Lighting
          </p>
          <h1 className="font-serif text-5xl leading-tight text-foreground md:text-7xl lg:text-8xl text-balance">
            Melissa Karam
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Crafting visual narratives through light, movement, and meticulous
            attention to the art of cinema.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/portfolio"
              className="group flex items-center gap-2 bg-primary px-8 py-3 text-xs tracking-[0.2em] uppercase text-primary-foreground transition-all hover:bg-primary/90"
            >
              View Portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/cinematographer"
              className="flex items-center gap-2 border border-border px-8 py-3 text-xs tracking-[0.2em] uppercase text-foreground transition-all hover:border-primary hover:text-primary"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              Scroll
            </span>
            <div className="h-12 w-px bg-gradient-to-b from-primary/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* Services / Disciplines */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-20 max-w-xl">
            <p className="mb-3 text-xs tracking-[0.3em] uppercase text-primary">
              Work
            </p>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl text-balance">
              Projects
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Here is a curated selection of projects which I have been a part
              of, from music videos, to short student films, along with links to
              these projects and more details about each.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative overflow-hidden border border-border/50 bg-card transition-all hover:border-primary/30"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/40 transition-opacity group-hover:opacity-0" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-primary transition-all group-hover:gap-3">
                    Explore
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brief About */}
      <section className="border-t border-border/50 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <p className="mb-3 text-xs tracking-[0.3em] uppercase text-primary">
                About
              </p>
              <h2 className="font-serif text-3xl text-foreground md:text-4xl text-balance">
                Passionate about image and storytelling
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                I&apos;m a film school graduate with a passion for image and
                storytelling, currently seeking work as an image technician in
                the film industry. My background spans both technical and
                creative roles on set, including experience as a camera
                assistant, focus puller, spark, and cinematographer.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Alongside narrative and professional film projects, I&apos;ve also
                worked as a videographer on wedding shoots, promotional videos
                and occasional photography. I&apos;m always looking to collaborate
                with a team, create and bring visions to life. I am open to work
                in Paris and throughout France, and always eager to take on new
                projects.
              </p>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/fashion-model-black-and-white.jpg"
                alt="Behind the scenes portrait"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 border border-primary/10" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
