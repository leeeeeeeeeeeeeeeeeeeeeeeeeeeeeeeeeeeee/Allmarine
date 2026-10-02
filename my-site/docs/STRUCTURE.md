# Project Structure

AllMarine is a **Next.js App Router** site with **Tailwind CSS**, configured for **static export** (`output: 'export'`) and deployment to **Apache**.

## Folder Tree

```
my-site/
├── app/
│   ├── layout.tsx              # Root layout (fonts, metadata, navbar, footer)
│   ├── page.tsx                # Homepage (composed sections)
│   ├── globals.css
│   ├── doctors/
│   │   └── page.tsx            # Placeholder
│   ├── about/
│   │   └── page.tsx
│   ├── pricing/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx            # Form posts to /contact.php
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx        # generateStaticParams (no ISR)
│   ├── sitemap.ts              # Generated at build time
│   ├── robots.ts
│   └── not-found.tsx           # Maps to 404.html on Apache
│
├── components/
│   ├── ui/                     # Button, Card, Input
│   ├── layout/                 # Navbar, Footer, Container
│   └── sections/               # Hero, Commitment, Stats, OurWorks, OurActivities, Leadership, QuoteCTA
│
├── lib/
│   ├── utils.ts                # cn(), formatDate()
│   └── constants.ts            # Nav links, site metadata, content data
│
├── public/
│   ├── contact.php             # PHP form handler (ships to /out untouched)
│   ├── images/
│   └── fonts/
│
├── types/
│   └── index.ts
│
├── docs/
│   └── STRUCTURE.md            # This file
│
├── scripts/
│   └── copy-htaccess.js        # Post-build: copies .htaccess into /out
│
├── next.config.ts              # output: 'export', trailingSlash, unoptimized images
├── tailwind.config.ts
├── .htaccess                   # Copied into /out before Apache upload
└── tsconfig.json
```

## Component Pattern

The homepage is built from self-contained sections, not one giant file:

```tsx
// app/page.tsx
export default function Home() {
  return (
    <>
      <Hero />
      <Commitment />
      <Stats />
      <OurWorks />
      <OurActivities />
      <Leadership />
      <QuoteCTA />
    </>
  );
}
```

Each section lives in `components/sections/`. Reorder or swap sections by editing `app/page.tsx` only.

Shared chrome (navbar, footer, container) lives in `components/layout/`.
Reusable primitives (button, card, input) live in `components/ui/`.

## Static Export

`next.config.ts` settings:

- `output: 'export'` — produces static HTML in `/out`
- `trailingSlash: true` — Apache-friendly URLs (`/about/index.html`)
- `images.unoptimized: true` — required for static export

## Build & Deploy to Apache

```bash
npm run build
```

This runs `next build` then `postbuild` which copies `.htaccess` into `out/`.

Upload the entire `out/` directory to your Apache document root.

### Pre-upload checklist

- [ ] `out/.htaccess` exists (auto-copied by postbuild)
- [ ] `out/contact.php` exists (copied from `public/`)
- [ ] `out/404.html` exists (from `app/not-found.tsx`)
- [ ] Apache has `mod_rewrite` enabled

## Contact Form

The contact page uses a standard HTML form:

```tsx
<form action="/contact.php" method="POST">
  {/* fields */}
</form>
```

`public/contact.php` validates input and sends email via PHP `mail()`. It lives in `public/` so Next.js copies it to `/out/contact.php` unchanged during export.

Update the `$to` address in `contact.php` before going live.

## Blog

Posts are defined in `lib/constants.ts` (`BLOG_POSTS`).

`app/blog/[slug]/page.tsx` uses `generateStaticParams()` to pre-render all slugs at build time. There is no ISR or `revalidate` — all pages are static.

## Sitemap & Robots

- `app/sitemap.ts` — build-time sitemap at `/sitemap.xml`
- `app/robots.ts` — build-time robots.txt at `/robots.txt`

## Design System & CSS Variables

All colors, fonts, and typography scales are centralized via CSS variables in [`app/globals.css`](file:///c:/Users/alimo/OneDrive/Desktop/allmarine/my-site/app/globals.css) and exposed through Tailwind CSS in [`tailwind.config.ts`](file:///c:/Users/alimo/OneDrive/Desktop/allmarine/my-site/tailwind.config.ts).

### CSS Custom Properties (`:root`)

| CSS Variable | Value | Purpose |
| :--- | :--- | :--- |
| `--background` | `#ffffff` | Page background |
| `--foreground` | `#1f2937` | Base text color |
| `--marine-main` | `#005B61` | Primary brand marine color |
| `--marine-dark` | `#084e55` | Dark marine headers, footer accents & cards |
| `--marine-heading` | `#0D4751` | High-contrast section headings & titles |
| `--marine-light` | `#00607A` | Overlay tint & highlight borders |
| `--marine-accent` | `#085c64` | Subheadings & badge accents |
| `--surface-gray` | `#f7f7f7` | Alternating section backgrounds |
| `--text-dark` | `#1f2937` | High emphasis body text |
| `--text-muted` | `#4b5563` | Paragraph & description text |
| `--text-light` | `#9ca3af` | Eyebrow badges, dates & subtitles |
| `--font-sans` | `var(--font-roboto)` | Primary body font |
| `--font-condensed` | `var(--font-roboto-condensed)` | Headings font |

### Reusable Typography Classes

Always use these semantic classes instead of ad-hoc font styles:

| Class | Description / Default Rules | Usage Example |
| :--- | :--- | :--- |
| `.mainhead` | `font-condensed font-bold uppercase text-[clamp(2rem,5vw,3.5rem)] leading-[1.08]` | Hero titles, Page H1s |
| `.subhead` | `font-condensed font-bold text-[clamp(1.75rem,3.5vw,2.25rem)] leading-[1.15]` | Major Section H2s |
| `.smallhead` | `font-condensed font-bold text-xl leading-[1.3]` | Card headers, Pillar titles, Service titles |
| `.headingbadges` | `text-xs font-bold uppercase tracking-[0.2em] leading-none` | Section eyebrow badges ("OUR WORKS", "OUR ACTIVITIES") |
| `.pera` | `text-base leading-[1.4] text-pretty` | Primary paragraphs, intro copy, blockquotes |
| `.smallpera` | `text-sm leading-[1.6] text-pretty` | Card descriptions, labels, captions, metadata |
| `.statstext` | `font-condensed font-bold text-[clamp(2.25rem,4.5vw,3.25rem)] leading-none` | Large metrics and statistics numbers |

### Reusable Color Classes

| Category | Background Class | Text Class | Border Class |
| :--- | :--- | :--- | :--- |
| **Marine Main** (`#005B61`) | `.bg-marine-main` / `.bg-marine` | `.text-marine-main` / `.text-marine` | `.border-marine-main` |
| **Marine Dark** (`#084e55`) | `.bg-marine-dark` | `.text-marine-dark` | `.border-marine-dark` |
| **Marine Heading** (`#0D4751`) | `.bg-marine-heading` | `.text-marine-heading` | `.border-marine-heading` |
| **Marine Light** (`#00607A`) | `.bg-marine-light` | `.text-marine-light` | `.border-marine-light` |
| **Marine Accent** (`#085c64`) | `.bg-marine-accent` | `.text-marine-accent` | — |
| **Surface Gray** (`#f7f7f7`) | `.bg-surface-gray` | — | — |
| **Text Dark** (`#1f2937`) | — | `.text-body-dark` | — |
| **Text Muted** (`#4b5563`) | — | `.text-body-muted` | — |
| **Text Light** (`#9ca3af`) | — | `.text-body-light` | — |

## Content & Configuration

| File | Purpose |
|------|---------|
| `app/globals.css` | CSS variables, typography classes, color utilities |
| `lib/constants.ts` | Site name, nav links, socials, section data, blog posts |
| `lib/utils.ts` | `cn()` class merge helper, date formatting |
| `types/index.ts` | Shared TypeScript interfaces |
| `tailwind.config.ts` | Brand colors, font extensions |

## Development

```bash
npm run dev     # Start dev server at http://localhost:3000
npm run build   # Static export to /out
npm run lint    # ESLint
```
