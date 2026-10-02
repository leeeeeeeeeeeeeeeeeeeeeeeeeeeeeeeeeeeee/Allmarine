import Image from "next/image";
import { IMAGES, STRATEGIC_PILLARS } from "@/lib/constants";
import { Container } from "@/components/layout/container";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/fade-in";

export function Commitment() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <FadeIn>
          <div className="grid items-center gap-6 sm:gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="overflow-hidden rounded-3xl lg:col-span-7">
              <Image
                src={IMAGES.about}
                alt="Marine construction and operations"
                width={900}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="lg:col-span-5">
              <h2 className="text-xl sm:text-2xl font-semibold text-body-muted/80">
                Enduring Commitment
              </h2>
              <p className="smallpera mt-2 text-body-muted">
                Whether We Are Protecting Coastlines From Erosion Or Enabling The
                Growth Of Strategic Trade Hubs, Every <strong className="font-bold">All Marine</strong> Project Is
                Engineered To Stand The Test Of Time. Our Clients Trust Us To
                Deliver Infrastructure That Performs Efficiently Today And Remains
                Primed For Tomorrow&apos;s Challenges.
              </p>
              <h3 className="text-xl sm:text-2xl font-semibold mt-4 sm:mt-6 text-body-muted/80">
                Strategic Pillars 2025 – 2027
              </h3>
              <p className="smallpera mt-2 text-body-muted">
                All Marine&apos;s Long-Term Success Is Built On Four Foundational
                Pillars—Each Driving Forward Our Purpose, Values, And Strategic
                Priorities.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeInStagger className="mt-8 sm:mt-12 md:mt-16 grid gap-5 sm:gap-8 md:grid-cols-3 md:gap-10">
          {STRATEGIC_PILLARS.map((pillar) => (
            <FadeInItem key={pillar.title}>
              <h3 className="smallhead text-body-muted/80">
                {pillar.title}
              </h3>
              <p className="smallpera mt-1.5 sm:mt-3 text-body-muted">
                {pillar.description}
              </p>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  );
}
