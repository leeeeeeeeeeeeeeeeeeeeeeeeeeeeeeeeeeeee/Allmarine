import type { Metadata } from "next";
import Image from "next/image";
import {
  ShieldCheck,
  Users,
  Compass,
  Lightbulb,
  Handshake,
  Clock,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Leadership } from "@/components/sections/leadership";
import { QuoteCTA } from "@/components/sections/quote-cta";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/ui/fade-in";
import {
  IMAGES,
  SITE,
  STRATEGIC_PILLARS,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: `About Us — ${SITE.name}`,
  description:
    "At All Marine, we are a dynamic force at the forefront of maritime infrastructure construction. Built to Endure. Engineered to Protect.",
};

const OUR_VALUES = [
  {
    title: "Endurance",
    desc: "Building marine structures engineered to last through demanding coastal environments.",
    icon: Clock,
  },
  {
    title: "Protection",
    desc: "Safeguarding coastlines, critical marine assets, and adjacent natural habitats.",
    icon: ShieldCheck,
  },
  {
    title: "Innovation",
    desc: "Advancing with modern engineering technology, precision piling, and best practices.",
    icon: Lightbulb,
  },
  {
    title: "Commitment",
    desc: "Partnering with clients from early feasibility and design to turnkey completion.",
    icon: Handshake,
  },
];

const CORE_ACTIVITIES = [
  "Coastal Defence & Revetments",
  "Construction of Breakwaters and Fixed Jetties",
  "Dredging, Land Reclamation and Earthworks to Support Waterfront Growth",
  "Design and Building of Marinas and Quay Walls",
  "Specialist Marine Piling Works",
  "Subsea Marine Pipelines",
  "Ports & Harbour Infrastructure",
  "Coastal Roads & Causeways",
  "Marine Salvage & Environmental Protection",
];

const STRATEGIC_CLUSTERS = [
  {
    title: "Advanced Marina Solutions",
    description:
      "We develop reliable, long-life marina infrastructure that supports renewable technologies, waterfront development, and community access to the sea.",
  },
  {
    title: "Climate Adaptation & Protection",
    description:
      "We mitigate the impact of rising sea levels and extreme weather through engineered coastal defences such as rock revetments and breakwaters that protect populations and natural ecosystems.",
  },
  {
    title: "Innovative Infrastructure for Prosperity",
    description:
      "We design and construct infrastructure such as ports, quay walls, and fixed jetties that enable trade, urban development, and national growth strategies.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-body-muted">
      {/* =========================================================================
          1. HERO BANNER: Who We Are
          ========================================================================= */}
      <section className="relative flex min-h-[520px] flex-col justify-end overflow-hidden bg-marine-main pb-14 pt-28 text-white md:h-[440px] md:max-h-[440px] md:min-h-0 md:pb-[75px] md:pt-0">
        <Container className="relative z-10 w-full">
          <FadeIn className="max-w-5xl text-left">
            <h1 className="mainhead uppercase text-white">
              <span className="block font-thin">Who We Are</span>
              <span className="block font-bold">Build to endure. Engineered to protect.</span>
            </h1>

            <p className="pera mt-4 text-base font-light text-white/90 sm:text-lg sm:leading-relaxed">
              At <strong className="font-semibold text-white">ALL MARINE</strong>,
              we are a dynamic force at the forefront of maritime infrastructure
              construction, dedicated to crafting durable solutions that safeguard coastal environments whilst driving progress.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* =========================================================================
          2. COMPANY PROFILE & CAPABILITIES (Matching Home Commitment section)
          ========================================================================= */}
      <section className="bg-white py-10 sm:py-14 md:py-20">
        <Container>
          <FadeIn>
            <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src={IMAGES.aboutAbout}
                  alt="All Marine engineering team on site"
                  width={900}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h2 className="subhead mt-1 lg:mt-3 text-marine-heading">
                  Company Profile All Marine
                </h2>
                <p className="pera mt-2.5 lg:mt-4 text-body-muted">
                  ALL MARINE charts new courses for every stakeholder. Drawing on
                  deep industry expertise and inventive practices, we deliver
                  comprehensive, competitive solutions in port developments,
                  coastal protection, quay walls, fixed jetties, marinas, and
                  breakwaters.
                </p>
                <p className="pera mt-2 lg:mt-3 text-body-muted">
                  Every project we undertake reflects our promise to blend robust
                  engineering with strategic foresight, ensuring each structure is
                  built to last and designed to inspire future growth.
                </p>

                <h3 className="subhead mt-5 lg:mt-10 text-marine-heading">
                  Our Capabilities
                </h3>
                <p className="pera mt-2.5 lg:mt-4 text-body-muted">
                  Our portfolio stands on a strong foundation of executing complex
                  marine infrastructure projects in diverse coastal environments. By
                  uniting specialised industry knowledge with flexible
                  construction strategies, we maintain an unwavering focus on
                  long-term durability.
                </p>

                <div className="mt-5 lg:mt-8 grid grid-cols-2 gap-3 lg:gap-4">
                  <div className="rounded-2xl bg-surface-gray p-3.5 lg:p-4 shadow-xs">
                    <span className="font-condensed text-xl lg:text-2xl font-bold text-marine-main">
                      30+ Years
                    </span>
                    <p className="smallpera mt-0.5 lg:mt-1 text-xs text-body-muted">
                      Proven maritime experience
                    </p>
                  </div>
                  <div className="rounded-2xl bg-surface-gray p-3.5 lg:p-4 shadow-xs">
                    <span className="font-condensed text-xl lg:text-2xl font-bold text-marine-main">
                      250+ Builds
                    </span>
                    <p className="smallpera mt-0.5 lg:mt-1 text-xs text-body-muted">
                      Successfully handed over
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* =========================================================================
          3. CORE ACTIVITIES (Minimalist Split Layout)
          ========================================================================= */}
      <section className="bg-[var(--foreground)]/5 py-16 sm:py-20">
        <Container>
          <FadeIn>
            <div className="flex flex-col items-center gap-10 lg:flex-row-reverse lg:gap-16">
              {/* Single Image */}
              <div className="w-full overflow-hidden rounded-3xl lg:w-1/2">
                <Image
                  src={IMAGES.aboutActivities}
                  alt="Core Activities — Marina and maritime infrastructure"
                  width={900}
                  height={800}
                  className="h-full w-full object-cover md:aspect-11/12"
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2"> 
              <div className="md:max-w-md">
                <h2 className="subhead font-normal text-body-muted">
                  Core <span className="font-bold text-marine-heading">Activities</span>
                </h2>

                <div className="mt-8 space-y-3">
                  {CORE_ACTIVITIES.map((activity) => (
                    <div
                      key={activity}
                      className="flex gap-3"
                    >
                      <div className="h-2.5 w-2.5 mt-2 shrink-0 rounded-full bg-marine-main" />
                      <span className="font-condensed text-base font-bold text-body-muted sm:text-lg">
                        {activity}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="pera mt-8 sm:mt-10 text-body-muted leading-relaxed">
                  Each solution is tailored to the precise environmental, technical, and commercial needs of our clients, with an uncompromising emphasis on durability, safety, and sustainability.
                </p>
              </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* =========================================================================
          4. OUR EXPERTS
          ========================================================================= */}
      <section className="bg-surface-gray py-16 sm:py-24">
        <Container>
          <FadeIn>
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-3xl shadow-md">
                  <Image
                    src={IMAGES.engineers}
                    alt="All Marine engineering experts on site"
                    width={700}
                    height={800}
                    className="w-full object-cover aspect-[4/3] sm:aspect-[3/4]"
                  />
                </div>
              </div>

              <div className="lg:col-span-7">
                <h2 className="subhead mt-3 text-marine-heading">
                  Our Experts
                </h2>

                <p className="pera mt-6 text-body-muted">
                  At <strong className="font-semibold text-body-muted">ALL MARINE</strong>,
                  we understand that every successful project is built on professional integrity, trust, and seamless collaboration. We deliver projects safely, on time, and within budget by assembling a global network of dedicated professionals around your unique needs. Our team spans a diverse range of disciplines from hydraulic, civil, and marine engineering to ecology, morphology, geology, geophysics, and marine biology. Enhanced by advanced skills in project management, operations, and risk management, our experts turn challenges into lasting successes.
                </p>

                <p className="pera mt-4 text-body-muted">
                  Our team spans a diverse range of disciplines from hydraulic, civil, and marine engineering to ecology, morphology, geology, geophysics, and marine biology. Enhanced by advanced skills in project management, operations, and risk management, our experts turn challenges into lasting successes.
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* =========================================================================
          5. GOVERNANCE LEADERSHIP (Marine Blue Theme)
          ========================================================================= */}
      <section className="bg-marine-main py-16 text-white sm:py-24">
        <Container>
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="headingbadges text-white">
              Integrity & Accountability
            </p>
            <h2 className="subhead mt-3 text-white">
              Governance Leadership
            </h2>
            <p className="pera mt-4 text-white/90">
              At All Marine, our approach to governance is founded upon the core
              principles of transparency, collaboration, and accountability. We
              believe that effective governance is essential to the sustained
              success of our organisation and the confidence of our stakeholders.
            </p>
          </FadeIn>

          <FadeInStagger className="mt-14 grid gap-8 md:grid-cols-2">
            <FadeInItem className="rounded-3xl bg-white p-6 shadow-xs md:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-marine-main text-white">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="smallhead mt-6 text-marine-heading">
                Stakeholder Engagement
              </h3>
              <p className="smallpera mt-3 text-body-muted leading-relaxed">
                ALL MARINE&apos;s strategic direction is built on transparent
                alignment and mutual value. Accountable to the Supervisory
                Board and General Meeting of Shareholders, our leadership is
                guided by the long-term interests of the company, the markets
                we serve, and the communities we impact.
              </p>
            </FadeInItem>

            <FadeInItem className="rounded-3xl bg-white p-6 shadow-xs md:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-marine-main text-white">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="smallhead mt-6 text-marine-heading">
                Board of Management
              </h3>
              <p className="smallpera mt-3 text-body-muted leading-relaxed">
                The Board of Management defines ALL MARINE&apos;s strategic
                direction and is responsible for achieving our operational
                objectives and overall performance, ensuring rigorous project execution, sound risk mitigation, and continuous quality alignment.
              </p>
            </FadeInItem>
          </FadeInStagger>
        </Container>
      </section>

      {/* =========================================================================
          6. ORGANISATIONAL STRUCTURE (Matching Clean Component System)
          ========================================================================= */}
      <section className="bg-surface-gray py-16 sm:py-20">
        <Container>
          <FadeIn>
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-8">
                <div className="overflow-hidden rounded-3xl bg-white p-4 shadow-xs sm:p-0">
                  <Image
                    src={IMAGES.orgStructure}
                    alt="All Marine Organisational Structure"
                    width={1200}
                    height={800}
                    className="h-auto w-full rounded-2xl object-contain"
                  />
                </div>
              </div>

              <div className="lg:col-span-4">
                <h2 className="subhead mt-3 text-marine-heading">
                  Organisational Structure
                </h2>

                <p className="pera mt-4 text-body-muted leading-relaxed">
                  ALL MARINE operates through two specialised divisions, each
                  supported by integrated operational functions enabling agility, cross-functional collaboration, and technical excellence across all project phases.
                </p>

                <div className="mt-6 rounded-3xl bg-white p-4 sm:p-5 shadow-xs">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-marine-main" />
                    <div>
                      <h4 className="xs-head text-body-muted">
                        ASCORP Group Headquarters
                      </h4>
                      <p className="smallpera mt-1 text-xs text-body-muted leading-relaxed">
                        Our headquarters is located in the ASCORP Group Building, Mussafah Industrial District, Abu Dhabi, where all corporate departments work in alignment under one roof.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* =========================================================================
          7. CORPORATE STRATEGY & OUR PURPOSE (Marine Teal Section)
          ========================================================================= */}
      <section className="bg-marine-main py-16 text-white sm:py-24">
        <Container>
          <FadeIn>
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <p className="headingbadges text-white">
                  Strategic Vision
                </p>
                <h2 className="subhead mt-3 text-white">
                  Corporate Strategy
                </h2>

                <p className="pera mt-5 text-white/90 leading-relaxed">
                  At All Marine, our corporate strategy is built upon the
                  proactive anticipation and responsive adaptation to major global
                  forces shaping the maritime sector. We recognise that population
                  growth, ongoing economic development, the realities of climate
                  change, and the ongoing global energy transition are
                  fundamentally transforming our industry.
                </p>

                <h3 className="subhead mt-8 text-2xl text-white">
                  Our Purpose
                </h3>

                <p className="pera mt-3 text-white/85 leading-relaxed">
                  At All Marine, we aim to create and protect prosperity for
                  communities, stakeholders, and future generations through
                  sustainable solutions. We support economic growth and resource
                  conservation while promoting a global energy transition for a
                  resilient maritime sector.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src={IMAGES.jetty}
                    alt="Corporate Strategy and Marine Development"
                    width={700}
                    height={600}
                    className="aspect-[4/3] md:aspect-[10/12] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* =========================================================================
          8. OUR MISSION & SUSTAINABLE GROWTH (Matching Home Commitment/Works)
          ========================================================================= */}
      <section className="bg-white py-16 sm:py-16 md:py-20">
        <Container>
          <FadeIn>
            <div className="grid items-center gap-6 sm:gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="headingbadges text-body-light">
                  Strategic Commitment
                </p>
                <h2 className="subhead mt-2 lg:mt-3 text-marine-heading">
                  Our Mission
                </h2>
                <p className="pera mt-2.5 lg:mt-4 text-body-muted">
                  Our mission is to be a leader in maritime infrastructure,
                  shaping coasts and unlocking new horizons for every stakeholder.
                  We are dedicated to pioneering excellence in the development,
                  delivery, and maintenance of vital maritime assets.
                </p>

                <h3 className="subhead mt-5 lg:mt-8 text-marine-heading">
                  Strategic Framework & Activity Clusters
                </h3>
                <p className="pera mt-2 lg:mt-3 text-body-muted">
                  Our three-year strategy is structured around three key activity clusters delivering positive societal and environmental impact:
                </p>

                <div className="mt-4 lg:mt-6 space-y-2 lg:space-y-3">
                  {STRATEGIC_CLUSTERS.map((cluster) => (
                    <div
                      key={cluster.title}
                      className="rounded-2xl bg-surface-gray py-1 md:p-3 lg:p-4 shadow-xs"
                    >
                      <h4 className="xs-head text-body-muted">
                        {cluster.title}
                      </h4>
                      <p className="smallpera mt-0.5 lg:mt-1 text-xs text-body-muted leading-relaxed">
                        {cluster.description}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="smallpera mt-3 lg:mt-4 text-xs font-medium text-body-muted">
                  In addition, our marine salvage operations recover equipment and vessels and work to prevent environmental damage along coastlines.
                </p>
              </div>

              <div className="overflow-hidden rounded-3xl">
                <Image
                  src={IMAGES.worksFirst}
                  alt="Our mission and coastal works"
                  width={900}
                  height={700}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* =========================================================================
          9. OUR VALUES (Matching Clean 4-Col Grid)
          ========================================================================= */}
      <section className="bg-[var(--foreground)]/5 py-16 sm:py-20">
        <Container>
          <FadeIn className="text-center">
            <p className="headingbadges text-body-light">
              Ethos & Principles
            </p>
            <h2 className="subhead mt-3 text-marine-heading">
              Our Values
            </h2>
          </FadeIn>

          <FadeInStagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {OUR_VALUES.map((val) => {
              const IconComponent = val.icon;
              return (
                <FadeInItem
                  key={val.title}
                  className="flex flex-col items-center rounded-3xl bg-white p-6 text-center shadow-xs transition hover:shadow-md md:p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-marine-main/10 text-marine-main">
                    <IconComponent className="h-7 w-7" strokeWidth={1.75} />
                  </div>
                  <h3 className="xs-head mt-5 text-body-muted">
                    {val.title}
                  </h3>
                  <p className="smallpera mt-2 text-xs text-body-muted leading-relaxed">
                    {val.desc}
                  </p>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </Container>
      </section>

      {/* =========================================================================
          10. STRATEGIC PILLARS 2025–2027 (Matching Home Commitment 3-col grid)
          ========================================================================= */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <FadeIn className="text-center">
            <p className="headingbadges text-body-light">
              Strategic Foundation
            </p>
            <h2 className="subhead mt-3 text-marine-heading">
              Strategic Pillars 2025 – 2027
            </h2>
            <p className="pera mx-auto mt-3 max-w-2xl text-body-muted">
              All Marine&apos;s long-term success is built on foundational pillars—each driving forward our purpose, values, and strategic priorities.
            </p>
          </FadeIn>

          <FadeInStagger className="mt-8 sm:mt-10 md:mt-14 grid  sm:gap-6 md:grid-cols-3 md:gap-10">
            {STRATEGIC_PILLARS.map((pillar, idx) => (
              <FadeInItem
                key={pillar.title}
                className="rounded-3xl bg-surface-gray p-4 sm:p-6 md:p-8"
              >
                <span className="font-condensed text-xl sm:text-2xl font-bold text-marine-main">
                  0{idx + 1}
                </span>
                <h3 className="smallhead mt-1.5 sm:mt-3 text-body-muted/80">
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

      {/* =========================================================================
          11. LEADERSHIP (Reused from Home Page)
          ========================================================================= */}
      <Leadership />

      {/* =========================================================================
          12. CALL TO ACTION & FOOTER
          ========================================================================= */}
      <QuoteCTA />
    </div>
  );
}
