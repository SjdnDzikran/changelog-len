---
date: "2026-06-01"
title: "Multi-step Origin, Moda, and AWB data entry for BL Inbound forms"
repo: len-approval-api
additions: 302
deletions: 26
product:
  - backend
  - web
---

BL Inbound data entry is now split into separate workflow steps, so each team fills in only the data they own instead of one team handling everything.

- **Origin and Moda via Excel:** CJ teams can download an Excel template pre-filled with item IDs, box numbers, and part numbers, then fill in Origin (with branch dropdown validation) and Moda columns and upload the completed file. This replaces manual one-by-one entry for forms with many items
- **Step-specific editing:** AWB entry controls only appear at workflow steps specifically named for AWB entry, while Origin and Moda controls only appear at the CJ data entry step. Each team sees only the fields they are responsible for, reducing confusion and errors
- **Creator access restored:** Form creators are no longer blocked from managing AWB numbers at the LEN AWB Entry step after submission, so the original submitter can fill in AWB data when the workflow reaches that step
- **Draft creation without items:** Pickup Domestic forms can now be saved as drafts without requiring any items upfront, letting teams start a form and add items later
