# Telephony Analytics Dashboard

> **Repository:** `telephony-work` · **Visibility:** private · **Category:** Platform, CMS & Content

Telephony-agnostic call analytics POC: normalized SQL data, ASP.NET Core API, Blazor Server dashboard with Mapbox regional views.

---

## Inspiration

Demonstrate provider-agnostic ingestion adapters and unified analytics filters across charts and maps.

## Stack Summary

| Area | Details |
|------|---------|
| **Primary languages** | C#, HTML, TSQL, CSS, JavaScript |
| **Frameworks & libraries** | Blazor Server, ASP.NET Core, EF Core, Mapbox GL |
| **Architecture** | Domain + Infrastructure adapters · Mock and file-based ingestion · GeoJSON map endpoints |
| **Deployment hints** | .NET 10 + SQL Server LocalDB · Permissive CORS for local dev |

## Features

- Call analytics dashboards
- Regional Mapbox layers
- Manual call logging
- Agent rankings

## Notable Services & Folders

- src/Telephony.Api/
- src/Telephony.Web/
- database/
- CursorContext/

## Sanitized Directory Overview

High-level layout only — no source files, configs, or secrets are published here.

```
src/Telephony.* — API, Web, Domain, Infrastructure/
database/ — idempotent schema/
CursorContext/ — design docs/
```

## Screenshots / Media

<!-- Replace placeholders with sanitized screenshots when ready -->

| View | Placeholder |
|------|-------------|
| Primary UI | `assets/projects/telephony-work/screenshot-primary.png` |
| Architecture / diagram | `assets/projects/telephony-work/screenshot-architecture.png` |
| Secondary flow | `assets/projects/telephony-work/screenshot-secondary.png` |

---

[← Back to portfolio](../README.md#project-catalog) · [All projects](./index.md)
