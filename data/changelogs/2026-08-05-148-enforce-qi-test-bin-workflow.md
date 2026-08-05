---
date: "2026-08-05"
title: "Enforce quality inspection workflow when moving stock to Test Bin"
repo: api-wms
product:
  - backend
  - web
additions: 385
deletions: 23
---

- **Ordinary stock moved to Test Bin creates QI restriction automatically:** When warehouse staff transfer regular inventory into a registered Test Bin, the system now creates a Quality Inspection restriction behind the scenes, ensuring all test-bound stock follows the proper QI lifecycle
- **Restricted QI stock must use Send to Test:** Active QI-restricted serials can no longer bypass the inspection workflow through a general transfer; the system blocks the move and directs staff to use the dedicated Send to Test action from Inventory Under Restriction
- **Clearer guidance in Bahasa Indonesia:** The transfer screen now explains the workflow steps in Indonesian: ordinary stock transferred to Test Bin is recorded as QI, and restricted stock should go through Send to Test
- **Test Bin detection is more accurate:** The "Can Send to Test" indicator no longer appears for QI rows already sitting in a Test Bin, preventing redundant actions
