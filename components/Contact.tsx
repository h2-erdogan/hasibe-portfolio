"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
} from "lucide-react";

function GithubLogo({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.341-3.369-1.341-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.071 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.337-2.221-.253-4.555-1.111-4.555-4.944 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.269.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.832a9.58 9.58 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.337-.012 2.415-.012 2.744 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10Z" />
    </svg>
  );
}

function LinkedinLogo({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.5 8.25H3.25V21H6.5V8.25ZM4.875 3A1.875 1.875 0 1 0 4.875 6.75 1.875 1.875 0 0 0 4.875 3ZM21 13.69c0-3.84-2.05-5.63-4.79-5.63-2.21 0-3.2 1.21-3.75 2.07V8.25H9.21V21h3.25v-6.31c0-1.66.32-3.27 2.38-3.27 2.03 0 2.06 1.9 2.06 3.38V21H21v-7.31Z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="relative overflow-hidden border-t border-white/[0.06] px-6 pb-24 pt-28 lg:px-8 lg:pb-32 lg:pt-36"
      >
        {/* Background */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.07] blur-[190px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Section number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 flex items-center gap-5"
          >
            <span className="font-mono text-xs tracking-[0.28em] text-violet-400">
              06 / CONTACT
            </span>

            <div className="h-px flex-1 bg-white/[0.08]" />
          </motion.div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="mx-auto max-w-5xl text-center"
          >
            {/* Availability */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-sm text-zinc-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              Open to graduate & junior opportunities
            </div>

            <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-zinc-600">
              Let&apos;s connect
            </p>

            <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              Have an opportunity
              <br />

              <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-zinc-200 bg-clip-text text-transparent">
                worth building?
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
              I&apos;m currently looking for graduate and junior opportunities
              across software engineering, backend development, cloud and
              DevOps.
            </p>

            {/* Main buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:hsb.erdgn12@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold !text-black shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-all duration-300 hover:scale-[1.03] hover:bg-zinc-200 hover:!text-black hover:shadow-[0_8px_35px_rgba(255,255,255,0.12)]"
              >
                <Mail
                  size={17}
                  className="text-black"
                />

                <span className="!text-black">
                  Get in touch
                </span>

                <ArrowUpRight
                  size={16}
                  className="text-black transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="/cv/hasibe-erdogan-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.02] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:border-white/[0.2] hover:bg-white/[0.08]"
              >
                <Download
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                />

                Download CV
              </a>
            </div>
          </motion.div>

          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-24 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {/* Email */}
            <a
              href="mailto:hsb.erdgn12@gmail.com"
              className="group rounded-[1.6rem] border border-white/[0.07] bg-white/[0.018] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-violet-400/[0.025]"
            >
              <div className="flex items-start justify-between">
                <Mail
                  size={19}
                  className="text-zinc-500 transition group-hover:text-violet-400"
                />

                <ArrowUpRight
                  size={15}
                  className="text-zinc-700 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-400"
                />
              </div>

              <p className="mt-9 text-[10px] uppercase tracking-[0.18em] text-zinc-700">
                Email
              </p>

              <p className="mt-2 text-sm text-zinc-300">
                Get in touch
              </p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/hasibe-erdogan"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[1.6rem] border border-white/[0.07] bg-white/[0.018] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-violet-400/[0.025]"
            >
              <div className="flex items-start justify-between">
                <span className="text-zinc-500 transition group-hover:text-violet-400">
                  <LinkedinLogo size={19} />
                </span>

                <ArrowUpRight
                  size={15}
                  className="text-zinc-700 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-400"
                />
              </div>

              <p className="mt-9 text-[10px] uppercase tracking-[0.18em] text-zinc-700">
                LinkedIn
              </p>

              <p className="mt-2 text-sm text-zinc-300">
                Let&apos;s connect
              </p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/h2-erdogan"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[1.6rem] border border-white/[0.07] bg-white/[0.018] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-violet-400/[0.025]"
            >
              <div className="flex items-start justify-between">
                <span className="text-zinc-500 transition group-hover:text-violet-400">
                  <GithubLogo size={19} />
                </span>

                <ArrowUpRight
                  size={15}
                  className="text-zinc-700 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-400"
                />
              </div>

              <p className="mt-9 text-[10px] uppercase tracking-[0.18em] text-zinc-700">
                GitHub
              </p>

              <p className="mt-2 text-sm text-zinc-300">
                Explore my code
              </p>
            </a>

            {/* Location */}
            <div className="rounded-[1.6rem] border border-white/[0.07] bg-white/[0.018] p-6">
              <MapPin
                size={19}
                className="text-zinc-500"
              />

              <p className="mt-9 text-[10px] uppercase tracking-[0.18em] text-zinc-700">
                Based in
              </p>

              <p className="mt-2 text-sm text-zinc-300">
                United Kingdom
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#home"
            className="text-base font-semibold tracking-tight text-zinc-300 transition hover:text-white"
          >
            HE<span className="text-violet-400">.</span>
          </a>

          <p className="text-xs">
            © 2026 Hasibe Erdogan. Built with Next.js & TypeScript.
          </p>

          <a
            href="#home"
            className="group inline-flex items-center gap-2 text-xs transition hover:text-zinc-300"
          >
            Back to top

            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </footer>
    </>
  );
}