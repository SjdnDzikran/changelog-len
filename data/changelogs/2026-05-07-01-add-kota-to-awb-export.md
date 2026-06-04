---
date: "2026-05-07"
title: "Show origin-to-destination city in AWB exports"
repo: erp-len-api
product:
  - backend
deletions: 13
additions: 125
---

AWB export reports now include a **Kota** column that displays the origin branch city and destination regency (e.g., "Jakarta-Bandung"). City and regency names are automatically cleaned of prefixes like "Kota" and "Kabupaten" and formatted consistently for readability.

The previous "Desa Pickup" column has been renamed to **Tujuan** to better reflect the actual destination data being shown.

This applies to both individual AWB exports and bulk shipment status exports.
