# Water Work — Utility Geospatial Digital Twin

> **Repository:** `water-work` · **Visibility:** private · **Category:** GIS & Geospatial Systems

Water infrastructure digital-twin POC: .NET API, SQL Server stored procedures, Mapbox static UI, spatial queries and network tracing.

---

## Inspiration

Growing interest in environmental engineering and the ubiquity of water-utility operations—parallel to my electrical grid learning POC—to visualize water informatics in a GIS-style UI with related database nodes and objects.

## Current State / Phase

Solid architectural foundation; core flows work but the UI and polish are not finished.

## Future Directions

Refine operator-facing views, polish map layers, and deepen domain-specific tracing and reporting.

## Stack Summary

| Area | Details |
|------|---------|
| **Primary languages** | C#, TSQL, JavaScript, CSS |
| **Frameworks & libraries** | ASP.NET Core, MediatR, FluentValidation, Mapbox GL, Dapper/ADO.NET |
| **Architecture** | Domain → Application → Infrastructure → API · Stored procedures · Optional Census ingestion pipeline |
| **Deployment hints** | LocalDB or SQL Server · Static wwwroot map shell · Integration test database |

## Features

- Entity CRUD and relationships
- Radius/bbox spatial queries
- Upstream/downstream tracing
- Connecticut demo seed

## Notable Services & Folders

- WaterSystem.API/
- WaterSystem.Domain/
- DataIngestion/
- CursorContext/

## Sanitized Directory Overview

High-level layout only — no source files, configs, or secrets are published here.

```
WaterSystem.* — layered solution/
DataIngestion/ — shapefile helpers/
MarkdownAssist/ — doc tooling/
```

## Screenshots / Media

<!-- Replace placeholders with sanitized screenshots when ready -->

| View | Placeholder |
|------|-------------|
| Primary UI | `assets/projects/water-work/screenshot-primary.png` |
| Architecture / diagram | `assets/projects/water-work/screenshot-architecture.png` |
| Secondary flow | `assets/projects/water-work/screenshot-secondary.png` |

---

[← Back to portfolio](../README.md#projects)
