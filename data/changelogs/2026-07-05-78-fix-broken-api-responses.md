---
date: "2026-07-05"
title: "Fix broken API responses caused by corrupted data"
repo: api-wms
product:
  - backend
additions: 23
deletions: 1
---

Some API responses could arrive with invalid JSON due to leftover data from a previous response, causing pages to fail or show errors. The response layer now properly clears old data before writing new responses, preventing this corruption.
