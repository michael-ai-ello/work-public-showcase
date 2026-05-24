# Jetson + e-CAM86 Camera Bring-Up

> **Repository:** `jetson-orin-nano-econ-cam` · **Visibility:** private · **Category:** Edge AI & Embedded

Hardware bring-up documentation for Jetson Orin Nano with e-con e-CAM86 camera on JetPack 6.1 / L4T R36.4.0.

---

## Inspiration

Isolate SD flashing, driver install, and GStreamer verification from application code.

## Stack Summary

| Area | Details |
|------|---------|
| **Primary languages** | Documentation-first |
| **Frameworks & libraries** | JetPack, GStreamer Argus pipeline, e-con L4T packages |
| **Architecture** | dev-resources/ for large binaries (gitignored) · Prerequisite repo for LLM device project |
| **Deployment hints** | SD flash workflow · SCP tarball to device · nvpmodel / jetson_clocks tuning |

## Features

- Flash and SSH setup
- Camera smoke test commands
- Version matrix documentation

## Notable Services & Folders

- dev-resources/
- README.md

## Sanitized Directory Overview

High-level layout only — no source files, configs, or secrets are published here.

```
dev-resources/ — local JetPack and driver archives (not in git)/
```

## Screenshots / Media

<!-- Replace placeholders with sanitized screenshots when ready -->

| View | Placeholder |
|------|-------------|
| Primary UI | `assets/projects/jetson-orin-nano-econ-cam/screenshot-primary.png` |
| Architecture / diagram | `assets/projects/jetson-orin-nano-econ-cam/screenshot-architecture.png` |
| Secondary flow | `assets/projects/jetson-orin-nano-econ-cam/screenshot-secondary.png` |

---

[← Back to portfolio](../README.md#project-catalog) · [All projects](./index.md)
