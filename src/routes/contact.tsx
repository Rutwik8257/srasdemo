import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useCallback, useState, type FormEvent } from "react";
import { toast } from "sonner";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact SRAS Consulting Services, Secunderabad" },
      {
        name: "description",
        content:
          "Have any questions? Leave us a message and the SRAS Consulting team in Secunderabad will be in touch with you shortly.",
      },
      { property: "og:title", content: "Contact SRAS Consulting Services" },
      {
        property: "og:description",
        content: "Leave us a message. We'll be in touch with you shortly.",
      },
    ],
  }),
  component: Contact,
});

const field =
  "mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-electric";

function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast.success("Thanks — your message has been noted in this prototype.");
    e.currentTarget.reset();
  }, []);

  return (
    <>
      <PageHero eyebrow="HAVE ANY QUESTIONS?" title="Leave us a message. We'll be in touch shortly.">
        Tell us about the roles, training or software you need. Our consultants respond to every
        enquiry within one business day.
      </PageHero>

      <section className="bg-background py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block text-sm font-medium text-navy">
                  Your Name
                  <input required name="name" className={field} placeholder="Ravi Kumar" />
                </label>
                <label className="block text-sm font-medium text-navy">
                  Your Phone Number
                  <input required name="phone" type="tel" className={field} placeholder="+91 98765 43210" />
                </label>
              </div>
              <label className="mt-6 block text-sm font-medium text-navy">
                Your Email Address
                <input required name="email" type="email" className={field} placeholder="you@company.com" />
              </label>
              <label className="mt-6 block text-sm font-medium text-navy">
                Your Message
                <textarea
                  required
                  name="message"
                  rows={5}
                  className={field}
                  placeholder="We're hiring 4 Java developers in Hyderabad..."
                />
              </label>
              <button
                type="submit"
                className="mt-7 w-full rounded-md bg-electric px-6 py-3 text-sm font-semibold text-electric-foreground transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                Send message
              </button>
              {sent && (
                <p className="mt-4 text-sm text-muted-foreground">
                  This prototype doesn't deliver email yet — connect a backend to receive real
                  enquiries.
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-navy p-8 text-primary-foreground">
              <h2 className="font-display text-xl font-bold">Address</h2>
              <p className="mt-2 text-sm text-primary-foreground/70">
                If you want to visit us in person, here's where you can find us.
              </p>
              <ul className="mt-7 space-y-5 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>
                    SRAS Consulting Services
                    <br />
                    Sri Mani Lalitha Nilayam, #6-4-386/A,
                    <br />
                    Krishna Nagar Colony, Secunderabad,
                    <br />
                    Telangana-500018
                  </span>
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
