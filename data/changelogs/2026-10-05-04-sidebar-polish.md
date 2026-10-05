---
date: "2026-10-05"
title: "Sleeker sidebar: readable profiles, tidy scrolling, smooth resizing"
repo: erp-len-ui
product:
  - web
additions: 335
deletions: 112
---

A pass of polish on the navigation sidebar so it looks and behaves right on every screen.

- **No more cropped profiles:** Long user names, roles and email addresses no longer get cut off at the drawer edge. Names wrap to two lines, roles and emails truncate neatly with the full value visible on hover, and the avatar gets a subtle ring
- **Working custom scrollbar:** The slim rounded scrollbar now actually appears in Chrome and Edge (a browser quirk previously forced the bulky grey native bar). It stays hidden until you hover the menu, keeping the sidebar clean
- **Clean separation:** A subtle divider now separates the profile card from the menu below it
- **Responsive drawer:** Resizing the window between desktop and mobile widths now switches the sidebar to the correct mode immediately, instead of needing a page reload to catch up
