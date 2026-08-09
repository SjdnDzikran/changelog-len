---
date: "2026-08-09"
title: "Block Quality Inspection stock from bypassing Test Bin checks, and repair 960 stranded units"
repo: api-wms
product:
  - backend
additions: 856
deletions: 14
---

A safety guard that was supposed to prevent Quality Inspection stock from going directly into a Test Bin was reading the wrong data source. It checked a view that was empty at the time of the check, so it appeared to be working while letting every QI allocation pass through silently. As a result, 960 serials from Batch-6 ZTE ended up in a Test Bin with no Tested Inventory document behind them, making them impossible to test or resolve through the normal workflow.

**Repair script:** A transactional repair was run to create the missing Tested Inventory document for the 960 stranded serials. The script runs as a dry-run by default, validates every precondition (serial counts, restriction status, QI quantities), and creates a full backup before applying changes. The repaired documents are now visible and can proceed through the standard testing flow.

**Guard fix:** The safety check now reads the inventory table directly instead of the allocation-gated view, so it can detect QI stock before the allocation step completes and reject it with the specific bin name that is blocked.

**Legacy route protection:** The same safety check was applied to the older item-by-item confirmation and allocation routes, which are no longer used in the UI but can still be called through the API. This closes the gap so that no route can bypass the invariant.
