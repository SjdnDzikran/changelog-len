---
date: "2026-10-17"
title: "Speed up inbound and outbound detail pages"
repo: api-wms
product:
  - backend
additions: 494
deletions: 54
---

Warehouse detail pages load dramatically faster, and the status shown for each document and item is now always the right one.

- **Faster detail pages:** The inbound and outbound document and item pages now find each item's latest status directly instead of scanning the entire status history on every view. The slowest lookups, which had reached 22 seconds each in production, now return almost instantly.
- **Always the correct status:** When two status updates carry the same timestamp, pages now consistently show the latest one instead of an arbitrary pick.
- **Speed-up applied immediately:** The supporting database indexes were already applied to production before this release, so the improvement takes effect the moment the new version goes live.
- **Verified against production:** Old and new pages were compared on live production data and returned identical results on every screen, monitoring view, report export and serial number lookup.
