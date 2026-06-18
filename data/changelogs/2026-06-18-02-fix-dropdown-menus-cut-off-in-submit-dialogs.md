---
date: "2026-06-18"
title: "Fix dropdown menus cut off inside submit dialogs"
repo: len-approval-ui
product:
  - web
additions: 14
deletions: 4
---

- **Dropdowns no longer clipped by dialog borders:** When filling out BL/DO Inbound or Pickup Domestic Delivery forms, the recipient list dropdowns previously had their option panels cut off by the submit dialog edges. Users could not see all available choices. The dropdowns now render at the page level, so the full list is always visible.
- **Applies across all recipient fields:** The fix covers both the regular recipient list dropdown and the WhatsApp recipient list dropdown on the affected forms, ensuring consistent behavior.
