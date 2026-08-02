---
date: "2026-08-02"
title: "Select specific serial numbers when sending quality inspection items to test"
repo: api-wms
product:
  - backend
  - web
additions: 517
deletions: 71
---

Operators can now pick individual serial numbers from a quality inspection restriction and send only the chosen ones to a test bin, instead of moving the entire restriction at once.

- **Checkbox selection per serial number:** The restricted S/N list now has checkboxes next to each unit, with a "Select All" option that only picks serial numbers still eligible for testing. Selections persist when paging through the list but reset if search or page size changes
- **Partial send to test:** Once serial numbers are selected, pressing "Send Selected to Test" opens the existing destination dialog with the count of chosen units. The quantity shown updates to reflect the selection rather than the full restriction
- **Eligibility status per row:** Each serial number displays whether it is still at the quality inspection source bin ("Ready for Test") or has already been moved ("Already moved"), so operators can see at a glance which units can still be sent
- **Concurrent transfer protection:** The system locks serial records during transfer and rejects requests if another operator moved the same serial in the meantime, preventing duplicate transfers from corrupting inventory counts
