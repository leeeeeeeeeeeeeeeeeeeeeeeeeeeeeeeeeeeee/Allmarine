import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { QuoteCTA } from "@/components/sections/quote-cta";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { PROJECTS_DATA, SITE, getProject } from "@/lib/constants";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: `Project Not Found — ${SITE.name}`,
    };
  }

  return {
    title: `${project.title} — ${SITE.name}`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const galleryImages =
    project.gallery && project.gallery.length >= 5
      ? project.gallery
      : [
          project.image,
          project.image,
          project.image,
          project.image,
          project.image,
        ];

  const heroImage =
    project.gallery && project.gallery.length > 0
      ? project.gallery[0]
      : project.image;

  return (
    <>
      {/* Top Banner / Hero Header */}
      <section className="relative flex min-h-[470px] flex-col justify-end overflow-hidden bg-marine-main pb-14 pt-28 text-white sm:pb-16 sm:pt-32 lg:min-h-[520px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt={project.title}
            fill
            priority
            className="object-cover object-center "
          />
          <div className="absolute inset-0 bg-marine-main/80 " />
        </div>

        <Container size="default" className="relative z-10 w-full">
          {/* Title & Category */}
          <div className="max-w-4xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] text-white font-bold leading-tight">
              {project.title}
            </h1>
            <p className="mt-2 text-base font-light text-white/85 sm:text-lg">
              {project.category}
            </p>
          </div>

          {/* Project Meta Specifications Grid (Client, Status, Contract Value, Duration, Role) */}
          <div className="mt-4 sm:mt-8 grid grid-cols-2 gap-y-5 gap-x-4 sm:gap-x-6 sm:grid-cols-3 md:grid-cols-5 md:gap-6">
            <div className="min-w-0">
              <p className="text-sm sm:text-base text-white/70">Client:</p>
              <p className="text-sm sm:text-base text-white break-words">
                {project.client || "All Marine Partner"}
              </p>
            </div>

            <div>
              <p className="text-sm sm:text-base text-white/70">Status</p>
              <p className="text-sm sm:text-base text-white">
                {project.status || "Completed"}
              </p>
            </div>

            <div>
              <p className="text-sm sm:text-base text-white/70">Contract Value:</p>
              <p className="text-sm sm:text-base text-white">
                {project.contractValue || "AED Confidential"}
              </p>
            </div>

            <div>
              <p className="text-sm sm:text-base text-white/70">Duration</p>
              <p className="text-sm sm:text-base text-white">
                {project.duration || "12 Months"}
              </p>
            </div>

            <div>
              <p className="text-sm sm:text-base text-white/70">Role</p>
              <p className=" text-sm sm:text-base text-white">
                {project.role || "Main Contractor"}
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="mt-4 sm:mt-2">
            <p className="text-sm sm:text-base text-white/70">Location</p>
            <p className=" text-sm sm:text-base text-white">
              {project.location}
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery & Description Section */}
      <section className="bg-white py-16 sm:py-20">
        <Container size="default">
          {/* Interactive Gallery Collage with Lightbox Popup */}
          <ProjectGallery images={galleryImages} title={project.title} />

          {/* Project Detailed Description */}
          <div className="mt-14 max-w-4xl space-y-6 sm:mt-18">
            {project.fullDescription && project.fullDescription.length > 0 ? (
              project.fullDescription.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="pera text-base sm:text-lg leading-relaxed text-body-muted"
                >
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="pera text-base sm:text-lg leading-relaxed text-body-muted">
                {project.description}
              </p>
            )}
          </div>
        </Container>
      </section>

      {/* Reused Quote CTA Section */}
      <QuoteCTA />
    </>
  );
}
