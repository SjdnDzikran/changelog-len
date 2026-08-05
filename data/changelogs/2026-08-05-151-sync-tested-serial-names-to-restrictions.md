---
date: "2026-08-05"
title: "Keep serial numbers in sync after quality testing"
repo: api-wms
product:
  - backend
additions: 174
deletions: 5
---

- **Serial numbers update across views:** When a serial number is reassigned during quality testing (e.g., from a placeholder to a physical reading), the updated number now appears in the Inventory Under Restriction list immediately instead of showing the old value
- **All three update paths covered:** The sync applies when serials are tested through the normal upload flow, when candidates are approved, and when serials are replaced, ensuring consistency across all testing scenarios
- **Reconciliation script included:** A SQL repair script is provided to fix any existing mismatched serial numbers from before this fix, so historical data can be corrected in one pass
