"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/checklist", label: "Checklist" },
  { href: "/pantry", label: "Pantry" },
  { href: "/guides", label: "Guides" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground transition-transform group-hover:rotate-12">
            🌿
          </span>
          <span
            className="text-base font-semibold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            The Crunchy Life
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative text-sm font-medium transition-colors ${
                  active
                    ? "text-primary"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {label}
                {active && (
                  <span className="absolute -bottom-[18px] left-0 right-0 h-px bg-primary" />
                )}
              </Link>
            );
          })}
          <Link
            href="/checklist"
            className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-85"
          >
            Start →
          </Link>
        </nav>
      </div>
    </header>
  );
}
