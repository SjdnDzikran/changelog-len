---
date: "2026-06-03"
title: "Add AWB tracking and monitoring from TMS"
repo: len-approval-api
product:
  - backend
---

New monitoring capabilities let users look up any AWB number to see its full shipping status and event history pulled directly from TMS. A companion paginated list shows all synced AWBs with filters for date, transport mode, and status, so operations teams can track shipments without switching to the TMS system.

- **Standalone AWB lookup:** Enter any AWB number to see sender, recipient, weight, transport mode, manifest number, DRS number, and a chronological event timeline
- **Searchable AWB list:** Browse all outbound AWBs in a paginated table with filters for date range, transport mode (Darat, Laut, Udara), current status, and free-text search across AWB, manifest, and DRS numbers
- **Live TMS status:** AWBs that have not yet synced their status from a booking link now fetch the latest status directly from TMS on each page load, so the list always reflects reality
- **Complete coverage:** The AWB list now queries form item records instead of only booking links, so AWBs that were created without a formal booking still appear in the monitoring table
