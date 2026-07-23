---
date: "2026-07-23"
title: "Resolve tested inventory to Available or Blocked stock"
repo: api-wms
product:
  - backend
additions: 197
deletions: 37
---

- **New "Blocked" outcome:** When resolving tested items, operators can now choose to move stock into Blocked status instead of releasing it to Available. Blocked stock cannot be used for outbound but can still be relocated between bins.
- **Per-item control:** Each serial number can be assigned its own outcome (Available or Blocked) within a single resolve request, so a batch of tested items can be split between the two statuses in one step.
- **Accurate quantity tracking:** When items are moved to Blocked, the system correctly transfers the quantity from the Quality Inspection bucket to the Blocked bucket and creates an active restriction record, so stock counts remain accurate at every stage.
