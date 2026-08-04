---
date: "2026-08-04"
title: "Add safe serial number replacement for tested inventory"
repo: api-wms
product:
  - backend
additions: 425
deletions: 2
---

- **In-place replacement:** An incorrect serial number can now be replaced directly on a tested item that has been identified but not yet resolved, with full server-side validation to prevent data inconsistency.

- **Dual-table update:** Both the tested record and the linked inventory record are updated simultaneously, so the serial number stays consistent across the system.

- **Validation guards:** The system enforces warehouse-wide uniqueness, blocks replacement on already-resolved serials, and rejects system-reserved serial prefixes, preventing accidental data corruption.
