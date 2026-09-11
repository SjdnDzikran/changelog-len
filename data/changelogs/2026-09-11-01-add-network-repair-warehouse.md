---
date: "2026-09-11"
title: "Add a dedicated Network repair warehouse"
repo: api-wms
product:
  - backend
additions: 402
deletions: 10
---

Repair work for Network items now has its own home: a new warehouse at Pondok Ungu, dedicated entirely to repair activity. Until now, repair stock lived inside the main Network warehouse alongside live operations. This release also tightens how bulk stock adjustments are scoped.

- **New "Pondok Ungu - Network (Repair)" warehouse:** A separate warehouse now exists just for Network repair work, so repaired items and their stock are kept apart from the main Network warehouse instead of mixed together.
- **Ready to use immediately:** Everyone with access to the main Network warehouse automatically gets access to the repair warehouse, and serial number tracking is switched on there by default, matching how the main Network warehouse operates.
- **Stock adjustments stay in their lane:** Bulk inventory adjustments now only read and update stock in the warehouse the signed-in operator is assigned to. Repair staff can no longer accidentally change stock belonging to the main Network warehouse.
- **Careful, check-first rollout:** The warehouse was set up on both environments with a process that verifies all existing data before saving anything and refuses to run when it finds conflicts. It starts completely empty, with no stock, no storage locations, and no transactions, so the team can build it out cleanly.
