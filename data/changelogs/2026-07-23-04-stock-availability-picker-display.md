---
date: "2026-07-23"
title: "Show accurate stock availability in transfer, outbound, and adjustment pickers"
repo: ui-wms
product:
  - web
additions: 224
deletions: 44
---

- **"Stock" column replaces "Jumlah":** The picker tables in Transfer, Outbound, and Adjustment now show a clear "Stock" column with the available quantity in bold, followed by an "Available" label.
- **Status badges for non-available stock:** When items have stock in other states, colored badges appear below the available quantity: orange "On Test," red "Blocked," blue "In Trans," and gray "Issued." This makes cases like 20 available with 618 on-test immediately clear.
- **Correct quantity limits:** The maximum quantity that can be entered now matches the backend formula, so users can no longer attempt to outbound more than what is truly available on the rack.
