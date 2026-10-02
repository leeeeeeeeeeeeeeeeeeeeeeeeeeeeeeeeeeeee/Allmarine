import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/container";
import { BLOG_POSTS, SITE, getBlogPost } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: `Post Not Found — ${SITE.name}` };
  }

  return {
    title: `${post.title} — ${SITE.name}`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const paragraphs = post.content.split("\n\n");

  return (
    <>
      <section className="relative flex min-h-[520px] md:h-[440px] md:max-h-[440px] flex-col justify-end overflow-hidden bg-marine-dark pb-[75px] pt-28 text-white">
        <Container size="narrow" className="relative z-10 w-full">
          <Link
            href="/blog/"
            className="inline-flex items-center text-sm text-white/80 hover:text-white"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Blog
          </Link>
          <h1 className="subhead mt-4 text-white sm:text-4xl">
            {post.title}
          </h1>
          <div className="smallpera mt-3 flex items-center gap-3 text-white/70">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>&middot;</span>
            <span>{post.author}</span>
          </div>
        </Container>
      </section>

      <article className="py-16">
        <Container size="narrow">
          <div className="prose prose-slate max-w-none">
            {paragraphs.map((block) => {
              if (block.startsWith("## ")) {
                return (
                  <h2
                    key={block}
                    className="smallhead mt-8 text-marine-heading"
                  >
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              return (
                <p key={block} className="pera mt-4 text-body-muted">
                  {block}
                </p>
              );
            })}
          </div>
        </Container>
      </article>
    </>
  );
}
