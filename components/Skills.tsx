"use client";

import { motion } from "motion/react";
import {
  Braces,
  Cloud,
  Container,
  Database,
  GitBranch,
  ServerCog,
  Terminal,
  Workflow,
} from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "Backend Engineering",
    description:
      "Building APIs, working with relational data and developing maintainable backend services.",
    icon: ServerCog,
    skills: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "REST APIs",
      "SQL",
    ],
  },
  {
    number: "02",
    title: "Cloud & Infrastructure",
    description:
      "Provisioning and working with modern cloud infrastructure using declarative tooling.",
    icon: Cloud,
    skills: [
      "Microsoft Azure",
      "Terraform",
      "Infrastructure as Code",
      "Cloud Networking",
    ],
  },
  {
    number: "03",
    title: "DevOps & Containers",
    description:
      "Containerising applications and building repeatable deployment and validation workflows.",
    icon: Container,
    skills: [
      "Docker",
      "Kubernetes",
      "CI/CD",
      "GitHub Actions",
      "Linux",
    ],
  },
];

const toolkit = [
  {
    icon: Braces,
    label: "Development",
    value: "TypeScript · Python",
  },
  {
    icon: Database,
    label: "Data",
    value: "PostgreSQL · SQL",
  },
  {
    icon: Container,
    label: "Containers",
    value: "Docker · Kubernetes",
  },
  {
    icon: GitBranch,
    label: "Version Control",
    value: "Git · GitHub",
  },
  {
    icon: Workflow,
    label: "Automation",
    value: "GitHub Actions · CI/CD",
  },
  {
    icon: Terminal,
    label: "Environment",
    value: "Linux · CLI",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 py-28 lg:px-8 lg:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[20%] top-[20%] h-[550px] w-[550px] rounded-full bg-violet-600/[0.045] blur-[170px]" />

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
            04 / SKILLS
          </span>

          <div className="h-px flex-1 bg-white/[0.08]" />
        </motion.div>

        {/* Intro */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-zinc-600">
              Technical toolkit
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              Tools I use to turn ideas
              <span className="text-zinc-600"> into systems.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl text-base leading-8 text-zinc-500 lg:pb-1"
          >
            My current stack is centred around backend development, cloud
            infrastructure and DevOps, with a focus on building,
            containerising and deploying reliable applications.
          </motion.p>
        </div>

        {/* Main skill cards */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group relative flex min-h-[430px] flex-col overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-violet-400/[0.025] sm:p-8"
              >
                {/* Subtle glow */}
                <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-[200px] w-[200px] rounded-full bg-violet-500/[0.04] blur-[70px] transition duration-500 group-hover:bg-violet-500/[0.08]" />

                <div className="relative flex h-full flex-col">
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/15 bg-violet-400/[0.06] text-violet-400">
                      <Icon size={20} />
                    </div>

                    <span className="font-mono text-xs text-zinc-700">
                      {group.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-12">
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                      {group.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-zinc-500">
                      {group.description}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="mt-auto flex flex-wrap gap-2 pt-10">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/[0.08] bg-black/10 px-3.5 py-2 text-xs text-zinc-400 transition duration-200 group-hover:border-white/[0.1]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Toolkit */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-6 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.018]"
        >
          <div className="border-b border-white/[0.06] px-7 py-6 sm:px-8">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
                Engineering Toolkit
              </p>

              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-700">
                Current Stack
              </span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {toolkit.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className={`group flex items-center gap-4 p-7 transition duration-300 hover:bg-white/[0.025] ${
                    index !== toolkit.length - 1
                      ? "border-b border-white/[0.06] lg:border-b-0"
                      : ""
                  }`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] text-zinc-500 transition group-hover:border-violet-400/20 group-hover:text-violet-400">
                    <Icon size={17} />
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-600">
                      {item.label}
                    </p>

                    <p className="mt-1.5 text-sm text-zinc-300">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}