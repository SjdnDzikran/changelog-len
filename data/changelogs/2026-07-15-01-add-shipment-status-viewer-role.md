---
date: "2026-07-15"
title: "Add restricted Shipment Status Viewer role with confidential export gating"
repo: erp-len-api
product:
  - backend
additions: 254
deletions: 57
---

A new role and permission system lets external stakeholders track shipment progress without accessing sensitive operational data.

- **New "Shipment Status Viewer" role:** A read-only role for partners or clients who need to check shipment progress but should not see internal details. Viewers access only the Shipment Status menu and can export reports, but their exports omit per-item weights, the detailed per-koli breakdown, and the full status history
- **Opt-in confidential permission:** A new "View Confidential Shipment Data" permission controls who receives the full, unredacted export. Only Admin, Super Admin, TMS Operator, Warehouse Manager, and Warehouse Operator roles receive this permission by default, keeping restricted users on a need-to-know basis
- **Customer-scoped visibility:** Like TMS Operators, Shipment Status Viewers are limited to the customers assigned to them on the User Access page. Each viewer only sees and exports data for their own customers, preventing cross-customer data exposure
- **Redacted shipment metrics:** When exporting without the confidential permission, the "Total Colli," "Total Weight," and "Total Volume" columns are hidden from the spreadsheet, and only the summary information sheet is generated
