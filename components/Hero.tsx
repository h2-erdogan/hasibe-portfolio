"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const technologies = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "Azure",
  "Terraform",
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

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pb-16 pt-32 lg:px-8"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute left-[15%] top-[25%] h-[500px] w-[500px] rounded-full bg-violet-600/[0.07] blur-[150px]" />

      <div className="pointer-events-none absolute right-[20%] top-[20%] h-[550px] w-[550px] rounded-full bg-violet-500/[0.08] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid min-h-[720px] items-center gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">

          {/* LEFT SIDE - PHOTO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full max-w-[430px] lg:mx-0"
          >
            {/* Purple glow */}
            <div className="absolute -inset-8 rounded-[3rem] bg-violet-500/10 blur-3xl" />

            {/* Decorative outer border */}
            <div className="absolute -inset-3 rounded-[2.3rem] border border-violet-400/10" />

            {/* Photo container */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-2 shadow-2xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/images/hasibe-profile.png"
                  alt="Hasibe Erdogan"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 430px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating location card */}
            <div className="absolute -bottom-5 -right-5 rounded-2xl border border-white/10 bg-[#0b0b0d]/90 px-5 py-4 shadow-2xl backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Based in
              </p>

              <p className="mt-1 text-sm font-medium text-white">
                United Kingdom
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE - CONTENT */}
          <div>
            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              Open to graduate & junior opportunities
            </motion.div>

            {/* Name */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-5 text-sm font-medium uppercase tracking-[0.32em] text-violet-400"
            >
              Hasibe Erdogan
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              Software Engineer.
              <br />

              <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-zinc-100 bg-clip-text text-transparent">
                Cloud Builder.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400"
            >
              Computer Science graduate from UWE Bristol building reliable
              software, scalable backend systems and modern cloud
              infrastructure.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              {/* Primary CTA */}
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold !text-black shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-all duration-300 hover:scale-[1.03] hover:bg-zinc-200 hover:!text-black hover:shadow-[0_8px_35px_rgba(255,255,255,0.12)]"
              >
                <span className="!text-black">
                  Explore my work
                </span>

                <ArrowDown
                  size={17}
                  className="text-black transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>

              {/* Secondary CTA */}
              <a
                href="/cv/hasibe-erdogan-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.02] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:border-white/[0.2] hover:bg-white/[0.08]"
              >
                Download CV

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-8 flex gap-6 text-sm text-zinc-500"
            >
              <a
                href="https://github.com/h2-erdogan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <GithubLogo />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/hasibe-erdogan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <LinkedinLogo />
                LinkedIn
              </a>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-10 flex max-w-3xl flex-wrap gap-2"
            >
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs text-zinc-400 transition duration-200 hover:border-violet-400/40 hover:bg-violet-400/[0.05] hover:text-white"
                >
                  {technology}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}