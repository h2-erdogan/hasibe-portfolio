"use client";

import { motion } from "motion/react";
import {
  BookOpen,
  Braces,
  Cloud,
  Database,
} from "lucide-react";

const certifications = [
  {
    number: "01",
    category: "Cloud",
    title: "Microsoft Azure Essentials",
    subtitle: "by Microsoft Press",
    provider: "LinkedIn Learning",
    date: "October 2026",
    description:
      "Structured learning covering essential Microsoft Azure concepts and cloud services, supporting my continued development in cloud engineering.",
    skills: [
      "Microsoft Azure",
      "Cloud Computing",
      "Cloud Fundamentals",
    ],
    icon: Cloud,
    watermark: "AZURE",
  },
  {
    number: "02",
    category: "Data Science",
    title: "Data Science Essentials with Python",
    subtitle: "Cisco Networking Academy",
    provider: "Cisco Networking Academy",
    date: "May 2026",
    description:
      "Completed foundational data science training using Python, strengthening my understanding of data analysis and computational problem-solving.",
    skills: [
      "Python",
      "Data Science",
      "Data Analysis",
    ],
    icon: Braces,
    watermark: "CISCO",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 py-28 lg:px-8 lg:py-36"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute right-[-10%] top-[10%] h-[550px] w-[550px] rounded-full bg-violet-600/[0.05] blur-[170px]" />

      <div className="pointer-events-none absolute bottom-[5%] left-[-10%] h-[450px] w-[450px] rounded-full bg-violet-600/[0.035] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center gap-5"
        >
          <span className="font-mono text-xs tracking-[0.28em] text-violet-400">
            05 / CERTIFICATIONS
          </span>

          <div className="h-px flex-1 bg-white/[0.08]" />
        </motion.div>

        {/* Intro */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-zinc-600">
              Continuous learning
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              Learning beyond
              <span className="text-zinc-600"> the classroom.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl text-base leading-8 text-zinc-500"
          >
            Courses and certifications supporting my development across cloud
            computing, Python and data-driven software engineering.
          </motion.p>
        </div>

        {/* Certification cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {certifications.map((certification, index) => {
            const Icon = certification.icon;

            return (
              <motion.article
                key={certification.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="group relative flex min-h-[520px] flex-col overflow-hidden rounded-[2.2rem] border border-white/[0.08] bg-white/[0.025] p-7 transition duration-500 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-violet-400/[0.025] sm:p-9 lg:p-10"
              >
                {/* Card glow */}
                <div className="pointer-events-none absolute right-[-20%] top-[-20%] h-[350px] w-[350px] rounded-full bg-violet-600/[0.045] blur-[110px] transition duration-500 group-hover:bg-violet-600/[0.08]" />

                {/* Watermark */}
                <div className="pointer-events-none absolute -right-3 top-10 text-[5rem] font-semibold tracking-[-0.07em] text-white/[0.018] sm:text-[6.5rem]">
                  {certification.watermark}
                </div>

                <div className="relative flex h-full flex-col">
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/[0.06] text-violet-400">
                      <Icon size={21} />
                    </div>

                    <span className="font-mono text-xs text-zinc-700">
                      {certification.number}
                    </span>
                  </div>

                  {/* Category */}
                  <div className="mt-10">
                    <span className="inline-flex rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500">
                      {certification.category}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="mt-6">
                    <h3 className="max-w-xl text-2xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-3xl">
                      {certification.title}
                    </h3>

                    <p className="mt-3 text-sm font-medium text-violet-300">
                      {certification.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-500">
                    {certification.description}
                  </p>

                  {/* Skills */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {certification.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/[0.08] bg-black/10 px-3.5 py-2 text-xs text-zinc-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Provider + date */}
                  <div className="mt-auto pt-10">
                    <div className="h-px bg-white/[0.07]" />

                    <div className="mt-6 flex items-end justify-between gap-6">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-700">
                          Provider
                        </p>

                        <p className="mt-2 text-sm text-zinc-300">
                          {certification.provider}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-700">
                          Completed
                        </p>

                        <p className="mt-2 text-sm text-zinc-300">
                          {certification.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Learning footer */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mt-6 rounded-[2rem] border border-white/[0.07] bg-white/[0.015] p-7 sm:p-8"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-violet-400">
                <BookOpen size={19} />
              </div>

              <div>
                <h3 className="text-base font-medium text-zinc-200">
                  Always learning.
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-600">
                  Continuing to expand my knowledge across cloud platforms,
                  infrastructure automation and production software
                  engineering.
                </p>
              </div>
            </div>

            <div className="hidden shrink-0 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-700 sm:flex">
              <Database size={14} />
              Learn · Build · Iterate
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}