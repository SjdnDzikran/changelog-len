---
date: "2026-07-15"
title: "Restrict shipment detail access for viewers without full AWB permissions"
repo: erp-len-ui
product:
  - web
additions: 80
deletions: 20
---

The web interface now respects the new Shipment Status Viewer role by hiding sensitive navigation and making the confidential data permission easy to manage.

- **Gated AWB detail access:** Users with the Shipment Status Viewer role see AWB numbers as plain text instead of clickable links, and the "View AWB Details" action button is removed from the shipment status list, preventing navigation to the full AWB page they are not authorized to view
- **TMS menu for restricted viewers:** Users who only have POD access (such as Shipment Status Viewers) now correctly see the TMS Operations section in the sidebar, so they can navigate to the Shipment Status page without needing broader TMS permissions
- **Confidential permission in Role Editor:** The "View Confidential Shipment Data" permission now appears under the TMS Operations category in the Role Permissions screen with a lock icon and a searchable description, making it easy for admins to find and assign to the appropriate roles
- **Customer scoping on User Access page:** The customer mapping tab now lists users with the Shipment Status Viewer role alongside TMS Operators, so admins can assign specific customers to shipment-only viewers
