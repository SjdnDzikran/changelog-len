---
date: "2026-08-26"
title: "Add reference data management for admins"
repo: len-approval-ui
product:
  - web
additions: 1488
deletions: 30
---

- **New "Reference Data" page:** Admins can now view, add, edit, and deactivate materials and storage locations directly from the Approval app, under the Form Configuration menu
- **Focused on upload-relevant data:** Only materials and storage locations are shown, since those are the reference types used by MRF Inbound Excel uploads
- **Soft activate and deactivate:** Deactivating a reference hides it from new forms without affecting historical records, and it can be reactivated at any time
- **Search and filter:** Find specific entries by keyword, toggle between active-only and all-statuses views, and browse with server-side pagination
