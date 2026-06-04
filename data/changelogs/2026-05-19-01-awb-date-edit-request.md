---
date: "2026-05-19"
title: "Allow AWB date to be modified via edit requests"
repo: erp-len-api
product:
  - backend
  - web
deletions: 1
additions: 8
---

- **New editable field:** The AWB date (Tanggal AWB) can now be changed through the AWB Edit Request workflow, which was previously locked as read-only
- **End-to-end support:** Operators select the new date from a date picker on the edit request form, and once approved, the system automatically updates the shipment record
- **Consistent with existing workflow:** The date change follows the same approval process as other editable fields like service type, weight, and recipient details
