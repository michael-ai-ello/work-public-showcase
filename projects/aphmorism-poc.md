# Aphmorism — AI-Assisted Library POC

> **Repository:** `aphmorism-poc` · **Visibility:** private · **Category:** Edge AI & Embedded

Local-library aphmorism POC: LLM-assisted generation grounded in leader-verified quotes, Blazor UI, and structured patron ratings.

---

## Inspiration

Sparked by a library IT/database admin job application and an interest in philosophy—envisioned a supplemental tool for book clubs to rate AI-generated aphmorisms that synthesize or reconcile quotes from different authors, with humans judging quality rather than replacing live debate.

## Current State / Phase

Core scaffolding and data flows work; earlier phase—OpenAI key integration and live generation testing still outstanding.

## Future Directions

Wire LLM provider configuration, run patron rating sessions end-to-end, and polish library-leader approval workflows.

## Stack Summary

| Area | Details |
|------|---------|
| **Primary languages** | C#, HTML, TSQL, CSS, PowerShell |
| **Frameworks & libraries** | ASP.NET Core, Blazor, Dapper, .NET 10 |
| **Architecture** | Book vs LibraryThread venues · Role-based workflows · Generation session limits |
| **Deployment hints** | SQL Server · LLM credentials via admin config (not published) · Phased ai-cursor-dev plan |

## Features

- Quote proposal approval
- LLM batch generation
- Structured ratings
- Library thread curation

## Notable Services & Folders

- src/
- sql/
- ai-cursor-dev/
- tests/

## Sanitized Directory Overview

High-level layout only — no source files, configs, or secrets are published here.

```
src/ — API and UI/
ai-cursor-dev/ — phased plan/
sql/ — database assets/
```

## Screenshots / Media

### Primary UI

![Primary UI](../assets/projects/aphmorism-poc/screenshot-primary.png)

### Architecture / diagram

![Architecture / diagram](../assets/projects/aphmorism-poc/screenshot-architecture.png)

### Secondary flow

![Secondary flow](../assets/projects/aphmorism-poc/screenshot-secondary.png)

### Additional view 04

![Additional view 04](../assets/projects/aphmorism-poc/screenshot-04.png)

### Additional view 05

![Additional view 05](../assets/projects/aphmorism-poc/screenshot-05.png)

### Additional view 06

![Additional view 06](../assets/projects/aphmorism-poc/screenshot-06.png)

### Additional view 07

![Additional view 07](../assets/projects/aphmorism-poc/screenshot-07.png)

### Additional view 08

![Additional view 08](../assets/projects/aphmorism-poc/screenshot-08.png)

### Additional view 09

![Additional view 09](../assets/projects/aphmorism-poc/screenshot-09.png)

---

[← Back to portfolio](../README.md#projects)
