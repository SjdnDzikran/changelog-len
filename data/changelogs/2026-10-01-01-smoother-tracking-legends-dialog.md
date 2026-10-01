---
date: "2026-10-01"
title: "Smoother tracking map with clearer legends and route detail popups"
repo: erp-len-ui
product:
  - web
additions: 636
deletions: 519
---

A round of polish on Live Monitoring and the tracking map: legends now tell the truth about what is on the map, opening a shipment's detail shows the same numbers as the list, and map movements no longer flash or land on grey squares.

- **Honest legends:** Every tracking map now has a legend card that lists only the colours and marks actually drawn; two maps never explain the same colour with different meanings again
- **Route detail in the popup:** Clicking Lacak on a manifest or courier run now opens a detail window that shows its full destination list and the same delivery progress bar as the list, so the two views never disagree
- **Vendor destinations named:** A vendor manifest now shows the actual cities or regencies its shipments are going to, not just a blank destination
- **Smoother map flights:** Zooming across the country fades the route lines during the move and preloads the destination map tiles, so the map lands sharp instead of flashing a giant dot or grey squares
- **Calmer refreshes:** Map updates that bring nothing new no longer redraw the route, so the pulsing position markers keep running without flicker
