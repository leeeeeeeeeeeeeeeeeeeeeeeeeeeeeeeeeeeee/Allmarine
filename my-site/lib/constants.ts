import type {
  BlogPost,
  HeroSlide,
  NavLink,
  Pillar,
  ProjectItem,
  ServiceCard,
  SocialLink,
  StatItem,
  TeamMember,
} from "@/types";
import { publicAsset } from "@/lib/asset";

/** Subdirectory when not hosted on the domain root. Empty string = site at `/`. */
export const BASE_PATH = (
  process.env.NEXT_PUBLIC_BASE_PATH ?? "/allmarine"
).replace(/\/$/, "");

/** Prefix public files — static export does not apply basePath to next/image src. */
const img = (path: string) => publicAsset(path, BASE_PATH);

export const SITE = {
  name: "All Marine",
  title: "All Marine — Expert Marine Solutions, Lasting Impact",
  description:
    "Whether we are protecting coastlines from erosion or enabling the growth of strategic trade hubs, every All Marine project is engineered to stand the test of time.",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://eximuz.co.in/allmarine"
  ).replace(/\/$/, ""),
  email: "info@allmarineuae.com",
  phone: "+971 2 513 4429",
  address: "Musaffah Industrial Area – ICAD 1, Abudhabi, United Arab Emirates",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about/" },
  { label: "Activities", href: "/activities/" },
  { label: "Our Portfolio", href: "/projects/" },
  { label: "Contact Us", href: "/contact/" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

export const IMAGES = {
  hero: img("/images/hero-bg.jpg"),
  hero2: img("/images/hero-bg (2).jpg"),
  hero3: img("/images/hero-bg (3).jpg"),
  marina: img("/images/hero-bg.jpg"),
  marina2: img("/images/hero-bg (2).jpg"),
  marina3: img("/images/hero-bg (3).jpg"),
  about: img("/images/about-img.jpg"),
  aboutAbout: img("/images/about-about.webp"),
  aboutActivities: img("/images/about-activites.webp"),
  worker: img("/images/about-img.jpg"),
  skyline: img("/images/stats-bg.jpg"),
  stats: img("/images/stats-bg.jpg"),
  harborNight: img("/images/about-mission.webp"),
  worksFirst: img("/images/about-mission.webp"),
  aboutMission: img("/images/about-mission.webp"),
  breakwater: img("/images/our-works-2nd-image.jpg"),
  worksSecond: img("/images/our-works-2nd-image.jpg"),
  worksThird: img("/images/our-works-3rd-image.jpg"),
  worksFourth: img("/images/our-works-4th-image.jpg"),
  engineers: img("/images/our-works-4th-image.jpg"),
  excavator: img("/images/casual-defense.jpg"),
  coastalDefence: img("/images/casual-defense.jpg"),
  jetty: img("/images/Breakwaters-n-Jetties.jpg"),
  breakwatersJetties: img("/images/Breakwaters-n-Jetties.jpg"),
  dredging: img("/images/Dredging-n-Earthworks.jpg"),
  quay: img("/images/Marinas Quay Walls.jpg"),
  marinasQuayWalls: img("/images/Marinas Quay Walls.jpg"),
  piling: img("/images/Pilling Works.jpg"),
  pipeline: img("/images/Marine Pipeline.jpg"),
  portrait: img("/images/team.jpg"),
  team: img("/images/team.jpg"),
  khaledSubhi: img("/images/Khaled subhi.jpeg"),
  nisanthSasikumar: img("/images/Nisanth C. Sasikumar.jpg"),
  ahmedAlkaabi: img("/images/Ahmed alkaabi.jpg"),
  nightCity: img("/images/quote-cta-bg.png"),
  quoteCta: img("/images/quote-cta-bg.png"),
  logo: img("/images/logo.svg"),
  logoFooter: img("/images/logo-footer.svg"),
  orgStructure: img("/images/organiation-structure.png"),
  iconCoastalDefence: img("/images/Coastal Defence & Revetments.png"),
  iconBreakwaters: img("/images/Breakwaters & Jetties.png"),
  iconDredging: img("/images/DREDGING.png"),
  iconMarinasQuay: img("/images/Marinas & Quay Walls.png"),
  iconPiling: img("/images/Specialist Piling Works.png"),
  iconPipeline: img("/images/Subsea Marine Pipelines.png"),
};

export const DOCUMENTS = {
  brochure: publicAsset("/brochure.pdf", BASE_PATH),
};

export const BROCHURE_URL = DOCUMENTS.brochure;

export const HERO_SLIDES: HeroSlide[] = [
  {
    image: IMAGES.hero,
    alt: "All Marine — Expert Marine Solutions",
    line1: "Build to endure.",
    line2: "Engineered to protect.",
  },
  {
    image: IMAGES.hero2,
    alt: "Coastal Infrastructure & Marine Works",
    line1: "Shaping coasts.",
    line2: "Moving Futures.",
  },

];

export const STRATEGIC_PILLARS: Pillar[] = [
  {
    title: "Good Stewardship",
    description:
      "At the heart of our strategy is a commitment to act with responsibility and foresight. We carefully manage both risks and opportunities, always considering the interests of our stakeholders. This disciplined approach enables us to meet strategic objectives while creating long-term value for clients, partners, and communities.",
  },
  {
    title: "Human Excellence",
    description:
      "Our people are the foundation of our success. Through our Human Excellence strategy, we nurture talent, invest in career development, attract global expertise, and deliver tailored learning opportunities that empower every professional—from emerging engineers to experienced leaders—to achieve lasting impact and excellence.",
  },
  {
    title: "Distinguishing Assets",
    description:
      "People. Tools. Trust. At All Marine, our edge lies in the synergy between expert teams, proprietary equipment, and trusted partnerships. Through strategic investments in specialised assets and a deep well of technical know-how, we are equipped to meet the evolving demands of coastal infrastructure with confidence and precision.",
  },
];

export const STATS: StatItem[] = [
  {
    value: "30+",
    label: "Years of Industry Experience",
    icon: img("/images/engineer 1.svg"),
  },
  {
    value: "250+",
    label: "Projects Successfully Completed",
    icon: img("/images/building 1.svg"),
  },
  {
    value: "80+",
    label: "Government & Private Sector Clients",
    icon: img("/images/clients 1.svg"),
  },
  {
    value: "120+ km",
    label: "Coastline Protected & Developed",
    icon: img("/images/distance 1.svg"),
  },
  {
    value: "50+",
    label: "Marine Infrastructure Projects",
    icon: img("/images/school 1.svg"),
  },
  {
    value: "ISO",
    label: "ISO Certified | HSE Compliant",
    icon: img("/images/protected 1.svg"),
  },
];

export const SERVICES: ServiceCard[] = [
  {
    title: "Coastal Defence",
    description:
      "ALL MARINE leads the way in protecting coastlines through engineered and nature-based solutions.",
    image: IMAGES.excavator,
    href: "/activities/#coastal-defence",
  },
  {
    title: "Breakwaters & Jetties",
    description:
      "The successful execution of fixed jetty projects relies on seamless integration of piling systems, capping beams.",
    image: IMAGES.jetty,
    href: "/activities/#breakwaters-jetties",
  },
  {
    title: "Dredging & Earthworks",
    description:
      "ALL MARINE specialises in dredging, port and waterway construction, coastal defence, canal bank protection.",
    image: IMAGES.dredging,
    href: "/activities/#dredging-earthworks",
  },
  {
    title: "Marinas & Quay Walls",
    description:
      "Precision quay wall construction for marinas and commercial harbours, built for durability and operational efficiency.",
    image: IMAGES.quay,
    href: "/activities/#marinas-quay-walls",
  },
  {
    title: "Specialist Piling Works",
    description:
      "Specialist marine piling programmes delivered with certified equipment, experienced crews, and rigorous quality control.",
    image: IMAGES.piling,
    href: "/activities/#piling-works",
  },
  {
    title: "Subsea Marine Pipelines",
    description:
      "Design and installation of marine pipelines that meet environmental, safety, and long-term performance requirements.",
    image: IMAGES.pipeline,
    href: "/activities/#marine-pipeline",
  },
  
];

export const LEADERSHIP_TEAM: TeamMember[] = [
  {
    name: "Khaled Subhi Abufroukh",
    title: "Group CEO",
    bio: "Engr. Khaled Subhi Abufroukh is a professional in civil engineering with a career spanning several decades in the United Arab Emirates. With thirty years experience in civil construction, Engr. Khaled has participated in the planning and implementation of large-scale developments affecting urban areas. As Group CEO, Engr. Khaled has managed multidisciplinary teams undertaking complex development initiatives. He has utilized strategic & organizational skills within the engineering sector.",
    image: IMAGES.khaledSubhi,
    linkedin: "https://linkedin.com",
  },
  {
    name: "Nisanth C. Sasikumar",
    title: "CFO",
    bio: "Nisanth C S is the Group CFO, overseeing financial planning, governance, and compliance for companies in contracting and industry. With a Master's in Finance, he has extensive experience in concrete, cement manufacturing, and share trading. Since his appointment, Nisanth has managed the Group's finances by implementing policies to boost transparency, ensure regulatory compliance, and support business growth.",
    image: IMAGES.nisanthSasikumar,
    linkedin: "https://linkedin.com",
  },
  {
    name: "Ahmed Alkaabi",
    title: "Government Relations Manager",
    bio: "Ahmed Alkaabi is the Government Relations Manager, overseeing the company's relations with government authorities across the UAE. With extensive experience in licensing, immigration, labor affairs, and regulatory compliance, he ensures all statutory requirements are efficiently managed. Since joining the Group, Ahmed has streamlined administrative processes, strengthened relationships with government entities, and ensured timely approvals and documentation.",
    image: IMAGES.ahmedAlkaabi,
    linkedin: "https://linkedin.com",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "optimizing-fleet-maintenance",
    title: "Optimizing Fleet Maintenance for Maximum Uptime",
    excerpt:
      "Learn how data-driven maintenance scheduling can dramatically reduce unplanned downtime across your fleet.",
    date: "2026-03-15",
    author: "Sarah Chen",
    content: `
      Unplanned downtime is one of the largest hidden costs in commercial shipping. By shifting from reactive to predictive maintenance, fleet operators can achieve significant improvements in availability and total cost of ownership.

      ## Start with the data

      Modern vessels generate vast amounts of operational data. The key is consolidating sensor readings, maintenance logs, and class survey records into a single view that supports decision-making.

      ## Prioritize critical systems

      Not all components carry equal risk. Focus preventive efforts on propulsion, steering, and safety-critical systems first, then expand coverage based on failure history and manufacturer guidance.

      ## Partner with experts

      Working with a dedicated marine services partner ensures you have access to specialized knowledge, global parts networks, and 24/7 support when emergencies arise.
    `.trim(),
  },
  {
    slug: "decarbonization-roadmap",
    title: "A Practical Decarbonization Roadmap for Commercial Fleets",
    excerpt:
      "Regulatory pressure is increasing. Here is a step-by-step approach to reducing emissions without compromising operations.",
    date: "2026-02-28",
    author: "Marcus Webb",
    content: `
      The maritime industry faces mounting pressure to reduce greenhouse gas emissions. While the path to net-zero is complex, fleet operators can take meaningful steps today.

      ## Measure your baseline

      You cannot manage what you do not measure. Start by establishing accurate fuel consumption and emissions baselines across your fleet using standardized reporting methods.

      ## Invest in efficiency first

      Before considering alternative fuels, maximize gains from hull optimization, propeller upgrades, and voyage planning software. These measures often deliver the fastest return on investment.

      ## Plan for fuel transition

      Evaluate alternative fuels and propulsion technologies against your trade routes, vessel ages, and regulatory timelines. A phased approach reduces risk and spreads capital expenditure.
    `.trim(),
  },
  {
    slug: "port-logistics-best-practices",
    title: "Port Logistics Best Practices for Faster Turnaround",
    excerpt:
      "Reduce port stay duration with smarter planning, pre-positioned spares, and coordinated supplier networks.",
    date: "2026-01-10",
    author: "Elena Rodriguez",
    content: `
      Port time is expensive time. Every hour alongside represents lost revenue and increased operating cost. Streamlining logistics is one of the highest-impact improvements a fleet can make.

      ## Pre-position critical spares

      Maintain strategically located spare parts inventories at your most frequent port calls. Work with a logistics partner who understands marine parts classification and urgency.

      ## Coordinate in advance

      Share maintenance plans and port schedules with your service provider at least two weeks ahead. Early coordination prevents last-minute delays and ensures the right technicians are available.

      ## Track and improve

      Measure port stay duration, delay causes, and supplier performance. Use this data to continuously refine your logistics strategy and hold partners accountable.
    `.trim(),
  },
];

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "ras-ghumais-road",
    slug: "ras-ghumais-road",
    title: "Rehabilitation of Ras Ghumais Road to Ghagha Island After Checkpoint",
    category: "Coastal Road & Revetment Works",
    client: "DRM",
    status: "Ongoing",
    contractValue: "AED 33,005,354",
    duration: "Jan 2025 – Jan 2026",
    role: "Main Contractor",
    location: "Ras Ghumais – Ghagha Island, Al Dhafrah",
    description:
      "Rehabilitation and upgrading of the coastal road corridor leading to Ghagha Island, incorporating robust rock armour revetment and roadway strengthening.",
    fullDescription: [
      "This project involved the rehabilitation and upgrading of the Ras Ghumais Road corridor leading to Ghagha Island, following the checkpoint area, aimed at improving accessibility, structural integrity, and long-term roadway performance in a remote coastal region.",
      "The works were executed for DRM, under the consultancy supervision of ACE International, and required detailed coordination, technical precision, and compliance with roadway and marine-adjacent infrastructure standards. The scope included road rehabilitation, structural strengthening, and associated civil works to enhance safe and reliable transportation connectivity.",
      "As the Main Contractor, the project was delivered within the contract value of AED 33,005,354, with execution aligned to project specifications and quality standards, ensuring durable infrastructure performance in challenging environmental conditions.",
    ],
    image: IMAGES.worksSecond,
    gallery: [
      IMAGES.worksSecond,
      IMAGES.jetty,
      IMAGES.coastalDefence,
      IMAGES.worksThird,
      IMAGES.worksFirst,
    ],
  },
  {
    id: "surf-ranch",
    slug: "surf-ranch-wave-basin",
    title: "Surf Ranch – Armour Laying at Wave Basin",
    category: "Coastal Defence",
    client: "Modon Properties",
    status: "Completed",
    contractValue: "AED 18,500,000",
    duration: "Mar 2024 – Nov 2024",
    role: "Specialist Marine Contractor",
    location: "Hudayriyat Island, Abu Dhabi",
    description:
      "Precision rock armour installation and specialized wave basin foundation engineering to withstand high dynamic wave action.",
    fullDescription: [
      "The Surf Ranch Abu Dhabi project required specialized rock armour placement and foundation engineering within the wave basin to endure dynamic hydrodynamic forces.",
      "Our team deployed specialist marine excavators and GPS-guided placement systems to achieve strict tolerances required for artificial wave generation facilities.",
      "Delivered with zero lost-time incidents and full environmental compliance in coordination with master development authorities.",
    ],
    image: IMAGES.worksThird,
    gallery: [
      IMAGES.worksThird,
      IMAGES.worksFourth,
      IMAGES.coastalDefence,
      IMAGES.worksFirst,
      IMAGES.jetty,
    ],
  },
  {
    id: "deepwater-breakwaters",
    slug: "deepwater-breakwaters-revetment",
    title: "Deepwater Breakwaters & Rock Revetment Programme",
    category: "Breakwaters & Jetties",
    client: "Abu Dhabi Ports Authority",
    status: "Completed",
    contractValue: "AED 42,800,000",
    duration: "Jan 2023 – Dec 2024",
    role: "Main Marine Contractor",
    location: "Al Dhafra Coast, Arabian Gulf",
    description:
      "Engineered rock armour placement and heavy breakwater development built to dissipate severe wave energy and protect coastal assets.",
    fullDescription: [
      "Construction of deepwater rubble-mound breakwaters and shoreline revetments to protect offshore berthing channels and port terminals from severe storm surges.",
      "The project utilized high-density rock core materials and precision-placed concrete armour units designed for high-energy wave environments.",
      "Completed ahead of schedule with robust quality assurance and round-the-clock bathymetric monitoring.",
    ],
    image: IMAGES.jetty,
    gallery: [
      IMAGES.jetty,
      IMAGES.worksSecond,
      IMAGES.dredging,
      IMAGES.quay,
      IMAGES.worksFourth,
    ],
  },
  {
    id: "port-dredging-earthworks",
    slug: "commercial-port-dredging",
    title: "Commercial Port Dredging & Basin Reclamation",
    category: "Dredging & Earthworks",
    client: "Industrial City of Abu Dhabi (ICAD)",
    status: "Completed",
    contractValue: "AED 29,400,000",
    duration: "Feb 2024 – Oct 2024",
    role: "Main Contractor",
    location: "Musaffah Industrial Channel, Abu Dhabi",
    description:
      "Port and waterway dredging, canal bank protection, and deep-water navigational channel development.",
    fullDescription: [
      "Capital dredging and channel deepening to expand heavy vessel navigation access into the Musaffah industrial port corridor.",
      "Extensive environmental containment systems were implemented to protect adjacent marine ecosystems and water quality during dredging operations.",
      "Reclaimed dredged material was repurposed for industrial land formation in compliance with local environmental regulations.",
    ],
    image: IMAGES.dredging,
    gallery: [
      IMAGES.dredging,
      IMAGES.quay,
      IMAGES.piling,
      IMAGES.pipeline,
      IMAGES.worksFirst,
    ],
  },
  {
    id: "marinas-quay-walls",
    slug: "marinas-quay-wall-construction",
    title: "Marinas & Precision Quay Wall Construction",
    category: "Quay Walls",
    client: "Maritime Development Group",
    status: "Completed",
    contractValue: "AED 24,600,000",
    duration: "Jun 2023 – May 2024",
    role: "Main Contractor",
    location: "Abu Dhabi Commercial Harbours",
    description:
      "Precision precast blockwork quay wall construction for marinas and commercial harbours built for maximum operational efficiency.",
    fullDescription: [
      "Design verification and construction of precast concrete blockwork quay walls, capping beams, and berthing fenders for luxury marinas.",
      "Incorporated cathodic protection and high-durability marine concrete to maximize operational lifecycle in saline coastal waters.",
      "Delivered turnkey berthing solutions accommodating private vessels and commercial service fleets.",
    ],
    image: IMAGES.quay,
    gallery: [
      IMAGES.quay,
      IMAGES.piling,
      IMAGES.worksThird,
      IMAGES.worksSecond,
      IMAGES.jetty,
    ],
  },
  {
    id: "marine-piling-works",
    slug: "offshore-marine-piling-works",
    title: "Offshore Marine Piling & Foundation Works",
    category: "Piling Works",
    client: "National Infrastructure Authority",
    status: "Completed",
    contractValue: "AED 31,200,000",
    duration: "Aug 2023 – Jul 2024",
    role: "Specialist Piling Contractor",
    location: "Arabian Gulf Coastal Waters",
    description:
      "Specialist marine piling programmes delivered with certified hydraulic equipment, experienced crews, and strict quality control.",
    fullDescription: [
      "Heavy marine piling execution utilizing specialized jack-up barges and crane vessels for deep marine foundation support.",
      "High-load tubular steel piles and reinforced concrete piles driven to deep refusal layers for offshore platform support.",
      "Rigorous dynamic load testing and non-destructive integrity evaluations conducted across all driven piles.",
    ],
    image: IMAGES.piling,
    gallery: [
      IMAGES.piling,
      IMAGES.pipeline,
      IMAGES.worksFourth,
      IMAGES.dredging,
      IMAGES.worksFirst,
    ],
  },
  {
    id: "marine-pipeline-installation",
    slug: "subsea-marine-pipeline-installation",
    title: "Subsea Marine Pipeline & Trenching Works",
    category: "Pipelines",
    client: "Energy Utilities Abu Dhabi",
    status: "Completed",
    contractValue: "AED 38,900,000",
    duration: "Jan 2024 – Nov 2024",
    role: "Main Contractor",
    location: "ICAD 1 Maritime Corridor, UAE",
    description:
      "Design and installation of industrial marine pipelines meeting stringent environmental, safety, and operational criteria.",
    fullDescription: [
      "Offshore pipeline pulling, seabed trenching, and protective rock backfilling for critical marine utility transmission lines.",
      "Advanced diver-assisted and ROV bathymetric tracking ensured precise alignment across complex seabed terrain.",
      "Hydrotested and certified in full compliance with international maritime safety codes.",
    ],
    image: IMAGES.pipeline,
    gallery: [
      IMAGES.pipeline,
      IMAGES.piling,
      IMAGES.dredging,
      IMAGES.worksFirst,
      IMAGES.worksSecond,
    ],
  },
];

export function getProject(slug: string) {
  return PROJECTS_DATA.find((project) => project.slug === slug || project.id === slug);
}

