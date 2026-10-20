---
date: "2026-10-20"
title: "Rebuilt serial number history dialog with filters and search"
repo: ui-wms
product:
  - web
additions: 809
deletions: 322
---

The dialog that shows a serial number's movement history (routing slip) and the list of serials under a restriction have been rebuilt into one modern, faster detail view used across Network and XL Home:

- **Filters and search:** Filter the history by action type or by the user who performed it, and for restricted serials by test result (Tested/Pending), disposition (Available/Blocked/Pending), and whether the serial number was filled in. Search now matches the readable status label, not just internal notes.
- **Color-coded statuses:** All six inventory history actions get distinct colored badges (Incoming, Verified, Allocated, Requested to pick, Picked for test, Issued), with readable detail text kept alongside.
- **Sorting and paging:** Sort newest/oldest (or by serial number for restrictions) and page through results with page-size choices; content loads page by page so long histories stay responsive.
- **Material and location context:** The dialog header shows the material and its source location together, with a collapsible detail panel on mobile.
- **Reliable behavior:** Loading, empty, error, and retry states are handled consistently; dismissing the dialog cancels pending requests; filters and paging are kept if you reopen the same serial and reset when you open a different one. Works on desktop, tablet, and phone in Light and Dark themes.
