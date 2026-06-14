---
date: "2026-06-14"
title: "Require approval flow selection before filling forms and add delivery acknowledgment page"
repo: len-approval-ui
product:
  - web
additions: 748
deletions: 132
---

**Flow-first form workflow:** BL Inbound and Pickup Domestic forms now require users to pick an approval flow as the very first step before they can enter any shipment details or upload items. Previously, flow selection was hidden inside the final Submit dialog, meaning users could fill out an entire form without realizing which approval chain would handle it.

**New AWB Acknowledgment page:** A dedicated page under Monitoring lets users record and edit delivery acknowledgments for any AWB. Each acknowledgment captures who received the shipment, the date and time of receipt, and optional notes, with a full history of past acknowledgments visible in a sidebar panel.

**Email and WhatsApp notifications:** Both the acknowledgment page and the redesigned Submit dialog let users choose email and WhatsApp recipient lists so stakeholders are notified when a form is submitted or a delivery is acknowledged.

**Simplified Submit dialog:** The Submit dialog on BL Inbound and Pickup Domestic now focuses solely on choosing notification recipients, since the approval flow is already locked in at the start.
