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
  const liveLine = p.liveUrl ? `\n**Live site:** [${p.liveUrl.replace(/^https?:\/\//, '')}](${p.liveUrl})\n` : '';
  const currentState = p.currentState
    ? `\n## Current State / Phase\n\n${p.currentState}\n`
    : '';
  const futureDirections = p.futureDirections
    ? `\n## Future Directions\n\n${p.futureDirections}\n`
    : '';

  return `# ${p.title}

> **Repository:** \`${p.repo}\` · **Visibility:** ${p.visibility} · **Category:** ${categoryLabel(p.category)}
${liveLine}
${p.description}

---

## Inspiration

${p.inspiration}
${currentState}${futureDirections}
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

[← Back to portfolio](../README.md#projects) · [All projects](./index.md)
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

function projectsForReadme() {
  const order = config.readmeProjectOrder;
  if (order?.length) {
    const bySlug = Object.fromEntries(config.projects.map((p) => [p.slug, p]));
    return order.map((slug) => bySlug[slug]).filter(Boolean);
  }
  return config.projects;
}

function renderRootReadme() {
  const { profile } = config;
  const philosophySection = profile.philosophy?.length
    ? `## How These Projects Are Structured

${profile.philosophy.map((line) => `- ${line}`).join('\n')}

`
    : '';

  const projectLinks = projectsForReadme()
    .map((p) => `- [${p.title}](./projects/${p.slug}.md)`)
    .join('\n');

  return `# Work Public Showcase

${profile.headline}

---

## About

${profile.bio}

This repository is a **public technical portfolio**. It summarizes private work using architecture notes, stack summaries, and sanitized directory overviews — without publishing proprietary source, secrets, or internal configuration.

**GitHub:** [${profile.github.replace('https://github.com/', '@')}](${profile.github})

---

${philosophySection}## Projects

${projectLinks}

---

## Contact

${profile.contactNote}

- **GitHub:** [michael-ai-ello](${profile.github})
- **Portfolio issues:** Use this repo's Issues tab for portfolio inquiries
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
