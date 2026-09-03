---
date: "2026-09-03"
title: "Show field labels beside values in the mobile AWB list"
repo: erp-len-ui
product:
  - web
additions: 89
deletions: 9
---

On phones, the Airway Bill list hid the column headers and showed each row as a bare run of values, so staff had to guess which number was the AWB number, which was the date, and which was the recipient.

- **Labels beside every value:** Each row now displays its field label (AWB number, date, sender, recipient, destination, status) right next to the value, so shipment details are readable at a glance without guessing
- **Card-style rows:** On small screens, rows render as stacked cards instead of a cramped table, matching the layout already used on other operational pages
- **Nothing left unlabeled:** All columns keep their labels on mobile, including who created the AWB and the row's action buttons
