# Map Asset — Floor Plan Asset Tracking

> **Repository:** `map-asset-work` · **Visibility:** private · **Category:** GIS & Geospatial Systems

POC for tracking assets on uploaded floor-plan maps with hierarchical Region → State → Location → Area → MapImage → Assets.

---

## Inspiration

Model facility asset management on custom map images with typed asset parameters.

## Stack Summary

| Area | Details |
|------|---------|
| **Primary languages** | HTML, C#, TSQL, CSS, JavaScript |
| **Frameworks & libraries** | ASP.NET Core, Dapper, SQL Server stored procedures |
| **Architecture** | Hierarchical location model · Immutable asset type columns · Workstation-only POC |
| **Deployment hints** | LOCAL-SQL-DB-CONNECTION-STRING env var · sqlcmd init scripts · No auth (demo only) |

## Features

- Floor plan upload
- Asset typing with parameters
- Region/state/location hierarchy

## Notable Services & Folders

- src/
- database/
- scripts/
- tests/

## Sanitized Directory Overview

High-level layout only — no source files, configs, or secrets are published here.

```
src/ — web application/
database/ — init SQL/
scripts/ — Start-MapAsset.ps1/
```

## Screenshots / Media

<!-- Replace placeholders with sanitized screenshots when ready -->

| View | Placeholder |
|------|-------------|
| Primary UI | `assets/projects/map-asset-work/screenshot-primary.png` |
| Architecture / diagram | `assets/projects/map-asset-work/screenshot-architecture.png` |
| Secondary flow | `assets/projects/map-asset-work/screenshot-secondary.png` |

---

[← Back to portfolio](../README.md#project-catalog) · [All projects](./index.md)
