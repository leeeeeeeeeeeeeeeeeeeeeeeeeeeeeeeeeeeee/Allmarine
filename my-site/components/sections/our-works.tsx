import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { Container } from "@/components/layout/container";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/fade-in";

const WORKS_ITEMS = [
  {
    image: IMAGES.worksFirst,
    alt: "Marine project execution",
    title: "Marine Infrastructure & Harbour Works",
    category: "AE Current Projects",
  },
  {
    image: IMAGES.worksSecond,
    alt: "Coastal breakwater and marine construction",
    title: "Breakwater & Rock Armour Laying",
    category: "AE Current Projects",
  },
  {
    image: IMAGES.worksThird,
    alt: "Surf Ranch Wave Basin Project",
    title: "Surf Ranch – Armour Laying at Wave Basin",
    category: "AE Current Projects",
  },
  {
    image: IMAGES.worksFourth,
    alt: "Engineers on marine site",
    title: "On-Site Engineering & Marine Supervision",
    category: "AE Current Projects",
  },
];

export function OurWorks() {
  return (
    <section id="works" className="scroll-mt-20 bg-surface-gray py-16 sm:py-20">
      <Container size="default">
        <FadeIn className="text-center">
          <p className="headingbadges text-body-light">
            Our Works
          </p>
          <h2 className="subhead mt-3 text-marine-heading">
            Expert Marine Solutions, Lasting Impact
          </h2>
        </FadeIn>

        <FadeIn className="mt-12 grid grid-cols-1 gap-3 md:grid-cols-[2fr_3fr]">
          {/* Column 1: Full-height Tall Image */}
          <div className="group relative min-h-[280px] overflow-hidden rounded-3xl md:min-h-[560px] sm:min-h-[420px]">
            <Image
              src={WORKS_ITEMS[0].image}
              alt={WORKS_ITEMS[0].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-marine-light/80 p-6 text-white opacity-100 md:opacity-0 md:transition-all md:duration-300 md:group-hover:opacity-100">
              <div className="translate-y-0 md:translate-y-4 md:transition-transform md:duration-300 md:group-hover:translate-y-0">
                <h3 className="smallhead text-white sm:text-2xl">
                  {WORKS_ITEMS[0].title}
                </h3>
                <p className="smallpera mt-1 font-normal text-white/70">
                  {WORKS_ITEMS[0].category}
                </p>
              </div>
            </div>
          </div>

          {/* Columns 2 & 3: Colspan-2 Container */}
          <div className="flex flex-col gap-3">
            {/* 1st Row: Full Width */}
            <div className="group relative min-h-[240px] flex-1 overflow-hidden rounded-3xl md:min-h-[270px]">
              <Image
                src={WORKS_ITEMS[1].image}
                alt={WORKS_ITEMS[1].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-marine-light/80 p-6 text-white opacity-100 md:opacity-0 md:transition-all md:duration-300 md:group-hover:opacity-100">
                <div className="translate-y-0 md:translate-y-4 md:transition-transform md:duration-300 md:group-hover:translate-y-0">
                  <h3 className="smallhead text-white">
                    {WORKS_ITEMS[1].title}
                  </h3>
                  <p className="smallpera mt-1 font-normal text-white/70">
                    {WORKS_ITEMS[1].category}
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd Row: 2 Columns */}
            <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="group relative min-h-[220px] overflow-hidden rounded-3xl">
                <Image
                  src={WORKS_ITEMS[2].image}
                  alt={WORKS_ITEMS[2].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-marine-light/80 p-6 text-white opacity-100 md:opacity-0 md:transition-all md:duration-300 md:group-hover:opacity-100">
                  <div className="translate-y-0 md:translate-y-4 md:transition-transform md:duration-300 md:group-hover:translate-y-0">
                    <h3 className="smallhead text-white">
                      {WORKS_ITEMS[2].title}
                    </h3>
                    <p className="smallpera mt-1 font-normal text-white/70">
                      {WORKS_ITEMS[2].category}
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative min-h-[220px] overflow-hidden rounded-3xl">
                <Image
                  src={WORKS_ITEMS[3].image}
                  alt={WORKS_ITEMS[3].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-marine-light/80 p-6 text-white opacity-100 md:opacity-0 md:transition-all md:duration-300 md:group-hover:opacity-100">
                  <div className="translate-y-0 md:translate-y-4 md:transition-transform md:duration-300 md:group-hover:translate-y-0">
                    <h3 className="smallhead text-white">
                      {WORKS_ITEMS[3].title}
                    </h3>
                    <p className="smallpera mt-1 font-normal text-white/70">
                      {WORKS_ITEMS[3].category}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
