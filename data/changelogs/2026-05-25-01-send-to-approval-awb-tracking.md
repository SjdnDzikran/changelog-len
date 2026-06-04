---
date: "2026-05-25"
title: "Redesign BL outbound approval workflow with AWB tracking and expanded shipment data"
repo: api-wms
product:
  - backend
deletions: 0
additions: 4
---

- **Manual "Send to Approval" replaces automatic sync:** Outbound forms are no longer pushed to Approval automatically when staff upload the Excel file. Warehouse staff can now review, edit, and validate all required fields at their own pace before manually submitting, preventing incomplete data from reaching the approval queue
- **AWB inventory search and bulk reassignment:** A new inventory lookup lets staff search by AWB number and see all items assigned to it. AWB numbers can be reassigned in bulk by selecting multiple items and entering a new number, useful when shipments are consolidated or corrected
- **Available AWB list:** Staff can browse all AWB numbers currently in stock, filter by search term, and see the quantity and transport mode for each, making it easier to select the right AWB when building an outbound
- **Branch-sourced Origin field:** Origin is now pulled from the branch master data via the Approval service instead of being entered as free text, ensuring consistent naming across WMS and downstream systems
- **Expanded outbound data fields:** Each outbound item now carries AWB number, weight (kg), length, height, width (cm), and packing kayu cost, giving downstream teams the dimensional and cost data they need for shipment booking and costing
