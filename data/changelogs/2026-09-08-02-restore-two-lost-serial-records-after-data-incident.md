---
date: "2026-09-08"
title: "Restore two lost serial records after data incident"
repo: api-wms
product:
  - backend
additions: 319
deletions: 4
---

A follow-up to the serial history protection work: a sharper warning when deletion is blocked, plus a tightly controlled repair for two serial records lost in a past incident.

- **Sharper blocked-delete message:** The rejection message now names exactly which activities are on record for the serial in question (testing, quality hold or block, transfer, outbound) and tells staff to reconcile the data rather than remove it by hand
- **Incident repair prepared:** Two serial numbers whose stock records were deleted out from under them, despite carrying testing, quality hold, and transfer history, can now be restored with a purpose-built repair that touches only those two exact serials
- **Safety gates on the repair:** The restoration runs as a dry run by default, requires warehouse confirmation that both physical units are still on hand before it can change anything, and never modifies testing, restriction, transfer, or outbound history
