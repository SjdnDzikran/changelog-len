---
date: "2026-11-11"
title: "Request test-result corrections from Tested Inventory"
repo: ui-wms
product:
  - web
additions: 260
deletions: 19
---

Staff can now submit correction requests for the recorded test results of tested serial numbers, directly from the Tested Inventory screen.

- **New result fields in the request form:** In Tested Inventory > Per S/N, the correction request dialog now offers Condition, Completeness, and Power On Test dropdowns, each showing the currently recorded value so staff can see what they are changing
- **Only real changes are sent:** Fields left untouched are excluded from the request, so the reviewer sees exactly what is being asked; a reason is still required, and requests that would change nothing cannot be submitted
- **Clear impact explanation:** Both the request and the review dialogs now explain that these corrections fix recorded test results rather than moving stock between Available, QI, and Blocked, and that stock which has changed, moved, or been retested only receives a historical correction
- **Failed drafts kept for retry:** If a submission fails, the filled-in draft stays open for an immediate retry, and duplicate submissions are blocked while a request is waiting
