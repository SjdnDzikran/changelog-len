---
date: "2026-10-15"
title: "Add location filters and date sorting to the restriction list"
repo: ui-wms
product:
  - web
  - backend
additions: 1162
deletions: 160
---

Finding restricted inventory is now much quicker: the restriction list gained the same modern filtering experience as the other inventory screens, plus clearer date tracking.

- **New filters for Plant, SLOC, Bin and Material:** Staff can now narrow the restriction list by storage location and material using collapsible filter buttons that show how many choices are selected, with removable chips for every active filter and a one-click "Reset all"
- **Searchable filter choices:** Instead of one long checkbox list, each filter searches the warehouse's actual data as you type, showing up to 50 matching choices so even large catalogs stay manageable
- **Clearer date records:** Each restriction now shows both when it was created ("Restricted") and when it was cleared ("Resolved") in one Dates column, sorted newest or oldest first, with the person who resolved it visible on hover
- **Phone-friendly sorting:** A simple "Order by" dropdown on mobile replaces tap-the-header sorting, and missing resolution dates are labeled explicitly instead of showing misleading values
