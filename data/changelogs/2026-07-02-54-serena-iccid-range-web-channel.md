---
date: "2026-07-02"
title: "Add SERENA channel pages across the warehouse management dashboard"
repo: ui-wms
product:
  - web
additions: 1067
deletions: 81
---

**SERENA channel in the WMS web app:** Serena is now fully integrated into the warehouse management interface, with dedicated pages and adapted table columns reflecting the Serena-specific data shape (ICCID ranges, vendor, purchase order, batch, and date instead of SIMCARD-specific fields like expiry, brand, and position)

- **Dashboard card and charts:** A new "Total Serena" stock card appears on the dashboard, linking to the Serena inventory page. Serena inbound and outbound quantities are also tracked on the dashboard trend line charts alongside existing channels
- **Inbound pages:** Serena appears as a selectable channel in the inbound grid. The inbound detail page shows adapted columns (No PO, DATE, Vendor) and supports Excel template download for Serena-specific item upload, allocation confirmation, and item deletion
- **Inbound monitoring:** The monitoring page renders Serena items in the ICCID-range table layout with Serena-appropriate headers, and supports downloading monitoring reports filtered to Serena items
- **Outbound pages:** Serena outbound items can be uploaded via Excel template, monitored with status filtering, and confirmed for goods issue through the dedicated Serena endpoints
- **Inventory pages:** Serena inventory uses its own dedicated endpoint with material group filtering, inventory detail drill-down by material number, and routing slip status tracking
- **Inventory adjustment:** The adjustment page includes Serena in the channel launcher, shows a Serena-specific picker with ICCID From/To columns, and supports Serena-shaped save payloads with ICCID range adjustment fields
- **Change material:** The change material detail page displays a Serena-specific item list with Material New and Vendor columns, supports confirm, upload, delete, and template download for Serena change material operations
- **Data WMS reporting:** Serena appears as a selectable filter tab on the Data WMS reporting page
