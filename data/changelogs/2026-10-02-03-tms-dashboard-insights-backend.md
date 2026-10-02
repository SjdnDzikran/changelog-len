---
date: "2026-10-02"
title: "Power the TMS dashboard with shipment insights and consistent filters"
repo: erp-len-api
product:
  - backend
additions: 1050
deletions: 15
---

Backend support for the new TMS dashboard: shipment totals, destination areas, origin branches, busiest routes, top customers and delivery trends, all computed within each user's own data visibility.

- **One complete dashboard feed:** A single shipment insights summary serves the whole dashboard, covering status totals, per-city breakdowns, origin branches, the busiest routes, top customers and the created-vs-delivered trend, so the page needs fewer round trips and always shows consistent numbers
- **Filter by destination and service:** Shipment lists, searches and exports now support destination province/city and service filters, matching what the dashboard offers, so drilling down from a dashboard figure lands on exactly the same shipments
- **Dashboard and lists always agree:** Destination and origin filtering uses the same rules in both the dashboard and the shipment lists, eliminating cases where a dashboard count opened a list showing a different number
- **Customer accounts handled safely:** Customer login accounts see only their own shipments, and an account that is not yet linked to a customer is shown a clear message until an administrator completes the link, instead of seeing an empty or misleading dashboard
