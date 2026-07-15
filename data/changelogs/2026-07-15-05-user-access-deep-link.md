---
date: "2026-07-15"
title: "Add direct navigation to user access from the Users list"
repo: erp-len-ui
product:
  - web
additions: 252
deletions: 22
---

Admins can now jump straight to a user's access configuration from the Users list, with a highlighted focus banner and role badges for quick identification.

- **Manage Access shortcut:** A new "Manage Access" button appears on each user row in the Users list for users with eligible roles (TMS Operator, Shipment Status Viewer, Vendor, or Agent). Clicking it opens the User Access page filtered to that specific user, eliminating the need to search manually
- **Focus banner:** When navigating from the Users list, a highlighted banner at the top shows which user's access is being managed, with a "Show all" button to clear the focus and return to the full list
- **Role column on Customer tab:** The Akses Pengguna Customer tab now displays each mapped user's customer-scopable roles as badges, making it easy to see at a glance whether someone is a TMS Operator or Shipment Status Viewer
- **Searchable User dropdown:** The User selector in the customer create/edit dialog now supports typing to search, with the user's role shown as a sub-label for quick identification without scrolling through the full list
