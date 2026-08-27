---
date: "2026-08-27"
title: "Add full reference data management for the Approval system"
repo: len-approval-api
product:
  - backend
additions: 8450
deletions: 87
---

**Admin reference data panel:** Admins can now create, edit, search, and manage eight types of operational and pricing reference data directly from the system: materials, storage locations, pickup/delivery types, local transport modes, pricing modes, moda aliases, normal tariffs, and charter tariffs. Previously these could only be changed through database scripts or CSV imports.

**Safe deactivation instead of deletion:** Every reference entry can be activated or deactivated without deleting it. Inactive entries are hidden from form pickers and dropdowns, but historical records that already reference them remain intact.

**Non-destructive CSV imports:** Pricing imports now reconcile with existing data by updating matching routes in place, rather than wiping the entire table first. Manually added tariffs and deactivated entries survive a CSV refresh.

**Non-destructive seed scripts:** The material and storage location seed scripts now insert only missing values and never delete or overwrite existing rows, so manual edits and deactivations are preserved across script re-runs.