---
date: "2026-08-04"
title: "Fix Tested Inventory draft dialog to show saved data and stay editable"
repo: ui-wms
product:
  - web
additions: 177
deletions: 16
---

- **Saved serials visible on reopen:** Previously saved serial numbers now appear in the draft dialog when reopening a partial entry, so operators can see and manage existing progress instead of an empty list.

- **Edit at full capacity:** The dialog stays editable at 15/15 (all serials filled) when mandatory Vendor or product type fields are still blank, with the Save button active for metadata-only saves.

- **QI-only edit action:** The edit button now appears only on quality inspection rows, preventing confusion on standard inbound items that do not use the serial draft workflow.

- **Review mode at 5/5:** Fully resolved rows (all serials identified) can still be opened for review instead of the dialog closing silently.
