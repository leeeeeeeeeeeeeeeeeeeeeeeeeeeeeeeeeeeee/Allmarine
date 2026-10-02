import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center pt-36 pb-24">
      <Container className="text-center">
        <p className="headingbadges text-marine-main">
          404
        </p>
        <h1 className="mainhead mt-4 text-marine-heading">
          Page not found
        </h1>
        <p className="pera mx-auto mt-4 max-w-md text-body-muted">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
          have been moved or no longer exists.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/">Go Home</Button>
          <Link
            href="/contact/"
            className="text-sm font-medium text-marine hover:text-marine-dark"
          >
            Contact support
          </Link>
        </div>
      </Container>
    </section>
  );
}
