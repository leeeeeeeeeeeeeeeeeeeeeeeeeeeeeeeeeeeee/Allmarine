import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { LEADERSHIP_TEAM } from "@/lib/constants";
import { Container } from "@/components/layout/container";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/fade-in";

export function Leadership() {
  return (
    <section className="bg-[var(--foreground)]/5 py-16 sm:py-24">
      <Container>
        <FadeIn className="text-center">
          <p className="headingbadges text-body-light">
            Our Leadership
          </p>
          <h2 className="subhead mt-2 text-marine-heading">
            Meet the Team
          </h2>
        </FadeIn>

        <FadeInStagger className="mt-10 md:mt-14 grid gap-10 md:grid-cols-3">
          {LEADERSHIP_TEAM.map((member, i) => (
            <FadeInItem key={`${member.name}-${i}`}>
              <article>
                <div className="overflow-hidden rounded-3xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={640}
                    height={800}
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
                <h3 className="xshead font-bold mt-5 ">
                  {member.name}
                </h3>
                <p className="smallpera mt-1 font-medium text-marine-accent">{member.title}</p>
                <p className="smallpera mt-3 text-body-muted">
                  {member.bio}
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-800 underline underline-offset-4"
                >
                  LinkedIn
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </article>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  );
}
