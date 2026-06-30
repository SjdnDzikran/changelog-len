---
date: "2026-06-30"
title: "Overhaul BL Outbound draft editing workflow"
repo: len-approval-ui
product:
  - web
additions: 608
deletions: 177
---

Comprehensive improvements to the BL Outbound form make draft creation, editing, and submission more flexible and reliable.

- **Create empty drafts:** The form no longer requires stock items to be selected before saving, so users can start a request and add items later
- **Consistent editing experience:** Editing a saved draft now opens the same creation page instead of a separate view, matching the BL Inbound workflow
- **Template download and Excel upload:** Download Template and Upload Excel buttons are activated once a draft is saved, enabling bulk data entry via spreadsheet
- **Clearer validation messages:** Submit checks are split into distinct warnings per item, telling users exactly which field is missing or which quantity exceeds remaining stock
