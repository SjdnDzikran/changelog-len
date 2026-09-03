---
date: "2026-09-03"
title: "Keep serial test history intact when transferring On-Test stock"
repo: api-wms
product:
  - backend
additions: 37
deletions: 9
---

When a serial number sitting in an On-Test bin was transferred while its parent material batch was still in Recorded status, the system judged the serial by the batch's status and deleted the serial's completed test record during the move, losing its evidence.

- **Test results survive transfers:** A serial number that already has a test result now keeps its Tested Inventory record and all attached photos and documents when it is transferred, even while the parent batch is not finished yet
- **Complete audit trail:** The transfer records where the unit went in the serial's test history, so the paper trail stays intact end to end
- **Untested serials unchanged:** Serial numbers without a test result still follow the existing cleanup flow, keeping stock quantities accurate
