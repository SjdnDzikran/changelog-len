---
date: "2026-10-04"
title: "TMS dashboard map cards redesigned and never clipped"
repo: erp-len-ui
product:
  - web
additions: 142
deletions: 25
---

The TMS dashboard map tooltips became rich status cards, and they now stay fully visible anywhere on the map.

- **Card-style tooltips:** Hovering a kota now opens a polished card with an icon, the area name and province, total AWB count, a delivery-rate badge, a colour-coded status bar, and a breakdown of Terkirim, Di jalan, Menunggu, and Bermasalah counts, plus a hint to click for detail.
- **Cards dodge the edges:** The cards previously could be cut off near the map's borders. They now automatically open above, below, or beside the marker depending on the space available, and slide fully inside the map at corners.
- **Stays put while navigating:** The repositioning also holds after panning, zooming, or resizing the map, and the card's arrow always keeps pointing at the location it describes.
- **Button alignment:** The Live Monitoring button in the page header was resized and aligned to sit evenly with the period tabs.
