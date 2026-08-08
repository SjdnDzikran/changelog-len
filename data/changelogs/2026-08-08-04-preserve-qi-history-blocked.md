---
date: "2026-08-08"
title: "Preserve QI restriction history when moving serials to Blocked"
repo: api-wms
product:
  - backend
additions: 18
deletions: 9
---

Serials moved from Quality Inspection to Blocked now keep their original QI restriction link as an immutable history record instead of deleting it. This preserves the complete audit trail showing where each serial came from.

- **Retained QI history:** The resolved QI link stays in the database while the new Blocked restriction becomes the only active one, so operators can still see the serial's original inspection context
