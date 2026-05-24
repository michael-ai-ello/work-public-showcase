# Grid Work — Utility IoT Demo

> **Repository:** `grid-work` · **Visibility:** private · **Category:** GIS & Geospatial Systems

Grid IoT proof-of-concept: Blazor hybrid app, SQL Server telemetry, Mapbox operations map, alarms, and simulated device readings.

---

## Inspiration

Sketch how a utility operations dashboard could combine GIS, telemetry, and role-based access in a learning-oriented codebase.

## Stack Summary

| Area | Details |
|------|---------|
| **Primary languages** | C#, HTML, TSQL, JavaScript |
| **Frameworks & libraries** | Blazor Server + WASM, ASP.NET Core Identity, Mapbox GL, EF Core (Identity only) |
| **Architecture** | Clean Architecture layers · Stored procedures for grid data · Background telemetry simulator |
| **Deployment hints** | Local SQL Server (db-grid-work) · Configurable Mapbox token · Health endpoint with SQL check |

## Features

- Device telemetry dashboard
- Map layers and alarms
- Viewer/Operator roles
- Client portal demo

## Notable Services & Folders

- grid-work.Server/
- grid-work.Client/
- GridIoT.*
- prp/

## Sanitized Directory Overview

High-level layout only — no source files, configs, or secrets are published here.

```
GridIoT.* — domain/application/infrastructure/
grid-work.Server/ — host + Identity/
prp/ — future product notes/
```

## Screenshots / Media

<!-- Replace placeholders with sanitized screenshots when ready -->

| View | Placeholder |
|------|-------------|
| Primary UI | `assets/projects/grid-work/screenshot-primary.png` |
| Architecture / diagram | `assets/projects/grid-work/screenshot-architecture.png` |
| Secondary flow | `assets/projects/grid-work/screenshot-secondary.png` |

---

[← Back to portfolio](../README.md#project-catalog) · [All projects](./index.md)
