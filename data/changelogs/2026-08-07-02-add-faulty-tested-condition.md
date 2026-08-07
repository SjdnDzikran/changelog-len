---
date: "2026-08-07"
title: "Add 'Faulty' test result condition for inventory quality inspection"
repo: api-wms
product:
  - backend
  - web
additions: 273
deletions: 47
---

- **New "Faulty" condition:** Items can now be classified as "Faulty" during quality testing, alongside the existing "Good" and "Broken" categories. This gives warehouse teams a more precise way to label items that have partial defects or cosmetic issues but are not completely broken, making it easier to track and disposition items that may still be repairable.
- **Yellow warning badge:** Faulty items display with a distinct yellow badge across every inventory page and report, immediately distinguishable from Good (green) and Broken (red). This visual coding works in serial number views, monitoring tables, the inbound detail page, and the tested inventory detail modal.
- **Dashboard on-test breakdown updated:** The statistics cards on the main dashboard now show a three-way split of Good, Broken, and Faulty, so management can see quality outcomes across all three categories at a glance without drilling into individual reports.
- **Full reporting and upload coverage:** The new Faulty column appears in the inbound monitoring table, tested inventory rekap, per-material report, and per-serial-number view. Excel upload templates and validation messages have been updated to accept "Faulty" as a valid condition value, with instructions written in Indonesian for operators.
