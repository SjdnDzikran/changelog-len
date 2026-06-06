---
date: "2026-06-06"
title: "Add delivery acknowledgment tracking to AWB monitoring"
repo: len-approval-ui
product:
  - web
additions: 564
deletions: 16
---

- **ACK status column:** The AWB Tracking table now shows an acknowledgment status badge for each BL Outbound and Pickup Domestic record, with a tooltip displaying the receiver name and date for acknowledged shipments
- **Capture acknowledgment button:** Each eligible AWB row has a new action button to open a dialog for recording who received the shipment, when, and any notes
- **Edit existing acknowledgments:** Already-acknowledged shipments show an edit button instead, allowing corrections to receiver details or notes
- **Acknowledgment history timeline:** The AWB detail dialog includes a full timeline of all acknowledgment actions, showing who made each change, when, and what values were set
- **Optional notifications on ACK:** The acknowledgment dialog lets users select an Email Recipient List and WhatsApp Recipient List to notify stakeholders when a delivery is confirmed
- **WhatsApp template configuration:** New "Acknowledgment" template cards have been added to the WhatsApp Templates settings page for both BL Outbound and Pickup Domestic
