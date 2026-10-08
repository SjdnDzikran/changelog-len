---
date: "2026-10-08"
title: "Fix outbound deletion failing on shared meter serials"
repo: api-wms
product:
  - backend
additions: 373
deletions: 25
---

- **Deletion no longer errors:** Deleting an outbound document whose meter serial is linked to more than one item used to fail with a "Sequence contains more than one element" error. Stock is now released correctly, counting each item once even when its serial link is duplicated.
- **All-or-nothing cleanup:** Stock reservations, serial statuses, and the document itself are now committed together, so a failed deletion no longer leaves stock numbers half-released or inconsistent.
- **Safer guards:** Deletion is refused when the stock reservation is insufficient instead of pushing stock negative, and already-issued documents and other warehouses remain protected, including status records that share identical timestamps.
