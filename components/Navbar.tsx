"use client";

import { ArrowUpRight } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

function GithubLogo() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.341-3.369-1.341-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.071 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.337-2.221-.253-4.555-1.111-4.555-4.944 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.269.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.832a9.58 9.58 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.337-.012 2.415-.012 2.744 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10Z" />
    </svg>
  );
}

function LinkedinLogo() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.5 8.25H3.25V21H6.5V8.25ZM4.875 3A1.875 1.875 0 1 0 4.875 6.75 1.875 1.875 0 0 0 4.875 3ZM21 13.69c0-3.84-2.05-5.63-4.79-5.63-2.21 0-3.2 1.21-3.75 2.07V8.25H9.21V21h3.25v-6.31c0-1.66.32-3.27 2.38-3.27 2.03 0 2.06 1.9 2.06 3.38V21H21v-7.31Z" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#home" className="text-xl font-semibold tracking-tight">
          HE<span className="text-violet-400">.</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/h2-erdogan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden rounded-full p-2 text-zinc-400 transition hover:bg-white/10 hover:text-white sm:block"
          >
            <GithubLogo />
          </a>

          <a
            href="https://www.linkedin.com/in/hasibe-erdogan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden rounded-full p-2 text-zinc-400 transition hover:bg-white/10 hover:text-white sm:block"
          >
            <LinkedinLogo />
          </a>

          <a
            href="/cv/hasibe-erdogan-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-medium transition duration-200 hover:bg-white hover:text-black"
          >
            Résumé
            <ArrowUpRight size={15} />
          </a>
        </div>
      </nav>
    </header>
  );
}