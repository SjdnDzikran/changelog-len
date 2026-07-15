---
date: "2026-07-15"
title: "Add Test Bin validation and filtering for quality inspection transfers"
repo: api-wms
product:
  - backend
additions: 207
deletions: 1
---

Quality inspection items can now only be transferred to officially registered Test Bins, and inbound allocation counts are fixed for inspected and blocked stock.

- **Test Bin destination validation:** When sending a quality inspection item to a test bin, the system verifies that the chosen destination is a registered Test Bin for the user's warehouse. Invalid destinations are rejected with a clear error message, preventing accidental transfers to the wrong storage location
- **Dedicated Test Bin lookup:** A new endpoint returns only the storage locations that contain registered Test Bins, grouped by their parent location, so the frontend can offer only valid destinations in its dropdowns
- **Fixed inbound allocation display:** The inbound stock view now correctly counts items that are fully in quality inspection or fully blocked as "allocated." Previously, these batches showed zero allocated quantity because only the available-stock column was counted, making inventory reports appear incomplete
