"use client";

import { useEffect, useState } from "react";
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

  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  // Handle mobile viewport units properly
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  return (
    <>
      {/* Thumbnail */}
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

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative text-center"
            // onClick={(e) => e.stopPropagation()} was macht das?
          >
            {/* Close Button */}
            <button
              className="absolute top-[-50px] right-0 text-white text-5xl font-bold z-10 hover:text-red-300 transition"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>

            {/* Large Image with responsive sizing */}
            <Image
              src={src}
              alt={alt}
              width={0}
              height={0}
              sizes="100vw"
              className="rounded-lg shadow-lg mx-auto
                         w-[300px] sm:w-[400px] md:w-[600px] lg:w-[800px] 2xl:w-[1200px]
                         h-auto"
            />

            {/* Caption */}
            {caption && (
              <div className="mt-4 bg-bgselectedlight dark:bg-bgselecteddark rounded-lg p-2 text-textlight dark:text-textdark text-sm md:text-base px-4">
                {caption}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
