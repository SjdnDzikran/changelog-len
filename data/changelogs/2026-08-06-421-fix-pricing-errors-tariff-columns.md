---
date: "2026-08-06"
title: "Fix pricing errors caused by mismatched tariff spreadsheet columns"
repo: len-approval-api
product:
  - backend
additions: 367
deletions: 9
---

- **Correct minimum weight on 36 tariff routes:** Four tariff sheets in the annual pricing workbook store the minimum weight and lead time in a different column order than the other sheets. The import previously read them swapped, causing quotes on 36 routes to undercharge by as much as 94% because the weight floor and transit time were used interchangeably.
- **Automatic column detection from header row:** The import now reads each sheet's own header row to locate the right columns, so pricing stays correct even when new sheets are added to the workbook or existing ones are restructured.
- **Handles sheets with offset headers:** Tariff sheets that open with a blank row are now scanned correctly instead of losing their first row of data to a misaligned header.
