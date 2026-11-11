---
date: "2026-11-11"
title: "A calmer, more responsive interface"
repo: ui-wms
product:
  - web
additions: 499
deletions: 27
---

The whole WMS app gained a consistent, restrained set of interface animations that respect accessibility settings.

- **Consistent transitions:** Page changes, dialog and menu entrances, tab switches, button presses, and workflow-stage changes now share one short, consistent motion language instead of a slow one-second page fade
- **Respects reduced motion:** The animations follow the device's reduced-motion setting, including changes made while the app is open, and are disabled for printing
- **Nothing delayed:** Data values always render immediately; unchanged workflow stages no longer re-animate on every refresh
- **Shorter page loads:** The previous one-second page fade is replaced with a much quicker, subtler transition
