---
date: "2026-05-25"
title: "WhatsApp configuration pages, BL Inbound AWB management, and dashboard improvements"
repo: len-approval-ui
product:
  - web
deletions: 210
additions: 1720
---

- **WhatsApp Recipient Lists:** New admin page to create, edit, and manage named lists of WhatsApp contacts for routing approval notifications
- **WhatsApp Templates:** New admin page to customize the approval message text for BL inbound and BL outbound forms, with placeholder support for form number, approver name, and link
- **BL Inbound AWB management:** From the BL Inbound view page, authorized users can download an AWB template, upload the filled file, and save AWB, Moda, and Origin data per item using inline dropdowns and text inputs
- **BL Outbound detail editing:** Origin, AWB, Weight, Length, Height, Width, Packing Kayu cost, and Remark fields added to the outbound item table with inline editing for assigned approvers
- **Need Action dashboard widget:** A clickable card on the dashboard shows the number of forms assigned to the current user for action, with direct navigation to the relevant form view
- **Dashboard chart with action data:** The form type chart now shows two datasets: "My Forms" (created by the user) and "Need Action" (pending the user's review)
- **WhatsApp in all approval dialogs:** Approve, reject, and revision dialogs now include a WhatsApp recipient list dropdown alongside the existing email recipient list option
- **WMS-originated outbound forms** display an informational banner and disable inline editing, directing approvers to review the data submitted from WMS
