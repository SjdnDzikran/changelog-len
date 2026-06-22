---
date: "2026-06-22"
title: "Add BL Stock Report with Excel export and team-based access"
repo: len-approval-ui
product:
  - backend
  - web
additions: 808
deletions: 141
---

A new dedicated reporting page for BL inventory stock is now available under a "Reporting" section in the sidebar. The page includes filtering, pagination, and Excel download capabilities, with access restricted to authorized teams.

- **BL Stock Report page:** A new "Reporting > BL Stock Report" page displays a filterable, paginated table of all BL inventory records. Users can search by AWB number, part number, and status, with a Refresh button to reload data on demand.
- **Excel export with one click:** Clicking "Export Excel" downloads a spreadsheet of all records matching the current filters, including BL number, status, AWB, part number, box details, quantities, moda, origin, and creation date. The file is named with the current date for easy reference.
- **Team-based access control:** The Reporting menu and BL Stock Report page are only visible to admin users and members of designated teams (BL Operations, CJ Logistics, WMS Operators, BL Operators). Other users cannot see or access the page.
- **BL number displayed in report:** Each inventory row now shows its associated BL number, linking stock records back to the original inbound form. Records from the initial migration show "MIGRATION" as the BL number.
