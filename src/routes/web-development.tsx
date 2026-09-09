import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/web-development")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Website Development | SRAS Consulting" },
      {
        name: "description",
        content:
          "Custom, future-ready web development that reflects your brand aesthetic and converts visitors into customers.",
      },
      { property: "og:title", content: "Website Development | SRAS Consulting" },
      {
        property: "og:description",
        content: "Build a unique website to convert visitors into customers.",
      },
    ],
  }),
  component: WebDev,
});

function WebDev() {
  const offerings = useMemo(
    () => [
      {
        title: "Brand-true design",
        text: "Your website should reflect your brand aesthetic and encourage your audience to rely on your business.",
      },
      {
        title: "Collaborative process",
        text: "Our custom web development is the outcome of working closely with you at every stage, not a template hand-off.",
      },
      {
        title: "Future-ready builds",
        text: "Fast, accessible, search-friendly sites engineered to stay maintainable as your business grows.",
      },
      {
        title: "Immersive experience",
        text: "Considered motion, clear hierarchy and content that guides visitors toward getting in touch.",
      },
    ],
    [],
  );

  return (
    <>
      <PageHero
        eyebrow="WEBSITE DEVELOPMENT"
        title="Build a unique website to convert visitors into customers"
        image="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1600&q=60"
      >
        A website is an integral entity of your business. Engage our innovative and future-ready web
        development services to offer visitors an immersive digital experience.
      </PageHero>

      <section className="bg-background py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <img
              src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=60"
              alt="Website design work in progress"
              loading="lazy"
              decoding="async"
              width={1200}
              height={900}
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {offerings.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.08}>
                <div className="h-full rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="font-display text-base font-bold text-navy">{o.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{o.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's build a site that works as hard as your team"
        text="Tell us about your brand and goals — we'll come back with a scope, timeline and estimate."
      />
    </>
  );
}
