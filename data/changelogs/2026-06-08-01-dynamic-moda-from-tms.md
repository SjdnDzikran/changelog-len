---
date: "2026-06-08"
title: "Transport modes now sync automatically from TMS"
repo: len-approval-api
product:
  - backend
  - web
additions: 258
deletions: 78
---

- **Live from TMS:** The transport mode (Moda) dropdown no longer uses a fixed list of Darat, Laut, and Udara. Options are pulled directly from TMS, so any new transport mode added in TMS appears in Approval automatically, with no code change needed
- **Active-only filtering:** Only transport modes marked as active in TMS are shown, preventing outdated or disabled modes from appearing in dropdowns and Excel upload templates
- **Need Approval:** The Moda field in the final approval edit dialog is now a dropdown selector instead of a free-text input, reducing data entry errors and keeping values consistent with TMS
- **Excel templates:** Upload templates now use a hidden-sheet reference for the Moda dropdown, removing the 255-character limit that previously capped the number of available modes
