---
date: "2026-08-08"
title: "Stop propagating legacy zero-inbound transfer labels"
repo: api-wms
product:
  - backend
additions: 196
deletions: 69
---

Send-to-Test transfers no longer carry the misleading label "TRANSFER FROM INBOUND ID: 0" into Tested Inventory records. Previously, when a source pallet already had this stale text, the transfer copied it forward instead of replacing it with the correct label.

- **Normalized transfer remarks:** All transfer remarks are now processed through a single validation step that rewrites the legacy zero-inbound text to "TRANSFER FROM EXISTING INVENTORY", while preserving genuine pallet remarks and real inbound references unchanged
