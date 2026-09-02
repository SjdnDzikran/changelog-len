---
date: "2026-09-02"
title: "Add a privacy guard on the public tracking page"
repo: erp-len-ui
product:
  - web
additions: 16
deletions: 1
---

The public tracking page now hides internal notes attached to delivery assignment steps, adding a second layer of protection on top of the server-side cleanup.

- **Internal notes hidden:** Delivery assignment steps no longer display notes containing driver names, license plates, or aircraft and vessel details
- **Covers historical records:** The page filters these details on its side, so even older entries stored before the server-side fix stay clean
- **Safe to share:** Customers can pass tracking links to their own clients without risking exposure of internal operational information
