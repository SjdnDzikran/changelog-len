---
date: "2026-08-11"
title: "Fix notification unread count crash for users with large histories"
repo: erp-len-api
product:
  - backend
additions: 487
deletions: 23
---

- **Badge loads reliably:** The unread notification count now loads without errors even for users with thousands of past notifications. Previously, the system attempted to load every notification into memory and build an unbounded filter list, which exceeded the database expression limit and caused server errors
- **Server-side filtering:** Customer-based visibility rules are now applied directly in the database query instead of being evaluated in memory, so only relevant notifications are counted
- **Faster counting:** Read notification filtering uses a database anti-join and per-category aggregation runs entirely on the server, reducing the data the application needs to process
