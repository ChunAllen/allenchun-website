"use client";

import Image from "next/image";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

export default function ProjectGallery({ images }: { images: string[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;
    const width = el.clientWidth;
    el.scrollBy({ left: dir === "next" ? width : -width, behavior: "smooth" });
  };

  if (!images?.length) return null;

  return (
    <div className="relative">
      {/* Slider viewport */}
      <div
        ref={scrollerRef}
        className="relative flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth rounded-lg border bg-gray-50 dark:bg-gray-900 dark:border-gray-800"
        style={{ scrollbarWidth: "none" }}
      >
        {/* Hide scrollbar (Firefox via style above; WebKit via utility) */}
        <div className="absolute inset-y-0 right-0 w-0 pointer-events-none" />
        {images.map((src, i) => (
          <div key={src + i} className="relative min-w-full snap-start aspect-video bg-gray-100 dark:bg-gray-800">
            <Image
              src={src}
              alt={`Screenshot ${i + 1}`}
              fill
              className="object-contain"  /* logos/screens best with contain; change to cover for photos */
              sizes="100vw"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => scrollBy("prev")}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 dark:bg-gray-800/90 border shadow p-2 hover:bg-white dark:hover:bg-gray-800 transition"
          >
            <FiChevronLeft className="w-5 h-5 text-gray-800 dark:text-gray-200" />
          </button>

          <button
            onClick={() => scrollBy("next")}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 dark:bg-gray-800/90 border shadow p-2 hover:bg-white dark:hover:bg-gray-800 transition"
          >
            <FiChevronRight className="w-5 h-5 text-gray-800 dark:text-gray-200" />
          </button>
        </>
      )}
    </div>
  );
}