---
date: "2026-10-09"
title: "Make manifest dispatch safe from double clicks and stale pages"
repo: erp-len-ui
product:
  - web
additions: 1159
deletions: 154
---

The manifest pages now double-check everything before dispatching and guide the user with clear Indonesian messages instead of raw errors.

- **Fresh status before sending:** Before every departure the app re-reads the manifest's latest status from the server, so a manifest that already departed (or has no AWBs) is stopped with a specific message before anything is sent
- **Locked while working:** All edit buttons, AWB inputs and checkboxes freeze while a dispatch or AWB change is in progress, so a fast double click can no longer submit the same action twice
- **Honest outcomes:** If the connection drops mid-request, the page says the departure could not be confirmed and refreshes to show the real status, rather than showing a false success or a technical error
- **Reload prompt when data is stale:** If the page cannot refresh its data (for example a gateway hiccup), a warning banner with a "Muat ulang data manifest" button appears and dispatch is paused until the data is reloaded
