---
date: "2026-09-09"
title: "Bulk-correct serial numbers from Manage Serial Number"
repo: api-wms
product:
  - backend
additions: 324
deletions: 23
---

Warehouse teams can now fix mislabeled serial numbers in bulk instead of one at a time.

- **Bulk replacement, up to 500 at once:** Staff can relabel up to 500 available serial numbers in a single save, as long as they sit under the same material and storage bin
- **Stock stays untouched:** Only the label changes; stock quantities, storage locations, and transaction history remain exactly as they were
- **All-or-nothing saving:** Every row is re-checked at save time (right warehouse, same material and bin, still available, label unchanged since loading). If anything moved mid-edit, the whole batch is cancelled instead of half-applied
- **Shipped numbers are locked:** Serial numbers that already have outbound delivery history can no longer be relabeled, keeping shipping records trustworthy
- **Simpler deletion rules:** During data reconciliation, serial numbers with restriction or transfer history can now be deleted manually; only Tested or Outbound history still blocks deletion
