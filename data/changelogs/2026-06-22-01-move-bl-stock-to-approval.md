---
date: "2026-06-22"
title: "Move BL stock management from WMS to Approval system"
repo: len-approval-ui
product:
  - backend
  - web
additions: 12378
deletions: 1203
---

BL inventory is now tracked natively in the Approval system instead of being synced to WMS. This is a full migration of the BL stock lifecycle, from receiving stock through inbound approval to issuing stock through outbound approval.

- **Automatic stock recording on inbound approval:** When a BL inbound form is approved, every item on the form is automatically recorded as in-stock inventory inside the Approval system, with full quantity tracking and remaining balance calculations.
- **Automatic stock issuance on outbound approval:** When a BL outbound form is approved, the picked quantities are deducted from inventory. Items are marked "Held" if partially issued or "Issued" when fully consumed.
- **Live stock monitoring page:** A new "BL Stock Monitoring" page shows summary cards (In Stock, Held, Issued, Total Remaining Qty) and a filterable data grid. Users can search by AWB or part number, change AWB numbers on un-issued items, and the grid auto-refreshes when stock changes elsewhere in the system.
- **Pick from Stock on outbound forms:** A "Pick from Stock" button on the BL outbound form editor opens a searchable panel of available inventory. Users select items, specify issue quantities, and attach them directly to the form without leaving the page.
- **WMS BL pages decommissioned:** All BL-related pages in WMS, including inbound monitoring, outbound monitoring, delivery forms, and inventory management, now redirect to the dashboard. The WMS API also blocks BL requests with a message directing users to the Approval system.
- **Existing stock migrated:** All on-hand BL inventory records from WMS have been migrated into the new Approval ledger, preserving historical data. A backup of the original WMS data was created before migration.
- **Approved inbound confirmation banner:** When viewing an approved BL inbound form, a green confirmation banner now shows that items have been recorded as stock.
