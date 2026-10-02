import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { Container } from "@/components/layout/container";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/fade-in";

export function OurActivities() {
  return (
    <section id="activities" className="scroll-mt-20 bg-marine-main py-16 sm:py-24">
      <Container size="default">
        <FadeIn className="text-center text-white">
          <p className="headingbadges text-white">
            Our Activities
          </p>
          <h2 className="subhead mt-3 text-white">
            Expert Marine Solutions, Lasting Impact
          </h2>
        </FadeIn>

        <FadeInStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FadeInItem className="flex flex-col justify-center rounded-3xl bg-white px-6 py-8 sm:col-span-2 lg:col-span-1 lg:row-span-3 shadow-xs">
            <h3 className="xs-head text-body-muted">Tailored Solutions</h3>
            <p className="smallpera mt-4 text-body-muted leading-relaxed">
              At All Marine, we recognise that every project presents its own unique set of challenges and requirements. To address this, each solution we deliver is meticulously customised to align with the specific environmental, technical, and commercial needs of our clients. This bespoke approach ensures that our clients receive outcomes that are not only fit for purpose but also optimised for their operational context. Our unwavering focus is placed on three core principles: durability, safety, and sustainability. By prioritising long-term resilience, we ensure that every structure is designed to endure the demands of its environment. Safety remains at the forefront of our practices, safeguarding both our teams and the wider community. Furthermore, our commitment to sustainability ensures that our activities contribute positively to the coastal environments in which we operate.
            </p>
          </FadeInItem>

          {SERVICES.map((service) => {
            const targetHref = service.href || "/activities/";

            return (
              <FadeInItem key={service.title}>
                <Link
                  href={targetHref}
                  className="group block h-full overflow-hidden rounded-3xl bg-white p-3 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-marine-accent"
                >
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={360}
                      className="h-45 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="xs-head mt-6 text-center text-body-muted transition-colors duration-300 group-hover:text-marine-main">
                    {service.title}
                  </h3>
                  <p className="smallpera mt-2 text-center text-body-muted">
                    {service.description}
                  </p>
                </Link>
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </Container>
    </section>
  );
}
