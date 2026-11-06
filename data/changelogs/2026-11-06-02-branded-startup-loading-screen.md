---
date: "2026-11-06"
title: "Replace the start-up loading screen with a branded progress page"
repo: ui-wms
product:
  - web
additions: 225
deletions: 83
---

Opening WMS no longer shows a bare black screen with a spinning ring: the app now starts on a polished branded loading page that tells users what is happening.

- **New loading screen:** The old black screen with the three-colour spinner is replaced by the login page's blue background and the WMS logo, which breathes softly while animated boxes stack up in its door and roll out
- **Real progress tracking:** A progress bar with a percentage moves through genuine milestones (app started, first page on screen) and only ever moves forward, above the caption "Preparing your warehouse…"
- **No more blank white gap:** The loading screen now stays up until the login page or the app is actually ready, then fades away, removing the brief flash of a blank white page that appeared between loading and the first screen
- **Handles slow connections:** If nothing has appeared after 20 seconds (very slow network or the server cannot be reached), the screen says "This is taking longer than usual" and offers a Reload button, instead of leaving signed-in users stranded on a blank white page
