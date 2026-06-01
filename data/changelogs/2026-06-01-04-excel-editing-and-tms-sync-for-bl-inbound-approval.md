---
date: "2026-06-01"
title: "Excel editing and automatic TMS sync for BL Inbound final approval"
repo: len-approval-api
product:
  - backend
  - web
---

Final approvers can now edit BL Inbound items in bulk via Excel, and AWB data is automatically synced to TMS when the form is approved.

- **Excel template for final approval:** Approvers can download a template of the current items, edit quantities, destinations, origins, or moda in Excel, and upload the updated file. Changes appear in the edit table for review before saving
- **Editable Origin and Moda:** These fields can now be changed at the final approval step, not only at the CJ data entry step, giving approvers the flexibility to correct values without sending the form back
- **Automatic TMS AWB sync:** When a BL Inbound is fully approved, AWB records are created or updated in TMS automatically. The system matches by AWB number, resolves the transport mode and origin branch, and syncs item descriptions so both systems stay aligned without manual data entry
- **Orphan AWB cleanup:** AWB records in TMS are automatically deleted when all corresponding items are removed from a BL Inbound, both during final approval editing and after full approval, preventing outdated records from lingering in TMS
- **Immediate WMS sync:** BL Inbound data now syncs to WMS immediately on submit for all workflow types, so warehouse teams see inbound data sooner regardless of the approval flow used
