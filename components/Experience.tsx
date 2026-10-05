"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  BrainCircuit,
  ChartNoAxesCombined,
  Plane,
} from "lucide-react";

const highlights = [
  {
    icon: ChartNoAxesCombined,
    title: "Lounge Eligibility Modelling",
    description:
      "Analysed passenger and flight-related data to model lounge eligibility for British Airways at Heathrow Terminal 3.",
    tag: "Data Analysis",
  },
  {
    icon: BrainCircuit,
    title: "Customer Buying Behaviour",
    description:
      "Explored customer booking behaviour and built a predictive machine learning model to identify factors influencing purchasing decisions.",
    tag: "Machine Learning",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 py-28 lg:px-8 lg:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-[-15%] top-[20%] h-[600px] w-[600px] rounded-full bg-violet-600/[0.05] blur-[170px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center gap-5"
        >
          <span className="font-mono text-xs tracking-[0.28em] text-violet-400">
            03 / EXPERIENCE
          </span>

          <div className="h-px flex-1 bg-white/[0.08]" />
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-zinc-600">
            Applied learning
          </p>

          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            Turning theory into
            <span className="text-zinc-600"> practical work.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
            Virtual work experience focused on solving realistic
            data-driven business problems through analysis, modelling
            and technical decision-making.
          </p>
        </motion.div>

        {/* Main experience card */}
        <motion.article
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="relative overflow-hidden rounded-[2.2rem] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-9 lg:p-12"
        >
          {/* Decorative BA */}
          <div className="pointer-events-none absolute -right-4 -top-16 text-[12rem] font-semibold tracking-[-0.08em] text-white/[0.018] sm:text-[16rem]">
            BA
          </div>

          <div className="relative">
            {/* Top information */}
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
              <div>
                <div className="mb-7 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/[0.06] text-violet-400">
                    <Plane size={21} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                      Virtual Experience
                    </p>

                    <p className="mt-1 text-sm text-zinc-400">
                      Forage
                    </p>
                  </div>
                </div>

                <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                  British Airways
                </h3>

                <p className="mt-3 text-base font-medium text-violet-300">
                  Data Science Job Simulation
                </p>
              </div>

              {/* Date */}
              <div className="lg:text-right">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-600">
                  Completed
                </p>

                <p className="mt-2 text-sm text-zinc-300">
                  October 2026
                </p>

                <span className="mt-4 inline-flex rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                  Job Simulation
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="my-10 h-px bg-white/[0.07]" />

            {/* Tasks */}
            <div className="grid gap-5 lg:grid-cols-2">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;

                return (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.1,
                    }}
                    className="group rounded-[1.7rem] border border-white/[0.07] bg-black/20 p-6 transition duration-300 hover:border-violet-400/20 hover:bg-violet-400/[0.025] sm:p-7"
                  >
                    <div className="mb-8 flex items-start justify-between gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03] text-violet-400">
                        <Icon size={18} />
                      </div>

                      <span className="rounded-full border border-white/[0.07] px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-zinc-600">
                        {highlight.tag}
                      </span>
                    </div>

                    <h4 className="text-xl font-semibold tracking-[-0.025em] text-white">
                      {highlight.title}
                    </h4>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">
                      {highlight.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="mt-8 flex flex-col gap-5 border-t border-white/[0.07] pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-2">
                {[
                  "Data Analysis",
                  "Machine Learning",
                  "Python",
                  "Business Insights",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[11px] text-zinc-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href="https://www.theforage.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
              >
                About Forage

                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </motion.article>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-5 max-w-3xl text-xs leading-6 text-zinc-700"
        >
          This was a self-paced virtual job simulation completed through
          Forage and is presented as practical experience rather than
          employment at British Airways.
        </motion.p>
      </div>
    </section>
  );
}