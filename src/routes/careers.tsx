import { createFileRoute } from "@tanstack/react-router";
import { BriefcaseBusiness, ChevronDown, MapPin } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import aiHr from "@/assets/ai-hr.jpg";
import { Reveal } from "@/components/site/Reveal";

type Role = {
  slug: string;
  title: string;
  experience: string;
  location: string;
  summary: string;
  responsibilities: readonly string[];
  skills: readonly string[];
};

const ROLES: readonly Role[] = [
  {
    slug: "oracle-fusion-functional-consultant",
    title: "Oracle Fusion Functional Consultant",
    experience: "12–15 years",
    location: "PAN India",
    summary:
      "Act as a Cloud Supply Chain functional SME, working with global support teams across Oracle Fusion Supply Chain modules including Procurement, Inventory, Order Management, Manufacturing, and Costing.",
    responsibilities: [
      "Support AMS ticketing processes, including issue and problem management, bug fixing, change management, deployments, and upgrade testing.",
      "Work with offshore and onshore teams on Oracle Supply Chain Cloud implementation and support engagements.",
      "Translate business requirements into Oracle Cloud SCM functionality and configure the application for change requests and roll-outs.",
      "Review development, test configurations and technical objects, document results, and complete quality assurance before deployment.",
      "Test quarterly patch upgrades and support configurations, bug fixes, integrations, and automations.",
      "Develop runbooks and provide functional guidance to technical teams during ticket resolution.",
    ],
    skills: [
      "8–15 years of Oracle ERP experience, including at least two end-to-end implementations and production support projects.",
      "Hands-on Oracle Fusion SCM Cloud experience with Procurement, Product Hub, Inventory, Order Management, and Costing.",
      "Strong understanding of Procure-to-Pay and Order-to-Cash processes and integration with other ERP Cloud modules.",
      "Primary skills in Procurement Cloud, Inventory, Order Management, and Costing; Manufacturing and Pricing are secondary skills.",
      "Oracle Fusion Procurement experience covering Purchasing, Purchasing Contracts, and Supplier Portals.",
      "Strong diagnostics, troubleshooting, communication, agile delivery, and client-facing skills.",
      "At least one Oracle Fusion Supply Chain Cloud certification.",
      "Willingness to work late IST hours when overlap with the client IT team is required.",
    ],
  },
  {
    slug: "oracle-fusion-cloud-technical-lead",
    title: "Oracle Fusion Cloud Technical Lead (Redwood/VBCS/OIC)",
    experience: "12–15 years",
    location: "PAN India",
    summary:
      "Lead Oracle Fusion Cloud extensions, integrations, and technical delivery across ERP, SCM, HCM, Procurement, and CX Cloud implementations.",
    responsibilities: [
      "Lead the development of Oracle Fusion Cloud extensions using Visual Builder Studio, VBCS, and Redwood.",
      "Design scalable Oracle Cloud solutions across ERP, SCM, HCM, Procurement, and CX modules.",
      "Develop and support custom Redwood pages and Fusion SaaS extensions.",
      "Build integrations using Oracle Integration Cloud, REST APIs, and Oracle Cloud services.",
      "Create technical design documents and provide leadership throughout the project lifecycle.",
      "Manage code migration, version control, deployment, solution reviews, troubleshooting, testing, and production support.",
      "Develop BI Publisher reports and cloud applications integrated with Oracle Fusion.",
    ],
    skills: [
      "Oracle Visual Builder Studio (VBS) and Visual Builder Cloud Service (VBCS).",
      "Oracle Redwood UX, Oracle Integration Cloud (OIC), and Process Cloud Service (PCS).",
      "BI Publisher, REST APIs, web services, and Oracle Fusion ERP, SCM, and HCM.",
      "JavaScript, SQL, and PL/SQL.",
      "Oracle Cloud extensions, customizations, Git, and migration management in VBS.",
      "Ability to collaborate with functional consultants and business stakeholders.",
    ],
  },
  {
    slug: "oracle-ebs-functional-consultant",
    title: "Oracle EBS Functional Consultant",
    experience: "12–15 years",
    location: "PAN India",
    summary:
      "Analyse, design, implement, and test Oracle E-Business Suite solutions, with strong knowledge of Oracle Distribution modules and business processes.",
    responsibilities: [
      "Gather and document system requirements, reporting needs, user interfaces, logical system flows, and implementation plans.",
      "Collaborate with auditors on SOX controls and with solution partners, vendors, and SaaS providers on timely delivery.",
      "Manage project plan components and support tickets across different priorities.",
      "Work with business users to clarify requirements and provide timely support during month-end and quarter-end activities.",
      "Develop functional and technical specifications, gap analyses, test scripts, and user training documents.",
      "Design and deliver complex custom solutions in highly integrated Oracle applications.",
    ],
    skills: [
      "Bachelor’s or master’s degree in Engineering, or an MCA.",
      "At least three full-lifecycle Oracle E-Business Suite R12 implementation or support engagements.",
      "More than eight years of Oracle Applications functional experience in OM, PO, INV, Shipping, Pricing, WMS, or related Distribution modules.",
      "Strong knowledge of Oracle EBS Order-to-Cash and Procure-to-Pay processes.",
      "Clear written and verbal communication in technical, functional, and escalated situations.",
      "Knowledge of multi-organization and multi-set-of-books environments.",
      "Exposure to Cloud implementations, iSupplier, iProcurement, EDI, legacy data conversions, or third-party integrations is an advantage.",
    ],
  },
  {
    slug: "java-full-stack-developer",
    title: "Java Full Stack Developer",
    experience: "12–15 years",
    location: "PAN India",
    summary:
      "Build multiple services from the ground up, contributing across the full product development and deployment lifecycle while working closely with clients on complex roadmap features.",
    responsibilities: [
      "Break complex product roadmap features into technical components and develop them independently.",
      "Write clean, effective code across backend services and modern web interfaces.",
      "Contribute throughout product design, development, testing, and deployment.",
      "Work in an agile team using Git, Bitbucket, or GitLab.",
      "Build web APIs using API-first design principles, Swagger, and REST.",
    ],
    skills: [
      "10+ years of hands-on backend development experience with strong Java 11+ and Spring Boot skills.",
      "Good knowledge of design patterns, data structures, and microservices.",
      "Unit testing experience with JUnit for backend services.",
      "React and/or Angular 2+, plus strong HTML, CSS, and JavaScript fundamentals.",
      "Frontend testing with Jest, Jasmine, Karma, or Cypress.",
      "Familiarity with Node.js for backend or API development.",
      "Experience with CI/CD, Docker, Jenkins, or Bamboo is an advantage.",
      "Experience with AWS, Google Cloud, or Azure services.",
    ],
  },
] as const;

export const Route = createFileRoute("/careers")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Current Oracle & Java Openings | SRAS Consulting" },
      {
        name: "description",
        content:
          "Explore current Oracle Fusion, Oracle EBS, and Java Full Stack opportunities with SRAS Consulting across India.",
      },
      { property: "og:title", content: "Current Openings | SRAS Consulting Services" },
      {
        property: "og:description",
        content: "Explore current Oracle and Java technology opportunities across India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://srasdemo.lovable.app/careers" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://srasdemo.lovable.app/careers" }],
    scripts: ROLES.map((role) => ({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title: role.title,
        description: `${role.summary} Responsibilities: ${role.responsibilities.join(" ")} Required skills: ${role.skills.join(" ")}`,
        experienceRequirements: role.experience,
        employmentType: "FULL_TIME",
        hiringOrganization: {
          "@type": "Organization",
          name: "SRAS Consulting Services",
          url: "https://srasdemo.lovable.app",
        },
        jobLocation: {
          "@type": "Place",
          address: { "@type": "PostalAddress", addressCountry: "IN" },
        },
      }),
    })),
  }),
  component: Careers,
});

function Careers() {
  return (
    <>
      <PageHero
        eyebrow="CAREERS"
        title="Current opportunities at SRAS"
        image={aiHr}
      >
        Explore our current client openings across Oracle Cloud, Oracle E-Business Suite, and Java
        full-stack development. Review the requirements and apply for the role that matches your
        experience.
      </PageHero>

      <section className="bg-background py-20 md:py-28">
        <div className="container-x">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric">
              {ROLES.length} open positions
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy md:text-4xl">
              Find your next opportunity
            </h2>
          </div>

          <div className="grid gap-5">
            {ROLES.map((role, index) => (
              <Reveal key={role.slug} delay={index * 0.05}>
                <article className="overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md">
                  <details className="group">
                    <summary className="grid cursor-pointer list-none grid-cols-[minmax(0,1fr)_auto] items-center gap-5 p-6 marker:content-none md:p-8">
                      <div className="min-w-0">
                        <h3 className="font-display text-xl font-bold text-navy md:text-2xl">
                          {role.title}
                        </h3>
                        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-2">
                            <BriefcaseBusiness className="h-4 w-4 text-electric" aria-hidden="true" />
                            {role.experience}
                          </span>
                          <span className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-electric" aria-hidden="true" />
                            {role.location}
                          </span>
                        </div>
                        <p className="mt-4 max-w-4xl text-sm leading-6 text-muted-foreground md:text-base">
                          {role.summary}
                        </p>
                      </div>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary text-navy transition-transform group-open:rotate-180">
                        <ChevronDown className="h-5 w-5" aria-hidden="true" />
                        <span className="sr-only">View job details</span>
                      </span>
                    </summary>

                    <div className="border-t border-border px-6 pb-8 pt-7 md:px-8">
                      <div className="grid gap-8 lg:grid-cols-2">
                        <JobList title="Key responsibilities" items={role.responsibilities} />
                        <JobList title="Skills and qualifications" items={role.skills} />
                      </div>
                      <a
                        href={`mailto:hr@srasconsulting.com?subject=${encodeURIComponent(`Application - ${role.title}`)}`}
                        className="mt-8 inline-flex rounded-md bg-navy px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                      >
                        Apply for this role
                      </a>
                    </div>
                  </details>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-10 rounded-xl bg-secondary p-6 text-sm text-muted-foreground">
              For career enquiries, email{" "}
              <a href="mailto:hr@srasconsulting.com" className="font-semibold text-electric">
                hr@srasconsulting.com
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function JobList({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div>
      <h4 className="font-display text-lg font-bold text-navy">{title}</h4>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}