# Aiello Roofing — Production

> **Repository:** `aiello-roofing-prod` · **Visibility:** private · **Category:** Production & Client Applications

**Live site:** [aielloroofing.online](https://aielloroofing.online)

Production roofing business showcase: ASP.NET Core API, React + Vite + Mapbox client, and Supabase Postgres migrations. Live at aielloroofing.online.

---

## Inspiration

Built for a family member's roofing company to supplement or replace their prior site—map-based project showcase plus editor login to create location-based jobs, a capability the old website lacked. First project I hosted on the public internet (VM, Nginx, SSL) rather than only on my machine.

## Current State / Phase

Production-hosted client application with map UI and content management for project showcases.

## Future Directions

Ongoing content and feature polish as the business needs evolve.

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
