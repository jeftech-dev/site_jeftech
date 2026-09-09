#!/usr/bin/env node
// Sitemap generator for Jëftech
// Run with: node scripts/generate-sitemap.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import blog posts data
const BLOG_POSTS = [
  { slug: 'cout-site-web-senegal', date: '2026-01-15' },
  { slug: 'choisir-agence-web-senegal', date: '2026-01-22' },
  { slug: 'cout-application-mobile-senegal', date: '2026-02-01' },
  { slug: 'digitaliser-pme-senegal', date: '2026-02-10' },
  { slug: 'logiciel-sur-mesure-entreprise', date: '2026-02-18' },
  { slug: 'application-web-vs-mobile', date: '2026-02-25' },
];

const BASE_URL = 'https://jeftech.dev';
const TODAY = new Date().toISOString().split('T')[0];

// Define all public URLs - ONLY routes that actually exist in React Router
const urls = [
  {
    url: BASE_URL + '/',
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: 1.0,
  },
  {
    url: BASE_URL + '/services',
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: 0.9,
  },
  {
    url: BASE_URL + '/concepts',
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    url: BASE_URL + '/contact',
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    url: BASE_URL + '/blog',
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: 0.7,
  },
  // Blog post URLs
  ...BLOG_POSTS.map((post) => ({
    url: BASE_URL + '/blog/' + post.slug,
    lastmod: post.date,
    changefreq: 'monthly',
    priority: 0.6,
  })),
];

function generateSitemap() {
  const urlEntries = urls.map(({ url, lastmod, changefreq, priority }) => `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>`;

  const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  fs.writeFileSync(outputPath, sitemap);
  console.log(`✅ Sitemap generated at ${outputPath}`);
  console.log(`📄 ${urls.length} URLs included`);
}

generateSitemap();