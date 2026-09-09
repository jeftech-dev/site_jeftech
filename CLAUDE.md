# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing website for **Jëftech**, a Senegalese software agency (Dakar). Single-page React site plus a small blog, in French. The full product brief lives in `jeftech-site-brief.md` — read it before making content or design changes. The project root is `site_jeftech/`.

Deployed on **Vercel** (free tier). No backend and no database by design — form submissions go to email via a third-party service.

## Commands

```bash
npm run dev        # Vite dev server
npm run build      # regenerates sitemap, then vite build
npm run preview    # serve the production build locally
npm run generate:sitemap   # regenerate public/sitemap.xml only
```

There is no test suite, linter, or formatter configured.

## Architecture

- **Stack:** React 18 + Vite 6, React Router v7 (`BrowserRouter`), plain CSS, `lucide-react` icons.
- **Routing:** `src/App.jsx` defines all routes. Only three real routes exist: `/` (homepage), `/blog`, `/blog/:slug`, plus a `*` NotFound. The homepage is a single scroll composed of `src/sections/*` in fixed order. `vercel.json` rewrites all paths to `/` so the SPA client router can handle deep links.
- **Sections vs pages:** `src/sections/` = homepage scroll blocks (anchored by `id`, e.g. `#services`, `#booking`). `src/pages/` = router pages (Blog, BlogPost, NotFound).
- **Anchor navigation:** Cross-page anchor links (e.g. a blog CTA linking to `#booking`) go through `src/hooks/useAnchorNavigation.jsx`. It navigates to `/`, stashes the target id in `sessionStorage`, and `useScrollToAnchor` (mounted in App) scrolls after the homepage renders. Use `navigateToAnchor(href)` / `<AnchorLink>` rather than raw `<a href="#...">` for links that may fire from a non-home route.
- **Scroll reveal:** `src/hooks/useReveal.js` powers the `.reveal` animation class used throughout sections/pages.
- **Config:** `src/config.js` holds contact email, socials, nav links, and the **Web3Forms** access key. Path alias `@` → `src/` is set in `vite.config.js`.

## Forms

Contact (`src/sections/Contact.jsx`) and Booking (`src/sections/Booking.jsx`) POST a `FormData` to `https://api.web3forms.com/submit` with `WEB3FORMS_KEY` from `config.js`. There is no server. Both include a hidden `botcheck` honeypot input. Changing the recipient email means creating a new key at web3forms.com and updating `config.js`.

## Blog — important gotchas

Adding or editing a blog post requires keeping **three** places in sync, and there is a trap:

1. `src/data/blog-posts.js` — post **metadata** (slug, title, description, date, tags, image, `featured`). Drives the blog list and the article header.
2. `src/pages/BlogPost.jsx` — the actual **article body is hardcoded as an HTML string** inside the `getPostContent(slug)` map, rendered with `dangerouslySetInnerHTML`. This is the real source of article content.
3. `scripts/generate-sitemap.js` — has its **own duplicated `BLOG_POSTS` array** (slug + date). Add new slugs here too or they won't be in the sitemap. Run `npm run build` (or `npm run generate:sitemap`) after changes.

**Trap:** the Markdown files in `src/content/blog/*.md` are *not* imported or rendered anywhere — they are drafts only. Editing them has no effect on the site. The live content is the HTML in `getPostContent`.

## SEO

SEO is a primary concern for this site. Structured data (JSON-LD) is maintained by hand in `index.html` (Organization/LocalBusiness/Services) and inline in components (FAQ in `Contact.jsx`, `BlogPosting` microdata in `BlogPost.jsx`). Canonical domain is `https://jeftech.dev`. When adding routes or pages, update `scripts/generate-sitemap.js` and keep the relevant structured data consistent.
