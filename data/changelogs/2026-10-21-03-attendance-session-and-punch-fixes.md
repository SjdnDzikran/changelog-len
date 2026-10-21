---
date: "2026-10-21"
title: "Fix login sessions and make punch flow flow smoothly"
repo: len-attendance
product:
  - web
  - backend
additions: 39
deletions: 51
---

- **Sessions survive proxies:** The login "remember me" cookie is now stored on the site root instead of a narrow path, fixing sessions that silently failed to refresh when the web app proxies the API under a path prefix. Employees had been getting logged out mid-shift.
- **Straight to check-out:** After a successful check-in, the punch page now refreshes in place and shows the recorded punch above the form, which flips directly to check-out. Employees no longer need to leave the page and come back to clock out.
- **Overtime notes always visible:** The optional notes box on the overtime clock-out form is now a normal field instead of hidden behind an extra collapsible step.
