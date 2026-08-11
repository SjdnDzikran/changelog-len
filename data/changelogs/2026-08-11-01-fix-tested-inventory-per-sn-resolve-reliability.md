---
date: "2026-08-11"
title: "Resolve individual serials from tested inventory groups"
repo: api-wms
product:
  - backend
additions: 415
deletions: 55
---

- **Individual serial release:** Operators can now resolve and release a single completed serial from quality inspection without waiting for the entire material group to be finished, so one tested item no longer blocks the rest of the workflow
- **Accurate stock tracking during merge:** Stock quantity checks now correctly account for serials that already exist in merged groups, preventing false rollbacks when finalizing groups that share a parent record
- **Tolerant QI isolation:** Serial resolve no longer fails when shared quality inspection restriction headers carry historical links from previously released serials, as the system now recalculates the active quantity from currently-restricted serials instead of relying on denormalized totals
- **Plain-language error messages:** Validation messages now name the specific missing data (Vendor, Kategori Produk Material, and Type Product) instead of referring to internal steps like finalization or breakdown
