---
date: "2026-08-03"
title: "Send multiple Quality Inspection restrictions to test in one step"
repo: api-wms
product:
  - backend
  - web
additions: 679
deletions: 395
---

- **Multi-select on the main table:** QI restriction rows can now be checked off directly on the restriction list, including across pages, instead of drilling into each row's serial number list to pick individual units
- **One-step bulk transfer:** All selected rows share the same destination Test Bin and Tested Inventory document, so operators can process an entire batch of QI restrictions in a single action
- **Atomic processing:** Every transfer in the batch either succeeds together or rolls back as a unit, so inventory counts are never left in a partially-moved state
- **Clear visual feedback:** The bulk action bar appears only after rows are selected, the button dynamically shows the restriction type, and the dialog lists every selected row with its source location and quantity
