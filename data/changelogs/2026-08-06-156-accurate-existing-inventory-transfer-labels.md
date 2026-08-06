---
date: "2026-08-06"
title: "Show accurate labels for existing-inventory stock transfers"
repo: api-wms
product:
  - backend
additions: 123
deletions: 20
---

- **Clear "TRANSFER FROM EXISTING INVENTORY" label:** Stock transferred from existing warehouse inventory now carries a descriptive label instead of the misleading "TRANSFER FROM INBOUND ID: 0" text, making transfer origin immediately clear on reports and inventory views.
- **Dashboard figures stay clean:** Warehouse dashboard statistics (daily inbound, recorded, verified, weekly totals) now properly exclude all transfer-sourced rows using a broader filter, keeping operational counts accurate regardless of the transfer source.
