---
date: "2026-08-06"
title: "Recognize new transfer labels in Tested Inventory detail"
repo: ui-wms
product:
  - web
additions: 69
deletions: 20
---

- **Consistent transfer row detection:** The Tested Inventory Per Material dialog now recognizes the updated "TRANSFER FROM EXISTING INVENTORY" label in addition to the original "TRANSFER FROM INBOUND ID" format, so transfer rows continue to be handled correctly across both label variations.
