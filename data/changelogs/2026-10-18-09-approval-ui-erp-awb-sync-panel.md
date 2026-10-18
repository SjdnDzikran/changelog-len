---
date: "2026-10-18"
title: "See exactly what each form wrote to its ERP waybills"
repo: len-approval-ui
product:
  - web
additions: 1114
deletions: 83
---

A new "AWB di ERP" panel on shipment forms shows, for each waybill, what the approval system sent to ERP and what it held back.

- **Status per waybill:** Whether each AWB was created, updated, skipped, or failed in ERP, with ERP's own explanation
- **Route and price at a glance:** The origin, destination, transport mode, and CJ price written for each waybill
- **Warnings explained:** Anything the form could not fill in, and why, is listed in plain language
- **ERP edits respected and visible:** Fields where an ERP operator entered something different are shown side by side rather than silently overwritten
- **Admin re-send:** Administrators get a "Sync ulang ke ERP" button with a confirmation, and it never deletes or clobbers operator edits
