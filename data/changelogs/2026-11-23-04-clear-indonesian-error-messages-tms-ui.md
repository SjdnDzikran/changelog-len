---
date: "2026-11-23"
title: "Show clear Indonesian error messages in TMS forms"
repo: erp-len-ui
product:
  - web
additions: 237
deletions: 50
---

Error popups in the AWB, Manifest, DRS and Booking screens now display the actual reason an action failed, in Indonesian, instead of raw technical text or a generic failure notice.

- **Real reasons surface:** Duplicate AWB numbers, mismatched transport modes, and status conflicts now appear word for word from the system, so staff know immediately what to correct
- **No more raw HTML or JSON in alerts:** Gateway and server failures no longer dump raw code into a popup; they show a clean Indonesian message instead
- **Longer reading time:** Error notifications stay on screen for 8 seconds, enough to read and note the failing AWB or booking number
