---
date: "2026-06-03"
title: "Fix Pickup Domestic approval workflow and notifications"
repo: len-approval-api
product:
  - backend
additions: 175
deletions: 73
---

Pickup Domestic Delivery forms were missing from the approval queue, meaning approvers could not see or act on them from the main dashboard. This also fixes approval notifications to link directly to the review page and personalize the greeting.

- **Visible in approval queue:** Pickup Domestic forms now appear in the "Need Approval" list alongside BL, MRN, MRF, and Pickup International forms
- **Correct review links:** Email and WhatsApp notifications now open the Pickup Domestic form view page, instead of a token-based API URL that landed on a blank screen
- **Personalized notifications:** WhatsApp approval messages greet the approver by name and show their assigned group, making it immediately clear who is being addressed
