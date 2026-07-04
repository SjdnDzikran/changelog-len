---
date: "2026-07-04"
title: "Fix Serena outbound monitoring page crash"
repo: api-wms
product:
  - backend
additions: 26
deletions: 2
---

- **Monitoring page restored:** The Serena outbound monitoring page was returning server errors on every request because a data query was trying to read a field that does not exist in Serena records. The query has been corrected, and the page now loads and filters normally
