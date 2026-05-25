# Excel SQL — Blazor Data Tooling POC

> **Repository:** `excel-sql-work` · **Visibility:** private · **Category:** Data Engineering & SQL Tooling

Blazor Server POC bridging Excel workbooks and SQL Server: connectivity checks, DDL generation, scripted apply, and read-only SQL templates.

---

## Inspiration

After a year or two of work experience, I noticed how often Excel and SQL coexist in business processes and wanted a simple POC to upload a sheet, map rows and columns, and visualize conversion toward SQL-friendly structures for web app development.

## Current State / Phase

Works for straightforward workbooks with a clear Excel-to-SQL visualization path; not fully polished for complex sheets.

## Future Directions

Broader Excel edge cases, richer mapping UI, and safer production import guardrails.

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

[← Back to portfolio](../README.md#projects)
