---
date: "2026-11-02"
title: "Rebuild attendance dashboard with interactive 3D charts and inline filters"
repo: len-attendance
product:
  - web
additions: 2596
deletions: 374
---

The admin attendance dashboard got a full visual rebuild with a new generation of charts, and the filter bar was redesigned to sit directly on the page instead of hiding inside a popup.

- **Interactive 3D arrival map:** The old arrival heatmap is now a 3D terrain showing check-ins by weekday and hour for the whole period. Managers can drag to orbit the view, pinch or scroll to zoom, click any bar to fly in and see its exact numbers, or switch to a flat top-down heatmap view. Peak hours, busiest day, and the period total are summarized alongside it.
- **Daily performance rings:** Punctuality is now shown as three concentric goal rings (attendance, on-time rate, and accounted-for staff) for each of the last 7 working days. Pick any day to see its numbers, and a day with no check-ins is shown as incomplete rather than falsely scored at zero.
- **Pending requests as one bar:** The "needs review" card now shows pending leave, overtime, and correction requests as a single proportional bar, so it is immediately obvious which queue is the most backed up, with direct links into each list.
- **Filters inline on the toolbar:** Location and position filters are now removable chips that live in the same row as the date picker and period tabs, selected from an "Add filter" menu. The old search-and-paginate dropdown is gone: the full list of locations is always available in the menu, in both English and Indonesian.
