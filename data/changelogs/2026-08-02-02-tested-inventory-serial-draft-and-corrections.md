---
date: "2026-08-02"
title: "Add serial number identification and approval-gated corrections for Tested Inventory"
repo: api-wms
product:
  - backend
  - web
additions: 3902
deletions: 68
---

Tested Inventory now supports capturing physical serial numbers before test resolution, and allows corrections to already-tested data through an approval workflow instead of direct editing.

- **Serial number capture per material and pallet:** Operators can scan or type physical serial numbers for each material and inbound remark group (e.g., per pallet) before recording test results. The Per Material grid shows identification progress directly on each row (e.g., "S/N 3/10"), and a dedicated dialog with real-time duplicate checking lets operators fill in serials one at a time
- **Provisional unit visibility:** Serial numbers that have not yet been identified appear with a yellow "Menunggu S/N" (Waiting for S/N) badge in the Per S/N grid. These rows are highlighted and prevented from being resolved or receiving photos until their identity is recorded
- **Approval-gated corrections:** Tested serial numbers can now be corrected through a request-and-approval workflow. Operators submit changes to serial number, MAC address, remark, or photos with a mandatory reason, and a WMS Super Administrator reviews the old/new diff before approving or rejecting
- **Correction review queue:** A new "Persetujuan Perubahan" (Change Approval) tab in Tested Inventory shows all correction requests filtered by status, with a badge counter for pending items and a detailed review dialog that includes photo previews
- **Dashboard split:** The Inventory On Test dashboard card now separates work in progress from completed testing. Both numbers always reconcile to the same total, so operators can see at a glance how many units still need results versus how many are ready to be racked
