import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { useMemo } from "react";
import { PageHero } from "@/components/site/PageHero";
import aiTraining from "@/assets/ai-training.jpg";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/corporate-training")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Corporate Training Programs in Hyderabad | SRAS Consulting" },
      {
        name: "description",
        content:
          "HR and technology corporate training in Hyderabad — interview skills, campus to corporate, POSH, Java, .Net, Oracle, Python and React JS.",
      },
      { property: "og:title", content: "Corporate Trainings | SRAS Consulting" },
      {
        property: "og:description",
        content: "Programs that contribute to business and employee success.",
      },
    ],
  }),
  component: Training,
});

function Training() {
  const tracks = useMemo(
    () => [
      {
        label: "HR Training",
        items: ["Hire Right — Interview Skills Program", "Campus to Corporate Training", "POSH"],
      },
      {
        label: "Technology Training",
        items: [
          "Oracle Training",
          ".Net Training",
          "Java Training",
          "Testing Training",
          "Java Full Stack",
          "Python & React JS",
        ],
      },
    ],
    [],
  );

  return (
    <>
      <PageHero
        image={aiTraining}
        eyebrow="CORPORATE TRAININGS"
        title="Training programs that contribute to business and employee success"
      >
        Corporate training services are the need of the hour. As India's organisations evolve and
        reach new heights, teams need structured learning to keep pace — and Hyderabad, the new IT
        hub after Bangalore and Pune, is developing at an amazing pace.
      </PageHero>

      <section className="bg-background py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-navy md:text-4xl">
              Why training demand is surging in Hyderabad
            </h2>
            <p className="mt-5 text-muted-foreground">
              Start-ups with fresh ideas are mushrooming in every corner of the country while older
              organisations keep adding to the knowledge pool. Everyone is putting in effort to take
              the nation forward, and corporate service providers are going all out to fulfil this
              ever-expanding need for growth and development.
            </p>
            <p className="mt-4 text-muted-foreground">
              Training companies across Indian cities have started eyeing Hyderabad too. SRAS runs
              programs locally, with experienced professional trainers and facilitators who tailor
              content to your team's real day-to-day work.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {tracks.map((t, i) => (
              <Reveal key={t.label} delay={i * 0.1}>
                <div className="h-full rounded-xl border border-border bg-card p-7">
                  <p className="font-display text-lg font-bold text-navy">{t.label}</p>
                  <ul className="mt-5 space-y-3">
                    {t.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-electric" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to be part of Hyderabad's best corporate training program?"
        text="Connect with us today to organise training for your team and give them a chance to develop soft, behavioural and technical skills with experienced facilitators."
      />
    </>
  );
}
