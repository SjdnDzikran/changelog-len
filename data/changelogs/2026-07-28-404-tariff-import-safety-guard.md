---
date: "2026-07-28"
title: "Block tariff imports that would silently erase the pricing master"
repo: len-approval-api
product:
  - backend
additions: 247
deletions: 4
---
- **Import safety check:** A tariff import that parses zero rows is now rejected outright, and one that would shrink the stored data below half is blocked unless explicitly approved, preventing a bad file from destroying the entire pricing database
- **Clear error messages:** When an import is blocked, the response tells the operator exactly how many rows were parsed versus how many exist, so the cause (format error, wrong file, locale mismatch) is immediately clear
- **Override for deliberate changes:** If the reduction is intentional, the operator can re-run the import with a confirmation flag that acknowledges the risk
