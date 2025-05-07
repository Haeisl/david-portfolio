export default function Footer() {
  return (
    <footer className="w-full border-t mt-16 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
      <div className="mb-1.5">
        <a href="mailto:david.h.hasse@proton.me" className="hover:underline">
          david.h.hasse@proton.me
        </a>
      </div>
      <div className="space-x-4">
        <a
          href="https://github.com/haeisl"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/david-hasse-ab0bb11a9"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <div className="mt-1.5">
        &copy; 2025 David Hasse. All rights reserved.
      </div>
    </footer>
  );
}
