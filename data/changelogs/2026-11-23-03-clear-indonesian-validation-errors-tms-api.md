---
date: "2026-11-23"
title: "Clear Indonesian error messages across AWB, Manifest, DRS and Booking"
repo: erp-len-api
product:
  - backend
additions: 469
deletions: 85
---

Actions that were previously rejected with a generic "server error" now return clear Indonesian messages that name the problem and what to do, across AWB, Manifest, DRS and Booking.

- **Duplicate numbers:** Saving an AWB or booking number that already exists now says exactly which number is taken and asks for a different one, instead of failing silently as a server error
- **Wrong status explained:** Editing or deleting an AWB, manifest, DRS or booking that is too far along (for example already in transit or received at the warehouse) returns the current status and which statuses are still allowed
- **Missing AWB named:** Adding AWBs to a manifest or DRS that are already assigned elsewhere, or in the wrong status, now lists the specific AWB numbers with their statuses, so staff can fix the selection without trial and error
- **Complete field checks:** Required fields such as destination branch, transit branch, vendor, vehicle type, driver and vehicle for a chosen transport category are validated with specific Indonesian prompts before anything is saved
