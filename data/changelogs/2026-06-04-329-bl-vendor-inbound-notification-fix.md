---
date: "2026-06-04"
title: "Fix approval notification for BL Vendor Inbound workflows"
repo: len-approval-api
product:
  - backend
additions: 23
deletions: 8
---

- **Next approver receives notification:** When BL Vendor Inbound advances from CJ Origin Moda Entry to LEN AWB Entry, the system now correctly sends a WhatsApp notification and email to the next person in the approval chain. Previously, the notification was skipped because the form type was not recognized in the routing logic
- **AWB field no longer blocks CJ step:** The AWB number field is no longer mandatory at the CJ Origin Moda Entry step for BL Inbound forms, since AWBs are assigned at a later step. This removes a validation error that was preventing users from completing the data entry step
