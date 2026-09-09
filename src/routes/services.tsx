import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, CircleDollarSign, Settings2, UsersRound } from "lucide-react";
import { useMemo } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/services")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "HR Consulting Services | SRAS Consulting" },
      {
        name: "description",
        content:
          "Technical employment, HR management, payroll processing and turnkey recruitment services from SRAS Consulting, Hyderabad.",
      },
      { property: "og:title", content: "HR Consulting Services | SRAS Consulting" },
      {
        property: "og:description",
        content: "We specialize in scouting for the best talent in the industry.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  const services = useMemo(
    () => [
      {
        icon: Briefcase,
        title: "Technical Employment",
        text: "Whether full time or on a project basis, we identify and provide the best resources — professionals who bring strong industry skillsets and technical know-how to make your project a success.",
      },
      {
        icon: UsersRound,
        title: "HR Management",
        text: "Outsource your HR business process and let us take care of internal functions that are time and cost intensive. Our experience with the nuances of business lets us shape a solution that fits.",
      },
      {
        icon: CircleDollarSign,
        title: "Payroll Processing",
        text: "Ensuring employees get paid seamlessly is critical to a smooth workplace. Outsourcing payroll lets SRAS take over statutory compliance and tax-related matters entirely.",
      },
      {
        icon: Settings2,
        title: "Turnkey Services",
        text: "From recruitment to onboarding to payroll and employee management, our turnkey services let you outsource your recruitment arm and have it managed end to end.",
      },
    ],
    [],
  );

  return (
    <>
      <PageHero
        eyebrow="SERVICES"
        title="HR consulting built around the right people"
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=60"
      >
        We specialize in scouting for the best talent in the industry. Whether it is short-term
        hires or outsourced human resource management, SRAS Consulting is fully equipped to handle
        any IT requirement your business might have.
      </PageHero>

      <section className="bg-background py-20 md:py-28">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.28em] text-electric">
              THE RIGHT PEOPLE ARE KEY TO YOUR SUCCESS
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-navy md:text-4xl">
              End-to-end IT services that remove the cost of hiring
            </h2>
            <p className="mt-5 text-muted-foreground">
              While you manage your business, we'll provide the talent to run it seamlessly. Our
              expert team is built to find and recruit the best talent in the industry, for every
              resource requirement you have.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <article className="h-full rounded-xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-electric/40 hover:shadow-lg">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy">
                    <s.icon className="h-5 w-5 text-gold" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-navy">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need resources on the ground this month?"
        text="Share your role requirements and we'll return a vetted shortlist with commercial options."
      />
    </>
  );
}
