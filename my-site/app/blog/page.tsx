import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { BLOG_POSTS, SITE } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Blog — ${SITE.name}`,
  description: `Insights and news from the ${SITE.name} team on fleet maintenance, compliance, and maritime operations.`,
};

export default function BlogPage() {
  return (
    <>
      <section className="relative flex min-h-[520px] flex-col justify-end overflow-hidden bg-marine-dark pb-14 pt-28 text-white md:h-[440px] md:max-h-[440px] md:min-h-0 md:pb-[75px] md:pt-0">
        <Container className="relative z-10 w-full">
          <div className="max-w-3xl text-left">
            <h1 className="mainhead text-white uppercase">
              Blog & Insights
            </h1>
            <p className="pera mt-4 text-base font-light text-white/85 sm:text-lg">
              Expert insights on fleet maintenance, decarbonization, coastal engineering, and port logistics from the All Marine team.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <time
                  dateTime={post.date}
                  className="smallpera text-body-light"
                >
                  {formatDate(post.date)}
                </time>
                <h2 className="smallhead mt-3 text-marine-heading group-hover:text-marine-main transition-colors">
                  <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
                </h2>
                <p className="smallpera mt-3 flex-1 text-body-muted">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}/`}
                  className="mt-4 inline-flex items-center text-sm font-medium text-marine hover:text-marine-dark"
                >
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
