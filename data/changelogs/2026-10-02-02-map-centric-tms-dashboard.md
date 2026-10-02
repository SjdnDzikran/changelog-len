---
date: "2026-10-02"
title: "Rebuild the TMS dashboard around a live shipment map"
repo: erp-len-ui
product:
  - web
additions: 2855
deletions: 879
---

The TMS dashboard has been rebuilt from a list of totals into a map-first operations view that answers "where are our shipments and what needs attention" at a glance.

- **Interactive Indonesia map:** Destination cities appear as bubbles sized by shipment volume, origin branches as markers, and the busiest routes as connecting lines; hovering shows each city's delivery progress and problem counts, and clicking a city filters the whole dashboard to it
- **Dashboard-wide filters:** Filter by period, customer, origin branch, service type and destination province or city; the filters stay in the web address, so refreshing, sharing the link or going back returns to the exact same view
- **Created vs delivered trend:** A new trend chart shows how many shipments were created against how many were delivered, per day or per month depending on the range, with hover details for each date
- **Rankings and action queue:** Top destination cities, customers and origin branches are ranked by volume with delivery rates, and a "Perlu Tindakan" panel gathers everything waiting on staff: problem shipments, AWBs missing manifests or delivery sheets, and bookings waiting for pickup
- **Every figure is a doorway:** Each number and chart segment opens the matching AWB or pickup list with the same dates, statuses and filters already applied, so a count on the dashboard and the list it opens always agree
