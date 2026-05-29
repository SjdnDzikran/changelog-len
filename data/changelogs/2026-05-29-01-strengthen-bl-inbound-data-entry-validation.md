---
date: "2026-05-29"
title: "Strengthen BL Inbound data entry validation and error handling"
repo: len-approval-api
product:
  - backend
  - web
---

- **Mandatory field enforcement:** AWB, Moda, and Origin must now be filled for every item before the data entry step can be completed, preventing incomplete records from advancing through the approval workflow
- **Cleaner error prompts:** When required fields are missing, the system now shows the total count of incomplete rows instead of listing every item ID, making it much easier to understand what needs fixing
- **One-click navigation to fix errors:** A "Buka Form Detail" button now appears inside the error banner when validation fails, letting approvers jump straight to the form detail page to fill in missing data
- **Smarter approval routing:** Notification links for the final approval step now open the full form view in the browser instead of offering a one-click approve, since that step requires reviewing and potentially editing item data
