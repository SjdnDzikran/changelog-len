---
date: "2026-11-17"
title: "CSV export alongside every PDF report"
repo: len-attendance
product:
  - web
additions: 1224
deletions: 622
---

Every report in the Attendance app that previously offered only a PDF download now also supports CSV, opening the data in Excel or Google Sheets with a couple of clicks.

- **CSV everywhere:** Attendance history, daily presence, overtime, visits, work reports, leave requests, permits, payroll runs, and the monthly team recap all gain an "Export CSV" option next to the existing PDF export
- **Spreadsheet-ready files:** Headers use translated, human-readable labels instead of raw field names, dates and times stay machine-friendly, money values export as plain numbers, and columns that hold no data are dropped automatically to keep files clean
- **Safe for Excel:** Text is properly quoted and formula characters are neutralized, so employee names or task descriptions can't be turned into spreadsheet formulas
- **Day-by-day team recap in rows:** The monthly team recap exports one row per employee with one column per day of the month written as words (Present, Late, Holiday) plus the period totals, mirroring the PDF layout
- **Unified export buttons:** Each report now uses one consistent export control offering PDF and CSV from the same menu; payslips keep PDF only since their layout is personal
