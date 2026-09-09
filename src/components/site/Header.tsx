import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { memo, useCallback, useMemo, useState } from "react";

export const Header = memo(function Header() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((v) => !v), []);

  const nav = useMemo(
    () => [
      { to: "/", label: "Home" },
      { to: "/services", label: "Services" },
      { to: "/corporate-training", label: "Corporate Training" },
      { to: "/mobile-apps", label: "Mobile Apps" },
      { to: "/web-development", label: "Web Development" },
      { to: "/careers", label: "Careers" },
    ],
    [],
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <div className="container-x grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3.5 lg:flex lg:justify-between">
        <Link to="/" onClick={close} className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-navy font-display text-sm font-bold text-primary-foreground">
            S
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-extrabold text-navy">
              SRAS
            </span>
            <span className="block truncate text-[11px] tracking-[0.18em] text-muted-foreground">
              CONSULTING SERVICES
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-navy" }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-electric"
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-md bg-electric px-4 py-2 text-sm font-semibold text-electric-foreground shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </nav>

        <button
          onClick={toggle}
          aria-label="Toggle menu"
          className="shrink-0 rounded-md border border-border p-2 text-navy lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="container-x flex flex-col py-2">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={close}
                className="border-b border-border/50 py-3 text-sm font-medium text-navy"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={close}
              className="mt-3 mb-3 rounded-md bg-electric px-4 py-2.5 text-center text-sm font-semibold text-electric-foreground"
            >
              Contact Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
});
