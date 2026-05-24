# SwimSwam — Production Stack

> **Repository:** `swimswam-prod` · **Visibility:** private · **Category:** Production & Client Applications

Production deployment repository for a large swim-media platform: JavaScript frontend, C# backend, and Postgres (Supabase) migrations.

---

## Inspiration

Ship a maintainable production slice separate from active development, with deployment docs and environment templates only.

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
