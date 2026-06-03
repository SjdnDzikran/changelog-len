---
date: "2026-06-03"
title: "Add AWB tracking and monitoring pages"
repo: len-approval-ui
product:
  - web
---

A new AWB Tracking page in the Monitoring section lets operations staff browse, filter, and drill into individual shipment statuses without leaving the Approval app. Clicking any row opens a detail popup with the full event timeline.

- **Paginated AWB table:** All synced AWBs are displayed in a searchable table with columns for form number, transport mode, AWB number, status, manifest, DRS, and last sync time
- **Detail popup:** Click the search icon on any row to open a dialog showing full shipment details (sender, recipient, weight, dates) plus a visual status history timeline
- **Filter bar:** Narrow results by date range, transport mode (Darat, Laut, Udara), AWB status (Booking through Delivered), and free-text search across AWB, manifest, and DRS numbers
- **Color-coded transport modes:** Moda labels appear as tinted pills (blue for Darat, cyan for Laut, purple for Udara) across both the AWB Tracking and BL Outbound Lifecycle pages, making transport types instantly recognizable
- **Sidebar navigation:** AWB Tracking is now accessible from the Monitoring submenu in the left sidebar, alongside BL Outbound Lifecycle
