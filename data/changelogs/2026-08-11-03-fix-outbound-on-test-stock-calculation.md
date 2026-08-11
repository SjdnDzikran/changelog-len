---
date: "2026-08-11"
title: "Fix outbound on-test stock calculation error"
repo: api-wms
product:
  - backend
additions: 50
deletions: 4
---

- **Decimal stock values handled correctly:** Outbound on-test resolve now reads stock quantities that contain decimal values (e.g. 128.00 or 12.5) without crashing, fixing resolve failures that occurred when the database stored numeric precision that did not fit a whole-number format
