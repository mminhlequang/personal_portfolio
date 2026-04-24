# Personal Portfolio (Next.js 16 + Docker)

Premium portfolio UI with dark + blue gradients, smooth motion, bilingual (Vietnamese default, English optional), and scalable project rendering from one data file.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide Icons

## Run Locally

```bash
npm install --cache .npm-cache
npm run dev
```

Open http://localhost:3000.

Run on port 3000 in local dev:

```bash
npm run dev:3000
```

## Docker (Port 3000)

Build and run with Docker Compose:

```bash
docker compose up --build
```

Open http://localhost:3000.

## Data-Driven Structure

All project content is hardcoded in:

- `lib/data.ts`

Schema supports:

- category tabs
- featured project hero
- dynamic card layouts (`default`, `wide`, `spotlight`)
- multilingual fields (`vi`, `en`)
- image URLs (thumbnail + screenshots + logo)
- project links (live, github, case study)

When adding more projects, update `lib/data.ts` only. The UI grid and tabs adapt automatically.

## Main UI Components

- `components/portfolio-page.tsx`
- `components/project-hero.tsx`
- `components/project-card.tsx`
- `components/category-tabs.tsx`
- `components/language-toggle.tsx`
- `components/animated-background.tsx`
