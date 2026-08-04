---
date: "2026-08-04"
title: "Add inline serial number editing in Tested Inventory"
repo: ui-wms
product:
  - web
additions: 276
deletions: 9
---

- **Inline edit in draft dialog:** Saved serial numbers in the Per Material draft dialog can now be edited in place with a confirmation prompt, instead of requiring deletion and re-entry.

- **Inline edit in resolve dialog:** Serial numbers in the Per S/N resolve dialog also support inline editing, with the same confirmation and validation flow.

- **Smart edit gating:** The edit button only appears on unresolved, non-provisional serials, preventing accidental changes to finalized records.
