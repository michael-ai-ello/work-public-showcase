# SSMS Work — SQL Server Feature Explorer

> **Repository:** `ssms-work` · **Visibility:** private · **Category:** Data Engineering & SQL Tooling

SQL Server feature explorer POC: minimal APIs + Dapper + Blazor Interactive Server shell covering performance, security, and replication narratives.

---

## Inspiration

Learn and demonstrate SQL Server capabilities through a structured explorer UI backed by real connectivity.

## Stack Summary

| Area | Details |
|------|---------|
| **Primary languages** | C#, HTML, TSQL, PowerShell |
| **Frameworks & libraries** | ASP.NET Core minimal APIs, Blazor Interactive Server, Dapper |
| **Architecture** | Api + integration tests · Plan-based route modules · Env-driven connection string override |
| **Deployment hints** | LOCAL-SQL-DB-CONNECTION-STRING · db-refresh.ps1 for dev DB · Separate test database |

## Features

- /performance explorer
- /security explorer
- /replication MSDTC narrative
- Database integration tests

## Notable Services & Folders

- src/
- docs/plans/
- docs/reference/
- db/

## Sanitized Directory Overview

High-level layout only — no source files, configs, or secrets are published here.

```
src/MssmWork.Api/ — host/
docs/plans/ — phased plans/
db/ — refresh scripts/
```

## Screenshots / Media

<!-- Replace placeholders with sanitized screenshots when ready -->

| View | Placeholder |
|------|-------------|
| Primary UI | `assets/projects/ssms-work/screenshot-primary.png` |
| Architecture / diagram | `assets/projects/ssms-work/screenshot-architecture.png` |
| Secondary flow | `assets/projects/ssms-work/screenshot-secondary.png` |

---

[← Back to portfolio](../README.md#project-catalog) · [All projects](./index.md)
