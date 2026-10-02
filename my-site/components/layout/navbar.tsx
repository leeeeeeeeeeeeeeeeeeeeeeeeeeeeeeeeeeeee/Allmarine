"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LINKS, IMAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/" || pathname === "";

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full pt-[env(safe-area-inset-top)] transition-all duration-300",
        open
          ? "bg-marine-dark/95 backdrop-blur-md lg:bg-marine-light/80"
          : scrolled || !isHome
            ? "bg-marine-light/70 backdrop-blur-md shadow-md"
            : "bg-black/10 backdrop-blur-sm",
      )}
    >
      <Container>
        <div
          className={cn(
            "flex items-center justify-between transition-all duration-300",
            scrolled ? "h-16 md:h-20" : "h-20 md:h-30"
          )}
        >
          <Link
            href="/"
            className="flex items-center"
            aria-label="All Marine Home"
          >
            <Image
              src={IMAGES.logo}
              alt="All Marine"
              width={107}
              height={63}
              className={cn(
                "w-auto object-contain transition-all duration-300",
                scrolled ? "h-8 md:h-12" : "h-10 md:h-14"
              )}
              priority
            />
          </Link>

          <nav className="hidden h-full items-stretch lg:flex">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? isHome
                  : pathname === link.href ||
                    pathname === link.href.replace(/\/$/, "") ||
                    (link.href !== "/" &&
                      pathname.startsWith(link.href.replace(/\/$/, "")));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative flex items-center justify-center text-center w-full md:w-28 text-sm text-white transition-all duration-300 border-b-2 whitespace-nowrap",
                    active
                      ? "border-white bg-gradient-to-t from-white/20 via-white/10 to-transparent font-medium"
                      : "border-transparent text-white/85 hover:text-white hover:bg-white/5",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg p-2 text-white hover:bg-white/10 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <X className={cn("transition-all duration-300", scrolled ? "h-6 w-6" : "h-7 w-7")} />
            ) : (
              <Menu className={cn("transition-all duration-300", scrolled ? "h-6 w-6" : "h-7 w-7")} />
            )}
          </button>
        </div>

        {open && (
          <nav
            id="mobile-nav"
            className="max-h-[calc(100dvh-5rem-env(safe-area-inset-top))] overflow-y-auto border-t border-white/20 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const active =
                  link.href === "/"
                    ? isHome
                    : pathname === link.href ||
                      pathname === link.href.replace(/\/$/, "") ||
                      (link.href !== "/" &&
                        pathname.startsWith(link.href.replace(/\/$/, "")));

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "rounded-lg px-3 py-3 text-base text-white transition-colors",
                      active ? "bg-white/15 font-semibold" : "hover:bg-white/10"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
