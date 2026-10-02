import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { IMAGES } from "@/lib/constants";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-white text-[#282626]">
      <Container className="pt-12 pb-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.3fr_1.8fr_1.8fr_1fr] items-end">
          {/* Col 1: Logo */}
          <div>
            <Link
              href="/"
              className="inline-block"
              aria-label="All Marine Home"
            >
              <Image
                src={IMAGES.logoFooter}
                alt="All Marine"
                width={130}
                height={70}
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Col 2: Address */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-black">
              ADDRESS
            </h4>
            <p className="mt-3 text-xs leading-relaxed text-[#282626]/80 font-normal">
              Musaffah Industrial Area – ICAD 1
              <br />
              Abudhabi, United Arab Emirates.
            </p>
          </div>

          {/* Col 3: Contact Us */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-black">
              CONTACT US
            </h4>
            <p className="mt-3 text-xs leading-relaxed text-[#282626]/80 font-normal">
              PHONE: +971 2 513 4429
              <br />
              EMAIL: info@allmarineuae.com
            </p>
          </div>

          {/* Col 4: Social Icons */}
          <div className="flex items-center gap-2 sm:justify-start lg:justify-end">
            <a
              href="https://www.linkedin.com/company/all-marine-sole-proprietorship-l-l-c/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-7 w-7 items-center justify-center rounded-sm bg-black text-white transition-opacity hover:opacity-80"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-7 w-7 items-center justify-center rounded-sm bg-black text-white transition-opacity hover:opacity-80"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10">
          <p className="text-xs text-[#282626]/60">
            2026 Copyright. Allmarine UAE
          </p>
        </div>
      </Container>
      <div className="h-3.5 bg-marine-main" />
    </footer>
  );
}
