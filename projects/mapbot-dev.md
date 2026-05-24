# Mapbot — Geospatial Application

> **Repository:** `mapbot-dev` · **Visibility:** private · **Category:** GIS & Geospatial Systems

Map-centric application with Go backend service, JavaScript frontend, and database layer for geospatial workflows.

---

## Inspiration

A maturing awareness of government, law-enforcement, and military targeting systems—and a Palantir internship application—led me to scaffold a POC in Palantir-aligned languages (Go, TypeScript) to visualize operations-style geospatial workflows.

## Current State / Phase

Infrastructure and stack alignment in place; functionality is not fully extensive or polished.

## Future Directions

Expand operational workflows, data linking, and production-hardening only within appropriate enterprise contexts.

## Stack Summary

| Area | Details |
|------|---------|
| **Primary languages** | JavaScript, Go, CSS, HTML |
| **Frameworks & libraries** | Mapbox GL, Go HTTP service, Node frontend, Cassandra driver (dependency signal) |
| **Architecture** | Frontend/backend split · Go microservice · Database scripts |
| **Deployment hints** | concurrently dev script · GitHub workflow hints in .github/ |

## Features

- Mapbot UI
- Go service layer
- Database migrations/scripts

## Notable Services & Folders

- frontend/
- backend/
- database/
- debug/

## Sanitized Directory Overview

High-level layout only — no source files, configs, or secrets are published here.

```
backend/go-service/ — Go API/
frontend/ — client app/
database/ — schema assets/
```

## Screenshots / Media

<!-- Replace placeholders with sanitized screenshots when ready -->

| View | Placeholder |
|------|-------------|
| Primary UI | `assets/projects/mapbot-dev/screenshot-primary.png` |
| Architecture / diagram | `assets/projects/mapbot-dev/screenshot-architecture.png` |
| Secondary flow | `assets/projects/mapbot-dev/screenshot-secondary.png` |

---

[← Back to portfolio](../README.md#project-catalog) · [All projects](./index.md)
