---
date: "2026-05-30"
title: "Add Pickup Domestic Inbound and Outbound approval workflows"
repo: len-approval-api
additions: 4125
deletions: 19
product:
  - backend
---

Two new form types are now available in the approval system for managing domestic pickup shipments:

- **Pickup Domestic Inbound:** track goods received through domestic pickup with BL numbers, material documents, WBS references, and inbound dates, each with a multi-step approval workflow
- **Pickup Domestic Outbound:** create outbound requests with item details including dimensions, weight, and packing costs, routed through the same configurable approval flow
- **Excel template upload:** operators can download a pre-formatted spreadsheet with dropdown validation for transport mode (Darat, Laut, Udara) and origin branch, then upload it back to fill in all items at once
- **AWB auto-registration:** after the AWB Data Entry approval step completes, AWB numbers are automatically created in TMS so shipments can be tracked immediately
- **Email and WhatsApp notifications:** approvers receive notifications with direct approve/reject links at every workflow step, keeping the process moving without manual follow-up
