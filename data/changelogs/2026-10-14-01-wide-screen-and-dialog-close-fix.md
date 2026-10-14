---
date: "2026-10-14"
title: "Fill wide screens and smooth dialog closing"
repo: ui-wms
product:
  - web
additions: 22
deletions: 12
---

The warehouse web app now uses the whole screen on large monitors, and closing a dialog no longer flashes black.

- **Full-width on big monitors:** On screens wider than about 1940px, the app previously shrank into a centered 1920px box with empty gaps on both sides and above the header. The layout now stretches edge to edge at every screen width; screens of 1920px and below look exactly as before
- **Cleaner dialog closing:** When a dialog closed, its tinted backdrop faded out through a flash of solid black. The navy tint now stays until the backdrop has fully faded, so closing a dialog is a smooth, single-step transition
- **No layout ripple:** Verified that page positions at common laptop sizes and screenshots at desktop and phone sizes are pixel-identical to before, so only the wide-screen gap and the closing flash changed
