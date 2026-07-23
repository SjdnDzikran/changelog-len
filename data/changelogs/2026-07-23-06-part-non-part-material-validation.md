---
date: "2026-07-23"
title: "Classify approval items as Part or Non-Part with validation"
repo: len-approval-api
product:
  - backend
additions: 6178
deletions: 113
---

- **Part vs Non-Part classification:** Every item on BL Inbound, BL Outbound, and Pickup Domestic forms now has a Material Kind (Part or Non-Part). Part items must have a valid material code in the approval master and box numbers. Non-Part items use a manual description and can omit boxes.
- **Real-time validation:** When submitting or uploading items, the system checks Part codes against the approval-owned material reference table and returns clear Bahasa Indonesia error messages for unknown codes. This prevents invalid part numbers from entering the workflow.
- **SLOC validation:** Storage location codes on Pickup Domestic and BL Outbound forms are validated against the approval-owned location reference, catching typos before submission.
- **Historical data classified:** All existing form items have been automatically classified as Part or Non-Part based on whether they had complete box numbers, and matching material codes have been linked where available.
