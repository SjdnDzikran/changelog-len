---
date: "2026-07-22"
title: "Partially resolve Tested Inventory serials without completing the full batch"
repo: api-wms
product:
  - backend
additions: 488
deletions: 44
---

- **Resolve by serial number:** Individual serial numbers can now be marked with test results (Condition, Completeness, Power On Test) and released for outbound one at a time, instead of requiring the entire batch to be resolved together
- **Resolve by material group:** All unresolved serial numbers belonging to a specific material within a batch can be resolved in a single action, applying the same test result to every item in that group
- **Immediate outbound eligibility:** Resolved serial numbers are released from Quality Inspection restriction right away, so they can be included in outbound shipments even while other serials in the same batch are still pending
- **Automatic batch completion:** The batch status automatically flips to "Tested" only when the very last serial number is resolved, keeping progress tracking accurate throughout the partial resolve process
- **Photo presence tracking:** The Per S/N reporting view now shows whether each serial has uploaded photos, and results can be filtered to show only serials with or without photos