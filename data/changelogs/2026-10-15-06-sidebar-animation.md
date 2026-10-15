---
date: "2026-10-15"
title: "Smooth the sidebar expand and collapse animation"
repo: ui-wms
product:
  - web
additions: 198
deletions: 2
---

Collapsing the navigation sidebar is now a fluid animation instead of an abrupt snap.

- **Fluid transitions:** The sidebar and the page content beside it now glide smoothly over 300 milliseconds when expanding or collapsing, instead of jumping instantly between states
- **Graceful label fading:** Menu titles, section captions and badges fade and slide away as the sidebar compacts, rather than disappearing mid-word, and reappear cleanly on expand
- **Charts keep their size:** A resize signal fires after the animation finishes, so charts and tables beside the sidebar re-fit to the new width without being cut off mid-transition
