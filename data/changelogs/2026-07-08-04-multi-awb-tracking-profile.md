---
date: "2026-07-08"
title: "Track up to 10 AWB numbers at once from the company profile"
repo: len-react
product:
  - web
additions: 981
deletions: 470
---

The public tracking page on the company profile now supports entering multiple AWB numbers at once, with an adaptive layout that shows a sidebar summary on desktop and an accordion on mobile.

- **Multi-AWB chip input:** Visitors can enter AWB numbers by typing and pressing Enter, or paste a comma-separated list to add several at once. Each number appears as a removable chip, with a clear counter showing how many have been added (capped at 10)
- **Desktop master-detail layout:** On wide screens, a sticky sidebar lists all tracked shipments with their latest status and location, while the main panel shows the full detail and delivery timeline of the selected shipment
- **Mobile accordion view:** On smaller screens, results collapse into an expandable accordion so visitors can inspect one shipment at a time without scrolling through a long page
- **Seamless single-AWB experience:** Tracking just one number shows the same detailed view as before, so the upgrade is invisible to returning visitors
