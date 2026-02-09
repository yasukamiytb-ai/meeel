import { Mail, Phone, Instagram, Linkedin } from "lucide-react"

export function ContactFooter() {
  return (
    <footer className="border-t border-border/50 bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Get in Touch */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg text-foreground">Get in Touch</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Available for freelance work and collaborations. Let&apos;s create
              something beautiful together.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:melissa.karam@email.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  melissa.karam@email.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg text-foreground">Follow</h3>
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
          <p className="text-xs tracking-widest text-muted-foreground">
            &copy; {new Date().getFullYear()} Melissa Karam. All rights reserved.
          </p>
          <p className="text-xs tracking-widest text-muted-foreground">
            Based in Beirut, Lebanon
          </p>
        </div>
      </div>
    </footer>
  )
}
