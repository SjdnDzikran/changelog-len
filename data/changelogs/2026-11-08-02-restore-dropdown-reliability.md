---
date: "2026-11-08"
title: "Restore dropdown choices across TMS and user forms (version 1.35.5)"
repo: erp-len-ui
product:
  - web
additions: 1196
deletions: 42
---

After the UI redesign, dropdown choices could disappear entirely on several forms. This release makes them dependable again:

- **Choices always visible:** Searchable dropdowns on AWB, Booking, Manifest, DRS, user management, and master data forms now render a usable choice list immediately, even when the enhancement script loads slowly or fails. Previously the list could stay hidden while the choices were actually loaded.
- **Correct placement on phones:** Dropdown lists are now positioned within the visible screen even when the phone view is zoomed or shifted by the on-screen keyboard, so choices are never placed off-screen.
- **Broken pages fail the build:** An unresolvable page component now causes the build to fail instead of silently shipping a page element that renders as dead HTML, preventing this class of bug from reaching users again.
- **Regression protection:** New automated checks cover the dropdown fallback and popup placement, and they run in the deployment validation pipeline.
