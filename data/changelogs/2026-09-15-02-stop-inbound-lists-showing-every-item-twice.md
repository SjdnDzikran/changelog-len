---
date: "2026-09-15"
title: "Stop inbound lists from showing every item twice"
repo: api-wms
product:
  - backend
additions: 82
deletions: 8
---

After warehouse 8 received its own warehouse-specific set of inbound statuses, inbound item lists started showing every item twice, once per copy of its status label.

- **Duplicate rows eliminated:** Every inbound item now appears exactly once in the inbound lists, no matter how many warehouses define its status labels
- **Correct status per warehouse:** Items show the status label from their own warehouse first, with a safe fallback for warehouses without local labels
- **Verified against real data:** The main inbound list went from roughly 195,000 displayed rows to the correct 97,000, matching the actual number of recorded items
