"use client";

import { featuredProjects } from "@/data/portfolio";
import MainLayout from "@/components/MainLayout";
import { PageTransition } from "@/components/PageTransition";
import { ScrollReveal, staggerContainer, fadeInUp } from "@/components/ScrollReveal";
import { ProjectCard } from "@/components/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <MainLayout>
      <PageTransition>
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <p className="text-sm font-medium text-accent mb-2 uppercase tracking-wide">
                Selected Work
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                Projects
              </h1>
              <p className="text-muted max-w-lg mb-12">
                A selection of apps and websites I&apos;ve built — from Flutter mobile
                apps to full-stack web platforms.
              </p>
            </ScrollReveal>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-6"
            >
              {featuredProjects.map((project) => (
                <motion.div key={project.slug} variants={fadeInUp}>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
}
