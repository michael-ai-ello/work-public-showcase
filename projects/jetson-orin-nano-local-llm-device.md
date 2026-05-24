# Jetson Local LLM Device

> **Repository:** `jetson-orin-nano-local-llm-device` · **Visibility:** private · **Category:** Edge AI & Embedded

Offline-first Jetson Orin Nano chat UI with local Ollama, FastAPI proxy, CSI camera snapshots, and multimodal vision models.

---

## Inspiration

Run vision-capable LLMs entirely on edge hardware with no cloud API dependency.

## Stack Summary

| Area | Details |
|------|---------|
| **Primary languages** | Python, TypeScript, Shell, CSS |
| **Frameworks & libraries** | FastAPI, React, Vite, Ollama OpenAI-compatible API, GStreamer/nvarguscamerasrc |
| **Architecture** | Browser → FastAPI → Ollama · SSE streaming · On-device camera capture |
| **Deployment hints** | Jetson Orin Nano 8GB · NVMe model storage · systemd optional · Companion camera repo prerequisite |

## Features

- Streaming chat
- Camera snapshot to multimodal prompt
- Image upload
- Local-only inference

## Notable Services & Folders

- backend/
- frontend/
- docs/

## Sanitized Directory Overview

High-level layout only — no source files, configs, or secrets are published here.

```
backend/ — FastAPI service/
frontend/ — React chat UI/
docs/ — hardware references/
```

## Screenshots / Media

<!-- Replace placeholders with sanitized screenshots when ready -->

| View | Placeholder |
|------|-------------|
| Primary UI | `assets/projects/jetson-orin-nano-local-llm-device/screenshot-primary.png` |
| Architecture / diagram | `assets/projects/jetson-orin-nano-local-llm-device/screenshot-architecture.png` |
| Secondary flow | `assets/projects/jetson-orin-nano-local-llm-device/screenshot-secondary.png` |

---

[← Back to portfolio](../README.md#project-catalog) · [All projects](./index.md)
