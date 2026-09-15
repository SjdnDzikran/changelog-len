---
date: "2026-09-15"
title: "Restore serial number input when quota slots remain"
repo: ui-wms
product:
  - web
additions: 42
deletions: 6
---

On the Manage Serial Number page, the input form got stuck claiming "Kuota serial number untuk data ini sudah terpenuhi" even when the bin still had free slots, blocking operators from recording serial numbers.

- **Input form restored:** The remaining-quota check now completes properly, so operators can input serial numbers up to the remaining slots
- **Stable during bulk editing:** The form keeps working when the page is switched in and out of bulk edit mode
- **Verified live:** Confirmed against a real material with 15 units and 8 recorded serial numbers: exactly 7 slots offered and the input opens cleanly
