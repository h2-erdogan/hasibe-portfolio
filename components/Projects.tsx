"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Boxes,
  CloudCog,
  GitBranch,
  Network,
} from "lucide-react";

/* GitHub icon
   Custom SVG because the installed lucide-react version
   does not export the GitHub icon correctly.
*/
function GithubLogo({ size = 17 }: { size?: number }) {
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

const projects = [
  {
    number: "02",
    title: "Kubernetes CI/CD\nDeployment Platform",
    description:
      "A container orchestration project focused on Kubernetes deployments, application health checks, resource management and automated CI validation.",
    technologies: [
      "Kubernetes",
      "Docker",
      "CI/CD",
      "GitHub Actions",
    ],
    github:
      "https://github.com/h2-erdogan/k8s-cicd-deployment-platform",
    icon: Boxes,
  },
  {
    number: "03",
    title: "Terraform Azure\nInfrastructure",
    description:
      "Cloud infrastructure provisioned with Terraform, focusing on reusable infrastructure as code, Azure networking and automated validation.",
    technologies: [
      "Terraform",
      "Azure",
      "IaC",
      "GitHub Actions",
    ],
    github:
      "https://github.com/h2-erdogan/terraform-azure-infrastructure",
    icon: CloudCog,
  },
  {
    number: "04",
    title: "Bristol Food\nNetwork",
    description:
      "A collaborative full-stack marketplace project with user roles, product management, shopping workflows and order functionality.",
    technologies: [
      "Full Stack",
      "Database",
      "Team Project",
    ],
    github:
      "https://github.com/h2-erdogan/g10-bristol-food-network",
    icon: Network,
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="relative overflow-hidden border-t border-white/[0.06] px-6 py-28 lg:px-8 lg:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-15%] top-[15%] h-[600px] w-[600px] rounded-full bg-violet-600/[0.05] blur-[170px]" />

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
            02 / SELECTED WORK
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
            Selected engineering projects
          </p>

          <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
  From code
  <span className="text-zinc-600"> to cloud.</span>
</h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
            A selection of projects exploring backend engineering, cloud
            infrastructure, containerisation and deployment automation.
          </p>
        </motion.div>

        {/* FEATURED PROJECT */}
        <motion.article
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="group relative overflow-hidden rounded-[2.2rem] border border-white/[0.08] bg-white/[0.025] p-7 transition duration-500 hover:border-violet-400/20 sm:p-9 lg:p-12"
        >
          {/* Purple glow */}
          <div className="pointer-events-none absolute right-[-10%] top-[-40%] h-[500px] w-[500px] rounded-full bg-violet-600/[0.08] blur-[130px] transition duration-700 group-hover:bg-violet-600/[0.12]" />

          {/* Decorative project number */}
          <span className="pointer-events-none absolute right-8 top-3 font-mono text-[8rem] font-semibold tracking-[-0.08em] text-white/[0.018] sm:text-[11rem]">
            01
          </span>

          <div className="relative grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            {/* LEFT - Project information */}
            <div>
              <div className="mb-8 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-violet-400/20 bg-violet-400/[0.06] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-violet-300">
                  Featured Project
                </span>

                <span className="text-xs uppercase tracking-[0.18em] text-zinc-600">
                  Backend · Cloud · Observability
                </span>
              </div>

              <h3 className="max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                Industrial Cloud
                <br />
                Monitoring Platform
              </h3>

              <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400">
                A real-time industrial monitoring platform built around a
                FastAPI backend and PostgreSQL, with containerised services,
                Grafana observability and statistical anomaly detection.
              </p>

              {/* Technologies */}
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Python",
                  "FastAPI",
                  "PostgreSQL",
                  "Docker",
                  "Grafana",
                  "GitHub Actions",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/[0.09] bg-black/20 px-3.5 py-2 text-xs text-zinc-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* GitHub button */}
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://github.com/h2-erdogan/industrial-cloud-monitoring"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/button inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
                >
                  <GithubLogo size={17} />

                  View on GitHub

                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                  />
                </a>
              </div>
            </div>

            {/* RIGHT - Architecture visual */}
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-violet-500/[0.05] blur-3xl" />

              <div className="relative overflow-hidden rounded-[1.7rem] border border-white/[0.08] bg-[#09090b] p-5 sm:p-7">
                {/* Window controls */}
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  </div>

                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-700">
                    system architecture
                  </span>
                </div>

                {/* Architecture flow */}
                <div className="space-y-4">
                  <ArchitectureItem
                    label="FastAPI"
                    description="Application API"
                    icon={<GitBranch size={17} />}
                  />

                  <Connector />

                  <ArchitectureItem
                    label="PostgreSQL"
                    description="Persistent data"
                    icon={<DatabaseIcon />}
                  />

                  <Connector />

                  <div className="grid grid-cols-2 gap-3">
                    <ArchitectureItem
                      label="Grafana"
                      description="Observability"
                      compact
                      icon={<ChartIcon />}
                    />

                    <ArchitectureItem
                      label="Docker"
                      description="Containers"
                      compact
                      icon={<Boxes size={17} />}
                    />
                  </div>
                </div>

                {/* Monitoring status */}
                <div className="mt-7 flex items-center justify-between border-t border-white/[0.06] pt-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-700">
                    anomaly detection
                  </span>

                  <span className="flex items-center gap-2 font-mono text-[10px] text-emerald-400/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    MONITORING
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* OTHER PROJECTS */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group flex min-h-[430px] flex-col rounded-[2rem] border border-white/[0.08] bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-violet-400/[0.025]"
              >
                {/* Icon and number */}
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-violet-400">
                    <Icon size={19} />
                  </div>

                  <span className="font-mono text-xs text-zinc-700">
                    {project.number}
                  </span>
                </div>

                {/* Project title */}
                <h3 className="mt-12 whitespace-pre-line text-2xl font-semibold leading-tight tracking-[-0.03em] text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-5 text-sm leading-7 text-zinc-500">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/[0.07] px-3 py-1.5 text-[11px] text-zinc-500"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* GitHub */}
                <div className="mt-auto pt-9">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
                  >
                    <GithubLogo size={16} />

                    GitHub

                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ======================================================
   SMALL COMPONENTS
====================================================== */

function ArchitectureItem({
  label,
  description,
  icon,
  compact = false,
}: {
  label: string;
  description: string;
  icon: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.025] ${
        compact ? "p-4" : "p-5"
      }`}
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-400/[0.07] text-violet-400">
        {icon}
      </div>

      <div>
        <p className="text-sm font-medium text-zinc-200">
          {label}
        </p>

        <p className="mt-0.5 text-xs text-zinc-600">
          {description}
        </p>
      </div>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex h-4 justify-center">
      <div className="h-full w-px bg-gradient-to-b from-violet-400/40 to-white/[0.06]" />
    </div>
  );
}

function DatabaseIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <ellipse cx="12" cy="5" rx="8" ry="3" />

      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />

      <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M4 19V9" />
      <path d="M10 19V5" />
      <path d="M16 19v-7" />
      <path d="M22 19V3" />
    </svg>
  );
}