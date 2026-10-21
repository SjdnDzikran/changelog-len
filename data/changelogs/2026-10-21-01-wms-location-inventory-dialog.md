---
date: "2026-10-21"
title: "Rebuild the location inventory dialog in WMS"
repo: ui-wms
product:
  - web
  - backend
additions: 1159
deletions: 92
---

The Inventory List dialog on Management > Lokasi > Racking has been rebuilt from the ground up, with a matching new backend endpoint scoped per warehouse and rack.

- **Chip filters:** Inventory rows can now be narrowed by Plant, Material, Unit of Measure, and Vendor. Each filter opens a searchable chip picker, and selected filters appear as removable chips at the top, with a one-click reset.
- **Readable stock rows:** What used to be seven cramped table columns is now four clean columns grouping material, location/vendor, and stock details. Each row shows the available quantity plus Quality Inspection, Blocked, and In Transit breakdowns, with negative quantities highlighted in red.
- **Independent paging and sorting:** The dialog now keeps its own search, sorting, page size, and page jump controls, separate from the location list behind it. Warehouse, SLOC, and rack context are always shown in the header.
- **Faster, safer data loading:** Inventory is loaded page by page from a new endpoint that filters by warehouse and rack before summing stock, and cancelled stock with zero balance is excluded. Filter options load on demand as you type, outdated requests are cancelled so results never mix, and all inputs are validated and injection-safe.
- **Mobile and dark mode:** The dialog gets compact card-style rows on phones with touch-friendly controls, plus consistent Light and Dark theme colors.
