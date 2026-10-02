"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : (prev as number) - 1
    );
  }, [selectedIndex, images.length]);

  const showNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev === images.length - 1 ? 0 : (prev as number) + 1
    );
  }, [selectedIndex, images.length]);

  // Keyboard navigation (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, showPrev, showNext]);

  // Lock body scroll when lightbox is active
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <>
      {/* Gallery Collage (5 Photos Grid) */}
      <div className="grid grid-cols-1 gap-2 sm:gap-3 md:grid-cols-3">
        {/* Row 1 - Image 1 (Colspan 2) */}
        <button
          type="button"
          onClick={() => openLightbox(0)}
          className="group relative aspect-[2/1] w-full overflow-hidden bg-gray-100 shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-marine-accent md:col-span-2 md:aspect-auto md:h-full"
          aria-label={`Open image 1 of ${title}`}
        >
          <Image
            src={images[0]}
            alt={`${title} - View 1`}
            fill
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </button>

        {/* Row 1 - Image 2 */}
        <button
          type="button"
          onClick={() => openLightbox(1)}
          className="group relative aspect-square w-full overflow-hidden bg-gray-100 shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-marine-accent md:col-span-1"
          aria-label={`Open image 2 of ${title}`}
        >
          <Image
            src={images[1]}
            alt={`${title} - View 2`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </button>

        {/* Row 2 - Image 3 */}
        <button
          type="button"
          onClick={() => openLightbox(2)}
          className="group relative aspect-square w-full overflow-hidden bg-gray-100 shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-marine-accent"
          aria-label={`Open image 3 of ${title}`}
        >
          <Image
            src={images[2]}
            alt={`${title} - View 3`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </button>

        {/* Row 2 - Image 4 */}
        <button
          type="button"
          onClick={() => openLightbox(3)}
          className="group relative aspect-square w-full overflow-hidden bg-gray-100 shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-marine-accent"
          aria-label={`Open image 4 of ${title}`}
        >
          <Image
            src={images[3]}
            alt={`${title} - View 4`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </button>

        {/* Row 2 - Image 5 */}
        <button
          type="button"
          onClick={() => openLightbox(4)}
          className="group relative aspect-square w-full overflow-hidden bg-gray-100 shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-marine-accent"
          aria-label={`Open image 5 of ${title}`}
        >
          <Image
            src={images[4]}
            alt={`${title} - View 5`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </button>
      </div>

      {/* Lightbox Modal Popup */}
      {selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery popup"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md transition-all duration-300 animate-in fade-in"
          onClick={closeLightbox}
        >
          {/* Top Bar: Title & Close Button */}
          <div className="absolute top-4 left-4 right-4 z-50 flex items-center justify-between text-white sm:top-6 sm:left-8 sm:right-8">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm sm:text-sm">
                {selectedIndex + 1} / {images.length}
              </span>
              <span className="hidden text-sm font-medium text-white/80 sm:inline-block">
                {title}
              </span>
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close image popup"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer sm:h-12 sm:w-12"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          {/* Previous Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-50 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer sm:left-6 sm:h-14 sm:w-14"
          >
            <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
          </button>

          {/* Active Image Container */}
          <div
            className="relative flex h-full max-h-[82vh] w-full max-w-5xl items-center justify-center p-4 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-full w-full">
              <Image
                src={images[selectedIndex]}
                alt={`${title} - Photo ${selectedIndex + 1}`}
                fill
                sizes="(max-width: 1280px) 95vw, 1200px"
                className="object-contain drop-shadow-2xl transition-all duration-300"
                priority
              />
            </div>
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-50 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer sm:right-6 sm:h-14 sm:w-14"
          >
            <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
          </button>
        </div>
      )}
    </>
  );
}
