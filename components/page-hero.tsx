import Image from "next/image"

interface PageHeroProps {
  title: string
  subtitle: string
  description: string
  imageSrc: string
  imageAlt: string
}

export function PageHero({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 lg:px-12">
        <p className="mb-3 text-xs tracking-[0.4em] uppercase text-primary">
          {subtitle}
        </p>
        <h1 className="font-serif text-4xl text-foreground md:text-6xl lg:text-7xl text-balance">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </section>
  )
}
