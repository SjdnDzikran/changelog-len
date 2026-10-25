---
date: "2026-10-25"
title: "Courier and vehicle forms now catch mistakes before saving, with visible errors"
repo: erp-len-ui
product:
  - web
additions: 105
deletions: 9
---

Saving courier and vehicle records was silently failing or leaving users stuck. The forms now validate input and show exactly what went wrong.

- **Branch required, clearly:** Courier and vehicle forms now check that a branch is selected before saving. If it's missing, the form stays open and shows "Pilih cabang terlebih dahulu." instead of failing silently in the background
- **Failed saves are now visible:** Previously, some failed saves (such as a duplicate courier name or a missing record) disappeared without any notification. Every failed save now shows the actual error message from the system, so users know immediately that their data wasn't saved
- **A summary of all problems at once:** When a form has multiple issues, all of them are listed together at the top of the dialog instead of appearing one at a time
- **New records active by default:** New courier and vehicle entries are now automatically set to active, while edits to existing inactive records keep their status unchanged
