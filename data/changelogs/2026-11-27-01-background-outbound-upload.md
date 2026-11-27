---
date: "2026-11-27"
title: "Add background upload for outbound deliveries"
repo: api-wms
product:
  - backend
additions: 4232
deletions: 623
---

The outbound upload ("Upload Data Outbound Item") now runs in the background, matching the inbound upload that shipped earlier: the file is accepted instantly, the checking and saving happen on the server, and staff can close the page while it runs.

- **Queued instead of waiting:** an outbound Excel file is accepted and queued in one step, and the dialog follows the progress live, so staff no longer sit in front of a spinning upload for large files
- **Every problem found at once:** instead of stopping at the first mistake, the check lists all of them in one pass: wrong material codes, unknown storage locations, missing serial numbers, mismatched quantities per group, and one document going to two different destinations
- **Stock checked before saving:** each item's stock is verified up front, and every shortage is reported with its numbers (available, already promised to other outbound documents, requested) so warehouse staff can fix quantities in one round instead of discovering shortfalls one upload at a time
- **Fix file without retyping:** a rejected upload can be downloaded as a corrected copy of the same file with problem cells highlighted, each problem explained next to its row, and a group summary sheet, then re-uploaded as is once the fixes are in
- **Safe saving:** the whole file is saved in a single all-or-nothing transaction, and stock and document status are re-checked at the moment of saving, so a file that was valid 10 minutes ago can no longer write bad data
