---
date: "2026-06-28"
title: "Restore ETR Number label and load auto-number on page open"
repo: len-approval-ui
product:
  - web
additions: 28
deletions: 17
---

The ETR Number field label has been reverted to its original name across all form types, and the auto-generated number now appears as soon as the page opens instead of only after confirming the approval workflow.

- **Label consistency:** All form types (BL, BL Outbound, Pickup Domestic) now show "ETR Number" as the field label on both the creation and viewing pages, reverting a previous rename to "REQ Number"
- **Instant number preview:** The system fetches the next auto-generated number when the page first loads, so users see the number immediately without having to wait until they select and confirm an approval flow
