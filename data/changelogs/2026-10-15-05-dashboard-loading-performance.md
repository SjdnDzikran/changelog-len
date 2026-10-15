---
date: "2026-10-15"
title: "Speed up dashboards and inventory list loading"
repo: ui-wms
product:
  - backend
  - web
additions: 1799
deletions: 1011
---

A coordinated performance release across the warehouse app and its API makes the dashboard and inbound screens feel noticeably lighter and quicker.

- **Faster dashboards:** The dozens of behind-the-scenes data lookups that fill the dashboard cards and charts now run in parallel instead of one after another, so the whole dashboard finishes loading sooner on every warehouse variant
- **Faster inbound and outbound item lists:** Serial numbers for a page of items are now fetched in one batched request instead of one request per item, removing a major slowdown on pages with many rows
- **Lighter app download:** Unused bundled scripts were removed and web server compression enabled, cutting the initial JavaScript download by roughly a third (about 4.4 MB down to 3.1 MB uncompressed)
- **Fewer redundant requests:** The user's assigned warehouse is now fetched once per page load and shared across the menu, header and dashboard instead of four separate requests, with dashboard counters animating on a single shared timer to reduce background work
- **Resilient dialog lookups:** The material and location lists inside inbound dialogs now load only when a dialog is first opened, keep working if one list fails, and retry cleanly the next time
