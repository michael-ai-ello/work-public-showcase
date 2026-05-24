# SwimSwam — Production Stack

> **Repository:** `swimswam-prod` · **Visibility:** private · **Category:** Production & Client Applications

Production deployment repository for high-school swim team management: JavaScript frontend, C# backend, and Postgres (Supabase) migrations.

---

## Inspiration

As an assistant swim coach with 10+ years of competitive swimming, I applied web development skills to team management—schedules, meets, rosters, and related workflows—and hosted a live test run for the team I coached.

## Current State / Phase

Served its purpose in production for one season; no longer hosted. Informed real user feedback and in-production iteration experience.

## Future Directions

Refine and redeploy for a future coaching season or fork patterns into a next-version dev workspace.

## Stack Summary

| Area | Details |
|------|---------|
| **Primary languages** | JavaScript, C#, HTML, CSS, PLpgSQL |
| **Frameworks & libraries** | Node frontend toolchain, ASP.NET Core API, Supabase/Postgres |
| **Architecture** | Frontend/backend split · Production-only clone · Environment template pattern |
| **Deployment hints** | Documented in PRODUCTION_DEPLOYMENT.md · Environment template (no secrets committed) · Backend + frontend deploy pipeline |

## Features

- Production build artifacts
- Deployment guide
- Separated from dev experimentation

## Notable Services & Folders

- frontend/
- backend/
- context/

## Sanitized Directory Overview

High-level layout only — no source files, configs, or secrets are published here.

```
backend/ — API services/
frontend/ — client application/
context/ — operational notes/
```

## Screenshots / Media

<!-- Replace placeholders with sanitized screenshots when ready -->

| View | Placeholder |
|------|-------------|
| Primary UI | `assets/projects/swimswam-prod/screenshot-primary.png` |
| Architecture / diagram | `assets/projects/swimswam-prod/screenshot-architecture.png` |
| Secondary flow | `assets/projects/swimswam-prod/screenshot-secondary.png` |

---

[← Back to portfolio](../README.md#project-catalog) · [All projects](./index.md)
