"use client";

import Link from "next/link";
import { personalInfo, featuredProjects } from "@/data/portfolio";
import MainLayout from "@/components/MainLayout";
import { PageTransition } from "@/components/PageTransition";
import { ScrollReveal, staggerContainer, fadeInUp } from "@/components/ScrollReveal";
import { ProjectCard } from "@/components/ProjectCard";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <MainLayout>
      <PageTransition>
        <section className="min-h-[90vh] flex flex-col items-center justify-center px-6">
          <div className="max-w-2xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-sm font-medium text-accent mb-4 tracking-wide uppercase"
            >
              {personalInfo.title}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              {personalInfo.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="text-lg text-muted leading-relaxed mb-8"
            >
              {personalInfo.tagline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
              >
                View Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href={personalInfo.resumeFile}
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-sm font-medium hover:bg-card transition-colors w-full sm:w-auto justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex items-center justify-center gap-4 mt-12"
            >
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-muted hover:text-foreground transition-colors" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
              <a href={personalInfo.website} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors" aria-label="Website">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </a>
            </motion.div>
          </div>
        </section>

        <section className="py-24 px-6 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <p className="text-sm font-medium text-accent mb-2 uppercase tracking-wide">
                Selected Work
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">
                Featured Projects
              </h2>
            </ScrollReveal>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-6"
            >
              {featuredProjects.slice(0, 3).map((project) => (
                <motion.div key={project.slug} variants={fadeInUp}>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
            <ScrollReveal delay={0.3}>
              <div className="mt-12 text-center">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                >
                  View all projects
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
}
