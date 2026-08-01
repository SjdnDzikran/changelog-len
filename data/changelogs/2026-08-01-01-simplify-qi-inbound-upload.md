---
date: "2026-08-01"
title: "Simplify QI inbound with one-row-per-material upload and one-click confirmation"
repo: api-wms
product:
  - backend
additions: 1282
deletions: 29
---

- **Simplified upload template:** Operators can now record one row per material with a total quantity, instead of filling one row per individual serial number. The system automatically expands each row into individual units behind the scenes, keeping the rest of the inbound pipeline unchanged.

- **One-click QI confirmation:** Quality Inspection batches no longer require a separate download-and-reupload step for confirmation. Since the information the confirmation spreadsheet was collecting (storage Bin and MaterialType) is already known from the QI template, operators can confirm and allocate in a single action.

- **Pending serial numbers:** Units created through the simplified flow start with a placeholder serial number that is filled in later by scanning on the Tested Inventory screen. This keeps inventory counts accurate from the start, while preventing placeholder units from being transferred or shipped before they are properly identified.

- **Corrected inbound counts:** Inbound batches that are entirely in Quality Inspection or Blocked status now report their correct quantities across all status views (Recorded, Verified, Recorded Serial Number), instead of showing zero until they reach the Allocated stage.