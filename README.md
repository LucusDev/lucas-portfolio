# lucas-portfolio

Personal portfolio website for LucasDev — Flutter & Full-Stack Developer.

**Live:** [bylucas.tech](https://bylucas.tech/)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Runtime:** Bun

## Getting Started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/              # About + Skills
│   ├── contact/            # Contact page
│   ├── experiments/        # Mini apps listing
│   ├── projects/           # Projects listing
│   │   └── [slug]/         # Individual project detail
│   ├── globals.css         # Global styles + Tailwind config
│   ├── layout.tsx          # Root layout + metadata
│   └── page.tsx            # Home page
├── components/             # Shared UI components
├── data/                   # Portfolio content data
└── public/                 # Static assets
```

## Building

```bash
bun run build
bun start
```
