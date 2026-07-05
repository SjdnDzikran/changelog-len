---
date: "2026-07-05"
title: "Fix raw data appearing in error notifications"
repo: ui-wms
product:
  - web
additions: 25
deletions: 12
---

- Error pop-ups that previously showed raw technical data (like serialized JSON objects) now display a clean Indonesian-language message instead
- The fix applies globally across all pages, so any unexpected server error is presented in a user-friendly way
