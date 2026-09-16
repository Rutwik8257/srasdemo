import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { memo } from "react";
import srasLogo from "@/assets/sras-logo.png";

export const Footer = memo(function Footer() {
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="container-x grid gap-10 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={srasLogo}
              alt="SRAS Consulting Services logo"
              width={44}
              height={44}
              loading="lazy"
              className="h-11 w-11 rounded-md bg-background object-contain p-1"
            />
            <p
              className="text-xl font-bold"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              SRAS Consulting Services
            </p>
          </div>
          <p className="mt-3 max-w-sm text-sm text-primary-foreground/70">
            End-to-end HR management, corporate training and technology services for MNCs and
            growing SMEs across Hyderabad.
          </p>
          <p className="mt-4 inline-block rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">
            98% client retention
          </p>
        </div>

        <div>
          <p className="font-display text-sm font-bold tracking-[0.18em] text-gold">EXPLORE</p>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/75">
            {[
              { to: "/services", label: "HR Consulting Services" },
              { to: "/corporate-training", label: "Corporate Trainings" },
              { to: "/mobile-apps", label: "Mobile App Development" },
              { to: "/web-development", label: "Website Development" },
              { to: "/careers", label: "Careers" },
              { to: "/contact", label: "Contact Us" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-bold tracking-[0.18em] text-gold">REACH US</p>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-electric" />
              <a
                href="https://maps.app.goo.gl/eombWEJX66jxqG7H6"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                Sri Mani Lalitha Nilayam, #6-4-386/A, Krishna Nagar Colony, Secunderabad,
                Telangana-500018
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-electric" />
              <a href="tel:04045068514" className="hover:text-gold">
                040-45068514
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-electric" />
              <a href="mailto:hr@srasconsulting.com" className="hover:text-gold">
                hr@srasconsulting.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container-x py-5 text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} SRAS Consulting Services. All rights reserved.
        </p>
      </div>
    </footer>
  );
});
