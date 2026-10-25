---
date: "2026-10-25"
title: "Fix vehicle search crash on records with missing optional details"
repo: erp-len-api
product:
  - backend
additions: 87
deletions: 6
---

Searching or opening vehicle records no longer crashes when optional details were never filled in.

- **Crash fixed:** Vehicle entries saved without a color, description, frame number, or engine number could break the vehicle search and listing. These fields are now safely treated as empty, so every vehicle shows up in search results regardless of how much detail was entered
- **Covers the full workflow:** Creating, searching, listing, opening, and editing a vehicle with all optional fields left blank now works end to end, verified by an automated test
- **No action needed:** Existing vehicle records don't need to be corrected or migrated; they simply display normally again
