---
date: "2026-08-03"
title: "Resolve Blocked restrictions with optional stock transfer"
repo: api-wms
product:
  - backend
  - web
additions: 679
deletions: 47
---

- **Two resolve modes:** The resolve dialog now offers a choice between freeing stock in place ("Freed") and freeing then immediately moving it to a chosen destination ("Freed with transfer"), so operators no longer need to create a separate transfer after resolving
- **Bulk selection for Blocked rows:** Multiple Blocked restrictions can be selected through the same left-column checkboxes used for QI, with a unified destination SLOC and Bin applied to every row in the batch
- **Destination safety:** Test Bins are rejected as a transfer destination, and both SLOC and Bin must be picked before the resolve can be confirmed, preventing misplaced stock
- **Atomic release and move:** The free and transfer run inside a single transaction, so either the entire resolve-and-move succeeds or nothing is committed
