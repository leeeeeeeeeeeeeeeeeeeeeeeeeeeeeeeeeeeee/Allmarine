"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BROCHURE_URL, IMAGES } from "@/lib/constants";

const QUOTES = [
  "Continuous effort, not strength or intelligence, is the key to unlocking our potential.",
  "Every All Marine project is engineered to stand the test of time.",
  "Built to endure. Engineered to protect.",
];

export function QuoteCTA() {
  const [index, setIndex] = useState(0);

  const nextQuote = () => {
    setIndex((i) => (i === QUOTES.length - 1 ? 0 : i + 1));
  };

  const prevQuote = () => {
    setIndex((i) => (i === 0 ? QUOTES.length - 1 : i - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i === QUOTES.length - 1 ? 0 : i + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className="relative overflow-hidden py-24 text-white sm:py-32">
      <Image
        src={IMAGES.nightCity}
        alt="City skyline at night"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-marine-dark/70" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div className="min-h-[80px] sm:min-h-[90px] flex items-center justify-center">
          <blockquote
            key={index}
            className="pera text-lg sm:text-2xl font-light text-white leading-relaxed transition-opacity duration-500 animate-in fade-in duration-500"
          >
            &ldquo;{QUOTES[index]}&rdquo;
          </blockquote>
        </div>
        <div className=" flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous quote"
            onClick={prevQuote}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-white/10 transition-colors hover:bg-white/20"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next quote"
            onClick={nextQuote}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-white/10 transition-colors hover:bg-white/20"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <a
          href={BROCHURE_URL}
          download="All-Marine-Brochure.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex w-full max-w-[280px] items-center justify-center border-2 border-white px-6 py-3 font-condensed text-sm font-bold uppercase tracking-wider text-white transition hover:bg-white hover:text-marine-dark sm:w-auto sm:min-w-[280px] sm:px-10"
        >
          Download Brochure
        </a>
      </div>
    </section>
  );
}
