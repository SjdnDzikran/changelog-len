---
date: "2026-06-30"
title: "Add ETR Report with document export"
repo: len-approval-api
product:
  - backend
additions: 1390
deletions: 171
---

New reporting endpoints aggregate ETR numbers from BL Inbound, BL Outbound, and Pickup Domestic forms into a single searchable, filterable list with export capabilities.

- **Unified ETR search:** All three form types are combined into one list, searchable by keyword, form type, status, and date range
- **PDF document export:** Each ETR record exports as a formatted PDF with the LEN Logistics logo, a labeled document number row, a six-column general information grid, a material table with quantities and totals, and a centered approval journey history
- **Excel document export:** Both per-record detail sheets and bulk list exports use a bordered horizontal layout with grey label cells, frozen header rows, and automatic column widths
