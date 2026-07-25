---
date: "2026-07-25"
title: "Add DO Number with auto-generate and PO auto-fill for BL Inbound and Pickup Domestic"
repo: len-approval-ui
product:
  - web
additions: 243
deletions: 14
---

- **DO Number field with auto-generate toggle:** Both BL Inbound and Pickup Domestic create forms now include a DO Number field. By default, the system previews and fills the next available number automatically, but users can switch to manual entry at any time
- **PO auto-generate option:** A new header-level checkbox lets the server automatically assign PO numbers to line items that don't already have one, reducing manual data entry during form creation
- **WBS / Neg. Res label correction:** The field previously labeled "BL/DO Number" now correctly shows "WBS / Neg. Res" across create and view forms, matching the actual data it holds
- **DO Number visible on detail pages:** After a form is saved, the DO Number appears as a read-only field on the BL Inbound and Pickup Domestic view pages for easy reference
