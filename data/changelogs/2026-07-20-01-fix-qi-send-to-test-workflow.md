---
date: "2026-07-20"
title: "Fix quality inspection Send-to-Test workflow and prevent duplicate transfers"
repo: api-wms
product:
  - backend
additions: 430
deletions: 14
---

Quality Inspection items being sent to a Test Bin now follow the correct transfer path. Several issues in the transfer lifecycle have been resolved to keep inventory counts accurate and prevent accidental double-moves.

- **Correct stock bucket selection:** Items held under Quality Inspection are now moved from the proper stock bucket, so transfer records and remaining inventory both stay accurate
- **Duplicate send prevention:** A second attempt to send the same restricted items to a Test Bin is automatically rejected, keeping the restriction status unchanged until testing is confirmed
- **Readable transfer reference:** Each Send-to-Test transfer now generates a Transaction Number using the Plant name and destination location, replacing the previous blank value
- **On Test eligibility indicator:** The restriction list now exposes whether each item is still eligible for Send-to-Test or has already been moved, so the frontend can show the right status badge and hide or show the action button accordingly
- **Warehouse-scoped bin detection:** Test Bin identification now considers the warehouse context, preventing cross-warehouse bin misidentification
