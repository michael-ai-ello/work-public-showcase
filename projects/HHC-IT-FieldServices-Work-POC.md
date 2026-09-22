# HHC IT Field Services — Desktop POC

> **Repository:** `HHC-IT-FieldServices-Work-POC` · **Visibility:** private · **Category:** Healthcare & Enterprise Desktop

Native WPF desktop for field operations: Excel import coordination grid, AD tools, and Set PC profile staging with integrity checks.

---

## Inspiration

Built during a nine-month healthcare IT contract to organize laptop and asset deployment prep across regions, departments, and software profiles—replacing ad-hoc coordination with a structured desktop workflow.

## Current State / Phase

Ran successfully alongside real tier-2 domain workflows and collaborative scenarios; proved viability as a side test but was not officially integrated into enterprise release processes.

## Future Directions

Formal packaging, Authenticode signing, and IT-approved deployment paths if brought into production change control.

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

Example views from the application:

### Screenshot 1

![Screenshot 1](../assets/projects/HHC-IT-FieldServices-Work-POC/screenshot-primary.png)

### Screenshot 2

![Screenshot 2](../assets/projects/HHC-IT-FieldServices-Work-POC/screenshot-architecture.png)

### Screenshot 3

![Screenshot 3](../assets/projects/HHC-IT-FieldServices-Work-POC/screenshot-secondary.png)

### Screenshot 4

![Screenshot 4](../assets/projects/HHC-IT-FieldServices-Work-POC/screenshot-04.png)

### Screenshot 5

![Screenshot 5](../assets/projects/HHC-IT-FieldServices-Work-POC/screenshot-05.png)

### Screenshot 6

![Screenshot 6](../assets/projects/HHC-IT-FieldServices-Work-POC/screenshot-06.png)

### Screenshot 7

![Screenshot 7](../assets/projects/HHC-IT-FieldServices-Work-POC/screenshot-07.png)

### Screenshot 8

![Screenshot 8](../assets/projects/HHC-IT-FieldServices-Work-POC/screenshot-08.png)

---

[← Back to portfolio](../README.md#projects)
