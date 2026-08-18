---
date: "2026-08-18"
title: "Fix Pickup Domestic date display and recover from stale page loads"
repo: len-approval-ui
product:
  - web
additions: 157
deletions: 9
---

Two reliability fixes that improve the day-to-day experience for approval users.

- **Correct pickup date:** The Pickup Domestic detail view now displays the actual request date from the system, instead of a placeholder value. Users reviewing or approving pickup requests will see the right date without confusion
- **Self-healing navigation:** If a user clicks into a form details page and sees a blank screen (caused by the browser loading an outdated cached version of the page), the app now detects this and automatically reloads the correct version. No more manual refresh needed
