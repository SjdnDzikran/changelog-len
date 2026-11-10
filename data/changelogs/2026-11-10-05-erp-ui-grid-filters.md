---
date: "2026-11-10"
title: "List filters survive navigating away and back"
repo: erp-len-ui
product:
  - web
additions: 1012
deletions: 77
---

Filters on nearly every list page in the TMS web app are now remembered, released as UI 2.0.10.

- **Filters persist:** Search terms, status picks, customer filters, date ranges, and advanced-search columns stay in place when you open a detail page and come back through breadcrumbs, instead of resetting every time
- **Covers 71 list pages:** AWB, Booking, Manifest, invoices, petty cash, inventory, warehouses, CMS content, users, roles, audit logs and more keep their filters; grids that already kept filters via the address bar keep that behavior
- **Explicit actions win:** Choosing a fresh "return" link or pressing reset/clear still starts clean, and signing out wipes all remembered filters so nothing leaks between users
