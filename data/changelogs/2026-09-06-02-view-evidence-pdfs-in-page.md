---
date: "2026-09-06"
title: "View test evidence PDFs directly in the page on phones and desktops"
repo: ui-wms
product:
  - web
additions: 983
deletions: 187
---

Test evidence PDFs now open inside the Tested Inventory page itself, with a viewer that works the same on every device, plus tidier evidence cards in the resolve dialog.

- **Built-in evidence viewer:** Evidence PDFs open directly on the page instead of jumping to a new browser tab or downloading, and the same view now works on phones, which previously could not display PDFs at all
- **Lighter on mobile data:** Only the essential viewer components ship with the app, roughly halving what a phone downloads to open an evidence file, and report pages render as you scroll so long documents stay smooth
- **Everything runs in-house:** The viewer is bundled with the WMS itself rather than loaded from an external source, so previews keep working behind restrictive networks and documents never leave LEN's infrastructure to be displayed
- **Page count at a glance:** The viewer header now shows the total number of pages once a document is open
- **Tidier evidence cards:** In the resolve dialog, long file names, file details, and remove controls now stay neatly inside the evidence card on narrow screens instead of overlapping or spilling out
