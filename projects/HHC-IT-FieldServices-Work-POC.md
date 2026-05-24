# HHC IT Field Services — Desktop POC

> **Repository:** `HHC-IT-FieldServices-Work-POC` · **Visibility:** private · **Category:** Healthcare & Enterprise Desktop

Native WPF desktop for field operations: Excel import coordination grid, AD tools, and Set PC profile staging with integrity checks.

---

## Inspiration

Replace ad-hoc field scripts with a tier-2 AD-gated desktop shell and SQL-backed workflow state.

## Stack Summary

| Area | Details |
|------|---------|
| **Primary languages** | C#, PowerShell, TSQL |
| **Frameworks & libraries** | .NET 10 WPF, Dapper, Active Directory integration |
| **Architecture** | Core / Infrastructure / App split · Stored procedures only · SHA-256 profile manifests |
| **Deployment hints** | Local SQL bootstrap scripts · Staged execution under C:\HHCITS\Scripts · AD group gate |

## Features

- Refresh module (Excel → SQL grid)
- Set PC profile packages
- Remote operator tools
- Authenticode policy path

## Notable Services & Folders

- src/
- database/
- docs/
- scripts/

## Sanitized Directory Overview

High-level layout only — no source files, configs, or secrets are published here.

```
src/ — WPF modules/
database/ — SQL assets/
docs/ — unified plan/
```

## Screenshots / Media

<!-- Replace placeholders with sanitized screenshots when ready -->

| View | Placeholder |
|------|-------------|
| Primary UI | `assets/projects/HHC-IT-FieldServices-Work-POC/screenshot-primary.png` |
| Architecture / diagram | `assets/projects/HHC-IT-FieldServices-Work-POC/screenshot-architecture.png` |
| Secondary flow | `assets/projects/HHC-IT-FieldServices-Work-POC/screenshot-secondary.png` |

---

[← Back to portfolio](../README.md#project-catalog) · [All projects](./index.md)
