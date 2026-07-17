---
date: "2026-07-17"
title: "Show loading spinners immediately on all management pages"
repo: erp-len-ui
product:
  - web
additions: 31
deletions: 12
---

**Instant spinner on page open:** All list and management pages now display a loading overlay the moment they open, instead of briefly showing an empty table before data arrives. This covers AWB management, AWB printing, shipment status, booking, inventory, inbound, outbound, transfer, warehouse management, channels, inventory movement history, and smart search.

**Consistent behavior across the app:** Previously, the spinner only appeared after a brief delay because the loading state was not initialized on page load. All pages now follow the same pattern, so users get immediate visual feedback regardless of which page they navigate to.
