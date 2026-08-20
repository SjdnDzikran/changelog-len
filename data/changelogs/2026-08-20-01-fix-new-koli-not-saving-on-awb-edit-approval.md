---
date: "2026-08-20"
title: "Fix new package rows not saving when approving AWB edit requests"
repo: erp-len-api
product:
  - backend
additions: 7
deletions: 1
---

- **New packages now persist after approval:** When an AWB edit request adds new koli (packages) and a manager approves it, those new rows are now properly written to the database
- **Prevents silent data loss:** Previously, newly added packages during AWB edits would appear accepted in the UI but fail to save, leaving the package count on approved AWBs incomplete
