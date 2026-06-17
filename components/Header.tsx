"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experiments", label: "Experiments" },
  { href: "/contact", label: "Contact" },
];

function NavLinks({
  mobile,
  onClick,
}: {
  mobile?: boolean;
  onClick?: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const isActive =
          link.href === "/"
            ? pathname === "/"
            : pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClick}
            className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
              mobile ? "block w-full text-base py-3 px-4" : ""
            } ${
              isActive
                ? "text-foreground"
                : "text-muted hover:text-foreground"
            }`}
          >
            {link.label}
            {isActive && (
              <motion.div
                layoutId={mobile ? "nav-indicator-mobile" : "nav-indicator"}
                className="absolute inset-0 bg-foreground/5 rounded-lg -z-10"
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 30,
                }}
              />
            )}
          </Link>
        );
      })}
    </>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
    >
      <nav className="mx-auto max-w-5xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight hover:text-accent transition-colors shrink-0"
        >
          LucasDev
        </Link>

        <div className="hidden md:flex items-center gap-1">
          <NavLinks />
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 -mr-2 text-muted hover:text-foreground transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden overflow-hidden border-b border-border bg-background"
          >
            <div className="px-4 py-4 space-y-1">
              <NavLinks mobile onClick={() => setMenuOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
