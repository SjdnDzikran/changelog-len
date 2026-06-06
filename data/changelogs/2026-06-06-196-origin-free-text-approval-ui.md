---
date: "2026-06-06"
title: "Replace Origin dropdown with free-text input on all approval forms"
repo: len-approval-ui
product:
  - web
additions: 35
deletions: 72
---

- **Free-text Origin:** BL Inbound, BL Outbound, and Pickup Domestic forms now use a plain text input for Origin instead of a branch dropdown, so any origin value can be entered without being limited to predefined options
- **No validation blocking:** The requirement that all items must have an origin selected from the dropdown before saving has been removed, since any free-text value is now accepted
