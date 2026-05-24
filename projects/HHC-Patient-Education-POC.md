# HHC Patient Education — Healthcare POC

> **Repository:** `HHC-Patient-Education-POC` · **Visibility:** private · **Category:** Healthcare & Enterprise Desktop

Patient education platform POC: ASP.NET Core MVC, interactive modules, quizzes, visual learning, and optional Epic/SMART integration path.

---

## Inspiration

Inform a future EHR-integrated patient education product with synthetic demo data and clinical terminology hooks.

## Stack Summary

| Area | Details |
|------|---------|
| **Primary languages** | C#, TSQL, HTML, CSS, PowerShell |
| **Frameworks & libraries** | ASP.NET Core MVC, Clean Architecture, Dapper, SMART on FHIR (optional) |
| **Architecture** | Stored procedures only · Epic SQL layer (opt-in branch) · Demo assignment modes |
| **Deployment hints** | User secrets / env connection strings · dbinit.ps1 and dbinit-epic.ps1 · Synthetic accounts only |

## Features

- Education modules and quizzes
- Doctor assignment workflows
- Optional FHIR codings demo
- Clinical-first admin wizard

## Notable Services & Folders

- src/
- db/
- docs/
- scripts/

## Sanitized Directory Overview

High-level layout only — no source files, configs, or secrets are published here.

```
src/ — MVC application layers/
db/ — schema and epic overlays/
docs/ — full specification/
```

## Screenshots / Media

<!-- Replace placeholders with sanitized screenshots when ready -->

| View | Placeholder |
|------|-------------|
| Primary UI | `assets/projects/HHC-Patient-Education-POC/screenshot-primary.png` |
| Architecture / diagram | `assets/projects/HHC-Patient-Education-POC/screenshot-architecture.png` |
| Secondary flow | `assets/projects/HHC-Patient-Education-POC/screenshot-secondary.png` |

---

[← Back to portfolio](../README.md#project-catalog) · [All projects](./index.md)
