---
date: "2026-05-09"
title: "Redesign manifest dispatch notification email"
repo: erp-len-api
product:
  - backend
---

The notification email sent when a manifest is dispatched has been completely redesigned with a new layout that puts the most important information front and center.

- **Route hero** at the top prominently shows the origin and destination, so recipients immediately know which shipment the email is about
- A compact **facts table** groups key details like driver name, vehicle, dispatch time, and manifest number in a scannable two-column layout
- A **horizontal summary row** displays total AWB count, weight, volume, and koli at a glance without scrolling
- The AWB detail table now includes a bold **TOTAL footer row** so recipients can quickly verify shipment totals
- The table is wrapped in a **scrollable container** for comfortable reading on mobile phones
- Overall padding and spacing have been reduced throughout the email for a denser, more information-rich layout
- The "View Manifest Detail" button now always links to the production OMS, ensuring email links work reliably regardless of which server sent the notification
