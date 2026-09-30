---
date: "2026-09-30"
title: "Live monitoring map and list rebuilt for clarity and speed"
repo: erp-len-ui
product:
  - web
additions: 1167
deletions: 276
---

A major visual refresh of the Live Monitoring page (the two monitoring PRs merged that day), making the map and the shipment list easier to read, smoother to use, and honest about what each pin means.

- **New look, more map:** the page gets a compact branded header and a tighter layout, so the map fills the whole screen below the controls instead of scrolling.
- **Clearer shipment cards:** each trip row shows its route as "origin → destination" (with real destination cities for vendor trips, since those have no destination branch), departure time, and a progress bar of how many AWBs are done versus still moving. Alerts appear as a clear "Needs attention" highlight.
- **Better map behavior:** clicking a shipment draws its full route; routes now cross-fade when switching, the view flies straight to the selected route, and a "show all" button returns to the overview. Pins no longer get covered by background icons, so every pin is clickable.
- **Interactive legend:** the map's color key moved into a collapsible legend panel that adapts to what is on screen, explaining every pin, line, and pulse instead of a static footnote.
- **Smoother transitions:** tabs, filters, and route loads now animate as one movement, with new rows fading in and no page jumping.
