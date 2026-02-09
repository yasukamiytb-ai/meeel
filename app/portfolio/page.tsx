import type { Metadata } from "next";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import Link from "next/link";
import projects from '@/data/portfolio.json';

export const metadata: Metadata = {
  title: "Portfolio | Melissa Karam",
  description:
    "Selected works by Melissa Karam -- cinematography, camera assistant, and lighting across narrative, commercial, and documentary projects.",
};

export default function PortfolioPage() {
  // Liste des projets avec leurs métadonnées
  const projects = [
    { title: "Behind Closed Doors", type: "Short Film", year: "2025", slug: "behind-closed-doors" },
    { title: "Hotel Cold Town", type: "Short Film", year: "2024", slug: "hotel-cold-town" },
    { title: "Human Hand", type: "Short Film", year: "2023", slug: "human-hand" },
    { title: "It's Okay", type: "Music Video", year: "2025", slug: "its-okay" },
    { title: "Je n'aime plus ma voiture", type: "Short Film", year: "2023", slug: "je-naime-plus-ma-voiture" },
    { title: "Ni Oui Ni Non", type: "Short Film", year: "2024", slug: "ni-oui-ni-non" },
    { title: "Normal", type: "Music Video", year: "2025", slug: "normal" },
    { title: "The Dancer in the Crowds", type: "Promotional Fashion Video", year: "2024", slug: "the-dancer-in-the-crowds" },
    { title: "The Raining Room", type: "Short Film", year: "2023", slug: "the-raining-room" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <p className="mb-3 text-xs tracking-[0.4em] uppercase text-primary">
            Selected Works
          </p>
          <h1 className="font-serif text-4xl text-foreground md:text-6xl lg:text-7xl">
            Portfolio
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            A curated selection of projects spanning narrative features, short
            films, commercials, documentaries, and music videos.
          </p>
        </div>
      </section>

      {/* Interactive Gallery */}
      <section className="pb-8">
        <PortfolioGallery />
      </section>

      {/* Full Credits List */}
      <section className="border-t border-border/50 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16">
            <p className="mb-3 text-xs tracking-[0.3em] uppercase text-primary">
              Full Credits
            </p>
            <h2 className="font-serif text-3xl text-foreground md:text-4xl">
              Filmography
            </h2>
          </div>

          <div className="space-y-0">
            {projects.map((project, i) => (
              <Link
                key={i}
                href={`/projects/${project.slug}`}
                className="group block border-b border-border/50 py-5 transition-colors hover:bg-card/50 md:px-4"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-0">
                  <span className="flex-1 font-serif text-lg text-foreground transition-colors group-hover:text-primary">
                    {project.title}
                  </span>
                  <span className="text-sm text-muted-foreground md:w-44">
                    {/* Remplacez par le rôle si nécessaire */}
                    {project.type === "Short Film" ? "Cinematographer / 1st AC" :
                      project.type === "Music Video" ? "Cinematographer" :
                        "Videographer"}
                  </span>
                  <span className="text-sm text-muted-foreground md:w-36">
                    {project.type}
                  </span>
                  <span className="text-sm text-muted-foreground md:w-20 md:text-right">
                    {project.year}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
