import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { QuoteCTA } from "@/components/sections/quote-cta";
import { FadeIn } from "@/components/ui/fade-in";
import { IMAGES, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Our Activities — ${SITE.name}`,
  description: `Explore All Marine's core capabilities in coastal defence, breakwaters, dredging, quay wall construction, marine piling, and subsea pipelines.`,
};

interface ActivityItem {
  id: string;
  title: string;
  location: string;
  category: string;
  description: string;
  image: string;
  icon: string;
  projectSlug?: string;
}

const ACTIVITIES: ActivityItem[] = [
  {
    id: "coastal-defence",
    title: "Coastal Defence & Revetments",
    location: "Abu Dhabi & UAE Coastlines",
    category: "Coastal Protection",
    description:
      "All Marine leads the way in protecting coastlines through engineered and nature-based solutions. We design and deliver heavy rock revetments, geotextile containment systems, and wave dissipation structures built to safeguard vital coastal assets against shoreline erosion and extreme tidal surges.",
    image: IMAGES.excavator,
    icon: IMAGES.iconCoastalDefence,
    projectSlug: "surf-ranch-wave-basin",
  },
  {
    id: "breakwaters-jetties",
    title: "Breakwaters & Jetties",
    location: "Arabian Gulf & Offshore Terminals",
    category: "Marine Structures",
    description:
      "The successful execution of fixed jetty and breakwater projects relies on the seamless integration of heavy marine piling systems, precast capping beams, and precision core armouring. Our specialized marine fleet delivers enduring maritime protection for commercial ports, terminals, and private harbours.",
    image: IMAGES.jetty,
    icon: IMAGES.iconBreakwaters,
    projectSlug: "deepwater-breakwaters-revetment",
  },
  {
    id: "dredging-earthworks",
    title: "Dredging & Earthworks",
    location: "Musaffah Industrial Channel & Ports",
    category: "Marine Excavation & Reclamation",
    description:
      "All Marine specialises in capital and maintenance dredging, port and waterway navigation channel construction, and coastal earthworks. With certified cutter-suction and grab dredgers, we ensure navigational depth, canal bank stabilization, and eco-compliant land reclamation.",
    image: IMAGES.dredging,
    icon: IMAGES.iconDredging,
    projectSlug: "commercial-port-dredging",
  },
  {
    id: "marinas-quay-walls",
    title: "Marinas & Quay Walls",
    location: "Commercial Harbours & Luxury Marinas",
    category: "Berthing & Waterfront Structures",
    description:
      "Precision precast blockwork quay wall construction for commercial harbours and modern marinas. Engineered for heavy operational loads and harsh saline conditions, our quay wall systems guarantee decades of reliable mooring, freight logistics, and vessel access.",
    image: IMAGES.quay,
    icon: IMAGES.iconMarinasQuay,
    projectSlug: "marinas-quay-wall-construction",
  },
  {
    id: "piling-works",
    title: "Specialist Piling Works",
    location: "Offshore Platforms & Coastal Waters",
    category: "Deep Marine Foundations",
    description:
      "Specialist offshore marine piling programmes delivered with certified hydraulic vibratory and impact hammers, dedicated crane barges, and experienced crews. We execute deep foundation piles engineered to support heavy jetty decks, platforms, and berthing structures.",
    image: IMAGES.piling,
    icon: IMAGES.iconPiling,
    projectSlug: "offshore-marine-piling-works",
  },
  {
    id: "marine-pipeline",
    title: "Subsea Marine Pipelines",
    location: "Industrial Corridors & Offshore Hubs",
    category: "Subsea Utility Installation",
    description:
      "Turnkey design, pulling, trenching, and installation of subsea industrial marine pipelines. We deliver critical intake, outfall, and utility transmission systems engineered to meet stringent environmental, structural safety, and operational longevity criteria.",
    image: IMAGES.pipeline,
    icon: IMAGES.iconPipeline,
    projectSlug: "subsea-marine-pipeline-installation",
  },
];

export default function ActivitiesPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="relative flex min-h-[520px] flex-col justify-end overflow-hidden bg-marine-main pb-14 pt-28 text-white md:h-[440px] md:max-h-[440px] md:min-h-0 md:pb-[75px] md:pt-0">
        <Container size="default" className="relative z-10 w-full">
          <FadeIn className="max-w-3xl">
            <p className="headingbadges text-teal-300">Core Capabilities</p>
            <h1 className="mainhead mt-2 text-white leading-tight">
              Our Activities & Core Services
            </h1>
            <p className="pera mt-3 text-base font-light text-white/85 sm:text-lg leading-relaxed">
              Delivering specialized marine civil engineering, coastal protection, dredging, and offshore infrastructure with three decades of proven excellence across the United Arab Emirates.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Activities Alternating Listing Section with Edge-to-Edge Image Bleed */}
      <section className="overflow-x-hidden bg-white py-14 sm:py-20 lg:py-28">
        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {ACTIVITIES.map((activity, index) => {
            const isEven = index % 2 === 0;

            return (
              <article
                key={activity.id}
                id={activity.id}
                className="w-full scroll-mt-24 sm:scroll-mt-28"
              >
                <FadeIn>
                  <div className="grid grid-cols-1 items-end lg:grid-cols-12">
                    {/* Content Column (Left if even, Right if odd) */}
                    <div
                      className={`flex flex-col justify-end pt-8 pb-4 lg:pb-4 lg:col-span-4 xl:pb-4 ${isEven
                          ? "order-2 lg:order-1 px-6 sm:px-8 lg:pl-[calc(max(2rem,(100vw-72rem)/2+2rem))] lg:pr-12 xl:pr-6"
                          : "order-2 lg:order-2 px-6 sm:px-8 lg:pr-[calc(max(2rem,(100vw-72rem)/2+2rem))] lg:pl-12 xl:pl-6"
                        }`}
                    >
                      <div className="max-w-xl">
                        {/* Activity Icon */}
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-marine-main/10 p-2.5 sm:h-16 sm:w-16 sm:p-3">
                          <Image
                            src={activity.icon}
                            alt={activity.title}
                            width={60}
                            height={60}
                            className="h-full w-full object-contain"
                          />
                        </div>

                        <h2 className="font-condensed smallhead text-marine-heading">
                          {activity.title}
                        </h2>

                        <div className="mt-3 flex flex-col text-sm font-medium text-body-muted sm:text-base">
                          <span>{activity.location}</span>
                          <span className="mt-0.5 font-semibold text-marine-main">
                            {activity.category}
                          </span>
                        </div>

                        <div className="my-2 sm:my-4 h-px w-full bg-gray-200" />

                        <p className="smallpera text-base leading-relaxed text-body-muted sm:text-lg">
                          {activity.description}
                        </p>
                      </div>
                    </div>

                    {/* Full-Bleed Image Column (Right if even, Left if odd) */}
                    <div
                      className={`relative w-full md:col-span-8 overflow-hidden bg-gray-100 aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[550px] ${isEven ? "order-1 lg:order-2" : "order-1 lg:order-1"
                        }`}
                    >
                      <Image
                        src={activity.image}
                        alt={activity.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 66vw"
                      />
                    </div>
                  </div>
                </FadeIn>
              </article>
            );
          })}
        </div>
      </section>

      {/* Reused Quote CTA Section */}
      <QuoteCTA />
    </>
  );
}
