import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { memo } from "react";
import { Reveal } from "./Reveal";

export const CTASection = memo(function CTASection({
  title = "Ready to build your team 6x faster?",
  text = "Tell us what you need and our consultants will map a hiring or training plan for your business within 48 hours.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-secondary py-20">
      <div className="container-x">
        <Reveal className="hero-ink overflow-hidden rounded-2xl px-8 py-14 text-primary-foreground md:px-14">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold md:text-4xl">{title}</h2>
            <p className="mt-4 text-primary-foreground/75">{text}</p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-electric px-6 py-3 text-sm font-semibold text-electric-foreground transition-transform hover:-translate-y-0.5"
            >
              Talk to our team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
});
