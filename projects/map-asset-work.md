# Map Asset — Floor Plan Asset Tracking

> **Repository:** `map-asset-work` · **Visibility:** private · **Category:** GIS & Geospatial Systems

POC for tracking assets on uploaded floor-plan maps with hierarchical Region → State → Location → Area → MapImage → Assets.

---

## Inspiration

Inspired by a floor-plan asset tool used during a healthcare IT contract—draggable icons on building images correlating device locations. I rebuilt a generic version for enterprises with varied asset types, open labels for device fields, uploadable floor plans, and toggles to show all assets or a selected subset.

## Current State / Phase

Works as intended for flexible facility and asset modeling in a workstation POC.

## Future Directions

Auth, enterprise RBAC, and connector patterns if adopted inside a specific organization.

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

[← Back to portfolio](../README.md#projects)
