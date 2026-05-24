# DOT Work — Multi-State GIS Platform POC

> **Repository:** `dot-work` · **Visibility:** private · **Category:** GIS & Geospatial Systems

Department of Transportation proof-of-concept: USA Mapbox landing page, per-state database routing, and New Hampshire as the first fully connected state module.

---

## Inspiration

Demonstrate how a national DOT/GIS platform could scale state-by-state with isolated databases, token-gated maps, and a consistent UX shell.

## Stack Summary

| Area | Details |
|------|---------|
| **Primary languages** | TypeScript, C#, TSQL, PowerShell |
| **Frameworks & libraries** | Next.js, Mapbox GL JS, deck.gl, Zustand, TanStack React Query, .NET Web API, Dapper |
| **Architecture** | Clean Architecture · Landing catalog + per-state SQL databases · Stored procedures · Phase-gated delivery |
| **Deployment hints** | Local dev via PowerShell scripts · SQL Server per environment · Mapbox tokens managed in SQL (not committed) |

## Features

- USA map with state selection
- SQL-backed Mapbox key panels
- NH authenticated app shell
- Cursor rules and phased docs

## Notable Services & Folders

- src/
- docs/
- scripts/

## Sanitized Directory Overview

High-level layout only — no source files, configs, or secrets are published here.

```
docs/ — context and master plan/
src/ — Next.js client and .NET API/
scripts/ — build, run, test, dbinit/
```

## Screenshots / Media

<!-- Replace placeholders with sanitized screenshots when ready -->

| View | Placeholder |
|------|-------------|
| Primary UI | `assets/projects/dot-work/screenshot-primary.png` |
| Architecture / diagram | `assets/projects/dot-work/screenshot-architecture.png` |
| Secondary flow | `assets/projects/dot-work/screenshot-secondary.png` |

---

[← Back to portfolio](../README.md#project-catalog) · [All projects](./index.md)
