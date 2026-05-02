---
date: "2026-05-02"
title: "Keep search and filter settings when navigating between list and detail pages"
repo: erp-len-ui
product:
  - web
---

Users who filter an AWB, Booking, Manifest, DRS, or Inbound list and then open a record will no longer lose their filters when going back. Previously, returning from a detail or edit page would reset the entire list, forcing users to re-enter search terms and re-apply every filter. Now the active filters are saved to the browser URL, so the list automatically reloads with the same view.

- **AWB list**: search keyword, status, date range, period, and customer filters all survive when opening a shipment and coming back
- **Booking, Manifest, and DRS lists**: the same filter persistence applies to these pages, covering search, status, period, and date range
- **Inbound list**: search and status filters are preserved after viewing or editing an inbound document
- All detail and edit pages across these modules now use the browser's back navigation, which naturally restores the filtered list view
