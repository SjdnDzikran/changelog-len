---
date: "2026-05-13"
title: "Fix AWB bulk edit export"
repo: erp-len-ui
product:
  - web
---

- **Bulk edit export now downloads correctly:** Selecting AWBs and exporting them for bulk editing previously failed silently because the app was calling an outdated endpoint. The export file now generates as expected.
