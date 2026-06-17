import { notFound } from "next/navigation";
import { featuredProjects } from "@/data/portfolio";

export function generateStaticParams() {
  return featuredProjects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = featuredProjects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <ProjectDetailContent project={project} />
  );
}

function ProjectDetailContent({
  project,
}: {
  project: (typeof featuredProjects)[number];
}) {
  return (
    <article className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <a
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </a>

        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">
              {project.title}
            </h1>
            <p className="text-lg text-muted">{project.description}</p>
          </div>
          {project.downloads && (
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20">
              {project.downloads}
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <span className="inline-flex items-center gap-1 text-sm text-muted bg-background border border-border rounded-full px-3 py-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
              <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
              <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z" />
            </svg>
            {project.techStack}
          </span>
          <span className="inline-flex items-center gap-1 text-sm text-muted bg-background border border-border rounded-full px-3 py-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            {project.platform}
          </span>
          <span className="inline-flex items-center gap-1 text-sm text-muted bg-background border border-border rounded-full px-3 py-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            {project.role}
          </span>
        </div>

        {project.previews.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {project.previews.map((src, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-card overflow-hidden max-h-[32rem]"
              >
                <img
                  src={src}
                  alt={`${project.title} preview ${i + 1}`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}

        <div className="space-y-10">
          <section>
            <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              Overview
            </h2>
            <p className="text-muted leading-relaxed">{project.overview}</p>
          </section>

          <section>
            <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              Key Features
            </h2>
            <ul className="space-y-2">
              {project.keyFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              What I Learned
            </h2>
            <ul className="space-y-2">
              {project.whatILearned.map((l) => (
                <li key={l} className="flex items-start gap-3 text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  {l}
                </li>
              ))}
            </ul>
          </section>

          {project.details && (
            <section>
              <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                Details
              </h2>
              <p className="text-muted leading-relaxed">{project.details}</p>
            </section>
          )}
        </div>

        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-10 pt-8 border-t border-border">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-foreground text-background hover:opacity-90 transition-opacity"
              >
                {link.label}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
