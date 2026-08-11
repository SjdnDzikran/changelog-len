---
date: "2026-08-11"
title: "Fix inventory transfer for serials with retained quality inspection history"
repo: api-wms
product:
  - backend
additions: 145
deletions: 13
---

- **Released serials can transfer:** Serials that have already passed quality inspection but still carry historical QI restriction links can now be moved between warehouse bins without being incorrectly blocked
- **Checks current stock state:** The transfer guard now verifies whether a serial is actively in QI by checking its current stock bucket, rather than relying on the presence of a historical restriction link, so audit history is preserved without blocking valid moves
- **Clear operator guidance:** When a serial genuinely cannot be transferred due to incomplete QI data, the error message now tells the operator to contact the administrator instead of asking them to run data reconciliation
