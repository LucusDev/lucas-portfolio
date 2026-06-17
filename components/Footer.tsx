export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} LucasDev. All rights reserved.
        </p>
        <p className="text-xs text-muted">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
