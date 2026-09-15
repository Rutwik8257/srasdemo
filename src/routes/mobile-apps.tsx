import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { PageHero } from "@/components/site/PageHero";
import aiMobile from "@/assets/ai-mobile.jpg";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/mobile-apps")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Mobile App Development | SRAS Consulting" },
      {
        name: "description",
        content:
          "User-engaging Android, iOS and hybrid mobile applications built with the right strategy, creative design and high-end technology.",
      },
      { property: "og:title", content: "Mobile App Development | SRAS Consulting" },
      {
        property: "og:description",
        content: "Enhance your business potential with an innovative mobile app.",
      },
    ],
  }),
  component: MobileApps,
});

function MobileApps() {
  const platforms = useMemo(
    () => [
      {
        title: "Android",
        text: "Native Kotlin applications tuned for the wide range of devices your customers actually carry.",
      },
      {
        title: "iOS",
        text: "Swift applications that respect Apple's guidelines and feel effortless from the first launch.",
      },
      {
        title: "Hybrid",
        text: "One shared codebase across platforms when speed to market and budget both matter.",
      },
    ],
    [],
  );

  const steps = useMemo(
    () => [
      { n: "01", title: "Strategy", text: "We map the business outcome before a single screen is drawn." },
      { n: "02", title: "Creative design", text: "Interface work that makes the product feel considered." },
      { n: "03", title: "Engineering", text: "High-end technology, tested builds, predictable releases." },
      { n: "04", title: "Grow & manage", text: "Easy to manage apps with analytics and iteration built in." },
    ],
    [],
  );

  return (
    <>
      <PageHero
        image={aiMobile}
        eyebrow="MOBILE APP DEVELOPMENT"
        title="Innovative mobile app development for Android, iOS and hybrid"
      >
        Enhance your business potential with an innovative mobile app. We specialize in developing
        user-engaging, trendy and easy to manage applications for Android, iOS and hybrid platforms.
      </PageHero>

      <section className="bg-background py-20 md:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <h2 className="text-3xl font-extrabold text-navy md:text-4xl">
              Products that delight your customers
            </h2>
            <p className="mt-5 text-muted-foreground">
              Driven by the right strategy, creative design and high-end technology, our native and
              hybrid app developers deliver products that grow your business.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {platforms.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="font-display text-lg font-bold text-navy">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07}>
              <div className="border-t-2 border-electric pt-5">
                <p className="font-display text-sm font-bold text-electric">{s.n}</p>
                <h3 className="mt-2 font-display text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        title="Do you need a mobile app for your business?"
        text="Contact us and explore our state-of-the-art mobile app development services."
      />
    </>
  );
}
