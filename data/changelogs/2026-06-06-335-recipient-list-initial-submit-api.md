---
date: "2026-06-06"
title: "Add extra email and WhatsApp recipients to initial form submission"
repo: len-approval-api
product:
  - backend
additions: 253
deletions: 20
---

- **Optional recipients on submit:** When a BL Inbound, BL Outbound, or Pickup Domestic form is first submitted for approval, the system now accepts an Email Recipient List and a WhatsApp Recipient List to include as additional notification recipients alongside the standard approval flow notifications
- **Consistent with later stages:** This brings the initial submission in line with the recipient list support already available on approval, rejection, and revision notifications, so stakeholders can be notified from the very first step of the workflow
