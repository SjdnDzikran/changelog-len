---
date: "2026-10-20"
title: "Fix serial number references to the correct outbound document"
repo: api-wms
product:
  - backend
additions: 931
deletions: 39
---

When a serial number (such as a shared meter unit) has moved through several outbound documents over its lifetime, outgoing goods records were pointing at the wrong historical document. This release fixes the root cause going forward:

- **Correct document references:** Issuing goods against a serial number now always records the reference and quantity of the outbound document actually being processed, instead of the first one the serial ever appeared on. This affects the Network, BNPB, and XL Home workflows.
- **No more duplicated history:** The XL Home flow previously added an issue history entry for every past document that contained the serial. It now records exactly one entry per real issue.
- **Accurate quantities for sets and special units:** Quantities read for SET and special-unit serials are now summed only across the current document, so repeated serial numbers no longer inflate the totals.
- **Clear error when data is inconsistent:** If a serial is not linked to the document being processed, the system now stops with a clear message in Indonesian instead of silently recording a wrong reference.
- **Faster routing slip history:** A new database index makes the serial history dialog lookup seek directly instead of scanning over 2 million history rows; a sampled production read dropped from about 312 ms to under 100 ms.

Note: past records with wrong references are left untouched for now; a separate, reviewed repair is planned so legitimate history is never accidentally deleted.
