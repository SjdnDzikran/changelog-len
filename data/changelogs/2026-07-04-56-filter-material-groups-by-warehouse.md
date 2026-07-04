---
date: "2026-07-04"
title: "Show only relevant material options per warehouse across all WMS pages"
repo: ui-wms
product:
  - web
additions: 321
deletions: 101
---

- **Smart material filtering:** Each warehouse now only displays material groups it actually handles. A warehouse configured for SP XL and SP AXIS will no longer show options for AIGO, Serena, SIMCARD, or other irrelevant materials in dropdowns and tabs
- **All pages updated:** The filtering applies across inbound, outbound, inventory, adjustment, change material, monitoring, and Data WMS reporting pages. Material group tabs on the reporting page are completely hidden when they do not apply to the active warehouse
- **Fewer mistakes:** Staff can no longer accidentally select a material group their warehouse does not support, eliminating a common source of data entry errors
