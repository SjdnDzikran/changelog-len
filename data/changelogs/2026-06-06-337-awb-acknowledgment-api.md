---
date: "2026-06-06"
title: "Add delivery acknowledgment recording for BL Outbound and Pickup Domestic"
repo: len-approval-api
product:
  - backend
additions: 2447
deletions: 9
---

- **Per-AWB acknowledgment:** Each individual AWB within a BL Outbound or Pickup Domestic form can be independently acknowledged as delivered, recording who received it, when, and any notes about the delivery
- **Full audit trail:** Every acknowledgment action (both create and edit) is logged in a dedicated history table with the actor identity, timestamp, and all field values, so the complete chain of custody is always visible
- **Email notifications on acknowledgment:** A new professional email template is sent to the selected recipient list when an ACK is recorded, including the AWB number, receiver name, and received date
- **WhatsApp notifications on acknowledgment:** WhatsApp messages are sent to configured recipient lists using customizable templates for BL Outbound and Pickup Domestic acknowledgment events
- **Edit after the fact:** Existing acknowledgments can be updated with corrected information, with each edit also recorded in the audit history
