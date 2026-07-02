---
date: "2026-07-02"
title: "Add SERENA as a new ICCID-range warehouse channel"
repo: api-wms
product:
  - backend
additions: 3542
deletions: 10
---

**New SERENA channel (CdMatCode=7):** Serena is now available as a material channel across the entire WMS backend, enabling warehouse teams to manage Serena ICCID-based inventory alongside existing channels like SIMCARD AXIS and SIMCARD XL

- **Inbound with Excel upload:** Upload Serena items from a spreadsheet template with columns for ICCID From, ICCID To, Qty, Vendor, Material, No PO, Batch, and Date. The system validates that quantities match ICCID ranges, rejects overlapping ICCID ranges for the same material, and verifies materials against the master data
- **Inventory tracking:** Serena stock is tracked independently with its own inventory tables, showing ICCID ranges, quantities received and live, vendor, material, purchase order, and batch. Inventory detail views allow drilling into items by material number, and a routing slip tracks status changes over time
- **Outbound with Excel upload:** Upload outbound items from a template, then confirm goods issue. The system reserves stock by ICCID range, reduces live quantities, and records status transitions from requested to issued
- **Inventory adjustment:** Adjust Serena inventory quantities by changing ICCID ranges. When quantity increases, a new inbound record is created automatically. When quantity decreases, an outbound record is created. Deleting an adjustment reverses the ICCID range changes back to original values
- **Change material:** Upload a spreadsheet to change the material code and vendor of existing Serena inventory items in bulk, with confirm and cancel workflow
- **Data WMS reporting:** Serena stock levels appear in the Data WMS reporting page with its own dedicated query endpoint, filtering by material group
- **Comprehensive regression tests:** Added test suites covering ICCID range validation, overlap detection, outbound ordering, full-consume quantity calculation, query correctness, and template shape contracts
