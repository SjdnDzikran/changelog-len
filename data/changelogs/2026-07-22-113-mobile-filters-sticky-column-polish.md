---
date: "2026-07-22"
title: "Improve Tested Inventory mobile layout with collapsible filters and sticky columns"
repo: ui-wms
product:
  - web
additions: 216
deletions: 57
---

- **Collapsible mobile filters:** On phone screens, all filter groups (Status, Condition, Completeness, Power On Test, Photo) are now hidden behind a single "Filters" toggle button by default. Tapping the button expands all filters in a compact, horizontally scrollable layout, so the data table is immediately visible without scrolling past a wall of filter chips
- **Paired sticky columns:** On desktop, the Status column is now pinned next to the sticky Aksi column, so both remain visible during horizontal scroll. When the user has resolve permission, Status sits just left of Aksi; without permission, Status takes the rightmost pinned position itself
- **Clean column boundaries:** The Status badge text and sticky column shadow have been refined so content no longer bleeds through into adjacent columns while scrolling, and striped row colors render correctly across the sticky columns
- **Per Material download button:** The Excel download button on the Per Material page has been moved above the table alongside the other action buttons, making it easier to find