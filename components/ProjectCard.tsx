"use client";

import Link from "next/link";
import { type Project } from "@/data/portfolio";
import { motion } from "framer-motion";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="rounded-2xl border border-border bg-card overflow-hidden group cursor-pointer"
      >
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl font-bold tracking-tight mb-1 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted">{project.description}</p>
            </div>
            {project.downloads && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20">
                {project.downloads}
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center gap-1 text-xs text-muted bg-background border border-border rounded-full px-3 py-1">
              {project.techStack}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-muted bg-background border border-border rounded-full px-3 py-1">
              {project.platform}
            </span>
          </div>

          <p className="text-sm text-muted leading-relaxed line-clamp-3 mb-4">
            {project.overview}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.links.slice(0, 2).map((link) => (
              <span
                key={link.url}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-background border border-border"
              >
                {link.label}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
