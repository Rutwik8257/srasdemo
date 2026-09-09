import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { useMemo } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/careers")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Careers & Current Opportunities | SRAS Consulting" },
      {
        name: "description",
        content:
          "Current openings at SRAS Consulting Services, Hyderabad. Send your resume to our HR partner with the Position ID.",
      },
      { property: "og:title", content: "Careers | SRAS Consulting Services" },
      {
        property: "og:description",
        content: "We are always looking for great people to grow our talent base.",
      },
    ],
  }),
  component: Careers,
});

function Careers() {
  const roles = useMemo(
    () => [
      { id: "SRAS-101", title: "Senior Java Full Stack Developer", type: "Full time", loc: "Hyderabad" },
      { id: "SRAS-102", title: "React JS Developer", type: "Full time", loc: "Hyderabad / Remote" },
      { id: "SRAS-103", title: "IT Recruiter — Technical Hiring", type: "Full time", loc: "Secunderabad" },
      { id: "SRAS-104", title: "Payroll & Compliance Executive", type: "Full time", loc: "Secunderabad" },
      { id: "SRAS-105", title: "QA / Testing Engineer", type: "Contract", loc: "Hyderabad" },
      { id: "SRAS-106", title: "Corporate Trainer — Soft Skills", type: "Part time", loc: "Hyderabad" },
    ],
    [],
  );

  return (
    <>
      <PageHero
        eyebrow="CAREERS"
        title="Current opportunities at SRAS"
        image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1600&q=60"
      >
        SRAS Consulting Services is always looking for great people to grow its talent base. The
        positions listed below are immediately available — please send your resume to our HR partner
        with the Position ID.
      </PageHero>

      <section className="bg-background py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-4">
            {roles.map((r, i) => (
              <Reveal key={r.id} delay={i * 0.05}>
                <article className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-electric/40 hover:shadow-md sm:flex sm:justify-between">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold tracking-[0.18em] text-electric">{r.id}</p>
                    <h2 className="mt-1 truncate font-display text-lg font-bold text-navy">
                      {r.title}
                    </h2>
                    <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5 shrink-0" />
                      {r.loc} · {r.type}
                    </p>
                  </div>
                  <a
                    href={`mailto:hr@srasconsulting.com?subject=Application%20-%20${r.id}%20${encodeURIComponent(r.title)}`}
                    className="shrink-0 rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Apply
                  </a>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-10 rounded-xl bg-secondary p-6 text-sm text-muted-foreground">
              Don't see a match? Send your profile to{" "}
              <a href="mailto:hr@srasconsulting.com" className="font-semibold text-electric">
                hr@srasconsulting.com
              </a>{" "}
              and we'll keep you in our talent pipeline.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
