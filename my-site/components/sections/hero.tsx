"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES } from "@/lib/constants";

const SLIDE_INTERVAL_MS = 5000;

export function Hero() {
  const [index, setIndex] = useState(0);

  const prev = useCallback(() => {
    setIndex((i) => (i === 0 ? HERO_SLIDES.length - 1 : i - 1));
  }, []);

  const next = useCallback(() => {
    setIndex((i) => (i === HERO_SLIDES.length - 1 ? 0 : i + 1));
  }, []);

  useEffect(() => {
    if (HERO_SLIDES.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i === HERO_SLIDES.length - 1 ? 0 : i + 1));
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className="relative  md:min-h-dvh overflow-hidden text-white">
      {HERO_SLIDES.map((slide, i) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100 z-0 pointer-events-auto" : "opacity-0 -z-10 pointer-events-none"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover"
          />
        </div>
      ))}

      {/* Background Overlay for Text Contrast & Content Visibility */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-marine-dark/90 via-marine-dark/45 to-marine-dark/60" />

      <div className="relative z-10 flex h-[600px] md:min-h-dvh flex-col items-center px-4 sm:px-6">
        <div className="flex flex-1 flex-col items-start sm:items-center justify-end pb-[max(60px)] sm:pb-[4vh]">
          <div className="relative w-full min-h-[2rem] max-w-3xl sm:min-h-[7.5rem]">
            {HERO_SLIDES.map((slide, i) => (
              <h1
                key={slide.image}
                className={`mainhead text-left uppercase text-white transition-all duration-700 ease-in-out ${
                  i === index
                    ? "opacity-100 translate-y-0 relative"
                    : "opacity-0 translate-y-2 absolute inset-0 pointer-events-none"
                }`}
              >
                <span className="block font-thin">
                  {slide.line1 ?? "Build to endure."}
                </span>
                <span className="block font-bold">
                  {slide.line2 ?? "Engineered to protect."}
                </span>
              </h1>
            ))}
          </div>

          <div className="mt-6 md:mt-8 flex sm:items-center justify-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white bg-transparent text-white transition hover:bg-white/10 cursor-pointer md:h-7 md:w-7"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white bg-transparent text-white transition hover:bg-white/10 cursor-pointer md:h-7 md:w-7"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
