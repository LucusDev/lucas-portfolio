"use client";

import { personalInfo, skills } from "@/data/portfolio";
import MainLayout from "@/components/MainLayout";
import { PageTransition } from "@/components/PageTransition";
import { ScrollReveal, staggerContainer, fadeInUp } from "@/components/ScrollReveal";
import { motion } from "framer-motion";

export default function About() {
  return (
    <MainLayout>
      <PageTransition>
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <p className="text-sm font-medium text-accent mb-2 uppercase tracking-wide">
                About
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
                {personalInfo.name}
              </h1>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <ScrollReveal className="lg:col-span-3 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-3">
                    {personalInfo.title}
                  </h2>
                  <p className="text-muted leading-relaxed">
                    {personalInfo.tagline} Based in {personalInfo.location}.
                  </p>
                </div>
                <p className="text-muted leading-relaxed">
                  I&apos;m a Flutter and full-stack developer passionate about building
                  well-architected, performant applications across mobile, web, and
                  desktop. I focus on clean architecture, great user experience, and
                  writing maintainable code. I&apos;ve shipped apps with 10K+ downloads,
                  led Flutter migrations at scale, and built custom native integrations.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    {personalInfo.email}
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-full text-sm font-medium hover:bg-card transition-colors w-full sm:w-auto justify-center"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </ScrollReveal>

              <div className="lg:col-span-2">
                <ScrollReveal>
                  <h2 className="text-sm font-medium text-accent mb-6 uppercase tracking-wide">
                    Skills
                  </h2>
                </ScrollReveal>
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  {skills.map((group) => (
                    <motion.div
                      key={group.category}
                      variants={fadeInUp}
                      className="p-4 rounded-xl border border-border bg-card"
                    >
                      <h3 className="text-xs font-semibold text-accent mb-2">
                        {group.category}
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {group.items.map((skill) => (
                          <span
                            key={skill}
                            className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-background border border-border text-muted"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
}
