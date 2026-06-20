---
date: "2026-06-20"
title: "Prevent duplicate serial number saves from repeated clicks"
repo: ui-wms
product:
  - web
additions: 16
deletions: 8
---

- **Save button locks during submission:** The Save button on the Serial Number input page is now disabled while a save request is in progress, so accidental double-clicks cannot create duplicate entries
- **Backend protection paired:** This works together with a server-side locking fix, providing two layers of protection against duplicate serial number records
