"use client";

import { miniApps } from "@/data/portfolio";
import MainLayout from "@/components/MainLayout";
import { PageTransition } from "@/components/PageTransition";
import { ScrollReveal, staggerContainer, fadeInUp } from "@/components/ScrollReveal";
import { MiniAppCard } from "@/components/MiniAppCard";
import { motion } from "framer-motion";

export default function Experiments() {
  return (
    <MainLayout>
      <PageTransition>
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <p className="text-sm font-medium text-accent mb-2 uppercase tracking-wide">
                Side Projects
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                Experiments
              </h1>
              <p className="text-muted max-w-lg mb-12">
                Small experimental apps, UI ideas, and feature prototypes
                I&apos;ve built to explore new concepts and technologies.
              </p>
            </ScrollReveal>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {miniApps.map((app) => (
                <motion.div key={app.slug} variants={fadeInUp}>
                  <MiniAppCard app={app} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
}
