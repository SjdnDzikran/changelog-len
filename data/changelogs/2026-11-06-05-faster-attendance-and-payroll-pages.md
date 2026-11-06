---
date: "2026-11-06"
title: "Make every attendance and payroll page noticeably snappier"
repo: len-attendance
product:
  - web
additions: 2247
deletions: 1278
---

A deep performance overhaul across the attendance app means pages react faster and stop flashing loading skeletons during everyday actions.

- **No more skeleton flashes when paging:** Flipping through pages of attendance history, request queues, employee directories, payroll archives and admin lists now swaps the rows in place, keeping the previous page visible until the next one arrives instead of tearing the table down to a loading skeleton
- **Only the right part of the page updates:** Clicking page numbers, sorting, refreshing or opening a record drawer no longer re-renders the whole screen; only the table that actually changed updates, which is most noticeable on the admin dashboard where charts stay still during a refresh that returns the same numbers
- **Smoother admin dashboard and clock:** The admin attendance dashboard, employee directory and request queues were rebuilt around this principle, and the kiosk's wall clock now updates by itself so the scanner screen beside it stops redrawing every second
- **Animated theme switch:** Toggling light/dark mode now uses a smooth reveal transition instead of an instant flip
