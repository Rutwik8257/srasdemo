import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Contact SRAS Consulting Services, Secunderabad" },
      {
        name: "description",
        content:
          "Reach out to SRAS Consulting Services in Secunderabad for HR consulting, corporate training, and technology services.",
      },
      { property: "og:title", content: "Contact SRAS Consulting Services" },
      {
        property: "og:description",
        content: "Reach out to SRAS Consulting Services in Secunderabad.",
      },
      { property: "og:url", content: "https://srasdemo.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://srasdemo.lovable.app/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "SRAS Consulting Services",
          url: "https://srasdemo.lovable.app",
          email: "hr@srasconsulting.com",
          telephone: "+91-40-45068514",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Sri Mani Lalitha Nilayam, #6-4-386/A, Krishna Nagar Colony",
            addressLocality: "Secunderabad",
            addressRegion: "Telangana",
            postalCode: "500018",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero eyebrow="GET IN TOUCH" title="Contact SRAS Consulting Services">
        Reach out to us for HR consulting, corporate training, or technology services. Our team is
        here to help your business grow.
      </PageHero>

      <section className="bg-background py-20 md:py-28">
        <div className="container-x max-w-2xl">
          <Reveal>
            <div className="rounded-2xl bg-navy p-8 text-primary-foreground">
              <h2 className="font-display text-xl font-bold">Address</h2>
              <p className="mt-2 text-sm text-primary-foreground/70">
                If you want to visit us in person, here's where you can find us.
              </p>
              <ul className="mt-7 space-y-5 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <a
                    href="https://maps.app.goo.gl/eombWEJX66jxqG7H6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-gold"
                  >
                    SRAS Consulting Services
                    <br />
                    Sri Mani Lalitha Nilayam, #6-4-386/A,
                    <br />
                    Krishna Nagar Colony, Secunderabad,
                    <br />
                    Telangana-500018
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-gold" />
                  <a href="tel:04045068514">040-45068514</a>
                </li>
                <li className="flex gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-gold" />
                  <a href="mailto:hr@srasconsulting.com">hr@srasconsulting.com</a>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
