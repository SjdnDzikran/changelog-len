---
date: "2026-08-06"
title: "Streamline serial number input in Tested Inventory"
repo: ui-wms
product:
  - web
additions: 58
deletions: 10
---

- **Paste multiple serial numbers at once:** Scanning or pasting a block of serial numbers into the Tested Inventory Per Material form now splits them automatically into individual entries, instead of recording only the first value and discarding the rest.
- **No serial dialog for completed transfers:** Rows that originated from a transfer bin and already carry all their serial numbers no longer show the serial capture dialog, reducing clutter and preventing accidental re-entry.
