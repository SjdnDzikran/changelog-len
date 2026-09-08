---
date: "2026-09-08"
title: "Protect serial history from deletion and fix serial capacity checks"
repo: api-wms
product:
  - backend
additions: 339
deletions: 25
---

Serial numbers in the warehouse now carry stronger protection against accidental data loss, and the capacity math that decides how many serials fit on a stock line has been corrected.

- **Deletion guards with clear messages:** Inbound items and serial numbers that already carry testing, quality hold, transfer, or outbound history can no longer be deleted; staff now get a specific explanation of why the delete was blocked and are pointed to data reconciliation instead of manual removal
- **Accurate capacity counting:** Stock lines with a blank serial count no longer slip past the availability filter, and a single overfilled stock line can no longer cancel out the free slots of other lines, ending false "no capacity" errors when registering serials or shipping tested units
- **Safer restriction closure:** Closing a quality hold or block now first verifies that every linked serial record is intact; if any record is missing, the closure stops and asks an administrator to reconcile the data rather than writing incomplete results
