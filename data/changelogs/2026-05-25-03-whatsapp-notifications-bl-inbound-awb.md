---
date: "2026-05-25"
title: "WhatsApp notifications for BL form outcomes and BL Inbound AWB tracking"
repo: len-approval-api
product:
  - backend
deletions: 6497
additions: 3777
---

- **WhatsApp notifications on approval outcomes:** When a BL inbound or BL outbound form is approved, rejected, or sent back for revision, designated recipients now receive a WhatsApp message with the form number and a direct link
- **WhatsApp recipient lists and templates:** Admins can create named recipient lists and customize the notification message text for each form type
- **CC recipients on outcome emails:** Notification emails for approved, rejected, or revision-requested forms now support CC recipients alongside the primary requester
- **BL Inbound AWB tracking:** BL inbound form items now include AWB number, Origin, Moda, and Unit of Measure fields, enabling complete shipment data from inbound through outbound
- **Duplicate BL number validation:** Creating a BL form with a number that already exists returns a clear Indonesian error message instead of a generic database error
- **Data Entry (AWB) step type:** Approval flows can now include a step where LEN fills in AWB data without approving or rejecting, keeping the workflow organized by responsibility
