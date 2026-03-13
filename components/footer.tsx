import Link from "next/link"
import Image from "next/image"
import { Linkedin, Mail, Phone } from "lucide-react"

const footerLinks = {
  about: [
    { name: "Our Company", href: "/about" },
    { name: "Vision & Mission", href: "/about#vision" },
    { name: "Core Values", href: "/about#values" },
    { name: "Why Choose Us", href: "/about#why-us" },
  ],
  services: [
    { name: "Civil Construction", href: "/services#civil" },
    { name: "MEP Contracting", href: "/services#mep" },
    { name: "Heavy Equipment", href: "/services#equipment" },
    { name: "Steel Fabrication", href: "/services#steel" },
    { name: "Manpower Supply", href: "/services#manpower" },
  ],
  industries: [
    { name: "Construction", href: "/industries#construction" },
    { name: "Oil and Gas", href: "/industries#oil-gas" },
    { name: "Infrastructure", href: "/industries#infrastructure" },
    { name: "Manufacturing", href: "/industries#manufacturing" },
  ],
  contact: [
    { name: "Contact Us", href: "/contact" },
    { name: "Get a Quote", href: "/contact?quote=true" },
    { name: "Careers", href: "/careers" },
    { name: "Projects", href: "/projects" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo & Info */}
          <div className="lg:col-span-1">
            <Image
              src="/images/triaxis-logo.png"
              alt="TRI-AXIS Logo"
              width={180}
              height={70}
              className="h-16 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Integrated Industrial & Construction Support Services across Saudi Arabia.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://wa.me/966509090476"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="WhatsApp"
              >
                <Phone size={18} />
              </a>
              <a
                href="mailto:sales@triaxis.sa"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">About</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Industries</h3>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Contact</h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2 text-sm text-primary-foreground/70">
              <p>CR: 7052609323</p>
              <p>VAT: 314418041800003</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              {new Date().getFullYear()} TRI-AXIS Company. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
              <span>Dammam, Eastern Province, KSA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
