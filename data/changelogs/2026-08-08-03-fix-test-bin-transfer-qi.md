---
date: "2026-08-08"
title: "Fix Test Bin transfer stock and restriction consistency"
repo: api-wms
product:
  - backend
additions: 683
deletions: 57
---

Transfers into Test Bins now correctly detect each serial's actual stock status (available, quality inspection, or blocked) instead of assuming all Test Bin stock is already under QI restriction. Serials moving from available stock into a Test Bin get their QI restriction created automatically during the transfer.

- **Correct stock bucket detection:** The system reads each locked serial's authoritative status from the database, preventing available stock from being treated as quality-inspected and vice versa
- **Automatic QI restriction creation:** Serials in available stock that are transferred into a Test Bin now receive their QI restriction atomically as part of the transfer, closing a gap that left stock untrackable and unable to be resolved
- **Warehouse-scoped validation:** Test Bin lookups, including the destination-rack check, are now restricted to the authenticated user's assigned warehouse, preventing cross-warehouse confusion in multi-warehouse setups
