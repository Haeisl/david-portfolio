"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ImageModal({
  src,
  alt,
  caption,
  thumbnailWidth = 400,
}: {
  src: string;
  alt: string;
  caption?: string;
  thumbnailWidth?: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [imageWidth, setImageWidth] = useState<number | null>(null);

  /* ──────────────────────────────────────────
     Lock page scroll when the modal is open
     ────────────────────────────────────────── */
  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");

    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  /* ──────────────────────────────────────────
     Fix 100 vh on mobile browsers
     ────────────────────────────────────────── */
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  /* ──────────────────────────────────────────
     Keep `imageWidth` in sync with the actual
     rendered width of the <Image> element
     ────────────────────────────────────────── */
  useEffect(() => {
    if (!isOpen || !imageRef.current) return;

    // Initial measurement (covers very fast loads)
    setImageWidth(imageRef.current.offsetWidth);

    // React to any later resizes (viewport changes, zoom, etc.)
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setImageWidth(entry.contentRect.width);
      }
    });
    ro.observe(imageRef.current);

    return () => ro.disconnect();
  }, [isOpen]);

  return (
    <>
      {/* ───────────── Thumbnail ───────────── */}
      <div
        className="inline-block text-center cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          width={thumbnailWidth}
          height={thumbnailWidth}
          className="rounded shadow hover:opacity-80 transition"
        />
      </div>

      {/* ───────────── Modal ───────────── */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm
                     flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative text-center w-fit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-[-50px] right-0
                         text-textdark text-5xl font-bold z-10
                         hover:text-[var(--color-primary)]
                         dark:hover:text-[var(--color-primarydark)]
                         transition"
              onClick={() => setIsOpen(false)}
              aria-label="Close modal"
            >
              &times;
            </button>

            {/* Large image */}
            <Image
              ref={imageRef}
              src={src}
              alt={alt}
              width={0}
              height={0}
              sizes="100vw"
              className="rounded-lg shadow-lg mx-auto
                         min-w-[25vw] min-h-[25vh]
                         max-w-[90vw] max-h-[90vh]
                         w-auto h-auto object-contain"
              onLoadingComplete={(img) => setImageWidth(img.width)}
            />

            {/* Caption */}
            {caption && (
              <div
                className="mt-4 inline-block
                           bg-bgselectedlight dark:bg-bgselecteddark
                           rounded-lg p-2 text-textlight dark:text-textdark
                           text-sm md:text-base text-center"
                style={{
                  width: "fit-content", // shrink-wrap text
                  maxWidth: imageWidth ? `${imageWidth}px` : "100%", // cap at image width
                }}
              >
                {caption}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
