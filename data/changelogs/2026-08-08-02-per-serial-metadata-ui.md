---
date: "2026-08-08"
title: "Per-serial metadata capture and breakdown finalization in Tested Inventory"
repo: ui-wms
product:
  - web
additions: 410
deletions: 16
---

The serial number dialog in Tested Inventory Per Material now supports entering each serial with its own vendor, material category, and product type, replacing the previous one-size-fits-all approach. Once all serials are identified, operators can finalize the breakdown in one click.

- **Per S/N scanning mode:** Each scanned serial receives its own metadata record. Operators fill in the vendor and product details once, then scan one or more serials that inherit those values, making it fast to process mixed batches
- **Inline metadata editing:** Each saved serial's metadata can be edited individually through a pencil icon, giving operators full control to correct or update details before finalization
- **One-click breakdown finalization:** A finalize button appears automatically when all provisional slots are filled, splitting the group into separate records without changing total stock
