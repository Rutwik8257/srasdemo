import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, BadgeCheck, Boxes, Clock4, Users } from "lucide-react";
import { useMemo } from "react";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "SRAS Consulting Services | HR & Talent Partner in Hyderabad" },
      {
        name: "description",
        content:
          "Trusted end-to-end HR management, staffing and training from Hyderabad. 98% client retention, expert sourcing and flawless delivery.",
      },
      { property: "og:title", content: "SRAS Consulting Services | HR & Talent Partner" },
      {
        property: "og:description",
        content: "Build teams 6x faster with SRAS untapped, remote workforce.",
      },
    ],
  }),
  component: Home,
});

const HERO =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=70";

function Home() {
  const stats = useMemo(
    () => [
      { value: "98%", label: "Client retention rate" },
      { value: "6x", label: "Faster team build-out" },
      { value: "500+", label: "Roles closed" },
      { value: "48h", label: "Average shortlist time" },
    ],
    [],
  );

  const pillars = useMemo(
    () => [
      {
        icon: Users,
        title: "Custom talent pipelines",
        text: "Diverse, ready-to-hire professionals matched to your stack and culture, not just a resume dump.",
      },
      {
        icon: Clock4,
        title: "Streamlined multi-role hiring",
        text: "Fill several positions in parallel with one accountable partner and one clear process.",
      },
      {
        icon: Boxes,
        title: "Proprietary sourcing engine",
        text: "Technology plus expert recruiters combine to shorten every stage from sourcing to onboarding.",
      },
      {
        icon: BadgeCheck,
        title: "Flawless delivery process",
        text: "Benchmarks for delivery, quality and reliability that our clients renew year after year.",
      },
    ],
    [],
  );

  const services = useMemo(
    () => [
      {
        to: "/services" as const,
        title: "HR Consulting",
        text: "Technical employment, HR management, payroll processing and turnkey services.",
      },
      {
        to: "/corporate-training" as const,
        title: "Corporate Training",
        text: "HR and technology training programs delivered by seasoned facilitators.",
      },
      {
        to: "/mobile-apps" as const,
        title: "Mobile App Development",
        text: "User-engaging Android, iOS and hybrid applications built to grow your business.",
      },
      {
        to: "/web-development" as const,
        title: "Website Development",
        text: "Custom websites that reflect your brand and convert visitors into customers.",
      },
    ],
    [],
  );

  return (
    <>
      <section className="hero-navy relative overflow-hidden text-primary-foreground">
        <div className="container-x relative grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold tracking-[0.28em] text-gold"
            >
              HYDERABAD · HR MANAGEMENT · TECHNOLOGY
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="mt-5 text-4xl font-extrabold leading-[1.05] md:text-6xl"
            >
              A new way to build teams <span className="text-gold">on-demand</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.16 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/75"
            >
              SRAS is a Hyderabad-based consulting firm delivering trusted end-to-end HR management
              services. In a short time we became the vendor of choice for both MNCs and growing
              SMEs — setting the benchmark for delivery, quality and reliability.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.24 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-electric px-6 py-3 text-sm font-semibold text-electric-foreground transition-transform hover:-translate-y-0.5"
              >
                Start hiring with us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center rounded-md border border-white/25 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
              >
                Explore services
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <img
              src={HERO}
              alt="SRAS consultants collaborating with a client team"
              loading="lazy"
              decoding="async"
              width={1200}
              height={800}
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 left-6 rounded-xl bg-background px-5 py-4 text-navy shadow-xl">
              <p className="font-display text-2xl font-extrabold">98%</p>
              <p className="text-xs text-muted-foreground">client retention rate</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-12">
        <div className="container-x grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <p className="font-display text-3xl font-extrabold text-navy md:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.28em] text-electric">ABOUT US</p>
            <h2 className="mt-4 text-3xl font-extrabold text-navy md:text-4xl">
              A flexible, on-demand talent solution
            </h2>
            <p className="mt-5 text-muted-foreground">
              Our services are shaped by each client's unique needs and business compulsions, aimed
              at providing the best value for their money on our HRMS. What sets us apart is a
              flawless process and expert sourcing skills, powered by a highly motivated young team
              that constantly raises its own performance standards.
            </p>
            <p className="mt-4 text-muted-foreground">
              Finding, sourcing and vetting talent takes time — and you needed a team of highly
              skilled professionals ready to work yesterday. We build and manage teams using a
              combination of proprietary technology and a deep database of remote workers.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-electric/40 hover:shadow-lg">
                  <p.icon className="h-6 w-6 text-electric" />
                  <h3 className="mt-4 font-display text-lg font-bold text-navy">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.28em] text-electric">WHAT WE DO</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-extrabold text-navy md:text-4xl">
              One partner across people and technology
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.07}>
                <Link
                  to={s.to}
                  className="group flex h-full flex-col rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <h3 className="font-display text-lg font-bold text-navy">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{s.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-electric">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
