---
date: "2026-05-07"
title: "Fix filter restoration when navigating from dashboard"
repo: erp-len-ui
product:
  - web
deletions: 12
additions: 326
---

Clicking a dashboard card now reliably applies the correct filters on the target page across all six list pages: AWB, Shipment Status, Manage Booking, Manage Manifest, Manage DRS, and Inbound Booking.

Previously, filters passed via the dashboard link were sometimes ignored due to a timing mismatch between URL parsing and table rendering. This has been resolved with a consistent post-render reload pattern.
