---
date: "2026-09-05"
title: "Record actual test dates and surface stock aging in Tested Inventory"
repo: api-wms
product:
  - backend
additions: 1147
deletions: 8
---

Every test result now remembers when the test actually happened, and Tested Inventory reports can finally answer "how long has this stock gone untested?".

- **True test dates on every result:** Approving a test per serial, per material, or across a whole batch now saves the operator's real test date and time in Jakarta time, instead of an automatic server timestamp. Tests logged after the fact can be backdated to the day they were actually performed
- **Spreadsheet uploads keep their dates:** Serials resolved through Excel uploads inherit the batch's recorded test date, so imported results no longer look like they were tested at the moment of upload
- **Aging in the reports:** Per-serial reports show how many whole days since each physical unit was last tested, and material-level reports show the earliest and latest test dates across the group
- **The worst unit drives the number:** Material rows report the most overdue unit in the group rather than an average, which is the figure a retest schedule actually needs. One freshly tested serial can no longer hide a long-overdue sibling
- **No fake "fresh" data:** Units never tested, or still waiting on their serial number, show no aging figure at all instead of "0 days", so the oldest untested stock cannot be mistaken for stock tested today. Historical records are backfilled from their batch dates, so aging works from day one
