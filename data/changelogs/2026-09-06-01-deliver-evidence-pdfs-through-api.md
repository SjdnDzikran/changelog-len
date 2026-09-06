---
date: "2026-09-06"
title: "Deliver evidence PDFs through the API so they can be viewed in the page on any device"
repo: api-wms
product:
  - backend
additions: 175
deletions: 23
---

The WMS API can now deliver the stored PDF test report itself, instead of only handing out a storage link, so the web app can display evidence directly on the page.

- **Evidence served in-app:** The API now streams the stored PDF test report itself to the web app, so reports can be displayed right on the page rather than relying on whatever viewer the browser happens to have
- **Phones finally included:** Mobile browsers have no built-in PDF viewer, so evidence used to download instead of display; with the report delivered through the API, the page can render it on any device
- **Warehouse checks on every view:** Opening a report re-confirms the viewer belongs to the warehouse that owns it, so test evidence stays restricted to the right teams
- **Damaged files caught early:** If a stored file is no longer a valid PDF, the viewer now shows a clear error message instead of quietly failing to open
