---
date: "2026-11-05"
title: "Choose how many rows each table page shows"
repo: len-attendance
product:
  - web
additions: 584
deletions: 35
---

Admin and employee tables across the system now offer a rows-per-page selector, so long lists can be viewed a handful at a time or all at once instead of a fixed page size.

- **New selector on every list:** A "Rows per page" dropdown (5, 10, 20, or 50) now sits next to the page controls on employee, location, salary, payroll, notification, history, and request lists, and applies instantly without leaving the page
- **Sensible behavior on change:** Picking a new size returns you to page 1 while keeping any filters and sorting you had applied, and the choice stays in the page address so bookmarks and shared links show the same view
- **Pickers scale too:** The employee and location pickers used in forms (schedules, payroll, requests) gained the same control, useful when searching a large company directory
- **Reliable data handling:** The server accepts only the offered sizes and falls back to 10 for anything else, while exports can still request up to 100 rows at a time regardless of the on-screen choice
- **Consistent defaults:** Every table now starts at 10 rows per page, replacing the old mix of 10 and 20
