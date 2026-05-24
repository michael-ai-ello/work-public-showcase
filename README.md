# Work Public Showcase

Full-stack engineer — operational web apps, GIS, SQL Server, and edge AI

---

## About

I develop web applications that support real operations—healthcare IT field workflows, utility and telephony informatics, facility asset mapping, CMS-style content tools, and edge AI on Jetson hardware. Most repositories here are deliberate POCs and learning sandboxes: they demonstrate how I structure full-stack work, integrate alongside real job responsibilities when possible, and ramp quickly on domain-specific tools. I treat enterprise and client systems with respect for standards, security, and integration paths I would learn on the job rather than guess in a public repo.

This repository is a **public technical portfolio and project catalog**. It summarizes private work using architecture notes, stack summaries, and sanitized directory overviews — without publishing proprietary source, secrets, or internal configuration.

**GitHub:** [@michael-ai-ello](https://github.com/michael-ai-ello)

---

## How These Projects Are Structured

- POC-first repos that prove aptitude without pretending to replace an organization's production standards
- Operational context over toy demos—healthcare deployment prep, call analytics, floor-plan asset tracking, utility GIS shells
- Fast, structured learning—reference codebases (SSMS explorer, CMS basics) I can extend when a real scenario appears
- Honest phase labels—what runs today, what was side-tested vs officially integrated, and what would come next with proper access

## Technologies Overview

| Domain | Tools & patterns |
|--------|------------------|
| **Backend** | .NET 10, ASP.NET Core, WPF, FastAPI, Go services |
| **Frontend** | React, Next.js, Blazor (Server + WASM), Vite, TypeScript |
| **Data** | SQL Server (Dapper, stored procedures), Postgres/Supabase, EF Core (Identity/CMS) |
| **GIS** | Mapbox GL JS, deck.gl, geospatial APIs, floor-plan asset models |
| **Edge / AI** | Jetson Orin Nano, Ollama, multimodal LLMs, GStreamer camera pipelines |
| **DevOps** | Nginx, systemd, PowerShell/bash scripts, GitHub Actions, env-template deploys |

**Languages across projects:** C#, CSS, Documentation-first, Go, HTML, JavaScript, PLpgSQL, PowerShell, Python, Shell, TSQL, TypeScript

**Representative libraries:** Next.js, Mapbox GL JS, deck.gl, Zustand, TanStack React Query, .NET Web API, Dapper, Node frontend toolchain, ASP.NET Core API, Supabase/Postgres, React, Vite, Mapbox GL, ASP.NET Core, Supabase JS client, Node frontend, Postgres/Supabase patterns, MediatR, FluentValidation, Dapper/ADO.NET

---

## Featured Projects

### [DOT Work — Multi-State GIS Platform POC](./projects/dot-work.md)

Department of Transportation proof-of-concept: USA Mapbox landing page, per-state database routing, and New Hampshire as the first fully connected state module.

*Early POC with NH as the first connected state module; national shell and per-state routing pattern in place.*

**Stack:** TypeScript, C#, TSQL · Next.js, Mapbox GL JS, deck.gl


### [SwimSwam — Production Stack](./projects/swimswam-prod.md)

Production deployment repository for high-school swim team management: JavaScript frontend, C# backend, and Postgres (Supabase) migrations.

*Served its purpose in production for one season; no longer hosted.*

**Stack:** JavaScript, C#, HTML · Node frontend toolchain, ASP.NET Core API, Supabase/Postgres


### [Aiello Roofing — Production](./projects/aiello-roofing-prod.md)

Production roofing business showcase: ASP.NET Core API, React + Vite + Mapbox client, and Supabase Postgres migrations. Live at aielloroofing.online.

*Production-hosted client application with map UI and content management for project showcases.*

**Stack:** TypeScript, C#, CSS · React, Vite, Mapbox GL · [Live](https://aielloroofing.online)


### [HHC Patient Education — Healthcare POC](./projects/HHC-Patient-Education-POC.md)

Patient education platform POC: ASP.NET Core MVC, interactive modules, quizzes, visual learning, and optional Epic/SMART integration path.

*Side-development POC with synthetic data; not tied to contract workflows or live EHR feeds.*

**Stack:** C#, TSQL, HTML · ASP.NET Core MVC, Clean Architecture, Dapper


### [Jetson Local LLM Device](./projects/jetson-orin-nano-local-llm-device.md)

Offline-first Jetson Orin Nano chat UI with local Ollama, FastAPI proxy, CSI camera snapshots, and multimodal vision models.

*Local LLM inference and photo upload/analysis work on device; companion camera bring-up repo documents hardware setup.*

**Stack:** Python, TypeScript, Shell · FastAPI, React, Vite


### [Water Work — Utility Geospatial Digital Twin](./projects/water-work.md)

Water infrastructure digital-twin POC: .NET API, SQL Server stored procedures, Mapbox static UI, spatial queries and network tracing.

*Solid architectural foundation; core flows work but the UI and polish are not finished.*

**Stack:** C#, TSQL, JavaScript · ASP.NET Core, MediatR, FluentValidation



---

## Architecture Interests

- **Clean Architecture & DDD boundaries** — Domain, Application, Infrastructure, and API layers with explicit contracts
- **SQL-first persistence** — Stored procedures, idempotent init scripts, and integration tests against real databases
- **Geospatial product shells** — Mapbox-driven UIs with token management patterns and hierarchical location models
- **Opt-in integration layers** — Healthcare Epic/SMART hooks and telephony adapters without breaking baseline POC flows
- **Edge inference** — Local LLM serving on Jetson with camera capture and streaming chat proxies
- **Production repo splits** — Separate dev and production clones with deployment guides and secret-free templates

---

## Infrastructure & DevOps Experience

- Linux VM deployment (Nginx reverse proxy, systemd, Certbot SSL)
- Supabase/Postgres migration workflows
- Cross-platform build/run/test scripts (PowerShell and shell)
- SQL Server bootstrap, refresh, and environment-specific connection patterns
- GitHub CLI–driven metadata extraction for sanitized portfolio generation
- Cursor rules, phased docs, and AI-assisted development workflows

---

## Project Catalog

Full case-study index: **[projects/index.md](./projects/index.md)**

<details>
<summary><strong>Production & Client Applications</strong> (3)</summary>

- [SwimSwam — Production Stack](./projects/swimswam-prod.md)
- [Aiello Roofing — Production](./projects/aiello-roofing-prod.md)
- [SwimSwam — Development](./projects/swimswamzzz-dev.md)

</details>

<details>
<summary><strong>GIS & Geospatial Systems</strong> (5)</summary>

- [DOT Work — Multi-State GIS Platform POC](./projects/dot-work.md)
- [Water Work — Utility Geospatial Digital Twin](./projects/water-work.md)
- [Grid Work — Utility IoT Demo](./projects/grid-work.md)
- [Mapbot — Geospatial Application](./projects/mapbot-dev.md)
- [Map Asset — Floor Plan Asset Tracking](./projects/map-asset-work.md)

</details>

<details>
<summary><strong>Healthcare & Enterprise Desktop</strong> (2)</summary>

- [HHC Patient Education — Healthcare POC](./projects/HHC-Patient-Education-POC.md)
- [HHC IT Field Services — Desktop POC](./projects/HHC-IT-FieldServices-Work-POC.md)

</details>

<details>
<summary><strong>Edge AI & Embedded</strong> (3)</summary>

- [Aphmorism — AI-Assisted Library POC](./projects/aphmorism-poc.md)
- [Jetson Local LLM Device](./projects/jetson-orin-nano-local-llm-device.md)
- [Jetson + e-CAM86 Camera Bring-Up](./projects/jetson-orin-nano-econ-cam.md)

</details>

<details>
<summary><strong>Platform, CMS & Content</strong> (2)</summary>

- [Telephony Analytics Dashboard](./projects/telephony-work.md)
- [CMS Basics — Headless Content POC](./projects/cms-basics-poc.md)

</details>

<details>
<summary><strong>Data Engineering & SQL Tooling</strong> (2)</summary>

- [Excel SQL — Blazor Data Tooling POC](./projects/excel-sql-work.md)
- [SSMS Work — SQL Server Feature Explorer](./projects/ssms-work.md)

</details>



---

## Screenshots & Media

Project-specific media placeholders live under `assets/projects/<slug>/`. Add sanitized screenshots there and reference them from each [project page](./projects/index.md).

---

## Contact

Reach out via GitHub profile or issues on this repository.

- **GitHub:** [michael-ai-ello](https://github.com/michael-ai-ello)
- **Portfolio issues:** Use this repo's Issues tab for portfolio inquiries

---

## Regenerating This Catalog

Metadata-driven pages can be refreshed from `portfolio.config.json`:

```bash
node scripts/generate-portfolio.mjs
```

Private repository source is never copied into this repo by the generator.

---

*Last generated from `portfolio.config.json`.*
