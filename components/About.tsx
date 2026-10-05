"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Cloud,
  Code2,
  GraduationCap,
  MapPin,
} from "lucide-react";

const focusAreas = [
  {
    icon: Code2,
    number: "01",
    title: "Software Engineering",
    description:
      "Building reliable backend applications and APIs with clean, maintainable code.",
  },
  {
    icon: Cloud,
    number: "02",
    title: "Cloud & DevOps",
    description:
      "Exploring cloud infrastructure, containers, CI/CD and infrastructure as code.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 py-28 lg:px-8 lg:py-36"
    >
      {/* Background */}
      <div className="pointer-events-none absolute right-[-15%] top-[10%] h-[500px] w-[500px] rounded-full bg-violet-600/[0.06] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex items-center gap-5"
        >
          <span className="font-mono text-xs tracking-[0.28em] text-violet-400">
            01 / ABOUT
          </span>

          <div className="h-px flex-1 bg-white/[0.08]" />
        </motion.div>

        {/* Main content */}
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-zinc-600">
              A little about me
            </p>

            <h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              From computer science
              <span className="text-zinc-600"> to building in the cloud.</span>
            </h2>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:pt-10"
          >
            <div className="max-w-2xl space-y-6 text-base leading-8 text-zinc-400 sm:text-lg">
              <p>
                I&apos;m a Computer Science graduate from the University of the
                West of England, Bristol, with a growing focus on software and
                cloud engineering.
              </p>

              <p>
                My interests sit at the intersection of application development
                and infrastructure — from building backend systems to
                containerising applications, automating deployments and
                provisioning cloud resources.
              </p>

              <p>
                Through university work and independent projects, I&apos;ve
                worked with technologies including Python, FastAPI, PostgreSQL,
                Docker, Kubernetes, Terraform and Azure.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-violet-400">
              Currently looking for graduate & junior engineering opportunities
              <ArrowUpRight size={15} />
            </div>
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="mb-6 flex items-center gap-3">
            <GraduationCap size={18} className="text-violet-400" />

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
              Education
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-7 transition duration-500 hover:border-violet-400/20 sm:p-9 lg:p-10">
            <div className="pointer-events-none absolute right-[-30px] top-[-70px] text-[12rem] font-semibold tracking-[-0.08em] text-white/[0.018]">
              UWE
            </div>

            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="mb-3 text-sm text-violet-400">
                  University of the West of England
                </p>

                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                  BSc (Hons) Computer Science
                </h3>

                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-500">
                  <span className="flex items-center gap-2">
                    <MapPin size={14} />
                    Bristol, United Kingdom
                  </span>

                  <span>Second Class Honours · First Division (2:1)</span>
                </div>
              </div>

              <div className="md:text-right">
                <p className="font-mono text-xs tracking-[0.2em] text-zinc-600">
                  UWE BRISTOL
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Focus cards */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group rounded-[2rem] border border-white/[0.08] bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-violet-400/[0.025] sm:p-8"
              >
                <div className="mb-12 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-400/[0.06]">
                    <Icon size={20} className="text-violet-400" />
                  </div>

                  <span className="font-mono text-xs text-zinc-700">
                    {area.number}
                  </span>
                </div>

                <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">
                  {area.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-zinc-500">
                  {area.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}