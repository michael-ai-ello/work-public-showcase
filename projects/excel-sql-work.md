# Excel SQL — Blazor Data Tooling POC

> **Repository:** `excel-sql-work` · **Visibility:** private · **Category:** Data Engineering & SQL Tooling

Blazor Server POC bridging Excel workbooks and SQL Server: connectivity checks, DDL generation, scripted apply, and read-only SQL templates.

---

## Inspiration

Explore safe, allowlisted filesystem access and versioned customization snapshots for spreadsheet-driven schema workflows.

## Stack Summary

| Area | Details |
|------|---------|
| **Primary languages** | C#, HTML, CSS, JavaScript, PowerShell |
| **Frameworks & libraries** | Blazor Server, Dapper, ExcelDataReader, .NET 10 |
| **Architecture** | ExcelSql.Core library · Allowlisted import roots · Model snapshot JSON contract |
| **Deployment hints** | Env vars / user-secrets for connection strings · Cross-platform scripts (ps1/sh) |

## Features

- Workbook probing
- Idempotent DDL generation
- Batch SQL apply with GO splitting
- Read-only SQL explorer templates

## Notable Services & Folders

- src/
- scenarios/
- scripts/
- tests/

## Sanitized Directory Overview

High-level layout only — no source files, configs, or secrets are published here.

```
src/ExcelSql.Web/ — Blazor host/
scenarios/ — worked examples/
scripts/ — build/run/test/
```

## Screenshots / Media

<!-- Replace placeholders with sanitized screenshots when ready -->

| View | Placeholder |
|------|-------------|
| Primary UI | `assets/projects/excel-sql-work/screenshot-primary.png` |
| Architecture / diagram | `assets/projects/excel-sql-work/screenshot-architecture.png` |
| Secondary flow | `assets/projects/excel-sql-work/screenshot-secondary.png` |

---

[← Back to portfolio](../README.md#project-catalog) · [All projects](./index.md)
