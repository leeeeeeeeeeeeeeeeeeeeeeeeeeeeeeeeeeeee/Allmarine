import { Hero } from "@/components/sections/hero";
import { Commitment } from "@/components/sections/commitment";
import { Stats } from "@/components/sections/stats";
import { OurWorks } from "@/components/sections/our-works";
import { OurActivities } from "@/components/sections/our-activities";
import { Leadership } from "@/components/sections/leadership";
import { QuoteCTA } from "@/components/sections/quote-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Commitment />
      <Stats />
      <OurWorks />
      <OurActivities />
      <Leadership />
      <QuoteCTA />
    </>
  );
}
