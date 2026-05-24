# Aiello Roofing — Production

> **Repository:** `aiello-roofing-prod` · **Visibility:** private · **Category:** Production & Client Applications

Production-ready roofing business application: ASP.NET Core API, React + Vite + Mapbox client, and Supabase Postgres migrations.

---

## Inspiration

Minimal production repo cloned on a VM with Nginx, systemd, and git-pull deploy workflow.

## Stack Summary

| Area | Details |
|------|---------|
| **Primary languages** | TypeScript, C#, CSS, PLpgSQL |
| **Frameworks & libraries** | React, Vite, Mapbox GL, ASP.NET Core, Supabase JS client |
| **Architecture** | API + SPA · Idempotent SQL migrations · Server-side secrets via env |
| **Deployment hints** | Linux VM + Nginx reverse proxy · systemd service · Certbot SSL · dotnet publish + npm build |

## Features

- Map-based roofing workflows
- Supabase-backed data
- Full production deployment guide

## Notable Services & Folders

- src/
- client/
- supabase/migrations/

## Sanitized Directory Overview

High-level layout only — no source files, configs, or secrets are published here.

```
src/ — ASP.NET Core API layers/
client/ — React SPA/
supabase/ — schema migrations/
```

## Screenshots / Media

<!-- Replace placeholders with sanitized screenshots when ready -->

| View | Placeholder |
|------|-------------|
| Primary UI | `assets/projects/aiello-roofing-prod/screenshot-primary.png` |
| Architecture / diagram | `assets/projects/aiello-roofing-prod/screenshot-architecture.png` |
| Secondary flow | `assets/projects/aiello-roofing-prod/screenshot-secondary.png` |

---

[← Back to portfolio](../README.md#project-catalog) · [All projects](./index.md)
