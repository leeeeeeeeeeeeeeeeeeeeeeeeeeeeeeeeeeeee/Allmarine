"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { IMAGES, PROJECTS_DATA } from "@/lib/constants";
import { QuoteCTA } from "@/components/sections/quote-cta";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/fade-in";

const METRICS = [
  { value: "120+ km", label: "Coastline Protected" },
  { value: "250+", label: "Completed Projects" },
  { value: "50+", label: "Marine Builds" },
  { value: "30+ Years", label: "Industry Experience" },
];

function AnimatedMetricValue({ value }: { value: string }) {
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

export default function ProjectsPage() {
  const [visibleCount, setVisibleCount] = useState(6);
  const displayedProjects = PROJECTS_DATA.slice(0, visibleCount);

  return (
    <>
      {/* Hero Section with Track Record Metrics */}
      <section className="relative flex min-h-[520px] flex-col justify-end overflow-hidden bg-marine-main pb-14 pt-28 text-white md:h-[440px] md:max-h-[440px] md:min-h-0 md:pb-[75px] md:pt-0">
        <Container size="default" className="relative z-10 w-full">
          <FadeIn>
            <div className="text-left text-white">
              <p className="headingbadges text-white">Our Track Record</p>
              <h1 className="mainhead mt-2 text-white">Projects in Numbers</h1>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 lg:gap-12">
              {METRICS.map((metric) => (
                <div key={metric.label}>
                  <p className="subhead text-white">
                    <AnimatedMetricValue value={metric.value} />
                  </p>
                  <p className="pera mt-2 font-medium text-white/85">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Featured Projects Grid */}
      <section id="featured-projects" className="bg-white py-20 sm:py-28">
        <Container size="default">
          <FadeIn className="text-center">
            <p className="headingbadges text-marine-heading">Featured Projects</p>
            <h2 className="subhead mt-2 text-body-light">
              Our Marine Portfolio
            </h2>
          </FadeIn>

          {/* Projects Cards Grid */}
          <FadeInStagger className="mt-12 sm:mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {displayedProjects.map((project) => (
              <FadeInItem key={project.id}>
                <article
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200/80 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-marine-heading transition-colors group-hover:text-marine-main">
                        {project.title}
                      </h3>

                      <p className="smallpera mt-2 font-medium text-body-light">
                        {project.location}
                      </p>
                    </div>

                    <div className="mt-2 pt-4 border-t border-gray-100">
                      <Link
                        href={`/projects/${project.slug}/`}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-marine-main hover:text-marine-dark underline underline-offset-4 transition-colors"
                      >
                        <span>See the Project</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              </FadeInItem>
            ))}
          </FadeInStagger>

          {/* Show More / Action CTA */}
          {visibleCount < PROJECTS_DATA.length && (
            <div className="mt-14 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((c) => c + 3)}
                className="group inline-flex max-w-full items-center justify-center gap-3 rounded-full border border-marine-main bg-white px-5 py-3 text-center text-sm font-semibold uppercase tracking-wider text-marine-main transition-all duration-300 hover:bg-marine-main hover:text-white shadow-sm sm:px-8"
              >
                <span>Show More Projects</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-marine-main text-white transition-colors duration-300 group-hover:bg-white group-hover:text-marine-main">
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.25} />
                </span>
              </button>
            </div>
          )}
        </Container>
      </section>


      {/* Reused Quote CTA Section from Homepage */}
      <QuoteCTA />
    </>
  );
}
