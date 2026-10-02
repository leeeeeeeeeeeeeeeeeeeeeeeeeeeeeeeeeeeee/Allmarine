"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IMAGES, STATS } from "@/lib/constants";
import { Container } from "@/components/layout/container";

function AnimatedStatValue({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  const match = value.match(/^([^\d]*)(\d+)(.*)$/);
  const hasNumber = Boolean(match);
  const prefix = match ? match[1] : "";
  const target = match ? parseInt(match[2], 10) : 0;
  const suffix = match ? match[3] : "";

  useEffect(() => {
    if (!hasNumber) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start: number | null = null;
          const duration = 2000;

          const animate = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * target));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [hasNumber, hasAnimated, target]);

  if (!hasNumber) {
    return <span>{value}</span>;
  }

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

import { FadeInStagger, FadeInItem } from "@/components/ui/fade-in";

export function Stats() {
  return (
    <section className="relative overflow-hidden py-24 text-white">
      <Image
        src={IMAGES.skyline}
        alt="Coastal city skyline"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-marine-light/80" />
      <Container className="relative z-10" size="narrow">
        <FadeInStagger className="grid gap-12 gap-y-16 sm:gap-y-20 grid-cols-2 lg:grid-cols-3 max-w-full md:max-w-[80%]">
          {STATS.map((stat) => (
            <FadeInItem key={stat.label} className="text-left">
              <div className="relative h-12 w-12">
                <Image
                  src={stat.icon}
                  alt={stat.label}
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <p className="statstext mt-4 text-white">
                <AnimatedStatValue value={stat.value} />
              </p>
              <p className="smallpera mt-2 max-w-[10rem] font-medium leading-snug text-white">
                {stat.label}
              </p>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  );
}
