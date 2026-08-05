---
date: "2026-08-05"
title: "Show complete serial number list in Per Material test dialog"
repo: ui-wms
product:
  - web
additions: 18
deletions: 7
---

- **All saved serials now visible:** The "Isi S/N per Remark" dialog displays every saved serial number, including ones that have already passed testing, instead of silently hiding resolved rows
- **Resolved rows are read-only:** Tested serials appear with a gray "Teruji" badge and no edit button, preventing accidental changes to finalized results
- **Only unresolved rows can be edited:** The replace button remains available only on serials that have not been resolved, keeping the replacement flow focused on pending entries
