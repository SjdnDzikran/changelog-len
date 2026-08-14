---
date: "2026-08-14"
title: "Show accurate progress and status for grouped materials"
repo: ui-wms
product:
  - web
additions: 164
deletions: 5
---

**Detail dialog shows the group's total progress:** When viewing a group of materials (for example, a pallet split into ten individual rows), the serial number progress counter now adds up every row in the group. Previously, it only showed the count from the first row, displaying "1/1 S/N" for a pallet that actually had ten serial numbers saved across its members.

**Status badges display test counts:** Collapsed material groups now show test progress using the same clear format as individual rows: a green "Tested" badge when all serials are tested, or an amber "Partial (3/4)" badge with the actual count when testing is in progress. Previously, all mixed groups showed the generic label "Sebagian" with no numbers, making it impossible to tell at a glance how far along a group was.
