---
date: "2026-10-18"
title: "Make Excel inventory uploads dramatically faster"
repo: api-wms
product:
  - backend
additions: 216
deletions: 18
---

A slow spot in the Excel upload process was found and fixed, cutting the system's database workload for uploads by a wide margin.

- **The problem:** Every row of an inbound or tested-inventory upload was checking its material code the hard way, forcing the database to read an entire lookup table for each row
- **The fix:** Material code checks now use the lookup table's index directly, so each row reads a handful of records instead of thousands
- **Measured impact:** This single check was consuming about 1,112 seconds of database time every two weeks in production; a 1,000-row upload now takes 3 seconds instead of 10, and a 10,000-row upload 43 seconds instead of 123
- **No behaviour change:** Every upload accepts or rejects rows exactly as before, including unusual codes, so existing templates keep working
