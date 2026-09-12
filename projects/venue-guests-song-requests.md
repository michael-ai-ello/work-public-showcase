# Venue Guest Playlist — Song Request Ops

> **Repository:** `venue-guests-song-requests` · **Visibility:** private · **Category:** Venue Ops & Guest Experience

Staff-moderated guest song-request tool: external form submissions land in a local admin UI; approved tracks were intended to queue or append into the venue’s licensed music system.

---

## Inspiration

From a lifeguard / venue service role, I thought about small guest-facing improvements beyond the usual park operations—especially how repetitive background music leaves little room for patron input. A moderated request flow felt like a practical way to let guests feel heard while staff keep licensing and content control.

## Current State / Phase

Runnable through the guest-form ingest and local admin moderation path (pending list, approve/reject, destination UX). While requesting API access for the venue music provider, usage rules and constraints around the intended integration blocked completing live connector work—so full end-to-end music-system integration was never finished. Adapters remain stubbed by default; next work would be a compliant live connector if a permitted path existed.

## Future Directions

Finish or redesign the music-provider connector under allowed API terms, then USB/self-contained Windows deploy and live E2E ops polish.

## Stack Summary

| Area | Details |
|------|---------|
| **Primary languages** | C#, JavaScript, HTML, CSS, PowerShell |
| **Frameworks & libraries** | ASP.NET Core, SQLite local store, vanilla admin UI, Tally form poll client, Soundtrack GraphQL client (stubbed by default) |
| **Architecture** | Form poll → pending store → staff review → queue / playlist destinations · Stub vs live adapters behind config |
| **Deployment hints** | .NET 10 · `scripts/dev-run.ps1` · Secrets and venue branding stay local / gitignored · USB install path planned |

## Features

- Guest song title + artist intake via external form
- Local admin pending list with approve / reject / not-found
- Track-confirm and queue / append-to-playlist destination UX
- Stubbed integrations so the app runs without live provider keys
- Health endpoint and seeded sample requests for local demos

## Notable Services & Folders

- src/VenueGuestPlaylist.App/
- docs/
- scripts/
- tests/

## Sanitized Directory Overview

High-level layout only — no source files, configs, or secrets are published here.

```
src/VenueGuestPlaylist.App/ — ASP.NET Core app (admin UI, store, integrations)/
docs/ — architecture, config contract, form and music-provider notes/
scripts/ — local run and tooling/
tests/ — automated coverage/
```

## Screenshots / Media

<!-- Replace placeholders with sanitized screenshots when ready -->

| View | Placeholder |
|------|-------------|
| Primary UI | `assets/projects/venue-guests-song-requests/screenshot-primary.png` |
| Architecture / diagram | `assets/projects/venue-guests-song-requests/screenshot-architecture.png` |
| Secondary flow | `assets/projects/venue-guests-song-requests/screenshot-secondary.png` |

---

[← Back to portfolio](../README.md#projects)
