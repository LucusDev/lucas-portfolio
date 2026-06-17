"use client";

import { type MiniApp } from "@/data/portfolio";
import { motion } from "framer-motion";

export function MiniAppCard({ app }: { app: MiniApp }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="p-6 rounded-2xl border border-border bg-card group"
    >
      <h3 className="text-lg font-bold tracking-tight mb-1 group-hover:text-accent transition-colors">
        {app.title}
      </h3>
      <p className="text-sm text-muted mb-4">{app.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="inline-flex items-center gap-1 text-xs text-muted bg-background border border-border rounded-full px-3 py-1">
          {app.techStack}
        </span>
        <span className="inline-flex items-center gap-1 text-xs text-muted bg-background border border-border rounded-full px-3 py-1">
          {app.purpose}
        </span>
      </div>

      <p className="text-sm text-muted leading-relaxed line-clamp-3 mb-4">
        {app.overview}
      </p>

      <div className="space-y-2">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-accent">
          Highlights
        </h4>
        <ul className="space-y-1">
          {app.highlights.map((h) => (
            <li key={h} className="text-sm text-muted flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      </div>

      {app.links.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-border">
          {app.links.slice(0, 3).map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-background border border-border hover:border-accent/40 hover:text-accent transition-all"
            >
              {link.label}
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          ))}
        </div>
      )}
    </motion.div>
  );
}
