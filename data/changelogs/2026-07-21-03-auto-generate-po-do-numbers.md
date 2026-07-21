---
date: "2026-07-21"
title: "Auto-generate PO and DO numbers on approval forms"
repo: len-approval-api
product:
  - backend
additions: 5754
deletions: 1
---

BL Inbound, BL Outbound, and Pickup Domestic forms now support automatic PO and DO number generation, eliminating the need to manually assign these reference numbers.

- **Automatic numbering on submit:** PO numbers (format `PO260721-00001`) and DO numbers (format `DO260721-00001`) are generated from dedicated sequences when a form is submitted, with the date embedded in the number for easy identification
- **Manual override available:** Users can type a custom DO number or disable auto-generation entirely per form, giving flexibility for pre-assigned numbers from external systems
- **Duplicate prevention across all form types:** The system rejects any DO number that already exists on a BL Inbound, BL Outbound, or Pickup Domestic form, with a clear Bahasa Indonesia error message explaining the conflict
- **Per-item PO numbers:** PO numbers are assigned to individual line items, so each material in a form gets its own unique PO reference