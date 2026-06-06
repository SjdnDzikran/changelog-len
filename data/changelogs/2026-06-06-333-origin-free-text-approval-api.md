---
date: "2026-06-06"
title: "Remove Origin branch mapping from Excel templates and TMS sync"
repo: len-approval-api
product:
  - backend
additions: 9
deletions: 65
---

- **Simplified Excel templates:** Downloaded templates for BL Inbound, BL Outbound, and Pickup Domestic no longer include a dropdown validation list for the Origin column, so any value can be typed directly
- **TMS sync simplified:** The origin-to-branch mapping step is no longer performed when syncing approved forms to the TMS system
