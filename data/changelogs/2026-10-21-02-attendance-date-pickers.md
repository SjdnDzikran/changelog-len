---
date: "2026-10-21"
title: "Add calendar date pickers across the attendance portal"
repo: len-attendance
product:
  - web
additions: 464
deletions: 40
---

Date filters throughout the attendance portal now use proper calendar popups instead of bare text boxes.

- **Calendar popups:** Every date filter now opens a visual calendar for picking a day, replacing the free-text date fields that were easy to mistype. Available on the admin attendance overview, the analytics dashboard, and all admin forms with a date field.
- **Date range selection:** Request lists (leave, overtime, work reports, and similar) get a two-month range picker: click the start day, click the end day, done. Clicking the selected range clears it.
- **Bilingual and validated:** The calendar displays in Indonesian or English following the app's language setting, respects minimum and maximum dates, and works in both required forms and URL-driven filters.
- **Toolbar fix:** Filter fields no longer overflow their card on narrow screens.
