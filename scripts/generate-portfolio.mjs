#!/usr/bin/env node
/**
 * Regenerate portfolio markdown from portfolio.config.json.
 * Does not clone private repos or copy source — metadata only.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { sanitizeDirectoryOverview } from './lib/sanitize.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const config = JSON.parse(readFileSync(join(root, 'portfolio.config.json'), 'utf8'));

const projectsDir = join(root, 'projects');
const assetsDir = join(root, 'assets', 'projects');

mkdirSync(projectsDir, { recursive: true });
mkdirSync(assetsDir, { recursive: true });

function list(items) {
  return items.map((i) => `- ${i}`).join('\n');
}

function categoryLabel(id) {
  return config.categories.find((c) => c.id === id)?.label ?? id;
}

function renderProjectPage(p) {
  const dirs = sanitizeDirectoryOverview(p.directoryOverview);
  return `# ${p.title}

> **Repository:** \`${p.repo}\` · **Visibility:** ${p.visibility} · **Category:** ${categoryLabel(p.category)}

${p.description}

---

## Inspiration

${p.inspiration}

## Stack Summary

| Area | Details |
|------|---------|
| **Primary languages** | ${p.languages.join(', ')} |
| **Frameworks & libraries** | ${p.frameworks.join(', ')} |
| **Architecture** | ${p.architecture.join(' · ')} |
| **Deployment hints** | ${p.deployment.join(' · ')} |

## Features

${list(p.features)}

## Notable Services & Folders

${list(p.notablePaths)}

## Sanitized Directory Overview

High-level layout only — no source files, configs, or secrets are published here.

\`\`\`
${dirs.map((d) => d.endsWith('/') ? d : `${d}/`).join('\n')}
\`\`\`

## Screenshots / Media

<!-- Replace placeholders with sanitized screenshots when ready -->

| View | Placeholder |
|------|-------------|
| Primary UI | \`assets/projects/${p.slug}/screenshot-primary.png\` |
| Architecture / diagram | \`assets/projects/${p.slug}/screenshot-architecture.png\` |
| Secondary flow | \`assets/projects/${p.slug}/screenshot-secondary.png\` |

---

[← Back to portfolio](../README.md#project-catalog) · [All projects](./index.md)
`;
}

function renderProjectsIndex() {
  const byCategory = Object.groupBy(config.projects, (p) => p.category);
  let body = `# Project Catalog

Sanitized case studies for private repositories. Source code, credentials, and internal configs are **not** published in this showcase.

`;

  for (const cat of config.categories) {
    const items = byCategory[cat.id];
    if (!items?.length) continue;
    body += `## ${cat.label}\n\n`;
    for (const p of items) {
      body += `- **[${p.title}](./${p.slug}.md)** — ${p.description.split('.')[0]}.\n`;
    }
    body += '\n';
  }
  return body;
}

function renderRootReadme() {
  const { profile } = config;
  const featured = config.featured
    .map((slug) => config.projects.find((p) => p.slug === slug))
    .filter(Boolean);

  const allLangs = [...new Set(config.projects.flatMap((p) => p.languages))].sort();
  const allFrameworks = [...new Set(config.projects.flatMap((p) => p.frameworks))].slice(0, 20);

  let featuredSection = featured
    .map(
      (p) => `### [${p.title}](./projects/${p.slug}.md)

${p.description}

**Stack:** ${p.languages.slice(0, 3).join(', ')} · ${p.frameworks.slice(0, 3).join(', ')}

`
    )
    .join('\n');

  let catalogSection = '';
  for (const cat of config.categories) {
    const items = config.projects.filter((p) => p.category === cat.id);
    if (!items.length) continue;
    catalogSection += `<details>\n<summary><strong>${cat.label}</strong> (${items.length})</summary>\n\n`;
    for (const p of items) {
      catalogSection += `- [${p.title}](./projects/${p.slug}.md)\n`;
    }
    catalogSection += '\n</details>\n\n';
  }

  return `# Work Public Showcase

${profile.headline}

---

## About

${profile.bio}

This repository is a **public technical portfolio and project catalog**. It summarizes private work using architecture notes, stack summaries, and sanitized directory overviews — without publishing proprietary source, secrets, or internal configuration.

**GitHub:** [${profile.github.replace('https://github.com/', '@')}](${profile.github})

---

## Technologies Overview

| Domain | Tools & patterns |
|--------|------------------|
| **Backend** | .NET 10, ASP.NET Core, WPF, FastAPI, Go services |
| **Frontend** | React, Next.js, Blazor (Server + WASM), Vite, TypeScript |
| **Data** | SQL Server (Dapper, stored procedures), Postgres/Supabase, EF Core (Identity/CMS) |
| **GIS** | Mapbox GL JS, deck.gl, geospatial APIs, floor-plan asset models |
| **Edge / AI** | Jetson Orin Nano, Ollama, multimodal LLMs, GStreamer camera pipelines |
| **DevOps** | Nginx, systemd, PowerShell/bash scripts, GitHub Actions, env-template deploys |

**Languages across projects:** ${allLangs.join(', ')}

**Representative libraries:** ${allFrameworks.join(', ')}

---

## Featured Projects

${featuredSection}

---

## Architecture Interests

- **Clean Architecture & DDD boundaries** — Domain, Application, Infrastructure, and API layers with explicit contracts
- **SQL-first persistence** — Stored procedures, idempotent init scripts, and integration tests against real databases
- **Geospatial product shells** — Mapbox-driven UIs with token management patterns and hierarchical location models
- **Opt-in integration layers** — Healthcare Epic/SMART hooks and telephony adapters without breaking baseline POC flows
- **Edge inference** — Local LLM serving on Jetson with camera capture and streaming chat proxies
- **Production repo splits** — Separate dev and production clones with deployment guides and secret-free templates

---

## Infrastructure & DevOps Experience

- Linux VM deployment (Nginx reverse proxy, systemd, Certbot SSL)
- Supabase/Postgres migration workflows
- Cross-platform build/run/test scripts (PowerShell and shell)
- SQL Server bootstrap, refresh, and environment-specific connection patterns
- GitHub CLI–driven metadata extraction for sanitized portfolio generation
- Cursor rules, phased docs, and AI-assisted development workflows

---

## Project Catalog

Full case-study index: **[projects/index.md](./projects/index.md)**

${catalogSection}

---

## Screenshots & Media

Project-specific media placeholders live under \`assets/projects/<slug>/\`. Add sanitized screenshots there and reference them from each [project page](./projects/index.md).

---

## Contact

${profile.contactNote}

- **GitHub:** [michael-ai-ello](${profile.github})
- **Portfolio issues:** Use this repo's Issues tab for portfolio inquiries

---

## Regenerating This Catalog

Metadata-driven pages can be refreshed from \`portfolio.config.json\`:

\`\`\`bash
node scripts/generate-portfolio.mjs
\`\`\`

Private repository source is never copied into this repo by the generator.

---

*Last generated from \`portfolio.config.json\`.*
`;
}

writeFileSync(join(root, 'README.md'), renderRootReadme());
writeFileSync(join(projectsDir, 'index.md'), renderProjectsIndex());

for (const p of config.projects) {
  writeFileSync(join(projectsDir, `${p.slug}.md`), renderProjectPage(p));
  const assetPath = join(assetsDir, p.slug);
  mkdirSync(assetPath, { recursive: true });
  if (!existsSync(join(assetPath, '.gitkeep'))) {
    writeFileSync(join(assetPath, '.gitkeep'), '');
  }
  writeFileSync(
    join(assetPath, 'README.md'),
    `# Media placeholders — ${p.title}\n\nAdd sanitized screenshots here:\n\n- \`screenshot-primary.png\`\n- \`screenshot-architecture.png\`\n- \`screenshot-secondary.png\`\n`
  );
}

console.log(`Generated README.md, projects/index.md, and ${config.projects.length} project pages.`);
